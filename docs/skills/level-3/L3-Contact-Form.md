# L3 — Contact Form

## Purpose
Ship the contact section and submission pipeline.

## Scope
Contact UI + server handling + success/error states.

## Responsibilities
- Fields: name, email, message (minimum).
- Zod + server fn.
- Optional: illuminate network on successful send.

## Dependencies
- `L2-Forms`
- `L2-API-Layer`
- `L2-Accessibility`

## Exclusions
- Analytics conversion events detail (`L3-Analytics`).
- Deployment env wiring beyond env skill notes.

## Usage Examples
- `/contact` section or route with progressive enhancement.

## Best Practices
- Rate-limit server side when exposed publicly.
- Don't leak whether an inbox exists via error text.

## Common Mistakes
- Client-only mailto as the only path without disclosing it.
- Storing messages without spam strategy.
