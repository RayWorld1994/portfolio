import { useEffect, useRef } from "react";
import * as THREE from "three";


const CUBIE_SIZE = 0.88;
const SPACING = 1;
const CUBE_SCALE = 0.78;
const MOVE_MS = 520;

function readThemeColors(): { base: number; highlight: number } {
	const root = getComputedStyle(document.documentElement);
	const accent = root.getPropertyValue("--accent").trim() || "#ff5e46";
	const hover = root.getPropertyValue("--accent-hover").trim() || "#ff8a78";

	return {
		base: Number.parseInt(accent.replace("#", ""), 16),
		highlight: Number.parseInt(hover.replace("#", ""), 16),
	};
}

/** Pixels → radians while dragging */
const DRAG_SENSITIVITY = 0.014;
/** Pointer speed (px/ms) → angular velocity */
const FORCE_GAIN = 0.00055;
const MAX_ANGULAR_VELOCITY = 0.42;
const MOMENTUM_DAMPING = 0.968;
const IDLE_SPIN_Y = 0.0035;
const IDLE_SPIN_X = 0.0012;
const COAST_THRESHOLD = 0.003;

type Axis = "x" | "y" | "z";

type Cubie = {
	mesh: THREE.Mesh;
	x: number;
	y: number;
	z: number;
};

type LayerMove = {
	axis: Axis;
	layer: -1 | 0 | 1;
	direction: 1 | -1;
};

const SOLVE_SEQUENCE: LayerMove[] = [
	{ axis: "y", layer: 1, direction: 1 },
	{ axis: "x", layer: 1, direction: 1 },
	{ axis: "y", layer: 1, direction: -1 },
	{ axis: "x", layer: 1, direction: -1 },
	{ axis: "z", layer: 1, direction: 1 },
	{ axis: "y", layer: 0, direction: -1 },
	{ axis: "z", layer: 1, direction: -1 },
];

function clamp(value: number, min: number, max: number) {
	return Math.min(max, Math.max(min, value));
}

function snapCubie(cubie: Cubie) {
	const { mesh } = cubie;
	mesh.position.x = Math.round(mesh.position.x / SPACING) * SPACING;
	mesh.position.y = Math.round(mesh.position.y / SPACING) * SPACING;
	mesh.position.z = Math.round(mesh.position.z / SPACING) * SPACING;
	mesh.rotation.set(0, 0, 0);

	cubie.x = Math.round(mesh.position.x / SPACING);
	cubie.y = Math.round(mesh.position.y / SPACING);
	cubie.z = Math.round(mesh.position.z / SPACING);
}

function buildCubies(
	group: THREE.Group,
	material: THREE.MeshStandardMaterial,
): { cubies: Cubie[]; geometry: THREE.BoxGeometry } {
	const geometry = new THREE.BoxGeometry(CUBIE_SIZE, CUBIE_SIZE, CUBIE_SIZE);
	const cubies: Cubie[] = [];

	for (let x = -1; x <= 1; x += 1) {
		for (let y = -1; y <= 1; y += 1) {
			for (let z = -1; z <= 1; z += 1) {
				const mesh = new THREE.Mesh(geometry, material);
				mesh.position.set(x * SPACING, y * SPACING, z * SPACING);
				group.add(mesh);
				cubies.push({ mesh, x, y, z });
			}
		}
	}

	return { cubies, geometry };
}

