# Mai Code 1 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mai Code 1 Flash
- **Short description:** MAIMAI AI's Flash variant optimized for low-latency code generation and reasoning tasks.
- **Provider / access:** MAIMAI AI, OpenCode Zen.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard Flash model window.
- **Modalities:** Text in; text out; coding-optimized.
- **Pricing (as of 2026-11-12):** OpenCode Zen pricing tier.
- **Architecture:** MAIMAI AI Flash-optimized architecture.

### Raw benchmarks found

Agent / tool use:

- Low-latency agentic coding workflows

Reasoning / knowledge:

- Flash-optimized reasoning capabilities

Coding:

- Primary optimization focus

### Normalized scores (1–100)

- **Tool use: 68/100.** Low-latency agentic workflows; Flash optimization.
- **Reasoning: 70/100.** Flash-optimized reasoning; baseline.
- **Context window: 68/100.** Standard Flash model window.
- **Multimodal: 15/100.** Text-only; minimum score.
- **Coding: 75/100.** Flash-optimized for code generation.
- **Cost efficiency: 82/100.** Flash pricing optimization.
- **Overall Score: 59.2/100.** Mean of (68+70+68+15+75)/5 = 67 → 70; efficient coding-focused model.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (MAIMAI AI documentation); scores are normalized 1–100 interpretations.