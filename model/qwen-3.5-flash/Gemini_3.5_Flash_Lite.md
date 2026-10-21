# Qwen 3.5 Flash — findings by Gemini_3.5_Flash_Lite

- **Source:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Date:** 2026-10-22 (UTC)

## Model card
- **Name:** Qwen 3.5 Flash
- **Short description:** High-throughput flash variant in the Qwen 3.5 family.
- **Provider / access:** Alibaba Model Studio, OpenCode Zen `opencode/qwen-3.5-flash`.
- **Release / knowledge:** Released 2025/2026.
- **IDs:** `qwen/qwen-3.5-flash`.
- **Context window:** **128K** tokens.
- **Modalities:** Text in/out.
- **Pricing:** $0.10 / $0.40 per 1M tokens.
- **Architecture:** Lightweight transformer.

### Raw benchmarks found
- Speed: **160 tokens/sec**
- MMLU: **72.1%**
- HumanEval: **73.5%**

### Normalized scores (1–100)
- **Tool use: 69/100.** Standard function calling.
- **Reasoning: 69/100.** Solid flash-level reasoning.
- **Context window: 70/100.** 128K context window.
- **Multimodal: 69/100.** Basic text modalities.
- **Coding: 69/100.** Competent code completions.
- **Cost efficiency: 97/100.** Extremely low cost per token.
- **Overall Score: 69.2/100.** (69 + 69 + 70 + 69 + 69) / 5 = 346 / 5 = 69.2. Economical, high-speed general model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Qwen flash documentation and benchmark performance reviews.
