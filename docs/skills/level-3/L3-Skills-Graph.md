# L3 — Skills Graph

## Purpose
Render skills as an interactive knowledge graph, not progress bars.

## Scope
Skills section graph interactions and data shape.

## Responsibilities
- Nodes = technologies; edges = relationships.
- Hover highlights connected subgraph.
- Example chain: Angular → RxJS → NgRx → Signals → PrimeNG → Module Federation.

## Dependencies
- `L2-React-Architecture`
- `L2-GSAP-Motion`
- `L2-Performance`

## Exclusions
- Career timeline (`L3-Timeline`).
- Project card hover (`L3-Project-Cards`).

## Usage Examples
- Static JSON/TS graph config under `src/features/skills/`.

## Best Practices
- Keep graph readable on mobile (simplify or list fallback).
- Don't fake proficiency percentages.

## Common Mistakes
- Progress bars "for now" that become permanent.
- Unreadable hairball with too many edges.
