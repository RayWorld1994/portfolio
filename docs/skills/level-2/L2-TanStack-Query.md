# L2 — TanStack Query

## Purpose
Client async state, caching, and integration with route loaders when Query is introduced.

## Scope
TanStack Query usage patterns for this portfolio (add only when needed).

## Responsibilities
- Prefer route loaders for simple page data.
- Introduce Query for shared/client-refetched/interactive datasets.
- Align query keys with resource identity; dehydrate/hydrate if SSR needs it.

## Dependencies
- `L2-TanStack-Router`
- `L2-API-Layer`
- `L2-Performance`

## Exclusions
- Server function implementation details without caching concerns.
- UI form state (`L2-Forms`).

## Usage Examples
- Skills graph remote data: loader seeds + Query for client filters.
- Contact submit: mutation via server fn, not Query unless tracking lists.

## Best Practices
- Don't add Query until there is a clear cache/sharing need.
- Use `ensureQueryData` in loaders when combining Router + Query.

## Common Mistakes
- Installing Query "by default" for static portfolio content.
- Duplicate fetch in loader and `useQuery` without coordination.
