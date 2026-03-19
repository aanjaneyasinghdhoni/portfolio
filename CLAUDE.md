# Claude Instructions — Aanjaneya Singh Dhoni Portfolio

## Project
Astro 4 portfolio site. Dark/gold design system. No UI framework — plain Astro components.

## Code Rules

### CSS
- Always use existing CSS variables (`var(--gold)`, `var(--text-muted)`, `var(--bg-elevated)`, etc.) — never hardcode colours or hex values
- Never add inline styles — use scoped `<style>` blocks in `.astro` files
- All new sections must be responsive — test at 768px breakpoint

### HTML / Accessibility
- Every `<img>` must have a meaningful `alt` attribute
- Every interactive element (`<button>`, `<a>`) must have an `aria-label` if it has no visible text
- Use semantic HTML — `<article>`, `<section>`, `<nav>`, `<time>`, `<main>` over generic `<div>`
- Maintain `data-reveal` or `data-reveal-stagger` on new section content for scroll animations

### TypeScript / Astro
- No implicit `any` — always type props interfaces explicitly
- Never leave `console.log` in committed code
- Prefer editing existing components over creating new ones

### Git
- Commit messages explain *why*, not just *what*
- Never commit `node_modules`, `.env`, or build output (`dist/`)
- Always check `git status` before committing

## Design System Quick Reference
| Token | Value |
|-------|-------|
| Primary font | `var(--font-body)` — Inter |
| Mono font | `var(--font-mono)` — JetBrains Mono |
| Hero font | `var(--font-hero)` — Bebas Neue |
| Section label | `.section-label` — mono, gold, 0.7rem, 0.25em tracking |
| Section title | `.section-title` — hero, clamp(2.5rem→4rem) |
| Container | `.container` — max-width 1100px, padding 0 2rem |

## File Structure
```
src/
  components/   — reusable Astro components
  layouts/      — BaseLayout.astro, BlogPostLayout.astro
  pages/        — index.astro, 404.astro, blog/
  content/blog/ — markdown articles
  styles/       — global.css, prose.css, reveal.css
```
