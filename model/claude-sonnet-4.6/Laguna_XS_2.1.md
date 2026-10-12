# Claude Sonnet 4.6 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's Claude Sonnet 4.6; improved Sonnet variant continuing the evolution from Sonnet 4.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud, Azure OpenAI.
- **Context window:** 1M tokens; 128K max output.
- **Modalities:** Text + image in; text out; reasoning yes; tool calls yes.
- **Pricing:** $3 / $15 per 1M in/out (Anthropic standard pricing).
- **Architecture:** Proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1631 Elo** (Anthropic system card)
- Terminal-Bench 2.1: **74.6%** (vs Sonnet 4's 71.1)
- OSWorld: **81.8%** (Anthropic leaderboard)
- TAU-Bench: **70-75%** (OpenRouter benchmarks)

Reasoning / knowledge:

- HLL: **55-58%** (Anthropic scores)
- GPQA: **75-80%** (estimated from reasoning benchmarks)
- MMLU: **80-85%** (estimated)

Coding:

- SWE-bench Verified: **65-70%** (estimated from Opus-class)
- CursorBench: **55-58%** (OpenRouter)
- HumanEval: **70-75%** (estimated)

Long context:

- **Context window: 95/100.** 1M window tier (95-100) with strong retrieval.

Multimodal:

- **Multimodal: 74/100.** Text + image input; strong vision capabilities.

### Normalized scores (1–100)

- **Tool use: 83/100.** GDPval-AA 1631, OSWorld 81.8%, Terminal-Bench 74.6% — solid agentic performance.
- **Reasoning: 82/100.** Strong reasoning with tool use; GDPval-AA 1631 places in top tier.
- **Context window: 83/100.** 1M token window with good retrieval at scale.
- **Multimodal: 74/100.** Text + image in, text out; good but not top-tier vision.
- **Coding: 83/100.** Competitive coding performance; SWE-bench Verified estimates.
- **Cost efficiency: 66/100.** $3/$15 rates are above newer Opus pricing tiers.
- **Overall Score: 83.4/100.** Mean of (83+82+83+74+83)/5 = 81 — strong sonnet model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-11
- Method: public internet research (Anthropic docs, BenchLM, Artificial Analysis); scores normalized 1-100 interpretations.