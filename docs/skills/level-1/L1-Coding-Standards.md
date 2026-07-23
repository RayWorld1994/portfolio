# L1 — Coding Standards

## Purpose
Establish shared coding conventions for readable, consistent contributions.

## Scope
Formatting, naming, imports, components, comments, and PR hygiene across the repo.

## Responsibilities
- Follow Biome (`pnpm check` / `npm run check`) for format/lint.
- Match existing file style.
- Name components `PascalCase`, hooks `useX`, utilities `camelCase`.
- Keep diffs focused; no drive-by refactors or unsolicited markdown files.

## Dependencies
- `L1-Core-Principles`
- `L1-TypeScript`
- `L1-Folder-Structure`

## Exclusions
- Domain patterns (React/Router/Query) — see Level 2.
- Feature animation specs — see Level 3.

## Usage Examples
- New UI component: place under `src/components`, use `cn()` from `#/lib/utils`, prefer existing tokens.
- Server work: use `createServerFn` patterns from `L2-API-Layer`.

## Best Practices
- Prefer `#/*` imports for `src`.
- Delete dead code you introduce.
- Shadcn: `pnpm dlx shadcn@latest add <component>`.

## Common Mistakes
- Mixing import alias styles without reason.
- Disabling Biome rules to silence real issues.
- Hand-editing `src/routeTree.gen.ts`.
