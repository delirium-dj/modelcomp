# HY4 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY4
- **Short description:** HY4 model; Chinese language model with good reasoning capabilities.
- **Provider / access:** OpenRoute; Chinese APIs.
- **Context window:** 89.2 tier; ~1M tokens.
- **Modalities:** Text in/out; limited multimodal (20.8 tier).
- **Pricing:** Cost-efficient (85.5 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 78/100.** 78.3 average; strong agentic capability.
- **Reasoning: 78/100.** 78.3 average; solid reasoning tier.
- **Context window: 89/100.** 89.2 tier; excellent long-context.
- **Multimodal: 21/100.** 20.8 tier; text-only primarily.
- **Coding: 78/100.** 77.5 average; good coding tier.
- **Cost efficiency: 86/100.** 85.5 average; excellent value.
- **Overall Score: 69/100.** Mean of (78+78+89+21+78)/5 = 72.8 → 73. Good reasoning model with excellent value.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `HY5.md`, using the same headings.