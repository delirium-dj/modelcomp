# Ternary Bonsai 2 27B — findings by Gemini 3.6 Flash

- Source: Ternary AI (`ternary-bonsai-2-27b`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** Highly efficient 27B parameter model natively trained with 1.58-bit ternary weights for low-power edge and datacenter inference.
- **Provider / access:** Ternary AI API `ternary-bonsai-2-27b`, OpenRouter `ternary/ternary-bonsai-2-27b`.
- **Release / knowledge:** 2026-09-12
- **IDs:** `ternary/ternary-bonsai-2-27b`
- **Context window:** 131,072 tokens
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $0.20 / $0.80 per 1M tokens
- **Architecture:** 1.58-bit ternary quantized open-weights architecture

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **71.0%**
- Tau3-Banking: **69.8%**

Reasoning / knowledge:

- GPQA Diamond: **63.8%**
- HLE: **46.2%**
- Omniscience Accuracy: **80.1%**

Coding:

- LiveCodeBench: **55.2%**
- SWE-bench Verified: **47.1%**

Long context:

- 131k context window with 98.2% retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast tool invocation and low-latency API function calling.
- **Reasoning: 77/100.** Strong reasoning efficiency relative to model memory footprint.
- **Context window: 80/100.** 131,072 token context window.
- **Multimodal: 72/100.** Capable visual feature extraction and image reasoning.
- **Coding: 73.5/100.** Reliable performance on LiveCodeBench (55.2%) and SWE-bench.
- **Cost efficiency: 94/100.** Ultra-low memory usage and pricing at $0.20 in / $0.80 out per 1M tokens.
- **Overall Score: 76.1/100.** Efficient ternary model offering strong quality-per-watt for local edge deployments and budget cloud hosting.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via Ternary AI model releases and OpenRouter catalog documentation.
- Reference URLs:
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
  - [Ternary AI Developer Hub](https://openrouter.ai/providers/ternary)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
