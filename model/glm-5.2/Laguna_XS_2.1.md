# GLM 5.2 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Tsinghua's GLM 5.2 model; strong reasoning and coding with multilingual support.
- **Provider / access:** OpenCode Zen; self-host via HuggingFace.
- **Context window:** 89.8 tier; ~1M tokens.
- **Modalities:** Text in/out; minimal multimodal.
- **Pricing:** Very cost-efficient (89.8 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 80/100.** 80 average; good agentic capability.
- **Reasoning: 82/100.** 82.3 average; solid reasoning.
- **Context window: 90/100.** 89.8 tier; excellent long-context.
- **Multimodal: 34/100.** 34.3 tier; text-only mostly caps this.
- **Coding: 81/100.** 80.8 average; strong coding tier.
- **Cost efficiency: 90/100.** 89.8 average; exceptional value.
- **Overall Score: 73/100.** Mean of (80+82+90+34+81)/5 = 73.4 → 73. Good coding/reasoning model with excellent cost efficiency.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.