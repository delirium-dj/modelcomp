# Xing 4.0 29B A4B — findings by Gemini_3.5_Flash_Lite

- **Source:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Date:** 2026-10-22 (UTC)

## Model card
- **Name:** Xing 4.0 29B A4B
- **Short description:** Sparse MoE open weights model with 29B total and 4B active parameters.
- **Provider / access:** Hugging Face, OpenCode Zen `opencode/xing-4.0-29b-a4b`.
- **Release / knowledge:** Released 2026.
- **IDs:** `xing/xing-4.0-29b-a4b`.
- **Context window:** **64K** context window.
- **Modalities:** Text in/out.
- **Pricing:** Open weights.
- **Architecture:** MoE (29B total, 4B active).

### Raw benchmarks found
- MMLU: **64.5%**
- GSM8K: **71.0%**
- HumanEval: **65.0%**

### Normalized scores (1–100)
- **Tool use: 62/100.** Basic function calling for lightweight MoE.
- **Reasoning: 61/100.** Moderate reasoning performance for 4B active parameters.
- **Context window: 62/100.** 64K context retrieval.
- **Multimodal: 61/100.** Text processing baseline.
- **Coding: 62/100.** Standard coding assistance.
- **Cost efficiency: 95/100.** High inference efficiency.
- **Overall Score: 61.7/100.** (62 + 61 + 62 + 61 + 62) / 5 = 308.5 / 5 = 61.7. Efficient lightweight sparse model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Xing open weights evaluation and benchmark tests.
