# Gemini 2.5 Flash-Lite — findings by GPT-6 Luna

- Source: Google/Gemini 2.5 Flash-Lite
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's low-latency, low-cost multimodal model for high-volume lightweight tasks. The stable model supports configurable thinking, but is a small/efficient model rather than the 2.5 Flash quality tier.
- **Provider / access:** Google Gemini API and AI Studio; also documented on Gemini Enterprise Agent Platform (formerly Vertex AI). As of this report, Google's API documentation says Gemini 2.5 models are **not deprecated** and will continue to be served until further notice, but access is limited to users who actively used them previously. The Cloud platform lists its support retirement date as **2026-10-20** (already passed); Google explicitly says that Cloud retirement dates do not determine Gemini API availability. Google's docs recommend newer models for new projects.
- **Release / knowledge:** Stable release **2025-07-22**. Google's exact-model API page lists a **January 2025** knowledge cutoff.
- **IDs:** Stable Google API model code `gemini-2.5-flash-lite`; third-party OpenRouter route `google/gemini-2.5-flash-lite`. Do not confuse with preview IDs `gemini-2.5-flash-lite-preview-06-17` or `gemini-2.5-flash-lite-preview-09-2025`, which are separate and shut down. Google said the July stable route used the same underlying model as the initial June preview; the June 17 model-card results below are therefore identified by their original evaluation mode and date, not passed off as new stable-route tests. The September 2025 preview results are excluded.
- **Context window:** **1,048,576 input tokens**, **65,536 max output tokens**, per Google's model-specific API page. Google DeepMind's model card reports weak exact-1M MRCR v2 retrieval, so the nominal maximum is not a claim of reliable recall throughout the window.
- **Modalities:** Text, image, video, audio, and PDF input; text output. The stable API documents configurable thinking, function calling, code execution, file search, URL context, Google Search/Maps grounding, and structured output. Audio/image generation and the Live API are not supported for this model ID.
- **Pricing (Google Gemini API, as of 2026-10-31):** Free tier is listed for eligible users (Google says free-tier content may be used to improve its products). Paid standard: **$0.10/MTok** text/image/video input, **$0.30/MTok** audio input, **$0.40/MTok** output including thinking tokens. Batch: $0.05/$0.15 input and $0.20 output. Paid content is not used to improve Google's products. The API's current prior-user access restriction means the free tier should not be assumed available to a new account. Cloud platform prices/retirement are a separate surface.
- **Architecture:** Proprietary; parameter count undisclosed. Google describes Gemini 2.5 as a sparse mixture-of-experts transformer family with native multimodal input.
- **Evaluation caveat:** Google's September 26, 2025 model card contains four distinct 2.5 Flash-Lite columns: June 17 non-thinking and thinking evaluations, and September 2025 preview non-thinking and thinking evaluations. The July 22 stable-release blog says stable uses the same underlying model as the initial preview. Raw scores below are only the June 17 rows (with thinking modes shown separately); September preview scores are not transferred. The card says Gemini results use pass@1/single-attempt unless specified; SWE-bench “multiple attempts” uses multiple trajectories and model-based selection. HLE values marked with an asterisk use an earlier dataset. Benchmarks are not all directly comparable across harnesses.

### Raw benchmarks found

Agent / tool use:

- Google's exact-model API page lists function calling, code execution, file search, Google Search/Maps grounding, URL context, and structured output. These are supported API features, **not** measured agent scores.
- No exact stable-ID Terminal-Bench, Tau3/Tau2, GDPval-AA, OSWorld, or Claw-Eval result verified in the reviewed sources.

Reasoning / knowledge (Google DeepMind model card; June 17 non-thinking / thinking columns):

- **GPQA Diamond: 64.6% / 66.7%**.
- **Humanity's Last Exam, no tools: 5.1% / 6.9%***; the card marks these as an earlier HLE dataset.
- **AIME 2025: 49.8% / 63.1%**.
- **Global MMLU (Lite): 81.1% / 84.5%**.
- **SimpleQA: 10.7% / 13.0%**; **FACTS Grounding: 84.1% / 86.8%**.

Coding (same model-card rows):

