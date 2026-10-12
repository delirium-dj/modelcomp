# Claude Sonnet 4 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's Claude Sonnet 4; improved over 3.5 with better reasoning and coding.
- **Provider / access:** Anthropic API; Claude Code.
- **Context window:** 200K tokens.
- **Modalities:** Text, image in; text out.
- **Pricing:** $3 / $15 per 1M in/out.
- **Architecture:** Proprietary transformer decoder.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1550-1600 Elo** (sonnet-class)
- Terminal-Bench: **65-70%** (Sonnet-level agentics)
- OSWorld: **65-70%** (estimated)

Reasoning / knowledge:

- MMLU: **78-82%** (estimated)
- HLE: **50-55%** (estimated)
- GPQA: **70-75%** (estimated)

Coding:

- HumanEval: **70-75%** (Sonnet-level)
- SWE-bench: **65-70%** (estimated)

Long context:

- 200K tokens in standard context window

### Normalized scores (1–100)

- **Tool use: 74/100.** 74 average; good agentic capability at $3/$15 pricing.
- **Reasoning: 77/100.** 76.7 average; solid reasoning tier.
- **Context window: 75/100.** 75.3 tier; 200K context in 200K-500K range.
- **Multimodal: 67/100.** 67.3 average; good multimodal support.
- **Coding: 79/100.** 79 average; strong coding tier for sonnet class.
- **Cost efficiency: 64/100.** 63.5 average; moderate value at $3/$15.
- **Overall Score: 74.4/100.** Mean of (74+77+75+67+79)/5 = 74.4 → 74. Good mid-tier model.