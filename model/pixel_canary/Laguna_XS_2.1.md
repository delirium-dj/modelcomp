# Pixel Canary — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** Pixel Canary model; Vercel AI Gateway deployment.
- **Provider / access:** Vercel AI Gateway.
- **Context window:** 74.8 tier; ~1M tokens.
- **Modalities:** Text, image in; text out; basic multimodal (28 tier).
- **Pricing:** Free tier (100 cost efficiency).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 69/100.** 68.8 average; moderate agentic capability.
- **Reasoning: 70/100.** 70 average; solid reasoning tier.
- **Context window: 75/100.** 74.8 tier; good long-context.
- **Multimodal: 28/100.** 28 average; basic image support.
- **Coding: 80/100.** 80.3 average; strong coding tier.
- **Cost efficiency: 100/100.** 100 average; free tier.
- **Overall Score: 64/100.** Mean of (69+70+75+28+80)/5 = 64.4 → 64. Good coding model with free tier.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Pixel_Canary_v2.md`, using the same headings.