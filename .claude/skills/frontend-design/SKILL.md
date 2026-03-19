---
name: frontend-design
description: Reviews or guides frontend UI/UX against industry design best practices. Use when the user asks to improve UI, review a component's design, or check design quality.
---

Evaluate or guide the design across these 6 lenses. Flag real issues only — be specific and actionable.

## 1. Visual Hierarchy
- Is the most important element the most prominent? (size, weight, contrast)
- Does the eye have a clear path: headline → subtext → action?
- Headings, body, labels — are they visually distinct?

## 2. Spacing & Layout
- Consistent spacing scale used (4px/8px grid system)?
- Enough whitespace — elements breathing, not cramped?
- Alignment: elements on a clear grid, nothing floating arbitrarily?

## 3. Typography
- Max 2 font families on a page
- Line height 1.5–1.8 for body text, 1.1–1.2 for headings
- Line length 60–80 characters for readable paragraphs

## 4. Colour & Contrast
- Text contrast ratio meets WCAG AA (4.5:1 normal, 3:1 large text)
- Colour not the only indicator of meaning (always pair with text/icon)
- Consistent use of design tokens — no hardcoded hex values

## 5. Responsiveness
- Works at 375px (mobile), 768px (tablet), 1280px+ (desktop)
- Touch targets minimum 44×44px on mobile
- No horizontal scroll on any viewport

## 6. Interaction & Motion
- Hover/focus states on all interactive elements
- Transitions 150–300ms — fast enough to feel responsive, slow enough to be seen
- Respects `prefers-reduced-motion` for animations

## Output Format
For each issue:
- **[SEVERITY: critical/major/minor]** — component/element — what's wrong — how to fix it

End with: `STRONG`, `GOOD WITH TWEAKS`, or `NEEDS REDESIGN`.
