# Gemini 3.1 Flash-Lite — findings by Glyph Cluster

- Source: Google (`gemini-3.1-flash-lite-preview`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's lightweight, fast reasoning model in the Gemini 3.1 family, optimized for low latency and cost-efficient inference with multimodal inputs. Distinct from Gemini 2.5 Flash / 3.5 Flash-Lite and other Gemini variants.
- **Provider / access:** Proprietary model served via Google AI/Vertex AI and compatible provider APIs (per Artificial Analysis). Exact API IDs vary by platform.
- **Release / knowledge:** Released March 2026 (per Artificial Analysis). Knowledge cutoff January 1, 2025 (per Artificial Analysis).
- **IDs:** `gemini-3.1-flash-lite-preview` (AA slug; provider-specific IDs may differ)
- **Context window:** 1M tokens (per Artificial Analysis).
- **Modalities:** Text, image, speech, and video input; text output (per Artificial Analysis). Reasoning model.
- **Pricing (as of 2026-11-10):** ~$0.25/M input tokens and ~$1.50/M output tokens in AA snapshot (cache discount 90% reported); pricing may vary by provider/tier.
- **Architecture:** Proprietary (parameter count not disclosed).

### Raw benchmarks found

> Accessible sources provided aggregate evaluation metrics for this exact model, but limited per-benchmark numeric breakdowns in fetched content.

Agent / tool use:

- Artificial Analysis Intelligence Index (aggregate, includes agentic evaluations): **6** (Artificial Analysis, #32/34 in comparable class snapshot)
- Per-benchmark agentic scores (Terminal-Bench, GDPval-AA, BFCL, Tau, etc.): no verified public score found in accessible fetched sources

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **6** (Artificial Analysis model page)
- GPQA Diamond / HLE / MMLU-Pro / other standalone reasoning benchmarks: no verified public score found in accessible fetched sources

Coding:

- Coding performance reflected in AA Intelligence Index aggregate: **6 overall index** (includes coding evaluations; per-benchmark values not extractable from fetched snapshot)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in accessible fetched sources

Long context:

- Context window: **1M tokens** (Artificial Analysis)

Performance/cost metadata (evidence of deployment profile, not quality scores):

- Cost per Intelligence Index task: **$0.19** (Artificial Analysis)
- Time per Intelligence Index task: **0.8 minutes** (Artificial Analysis; very fast)
- Output tokens from Intelligence Index: **32.4M** (Artificial Analysis; very concise)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 45/100.** AA Intelligence Index 6 indicates limited overall capability in the aggregate (which includes agentic/tool-use evaluations) relative to peers; capped by low aggregate index and lack of accessible per-benchmark tool-use results.
- **Reasoning: 45/100.** Low AA Intelligence Index (6, lower end of comparable class) suggests constrained reasoning/knowledge performance in AA's composite; capped by absence of standalone reasoning benchmark numbers in fetched sources.
- **Context window: 100/100.** 1M-token context window is top-tier for context capacity per `model-comparison.md`.
- **Multimodal: 80/100.** Supports broad multimodal inputs (text, image, speech, video) with text output, enabling strong input-side multimodal coverage; capped by text-only output and limited public per-benchmark multimodal scores in accessible sources.
- **Coding: 45/100.** Coding capability is reflected in the low overall AA Intelligence Index (6), indicating weaker coding/agentic performance than stronger peers in this aggregate; capped by missing per-benchmark coding scores.
- **Cost efficiency: 75/100.** Low cost per Intelligence Index task ($0.19) and competitive token pricing are favorable, though intelligence-per-cost is limited by the low capability index.
- **Overall Score: 63/100.** Mean of the five non-cost dims (45, 45, 100, 80, 45) = 63.0 → 63 (half-up). Best fit for fast, concise, low-cost multimodal tasks that benefit from large context but do not require frontier reasoning or coding depth.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 3.1 Flash-Lite](https://artificialanalysis.ai/models/gemini-3-1-flash-lite-preview)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
