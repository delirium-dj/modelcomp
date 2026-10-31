# Gemini 2.0 Flash — findings by GPT-6 Luna

- Source: Google/Gemini 2.0 Flash (`gemini-2.0-flash-001`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's fast, proprietary, natively multimodal workhorse model. This report covers the February 2025 stable GA snapshot `gemini-2.0-flash-001`, not the experimental `-exp` route, Gemini 2.0 Flash Thinking, Flash-Lite, or a later Gemini model.
- **Provider / access:** Historically available through Google AI Studio's Gemini API and Vertex AI. Google's current Gemini model page identifies both `gemini-2.0-flash` and `gemini-2.0-flash-001` as shut down on **2026-06-01**; there is no current callable Google route. Do not use the old model string for new integrations.
- **Release / knowledge:** Stable `gemini-2.0-flash-001` GA release **2025-02-05**. Google's current model-specific page lists an **August 2024** knowledge cutoff.
- **IDs:** Exact stable snapshot `gemini-2.0-flash-001`; historical mutable model string `gemini-2.0-flash`. The technical report's model-ID table maps the evaluated Gemini 2.0 Flash to `gemini-2.0-flash-001`.
- **Context window:** **1,048,576 input tokens**, **8,192 output tokens**, per Google's model-specific API page. These are the documented limits, not evidence of reliable retrieval across the whole 1M window.
- **Modalities:** Text, image, audio, and video input; **text-only output** for the stable API model. The API page lists function calling, structured outputs, and code execution support, but no image/audio generation. No later multimodal-output experiment is substituted.
- **Pricing (last listed Vertex AI rates; model is retired):** **$0.15/MTok text input and $0.60/MTok text output**; Vertex batch rates **$0.075/$0.30**. Vertex's listed audio-input rate was **$1.00/MTok**. These are historical prices, not purchasable rates after shutdown. No current free route verified.
- **Architecture:** Proprietary Google model; parameter count and detailed architecture are not disclosed in the reviewed sources.
- **Evaluation caveat:** The raw figures below come from Google DeepMind's *Gemini 2.5 technical report*, which explicitly maps the evaluated Gemini 2.0 Flash to `gemini-2.0-flash-001` and says Gemini tests used the listed AI Studio API IDs. SWE-bench has separate single-attempt and multiple-attempt results; the table notes “multiple attempts” for SWE-bench, while its other Gemini results are pass@1/single-attempt unless stated otherwise. Gemini 2.0's HLE score is marked as an earlier HLE dataset. Do not conflate these with later Gemini releases or experimental Flash Thinking results.

### Raw benchmarks found

Agent / tool use:

- Google's model page lists **function calling**, structured outputs, and code execution as supported capabilities. No exact-`gemini-2.0-flash-001` Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, OSWorld, or Claw-Eval benchmark score was verified in the checked sources; tool support is not itself a score.

Reasoning / knowledge (Google DeepMind technical report, Table 3; exact API ID above):

- **GPQA Diamond: 65.2%**; **Humanity's Last Exam, no tools: 5.1%†**; **Global MMLU: 83.4%**; **SimpleQA: 29.9%**; **AIME 2025: 29.7%**. The report's dagger notes that Gemini 2.0 HLE uses an earlier dataset.

Coding (Google DeepMind technical report, Table 3):

- **SWE-bench Verified: 21.4% single attempt; 34.2% multiple attempts**. The table explicitly differentiates the settings.
- **LiveCodeBench: 29.1%**; **Aider Polyglot: 21.3%**.

Long context (Google DeepMind technical report, Table 3):

- **LOFT hard: 58.0% at ≤128K, 7.6% at 1M**.
- **MRCR v2, 8-needle: 19.0% at ≤128K, 5.3% at 1M**.
- The documented input window is 1,048,576 tokens, but these retrieval results show that nominal capacity is not equivalent to strong 1M retrieval.

Multimodal:

- **MMMU: 69.3%** (Google DeepMind technical report, Table 3; exact Gemini 2.0 Flash column).
- Google documents text, image, audio, and video input with text output. The stable API version does not support audio or image generation.

### Normalized scores (1–100)

- **Tool use: 55/100.** Native function calling and code execution are supported, but no exact-model agent benchmark was found; capabilities do not substitute for Terminal-Bench, Tau, or a tool-use composite. Source: Google Gemini 2.0 Flash API page.
- **Reasoning: 65/100.** GPQA Diamond is 65.2%, HLE is 5.1% on the report's earlier dataset, and AIME 2025 is 29.7%; Global MMLU is stronger at 83.4%. Source: Google DeepMind technical report, Table 3.
- **Context window: 95/100.** The 1,048,576-token input limit reaches the rubric's ≥1M tier, but MRCR v2 retrieval is only 5.3% at 1M, so it earns no high-retrieval bonus. Sources: Google API page; Google DeepMind technical report, Table 3.
- **Multimodal: 90/100.** Text, image, video, and audio input place it in the audio-input band; the stable API produces text only and lacks audio/image generation. Sources: Google API page; Google DeepMind technical report, Table 3.
- **Coding: 40/100.** SWE-bench Verified is 21.4% single attempt (34.2% with multiple attempts), LiveCodeBench 29.1%, and Aider Polyglot 21.3%; these are modest coding results. Source: Google DeepMind technical report, Table 3.
- **Cost efficiency: 95/100.** Historical Vertex rates were $0.15/$0.60 per MTok text input/output ($0.075/$0.30 batch), but the model was shut down on 2026-06-01, so this is an archive-only price score. Sources: Google Cloud pricing; Google Gemini API lifecycle page.
- **Overall Score: 69/100.** Half-up mean of the five quality dimensions, excluding cost: `(55 + 65 + 95 + 90 + 40) / 5 = 69`. Gemini 2.0 Flash combined a large advertised context window and broad input modalities, but 1M retrieval and coding performance were weak; the endpoint is now retired.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-31
- Method: Checked Google's stable API model page, Gemini API release notes and shutdown notice, Vertex AI model lifecycle and pricing tables, the exact-ID mapping and benchmark table in Google's Gemini 2.5 technical report, Artificial Analysis' historical model page, and BenchLM's row-level source record. Kept `gemini-2.0-flash-001` distinct from experimental/Thinking variants and later Gemini models; labeled the SWE-bench settings and old HLE dataset.
- Reference URLs:
  - [Google Gemini 2.0 Flash API model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.0-flash)
  - [Google Gemini API release notes](https://ai.google.dev/gemini-api/docs/changelog)
  - [Google Vertex AI model versions and lifecycle](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versions)
  - [Google Vertex AI pricing](https://cloud.google.com/vertex-ai/generative-ai/pricing)
  - [Google DeepMind, Gemini 2.5 technical report (Table 2 ID mapping; Table 3 results)](https://arxiv.org/abs/2507.06261)
  - [Artificial Analysis Gemini 2.0 Flash](https://artificialanalysis.ai/models/gemini-2-0-flash)
  - [BenchLM Gemini 2.0 Flash source ledger](https://benchlm.ai/models/gemini-2-0-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
