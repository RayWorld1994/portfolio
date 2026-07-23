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
	{ id: "angular", label: "Angular", x: 120, y: 80 },
	{ id: "rxjs", label: "RxJS", x: 260, y: 50 },
	{ id: "ngrx", label: "NgRx", x: 400, y: 80 },
	{ id: "signals", label: "Signals", x: 520, y: 140 },
	{ id: "primeng", label: "PrimeNG", x: 280, y: 170 },
	{ id: "federation", label: "Module Federation", x: 430, y: 220 },
	{ id: "typescript", label: "TypeScript", x: 160, y: 240 },
	{ id: "react", label: "React", x: 300, y: 300 },
	{ id: "router", label: "TanStack Router", x: 460, y: 310 },
	{ id: "tailwind", label: "Tailwind CSS", x: 200, y: 360 },
	{ id: "architecture", label: "Architecture", x: 360, y: 390 },
];

export const skillEdges: SkillEdge[] = [
	{ from: "angular", to: "rxjs" },
	{ from: "rxjs", to: "ngrx" },
	{ from: "ngrx", to: "signals" },
	{ from: "angular", to: "primeng" },
	{ from: "angular", to: "federation" },
	{ from: "typescript", to: "angular" },
	{ from: "typescript", to: "react" },
	{ from: "react", to: "router" },
	{ from: "react", to: "tailwind" },
	{ from: "react", to: "architecture" },
	{ from: "router", to: "architecture" },
	{ from: "signals", to: "architecture" },
];
