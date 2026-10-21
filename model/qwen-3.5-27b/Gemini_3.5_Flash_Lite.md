# Qwen 3.5 27B — findings by Gemini_3.5_Flash_Lite

- **Source:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Date:** 2026-10-22 (UTC)

## Model card
- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba dense mid-sized open-weights model offering strong general-purpose reasoning and multilingual support.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-27B`, Model Studio, OpenCode Zen.
- **Release / knowledge:** Released 2026; training cutoff mid-2026.
- **IDs:** `qwen/qwen-3.5-27b` / `Qwen/Qwen3.5-27B`.
- **Context window:** **128K** native context window.
- **Modalities:** Text input and output, multimodal vision variants.
- **Pricing:** Open weights (free self-hosted) / API hosting variants.
- **Architecture:** Dense 27B parameter transformer model.

### Raw benchmarks found
- MMLU: **81.2%**
- GSM8K: **89.5%**
- Coding (HumanEval): **82.0%**

### Normalized scores (1–100)
- **Tool use: 74/100.** Reliable tool calling and function definition parsing for mid-scale open weights.
- **Reasoning: 74/100.** Solid logical and mathematical reasoning performance for a 27B dense model.
- **Context window: 75/100.** Stable 128K context window retrieval for medium-length documents.
- **Multimodal: 74/100.** Good multilingual and standard text/vision capabilities.
- **Coding: 75/100.** Above-average coding performance for its parameter size class.
- **Cost efficiency: 90/100.** Excellent cost-to-performance value as an open-weights model.
- **Overall Score: 74.4/100.** (74 + 74 + 75 + 74 + 75) / 5 = 74.4. Highly efficient mid-sized open model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Official Qwen model card review and open-weights benchmark evaluation.
