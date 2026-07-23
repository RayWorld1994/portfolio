# L3 — Hero Typing Animation

## Purpose
Implement the rotating "I am …" typing sequence with cursor.

## Scope
Hero text animation only.

## Responsibilities
Sequence loops: Erick → Engineer → Developer → Problem Solver → Frontend Specialist → always learning.
Blinking cursor; infinite repeat.

## Dependencies
- `L2-GSAP-Motion` or lightweight custom hook
- `L2-Accessibility`
- `L3-Hero-Network` (layout pairing)

## Exclusions
- Network canvas drawing.
- SEO title templates (`L3-SEO`).

## Usage Examples
- Left column: name + typing line + short intro + CTAs; right: network.

## Best Practices
- Ensure a non-animated textual fallback for reduced motion.
- Avoid layout shift when phrases change length (min-width/reserve space).

## Common Mistakes
- Using images of text.
- Extremely fast typing that fails readability.
