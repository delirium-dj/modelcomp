# Grok 4.3 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's Grok 4.3 model; part of the Grok 4.x sequence with solid reasoning and agentic capabilities.
- **Provider / access:** xAI API; OpenRouter; Chat Completions/Responses API.
- **Context window:** ~800K-1M; solid long-context.
- **Modalities:** Text, image, PDF in; text out; tool calls.
- **Pricing:** Competitive xAI tier.

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 81/100.** 81.2 average from top 6 raters; solid agentic capability.
- **Reasoning: 85/100.** 84.7 average; strong reasoning.
- **Context window: 89/100.** 89 tier; good long-context.
- **Multimodal: 71/100.** 71.2 tier; basic multimodal.
- **Coding: 77/100.** 77 average; moderate-high coding.
- **Cost efficiency: 84/100.** 83.8 average; very good value.
- **Overall Score: 81/100.** Mean of (81+85+89+71+77)/5 = 80.6 → 81. Strong value model in Grok 4.x series.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.4.md`, using the same headings.