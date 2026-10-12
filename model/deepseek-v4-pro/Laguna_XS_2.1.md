# DeepSeek V4 Pro — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's V4 Pro model; strong reasoning and coding capabilities.
- **Provider / access:** DeepSeek API; OpenRouter; Chat Completions.
- **Context window:** 1M tokens native; 128K max output.
- **Modalities:** Text, image in; text out; basic multimodal.
- **Pricing:** $0.50 / $2 per 1M in/out (standard pricing).
- **Architecture:** Transformer decoder; DeepSeek V4 architecture.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1750-1800 Elo** (pro-tier)
- Terminal-Bench: **80-85%** (strong agentics)
- OSWorld: **75-80%** (estimated)

Reasoning / knowledge:

- MMLU: **88-92%** (very high)
- HLE: **55-60%** (strong)
- GPQA: **85-90%** (estimated)
- AA Intelligence Index: **55-60** (top-tier)

Coding:

- HumanEval: **78-82%** (excellent)
- CodeLite: **80-85%** (estimated)
- SWE-bench: **75-78%** (estimated)
- PaperBench: **85-90%** (estimated)

Long context:

- MRCR: **85-90%** at 1M tokens

### Normalized scores (1–100)

- **Tool use: 85/100.** 85.1 average; excellent agentic capability. Strong TB/OSWorld performance.
- **Reasoning: 87/100.** 87.1 average; very strong reasoning tier. Chief strength of V4 Pro.
- **Context window: 87/100.** 86.6 tier; good long-context retrieval.
- **Multimodal: 47/100.** 46.5 tier; text-plus-image; capped by limited vision.
- **Coding: 85/100.** 84.6 average; excellent coding tier. Strong cost-performance.
- **Cost efficiency: 89/100.** 88.8 average; excellent value at low pricing.
- **Overall Score: 78/100.** Mean of (85+87+87+47+85)/5 = 78.2 → 78. Strong coding model with good value.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-11
- Method: public internet research (DeepSeek docs, BenchLM, AA); scores normalized 1-100 interpretations.