# Union Alpha — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** Union Alpha model; specialized reasoning model.
- **Provider / access:** Various APIs.
- **Context window:** 76.9 tier; ~1M tokens.
- **Modalities:** Text, image in; text out.
- **Pricing:** Moderate value (73.3 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 74/100.** 74 average; solid agentic capability.
- **Reasoning: 81/100.** 81.4 average; strong reasoning tier.
- **Context window: 77/100.** 76.9 tier; good long-context.
- **Multimodal: 68/100.** 67.9 average; decent multimodal.
- **Coding: 82/100.** 82.4 average; strong coding tier.
- **Cost efficiency: 73/100.** 73.3 average; moderate value.
- **Overall Score: 76/100.** Mean of (74+81+77+68+82)/5 = 74.4 → 74. Good reasoning/coding model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Union_Beta.md`, using the same headings.