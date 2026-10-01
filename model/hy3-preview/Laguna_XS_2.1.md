# HY3 Preview — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 Preview
- **Short description:** HY3 Preview model; experimental variant with cost efficiency.
- **Provider / access:** OpenRoute; preview deployment.
- **Context window:** 74.2 tier; ~500K tokens.
- **Modalities:** Text in/out; basic multimodal.
- **Pricing:** Cost-efficient (86.8 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 68/100.** 67.8 average; moderate agentic capability.
- **Reasoning: 72/100.** 71.6 average; solid reasoning tier.
- **Context window: 74/100.** 74.2 tier; adequate context.
- **Multimodal: 44/100.** 44.2 tier; basic multimodal.
- **Coding: 72/100.** 71.6 average; decent coding.
- **Cost efficiency: 87/100.** 86.8 average; excellent value.
- **Overall Score: 66/100.** Mean of (68+72+74+44+72)/5 = 66.0 → 66. Good budget preview model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `HY3_Final.md`, using the same headings.