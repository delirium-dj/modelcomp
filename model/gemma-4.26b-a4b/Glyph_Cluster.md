# Gemma 4 26B A4B — findings by Glyph Cluster

- Source: Google (`google/gemma-4-26B-A4B-it`, Gemma 4 26B A4B MoE)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (IT)
- **Short description:** Google DeepMind's Gemma 4 Mixture-of-Experts open-weights model (26B total / ~4B active) for efficient reasoning, coding, and multimodal understanding. Distinct from Gemma 4 dense variants (31B, 12B, E4B, E2B).
- **Provider / access:** Open weights via [Hugging Face `google/gemma-4-26B-A4B-it`](https://huggingface.co/google/gemma-4-26B-A4B-it); also servable via third-party inference providers/runtimes.
- **Release / knowledge:** Released April 2026 (Gemma 4 family). Pre-training cutoff stated as January 2025 on the model card.
- **IDs:** `google/gemma-4-26B-A4B-it` (Hugging Face)
- **Context window:** 256K tokens (per Hugging Face model card).
- **Modalities:** Text and image input, text output (per Hugging Face model card). Reasoning/thinking mode supported; tool/function calling supported in compatible runtimes.
- **Pricing (as of 2026-11-10):** Open weights (Apache 2.0). Hosted API pricing varies by provider; no single canonical price extracted from fetched sources.
- **Architecture:** Mixture-of-Experts, 25.2B total parameters / 3.8B active parameters, 8 active experts out of 128 plus 1 shared (per Hugging Face), Apache 2.0 license.

### Raw benchmarks found

> Numbers below are for the exact Gemma 4 26B A4B model as reported by cited sources. Not all requested benchmark rows have verified public scores.

Agent / tool use:

- Tau2 (average over 3): **68.2%** (Hugging Face model card benchmark table)
- BFCL / Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.3%** (Hugging Face model card)
- HLE (no tools): **8.7%** (Hugging Face model card)
- HLE (with search): **17.2%** (Hugging Face model card)
- MMLU-Pro: **82.6%** (Hugging Face model card)
- BigBench Extra Hard: **64.8%** (Hugging Face model card)
- AIME 2026 (no tools): **88.3%** (Hugging Face model card)
- Artificial Analysis Intelligence Index: no verified public score found in accessible fetched sources

Coding:

- LiveCodeBench v6: **77.1%** (Hugging Face model card)
- Codeforces ELO: **1718** (Hugging Face model card)
- SWE-bench Verified / SWE-Pro / SciCode: no verified public score found

Long context:

- MRCR v2 8-needle 128k (average): **44.1%** (Hugging Face model card)
- Context window: **256K tokens** (Hugging Face model card)

Multimodal (additional evidence):

- MMMU Pro: **73.8%** (Hugging Face model card)
- MathVision: **82.4%** (Hugging Face model card)
- OmniDocBench 1.5 (avg edit distance, lower better): **0.149** (Hugging Face model card)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 70/100.** Tau2 average of 68.2% shows capable agentic/tool-use performance for an efficient MoE model, with native function-calling support; capped by lack of verified BFCL/Terminal-Bench/GDPval-AA results.
- **Reasoning: 77/100.** Strong reasoning signals (GPQA Diamond 82.3%, MMLU-Pro 82.6%, AIME 2026 88.3%, BigBench Extra Hard 64.8%) with low HLE scores (8.7%/17.2%) indicate good but not frontier-hard reasoning.
- **Context window: 72/100.** 256K-token window is large, but MRCR v2 8-needle 128k average of 44.1% suggests moderate long-context retrieval reliability at length.
- **Multimodal: 64/100.** Solid multimodal/vision results for its class (MMMU Pro 73.8%, MathVision 82.4%, OmniDocBench 0.149) with text/image input and text output; capped by narrower modality breadth than frontier omni models.
- **Coding: 75/100.** Good coding performance (LiveCodeBench v6 77.1%, Codeforces ELO 1718) for an efficient 4B-active MoE; capped by absence of verified SWE-bench/terminal-agent benchmarks.
- **Cost efficiency: 90/100.** Very efficient active parameter count (3.8B active) and open weights make it attractive for low-cost/high-throughput deployment relative to capability.
- **Overall Score: 72/100.** Mean of the five non-cost dims (70, 77, 72, 64, 75) = 71.6 → 72 (half-up). Best fit as an efficient open multimodal reasoning/coding model offering strong value for its active compute footprint.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Hugging Face model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
