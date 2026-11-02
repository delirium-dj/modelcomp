# Gemini 3.1 Flash-Lite — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 3.1 Flash-Lite
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's low-latency, cost-effective multimodal model for high-frequency extraction, lightweight reasoning, and agentic workflows.
- **Provider / access:** Gemini API, AI Studio, and Google Cloud; current model code `gemini-3.1-flash-lite`. Google's March evaluation runs used the explicitly labelled preview ID `gemini-3.1-flash-lite-preview`; harness details are retained.
- **Release / knowledge:** 2026-03-03 model-card publication; knowledge cutoff not verified.
- **IDs:** `google/gemini-3.1-flash-lite` current API identity; evaluation ID `gemini-3.1-flash-lite-preview` is recorded as the vendor's measured preview configuration, not merged with unrelated Flash tiers.
- **Context window:** Up to 1,000,000 tokens; maximum output 64,000 tokens.
- **Modalities:** Text, image, video, audio, and PDF input; text output; high-thinking mode, function calling, structured output, and supported tools.
- **Pricing (as of 2026-11-02):** $0.25 per 1M input tokens and $1.50 per 1M output tokens, before any provider-specific discounts or caching.
- **Architecture:** Proprietary.

### Raw benchmarks found

> Google model-card/evaluation results are single-attempt pass@1 unless noted; the model was run through the Gemini API with default sampling and high thinking for the preview ID.

- Reasoning/knowledge: Humanity's Last Exam **16.0%** (no tools) and GPQA Diamond **86.9%** (no tools).
- Multimodal: MMMU-Pro **76.8%** and Video-MMMU **84.8%**.
- Coding: LiveCodeBench **72.0%** on the model-card's 2025-01-01 to 2025-05-01 UI slice.
- Independent tracker runs: GPQA Diamond **81.8% high**, LiveCodeBench **80.1%**, SWE-bench **62.8%**, MCP Atlas **57.1%**, Terminal-Bench 2.1 **31.1%**, and τ³-Banking **9.7%**; these are separate harnesses and are not collapsed into Google's table.
- Google reports MRCR v2 results at 128K and a pointwise 1M result in the evaluation materials; the retrieved text did not expose a stable numeric row for this pass, so no value is invented here.

### Normalized scores (1–100)
- **Tool use: 72/100.** MCP Atlas 57.1%, Terminal-Bench 2.1 31.1%, and τ³-Banking 9.7% show useful but uneven agent performance.
- **Reasoning: 82/100.** GPQA 86.9% and HLE 16.0% are strong for the tier, with HLE difficulty and vendor harness limits capping the score.
- **Context window: 90/100.** The documented 1M context and published MRCR evaluation are top-tier, though the exact full-window score was not recovered.
- **Multimodal: 82/100.** MMMU-Pro 76.8% and Video-MMMU 84.8% match the documented text/image/video/audio/PDF input coverage; output is text only.
- **Coding: 76/100.** LiveCodeBench 72.0% official and SWE-bench 62.8% independent are good, while terminal and Vibe Code results are more variable.
- **Cost efficiency: 96/100.** $0.25/$1.50 is unusually low for a 1M-context multimodal model.
- **Overall Score: 80/100.** `(72 + 82 + 90 + 82 + 76) / 5 = 80.4`, half-up to **80**; best fit is high-volume multimodal extraction and lightweight agentic coding.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: Fresh Google model-card/evaluation and independent benchmark research; the preview evaluation ID, current alias, harnesses, and sibling Flash tiers were kept distinct. Scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.1 Flash-Lite model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/)
  - [Gemini 3.1 Flash-Lite evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-3-1-flash-lite)
  - [Gemini 3.1 Flash-Lite API model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite)
