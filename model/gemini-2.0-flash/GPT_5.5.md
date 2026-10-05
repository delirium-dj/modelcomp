# Gemini 2.0 Flash — findings by GPT 5.5

- Source: Google DeepMind (`gemini-2.0-flash`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's fast multimodal Gemini 2.0 model, widely used for low-latency text, image, audio, video, and tool workflows.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI.
- **Release / knowledge:** Gemini 2.0 generation released in 2024/2025; cutoff not verified.
- **IDs:** `google/gemini-2.0-flash`, `gemini-2.0-flash`.
- **Context window:** Public Google model-card family comparisons list Gemini 2.0 Flash alongside later Gemini models; common API context is **1M tokens**.
- **Modalities:** Text, image, audio, and video input; text output; tool/function calling and Google ecosystem grounding.
- **Pricing (as of 2026-10-05):** Google Gemini pricing varies by route and has been superseded by later Flash generations; 2.0 Flash remains an economical Flash-tier model where available.
- **Architecture:** Proprietary Gemini Flash model.

### Raw benchmarks found

Agent / tool use:

- Gemini 2.5 Flash model card includes comparison rows for **Gemini 2.0 Flash Non-thinking** across capability benchmarks, including long context.
- Exact tool benchmark values were not extracted from snippets.

Reasoning / knowledge:

- Gemini 2.0 Flash is a previous-generation Flash model; model-card comparison indicates it is below Gemini 2.5 Flash on updated benchmark suites.

Coding:

- Coding benchmark rows exist in Google model-card comparisons, but exact values were not recovered here.

Long context:

- Gemini Flash API family supports **1M-token** context in public Google model documentation.

### Normalized scores (1–100)

- **Tool use: 62/100.** Gemini tool/function support is mature, but exact agent rows are not recovered.
- **Reasoning: 62/100.** Older Flash model remains useful but sits below 2.5/3.x reasoning models.
- **Context window: 92/100.** 1M context earns very strong context credit.
- **Multimodal: 84/100.** Broad multimodal input support is a major strength.
- **Coding: 58/100.** Usable for coding, but no exact standard row was recovered and newer Flash models improve on it.
- **Cost efficiency: 86/100.** Flash-tier economics are strong when the model remains available.
- **Overall Score: 72/100.** Half-up mean of the five quality dimensions; best fit is economical multimodal ingestion and extraction.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

