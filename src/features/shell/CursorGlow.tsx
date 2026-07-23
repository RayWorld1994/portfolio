import { useEffect, useState } from "react";

export default function CursorGlow() {
	const [pos, setPos] = useState({ x: -999, y: -999 });
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const reduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const coarse = window.matchMedia("(pointer: coarse)").matches;
		if (reduced || coarse) {
			return;
		}

		setVisible(true);

		const onMove = (event: PointerEvent) => {
			setPos({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("pointermove", onMove, { passive: true });
		return () => {
			window.removeEventListener("pointermove", onMove);
		};
	}, []);

	if (!visible) {
		return null;
	}

	return (
		<div
			className="cursor-glow"
			aria-hidden="true"
			style={{ left: pos.x, top: pos.y }}
		/>
	);
}
