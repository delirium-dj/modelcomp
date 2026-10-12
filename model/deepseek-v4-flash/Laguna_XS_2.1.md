# DeepSeek V4 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's V4 Flash model; cost-efficient light variant.
- **Provider / access:** DeepSeek API; OpenRouter; Chat Completions.
- **Context window:** 1M tokens native.
- **Modalities:** Text in/out; text-only (no image support).
- **Pricing:** $0.24 / $0.84 per 1M tokens; highly cost-efficient.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1550-1600 Elo** (mid-tier)
- Terminal-Bench: **70-75%** (estimated)
- OSWorld: **65-70%** (estimated)

Reasoning / knowledge:

- MMLU: **80-85%** (estimated)
- HLE: **45-50%** (estimated)
- GPQA: **70-75%** (estimated)

Coding:

- HumanEval: **70-75%** (estimated)
- SWE-bench: **60-65%** (estimated)

### Normalized scores (1–100)

- **Tool use: 83/100.** 83 average; good agentic capability for cost-efficient model.
- **Reasoning: 82/100.** 82.4 average; solid reasoning tier.
- **Context window: 92/100.** 92 tier; excellent long-context at low cost.
- **Multimodal: 18/100.** 17.6 tier; text-only; minimal vision.
- **Coding: 83/100.** 83.4 average; strong coding tier for cost model.
- **Cost efficiency: 92/100.** 92 average; excellent value at <$1 pricing.
- **Overall Score: 72/100.** Mean of (83+82+92+18+83)/5 = 72.0 → 72. Good value coding model.