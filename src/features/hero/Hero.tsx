import { lazy, Suspense } from "react";
import HeroTyping from "./HeroTyping";

const HeroNetwork = lazy(() => import("./HeroNetwork"));
const HeroRubiksCube = lazy(() => import("./HeroRubiksCube"));

export default function Hero() {
	return (
		<section
			className="relative isolate min-h-[min(100vh,920px)] overflow-hidden"
			aria-label="Introduction"
		>
			{/* Full right-half background — edge to edge on the right */}
			<div className="pointer-events-none absolute inset-y-0 right-0 left-0 -z-10 lg:left-1/2">
				<Suspense fallback={null}>
					<HeroNetwork />
				</Suspense>
				<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[color-mix(in_oklab,var(--bg)_20%,transparent)] to-transparent lg:bg-gradient-to-r lg:from-[var(--bg)] lg:via-[color-mix(in_oklab,var(--bg)_35%,transparent)] lg:to-transparent" />
			</div>

			{/* Copy */}
			<div className="page-wrap relative z-10 flex items-center px-4 py-16 lg:min-h-[min(100vh,920px)] lg:py-10 lg:pr-[min(50%,560px)]">
				<div className="max-w-xl rise-in">
					<p className="section-kicker mb-4">Software Developer</p>
					<h1 className="display-title mb-4 text-5xl font-bold leading-[1.02] text-[var(--text)] sm:text-6xl lg:text-7xl">
						Erick García
					</h1>
					<div className="mb-6">
						<HeroTyping />
					</div>
					<p className="mb-8 max-w-md text-base leading-7 text-[var(--text-muted)] sm:text-lg">
						Software Developer with 5 years of experience building scalable web
						applications — from Angular enterprise platforms to React and
						Node.js full-stack solutions. Based in San Salvador, El Salvador.
					</p>
					<div className="flex flex-wrap gap-3">
						<a href="#experience" className="network-btn">
							View experience
						</a>
						<a href="#contact" className="network-btn network-btn-ghost">
							Get in touch
						</a>
					</div>
				</div>
			</div>

			{/* Cube — centered in the full right 50vw (not just the grid column) */}
			<div className="relative z-10 flex h-[min(58vw,360px)] w-full items-center justify-center px-4 pb-16 lg:pointer-events-none lg:absolute lg:inset-y-0 lg:left-1/2 lg:h-auto lg:w-1/2 lg:justify-center lg:px-0 lg:pb-0">
				<Suspense fallback={null}>
					<HeroRubiksCube />
				</Suspense>
			</div>
		</section>
	);
}
