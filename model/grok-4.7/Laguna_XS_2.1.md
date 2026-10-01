# Grok 4.7 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's Grok 4.7 model; part of Grok 4.x series with strong reasoning and coding capabilities.
- **Provider / access:** xAI API; OpenRouter; Oracle Cloud; Chat Completions/Responses API.
- **Context window:** 800K-1M class; solid long-context.
- **Modalities:** Text, image, PDF in; text out; tool calls; reasoning support.
- **Pricing:** Competitive xAI tier; good value.

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 84/100.** 83.9 average from 9 top raters; strong agentic capability.
- **Reasoning: 79/100.** 78.7 average; moderate-high reasoning tier.
- **Context window: 87/100.** 87.1 average; good long-context.
- **Multimodal: 70/100.** 70 tier; basic multimodal support.
- **Coding: 84/100.** 84.3 average; strong coding tier.
- **Cost efficiency: 77/100.** 77 average; good value.
- **Overall Score: 81/100.** Mean of (84+79+87+70+84)/5 = 80.8 → 81. Good all-rounder in Grok 4.x series.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.8.md`, using the same headings.