# Ternary Bonsai 27B — findings by Gemini 3.6 Flash

- Source: Ternary AI (`ternary-bonsai-27b`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** Ternary AI's initial 1.58-bit ternary 27B parameter model designed for low-memory footprint and energy-efficient inference.
- **Provider / access:** Ternary AI API `ternary-bonsai-27b`, OpenRouter `ternary/ternary-bonsai-27b`.
- **Release / knowledge:** 2026-05-10
- **IDs:** `ternary/ternary-bonsai-27b`
- **Context window:** 131,072 tokens
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $0.15 / $0.60 per 1M tokens
- **Architecture:** 1.58-bit ternary quantized open-weights architecture

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **68.5%**
- Tau3-Banking: **67.2%**

Reasoning / knowledge:

- GPQA Diamond: **61.2%**
- HLE: **41.0%**
- Omniscience Accuracy: **77.5%**

Coding:

- LiveCodeBench: **52.8%**
- SWE-bench Verified: **44.5%**

Long context:

- 131k context window with 97.8% retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 75/100.** Reliable tool calling and API function formatting.
- **Reasoning: 74/100.** Solid general reasoning capability for a ternary model.
- **Context window: 80/100.** 131,072 token context window.
- **Multimodal: 69/100.** Basic vision and image understanding support.
- **Coding: 70/100.** Decent coding performance on LiveCodeBench (52.8%).
- **Cost efficiency: 95/100.** Extremely low memory footprint and pricing at $0.15 in / $0.60 out per 1M tokens.
- **Overall Score: 73.6/100.** Pioneering ternary 1.58-bit quantized model for edge servers and resource-constrained environments.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via Ternary AI releases and OpenRouter documentation.
- Reference URLs:
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
  - [Ternary AI Provider Page](https://openrouter.ai/providers/ternary)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
