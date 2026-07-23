import { useState } from "react";

type Experience = {
	id: string;
	company: string;
	role: string;
	period: string;
	projects: string[];
	technologies: string[];
	achievements: string[];
};

const experiences: Experience[] = [
	{
		id: "northwind",
		company: "Northwind Labs",
		role: "Frontend Engineer",
		period: "2022 — Present",
		projects: ["Edge Board", "Design token pipeline"],
		technologies: ["Angular", "RxJS", "TypeScript"],
		achievements: [
			"Led modular federation rollout across three product teams",
			"Cut interaction latency on dense tables by refining render paths",
		],
	},
	{
		id: "harbor",
		company: "Harbor Digital",
		role: "UI Developer",
		period: "2020 — 2022",
		projects: ["Client portals", "Component library v1"],
		technologies: ["Angular", "PrimeNG", "Sass"],
		achievements: [
			"Shipped first professional product to production",
			"Standardized accessible form patterns across apps",
		],
	},
	{
		id: "atelier",
		company: "Atelier Studio",
		role: "Junior Developer",
		period: "2019 — 2020",
		projects: ["Marketing sites", "Internal tools"],
		technologies: ["JavaScript", "CSS", "Angular"],
		achievements: [
			"Built foundational Angular skills on real client work",
			"Collaborated closely with design on motion and hierarchy",
		],
	},
];

export default function ExperienceNodes() {
	const [openId, setOpenId] = useState<string | null>(
		experiences[0]?.id ?? null,
	);

	return (
		<section id="experience" className="page-wrap px-4 py-24">
			<div className="mb-10 max-w-2xl">
				<p className="section-kicker mb-3">Experience</p>
				<h2 className="display-title m-0 text-3xl font-bold text-[var(--text)] sm:text-4xl">
					Companies as nodes
				</h2>
				<p className="mt-3 text-[var(--text-muted)]">
					Select a node to expand projects, technologies, and achievements.
				</p>
			</div>

			<div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
				<ul className="m-0 flex list-none flex-wrap gap-3 p-0 lg:flex-col">
					{experiences.map((item) => {
						const open = item.id === openId;
						return (
							<li key={item.id}>
								<button
									type="button"
									onClick={() => setOpenId(item.id)}
									className="w-full rounded-2xl border px-4 py-3 text-left transition"
									style={{
										borderColor: open
											? "color-mix(in oklab, var(--accent) 55%, var(--line))"
											: "var(--line)",
										background: open ? "var(--surface)" : "transparent",
										boxShadow: open ? "0 0 24px var(--glow)" : undefined,
									}}
									aria-expanded={open}
								>
									<span className="flex items-center gap-3">
										<span
											className="h-3 w-3 rounded-full"
											style={{
												background: open ? "var(--accent)" : "var(--surface-2)",
												boxShadow: open ? "0 0 12px var(--glow)" : undefined,
											}}
											aria-hidden="true"
										/>
										<span>
											<span className="block font-semibold text-[var(--text)]">
												{item.company}
											</span>
											<span className="block text-xs text-[var(--text-muted)]">
												{item.role} · {item.period}
											</span>
										</span>
									</span>
								</button>
							</li>
						);
					})}
				</ul>

				{experiences.map((item) =>
					item.id === openId ? (
						<div
							key={item.id}
							className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6"
						>
							<h3 className="display-title m-0 text-2xl font-semibold text-[var(--text)]">
								{item.company}
							</h3>
							<p className="mt-1 text-sm text-[var(--text-muted)]">
								{item.role} · {item.period}
							</p>

							<div className="mt-6 grid gap-5 sm:grid-cols-3">
								<div>
									<p className="section-kicker mb-2">Projects</p>
									<ul className="m-0 space-y-1 pl-4 text-sm text-[var(--text)]">
										{item.projects.map((project) => (
											<li key={project}>{project}</li>
										))}
									</ul>
								</div>
								<div>
									<p className="section-kicker mb-2">Technologies</p>
									<ul className="m-0 space-y-1 pl-4 text-sm text-[var(--text)]">
										{item.technologies.map((tech) => (
											<li key={tech}>{tech}</li>
										))}
									</ul>
								</div>
								<div>
									<p className="section-kicker mb-2">Achievements</p>
									<ul className="m-0 space-y-1 pl-4 text-sm text-[var(--text)]">
										{item.achievements.map((achievement) => (
											<li key={achievement}>{achievement}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					) : null,
				)}
			</div>
		</section>
	);
}
