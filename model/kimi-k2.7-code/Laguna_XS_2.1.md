# Kimi K2.7 Code — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Kimi's K2.7 Code variant; coding-optimized subclass of K2.7.
- **Provider / access:** Kimi API; OpenRouter.
- **Context window:** 77.7 tier; ~1M tokens.
- **Modalities:** Text, image in; text out; text-heavy (53.7 multimodal tier).
- **Pricing:** Cost-efficient (85.2 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 81/100.** 81.2 average; good agentic capability.
- **Reasoning: 76/100.** 75.7 average; moderate reasoning tier.
- **Context window: 78/100.** 77.7 tier; good long-context.
- **Multimodal: 54/100.** 53.7 tier; text-plus-image; basic.
- **Coding: 82/100.** 82 average; solid coding tier.
- **Cost efficiency: 85/100.** 85.2 average; good value.
- **Overall Score: 74/100.** Mean of (81+76+78+54+82)/5 = 74.2 → 74. Good coding-specialized model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.8_Code.md`, using the same headings.