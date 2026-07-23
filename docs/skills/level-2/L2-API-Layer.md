# L2 — API Layer

## Purpose
Server functions and HTTP handlers for portfolio backends.

## Scope
TanStack Start server fns and route `server.handlers`.

## Responsibilities
- Prefer `createServerFn` for app mutations/queries from UI.
- Use route `server.handlers` for public HTTP endpoints/webhooks.
- Validate inputs with Zod.
- Use `src/env.ts` for secrets/config.

## Dependencies
- `L1-TypeScript`
- `L2-TanStack-Router`
- TanStack Intent: `start-core/server-functions`, `server-routes`

## Exclusions
- Client cache policy (`L2-TanStack-Query`).
- Form UX (`L2-Forms`).

## Usage Examples
- Contact POST server fn with Zod schema.
- Health check GET server route.

## Best Practices
- Keep secrets server-only (no `VITE_` for private keys).
- Return typed, minimal payloads.

## Common Mistakes
- Fetching own API routes from the server when a server fn suffices.
- Trusting raw `FormData` without parse/validate.
