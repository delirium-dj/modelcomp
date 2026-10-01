# Qwen 3.8 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's Qwen 3.8 model; strong reasoning with good multimodal support.
- **Provider / access:** Alibaba Cloud; OpenRouter.
- **Context window:** 85.2 tier; ~1M tokens.
- **Modalities:** Text, image, video in; text out; good multimodal (75.8 tier).
- **Pricing:** Moderate cost efficiency (83.2 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 86/100.** 85.5 average; strong agentic capability.
- **Reasoning: 86/100.** 86.2 average; excellent reasoning tier.
- **Context window: 85/100.** 85.2 tier; good long-context.
- **Multimodal: 76/100.** 75.8 average; good image/video support.
- **Coding: 84/100.** 84.2 average; strong coding tier.
- **Cost efficiency: 83/100.** 83.2 average; good value.
- **Overall Score: 83/100.** Mean of (86+86+85+76+84)/5 = 83.4 → 83. Strong all-rounder.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Qwen_3.9.md`, using the same headings.