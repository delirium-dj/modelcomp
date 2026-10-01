# DeepSeek V4 Vision — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's V4 Vision Experimental; enhanced vision capabilities.
- **Provider / access:** DeepSeek API; OpenRouter.
- **Context window:** 82.8 tier; ~1M tokens.
- **Modalities:** Text, image, video in; text out; vision focus (78.7 multimodal tier).
- **Pricing:** Highly cost-efficient (95.3 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 79/100.** 79.3 average; strong agentic capability.
- **Reasoning: 72/100.** 72 average; moderate reasoning tier.
- **Context window: 83/100.** 82.8 tier; good long-context.
- **Multimodal: 79/100.** 78.7 average; excellent vision support.
- **Coding: 77/100.** 76.8 average; solid coding tier.
- **Cost efficiency: 95/100.** 95.3 average; excellent value.
- **Overall Score: 78/100.** Mean of (79+72+83+79+77)/5 = 76.0 → 76. Vision-focused model with excellent value.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V5_Vision.md`, using the same headings.