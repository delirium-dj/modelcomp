# GLM-5.3 — findings by Glyph Cluster

- Source: Z AI (`z-ai/glm-5.3`, GLM-5.3 Max reasoning)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 (Max)
- **Short description:** Z AI's large open-weights reasoning MoE model (753B total / 40B active) positioned for high intelligence and long-context text tasks. This is the `glm-5.3` / Max variant as tracked by Artificial Analysis/OpenRouter.
- **Provider / access:** Open weights via [Hugging Face `zai-org/GLM-5.3`](https://huggingface.co/zai-org/GLM-5.3); hosted APIs available through many providers (e.g. OpenRouter `z-ai/glm-5.3`). Chat-completions/OpenAI-compatible interfaces supported by providers.
- **Release / knowledge:** Released August 2026 (per Artificial Analysis). Knowledge cutoff not explicitly stated in fetched sources.
- **IDs:** `z-ai/glm-5.3` (OpenRouter/AA slug), `zai-org/GLM-5.3` (Hugging Face)
- **Context window:** 1M tokens (per Artificial Analysis).
- **Modalities:** Text input, text output (per Artificial Analysis). Reasoning model; tool calling supported by providers/runtimes where available.
- **Pricing (as of 2026-11-10):** Open weights (GLM-5.3 license). Hosted API pricing varies widely by provider (e.g. OpenRouter listings show a broad range from low input pricing on some routes up to ~$1.40+/M input and ~$4.40+/M output on others; see OpenRouter page). Artificial Analysis reports ~$1.40/$4.40 per 1M input/output in its snapshot.
- **Architecture:** Mixture-of-Experts, 753B total parameters / 40B active parameters per token (per Artificial Analysis). Open weights under GLM-5.3 license.

### Raw benchmarks found

> Accessible sources provided strong aggregate evaluation metadata for this exact model, but limited per-benchmark numeric breakdowns in fetched content.

Agent / tool use:

- Artificial Analysis Intelligence Index (aggregate, includes agentic/coding evaluations): **32** (Artificial Analysis, #3/26 in comparable class snapshot)
- Per-benchmark agentic scores (Terminal-Bench, GDPval-AA, BFCL, Tau, etc.): no verified public score found in accessible fetched sources

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **32** (Artificial Analysis model page)
- GPQA Diamond / HLE / MMLU-Pro / other standalone reasoning benchmarks: no verified public score found in accessible fetched sources

Coding:

- Coding performance reflected in AA Intelligence Index aggregate: **32 overall index** (includes FrontierCode 2.0, Terminal-Bench 4.0; per-benchmark values not extractable from fetched snapshot)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in accessible fetched sources

Long context:

- Context window: **1M tokens** (Artificial Analysis)

Performance/cost metadata (evidence of deployment profile, not quality scores):

- Cost per Intelligence Index task: **$5.01** (Artificial Analysis)
- Time per Intelligence Index task: **29.8 minutes** (Artificial Analysis)
- Output tokens from Intelligence Index: **135M** (Artificial Analysis; very verbose)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 86/100.** AA Intelligence Index 32 (top-tier in its comparable open-weight class snapshot) indicates strong agentic/tool-use capability as part of the aggregate; capped by lack of accessible per-benchmark tool-use breakdowns (e.g. BFCL/Terminal-Bench/GDPval-AA) for finer calibration.
- **Reasoning: 88/100.** High AA Intelligence Index score (32) suggests strong reasoning/knowledge performance across included evaluations; capped by absence of extractable standalone reasoning benchmark numbers (GPQA/HLE/etc.) in fetched sources.
- **Context window: 100/100.** 1M-token context window places it at the top tier for context capacity per `model-comparison.md` context mapping.
- **Multimodal: 15/100.** Text input/output only per accessible model metadata; no verified image/audio/video understanding or generation capability for this exact model.
- **Coding: 86/100.** Coding/terminal/engineering evaluations contribute to the strong AA Intelligence Index (32), supporting high coding capability; capped by missing per-benchmark coding scores in accessible fetched sources.
- **Cost efficiency: 60/100.** Artificial Analysis reports relatively high task cost ($5.01 per Intelligence Index task) and expensive token pricing in its snapshot versus median comparable models, reducing cost efficiency despite open-weights availability.
- **Overall Score: 75/100.** Mean of the five non-cost dims (86, 88, 100, 15, 86) = 75.0 → 75 (half-up). Best fit for high-intelligence, long-context, text-only reasoning/coding workloads where multimodality is not required.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GLM-5.3 (Max)](https://artificialanalysis.ai/models/glm-5-3)
  - [OpenRouter — z-ai/glm-5.3](https://openrouter.ai/z-ai/glm-5.3)
  - [Hugging Face — zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
