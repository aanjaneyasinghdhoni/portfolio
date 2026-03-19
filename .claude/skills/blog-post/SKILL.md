---
name: blog-post
description: Writes a blog post for the portfolio in Aanjaneya's established style. Use when the user asks to write a new article or blog post.
---

Write a complete blog post as a `.md` file for `src/content/blog/`. Follow these rules exactly.

## Voice & Tone
- Written as a security professional, not an academic — direct, confident, no fluff
- Lead with the problem or finding, not background
- Technical depth: assume the reader knows cybersecurity basics
- Use concrete examples, real incident names, framework IDs (MITRE ATLAS, OWASP, CVE numbers)

## Structure (always follow this order)
1. **Hook** — one punchy paragraph that states why this matters now
2. **Context** — brief background (1–2 paragraphs max)
3. **Main sections** — use `## H2` for major sections, `### H3` for sub-points
4. **Code/commands** — in fenced code blocks with language tag
5. **Takeaways or precautions** — always end with what the reader should *do*
6. **Closing line** — one sentence that lands the message

## Frontmatter (required)
```yaml
---
title: "Title in sentence case — specific, not generic"
description: "1–2 sentences, 150 chars max, includes the core finding"
pubDate: YYYY-MM-DD
tags: ["relevant", "tags", "from-existing-taxonomy"]
draft: false
readingTime: "X min read"
---
```

## Existing Tag Taxonomy
`ai-security`, `rogue-ai`, `mitre-atlas`, `agentic-ai`, `threat-analysis`,
`bug-bounty`, `web-security`, `cloud-security`, `zero-trust`, `recon`

## Style Rules
- No "In conclusion" or "In summary" — just write the conclusion
- No rhetorical questions as headers
- Tables over bullet lists when comparing 3+ items
- Prefer active voice: "attackers exploited" not "was exploited by attackers"
