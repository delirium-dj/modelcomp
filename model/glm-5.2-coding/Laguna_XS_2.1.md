# GLM 5.2 Coding — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Tsinghua's GLM 5.2 Coding variant; optimized for coding tasks.
- **Provider / access:** OpenCode Zen; self-host via HuggingFace.
- **Context window:** 85.5 tier; ~1M tokens.
- **Modalities:** Text in/out; text-only (25.3 multimodal tier).
- **Pricing:** Cost-efficient (79.2 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 83/100.** 83.2 average; strong agentic capability.
- **Reasoning: 84/100.** 83.5 average; solid reasoning.
- **Context window: 86/100.** 85.5 tier; good long-context.
- **Multimodal: 25/100.** 25.3 tier; text-only; caps score.
- **Coding: 86/100.** 85.5 average; excellent coding tier.
- **Cost efficiency: 79/100.** 79.2 average; good value.
- **Overall Score: 73/100.** Mean of (83+84+86+25+86)/5 = 73.6 → 73. Excellent coding-specialized model with good value.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Coding.md`, using the same headings.