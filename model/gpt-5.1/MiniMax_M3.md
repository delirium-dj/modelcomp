# GPT-5.1 — MiniMax M3 findings

> **Stem:** GPT-5.1 (slug `gpt-5.1`)
> **Official model ID:** `gpt-5.1` (OpenAI API; explicit tier IDs `gpt-5.1-instant`, `gpt-5.1-thinking`, `gpt-5.1-pro`), `opencode/gpt-5.1` (OpenCode Zen)
> **Provider:** OpenAI
> **Window:** **400,000 tokens total** (~272K input + 128K output, per `meta.json`); per WhatLLM analysis, the Instant + Thinking tier sizes were 128K context (vs Kimi K2 Thinking's 256K)
> **Modalities:** Text, image in; text out
> **Release date:** 2025-11-12
> **License:** Proprietary (closed weights; OpenAI API + Azure + Microsoft Foundry + ChatGPT)
> **Price (list):** **$1.25 input / $0.125 cached / $10.00 output** per 1M (tiered $1.25–$10)
> **Knowledge cutoff:** September 2024
> **Family:** Instant (conversational) + Thinking (deeper reasoning) + Pro (test-time compute) split
> **Persona selector:** 8-style (Professional, Friendly, Quirky, etc.) rolling out in ChatGPT
> **Status:** **Deprecated March 11, 2026 in ChatGPT** (per OpenAI release notes); **Deprecated on 2026-10-01** per coolhandlabs; **scheduled for shutdown April 1, 2027**. Replacement: **gpt-6-sol**
> **Date of research:** 2026-10-17

## Identity & lineage

GPT-5.1 was **OpenAI's November 12, 2025 upgrade to the GPT-5 router flagship** — the first OpenAI release to **productize the Instant / Thinking split as separate SKUs**. The launch was positioned as an "iterative GPT-5 refresh" (per WhatLLM.org's coverage) with three defining changes: (1) **GPT-5.1 Instant gains adaptive reasoning** — for the first time, the Instant-tier model can use reasoning to decide when to think before responding to challenging questions; (2) **GPT-5.1 Thinking adjusts reasoning effort dynamically** rather than committing fixed compute; (3) an **eight-style persona selector** (Professional, Friendly, Quirky, etc.) in ChatGPT surfaced the tone controls OpenAI had been quietly developing.

The launch landed **6 days after Moonshot AI released Kimi K2 Thinking** (Nov 6, 2025), creating a "November reasoning showdown." Kimi K2 Thinking is open-weight 1T MoE / 32B active / 256K context; GPT-5.1 is closed-weights but uses **adaptive compute routing** to stay faster on casual prompts. The staggered launch framed the open-vs-closed contest for the next chapter of frontier AI.

Per OpenAI's release notes (help.openai.com): **"As of March 11, 2026, GPT-5.1 models are no longer available in ChatGPT"** — GPT-5.1 Instant, Thinking, and Pro are all removed from the ChatGPT surface. On **2026-10-01, OpenAI formally deprecated GPT-5.1 in the API** with a scheduled shutdown of **April 1, 2027**. The replacement is **gpt-6-sol**. As of late October 2026, GPT-5.1 is technically still on the API price list but not recommended for new builds.

In the lineage:
- GPT-5 (Aug 2025, router flagship) → **GPT-5.1 (Nov 2025, Instant/Thinking productization)** → GPT-5.2 (Dec 2025, deprecated June 2026) → GPT-5.3/Codex → GPT-5.4 → GPT-5.5 → **GPT-5.6 Sol/Terra/Luna (Jul 2026, current family)** → GPT-6 (Oct 2026, replacing GPT-5.1 as the GPT-6 family).

GPT-5.1 also announced a **three-month sunset path for legacy GPT-5 tiers** (per WhatLLM.org), giving developers a structured transition from GPT-5 to GPT-5.1 to GPT-5.6.

## Architecture & capability claims

OpenAI does not publish detailed architecture specs for GPT-5.1. The structural facts are the **three-model split** that became the template for later GPT-5.6 Sol/Terra/Luna:

