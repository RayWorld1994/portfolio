# L3 — Deployment

## Purpose
Build and deploy the Nitro-based TanStack Start app.

## Scope
Production build, hosting, and env configuration.

## Responsibilities
- `pnpm build` / `npm run build` → Node server under `dist/` (Nitro).
- Configure host env vars via the deployment platform (`process.env` on the server).
- See TanStack Intent `start-core/deployment` for platform presets.

## Dependencies
- `L2-API-Layer`
- `L2-Git-Workflow`
- README deploy section

## Exclusions
- Local-only DX.
- Feature animation tuning.

## Usage Examples
- Deploy `dist/` to Node host; or switch Nitro preset for Vercel/Netlify/CF.

## Best Practices
- Verify theme/SEO on production URL.
- Keep preview deploys for PRs when available.

## Common Mistakes
- Committing build artifacts.
- Exposing server secrets as `VITE_` vars.
