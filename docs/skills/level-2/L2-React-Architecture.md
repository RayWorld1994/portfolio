# L2 — React Architecture

## Purpose
Structure React 19 UI with clear boundaries and modern patterns.

## Scope
Component composition, state placement, client/server boundaries in TanStack Start.

## Responsibilities
- Keep presentational components pure when possible.
- Prefer route loaders / server functions over ad-hoc `useEffect` fetching.
- Use `startTransition` / `useDeferredValue` / `useEffectEvent` when appropriate; don't add `useMemo`/`useCallback` by default.

## Dependencies
- L1 skills
- Installed: `.agents/skills/vercel-react-best-practices`
- Pairs with `L2-TanStack-Router`, `L2-Performance`

## Exclusions
- Canvas/WebGL animation internals (`L3-Hero-Network`).
- Form library specifics beyond React patterns (`L2-Forms`).

## Usage Examples
- Feature section: route owns data; child components receive props.
- Theme: client-only toggle already in `ThemeToggle`.

## Best Practices
- Read Vercel React best-practices skill for perf anti-patterns.
- Avoid shared module mutable state on the server.

## Common Mistakes
- Fetching in `useEffect` when a loader/server fn fits.
- Giant god-components mixing layout, data, and animation.