export default function HeroRubiksCube() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const reduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		const { base: cubeColor, highlight: cubeHighlight } = readThemeColors();

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
		camera.position.set(4.2, 3.4, 5.6);
		camera.lookAt(0, 0, 0);

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
			powerPreference: "high-performance",
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0);
		container.appendChild(renderer.domElement);

		const cubeGroup = new THREE.Group();
		cubeGroup.scale.setScalar(CUBE_SCALE);
		scene.add(cubeGroup);

		const material = new THREE.MeshStandardMaterial({
			color: cubeColor,
			emissive: cubeColor,
			emissiveIntensity: 0.14,
			metalness: 0.22,
			roughness: 0.4,
		});

		const { cubies, geometry } = buildCubies(cubeGroup, material);

		const ambient = new THREE.AmbientLight(0xffffff, 0.5);
		const keyLight = new THREE.DirectionalLight(cubeHighlight, 1.15);
		keyLight.position.set(4, 6, 5);
		const fillLight = new THREE.DirectionalLight(cubeColor, 0.45);
		fillLight.position.set(-5, 2, -3);
		scene.add(ambient, keyLight, fillLight);

		let raf = 0;
		let running = true;
		let visible = true;
		let isAnimating = false;
		let moveIndex = 0;
		let nextMoveAt = performance.now() + 1800;
		let dragActive = false;
		let lastPointerX = 0;
		let lastPointerY = 0;
		let lastPointerTime = 0;
		const angularVelocity = { x: 0, y: 0 };

		const resize = () => {
			const width = container.clientWidth;
			const height = container.clientHeight;
			if (width === 0 || height === 0) return;
			renderer.setSize(width, height, false);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		};

		const rotateLayer = (move: LayerMove) =>
			new Promise<void>((resolve) => {
				isAnimating = true;
				const pivot = new THREE.Group();
				cubeGroup.add(pivot);

				const layerCubies = cubies.filter(
					(cubie) => cubie[move.axis] === move.layer,
				);

				for (const cubie of layerCubies) {
					pivot.attach(cubie.mesh);
				}

				const target = (Math.PI / 2) * move.direction;
				const start = performance.now();

				const animateMove = (now: number) => {
					const progress = Math.min((now - start) / MOVE_MS, 1);
					const eased = 1 - (1 - progress) ** 3;
					pivot.rotation[move.axis] = target * eased;

					if (progress < 1) {
						requestAnimationFrame(animateMove);
						return;
					}

					pivot.rotation[move.axis] = target;
					for (const cubie of layerCubies) {
						cubeGroup.attach(cubie.mesh);
						snapCubie(cubie);
					}
					cubeGroup.remove(pivot);
					isAnimating = false;
					resolve();
				};

				requestAnimationFrame(animateMove);
			});

		const queueSolveMove = async () => {
			if (isAnimating || !visible || reduced) return;
			const move = SOLVE_SEQUENCE[moveIndex % SOLVE_SEQUENCE.length];
			moveIndex += 1;
			await rotateLayer(move);
		};

		const onPointerDown = (event: PointerEvent) => {
			dragActive = true;
			lastPointerX = event.clientX;
			lastPointerY = event.clientY;
			lastPointerTime = performance.now();
			angularVelocity.x = 0;
			angularVelocity.y = 0;
			container.setPointerCapture(event.pointerId);
		};

		const onPointerMove = (event: PointerEvent) => {
			if (!dragActive) return;

			const now = performance.now();
			const dt = Math.max(now - lastPointerTime, 1);
			const dx = event.clientX - lastPointerX;
			const dy = event.clientY - lastPointerY;
			const speed = Math.hypot(dx, dy) / dt;
			const forceBoost = 1 + Math.min(speed / 1.8, 2.8);

			cubeGroup.rotation.y += dx * DRAG_SENSITIVITY * forceBoost;
			cubeGroup.rotation.x += dy * DRAG_SENSITIVITY * forceBoost;

			angularVelocity.y = clamp(
				(dx / dt) * FORCE_GAIN * forceBoost,
				-MAX_ANGULAR_VELOCITY,
				MAX_ANGULAR_VELOCITY,
			);
			angularVelocity.x = clamp(
				(dy / dt) * FORCE_GAIN * forceBoost,
				-MAX_ANGULAR_VELOCITY,
				MAX_ANGULAR_VELOCITY,
			);

			lastPointerX = event.clientX;
			lastPointerY = event.clientY;
			lastPointerTime = now;
		};

		const onPointerUp = (event: PointerEvent) => {
			dragActive = false;
			container.releasePointerCapture(event.pointerId);
		};

		const step = (now: number) => {
			if (!running) return;

			if (!isAnimating && !reduced && visible && !dragActive && now >= nextMoveAt) {
				nextMoveAt = now + 2200 + Math.random() * 800;
				void queueSolveMove();
			}

			if (!dragActive && !reduced) {
				const coasting =
					Math.abs(angularVelocity.x) > COAST_THRESHOLD ||
					Math.abs(angularVelocity.y) > COAST_THRESHOLD;

				if (coasting) {
					cubeGroup.rotation.y += angularVelocity.y;
					cubeGroup.rotation.x += angularVelocity.x;
					angularVelocity.x *= MOMENTUM_DAMPING;
					angularVelocity.y *= MOMENTUM_DAMPING;
				} else {
					angularVelocity.x = 0;
					angularVelocity.y = 0;
					cubeGroup.rotation.y += IDLE_SPIN_Y;
					cubeGroup.rotation.x += IDLE_SPIN_X;
				}
			}

			renderer.render(scene, camera);
			raf = window.requestAnimationFrame(step);
		};

		resize();
		raf = window.requestAnimationFrame(step);

		const onResize = () => resize();

		const onVisibility = () => {
			visible = document.visibilityState === "visible";
		};

		const observer = new IntersectionObserver(
			([entry]) => {
				visible = entry.isIntersecting;
			},
			{ threshold: 0.05 },
		);
		observer.observe(container);

		container.addEventListener("pointerdown", onPointerDown);
		container.addEventListener("pointermove", onPointerMove);
		container.addEventListener("pointerup", onPointerUp);
		container.addEventListener("pointercancel", onPointerUp);
		window.addEventListener("resize", onResize);
		document.addEventListener("visibilitychange", onVisibility);

		return () => {
			running = false;
			window.cancelAnimationFrame(raf);
			container.removeEventListener("pointerdown", onPointerDown);
			container.removeEventListener("pointermove", onPointerMove);
			container.removeEventListener("pointerup", onPointerUp);
			container.removeEventListener("pointercancel", onPointerUp);
			window.removeEventListener("resize", onResize);
			document.removeEventListener("visibilitychange", onVisibility);
			observer.disconnect();

			material.dispose();
			geometry.dispose();
			renderer.dispose();
			container.removeChild(renderer.domElement);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="pointer-events-auto absolute top-1/2 right-[6%] z-10 h-[min(52vw,340px)] w-[min(52vw,340px)] -translate-y-1/2 cursor-grab touch-none active:cursor-grabbing sm:right-[8%] sm:h-[min(48vw,380px)] sm:w-[min(48vw,380px)] lg:h-96 lg:w-96"
			role="img"
			aria-label="Animated Rubik's cube — problem solving visualization. Drag to rotate."
		/>
	);
}
