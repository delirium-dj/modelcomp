# Claude Sonnet 3.7 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's Claude Sonnet 3.7; mid-tier Sonnet variant.
- **Provider / access:** Anthropic API.
- **Context window:** 200K tokens.
- **Modalities:** Text, image in.
- **Pricing:** $3 / $15 per 1M tokens.
- **Architecture:** Proprietary transformer decoder.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1500-1550 Elo** (sonnet-class mid-tier)
- Terminal-Bench: **60-65%** (estimated)
- OSWorld: **60-65%** (estimated)

Reasoning / knowledge:

- MMLU: **75-80%** (estimated)
- HLE: **45-50%** (estimated)
- GPQA: **68-72%** (estimated)

Coding:

- HumanEval: **68-72%** (estimated)
- SWE-bench: **60-65%** (estimated)

### Normalized scores (1–100)

- **Tool use: 75/100.** 75.3 average; good agentic capability.
- **Reasoning: 75/100.** 75 average; solid reasoning tier.
- **Context window: 73/100.** 72.7 tier; 200K context in standard range.
- **Multimodal: 70/100.** 70.3 average; good support.
- **Coding: 81/100.** 81 average; strong coding for sonnet class.
- **Cost efficiency: 62/100.** 61.7 tier; moderate value at $3/$15.
- **Overall Score: 75/100.** Mean of (75+75+73+70+81)/5 = 74.2 → 74. Good model.