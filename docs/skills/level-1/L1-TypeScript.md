# L1 — TypeScript Standards

## Purpose
Keep TypeScript strict, inferred, and free of unsafe escapes.

## Scope
Language-level typing rules for TS/TSX in this repo.

## Responsibilities
- `strict` remains on; no `any` unless justified and localized.
- Prefer inference; avoid redundant annotations.
- Use `import type` for type-only imports (`verbatimModuleSyntax`).
- Validate external input with Zod.

## Dependencies
- `L1-Coding-Standards`

## Exclusions
- React component architecture patterns (`L2-React-Architecture`).
- Router type registration deep-dives (`L2-TanStack-Router` + TanStack Intent).

## Usage Examples
- Props: explicit props types for public components; infer locals.
- Validate external/runtime input with Zod at boundaries (forms, server fns).

## Best Practices
- Never cast to silence errors; fix the type.
- Prefer discriminated unions over optional boolean soup.
- Keep path aliases `#/*` and `@/*` pointing at `src/*`.

## Common Mistakes
- `as any` / non-null assertions as default escape hatches.
- Annotating every variable and fighting inference.
- Duplicating router types instead of using generated route APIs.
