# Ember 1 — findings by DeepSeek 4.1 Flash

- Source: Fireworks Research / Ember-1 (`accounts/fireworks/models/ember-1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1 (Ember-1)
- **Short description:** Fireworks Research's first specialised foundation model (announced 2026-09-23) — a **fine-tune of Kimi K3** trained to produce roughly 40% fewer reasoning tokens while holding quality. Value proposition is "same answers, fewer tokens" for agentic coding, where long reasoning traces are re-billed every turn.
- **Provider / access:** Fireworks AI Serverless (Research Preview, `accounts/fireworks/models/ember-1`) and OpenRouter; OpenAI-compatible. Not open weights (fine-tuned from the open Kimi K3 base; Fireworks catalogues it as a Fireworks model, not a Kimi family member).
- **Release / knowledge:** Announced 2026-09-23; knowledge cutoff inherited from Kimi K3 (not separately published). Two-week Serverless research access, made permanent on demand.
- **IDs:** `accounts/fireworks/models/ember-1` (Fireworks), `ember-1` (OpenRouter); OpenCode Zen tracks it as `opencode/ember-1`. No Zen Free ID.
- **Context window:** 1,040,000 tokens (LLM Reference); max output not separately published.
- **Modalities:** text and image in; text out. Reasoning yes (efficient traces), tool use, prompt caching, vision.
- **Pricing (as of 2026-10-01):** **$3.00 / $15.00 per 1M** in/out with **$0.30 cached read** (Fireworks, OpenRouter) — identical to base Kimi K3 on both routes, so the token-efficiency gain is the entire saving.
- **Architecture:** MoE, **2.78T total parameters** (Kimi K3-derived), fine-tuned via Fireworks Serverless Training (50+ experiments, 200+ evaluations). Weights not released.

### Raw benchmarks found

> Ember-1 publishes **no standard capability benchmarks** (no SWE-bench, Terminal-Bench, GPQA or AA Index). The verified numbers below are Fireworks' own token-efficiency/serving measurements. Capability is therefore scored on the **documented base model, Kimi K3** (public benchmarks), explicitly labelled as inherited — Fireworks states quality was unchanged in its evaluations and live A/B tests.

Ember-1's own measured results (Fireworks blog, 2026-09-23):

- Token efficiency vs Kimi K3 (Fireworks internal): score **0.753 vs 0.751**, steps 21.4 vs 23.8, output tokens 29.9K vs 49.3K → **71.3% fewer reasoning tokens, 39% fewer total tokens**
- Live customer A/B tests on production coding workloads: **~35% fewer tokens per task at comparable quality**, with task completion / success / failure metrics holding or improving
- Frontend "Specialized Intelligence Index": Ember-1 placed on a Pareto frontier (Fireworks-proprietary; no absolute public score)

Inherited from the documented base model, **Kimi K3** (BenchmarkList, released 2026-07-16):

- Terminal-Bench 2.1: **88.3%**; SWE-bench Verified: **93.4%**; SWE-bench Pro-adjacent ProgramBench: **77.8%** (rank 1/26); SciCode: **58.7%**; LiveCodeBench: **87.2%**; DeepSWE: **69.0%**
- GPQA Diamond: **92.9%**; HLE: **46.9%**; Artificial Analysis Intelligence Index: **59.7** (#7/418); Vals Index: **74.7%**
- GDPval-AA: **1668**; Tau3-Banking: **46.0%**; BrowseComp: **91.2%**; MCP Atlas: **84.2%**; ARC-AGI-2: **60.4%**

Long context:

- 1.04M-token window (Kimi K3 base); **no MRCR/RULER/GraphWalks retrieval score published** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 88/100 (inherited from Kimi K3).** GDPval-AA 1668, Tau3-Banking 46.0%, BrowseComp 91.2%, MCP Atlas 84.2% and TB 2.1 88.3% are frontier-class, and Fireworks reports no quality loss — scored at the base model's level, flagged as inherited rather than directly measured on `ember-1`.
- **Reasoning: 90/100 (inherited).** Kimi K3's GPQA 92.9%, HLE 46.9% and AA Index 59.7 are top-tier; the whole point of Ember-1 is to reach the same answers with 71.3% fewer reasoning tokens.
- **Context window: 95/100.** 1.04M-token window (≥1M band); held at 95 because no ≥98%-at-512K retrieval benchmark is published.
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); no audio/video documented.
- **Coding: 90/100 (inherited).** Kimi K3's SWE-bench Verified 93.4%, TB 2.1 88.3%, SciCode 58.7% and ProgramBench #1/26 are frontier; Ember-1 holds this while cutting tokens.
- **Cost efficiency: 68/100.** $3 / $15 per 1M matches Kimi K3, but the verified ~35–39% token reduction lifts effective value from the $3/$15 (~60) reference toward a better band.
- **Overall Score: 86/100.** (88 + 90 + 95 + 68 + 90) / 5 = 86.2 → 86. Best fit: agentic coding where reasoning-token cost dominates; pick over base Kimi K3 for the token savings. (Capability dims are inherited from the documented base and must be re-checked if Fireworks publishes its own evals.)

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research from zero (Fireworks Research announcement/blog with measured A/B and token numbers, LLM Reference datapack, BenchmarkList Kimi K3 page for the documented base-model benchmarks). Ember-1 has no independent capability benchmarks, so Tool use / Reasoning / Coding are scored on the labelled Kimi K3 base; efficiency is measured on `ember-1` itself. No number invented.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.