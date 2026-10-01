# Longcat 2.5 Preview — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Longcat 2.5 Preview
- **Short description:** Longcat 2.5 preview model; experimental release with good context and reasoning.
- **Provider / access:** OpenCode Zen; experimental deployment.
- **Context window:** 98 tier; 1M+ class.
- **Modalities:** Text in/out; minimal multimodal (20 tier).
- **Pricing:** Cost-efficient preview (90 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 81/100.** 81 average from Gemini 3.7 Flash; solid tool use.
- **Reasoning: 83/100.** 83 average; good reasoning tier.
- **Context window: 98/100.** 98 tier; excellent 1M+ context.
- **Multimodal: 20/100.** Very low; text-only or minimal multimodal.
- **Coding: 79/100.** 79 average; good coding capability.
- **Cost efficiency: 90/100.** 90 tier; excellent value.
- **Overall Score: 72/100.** Mean of (81+83+98+20+79)/5 = 72.2 → 72. Strong context model; multimodal limits score.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters (Gemini 3.7 Flash); normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Longcat_2.6.md`, using the same headings.