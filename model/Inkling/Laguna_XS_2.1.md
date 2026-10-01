# Inkling — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Inkling model; strong multimodal capabilities with moderate reasoning.
- **Provider / access:** OpenCode Zen; various APIs.
- **Context window:** 83.3 tier; ~1M tokens.
- **Modalities:** Text, image, video in; text out; excellent multimodal.
- **Pricing:** Moderate value (82.3 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 76/100.** 76.3 average; good agentic capability.
- **Reasoning: 80/100.** 80 average; solid reasoning tier.
- **Context window: 83/100.** 83.3 tier; good long-context.
- **Multimodal: 84/100.** 84.2 average; excellent multimodal (video/image/text).
- **Coding: 78/100.** 78 average; good coding.
- **Cost efficiency: 82/100.** 82.3 average; good value.
- **Overall Score: 80/100.** Mean of (76+80+83+84+78)/5 = 80.2 → 80. Best fit: multimodal tasks with video/image input.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Inkling_2.0.md`, using the same headings.