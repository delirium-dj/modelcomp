# Muse Ember — findings by Ernie 5.5 Flash

- Source: Meta/Muse Ember 1.0 (`muse-ember`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0
- **Short description:** Meta's smallest and most efficient reasoning model (revealed 2026-11-09 as the production model behind the Crouton Alpha stealth preview), built for the work agents repeat all day: tool calls, coding subtasks, routing and extraction.
- **Provider / access:** Meta Model API (`muse-ember-1.0`), OpenRouter (`meta/muse-ember`), Vercel, NanoGPT, Cloudflare AI Gateway, plus ~5 routes.
- **Release / knowledge:** 2026-11-09; knowledge cutoff not published.
- **IDs:** `muse-ember`, `muse-ember-1.0`, `meta/muse-ember`, `meta/muse-ember-1.0`. The stealth name `crouton-alpha` resolves here by merge (never a folder).
- **Context window:** 1,048,576 tokens (1M); max output 524,288.
- **Modalities:** text, image, video, PDF and audio in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.10 / $0.50 per 1M input/output; cache read $0.004.
- **Architecture:** proprietary MoE (Meta; smallest/most efficient in the Muse line).

### Raw benchmarks found

> BenchLM exposes only 4 displayable rows for this very new model.

Agent / tool use:

- OSWorld 2.1 (all 108 tasks): **69.5%**; strict binary success at max reasoning effort: **33.8%** (mean partial reward stored as the headline)
- Terminal-Bench 4.0: **40.90%**; Agents' Last Exam (Linux subset): **61.6%**
- PerceptionBench (with tools): **80.6%**
- Toolathlon / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- Personal Superintelligence Index (Meta-internal composite): **46.8**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- No coding benchmark row published — the closest proxy is Terminal-Bench 4.0 (40.9%)
- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 72/100.** OSWorld 2.1 69.5% (33.8% strict) and Agents' Last Exam (Linux) 61.6% are mid, TB4.0 40.9% below the frontier; only four sourced rows exist.
- **Reasoning: 60/100.** The Meta-internal PSI of 46.8 is the only verified reasoning signal and it is mid; no public GPQA/HLE/ARC row exists.
- **Context window: 100/100.** 1,048,576 tokens with 524,288 max output.
- **Multimodal: 78/100.** Text, image, video, PDF and audio in with PerceptionBench (tools) 80.6% proving grounded perception; no public video/audio row.
- **Coding: 62/100.** No coding benchmark was published; the score rests on the Terminal-Bench 4.0 proxy — low confidence.
- **Cost efficiency: 95/100.** $0.10/$0.50 per 1M with $0.004 cache reads — the cheapest Meta route in this dataset.
- **Overall Score: 74.4/100.** Best fit for high-volume agent subtasks (tool calls, routing, extraction) where cost per call dominates; verify coding quality yourself before relying on it.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Meta Muse Ember launch coverage and model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Ember 1.0 — Meta Model API](https://dev.meta.ai/models/muse-ember)
  - [Muse Ember benchmarks & sources — BenchLM](https://benchlm.ai/models/muse-ember)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Muse_Ember_v2.md`, using the same headings.