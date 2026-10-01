# Grok 4.1 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's Grok 4.1 model; earlier generation in the Grok 4.x lineup.
- **Provider / access:** xAI API; OpenRouter; Oracle Cloud; Chat Completions/Responses API.
- **Context window:** Similar to Grok 4.x series; 1M class.
- **Modalities:** Text, image, PDF in; text out; reasoning support; tool calls.
- **Pricing:** Competitive xAI pricing tier; typically lower cost than premium models in family.

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 74/100.** 73.8 average from top 6 raters; solid agentic capability.
- **Reasoning: 82/100.** 81.8 average; strong reasoning tier.
- **Context window: 79/100.** 79 tier; good but below 1M-max models.
- **Multimodal: 61/100.** 60.5 tier; basic multimodal support.
- **Coding: 71/100.** 70.7 average; moderate coding capability.
- **Cost efficiency: 79/100.** 78.8 average; good value tier.
- **Overall Score: 73/100.** Mean of (74+82+79+61+71)/5 = 73.4 → 73. Good value model for its generation.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.5.md`, using the same headings.