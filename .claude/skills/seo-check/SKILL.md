---
name: seo-check
description: Audits SEO quality of a page or component. Use when the user asks to check SEO, meta tags, or discoverability.
---

Audit the specified page/file across these 5 areas. Flag real issues only — be specific.

## 1. Meta Tags
- `<title>` present, 50–60 characters, includes target keyword
- `<meta name="description">` present, 150–160 characters, compelling
- Canonical URL set if needed
- No duplicate titles or descriptions across pages

## 2. Open Graph & Social
- `og:title`, `og:description`, `og:image`, `og:type` all present
- `twitter:card`, `twitter:title`, `twitter:description` present
- OG image is 1200×630px (check if referenced)

## 3. Heading Structure
- One `<h1>` per page — contains primary keyword
- Logical heading order: h1 → h2 → h3, no skipping levels
- Headings describe content, not just style

## 4. Semantic HTML & Crawlability
- Meaningful `<alt>` on all images (not empty, not "image")
- Links have descriptive text (not "click here")
- `<main>`, `<nav>`, `<article>`, `<section>` used correctly
- No content hidden with `display:none` that should be indexed

## 5. Performance Signals (Core Web Vitals)
- Images have explicit `width` and `height` (prevents layout shift)
- Fonts preconnected (`<link rel="preconnect">`)
- Above-the-fold content not blocked by scripts

## Output Format
For each issue:
- **[SEVERITY: critical/major/minor]** — file:line or element — what's wrong — fix

End with: `SEO READY`, `MINOR FIXES NEEDED`, or `SIGNIFICANT GAPS`.
