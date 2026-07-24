import { useEffect, useRef, useState } from "react";

export type Milestone = {
	id: string;
	year: string;
	title: string;
	detail: string;
};

export const milestones: Milestone[] = [
	{
		id: "2013",
		year: "2013 – 2019",
		title: "Industrial Engineering",
		detail:
			"Universidad Centroamericana José Simeón Cañas (UCA), La Libertad, El Salvador — analytical foundations for systems thinking and delivery.",
	},
	{
		id: "2019",
		year: "2019 – 2020",
		title: "Angular Trainee · Applaudo Studios",
		detail:
			"Built Angular fundamentals — components, modules, services, forms, routing — and collaborated with seniors on reusable components and Git workflows.",
	},
	{
		id: "2021",
		year: "2021 – 2026",
		title: "Frontend Developer · Applaudo Studios",
		detail:
			"Shipped large-scale Angular platforms for NBA basketball operations and sports ticketing admin — Module Federation, NgRx, RxJS, Material, and D3.",
	},
	{
		id: "2024",
		year: "Growing stack",
		title: "React, Next.js & Node.js",
		detail:
			"Expanding production-ready skills across React, Next.js, Redux, TanStack Query, Express, SQL, and PostgreSQL with a focus on clean architecture.",
	},
	{
		id: "future",
		year: "Next",
		title: "Maintainable full-stack systems",
		detail:
			"Continuing to connect frontend craft with backend fundamentals — performance, API design, and cross-functional delivery.",
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
					From industrial engineering to enterprise Angular platforms — each
					milestone is a node in how I build software today.
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
