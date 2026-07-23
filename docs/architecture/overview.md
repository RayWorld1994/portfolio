# Architecture Overview

## Product

**The Network** — an interactive developer portfolio. A living hexagonal
network visualizes growth across projects, skills, and experience.

Vision source: `.doc/The_Network_Portfolio_Blueprint.md`.

## Runtime stack

| Layer | Choice |
| --- | --- |
| App framework | TanStack Start (React 19) |
| Routing | TanStack Router (file routes in `src/routes`) |
| Styling | Tailwind CSS 4 + CSS variables in `src/styles.css` |
| UI primitives | shadcn/ui (add via `pnpm dlx shadcn@latest add …`) |
| Lint/format | Biome |
| Server adapter | Nitro |

Blueprint mentions of Angular are historical; this repo is React/TanStack.
See `docs/decisions/ADR-001-tanstack-start.md`.

## AI skill layers

See `docs/skills/README.md` and `.doc/AI_Skill_Architecture_Guide.md`.

- Level 1 always loaded via `.cursor/rules` / `AGENTS.md`
- Level 2/3 loaded on demand by reading matching files under `docs/skills/`

## Related vendor skills

- `.agents/skills/tanstack-router-best-practices`
- `.agents/skills/vercel-react-best-practices`
- TanStack Intent commands listed in `AGENTS.md`
