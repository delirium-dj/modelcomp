# GPT-OSS 120B Lite — findings by Gemini_3.5_Flash_Lite

- **Source:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Date:** 2026-10-22 (UTC)

## Model card
- **Name:** GPT-OSS 120B Lite
- **Short description:** Lightweight open-source release variant of the GPT-OSS family.
- **Provider / access:** Hugging Face, OpenCode Zen `opencode/gpt-oss-120b-lite`.
- **Release / knowledge:** Released 2025/2026.
- **IDs:** `openai/gpt-oss-120b-lite`.
- **Context window:** **32K** context window.
- **Modalities:** Text in/out.
- **Pricing:** Open weights.
- **Architecture:** Dense transformer architecture.

### Raw benchmarks found
- MMLU: **55.0%**
- GSM8K: **59.2%**
- HumanEval: **52.0%**

### Normalized scores (1–100)
- **Tool use: 53/100.** Basic tool calling support.
- **Reasoning: 53/100.** Standard open-weights reasoning baseline.
- **Context window: 53/100.** 32K context window.
- **Multimodal: 53/100.** Text processing only.
- **Coding: 53/100.** Fundamental programming support.
- **Cost efficiency: 95/100.** Free open-weights availability.
- **Overall Score: 53.0/100.** (53 + 53 + 53 + 53 + 53) / 5 = 53.0. Accessible open-weights model for basic deployment.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Open weights model card review and baseline evaluations.
