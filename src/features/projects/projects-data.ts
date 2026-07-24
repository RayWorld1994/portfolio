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
		id: "nba-ops",
		title: "NBA Basketball Operations Platform",
		summary:
			"Large-scale Angular platform for a professional NBA team — team analytics, player scouting, game reporting, and front-office workflows for NBA and G-League stakeholders.",
		tech: ["Angular", "TypeScript", "NgRx", "RxJS", "Angular Material", "D3"],
		href: "#contact",
		tint: "from-teal-400/30 to-cyan-500/10",
	},
	{
		id: "micro-frontend-perf",
		title: "Module Federation Performance",
		summary:
			"Improved dashboard performance in a micro-frontend architecture by lazy-loading heavy feature modules, centralizing route-level loading, and reducing duplicated UI logic across feature areas.",
		tech: ["Angular", "Module Federation", "Lazy loading", "TypeScript"],
		href: "#contact",
		tint: "from-emerald-400/25 to-teal-600/10",
	},
	{
		id: "ticketing-admin",
		title: "Sports & Entertainment Ticketing Admin",
		summary:
			"Enterprise Angular admin application supporting dozens of master-data screens, event workflows, and operational modules — with hardened HTTP errors, forms, and dependency upgrades.",
		tech: ["Angular", "CRUD modules", "Forms", "Azure DevOps"],
		href: "#contact",
		tint: "from-sky-400/20 to-teal-500/15",
	},
];
