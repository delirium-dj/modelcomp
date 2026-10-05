# Google Gemini 2.5 Flash-Lite — findings by GPT 5.5

- Source: Google DeepMind (`google-gemini-2.5-flash-lite`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash-Lite
- **Short description:** Google’s stable, generally available low-cost Gemini 2.5 model for fast multimodal extraction, routing, and lightweight reasoning.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI, and compatible routers.
- **Release / knowledge:** Stable GA announced in 2025; cutoff not stated.
- **IDs:** `google/gemini-2.5-flash-lite`, `gemini-2.5-flash-lite`.
- **Context window:** **1M tokens**.
- **Modalities:** Text, image, audio, video, and PDF input; text output; controllable thinking budgets; native tools including Google Search grounding, Code Execution, and URL Context.
- **Pricing (as of 2026-10-05):** Google pricing page lists Flash-Lite with low per-token rates and context-caching price around **$0.03/M** for text/image/video; common public summaries cite about **$0.10/M input** and **$0.40/M output**.
- **Architecture:** Proprietary Gemini Flash-Lite model.

### Raw benchmarks found

Agent / tool use:

- Google GA blog states Flash-Lite supports native tools including Grounding with Google Search, Code Execution, and URL Context.
- OpenRouter page includes an Artificial Analysis benchmark summary for the exact model.

Reasoning / knowledge:

- Gemini 2.5 family paper/model materials compare Flash-Lite with Gemini 2.5 Flash, 2.0 Flash, and 1.5 Pro.
- Public evaluations of video scene understanding include Gemini 2.5 Flash and Flash-Lite configurations across 100 hours of video.

Coding:

- Native Code Execution is supported, but no exact SWE-bench/LiveCodeBench row was recovered.

Long context:

- Google GA blog reports **1M-token** context window.

### Normalized scores (1–100)

- **Tool use: 62/100.** Native tools are broad and mature, though standard agent benchmark values were not extracted.
- **Reasoning: 62/100.** Lightweight reasoning is useful, but below full Flash/Pro models.
- **Context window: 92/100.** 1M context earns very strong context credit.
- **Multimodal: 82/100.** Broad text/image/audio/video/PDF input support is a major strength.
- **Coding: 55/100.** Code Execution support is useful, but no direct coding benchmark was verified.
- **Cost efficiency: 96/100.** Ultra-low Flash-Lite pricing and cache support are excellent.
- **Overall Score: 71/100.** Half-up mean of the five quality dimensions; best fit is cheap large-context multimodal extraction and routing.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

