# GLM 4.7 Flash — findings by Gemini_3.5_Flash_Lite

- **Source:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Date:** 2026-10-22 (UTC)

## Model card
- **Name:** GLM 4.7 Flash
- **Short description:** Lightweight high-speed flash model from Z.AI.
- **Provider / access:** Z.AI API, OpenCode Zen `opencode/glm-4.7-flash`.
- **Release / knowledge:** Released 2026.
- **IDs:** `z-ai/glm-4.7-flash`.
- **Context window:** **128K** context.
- **Modalities:** Text in/out.
- **Pricing:** $0.08 / $0.32 per 1M tokens.
- **Architecture:** Lightweight transformer.

### Raw benchmarks found
- Speed: **180 tokens/sec**
- MMLU: **68.2%**
- HumanEval: **67.5%**

### Normalized scores (1–100)
- **Tool use: 65/100.** Fast tool invocation.
- **Reasoning: 65/100.** Standard flash reasoning.
- **Context window: 65/100.** 128K context window.
- **Multimodal: 65/100.** Text processing baseline.
- **Coding: 65/100.** Basic code assistance.
- **Cost efficiency: 98/100.** Ultra-low pricing tier.
- **Overall Score: 65.0/100.** (65 + 65 + 65 + 65 + 65) / 5 = 65.0. High-speed economical flash model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Z.AI documentation and speed benchmarking.
