import { lazy, Suspense } from "react";
import HeroTyping from "./HeroTyping";

const HeroNetwork = lazy(() => import("./HeroNetwork"));

export default function Hero() {
	return (
		<section
			className="relative isolate min-h-[min(100vh,920px)] overflow-hidden"
			aria-label="Introduction"
		>
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
					<Suspense fallback={null}>
						<HeroNetwork />
					</Suspense>
					<div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[color-mix(in_oklab,var(--bg)_55%,transparent)] to-transparent lg:from-[var(--bg)] lg:via-[color-mix(in_oklab,var(--bg)_35%,transparent)]" />
				</div>
			</div>

			<div className="page-wrap relative flex min-h-[min(100vh,920px)] items-center px-4 pb-20 pt-10">
				<div className="max-w-xl rise-in">
					<p className="section-kicker mb-4">The Network</p>
					<h1 className="display-title mb-4 text-5xl font-bold leading-[1.02] text-[var(--text)] sm:text-6xl lg:text-7xl">
						Erick
					</h1>
					<div className="mb-6">
						<HeroTyping />
					</div>
					<p className="mb-8 max-w-md text-base leading-7 text-[var(--text-muted)] sm:text-lg">
						Every connection, project, and experience shapes who I am. This
						living network is a map of continuous growth — modern, minimal, and
						built to explore.
					</p>
					<div className="flex flex-wrap gap-3">
						<a href="#projects" className="network-btn">
							View projects
						</a>
						<a href="#contact" className="network-btn network-btn-ghost">
							Get in touch
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
