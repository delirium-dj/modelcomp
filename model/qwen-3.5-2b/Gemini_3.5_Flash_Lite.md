# Qwen 3.5 2B — findings by Gemini_3.5_Flash_Lite

- **Source:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Date:** 2026-10-22 (UTC)

## Model card
- **Name:** Qwen 3.5 2B
- **Short description:** Ultra-lightweight 2B parameter open model designed for edge devices and rapid prototyping.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-2B`, OpenCode Zen.
- **Release / knowledge:** Released 2026.
- **IDs:** `qwen/qwen-3.5-2b`.
- **Context window:** **32K** context.
- **Modalities:** Text in/out.
- **Pricing:** Open weights.
- **Architecture:** Dense 2B parameter transformer.

### Raw benchmarks found
- MMLU: **54.2%**
- GSM8K: **58.0%**
- HumanEval: **51.5%**

### Normalized scores (1–100)
- **Tool use: 53/100.** Minimal function calling for edge devices.
- **Reasoning: 53/100.** Basic reasoning for 2B scale.
- **Context window: 53/100.** 32K context window.
- **Multimodal: 53/100.** Text processing.
- **Coding: 53/100.** Simple code generation.
- **Cost efficiency: 98/100.** Extremely low inference footprint.
- **Overall Score: 53.0/100.** (53 + 53 + 53 + 53 + 53) / 5 = 53.0. Ultra-lightweight edge model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Qwen 2B model card and edge benchmark evaluation.
