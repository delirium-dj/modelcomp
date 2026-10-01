# Claude Sonnet 4 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's Claude Sonnet 4; improved over 3.5 with better reasoning and coding.
- **Provider / access:** Anthropic API; Claude Code.
- **Context window:** 200K tokens.
- **Modalities:** Text, image in; text out.
- **Pricing:** Moderate tier.

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 74/100.** 74 average; good agentic capability.
- **Reasoning: 77/100.** 76.7 average; solid reasoning tier.
- **Context window: 75/100.** 75.3 tier; 200K context.
- **Multimodal: 67/100.** 67.3 average; good multimodal.
- **Coding: 79/100.** 79 average; strong coding tier.
- **Cost efficiency: 64/100.** 63.5 average; moderate value.
- **Overall Score: 74.4/100.** Mean of (74+77+75+67+79)/5 = 74.4 → 74. Good mid-tier model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.5.md`, using the same headings.