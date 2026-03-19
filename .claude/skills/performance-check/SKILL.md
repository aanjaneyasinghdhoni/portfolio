---
name: performance-check
description: Audits frontend performance of a page or component. Use when the user asks to check performance, speed, or Core Web Vitals.
---

Audit performance across these 5 areas. Focus on user-perceived speed and Core Web Vitals.

## 1. Loading (LCP — Largest Contentful Paint)
- Hero image or above-fold content: is it lazy-loaded? (it shouldn't be — eager load LCP element)
- Fonts: preconnected and preloaded if critical?
- Render-blocking scripts in `<head>` without `defer` or `async`?
- Images: explicit `width` and `height` set to prevent layout shift?

## 2. Interactivity (INP — Interaction to Next Paint)
- Event listeners on scroll/resize debounced or throttled?
- Heavy computation on main thread (should be in Web Worker)?
- IntersectionObserver used instead of scroll events for reveal animations?

## 3. Layout Stability (CLS — Cumulative Layout Shift)
- Images and embeds have reserved space (width/height or aspect-ratio)
- Fonts loaded without causing text reflow (font-display: swap or optional)
- Dynamic content injected above existing content?

## 4. Assets
- Images: appropriate format (WebP/AVIF over PNG/JPG where possible)
- Images: sized for their display size, not oversized
- CSS/JS: unused code that could be removed or code-split?
- Third-party scripts (analytics, fonts): async/deferred?

## 5. Caching & Network
- Static assets have long cache headers (check if using CDN/Netlify/Vercel)
- Fonts loaded from Google Fonts? Consider self-hosting for performance
- Multiple small requests that could be consolidated?

## Output Format
For each issue:
- **[SEVERITY: critical/major/minor]** — file/element — what's wrong — fix

End with estimated impact: `HIGH IMPACT FIXES AVAILABLE`, `MINOR GAINS POSSIBLE`, or `WELL OPTIMISED`.
