# Gemini 3.1 Flash Lite — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's high-efficiency lightweight foundation model engineered for low-cost, ultra-fast generation across a 1M token context window.
- **Provider / access:** Google Gemini API (AI Studio / Vertex AI), `gemini-3.1-flash-lite`.
- **Release / knowledge:** March 2026.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text, image, audio, and video input; text output.
- **Pricing (as of 2026-09-24):** $0.25 / 1M input tokens, $1.50 / 1M output tokens.
- **Architecture:** Lightweight proprietary multimodal transformer.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond (no tools): **86.9%** (DeepMind model card)
- Humanity's Last Exam (HLE no tools): **16.0%**

Long context:

- MRCR v2: **60.1%** average @ 128K; **12.3%** pointwise @ 1M.

Agent & Coding:

- High-throughput API execution (~363 tokens/sec); formal SWE-bench benchmarks unreleased on this specific revision.

### Normalized scores (1–100)

- **Tool use: 74/100.** Standard function calling and structured outputs; reliable execution on routine tool flows.
- **Reasoning: 78/100.** Strong GPQA Diamond (86.9%) for a lite model; HLE (16.0%) indicates expected performance boundaries on extreme multi-step reasoning.
- **Context window: 68/100.** 1M context span with documented 60.1% MRCR at 128K; experiences drop-off at full 1M depth (12.3%).
- **Multimodal: 72/100.** Versatile multimodal intake spanning audio, video, image, and text; text-only output.
- **Coding: 66/100.** Capable standard code generation for scripts and formatting; non-specialized on deep autonomous SWE tasks.
- **Cost efficiency: 92/100.** Highly economical at $0.25 / $1.50 per 1M tokens with exceptional token throughput.
- **Overall Score: 72/100.** Arithmetic mean of non-cost metrics: (74 + 78 + 68 + 72 + 66) / 5 = 71.6 → 72. A rapid, budget-friendly multimodal model tailored for high-volume tasks and fast conversational APIs.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Google DeepMind model documentation.
