# Llama 3.2 Vision — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's Llama 3.2 Vision Instruct; multimodal variant with strong vision capabilities.
- **Provider / access:** HuggingFace; self-host; OpenRouter.
- **Context window:** 67.4 tier; ~1M tokens.
- **Modalities:** Text, image in; text out; vision-focused.
- **Pricing:** Cost-efficient (90.2 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 47/100.** 47 average; basic agentic capability.
- **Reasoning: 58/100.** 57.8 average; moderate reasoning.
- **Context window: 67/100.** 67.4 tier; decent context.
- **Multimodal: 70/100.** 70.4 average; good vision support.
- **Coding: 50/100.** 50 average; basic coding.
- **Cost efficiency: 90/100.** 90.2 average; excellent value.
- **Overall Score: 58/100.** Mean of (47+58+67+70+50)/5 = 58.4 → 58. Good open vision model with excellent value.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Llama_3.3_Vision.md`, using the same headings.