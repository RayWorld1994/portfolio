export type Skill = {
	id: string;
	label: string;
	iconSlug: string;
};

export type SkillPage = {
	id: string;
	skills: Skill[];
};

/** Skills per view — 5 columns × 2 rows, like the reference layout. */
export const SKILLS_PER_PAGE = 10;

/** Brand icons from Simple Icons — https://simpleicons.org */
const MONO_ICON_SLUGS = new Set(["azuredevops", "visualstudiocode"]);

export function skillIconUrl(slug: string) {
	if (slug === "azuredevops" || slug === "visualstudiocode") {
		return `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;
	}

	return `https://cdn.simpleicons.org/${slug}`;
}

export function skillIconIsMono(slug: string) {
	return MONO_ICON_SLUGS.has(slug);
}

export const skills: Skill[] = [
	{ id: "typescript", label: "TypeScript", iconSlug: "typescript" },
	{ id: "javascript", label: "JavaScript", iconSlug: "javascript" },
	{ id: "html5", label: "HTML5", iconSlug: "html5" },
	{ id: "css3", label: "CSS3", iconSlug: "css" },
	{ id: "sql", label: "SQL", iconSlug: "mysql" },
	{ id: "angular", label: "Angular", iconSlug: "angular" },
	{ id: "react", label: "React", iconSlug: "react" },
	{ id: "nextjs", label: "Next.js", iconSlug: "nextdotjs" },
	{ id: "rxjs", label: "RxJS", iconSlug: "reactivex" },
	{ id: "ngrx", label: "NgRx", iconSlug: "ngrx" },
	{ id: "redux", label: "Redux", iconSlug: "redux" },
	{ id: "context-api", label: "Context API", iconSlug: "react" },
	{ id: "react-router", label: "React Router", iconSlug: "reactrouter" },
	{ id: "tanstack-query", label: "TanStack Query", iconSlug: "reactquery" },
	{ id: "nodejs", label: "Node.js", iconSlug: "nodedotjs" },
	{ id: "express", label: "Express", iconSlug: "express" },
	{ id: "postgresql", label: "PostgreSQL", iconSlug: "postgresql" },
	{ id: "rest-api", label: "REST API", iconSlug: "express" },
	{
		id: "angular-material",
		label: "Angular Material",
		iconSlug: "materialdesign",
	},
	{ id: "bootstrap", label: "Bootstrap", iconSlug: "bootstrap" },
	{ id: "primeng", label: "PrimeNG", iconSlug: "primeng" },
	{ id: "tailwind", label: "Tailwind CSS", iconSlug: "tailwindcss" },
	{ id: "sass", label: "Sass", iconSlug: "sass" },
	{ id: "less", label: "Less", iconSlug: "less" },
	{ id: "d3", label: "D3", iconSlug: "d3" },
	{
		id: "module-federation",
		label: "Module Federation",
		iconSlug: "webpack",
	},
	{ id: "jest", label: "Jest", iconSlug: "jest" },
	{
		id: "rtl",
		label: "React Testing Library",
		iconSlug: "testinglibrary",
	},
	{ id: "git", label: "Git", iconSlug: "git" },
	{ id: "github", label: "GitHub", iconSlug: "github" },
	{ id: "vite", label: "Vite", iconSlug: "vite" },
	{ id: "vscode", label: "VS Code", iconSlug: "visualstudiocode" },
	{ id: "cursor", label: "Cursor", iconSlug: "cursor" },
	{ id: "azure-devops", label: "Azure DevOps", iconSlug: "azuredevops" },
];

export function chunkSkills(items: Skill[], size: number): SkillPage[] {
	const pages: SkillPage[] = [];

	for (let index = 0; index < items.length; index += size) {
		const slice = items.slice(index, index + size);
		pages.push({
			id: `page-${pages.length + 1}`,
			skills: slice,
		});
	}

	return pages;
}

export const skillPages = chunkSkills(skills, SKILLS_PER_PAGE);
