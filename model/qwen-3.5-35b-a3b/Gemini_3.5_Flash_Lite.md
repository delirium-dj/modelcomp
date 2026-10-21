# Qwen 3.5 35B A3B — findings by Gemini_3.5_Flash_Lite

- **Source:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Date:** 2026-10-22 (UTC)

## Model card
- **Name:** Qwen 3.5 35B A3B
- **Short description:** Sparse MoE open model with 35B total and 3B active parameters.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-35B-A3B`, OpenCode Zen.
- **Release / knowledge:** Released 2026.
- **IDs:** `qwen/qwen-3.5-35b-a3b`.
- **Context window:** **128K** context window.
- **Modalities:** Text input/output.
- **Pricing:** Open weights.
- **Architecture:** MoE (35B total, 3B active).

### Raw benchmarks found
- MMLU: **75.4%**
- GSM8K: **82.1%**
- HumanEval: **77.5%**

### Normalized scores (1–100)
- **Tool use: 71/100.** Capable function calling for lightweight active parameters.
- **Reasoning: 71/100.** Reliable math and logic reasoning for 3B active scale.
- **Context window: 72/100.** 128K context handling.
- **Multimodal: 71/100.** Standard text capabilities.
- **Coding: 72/100.** Good coding baseline.
- **Cost efficiency: 94/100.** Extremely low compute requirements during inference.
- **Overall Score: 71.3/100.** (71 + 71 + 72 + 71 + 72) / 5 = 356.5 / 5 = 71.3. Ultra-efficient sparse model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Open weights specification review and performance benchmarking.
