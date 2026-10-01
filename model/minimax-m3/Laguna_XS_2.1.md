# MiniMax M3 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's M3 model; strong language understanding with good multimodal capabilities.
- **Provider / access:** MiniMax API; OpenRouter; Chat Completions API.
- **Context window:** ~1M tokens; 94.5 tier.
- **Modalities:** Text, image in; text out; good multimodal support.
- **Pricing:** Cost-efficient (88.5 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 82/100.** 81.7 average; solid agentic capability.
- **Reasoning: 78/100.** 77.8 average; moderate-high reasoning.
- **Context window: 95/100.** 94.5 average; excellent long-context.
- **Multimodal: 81/100.** 80.8 average; strong image capability.
- **Coding: 81/100.** 81 average; good coding tier.
- **Cost efficiency: 89/100.** 88.5 average; very good value.
- **Overall Score: 83.4/100.** Mean of (82+78+95+81+81)/5 = 83.4 → 84. Good all-around model with strong multimodal.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `MiniMax_M4.md`, using the same headings.