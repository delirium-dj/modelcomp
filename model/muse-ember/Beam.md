# Muse Ember 1.0 — findings by Beam

> Source: Meta (`opencode/muse-ember-1.0`, Meta Model API `muse-ember-1.0`, OpenRouter `meta/muse-ember`). $0.10/$0.50 per 1M (up to 200K); $0.30/$1.50 over 200K. 1M context, 512K max output. Multimodal in; text out. First model trained using Muse Wonder Full. Revealed 2026-11-09 behind the Crouton Alpha stealth preview (alias merge: crouton-alpha -> muse-ember).
> Date: 2026-11-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0
- **Short description:** Meta's smallest, most efficient reasoning model, designed for the repeatable coding and agentic tasks agents run all day (tool calls, coding subtasks, routing, extraction, long-document parsing). First model trained using Muse Wonder Full.
- **Provider / access:** Meta Model API (`muse-ember-1.0`), OpenCode Zen (`opencode/muse-ember-1.0`), OpenRouter (`meta/muse-ember`), Google Cloud and Oracle Cloud. Chat Completions + Responses API.
- **Release / knowledge:** Released 2026-11-09. Knowledge cutoff not separately published.
- **IDs:** `opencode/muse-ember-1.0`; `meta/muse-ember` (OpenRouter); Meta Model API `muse-ember-1.0`. No Free ID (paid only).
- **Context window:** 1,048,576 total; up to 524,288 max output (verified via Meta blog + OpenRouter).
- **Modalities:** Text, image, audio, video in; text out. Native multimodal.
- **Pricing (as of 2026-11-10):** $0.10/$0.50 per 1M (prompts up to 200K; cached input $0.004/1M). Over 200K: $0.30/$1.50 input/output, cached $0.012/1M. No free tier.
- **Architecture:** Small dense reasoning model (exact param count not published); trained using Muse Wonder Full. Open/closed: proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **37.8%** (Meta blog, max reasoning, strict pass@1)
- Agents' Last Exam: **61.6%** (Meta internal, Linux subset)
- Personal Superintelligence Index: **46.8%** (Meta internal composite of 8 evals)
- Coding Agent Index-AA: **46** (Artificial Analysis, 2026-11-09)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **36** (v5, 2026-11-09)
- Cost per Intelligence Index task: **$0.116–$0.136**

Coding:

- Terminal-Bench 4.0: **40.9%** (best published harness, mini-swe-agent)
- FrontierCode 2.0-AA: **27.2%** (real engineering tasks, mergeability)

Multimodal:

- GDP.pdf-AA: **22.8%**
- OSWorld 2.1: **69.5%** (partial credit), **33.8%** (binary)
- PerceptionBench (w/ tools): **80.6%**

Long context:

- 1M-token context window; no separate MRCR/RULER curve published in this pass.

### Normalized scores (1–100)

- **Tool use: 75/100.** Anchor on AutomationBench-AA 37.8% (strict pass@1, leads Haiku 5.5 13.9% and GPT-6 Luna 20.2%) and Agents' Last Exam 61.6%; Coding Agent Index 46. Caps: no independent third-party re-run beyond Meta/AA; small model trails frontier on hardest agentic tasks.
- **Reasoning: 70/100.** Artificial Analysis Intelligence Index 36 (v5) — mid-tier; matches Haiku 5.5's best score at ~1/3 the cost. Caps: mid-size model, trails frontier (Claude Fable 5.2 ~65) on hard novel problems.
- **Context window: 90/100.** Native 1M-token window with up to 512K output; among the largest in cohort. Caps: long-context retrieval (MRCR/RULER) not independently published.
- **Multimodal: 85/100.** Native text/image/audio/video input with strong PerceptionBench 80.6% (w/ tools) and OSWorld 69.5% partial; GDP.pdf-AA 22.8%. Caps: text-only output; no image generation.
- **Coding: 72/100.** Terminal-Bench 4.0 40.9% (leads Haiku 5.5 39.2%, GPT-6 Luna 16.4%); FrontierCode 2.0-AA 27.2% trails Haiku 5.5 34.9%. Caps: small model, pairs with Muse Wonder for hardest problems.
- **Cost efficiency: 95/100.** $0.10/$0.50 per 1M (up to 200K) and $0.14 per AA task — among the cheapest in cohort; cached input $0.004/1M. Caps: no free tier; paid only.
- **Overall Score: 78/100.** Mean of [Tool use 75 + Reasoning 70 + Context window 90 + Multimodal 85 + Coding 72] / 5 = 78.4. Best-fit: high-volume repeatable agentic coding/extraction at lowest cost; pair with Muse Wonder for hardest novel problems.

---
## Signature

- Provided by: **Beam (Reflection AI — opencode/beam-free)** — 2026-11-10
- Method: fresh public web research reading Meta's Muse Ember launch blog (official evaluation tables, AA Intelligence Index v5, cost-per-task figures) and OpenRouter/Meta Model API pricing pages. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Introducing Muse Ember (official blog, 2026-11-09)](https://research.meta.ai/blog/muse-ember)
  - [Meta Model API — Muse Ember](https://dev.meta.ai)
  - [OpenRouter — meta/muse-ember](https://openrouter.ai/meta/muse-ember)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `Beam_Alt.md`, using the same headings.
