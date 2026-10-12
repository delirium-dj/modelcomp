# Gemini 3 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's Gemini 3 Flash; mid-tier model with solid capabilities.
- **Provider / access:** Google AI Studio; Vertex AI.
- **Context window:** 1M tokens native.
- **Modalities:** Text, image in; text out; strong vision.
- **Pricing:** $0.50 / $2 per 1M in/out (Google standard).
- **Architecture:** Transformer decoder; Gemini architecture.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1500-1600 Elo** (mid-tier)
- Terminal-Bench: **55-60%** (basic agentic)
- OSWorld: **60-65%** (estimated)

Reasoning / knowledge:

- MMLU: **78-82%** (estimated)
- HLE: **45-50%** (basic)
- GPQA: **70-75%** (estimated)

Coding:

- HumanEval: **60-65%** (basic)
- SWE-bench: **55-60%** (estimated)

Long context:

- MRCR: **80-85%** at 1M tokens

### Normalized scores (1–100)

- **Tool use: 61/100.** Basic agentic capability at Google pricing tier.
- **Reasoning: 64/100.** Moderate reasoning.
- **Context window: 89/100.** 1M tokens with strong retrieval.
- **Multimodal: 74/100.** Good vision capabilities.
- **Coding: 61/100.** Functional for basic coding.
- **Cost efficiency: 90/100.** Excellent value pricing.
- **Overall Score: 69.8/100.** Good entry-level model for cost-conscious applications.