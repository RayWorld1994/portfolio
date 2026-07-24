import { lazy, Suspense } from "react";
import HeroTyping from "./HeroTyping";

const HeroNetwork = lazy(() => import("./HeroNetwork"));
const HeroRubiksCube = lazy(() => import("./HeroRubiksCube"));

export default function Hero() {
	return (
		<section className="hero-section" aria-label="Introduction">
			<div className="hero-section__bg" aria-hidden="true">
				<Suspense fallback={null}>
					<HeroNetwork />
				</Suspense>
				<div className="hero-section__bg-fade" />
			</div>

			<div className="page-wrap hero-section__grid px-4">
				<div className="hero-section__copy rise-in">
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

				<div className="hero-section__visual">
					<Suspense fallback={null}>
						<HeroRubiksCube />
					</Suspense>
				</div>
			</div>
		</section>
	);
}
