# Portfolio AI Skills

Modular skills for consistent AI-assisted work. Source guide:
`.doc/AI_Skill_Architecture_Guide.md`.

## Workflow

1. Load **Level 1** (always).
2. Load only required **Level 2** domain skills.
3. Load only required **Level 3** feature skills.
4. Implement.
5. Drop specialized L2/L3 context after the task.

## Dependency flow

`Level 3 → Level 2 → Level 1` — never reverse.

## Token rules

- Never duplicate knowledge; reference other skills.
- Keep Level 1 lightweight.
- Prefer installed vendor skills (`.agents/skills/…`) and TanStack Intent
  (`AGENTS.md`) for library depth instead of copying APIs here.

## Catalog

### Level 1 — Core (always)

| Skill | File |
| --- | --- |
| Core Principles | [level-1/L1-Core-Principles.md](level-1/L1-Core-Principles.md) |
| Coding Standards | [level-1/L1-Coding-Standards.md](level-1/L1-Coding-Standards.md) |
| Folder Structure | [level-1/L1-Folder-Structure.md](level-1/L1-Folder-Structure.md) |
| TypeScript | [level-1/L1-TypeScript.md](level-1/L1-TypeScript.md) |

### Level 2 — Domain (on demand)

| Skill | File |
| --- | --- |
| React Architecture | [level-2/L2-React-Architecture.md](level-2/L2-React-Architecture.md) |
| TanStack Router | [level-2/L2-TanStack-Router.md](level-2/L2-TanStack-Router.md) |
| TanStack Query | [level-2/L2-TanStack-Query.md](level-2/L2-TanStack-Query.md) |
| Tailwind CSS | [level-2/L2-Tailwind-CSS.md](level-2/L2-Tailwind-CSS.md) |
| GSAP & Motion | [level-2/L2-GSAP-Motion.md](level-2/L2-GSAP-Motion.md) |
| Forms | [level-2/L2-Forms.md](level-2/L2-Forms.md) |
| Accessibility | [level-2/L2-Accessibility.md](level-2/L2-Accessibility.md) |
| Testing | [level-2/L2-Testing.md](level-2/L2-Testing.md) |
| Performance | [level-2/L2-Performance.md](level-2/L2-Performance.md) |
| Documentation | [level-2/L2-Documentation.md](level-2/L2-Documentation.md) |
| Git Workflow | [level-2/L2-Git-Workflow.md](level-2/L2-Git-Workflow.md) |
| API Layer | [level-2/L2-API-Layer.md](level-2/L2-API-Layer.md) |
| Theme System | [level-2/L2-Theme-System.md](level-2/L2-Theme-System.md) |

### Level 3 — Feature (specialized)

| Skill | File |
| --- | --- |
| Hero Network | [level-3/L3-Hero-Network.md](level-3/L3-Hero-Network.md) |
| Hero Typing | [level-3/L3-Hero-Typing.md](level-3/L3-Hero-Typing.md) |
| Skills Graph | [level-3/L3-Skills-Graph.md](level-3/L3-Skills-Graph.md) |
| Timeline | [level-3/L3-Timeline.md](level-3/L3-Timeline.md) |
| Project Cards | [level-3/L3-Project-Cards.md](level-3/L3-Project-Cards.md) |
| Contact Form | [level-3/L3-Contact-Form.md](level-3/L3-Contact-Form.md) |
| Theme Switcher | [level-3/L3-Theme-Switcher.md](level-3/L3-Theme-Switcher.md) |
| SEO | [level-3/L3-SEO.md](level-3/L3-SEO.md) |
| Analytics | [level-3/L3-Analytics.md](level-3/L3-Analytics.md) |
| Deployment | [level-3/L3-Deployment.md](level-3/L3-Deployment.md) |

## Skill schema

Every skill defines: Purpose, Scope, Responsibilities, Dependencies,
Exclusions, Usage Examples, Best Practices, Common Mistakes.
