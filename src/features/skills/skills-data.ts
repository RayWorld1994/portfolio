export type SkillNode = {
	id: string;
	label: string;
	x: number;
	y: number;
};

export type SkillEdge = {
	from: string;
	to: string;
};

export const skillNodes: SkillNode[] = [
	{ id: "typescript", label: "TypeScript", x: 320, y: 40 },
	{ id: "angular", label: "Angular", x: 120, y: 110 },
	{ id: "rxjs", label: "RxJS", x: 250, y: 90 },
	{ id: "ngrx", label: "NgRx", x: 380, y: 100 },
	{ id: "federation", label: "Module Federation", x: 180, y: 200 },
	{ id: "material", label: "Angular Material", x: 320, y: 190 },
	{ id: "react", label: "React", x: 480, y: 140 },
	{ id: "nextjs", label: "Next.js", x: 560, y: 220 },
	{ id: "redux", label: "Redux", x: 450, y: 250 },
	{ id: "query", label: "TanStack Query", x: 580, y: 310 },
	{ id: "nodejs", label: "Node.js", x: 220, y: 300 },
	{ id: "express", label: "Express", x: 340, y: 340 },
	{ id: "postgres", label: "PostgreSQL", x: 140, y: 380 },
	{ id: "tailwind", label: "Tailwind CSS", x: 480, y: 380 },
	{ id: "testing", label: "Jest / RTL", x: 360, y: 420 },
];

export const skillEdges: SkillEdge[] = [
	{ from: "typescript", to: "angular" },
	{ from: "typescript", to: "react" },
	{ from: "typescript", to: "nodejs" },
	{ from: "angular", to: "rxjs" },
	{ from: "rxjs", to: "ngrx" },
	{ from: "angular", to: "federation" },
	{ from: "angular", to: "material" },
	{ from: "react", to: "nextjs" },
	{ from: "react", to: "redux" },
	{ from: "react", to: "query" },
	{ from: "react", to: "tailwind" },
	{ from: "nodejs", to: "express" },
	{ from: "nodejs", to: "postgres" },
	{ from: "react", to: "testing" },
	{ from: "express", to: "postgres" },
];
