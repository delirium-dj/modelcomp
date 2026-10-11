# Gemini 3.1 Flash Lite — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google DeepMind's high-efficiency lightweight foundation model engineered for low-cost, ultra-fast generation across a 1,048,576-token context window with parallel tool execution.
- **Provider / access:** Google Gemini API (AI Studio / Vertex AI), [OpenRouter](https://openrouter.ai/models/google/gemini-3.1-flash-lite).
- **Release / knowledge:** 2026-03 release; knowledge cutoff early 2026.
- **IDs:** `google/gemini-3.1-flash-lite` (batch endpoint: `google/gemini-3.1-flash-lite:batch`)
- **Context window:** 1,048,576 tokens (1M context window, max output 65,536 tokens).
- **Modalities:** Text, image, audio, video, and PDF input; text output; parallel tool calls and multi-level thinking mode.
- **Pricing (as of 2026-10-11):** $0.25 / 1M input tokens, $1.50 / 1M output tokens ($0.125 / $0.75 in batch processing) ([Google AI Studio](https://aistudio.google.com/)).
- **Architecture:** Lightweight multimodal transformer optimized for extreme throughput (~330+ tokens/second).

### Raw benchmarks found

Agent / tool use:
- Throughput: **~330.5 tokens/sec** measured on Google AI Studio
- Parallel tool calls: native support for parallel function calling in multi-agent orchestration pipelines
- Terminal-Bench: no verified public score found

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **16** ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-1-flash-lite))
- GPQA Diamond (no tools): **86.9%** ([Google DeepMind Model Card](https://deepmind.google))
- Humanity's Last Exam (HLE no tools): **16.0%**

Coding:
- Rapid code transformation and formatting execution; formal SWE-bench Verified unreleased on this revision.

Long context:
- MRCR v2: **60.1%** average @ 128K; **12.3%** pointwise @ 1M.

Multimodal:
- Native intake spanning audio, video, image, document PDFs, and text; high transcription accuracy and visual grounding.

### Normalized scores (1–100)

- **Tool use: 74/100.** Fast function calling, parallel tool execution, and structured outputs; reliable execution on routine tool flows.
- **Reasoning: 78/100.** Strong GPQA Diamond (86.9%) for a lite tier model; HLE (16.0%) and AA Intelligence Index of 16 indicate expected boundaries on complex reasoning.
- **Context window: 68/100.** 1M context span with documented 60.1% MRCR at 128K, experiencing notable retrieval drop-off at full 1M depth (12.3%).
- **Multimodal: 72/100.** Versatile multimodal intake spanning audio, video, image, and text; text-only output.
- **Coding: 66/100.** Capable standard code generation for scripts and formatting; non-specialized on deep autonomous SWE tasks.
- **Cost efficiency: 92/100.** Highly economical at $0.25 / $1.50 per 1M tokens ($0.125 / $0.75 batch) with exceptional token throughput (~330 tok/s).
- **Overall Score: 72/100.** Arithmetic mean of non-cost quality metrics: (74 + 78 + 68 + 72 + 66) / 5 = 71.6 → 72. A rapid, budget-friendly multimodal model tailored for high-volume tasks, fast conversational APIs, and agent orchestration.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of Google DeepMind model documentation, Artificial Analysis benchmarks, and OpenRouter model cards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
