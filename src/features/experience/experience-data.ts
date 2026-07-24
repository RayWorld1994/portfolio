export type Experience = {
	id: string;
	company: string;
	role: string;
	period: string;
	location: string;
	projects: string[];
	technologies: string[];
	achievements: string[];
};

export const experiences: Experience[] = [
	{
		id: "applaudo-fe",
		company: "Applaudo Studios",
		role: "Frontend Developer",
		period: "Apr 2021 – Jan 2026",
		location: "San Salvador, El Salvador",
		projects: [
			"NBA basketball operations platform",
			"Module Federation dashboards",
			"Sports & entertainment ticketing admin",
		],
		technologies: [
			"Angular",
			"TypeScript",
			"NgRx",
			"RxJS",
			"Angular Material",
			"D3",
			"Module Federation",
		],
		achievements: [
			"Built features for team analytics, player scouting, game reporting, and front-office workflows",
			"Improved micro-frontend dashboard performance via lazy-loading and shared UI consolidation",
			"Hardened shared CRUD modules — HTTP errors, dialog/form edge cases, and security upgrades",
			"Collaborated with backend, QA, product, and design via Git, Azure DevOps, and CI/CD",
		],
	},
	{
		id: "applaudo-trainee",
		company: "Applaudo Studios",
		role: "Angular Trainee",
		period: "Nov 2019 – Feb 2020",
		location: "San Salvador, El Salvador",
		projects: ["Angular fundamentals lab", "Reusable component practice"],
		technologies: ["Angular", "TypeScript", "Git"],
		achievements: [
			"Practiced components, modules, services, data binding, forms, and routing",
			"Collaborated with senior developers on maintenance tasks and code review feedback",
		],
	},
];
