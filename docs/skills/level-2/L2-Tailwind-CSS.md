# L2 — Tailwind CSS

## Purpose
Style with Tailwind 4 utilities and project CSS variables.

## Scope
Styling, tokens, and shadcn integration.

## Responsibilities
- Tokens live in `src/styles.css` (`:root` / `.dark` / `@theme inline`).
- Prefer semantic CSS variables over hard-coded hex in JSX.
- Use `cn()` for conditional classes.
- Target design system: see `docs/design-system/`.

## Dependencies
- L1 skills
- `L2-Theme-System`
- Blueprint: `.doc/The_Network_Portfolio_Blueprint.md`

## Exclusions
- Motion timelines (`L2-GSAP-Motion`).
- Accessibility semantics beyond focus styles (`L2-Accessibility`).

## Usage Examples
- Button hover: utility classes + CSS var accents.
- Add shadcn: `pnpm dlx shadcn@latest add button`.

## Best Practices
- Keep visual language modern/minimal; aqua accent, not purple-glow defaults.
- Animate theme changes ~400ms when touching theme tokens.

## Common Mistakes
- Inset hero cards fighting full-bleed network vision.
- Introducing a second unrelated palette mid-feature.
