import { useMemo, useState } from "react";
import { skillEdges, skillNodes } from "./skills-data";

function neighborsOf(id: string) {
	const set = new Set<string>([id]);
	for (const edge of skillEdges) {
		if (edge.from === id) {
			set.add(edge.to);
		}
		if (edge.to === id) {
			set.add(edge.from);
		}
	}
	return set;
}

export default function SkillsGraph() {
	const [active, setActive] = useState<string | null>(null);
	const highlight = useMemo(
		() => (active ? neighborsOf(active) : null),
		[active],
	);

	return (
		<section id="skills" className="page-wrap px-4 py-24">
			<div className="mb-10 max-w-2xl">
				<p className="section-kicker mb-3">Skills</p>
				<h2 className="display-title m-0 text-3xl font-bold text-[var(--text)] sm:text-4xl">
					Knowledge as a graph
				</h2>
				<p className="mt-3 text-[var(--text-muted)]">
					Hover a technology to illuminate connected tools — no progress bars,
					just relationships.
				</p>
			</div>

			<div className="overflow-x-auto rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-6">
				<svg
					viewBox="0 0 640 460"
					role="img"
					aria-label="Interactive skills knowledge graph"
					className="mx-auto h-auto w-full min-w-[520px] max-w-4xl"
					onMouseLeave={() => setActive(null)}
				>
					{skillEdges.map((edge) => {
						const from = skillNodes.find((n) => n.id === edge.from);
						const to = skillNodes.find((n) => n.id === edge.to);
						if (!from || !to) {
							return null;
						}
						const lit =
							!highlight ||
							(highlight.has(edge.from) && highlight.has(edge.to));
						return (
							<line
								key={`${edge.from}-${edge.to}`}
								x1={from.x}
								y1={from.y}
								x2={to.x}
								y2={to.y}
								stroke="var(--accent)"
								strokeOpacity={lit ? (highlight ? 0.7 : 0.28) : 0.08}
								strokeWidth={lit && highlight ? 2.2 : 1.2}
							/>
						);
					})}

					{skillNodes.map((node) => {
						const lit = !highlight || highlight.has(node.id);
						const focused = active === node.id;
						return (
							<g key={node.id} transform={`translate(${node.x} ${node.y})`}>
								<title>{node.label}</title>
								{/* SVG hover highlight; keyboard via chip buttons below */}
								{/* biome-ignore lint/a11y/noStaticElementInteractions: decorative SVG hover affordance */}
								<circle
									r={focused ? 18 : 14}
									fill="var(--surface-2)"
									stroke="var(--accent)"
									strokeWidth={focused ? 2.5 : 1.5}
									opacity={lit ? 1 : 0.25}
									className="cursor-pointer"
									onMouseEnter={() => setActive(node.id)}
									style={{
										filter: focused
											? "drop-shadow(0 0 10px var(--glow))"
											: undefined,
									}}
								/>
								<text
									y={36}
									textAnchor="middle"
									fill="var(--text)"
									fontSize="12"
									fontWeight={600}
									opacity={lit ? 1 : 0.3}
									className="pointer-events-none"
								>
									{node.label}
								</text>
							</g>
						);
					})}
				</svg>

				<ul className="mt-4 flex flex-wrap gap-2">
					{skillNodes.map((node) => (
						<li key={node.id}>
							<button
								type="button"
								className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1 text-xs font-semibold text-[var(--text)]"
								onClick={() =>
									setActive((current) => (current === node.id ? null : node.id))
								}
								aria-pressed={active === node.id}
							>
								{node.label}
							</button>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
