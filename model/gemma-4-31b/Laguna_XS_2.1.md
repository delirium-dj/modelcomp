# Gemma 4 31B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B IT
- **Short description:** Google's Gemma 4 31B instruct-tuned model; Google's open language model series.
- **Provider / access:** HuggingFace (Apache-2.0); self-host; OpenRouter.
- **Context window:** 76.7 tier; ~1M tokens.
- **Modalities:** Text in/out; image support (71.3 tier).
- **Pricing:** Extremely cost-efficient (96 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 71/100.** 71.3 average; moderate agentic capability.
- **Reasoning: 76/100.** 76 average; solid reasoning tier.
- **Context window: 77/100.** 76.7 tier; adequate context.
- **Multimodal: 71/100.** 71.3 average; good image support.
- **Coding: 78/100.** 77.5 average; solid coding tier.
- **Cost efficiency: 96/100.** 96 average; excellent value.
- **Overall Score: 74.6/100.** Mean of (71+76+77+71+78)/5 = 74.6 → 74. Good open model with excellent cost efficiency.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Gemma_4.1_31B.md`, using the same headings.