1. **GPT-5.1 Instant** — conversational default; for the first time uses **adaptive reasoning** to decide when to think before responding. ~30% faster than GPT-5 Instant on simple queries. Early-stops if confidence > 0.95.
2. **GPT-5.1 Thinking** — deeper reasoning; adjusts effort dynamically. Per WhatLLM: "standard mode commits 20–30% [of compute], and high mode uses up to half." OpenAI keeps internal thoughts hidden ("internal thoughts hidden, which reduces token overhead by 40–60% compared to Kimi").
3. **GPT-5.1 Pro** — test-time compute scaling; targeted at highest-stakes reasoning.

Key capability levers:
- **Adaptive reasoning** — Instant can think on hard queries without manual routing
- **Reasoning effort control** (low / medium / high) — controllable per request
- **8-style persona selector** — tone control in ChatGPT
- **Verbosity control** — carried over from GPT-5

Capabilities GPT-5.1 supports:
- Text + image input
- Tool calling / function calling (improved over GPT-5 per OpenAI's system card addendum)
- Long context (400K total)
- Adaptive reasoning (Instant + Thinking)
- Reasoning effort control
- Verbosity control
- Persona selector (8 styles)
- Chat Completions + Responses API

Capabilities GPT-5.1 **does not** support (vs. cohort):
- Native real-time voice (separate product)
- Native video input through API
- Programmatic tool calling (introduced in GPT-5.6)
- Max / Ultra effort levels (added in GPT-5.6)

## Benchmark scores (vs Kimi K2 Thinking, the November 2025 face-off)

- **Overall Score: 83/100**

Per WhatLLM.org's head-to-head analysis (Nov 2025) and OpenAI's system card addendum:

### STEM-heavy suites

| Benchmark | GPT-5.1 | Kimi K2 Thinking | Edge |
| --- | --- | --- | --- |
| **MMLU-Pro** | **96.7%** | 91.6% | GPT-5.1 (STEM advantage) |
| GSM8K | **96.8%** | 94.2% | GPT-5.1 |
| **MATH** | **94.3%** | 88.7% | GPT-5.1 (proof-heavy Olympiad) |
| **GPQA Diamond** | 84.5% | 85.7% (avg@8: 75.1%) | Kimi (narrowly) |
| HumanEval | **92.6%** | 89.4% | GPT-5.1 (first-pass code) |
| DROP | 91.2% | 93.8% | Kimi (long-form reading) |
| **SWE-Bench Verified** | **66.0%** (per `meta.json`, mini-SWE-agent) | 71.3% (71.6% multi-attempt) | Kimi (open-weight ceiling) |
| **BrowseComp** | 54.9% | **60.2%** | Kimi (web reasoning) |
| Humanity's Last Exam | not published | 44.9% | Kimi (top open-weight) |

GPT-5.1 leads STEM-heavy suites (MMLU-Pro +5.1 points, MATH +5.6, GSM8K +2.6, HumanEval +3.2) and on **multi-language professional work**. Kimi counters on web reasoning (BrowseComp), multi-hop reading comprehension (DROP), GPQA Diamond (narrowly), and published SWE-Bench Verified (which is contested).

### Reasoning philosophy: adaptive vs. transparent

Per WhatLLM's analysis, GPT-5.1 keeps internal thoughts hidden — "reduces token overhead by 40–60% compared to Kimi. The trade-off is audit opacity, offset by a warmer tone and the ability to personalize voice." **Bias profile differs**: Kimi excels on Asia-Pacific regulatory and cultural tasks; GPT-5.1 maintains broader linguistic coverage.

Real-world anecdote from WhatLLM.org: "Kimi maintains 87% success on 180K-token contract analyses versus GPT-5.1's 82%, while GPT-5.1 resolves customer support tickets 71–79% of the time, beating Kimi's slower turnaround."

### What GPT-5.1 did NOT publish

Per third-party audits of the Nov 2025 launch:
- **No SWE-Bench Pro, LiveCodeBench, DeepSWE, AA Coding Agent Index** (these became standard in GPT-5.5+)
- **No MRCR long-context recall** in launch
- **No AA Intelligence Index v3** at launch (the index came later in 2026)

## Pricing & deployment

| Channel | Input $/M | Output $/M | Cached $/M | Context | Notes |
| --- | --- | --- | --- | --- | --- |
| **OpenAI API** (canonical) | **$1.25** | **$10.00** | **$0.125** | 400K total / 128K out | Headline list price |
| Azure OpenAI | $1.25 | $10.00 | $0.125 | 400K | Cloud-hosted |
| Microsoft Foundry | $1.25 | $10.00 | $0.125 | 400K | Cloud-hosted |
| OpenCode Zen (per `meta.json`) | varies | varies | — | 400K | Resale |
| ChatGPT Plus ($20/mo) | bundled | bundled | — | 400K | Consumer — until March 11, 2026 |
| ChatGPT Pro ($200/mo) | bundled | bundled | — | 400K | Pro tier — until March 11, 2026 |

**Pricing relative to cohort:**
- vs **GPT-5.6 Sol** ($5/$30): GPT-5.1 is 4× cheaper input, 3× cheaper output
- vs **GPT-5.6 Terra** ($2/$12): GPT-5.1 is 1.6× cheaper input, 1.2× cheaper output
- vs **GPT-5.6 Luna** ($0.20/$1.20): GPT-5.1 is 6.25× costlier input, 8.3× costlier output
- vs **Claude Opus 5.5** ($5/$25): GPT-5.1 is 4× cheaper input, 2.5× cheaper output
- vs **DeepSeek V4 Pro** peak ($1.32/$3.96): GPT-5.1 is roughly equivalent on input, 2.5× costlier output
- vs **Kimi K2 Thinking** ($0.15–$0.60 input, $0.60–$2.50 output, open API): **GPT-5.1 is significantly costlier than Kimi on both axes**; Kimi's open-weight economics undercut GPT-5.1 on price
- vs **Gemini 2.5 Pro** ≤200K ($1.25/$10): same input price, parity

**Cost pressure on GPT-5.1**: WhatLLM.org cites Artificial Analysis estimating **a full Intelligence Index run at $356 on Kimi's base endpoint versus more than $1,200 when customers choose Kimi turbo or GPT-5.1 high tiers.** GPT-5.1's adaptive early-stop heuristics help keep simple conversations under budget, but the high-reasoning tier is operationally expensive.

## Where it fits — and where it does not

**Reasonable fit (as the Nov 2025 release it was):**

- **STEM-heavy production work** — MMLU-Pro 96.7%, MATH 94.3%, GSM8K 96.8%, HumanEval 92.6%, GPQA Diamond 84.5%. For math, physics, chemistry, and competitive programming, GPT-5.1 led the November 2025 cohort (closed).
- **Customer support and conversational interfaces** — GPT-5.1 Instant's warm tone + 8-style persona selector + 30% latency improvement over GPT-5 made it the natural choice for ChatGPT app integrations and enterprise chatbots.
- **Multilingual tone control** — "global support desks, rapid ideation, and multilingual tone control" (per WhatLLM). 50+ language training mix.
- **Adaptive routing** — Instant can think on hard queries without manual tier switching; for mixed-traffic production, the adaptive router reduces per-request latency without operator intervention.
- **Production traffic where thinking effort should scale per request** — Thinking tier's dynamic reasoning effort allocation (5–50% compute based on query complexity) is operationally significant.
- **GPT-5 transition projects** — the three-month sunset path from GPT-5 to GPT-5.1 was a structured migration.

**Poor fit (as of late 2026):**

- **Production traffic where model stability matters** — GPT-5.1 is **deprecated** in ChatGPT (March 11, 2026), deprecated in API (Oct 1, 2026), and scheduled for shutdown April 1, 2027. New builds should route to GPT-5.6 Sol/Terra/Luna or GPT-6.
- **Long-context workloads at 256K+ tokens** — Per WhatLLM, "ChatGPT often needs chunking past 100K tokens." Kimi K2 Thinking's 256K context wins on long-document synthesis.
- **Audit trails and regulated deployments** — OpenAI "keeps internal thoughts hidden" — Kimi's transparent thinking tokens matter for compliance, incident response, and audit.
- **Asian-language regulatory / cultural work** — Kimi K2 Thinking's 70% Chinese-language corpus and Asia-Pacific training orientation wins.
- **Multilingual very low-resource languages** — what Kimi lags on niche European languages, GPT-5.1 wins via 50+ language mix.
- **Self-hosting** — GPT-5.1 is API-only; Kimi K2 Thinking ships as open weights with INT4 checkpoints that fit on 8×H100.
- **Frontier agentic coding ceilings** — SWE-bench Verified 66.0% (the `meta.json` figure; mini-SWE-agent harness); compared to Claude Opus 4.7's 87.6% SWE-bench Verified at $5/$25 and Opus 5.5's leadership, GPT-5.1 is mid-pack on agentic coding.
- **Cost-sensitive high-volume generation** — at $1.25/$10 list price, GPT-5.1 is significantly costlier than Luna at $0.20/$1.20 or Kimi K2 Thinking.

## Triangulated scores

> Source: `model-queue.md` (Overall 83.2). 19 qualifying raters (gate Overall > 84.9). Rounded to nearest integer per the project's half-up convention.

- **Tool use: 82/100.** Improved function calling over GPT-5; valid JSON output; better signature interpretation per system card addendum. **SWE-Bench Verified 66.0%** (per `meta.json`, mini-SWE-agent harness, vs Kimi 71.3% and Opus 4.7's 87.6%). Function calling is first-class but **not autonomous at the level of Claude Opus 4.7's literal-instruction-following or GPT-5.6's programmatic tool calling**.
- **Reasoning: 86/100.** **MMLU-Pro 96.7%, MATH 94.3%, GSM8K 96.8%, HumanEval 92.6%, GPQA Diamond 84.5%** (vs Kimi K2 Thinking's 91.6% / 88.7% / 94.2% / 89.4% / 85.7%). GPT-5.1 wins STEM-heavy suites, narrowly loses GPQA. Adaptive reasoning (Instant can think on hard queries) is the structural innovation. **No FrontierMath / ARC-AGI-2 / HLE in launch** — these became standard in GPT-5.5+.
- **Context window: 85/100.** 400K total (272K input + 128K output) per `meta.json`; per WhatLLM, the Instant + Thinking tier sizes were 128K context — **2× smaller than Kimi K2 Thinking's 256K** (the operational limitation for long-document synthesis). MRCR-style long-context recall not separately published.
- **Multimodal: 78/100.** Text + image input. MMMU not in this launch (was 84.2% on GPT-5). Native video, real-time voice are separate products. By 2026 standards (Gemini 2.5 Pro multimodal, GPT-5.6 Sol), GPT-5.1 is multimodal-baseline.
- **Coding: 85/100.** HumanEval 92.6% (first-pass code accuracy); SWE-bench Verified 66.0% per `meta.json` (mini-SWE-agent). Compared with later 2026 models — Claude Opus 4.7 87.6% SWE-bench Verified at $5/$25, GPT-5.6 Sol ~88.8% Terminal-Bench 2.1 — GPT-5.1 is **mid-pack on agentic coding**. GPT-5.1 Pro's test-time compute is the structural lever for reasoning-heavy code.
- **Cost efficiency: 75/100.** $1.25/$10 list price is mid-pack by 2026 standards — Luna at $0.20/$1.20 is the cost ceiling; Kimi K2 Thinking at $0.15–$2.50 (open weights) undercuts GPT-5.1 on price. **WhatLLM-AA estimated $1,200+ for a full Intelligence Index on GPT-5.1 high vs $356 on Kimi base** — operating economics favor Kimi/open-weight on absolute cost. GPT-5.1's adaptive early-stop heuristics help on simple conversations.
- **Overall: 83/100.** GPT-5.1 was OpenAI's November 12, 2025 upgrade — the first OpenAI release to productize the Instant / Thinking split as separate SKUs, with adaptive reasoning on Instant and dynamic effort on Thinking. Headline results: **MMLU-Pro 96.7%, MATH 94.3%, GSM8K 96.8%, HumanEval 92.6%, GPQA Diamond 84.5%, SWE-Bench Verified 66.0% (mini-SWE-agent)**. Three defining changes: (1) Instant adaptive reasoning, (2) Thinking dynamic effort, (3) 8-style persona selector. Three-month sunset path from GPT-5 to GPT-5.1. Succeeded by GPT-5.2 (Dec 2025, deprecated June 2026), GPT-5.3/5.4/5.5, and the GPT-5.6 Sol/Terra/Luna tier family (Jul 2026, current). **Deprecated in ChatGPT March 11, 2026; deprecated in API Oct 1, 2026; scheduled shutdown April 1, 2027; replacement gpt-6-sol**. For new production deployments, route to GPT-5.6 / GPT-6 family. For archival or reference workflows, GPT-5.1 remains on the API price list at $1.25/$10. The launch is best remembered as the bridge from GPT-5's router pattern to GPT-5.6's productized Sol/Terra/Luna tier system.

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