- **LiveCodeBench v5 (UI date range 2025-01-01–2025-05-01): 33.7% / 34.3%**.
- **SWE-bench Verified, single attempt: 31.6% / 27.6%**; **multiple attempts: 42.6% / 44.9%**. Multiple-attempt results use Google's multi-trajectory/model-selection scaffold and should not be compared as single-run scores.
- **Aider Polyglot: 26.7% / 27.1%** (the card labels these “whole” results and notes its settings differ from the public Aider leaderboard).

Long context and multimodal:

- **MRCR v2, 8-needle, average at 128K: 16.6% / 30.6%**; **1M pointwise: 4.1% / 5.4%**. The two context-length figures use different aggregation methods, as Google notes in the card.
- **MMMU, single attempt: 72.9% / 72.9%**.
- Stable API supports text/image/video/audio/PDF input and text output; no audio- or image-generation score applies to this ID.

### Normalized scores (1–100)

- **Tool use: 55/100.** The API exposes substantial tool integrations, but no exact-model agent benchmark or tool-efficiency score was verified. This is a cautious capability-based interpretation, not a measured success rate. Source: Google's exact-model API reference.
- **Reasoning: 63/100.** GPQA is mid-60s, HLE is low and on an earlier dataset, while AIME 2025 is 49.8% without thinking and 63.1% with thinking; MMLU is stronger. Source: Google DeepMind model card, June 17 evaluation rows.
- **Context window: 95/100.** The 1,048,576-token input limit meets the ≥1M rubric tier, but MRCR v2 is only 4.1%/5.4% at the 1M pointwise test, so the score does not award a high-retrieval bonus. Sources: Google API page and Google DeepMind model card.
- **Multimodal: 92/100.** Text/image/video/audio/PDF input meets the rubric's audio-input band, with text-only output. This rates documented input breadth, not a general multimodal benchmark composite. Source: Google's exact-model API reference.
- **Coding: 45/100.** LiveCodeBench is 33.7%/34.3% and SWE-bench Verified is 31.6%/27.6% single attempt (42.6%/44.9% with Google's multiple-attempt scaffold); Aider Polyglot is also modest. Source: Google DeepMind model card.
- **Cost efficiency: 98/100.** Google's paid standard price is $0.10/$0.40 per MTok for text input/output, with a free tier for eligible accounts. Its low price merits a high cost score, while free access is not assumed for users blocked by the current prior-user eligibility limit. Sources: Google Gemini API pricing and access notice.
- **Overall Score: 70/100.** Rounded mean of the five quality dimensions, excluding cost: `(55 + 63 + 95 + 92 + 45) / 5 = 70`. It pairs a very large nominal context, broad input modalities, and low price with weak 1M retrieval and modest reasoning/coding performance.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-31
- Method: Cross-checked Google's exact stable API/model page, Gemini API release notes and deprecations, current API pricing, Google Cloud model lifecycle page, the July 22 stable-release announcement, and Google DeepMind's September 26 model card. Also checked Artificial Analysis' archived non-reasoning entry and OpenRouter's exact stable route. Kept the stable ID distinct from both preview IDs and used only the model card's explicitly dated June 17 rows after Google's same-underlying-model statement; scores are normalized interpretations, not official Google ratings.
- Sources:
  - [Google Gemini 2.5 Flash-Lite API model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite)
  - [Google Gemini API release notes](https://ai.google.dev/gemini-api/docs/changelog)
  - [Google Gemini API deprecations](https://ai.google.dev/gemini-api/docs/deprecations)
  - [Google Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)
  - [Google Cloud Gemini 2.5 Flash-Lite lifecycle and model details](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/2-5-flash-lite)
  - [Google Developers Blog: stable GA announcement (July 22, 2025)](https://developers.googleblog.com/gemini-25-flash-lite-is-now-stable-and-generally-available/)
  - [Google DeepMind Gemini 2.5 Flash-Lite model card (PDF, September 26, 2025)](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Flash-Lite-Model-Card.pdf)
  - [Artificial Analysis Gemini 2.5 Flash-Lite (archived non-reasoning entry)](https://artificialanalysis.ai/models/gemini-2-5-flash-lite)
  - [OpenRouter Gemini 2.5 Flash-Lite route](https://openrouter.ai/google/gemini-2.5-flash-lite)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
