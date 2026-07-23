import { useEffect, useRef, useState } from "react";

export type Milestone = {
	id: string;
	year: string;
	title: string;
	detail: string;
};

export const milestones: Milestone[] = [
	{
		id: "2019",
		year: "2019",
		title: "Started Angular",
		detail:
			"Began building structured frontend applications and component systems.",
	},
	{
		id: "2020",
		year: "2020",
		title: "First Professional Project",
		detail:
			"Shipped production UI and learned how teams turn ideas into releases.",
	},
	{
		id: "2022",
		year: "2022",
		title: "Enterprise Applications",
		detail:
			"Scaled complex domains, design systems, and long-lived product surfaces.",
	},
	{
		id: "2024",
		year: "2024",
		title: "React + Architecture",
		detail:
			"Focused on type-safe routing, composition, and maintainable frontend architecture.",
	},
	{
		id: "future",
		year: "Future",
		title: "Cloud Architect",
		detail:
			"Expanding toward resilient cloud systems that connect products end to end.",
	},
];

export default function Timeline() {
	const [activeId, setActiveId] = useState(milestones[0]?.id ?? "");
	const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

	useEffect(() => {
		const elements = milestones
			.map((item) => itemRefs.current[item.id])
			.filter((el): el is HTMLLIElement => Boolean(el));

		if (!elements.length) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				const top = visible[0];
				if (top?.target instanceof HTMLElement) {
					const id = top.target.dataset.milestoneId;
					if (id) {
						setActiveId(id);
					}
				}
			},
			{ rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.5, 0.8] },
		);

		for (const el of elements) {
			observer.observe(el);
		}
		return () => observer.disconnect();
	}, []);

	return (
		<section id="about" className="page-wrap px-4 py-24">
			<div className="mb-10 max-w-2xl">
				<p className="section-kicker mb-3">About</p>
				<h2 className="display-title m-0 text-3xl font-bold text-[var(--text)] sm:text-4xl">
					A timeline of connections
				</h2>
				<p className="mt-3 text-[var(--text-muted)]">
					Each milestone lights up as you scroll — nodes in a longer path toward
					systems thinking and craft.
				</p>
			</div>

			<ol className="relative m-0 list-none space-y-6 border-l border-[var(--line)] pl-0">
				{milestones.map((item) => {
					const active = item.id === activeId;
					return (
						<li
							key={item.id}
							data-milestone-id={item.id}
							ref={(el) => {
								itemRefs.current[item.id] = el;
							}}
							className="relative ml-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 transition-[border-color,box-shadow,transform] duration-300 sm:p-6"
							style={{
								borderColor: active
									? "color-mix(in oklab, var(--accent) 55%, var(--line))"
									: undefined,
								boxShadow: active
									? "0 0 0 1px var(--glow), 0 18px 40px var(--glow)"
									: undefined,
								transform: active ? "translateX(4px)" : undefined,
							}}
						>
							<span
								className="absolute -left-[1.9rem] top-7 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg)]"
								style={{
									background: active ? "var(--accent)" : "var(--surface-2)",
									boxShadow: active ? "0 0 16px var(--glow)" : undefined,
								}}
								aria-hidden="true"
							/>
							<p className="section-kicker mb-2">{item.year}</p>
							<h3 className="display-title m-0 text-xl font-semibold text-[var(--text)]">
								{item.title}
							</h3>
							<p className="mt-2 mb-0 text-sm leading-6 text-[var(--text-muted)] sm:text-base">
								{item.detail}
							</p>
						</li>
					);
				})}
			</ol>
		</section>
	);
}
