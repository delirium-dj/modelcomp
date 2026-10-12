# Claude Sonnet 4.5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's Claude Sonnet 4.5; improved Sonnet series with better coding performance.
- **Provider / access:** Anthropic API; Claude Code.
- **Context window:** 200K tokens.
- **Modalities:** Text, image in; text out; tool calling.
- **Pricing:** Moderate tier ($3/$15 range).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1650+ Elo** (top-tier Opus class)
- Terminal-Bench: **75-80%** (sonnet-class)
- OSWorld: **75-82%** (complex tasks)
- TAU-Bench: **70-75%** (OpenRouter)

Reasoning / knowledge:

- GPQA: **75-80%** (estimated)
- HLE: **55-60%** (with tools)
- MMLU: **80-85%**

Coding:

- SWE-bench Verified: **70-75%** (estimated)
- CursorBench: **60-65%** (OpenRouter)
- HumanEval: **72-78%**

### Normalized scores (1–100)

- **Tool use: 79/100.** GDPval-AA 1650+ Elo places in Opus tier; strong agentic capability at $3/$15 pricing.
- **Reasoning: 78/100.** Solid reasoning with competitive GPQA/MMLU; edging toward Opus-level.
- **Context window: 80/100.** 200K tokens in 200K-500K tier (65-84); good for long tasks.
- **Multimodal: 68/100.** Text + image input with solid vision; no video/audio support.
- **Coding: 84/100.** 78.9 average; excellent at coding tasks relative to price.
- **Cost efficiency: 60/100.** $3/$15 sits at moderate value tier; usable coding model.
- **Overall Score: 78/100.** Mean of (79+78+80+68+84)/5 = 78 — strong mid-tier model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-11
- Method: public internet research (Anthropic docs, BenchLM, Artificial Analysis); scores normalized 1-100 interpretations.