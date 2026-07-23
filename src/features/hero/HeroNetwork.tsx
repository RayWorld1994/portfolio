import { useEffect, useRef } from "react";

type Node = {
	x: number;
	y: number;
	neighbors: number[];
	energy: number;
};

function mulberry32(seed: number) {
	let state = seed;
	return () => {
		state += 0x6d2b79f5;
		let t = state;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

function buildHexGrid(width: number, height: number, spacing: number) {
	const nodes: Node[] = [];
	const cols = Math.ceil(width / spacing) + 2;
	const rows = Math.ceil(height / (spacing * 0.86)) + 2;
	const indexAt = (col: number, row: number) => row * cols + col;

	for (let row = 0; row < rows; row += 1) {
		for (let col = 0; col < cols; col += 1) {
			const offset = row % 2 === 0 ? 0 : spacing * 0.5;
			nodes.push({
				x: col * spacing + offset - spacing,
				y: row * spacing * 0.86 - spacing,
				neighbors: [],
				energy: 0,
			});
		}
	}

	for (let row = 0; row < rows; row += 1) {
		for (let col = 0; col < cols; col += 1) {
			const i = indexAt(col, row);
			const candidates =
				row % 2 === 0
					? [
							[col + 1, row],
							[col, row + 1],
							[col - 1, row + 1],
						]
					: [
							[col + 1, row],
							[col, row + 1],
							[col + 1, row + 1],
						];

			for (const [c, r] of candidates) {
				if (c < 0 || r < 0 || c >= cols || r >= rows) {
					continue;
				}
				const j = indexAt(c, r);
				nodes[i].neighbors.push(j);
				nodes[j].neighbors.push(i);
			}
		}
	}

	return nodes;
}

function readAccent(): string {
	return (
		getComputedStyle(document.documentElement)
			.getPropertyValue("--network-lit")
			.trim() || "#38d9c7"
	);
}

export default function HeroNetwork() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}

		const ctx = canvas.getContext("2d");
		if (!ctx) {
			return;
		}

		const reduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const seed = (Date.now() % 1_000_000) + Math.floor(Math.random() * 10_000);
		const rand = mulberry32(seed);

		let nodes: Node[] = [];
		let raf = 0;
		let running = true;
		let visible = true;
		let cursor = 0;
		let hopTimer = 0;
		let width = 0;
		let height = 0;

		const resize = () => {
			const parent = canvas.parentElement;
			if (!parent) {
				return;
			}
			const rect = parent.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			width = rect.width;
			height = rect.height;
			canvas.width = Math.max(1, Math.floor(width * dpr));
			canvas.height = Math.max(1, Math.floor(height * dpr));
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			nodes = buildHexGrid(width, height, 28);
			cursor = Math.floor(rand() * nodes.length);
			nodes[cursor].energy = 1;
		};

		const draw = () => {
			ctx.clearRect(0, 0, width, height);
			const accent = readAccent();

			ctx.lineWidth = 1;
			for (let i = 0; i < nodes.length; i += 1) {
				const node = nodes[i];
				for (const neighborIndex of node.neighbors) {
					if (neighborIndex <= i) {
						continue;
					}
					const neighbor = nodes[neighborIndex];
					const glow = Math.max(node.energy, neighbor.energy);
					ctx.globalAlpha = glow > 0.05 ? 0.15 + glow * 0.55 : 0.1;
					ctx.strokeStyle = accent;
					ctx.beginPath();
					ctx.moveTo(node.x, node.y);
					ctx.lineTo(neighbor.x, neighbor.y);
					ctx.stroke();
				}
			}

			for (const node of nodes) {
				const lit = node.energy > 0.04;
				ctx.globalAlpha = lit ? 0.25 + node.energy * 0.75 : 0.16;
				ctx.fillStyle = accent;
				const radius = lit ? 2.2 + node.energy * 2.2 : 1.5;
				ctx.beginPath();
				ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
				ctx.fill();

				if (lit) {
					ctx.globalAlpha = node.energy * 0.35;
					ctx.beginPath();
					ctx.arc(node.x, node.y, 8 + node.energy * 10, 0, Math.PI * 2);
					ctx.fill();
				}
			}

			ctx.globalAlpha = 1;
		};

		const step = (now: number) => {
			if (!running || !visible) {
				return;
			}

			for (const node of nodes) {
				node.energy = Math.max(0, node.energy - 0.012);
			}

			if (now > hopTimer) {
				const current = nodes[cursor];
				if (current?.neighbors.length) {
					const next =
						current.neighbors[Math.floor(rand() * current.neighbors.length)];
					cursor = next;
					nodes[cursor].energy = 1;
					// soft trail on previous neighbors
					for (const n of current.neighbors) {
						nodes[n].energy = Math.max(nodes[n].energy, 0.35);
					}
				} else {
					cursor = Math.floor(rand() * nodes.length);
					nodes[cursor].energy = 1;
				}
				hopTimer = now + 90 + rand() * 160;
			}

			draw();
			raf = window.requestAnimationFrame(step);
		};

		resize();
		draw();

		if (!reduced) {
			raf = window.requestAnimationFrame(step);
		}

		const onResize = () => {
			resize();
			draw();
		};

		const onVisibility = () => {
			visible = document.visibilityState === "visible";
			if (visible && !reduced && running) {
				raf = window.requestAnimationFrame(step);
			}
		};

		const observer = new IntersectionObserver(
			([entry]) => {
				visible = entry.isIntersecting;
				if (visible && !reduced && running) {
					raf = window.requestAnimationFrame(step);
				}
			},
			{ threshold: 0.05 },
		);
		observer.observe(canvas);

		window.addEventListener("resize", onResize);
		document.addEventListener("visibilitychange", onVisibility);

		return () => {
			running = false;
			window.cancelAnimationFrame(raf);
			window.removeEventListener("resize", onResize);
			document.removeEventListener("visibilitychange", onVisibility);
			observer.disconnect();
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="pointer-events-none absolute inset-0 h-full w-full"
			role="img"
			aria-label="Animated hexagonal network visualization"
		/>
	);
}
