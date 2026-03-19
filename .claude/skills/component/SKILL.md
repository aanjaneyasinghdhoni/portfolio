---
name: component
description: Creates a new Astro component following this project's conventions. Use when the user asks to create a new section, component, or UI element.
---

Create a new `.astro` component in `src/components/`. Follow every rule below — no exceptions.

## File Structure
```astro
---
// TypeScript props interface (always explicit, never `any`)
interface Props {
  propName: string;
}
const { propName } = Astro.props;
---

<!-- HTML -->

<style>
/* Scoped CSS */
</style>
```

## Required Conventions

### CSS
- Use ONLY CSS variables — never hardcode colours, font names, or sizes
- All new containers use `.container` class for max-width and padding
- Section padding: `padding: 6rem 0`
- New sections need `id` attribute matching the nav anchor (e.g. `id="skills"`)

### Animations
- Wrap animatable elements with `data-reveal` (fade in on scroll)
- For staggered lists use `data-reveal-stagger` on the parent
- Always guard with `prefers-reduced-motion` check (already handled by `reveal.css`)

### Typography
- Section label: `<p class="section-label">// label text</p>`
- Section title: `<h2 class="section-title">TITLE</h2>`
- Mono text: add class `mono` — never inline `font-family`

### Accessibility
- Every `<img>` needs `alt`
- Every icon-only button needs `aria-label`
- Use semantic elements: `<article>`, `<section>`, `<time>`, `<address>`

### Design Patterns
- Cards: `background: var(--bg-elevated)`, `border: 1px solid var(--border)`
- Chamfered corner: `clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)`
- Hover lift: `transform: translateY(-2px)`, `border-color: var(--gold-dim)`
- Gold accent text: `color: var(--gold)` with `font-family: var(--font-mono)`

## After Creating
Remind the user to import and add the component to `src/pages/index.astro`.
