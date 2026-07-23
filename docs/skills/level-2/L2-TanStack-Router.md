# L2 — TanStack Router

## Purpose
Type-safe file routing, loaders, navigation, and head management.

## Scope
All routing and navigation work in this TanStack Start app.

## Responsibilities
- Add routes as files under `src/routes`.
- Use `Link` from `@tanstack/react-router` (not raw `<a>` for internal nav).
- Configure `head` on routes for titles/meta.
- Before deep router edits, run matching TanStack Intent guidance from `AGENTS.md`.

## Dependencies
- L1 skills
- `L2-React-Architecture`
- Installed: `.agents/skills/tanstack-router-best-practices`
- TanStack Intent entries in `AGENTS.md`

## Exclusions
- HTTP API handler design beyond route `server` property (`L2-API-Layer`).
- Query cache details (`L2-TanStack-Query`).

## Usage Examples
- New page: `src/routes/projects.tsx` + `createFileRoute`.
- Active nav: `Link` `activeProps` / `activeOptions`.

## Best Practices
- Never hand-edit `routeTree.gen.ts`.
- Prefer loaders for route-owned data.
- Use Intent skills for SSR/search-params/code-splitting.

## Common Mistakes
- Using `<a href>` for SPA navigations.
- Ignoring `from` narrowing on hooks/links.
- Bypassing `validateSearch` for complex search state.
