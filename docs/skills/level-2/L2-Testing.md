# L2 — Testing

## Purpose
Define a pragmatic testing approach when tests are introduced.

## Scope
Unit/component/e2e strategy for the portfolio (scaffolding not yet present).

## Responsibilities
- Prefer testing user-observable behavior.
- Cover server fn validation and critical UI states.
- Keep animation tests light (reduced-motion path, not frame asserts).

## Dependencies
- L1 skills
- Domain skill under test

## Exclusions
- Visual design review.
- Deployment pipeline details (`L3-Deployment`).

## Usage Examples
- Contact schema unit tests.
- Router smoke: critical paths render.

## Best Practices
- Don't block portfolio iteration on 100% coverage.
- Colocate tests next to units or under `tests/`.

## Common Mistakes
- Snapshotting animated canvas frames.
- Testing implementation details of GSAP timelines.
