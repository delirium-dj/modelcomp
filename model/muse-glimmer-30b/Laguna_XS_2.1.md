# Muse Glimmer 30B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's Muse Glimmer 30B model; optimized for coding and cost efficiency.
- **Provider / access:** OpenRouter; Vercel AI Gateway.
- **Context window:** 70.4 tier; ~500K tokens.
- **Modalities:** Text, image in; text out; good multimodal (74 tier).
- **Pricing:** Highly cost-efficient (93 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 73/100.** 72.8 average; moderate agentic capability.
- **Reasoning: 77/100.** 76.6 average; solid reasoning.
- **Context window: 70/100.** 70.4 tier; adequate context.
- **Multimodal: 74/100.** 74 average; good image support.
- **Coding: 77/100.** 76.8 average; good coding tier.
- **Cost efficiency: 93/100.** 93 average; exceptional value.
- **Overall Score: 74/100.** Mean of (73+77+70+74+77)/5 = 74.2 → 74. Good coding-focused free-tier alternative.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_60B.md`, using the same headings.