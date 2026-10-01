# HY3 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3
- **Short description:** HY3 model; Chinese language model with solid general capabilities.
- **Provider / access:** OpenRoute; Chinese APIs.
- **Context window:** 76.2 tier; ~500K-1M tokens.
- **Modalities:** Text in/out; language-focused.
- **Pricing:** Cost-efficient (86.7 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 73/100.** 73.3 average; moderate agentic capability.
- **Reasoning: 79/100.** 78.5 average; solid reasoning tier.
- **Context window: 76/100.** 76.2 tier; good for Chinese models.
- **Multimodal: 59/100.** 58.5 tier; basic multimodal.
- **Coding: 75/100.** 75.2 average; decent coding.
- **Cost efficiency: 87/100.** 86.7 avg; excellent value.
- **Overall Score: 72/100.** Mean of (73+79+76+59+75)/5 = 72.4 → 72. Good value Chinese model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `HY4.md`, using the same headings.