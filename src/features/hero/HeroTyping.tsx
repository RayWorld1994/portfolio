import { useEffect, useState } from "react";

const PHRASES = [
	"I am Erick",
	"I am a Software Developer",
	"I build with React & Angular",
	"I am a Problem Solver",
	"I ship scalable UIs",
	"I am always learning",
] as const;

const TYPE_MS = 55;
const DELETE_MS = 32;
const HOLD_MS = 1400;

export default function HeroTyping() {
	const [text, setText] = useState<string>(PHRASES[0]);
	const [reduced, setReduced] = useState(false);

	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setReduced(media.matches);
		sync();
		media.addEventListener("change", sync);
		return () => media.removeEventListener("change", sync);
	}, []);

	useEffect(() => {
		if (reduced) {
			setText(PHRASES[PHRASES.length - 1]);
			return;
		}

		let phraseIndex = 0;
		let charIndex = PHRASES[0].length;
		let deleting = false;
		let timer = 0;

		const tick = () => {
			const phrase = PHRASES[phraseIndex];

			if (!deleting && charIndex < phrase.length) {
				charIndex += 1;
				setText(phrase.slice(0, charIndex));
				timer = window.setTimeout(tick, TYPE_MS);
				return;
			}

			if (!deleting && charIndex === phrase.length) {
				deleting = true;
				timer = window.setTimeout(tick, HOLD_MS);
				return;
			}

			if (deleting && charIndex > 0) {
				charIndex -= 1;
				setText(phrase.slice(0, charIndex));
				timer = window.setTimeout(tick, DELETE_MS);
				return;
			}

			deleting = false;
			phraseIndex = (phraseIndex + 1) % PHRASES.length;
			timer = window.setTimeout(tick, TYPE_MS);
		};

		timer = window.setTimeout(tick, HOLD_MS);
		return () => window.clearTimeout(timer);
	}, [reduced]);

	return (
		<p
			className="display-title m-0 min-h-[1.2em] text-2xl font-semibold tracking-tight text-[var(--accent)] sm:text-3xl"
			aria-live="polite"
		>
			<span>{text}</span>
			{!reduced ? <span className="typing-caret" aria-hidden="true" /> : null}
		</p>
	);
}
