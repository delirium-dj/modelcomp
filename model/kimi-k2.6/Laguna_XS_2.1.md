# Kimi K2.6 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Kimi's K2.6 model; Korean-focused model with strong reasoning and coding.
- **Provider / access:** Kimi API; OpenRouter.
- **Context window:** 80 tier; ~1M tokens.
- **Modalities:** Text, image in; text out; good multimodal (77.8 tier).
- **Pricing:** Cost-efficient (87.5 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 84/100.** 83.5 average; strong agentic capability.
- **Reasoning: 86/100.** 86.3 average; excellent reasoning tier.
- **Context window: 80/100.** 80 average; good long-context.
- **Multimodal: 78/100.** 77.8 average; good image support.
- **Coding: 87/100.** 86.5 average; excellent coding tier.
- **Cost efficiency: 88/100.** 87.5 average; excellent value.
- **Overall Score: 83/100.** Mean of (84+86+80+78+87)/5 = 83.0 → 83. Strong coding/reasoning model with excellent value.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.0.md`, using the same headings.