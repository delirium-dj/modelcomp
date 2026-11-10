# MiniMax-M3.1-Flash — findings by Glyph Cluster

- Source: MiniMax (`minimax/minimax-m3.1-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M3.1-Flash
- **Short description:** MiniMax's large open-weights reasoning MoE model (428B total / 23B active) optimized for high intelligence and efficient inference in the M3.1 family. Distinct from other MiniMax M2/M3 variants.
- **Provider / access:** Open weights via [Hugging Face `MiniMaxAI/MiniMax-M3.1-Flash`](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash); hosted APIs available through providers (e.g. OpenRouter `minimax/minimax-m3.1-flash`).
- **Release / knowledge:** Released October 2026 (per Artificial Analysis). Knowledge cutoff not explicitly stated in fetched sources.
- **IDs:** `minimax/minimax-m3.1-flash` (OpenRouter/AA slug), `MiniMaxAI/MiniMax-M3.1-Flash` (Hugging Face)
- **Context window:** 1M tokens (per Artificial Analysis).
- **Modalities:** Text and image input, text output (per Artificial Analysis). Reasoning model.
- **Pricing (as of 2026-11-10):** Open weights (MINIMAX Community License). Hosted API pricing varies by provider (e.g. OpenRouter listings around ~$0.075–$0.15/M input and ~$0.30–$0.60/M output depending on provider/time window; AA snapshot ~$0.15/$0.60 per 1M).
- **Architecture:** Mixture-of-Experts, 428B total parameters / 23B active parameters (per Artificial Analysis). Open weights.

### Raw benchmarks found

> Accessible sources provided strong aggregate evaluation metadata for this exact model, but limited per-benchmark numeric breakdowns in fetched content.

Agent / tool use:

- Artificial Analysis Intelligence Index (aggregate, includes agentic/coding evaluations): **29** (Artificial Analysis, #6/26 in comparable class snapshot)
- Per-benchmark agentic scores (Terminal-Bench, GDPval-AA, BFCL, Tau, etc.): no verified public score found in accessible fetched sources

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **29** (Artificial Analysis model page)
- GPQA Diamond / HLE / MMLU-Pro / other standalone reasoning benchmarks: no verified public score found in accessible fetched sources

Coding:

- Coding performance reflected in AA Intelligence Index aggregate: **29 overall index** (includes coding evaluations; per-benchmark values not extractable from fetched snapshot)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in accessible fetched sources

Long context:

- Context window: **1M tokens** (Artificial Analysis)

Performance/cost metadata (evidence of deployment profile, not quality scores):

- Cost per Intelligence Index task: **$0.49** (Artificial Analysis)
- Time per Intelligence Index task: **15.1 minutes** (Artificial Analysis)
- Output tokens from Intelligence Index: **161M** (Artificial Analysis; very verbose)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 82/100.** AA Intelligence Index 29 (well above average in its comparable open-weight class snapshot) indicates strong agentic/tool-use capability as part of the aggregate; capped by lack of accessible per-benchmark tool-use breakdowns.
- **Reasoning: 84/100.** High AA Intelligence Index score (29) suggests strong reasoning/knowledge performance across included evaluations; capped by absence of extractable standalone reasoning benchmark numbers in fetched sources.
- **Context window: 100/100.** 1M-token context window places it at the top tier for context capacity per `model-comparison.md`.
- **Multimodal: 50/100.** Supports text and image input with text output (per AA metadata), providing basic multimodal understanding; capped by limited modality breadth/output and lack of per-benchmark multimodal scores in accessible sources.
- **Coding: 82/100.** Coding evaluations contribute to the strong AA Intelligence Index (29), supporting high coding capability; capped by missing per-benchmark coding scores in accessible fetched sources.
- **Cost efficiency: 80/100.** Competitive hosted pricing and relatively low cost per Intelligence Index task ($0.49) for its intelligence class suggest good value, despite verbosity and moderate speed.
- **Overall Score: 80/100.** Mean of the five non-cost dims (82, 84, 100, 50, 82) = 79.6 → 80 (half-up). Best fit for high-intelligence, long-context reasoning/coding workloads with some image understanding needs and tolerance for verbose outputs.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — MiniMax-M3.1-Flash](https://artificialanalysis.ai/models/minimax-m3-1-flash)
  - [OpenRouter — minimax/minimax-m3.1-flash](https://openrouter.ai/minimax/minimax-m3.1-flash)
  - [Hugging Face — MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
