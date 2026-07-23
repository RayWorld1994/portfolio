# L3 — Analytics

## Purpose
Privacy-aware measurement of portfolio engagement.

## Scope
Analytics loading and event conventions.

## Responsibilities
- Load analytics deferred / after idle when added.
- Prefer privacy-friendly providers.
- Track meaningful events (CTA, project open), not every mousemove.

## Dependencies
- `L2-Performance`
- `L3-SEO`

## Exclusions
- Server log drains.
- Theme implementation.

## Usage Examples
- Event: `project_open`, `contact_submit_success`.

## Best Practices
- Gate on consent if required by target audience/region.
- Never block rendering on analytics.

## Common Mistakes
- Injecting heavy tags in `__root` without deferral.
- PII in event payloads.
