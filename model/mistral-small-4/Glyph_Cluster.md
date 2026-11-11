# Mistral Small 4 — findings by Glyph Cluster

- Source: Mistral (`mistral-small-4`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4 (Reasoning)
- **Short description:** Mistral's open-weights small/medium-class reasoning model (119B total, 6.5B active MoE) optimized for fast, low-cost inference with multimodal text/image input support (per Artificial Analysis).
- **Provider / access:** Open weights model; available via Mistral/provider APIs per Artificial Analysis. OpenRouter page for this exact slug was not accessible in fetched results.
- **Release / knowledge:** Released March 2026 (per Artificial Analysis). Knowledge cutoff not specified in accessible fetched sources.
- **IDs:** `mistral-small-4` (queue slug); Artificial Analysis page slug `mistral-small-4`.
- **Context window:** 256k tokens (per Artificial Analysis).
- **Modalities:** Text and image input; text output (per Artificial Analysis). Reasoning model.
- **Pricing (as of 2026-11-11):** ~$0.15/M input tokens and ~$0.60/M output tokens in Artificial Analysis snapshot (cache discount 90% reported); pricing may vary by provider.
- **Architecture:** Open weights MoE, 119B total parameters / 6.5B active (per Artificial Analysis), Apache 2.0 license.

### Raw benchmarks found

> Accessible sources provided an aggregate evaluation metric and deployment/spec metadata for this exact model, but limited per-benchmark numeric breakdowns in fetched content.

Agent / tool use:

- Artificial Analysis Intelligence Index (aggregate, includes agentic evaluations): **4** (Artificial Analysis, #3/4 in compared class snapshot; described as below average among comparable models)
- Per-benchmark agentic/tool-use scores (Terminal-Bench, GDPval-AA, BFCL, Tau, etc.): no verified public score found in accessible fetched sources

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **4** (Artificial Analysis model page)
- GPQA Diamond / HLE / MMLU-Pro / other standalone reasoning benchmarks: no verified public score found in accessible fetched sources

Coding:

- Coding performance reflected in AA Intelligence Index aggregate: **4 overall index** (includes coding evaluations; per-benchmark values not extractable from fetched snapshot)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in accessible fetched sources

Long context:

- Context window: **256k tokens** (Artificial Analysis)

Performance/cost metadata (evidence of deployment profile, not quality scores):

- Time to first answer token: **11.93s** (Artificial Analysis)
- Output speed: **147 tok/s** (Artificial Analysis)
- Time per Intelligence Index task: **1.6 minutes** (Artificial Analysis; notably quick in class)
- Cost per Intelligence Index task: **$0.04** (Artificial Analysis)
- Output tokens from Intelligence Index: **23.9M** (Artificial Analysis; highly concise)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 45/100.** AA Intelligence Index 4 indicates below-average aggregate capability in its compared class (aggregate includes agentic/tool-use evaluations); capped by low index and lack of accessible per-benchmark tool-use results.
- **Reasoning: 45/100.** Aggregate AA Intelligence Index of 4 suggests constrained reasoning/knowledge performance in AA's composite relative to stronger peers; capped by absence of standalone reasoning benchmark numbers in fetched sources.
- **Context window: 90/100.** 256k-token context window is strong for long-context workloads per `model-comparison.md`, though below 1M-tier leaders.
- **Multimodal: 55/100.** Supports text and image input with text output, providing basic multimodal input coverage; capped by lack of broader modality/output support and limited public per-benchmark multimodal evidence.
- **Coding: 45/100.** Coding capability is reflected in the low overall AA Intelligence Index (4), indicating weaker coding/agentic performance than stronger peers in this aggregate; capped by missing per-benchmark coding scores.
- **Cost efficiency: 90/100.** Very low cost per Intelligence Index task ($0.04) and competitive token pricing indicate strong cost efficiency for its capability tier.
- **Overall Score: 56/100.** Mean of the five non-cost dims (45, 45, 90, 55, 45) = 56.0 → 56 (half-up). Best fit for fast, concise, low-cost multimodal text/image tasks where efficiency matters more than frontier reasoning or coding depth.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-11 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Mistral Small 4](https://artificialanalysis.ai/models/mistral-small-4)
  - [OpenRouter — mistralai/mistral-small-4 (access attempt)](https://openrouter.ai/mistralai/mistral-small-4)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
