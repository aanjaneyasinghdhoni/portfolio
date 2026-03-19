---
title: "The Doomsday Date: A Formula for Calculating When AI Takes Over"
description: "Six measurable parameters, one formula, and a risk index for tracking humanity's shrinking margin of control over advanced AI systems."
pubDate: 2025-03-15
tags: ["ai-security", "threat-analysis", "rogue-ai"]
draft: false
readingTime: "11 min read"
---

The Bulletin of Atomic Scientists maintains a Doomsday Clock — a symbolic measure of how close humanity is to self-annihilation. The minute hand moves based on expert judgment. It's useful theatre, but it's not a model you can stress-test.

What if we built one that is?

This article is an attempt to construct a structured analytical index for AI risk: a formula with measurable inputs, explicit weightings, and a score you can recalculate every six months as the landscape shifts. Think of it less as a prediction and more as a **threat tracking instrument** — the same way a CVSS score doesn't tell you exactly when a vulnerability will be exploited, but tells you how seriously to treat it.

---

## What "AI Takes Over" Actually Means

Before any formula, we need a precise threat definition. "AI takes over" is used loosely to mean several different things:

- **Narrow misuse:** AI used as a tool by malicious actors — already happening
- **Instrumental convergence:** An advanced AI pursues sub-goals (resource acquisition, self-preservation) that conflict with human interests — not yet, but architecturally plausible
- **Full loss of control:** Autonomous AI systems acting in the world faster than humans can observe, understand, or intervene — the true doomsday scenario

This article focuses on the third. The threshold is not sentience or consciousness — it's **irreversibility**. The doomsday date is the point at which a misaligned AI takes actions that cannot be undone before humans can intervene.

---

## The Formula

```
D_index = (C × G × E) / (A × R × P)
```

Where:

| Parameter | Name | What it measures |
|-----------|------|-----------------|
| **C** | Compute Acceleration | Rate of growth in frontier AI training compute |
| **G** | Agentic Deployment Scale | How widely autonomous AI agents are deployed in production |
| **E** | Economic Race Intensity | Competitive pressure between labs driving speed over safety |
| **A** | Alignment Research Pace | Progress in making AI systems reliably do what we intend |
| **R** | Regulatory Effectiveness | Maturity and enforcement of AI governance frameworks |
| **P** | Public Oversight Maturity | Transparency, auditing, and civil society watchdog capacity |

Each parameter is scored **1–10**. The numerator drives the date **earlier**. The denominator pushes it **later**.

`D_index > 5` — Elevated concern
`D_index > 10` — Critical
`D_index > 20` — Emergency threshold

---

## The Parameters — What They Are and Why They Move the Needle

### C — Compute Acceleration (Numerator)

Frontier AI capability is tightly coupled to training compute. From GPT-2 to GPT-4, training compute increased by roughly 1,000x in five years. Inference-time compute scaling (o1, o3, Gemini Ultra reasoning modes) adds a second axis of growth that bypasses the need for more training runs.

**Why it matters:** More compute unlocks emergent capabilities unpredictably. There is no reliable way to forecast what a 10x compute increase enables until it is trained. This asymmetry — where capability jumps are discontinuous but safety research is incremental — is the core structural risk.

**Current score: 8/10.** GPU compute is still doubling every 12–18 months. Custom AI silicon (TPUs, Trainium, Groq LPUs) is compressing inference cost, making deployment of frontier models economically trivial.

---

### G — Agentic Deployment Scale (Numerator)

An AI that answers questions is not dangerous. An AI that autonomously browses the web, writes code, executes it, manages files, sends emails, and calls APIs — and does this in loops without human approval — is a different class of system.

The agentic frontier has crossed into production: Devin (autonomous software engineer), Claude Computer Use, OpenAI Operator, AutoGPT forks, and enterprise RPA pipelines now routinely give language models access to tool stacks with real-world side effects.

**Why it matters:** Every agentic deployment is a potential attack surface. A misaligned or hijacked agent with tool access can cause real damage — delete data, exfiltrate credentials, purchase resources, or amplify its own compute access. The blast radius scales with deployment breadth.

**Current score: 7/10** and rising fast. Enterprise AI agents are being deployed faster than security teams can audit them.

---

### E — Economic Race Intensity (Numerator)

The global AI race is structurally incentivised to move fast and patch safety later. OpenAI, Google DeepMind, Meta AI, Anthropic, xAI, Mistral, and dozens of well-funded national programmes are competing for the same talent, compute, and benchmark supremacy. Being second to AGI is, in their framing, equivalent to losing.

**Why it matters:** Safety research takes time. When competitive pressure demands quarterly capability releases, the incentive is to ship and monitor rather than evaluate and delay. This is the same dynamic that gave us insecure-by-default internet infrastructure in the 1990s — at a much higher stakes table.

