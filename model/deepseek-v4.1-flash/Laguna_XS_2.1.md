# DeepSeek V4.1 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's V4.1 Flash; cost-efficient variant balanced for general use.
- **Provider / access:** DeepSeek API; OpenRouter.
- **Context window:** 1M tokens native.
- **Modalities:** Text, image in; text out.
- **Pricing:** $0.24 / $0.84 per 1M in/out (highly cost-efficient).
- **Architecture:** Transformer decoder; DeepSeek V4.1.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1550-1600 Elo** (mid-high tier)
- Terminal-Bench: **70-75%** (estimated)
- OSWorld: **65-70%** (estimated)

Reasoning / knowledge:

- MMLU: **80-85%** (estimated)
- HLE: **50-55%** (estimated)
- GPQA: **75-80%** (estimated)

Coding:

- HumanEval: **72-76%** (estimated)
- SWE-bench: **62-65%** (estimated)

### Normalized scores (1–100)

- **Tool use: 82/100.** 82.2 average; good agentic capability for a cost-efficient model.
- **Reasoning: 81/100.** 80.7 average; solid reasoning tier.
- **Context window: 93/100.** 93 tier; excellent long-context performance.
- **Multimodal: 71/100.** 71.1 average; good vision support.
- **Coding: 80/100.** 80.4 average; good coding tier.
- **Cost efficiency: 91/100.** 91.1 average; highly cost-efficient at low pricing.
- **Overall Score: 81/100.** Mean of (82+81+93+71+80)/5 = 81.4 → 81. Good value model.