import { lazy, Suspense } from "react";
import HeroTyping from "./HeroTyping";

const HeroNetwork = lazy(() => import("./HeroNetwork"));
const HeroRubiksCube = lazy(() => import("./HeroRubiksCube"));

export default function Hero() {
	return (
		<section
			className="relative isolate overflow-hidden"
			aria-label="Introduction"
		>
			<div className="page-wrap grid min-h-[min(100vh,920px)] items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-12 lg:py-10">
				<div className="relative z-10 max-w-xl rise-in">
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

				<div className="relative isolate h-[min(58vw,360px)] w-full sm:h-[380px] lg:h-[min(70vh,520px)]">
					<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
						<Suspense fallback={null}>
							<HeroNetwork />
						</Suspense>
						<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[color-mix(in_oklab,var(--bg)_25%,transparent)] lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[color-mix(in_oklab,var(--bg)_40%,transparent)]" />
					</div>
					<Suspense fallback={null}>
						<HeroRubiksCube />
					</Suspense>
				</div>
			</div>
		</section>
	);
}
