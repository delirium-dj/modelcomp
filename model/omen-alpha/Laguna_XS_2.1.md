# Omen Alpha — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** Omen Alpha model; experimental variant with high cost efficiency.
- **Provider / access:** OpenRouter; chat APIs.
- **Context window:** 74.2 tier; ~1M tokens.
- **Modalities:** Text, image in; text out; basic multimodal (46.8 tier).
- **Pricing:** Highly cost-efficient (94.6 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 61/100.** 61.2 average; basic agentic capability.
- **Reasoning: 64/100.** 64.2 average; moderate reasoning.
- **Context window: 74/100.** 74.2 tier; good long-context.
- **Multimodal: 47/100.** 46.8 tier; text-plus-image; basic.
- **Coding: 68/100.** 68.4 average; moderate coding.
- **Cost efficiency: 95/100.** 94.6 average; excellent value.
- **Overall Score: 63/100.** Mean of (61+64+74+47+68)/5 = 62.8 → 63. Good budget model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Omen_Beta.md`, using the same headings.