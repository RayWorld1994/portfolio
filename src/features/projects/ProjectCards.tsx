import { projects } from "./projects-data";

export default function ProjectCards() {
	return (
		<section id="projects" className="page-wrap px-4 py-24">
			<div className="mb-10 max-w-2xl">
				<p className="section-kicker mb-3">Projects</p>
				<h2 className="display-title m-0 text-3xl font-bold text-[var(--text)] sm:text-4xl">
					Selected work
				</h2>
				<p className="mt-3 text-[var(--text-muted)]">
					Interactive cards with lift, glow, and motion — placeholders ready to
					swap for real case studies.
				</p>
			</div>

			<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<article key={project.id} className="project-card flex flex-col">
						<div className="project-card__media">
							<div
								className={`project-card__media-inner bg-gradient-to-br ${project.tint} relative`}
							>
								<div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_30%_20%,var(--accent),transparent_45%),radial-gradient(circle_at_80%_70%,var(--accent-hover),transparent_40%)]" />
								<div className="absolute bottom-4 left-4 right-4">
									<p className="display-title m-0 text-lg font-semibold text-[var(--text)]">
										{project.title}
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-1 flex-col gap-4 p-5">
							<p className="m-0 text-sm leading-6 text-[var(--text-muted)]">
								{project.summary}
							</p>
							<ul className="m-0 flex list-none flex-wrap gap-2 p-0">
								{project.tech.map((tech) => (
									<li
										key={tech}
										className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--text)]"
									>
										{tech}
									</li>
								))}
							</ul>
							<div className="project-card__actions mt-auto">
								<a href={project.href} className="network-btn text-sm">
									Discuss this project
								</a>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
