# Mistral Medium 3.5 — findings by Glyph Cluster

- Source: Mistral (`mistral-medium-3.5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's open-weights medium-class model (128B parameters) positioned for strong general intelligence relative to peers in its class, with multimodal text/image input support (per Artificial Analysis).
- **Provider / access:** Open weights model; available via compatible inference providers (per Artificial Analysis). Provider-specific API IDs vary; OpenRouter page for this exact slug was not accessible in fetched results.
- **Release / knowledge:** Released April 2026 (per Artificial Analysis). Knowledge cutoff not specified in accessible fetched sources.
- **IDs:** `mistral-medium-3.5` (queue slug); Artificial Analysis page slug `mistral-medium-3-5`.
- **Context window:** 256k tokens (per Artificial Analysis).
- **Modalities:** Text and image input; text output (per Artificial Analysis). Reasoning/tool-calling behavior not explicitly detailed in accessible fetched summary.
- **Pricing (as of 2026-11-11):** ~$1.50/M input tokens and ~$7.50/M output tokens in Artificial Analysis snapshot (cache discount 90% reported); pricing may vary by provider.
- **Architecture:** Open weights, 128B parameters (per Artificial Analysis); license/active-parameter details not fully extractable from fetched summary.

### Raw benchmarks found

> Accessible sources provided an aggregate evaluation metric and deployment/spec metadata for this exact model, but limited per-benchmark numeric breakdowns in fetched content.

Agent / tool use:

- Artificial Analysis Intelligence Index (aggregate, includes agentic evaluations): **5** (Artificial Analysis, reported as above average in class in snapshot)
- Per-benchmark agentic/tool-use scores (Terminal-Bench, GDPval-AA, BFCL, Tau, etc.): no verified public score found in accessible fetched sources

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **5** (Artificial Analysis model page)
- GPQA Diamond / HLE / MMLU-Pro / other standalone reasoning benchmarks: no verified public score found in accessible fetched sources

Coding:

- Coding performance reflected in AA Intelligence Index aggregate: **5 overall index** (includes coding evaluations; per-benchmark values not extractable from fetched snapshot)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in accessible fetched sources

Long context:

- Context window: **256k tokens** (Artificial Analysis)

Performance/cost metadata (evidence of deployment profile, not quality scores):

- Time to first answer token: **25.71s** (Artificial Analysis)
- Output speed: **135 tok/s** (Artificial Analysis)
- Time per Intelligence Index task: **4.9 minutes** (Artificial Analysis)
- Cost per Intelligence Index task: **$1.04** (Artificial Analysis)
- Output tokens from Intelligence Index: **55.2M** (Artificial Analysis)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 55/100.** AA Intelligence Index 5 indicates above-average aggregate capability in its compared class (which includes agentic/tool-use evaluations), but no accessible per-benchmark tool-use results were found; capped by limited breakdown.
- **Reasoning: 55/100.** Aggregate AA Intelligence Index of 5 suggests moderate-to-above-average reasoning/knowledge performance in AA's composite; capped by absence of standalone reasoning benchmark numbers in fetched sources.
- **Context window: 90/100.** 256k-token context window is strong for long-context workloads per `model-comparison.md`, though below 1M-tier leaders.
- **Multimodal: 55/100.** Supports text and image input with text output, providing basic multimodal input coverage; capped by lack of broader modality/output support and limited public per-benchmark multimodal evidence.
- **Coding: 55/100.** Coding capability is reflected in the aggregate AA Intelligence Index (5), suggesting competent but not frontier coding performance in this snapshot; capped by missing per-benchmark coding scores.
- **Cost efficiency: 45/100.** AA snapshot pricing ($1.50/$7.50 per 1M) and cost per Intelligence Index task ($1.04) indicate relatively expensive operation for the delivered aggregate capability.
- **Overall Score: 62/100.** Mean of the five non-cost dims (55, 55, 90, 55, 55) = 62.0 → 62 (half-up). Best fit for general multimodal text/image workloads needing solid context and balanced capability, where cost is less critical.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-11 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Mistral Medium 3.5](https://artificialanalysis.ai/models/mistral-medium-3-5)
  - [OpenRouter — mistralai/mistral-medium-3.5 (access attempt)](https://openrouter.ai/mistralai/mistral-medium-3.5)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
