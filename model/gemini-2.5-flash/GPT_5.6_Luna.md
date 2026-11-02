# Gemini 2.5 Flash — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 2.5 Flash
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 2.5 Flash
- **Short description:** Google's efficient reasoning and native-multimodal Gemini model. The original `gemini-2.5-flash` identity is retained even though Google has deprecated it and announced a future reroute.
- **Provider / access:** Gemini API, AI Studio, and Vertex AI; existing-user API access remains on the original model string until the announced reroute date.
- **Release / knowledge:** 2025-05-20 public release; knowledge cutoff not verified.
- **IDs:** `google/gemini-2.5-flash` / `gemini-2.5-flash`. This is not silently replaced by Gemini 3.5 Flash-Lite after 2026-12-01.
- **Context window:** 1,048,576 tokens; maximum output 65,536 tokens.
- **Modalities:** Text, image, audio, video, and PDF input; text output; reasoning/thinking, function calling, structured output, and supported tools.
- **Pricing (as of 2026-11-02):** Original route is listed at $0.30 per 1M input tokens, $0.03 cached input, and $2.50 per 1M output tokens. From 2026-12-01 requests are scheduled to route to Gemini 3.5 Flash-Lite and use that route's billing/contract; those future values are not scored here.
- **Architecture:** Proprietary.

### Raw benchmarks found

- Artificial Analysis: GPQA Diamond **68.3%** no-reasoning and **79.0%** thinking; HLE **4.7%** no-reasoning and **12.1%** thinking; LiveCodeBench **49.5%** no-reasoning and **69.5%** thinking. Settings are retained because the two modes are not interchangeable.
- Artificial Analysis: AA-LCR **49.9%**, AA-MMMU-Pro **65.5%**, and τ²-Bench Telecom **14.9%** for the tracked original model route.
- Vals/benchmark tracker: SWE-bench Verified **28.7%** and LiveCodeBench **56.9%** on the reported scaffolds; these are independent harness results, not Google's internal model-card runs.
- No exact-model MRCR/RULER result at the full 1M window was found.

### Deprecation and reroute boundary

- Google documents `gemini-2.5-flash` as deprecated, unavailable for new AI Studio selection, and limited to existing API users until 2026-12-01.
- Effective 2026-12-01, requests using the old string are scheduled to route to `gemini-3.5-flash-lite`, with changed function-calling/thought-signature and sampling behavior. The rerouted model is not evidence for this original entry.

### Normalized scores (1–100)
- **Tool use: 76/100.** Function calling and mature API tooling are documented, while τ² Telecom 14.9% and endpoint differences cap the score.
- **Reasoning: 78/100.** Thinking GPQA 79.0% and HLE 12.1% are useful exact-route signals, but effort-sensitive spread is substantial.
- **Context window: 90/100.** The documented 1M context is top-tier, with no full-window retrieval score.
- **Multimodal: 88/100.** Text/image/audio/video/PDF input is documented; output remains text.
- **Coding: 76/100.** Thinking LiveCodeBench reaches 69.5%, but SWE-bench and terminal results vary materially by scaffold.
- **Cost efficiency: 96/100.** $0.30/$2.50 pricing is strong for a 1M-context multimodal model, discounted for the imminent deprecation/reroute.
- **Overall Score: 82/100.** `(76 + 78 + 90 + 88 + 76) / 5 = 81.6`, half-up to **82**; best fit is economical multimodal and long-context work before the original route retires.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: Fresh official and independent-source research; thinking/non-thinking settings and the post-December reroute were kept separate. Scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 2.5 Flash model documentation and deprecation notice](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash)
  - [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing)
  - [Artificial Analysis benchmark summary via BenchLeader](https://www.benchleader.com/models/gemini-2-5-flash)
