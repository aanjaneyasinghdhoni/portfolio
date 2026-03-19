---
name: accessibility-audit
description: Audits a page or component for accessibility (WCAG 2.1 AA). Use when the user asks to check accessibility, a11y, or ARIA.
---

Audit against WCAG 2.1 AA across these 5 areas. Flag real issues with file and line references.

## 1. Keyboard Navigation
- All interactive elements reachable via Tab key
- Logical focus order matches visual order
- No keyboard traps (focus stuck inside a component)
- Visible focus ring on all focusable elements (not just outline:none)

## 2. ARIA & Semantics
- Buttons use `<button>`, links use `<a href>` — not `<div onclick>`
- Icon-only buttons have `aria-label`
- Images have meaningful `alt` (decorative images use `alt=""`)
- Form inputs have associated `<label>` or `aria-label`
- Landmarks present: `<main>`, `<nav>`, `<header>`, `<footer>`

## 3. Colour & Contrast
- Normal text: minimum 4.5:1 contrast ratio
- Large text (18px+ or 14px bold): minimum 3:1
- UI components and focus indicators: minimum 3:1
- Meaning never conveyed by colour alone

## 4. Motion & Animation
- `prefers-reduced-motion` respected — animations disabled or reduced
- No content flashing more than 3 times per second

## 5. Screen Reader Experience
- Page has a descriptive `<title>`
- Skip link present (`Skip to main content`)
- Dynamic content updates announced via `aria-live` where needed
- Tables have `<th>` with `scope`, `<caption>` where meaningful

## Output Format
For each issue:
- **[WCAG: criterion number]** **[SEVERITY: critical/major/minor]** — element — what's wrong — fix

End with: `AA COMPLIANT`, `MINOR FIXES NEEDED`, or `FAILS AA`.
