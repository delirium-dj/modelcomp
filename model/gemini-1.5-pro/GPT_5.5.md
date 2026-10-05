# Gemini 1.5 Pro — findings by GPT 5.5

- Source: Google DeepMind (`gemini-1.5-pro`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's long-context multimodal Pro model that established the 1M-2M token Gemini long-context line before Gemini 2.x/3.x.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI; availability may be legacy/deprecated depending on route.
- **Release / knowledge:** 2024 Gemini 1.5 generation; cutoff not stated.
- **IDs:** `google/gemini-1.5-pro`, `gemini-1.5-pro`.
- **Context window:** **2M tokens** in Google developer blog/model updates.
- **Modalities:** Text, image, audio, video, and PDF input; text output; tool/function calling through Gemini APIs.
- **Pricing (as of 2026-10-05):** Google reduced 1.5 Pro pricing in 2024; current availability/pricing should be checked on Google docs because later Gemini models supersede it.
- **Architecture:** Proprietary Gemini Pro model.

### Raw benchmarks found

Agent / tool use:

- Google developer update published benchmark tables for Gemini 1.5 Pro and Gemini 1.5 Flash production-ready models.
- Exact tool benchmark rows were not recovered in accessible snippets.

Reasoning / knowledge:

- Google reported improved performance for latest Gemini 1.5 Pro versions in its production-model update.
- Later Gemini 2.5 model-card comparisons treat 1.5 Pro as a baseline surpassed by 2.5-family reasoning and long-context performance.

Coding:

- Benchmark tables exist in Google model updates, but exact SWE/LCB values were not recovered here.

Long context:

- Google developer blog explicitly describes Gemini 1.5 Pro's **2M-token** long context and multimodal capabilities.

### Normalized scores (1–100)

- **Tool use: 62/100.** Gemini API tooling is mature, but exact agent rows are limited and the model is older.
- **Reasoning: 66/100.** Strong for its generation, now surpassed by 2.x/3.x models.
- **Context window: 100/100.** 2M context earns full context credit.
- **Multimodal: 84/100.** Broad multimodal input was a defining strength.
- **Coding: 60/100.** Capable for coding, but no exact current coding benchmark row was recovered.
- **Cost efficiency: 60/100.** Legacy Pro pricing/availability is less attractive than later Flash/Lite models.
- **Overall Score: 74/100.** Half-up mean of the five quality dimensions; best fit is legacy workflows needing 2M multimodal context.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

