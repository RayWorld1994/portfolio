# L1 — Folder Structure

## Purpose
Document where code and docs live so agents place files correctly.

## Scope
Repository layout conventions for `src/`, `docs/`, and tooling folders.

## Responsibilities
- Keep routes in `src/routes` (file-based TanStack Router).
- Shared UI in `src/components`.
- Shared helpers in `src/lib`.
- Env schema in `src/env.ts`.
- AI skills knowledge in `docs/skills/{level-1,level-2,level-3}`.
- Design tokens / ADRs in `docs/design-system` and `docs/decisions`.

## Dependencies
- `L1-Core-Principles`

## Exclusions
- Runtime behavior of frameworks (Level 2).
- Installed vendor skills under `.agents/skills` (reference, don't relocate).

## Usage Examples
```
src/
  components/     # shared UI
  lib/            # cn(), pure helpers
  routes/         # file routes + __root.tsx
  styles.css      # Tailwind + design tokens
  env.ts
  router.tsx
docs/
  skills/level-{1,2,3}/
  architecture/
  design-system/
  decisions/
.doc/             # product briefs / blueprints
```

## Best Practices
- Colocate feature modules under `src/features/<name>` when a feature grows beyond one component.
- Do not edit `src/routeTree.gen.ts` by hand.

## Common Mistakes
- Dumping one-off components into `routes/` when they belong in `components/` or `features/`.
- Creating parallel docs trees outside `docs/` without updating this skill.
