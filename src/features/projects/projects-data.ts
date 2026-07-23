export type Project = {
	id: string;
	title: string;
	summary: string;
	tech: string[];
	href: string;
	tint: string;
};

export const projects: Project[] = [
	{
		id: "network-os",
		title: "Network OS",
		summary:
			"A modular dashboard for mapping teams, services, and delivery signals across an organization.",
		tech: ["Angular", "RxJS", "NgRx"],
		href: "#contact",
		tint: "from-teal-400/30 to-cyan-500/10",
	},
	{
		id: "signal-studio",
		title: "Signal Studio",
		summary:
			"Design-system playground for composing accessible UI primitives with live theme tokens.",
		tech: ["React", "Tailwind", "TypeScript"],
		href: "#contact",
		tint: "from-emerald-400/25 to-teal-600/10",
	},
	{
		id: "edge-board",
		title: "Edge Board",
		summary:
			"Enterprise ops console focused on clarity under density — filters, timelines, and audit trails.",
		tech: ["Angular", "PrimeNG", "Module Federation"],
		href: "#contact",
		tint: "from-sky-400/20 to-teal-500/15",
	},
];
