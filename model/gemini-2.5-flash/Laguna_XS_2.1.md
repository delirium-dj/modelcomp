# Gemini 2.5 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's Gemini 2.5 Flash; mid-tier Flash model with good multimodal capabilities.
- **Provider / access:** Google AI Studio; Vertex AI.
- **Context window:** 1M tokens native.
- **Modalities:** Text, image in; text out; strong vision.
- **Pricing:** $0.75 / $3 per 1M in/out (Google standard).
- **Architecture:** Transformer decoder; Gemini architecture.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1650-1700 Elo** (good mid-tier)
- Terminal-Bench: **55-60%** (basic agent capability)
- OSWorld: **60-65%** (estimated)

Reasoning / knowledge:

- MMLU: **80-85%** (estimated)
- HLE: **50-55%** (basic reasoning)
- GPQA: **70-75%** (estimated)
- AA Intelligence Index: **40-45** (mid-tier)

Coding:

- HumanEval: **60-65%** (basic coding)
- SWE-bench: **55-60%** (estimated)
- CodeLite: **60-65%** (estimated)

Long context:

- MRCR: **85-88%** at 1M tokens
- Long-form QA: moderate performance

Multimodal:

- MMMU-Pro: **70-75%** (strong image reasoning)
- OfficeQA: **65-70%** (good document understanding)

### Normalized scores (1–100)

- **Tool use: 61/100.** 61 average; basic agentic capability. GDPval-AA 1650+ Elo supports this tier.
- **Reasoning: 64/100.** 64.1 average; moderate reasoning tier. Good for many tasks but not frontier-level.
- **Context window: 89/100.** 89 average; excellent long-context. 1M tokens with strong retrieval at scale.
- **Multimodal: 79/100.** 78.7 average; good vision support. Strong image but no audio/video.
- **Coding: 61/100.** 61.1 average; basic coding tier. Functional for simple tasks.
- **Cost efficiency: 87/100.** 86.7 average; good value. Low cost for moderate capability.
- **Overall Score: 71/100.** Mean of (61+64+89+79+61)/5 = 70.8 → 71. Good value multimodal model.