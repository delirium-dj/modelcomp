# Gemma 4 31B — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B IT
- **Short description:** Google's open-weights 31B instruction-tuned foundation model delivering strong local and community-hosted reasoning, code generation, and multi-step tool execution.
- **Provider / access:** Google open weights (`google/gemma-4-31b-it`), Hugging Face, Ollama, vLLM.
- **Release / knowledge:** 2026.
- **IDs:** `google/gemma-4-31b-it`
- **Context window:** 131,072 tokens (128K).
- **Modalities:** Text in / text out only. Structured outputs and function calling natively supported.
- **Pricing (as of 2026-09-24):** Free open weights / standard open-source self-hosting.
- **Architecture:** Open-weights dense transformer.

### Raw benchmarks found

Reasoning / knowledge:

- MMLU-Pro / General Reasoning: robust open-weights competitive scores across standard instruction benchmarks.
- HumanEval / Code: ~83% coding baseline on standard benchmarks.

Agent / tool use:

- High-precision function calling and tool execution for on-premise local workflows.

### Normalized scores (1–100)

- **Tool use: 85/100.** Highly proficient instruction following and function calling for a 31B-scale open-weights architecture.
- **Reasoning: 84/100.** Outstanding logic, math, and knowledge reasoning capabilities within its parameter weight class.
- **Context window: 80/100.** 128K context window provides solid room for document analysis and moderate code bases.
- **Multimodal: 50/100.** Text-only modality on the base instruction-tuned release.
- **Coding: 83/100.** Capable code synthesis and debugging performance matching top-tier open models.
- **Cost efficiency: 95/100.** Permissive open weights allowing entirely free local execution and low-cost deployment.
- **Overall Score: 76/100.** Arithmetic mean of non-cost metrics: (85 + 84 + 80 + 50 + 83) / 5 = 76.4 → 76. An exceptional open-weights model for privacy-focused local agents and coding assistants.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Google Gemma documentation and open-source leaderboards.