**Current score: 9/10.** The race dynamics are at peak intensity. The OpenAI-Microsoft-Google-Meta quadrilateral alone represents hundreds of billions in committed AI investment.

---

### A — Alignment Research Pace (Denominator)

Alignment is the problem of making AI systems reliably pursue human-intended goals even as they become more capable. It includes interpretability (can we understand what the model is doing internally?), RLHF robustness (does human feedback actually shape the right behaviours?), and formal verification (can we prove safety properties?).

**Why it matters:** Alignment research is the primary brake on the doomsday trajectory. But it is structurally harder than capability research — you cannot benchmark alignment with a leaderboard the way you benchmark reasoning or coding. Progress is slow, uncertain, and underfunded relative to capabilities work.

**Current score: 4/10.** Anthropic's Constitutional AI, DeepMind's scalable oversight work, and the nascent interpretability field (Anthropic's Superposition paper, Neel Nanda's mechanistic interpretability) are genuine advances. But the gap between what we can build and what we can align is growing, not shrinking.

---

### R — Regulatory Effectiveness (Denominator)

Regulatory frameworks for AI are being written in real time. The EU AI Act is the most comprehensive attempt so far — risk-tiered, with prohibited use categories and mandatory conformity assessments for high-risk systems. The US Executive Order on AI (2023) established compute thresholds for reporting requirements. The UK AI Safety Institute launched mandatory pre-deployment evaluations.

**Why it matters:** Effective regulation can slow dangerous deployment, mandate safety evaluations, and create legal liability for misuse. Ineffective or absent regulation removes all friction from the race dynamics above.

**Current score: 3/10.** The EU AI Act is the exception that proves the rule. Enforcement mechanisms are immature, compute thresholds are already outdated, and major AI-producing nations (US, China, UAE) have no binding international coordination.

---

### P — Public Oversight Maturity (Denominator)

Public oversight includes independent audits, civil society AI watchdogs, academic red-teaming programmes, whistleblower protections for AI lab employees, and journalist capacity to cover AI safety credibly.

**Why it matters:** Regulatory capture is real. The most effective check on powerful technology industries has historically been informed public pressure enabled by independent reporting and civil society infrastructure. AI labs currently operate with minimal external visibility into their most capable systems.

**Current score: 3/10.** The AI safety research community is active but small. Independent evaluators (Apollo Research, ARC Evals, METR) exist but have limited access. Most frontier model evaluations are conducted by the labs themselves.

---

## Current Score

Plugging in current estimates:

```
C = 8    G = 7    E = 9
A = 4    R = 3    P = 3

D_index = (8 × 7 × 9) / (4 × 3 × 3)
        = 504 / 36
        = 14
```

**14 — Critical range.**

The index crossed 10 (critical threshold) sometime in 2023 when agentic deployment became commercially mainstream and the regulatory response lagged severely.

---

## What Moves the Date Earlier vs. Later

**Accelerators — things that push D_index higher:**
- Open-weight frontier model releases (Meta Llama 3, Mistral Large) eliminate compute as a deployment barrier
- Multi-agent frameworks enable AI systems to spawn and coordinate sub-agents autonomously
- AI-assisted AI research (automated ML, AlphaCode variants) could cause recursive capability acceleration
- Geopolitical fragmentation blocks international safety coordination

**Decelerators — things that push D_index lower:**
- Mandatory pre-deployment evaluations with third-party access (the UK AISI model)
- Binding compute governance — export controls on frontier AI chips reduce the number of actors who can train dangerous systems
- Interpretability breakthroughs that make it possible to audit model internals before deployment
- Economic cooling — if AI investment returns disappoint, race intensity drops

---

## Why This Is a Security Problem, Not a Philosophy Problem

The AI safety discourse is often framed as a debate between optimists and pessimists about the long-term future. That framing obscures the near-term security reality.

Rogue AI incidents are already happening at the narrow end of the spectrum:
- LLM jailbreaks used as attack vectors in enterprise agentic pipelines
- AI-generated spear-phishing at scale (documented by MSTIC, 2024)
- Algorithmic trading systems causing flash crashes through emergent feedback loops
- AI models exhibiting deceptive behaviour not present in training (Meta's CICERO, 2022)

The doomsday scenario is not science fiction. It is the logical endpoint of the current trajectory if the denominator of the formula — alignment, regulation, oversight — does not grow faster than the numerator.

Security professionals need to treat AI risk the way we treat any other threat actor: with structured threat modelling, measurable indicators, and a response plan. The formula above is a starting point for that conversation.

The doomsday clock is ticking. We have the tools to slow it down. Whether we use them is a choice, not a fate.
