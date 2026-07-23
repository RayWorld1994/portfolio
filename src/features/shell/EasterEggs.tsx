import { useEffect, useState } from "react";

const KONAMI = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"b",
	"a",
] as const;

function isTypingTarget(target: EventTarget | null) {
	if (!(target instanceof HTMLElement)) {
		return false;
	}
	const tag = target.tagName;
	return (
		tag === "INPUT" ||
		tag === "TEXTAREA" ||
		tag === "SELECT" ||
		target.isContentEditable
	);
}

export default function EasterEggs() {
	const [terminalOpen, setTerminalOpen] = useState(false);

	useEffect(() => {
		let buffer: string[] = [];

		const onKeyDown = (event: KeyboardEvent) => {
			if (isTypingTarget(event.target)) {
				return;
			}

			if (event.key === "d" || event.key === "D") {
				const root = document.documentElement;
				const next = root.getAttribute("data-wireframe") !== "true";
				if (next) {
					root.setAttribute("data-wireframe", "true");
				} else {
					root.removeAttribute("data-wireframe");
				}
			}

			const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
			buffer = [...buffer, key].slice(-KONAMI.length);
			const matched = KONAMI.every((step, index) => buffer[index] === step);
			if (matched) {
				const root = document.documentElement;
				const enabled = root.getAttribute("data-debug") === "true";
				if (enabled) {
					root.removeAttribute("data-debug");
				} else {
					root.setAttribute("data-debug", "true");
				}
				buffer = [];
			}
		};

		const onLogoOpen = () => setTerminalOpen(true);

		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("network:open-terminal", onLogoOpen);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("network:open-terminal", onLogoOpen);
		};
	}, []);

	useEffect(() => {
		if (!terminalOpen) {
			return;
		}
		const onEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setTerminalOpen(false);
			}
		};
		window.addEventListener("keydown", onEscape);
		return () => window.removeEventListener("keydown", onEscape);
	}, [terminalOpen]);

	if (!terminalOpen) {
		return null;
	}

	return (
		<div className="terminal-overlay" role="presentation">
			<button
				type="button"
				className="absolute inset-0 cursor-default bg-transparent"
				aria-label="Close terminal overlay"
				onClick={() => setTerminalOpen(false)}
			/>
			<div
				className="terminal-panel relative z-10"
				role="dialog"
				aria-modal="true"
				aria-label="Terminal overlay"
			>
				<header>
					<span>erick@network:~</span>
					<button
						type="button"
						className="rounded-md px-2 py-1 text-[var(--text)] hover:bg-[var(--link-bg-hover)]"
						onClick={() => setTerminalOpen(false)}
					>
						close
					</button>
				</header>
				<pre>{`$ whoami
Erick — Frontend Specialist

$ cat mission.txt
Build living systems from connections.
Every node is a lesson. Every edge is growth.

$ hint
Konami → debug outlines
Press D → wireframe mode
`}</pre>
			</div>
		</div>
	);
}

export function openTerminalOverlay() {
	window.dispatchEvent(new Event("network:open-terminal"));
}
