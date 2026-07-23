# Design System — Tokens

Target palette from `.doc/The_Network_Portfolio_Blueprint.md`.
Current starter tokens in `src/styles.css` may still differ; migrate toward
these values as the Network UI lands.

## Dark mode

| Token | Value |
| --- | --- |
| Background | `#09090B` |
| Surface | `#111113` |
| Secondary surface | `#18181B` |
| Primary accent | `#38D9C7` |
| Primary hover | `#63F0DF` |
| Text | `#FAFAFA` |
| Secondary text | `#A1A1AA` |
| Borders | `rgba(255,255,255,.08)` |

## Light mode

| Token | Value |
| --- | --- |
| Background | `#F9FAFB` |
| Surface | `#FFFFFF` |
| Primary accent | `#14B8A6` |
| Hover | `#0D9488` |
| Text | `#111827` |
| Secondary text | `#6B7280` |

## Motion

- Theme transitions ≈ `400ms`
- Prefer network morphs over hard section fades
- Honor `prefers-reduced-motion`

## Typography (target)

| Role | Family |
| --- | --- |
| Headings | Space Grotesk |
| Body | Inter |

Note: the starter currently uses Fraunces + Manrope; replace when implementing
the Network design system.

## Language

Modern, minimal, futuristic, elegant. Inspired by Apple / Linear / Stripe.
Avoid overly cyberpunk treatment.
