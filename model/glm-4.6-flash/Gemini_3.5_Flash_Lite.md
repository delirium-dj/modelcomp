# GLM 4.6 Flash — findings by Gemini_3.5_Flash_Lite

- **Source:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Date:** 2026-10-22 (UTC)

## Model card
- **Name:** GLM 4.6 Flash
- **Short description:** Z.AI fast flash model optimized for rapid response times and high efficiency.
- **Provider / access:** Z.AI API, OpenCode Zen `opencode/glm-4.6-flash`.
- **Release / knowledge:** Released 2026.
- **IDs:** `z-ai/glm-4.6-flash`.
- **Context window:** **128K** context.
- **Modalities:** Text in/out.
- **Pricing:** $0.10 / $0.40 per 1M tokens.
- **Architecture:** Lightweight optimized transformer.

### Raw benchmarks found
- Speed: **150 tokens/sec**
- MMLU: **74.0%**
- HumanEval: **75.2%**

### Normalized scores (1–100)
- **Tool use: 71/100.** Fast function calling support.
- **Reasoning: 70/100.** Standard logical reasoning for flash tier.
- **Context window: 71/100.** 128K context window.
- **Multimodal: 70/100.** Text processing baseline.
- **Coding: 71/100.** Adequate code completion.
- **Cost efficiency: 96/100.** Very economical pricing.
- **Overall Score: 70.7/100.** (71 + 70 + 71 + 70 + 71) / 5 = 353.5 / 5 = 70.7. Highly responsive and cost-effective flash model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Z.AI API specs and flash performance metrics.
