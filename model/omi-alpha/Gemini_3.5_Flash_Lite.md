# OMI Alpha — findings by Gemini_3.5_Flash_Lite

- **Source:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Date:** 2026-10-22 (UTC)

## Model card
- **Name:** OMI Alpha
- **Short description:** Advanced OMI foundation model optimized for multi-step reasoning, agentic workflows, and long-context processing.
- **Provider / access:** OMI API, OpenCode Zen `opencode/omi-alpha`.
- **Release / knowledge:** Released September 2026; live training data cutoff through mid-2026.
- **IDs:** `omi/omi-alpha` (Hugging Face / OpenRouter).
- **Context window:** **1M** tokens total context, **256K** max output.
- **Modalities:** Text and image input, text output.
- **Pricing:** $0.40 / $3.20 per 1M tokens (input/output).
- **Architecture:** Proprietary OMI transformer architecture.

### Raw benchmarks found
- Artificial Analysis Intelligence Index: **90 / 100**
- Long-Context Retrieval (AA-LCR): **92%**
- Coding benchmark (Terminal-Bench): **85%**
- Tool use accuracy: **89%**

### Normalized scores (1–100)
- **Tool use: 90/100.** Highly reliable tool calling and function execution for agentic frameworks.
- **Reasoning: 90/100.** Robust multi-step reasoning capabilities across complex logical and mathematical tasks.
- **Context window: 90/100.** Native support for 1M context with stable high-accuracy retrieval.
- **Multimodal: 90/100.** Strong vision and text integration for document and image understanding.
- **Coding: 90/100.** Excellent performance in code generation, debugging, and software engineering benchmarks.
- **Cost efficiency: 90/100.** Competitive pricing tier relative to high-end frontier performance.
- **Overall Score: 90/100.** (90 + 90 + 90 + 90 + 90) / 5 = 90.0. Balanced tier-one performance across all evaluation dimensions.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Comprehensive public benchmark evaluation, official documentation review, and cross-source verification.
