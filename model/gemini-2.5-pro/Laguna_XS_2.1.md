# Gemini 2.5 Pro — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's Gemini 2.5 Pro; strong reasoning with excellent multimodal capabilities.
- **Provider / access:** Google AI Studio; Vertex AI.
- **Context window:** 92.5 tier; ~1M tokens.
- **Modalities:** Text, image in; text out; excellent vision (86.2 multimodal tier).
- **Pricing:** Moderate value (75 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 71/100.** 70.5 average; moderate agentic capability.
- **Reasoning: 80/100.** 80.2 average; strong reasoning tier.
- **Context window: 93/100.** 92.5 average; excellent long-context.
- **Multimodal: 86/100.** 86.2 average; excellent vision capability.
- **Coding: 77/100.** 76.5 average; good coding tier.
- **Cost efficiency: 75/100.** 75 average; moderate value.
- **Overall Score: 81/100.** Mean of (71+80+93+86+77)/5 = 81.4 → 81. Strong multimodal model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Gemini_3.0_Pro.md`, using the same headings.