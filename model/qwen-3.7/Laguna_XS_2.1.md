# Qwen 3.7 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba's Qwen 3.7-generation dense model; strong reasoning and coding capabilities.
- **Provider / access:** Alibaba Cloud Model Studio; OpenRouter; self-host via HuggingFace.
- **Release / knowledge:** Q3 2026 release; knowledge cutoff undisclosed.
- **Context window:** 1M tokens (YaRN-extended).
- **Modalities:** Text, image, video in; text out; reasoning support; tool calls.

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 81/100.** Mean from top 7 raters; solid agentic capability tier.
- **Reasoning: 86/100.** 86.1 average; strong science/math reasoning; near-frontier tier.
- **Context window: 88/100.** 1M tier at 88.3; good for long-context tasks.
- **Multimodal: 52/100.** Text/image/video in; 51.6 tier; capped by text-only output.
- **Coding: 83/100.** 83.1 average; strong coding tier; good SWE/Pro scores.
- **Cost efficiency: 78/100.** Moderate pricing tier.
- **Overall Score: 78/100.** Mean of (81+86+88+52+83)/5 = 78.0. Good all-rounder model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.