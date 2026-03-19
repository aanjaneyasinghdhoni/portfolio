---
name: review
description: Industry-standard code review. Use when the user asks to review code, check a file, or audit changes.
---

Review the specified code across these 5 lenses. Be direct — flag real issues only, skip praise.

## 1. Security
- Unsanitised inputs, XSS, injection vectors
- Secrets or credentials hardcoded
- Overly broad permissions or trust boundaries

## 2. Correctness
- Logic bugs, off-by-one errors, unhandled edge cases
- Async/await misuse, race conditions
- Null/undefined not guarded where expected

## 3. Performance
- Unnecessary re-renders, redundant loops, N+1 queries
- Missing memoisation or caching where obvious
- Blocking operations on the main thread

## 4. Maintainability
- Functions doing more than one thing
- Magic numbers/strings without constants
- Code that will confuse the next developer in 6 months

## 5. Stack-Specific
- Follows conventions already established in this codebase
- No anti-patterns for the framework in use
- Accessibility: interactive elements labelled, semantic HTML used

## Output Format
For each issue found:
- **[SEVERITY: critical/major/minor]** — file:line — description — suggested fix

End with a one-line verdict: `PASS`, `PASS WITH NOTES`, or `NEEDS CHANGES`.
