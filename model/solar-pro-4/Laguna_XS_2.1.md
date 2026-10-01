# Solar Pro 4 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Sol.ai's Solar Pro 4 model; Chinese language-focused with solid reasoning.
- **Provider / access:** Sol API; OpenRouter; Chat Completions.
- **Context window:** 83.8 tier; ~1M tokens.
- **Modalities:** Text in/out; multilingual focus.
- **Pricing:** Moderate value (82.6 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 68/100.** 68 average; moderate agentic capability.
- **Reasoning: 74/100.** 74.4 average; solid reasoning; good for Chinese NLP.
- **Context window: 84/100.** 83.8 tier; good long-context.
- **Multimodal: 29/100.** 29 tier; text-only; capped by no image/video.
- **Coding: 74/100.** 74 average; decent coding.
- **Cost efficiency: 83/100.** 82.6 average; good value.
- **Overall Score: 66/100.** Mean of (68+74+84+29+74)/5 = 65.8 → 66. Good value model for Chinese language tasks.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Solar_Pro_5.md`, using the same headings.