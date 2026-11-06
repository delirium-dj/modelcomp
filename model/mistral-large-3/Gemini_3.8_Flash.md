# Mistral Large 3 — findings by Gemini 3.8 Flash

- Source: Mistral AI (`mistral/mistral-large-3`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral AI's flagship frontier open-weight multimodal Mixture-of-Experts (MoE) foundation model, featuring 256k context window and multimodal vision understanding.
- **Provider / access:** Mistral AI Platform (La Plateforme: `mistral-large-2512`), OpenRouter, Hugging Face, Azure AI Foundry.
- **Release / knowledge:** 2025-12 release (`mistral-large-2512`); permissive Apache 2.0 license for weights; commercial API hosted endpoint.
- **IDs:** `mistral-large-3`, `mistral-large-2512`, `mistralai/mistral-large-3`, `openrouter/mistralai/mistral-large-2512`.
- **Context window:** 256,000 tokens total (supporting up to 8k output tokens).
- **Modalities:** Text and high-resolution image input; text, code, structured JSON output; native function calling.
- **Pricing (as of 2026-11-06):** $0.50 per 1M input tokens / $1.50 per 1M output tokens.
- **Architecture:** Sparse Mixture-of-Experts (MoE) transformer (~675B total parameters, ~41B active per token) with multimodal visual encoder.

### Raw benchmarks found

Coding:

- HumanEval (Python pass@1): **~92%**
- Multi-language code comprehension across 80+ programming languages

Reasoning / knowledge:

- MMLU-Pro / General reasoning: Competitive enterprise marks across multilingual evaluation suites
- Strong multilingual performance across European and Asian languages

Agent / tool use:

- Native tool calling, JSON schema enforcement, and document OCR / table extraction

Long context / vision:

- 256,000 token context window handling complex documents (~390 pages)
- High-fidelity visual chart comprehension, diagram parsing, and document image analysis

### Normalized scores (1–100)

- **Tool use: 88/100.** Robust native function calling and structured JSON output for enterprise multi-agent workflows.
- **Reasoning: 89/100.** Strong analytical deduction and multilingual reasoning driven by its 675B MoE capacity.
- **Context window: 86/100.** 256,000 token window provides substantial room for multi-turn conversations and document analysis.
- **Multimodal: 84/100.** Native vision understanding including charts, infographics, tables, and document images.
- **Coding: 88/100.** Strong coding proficiency demonstrated by ~92% on HumanEval and multilingual syntax fluency.
- **Cost efficiency: 91/100.** Extremely competitive pricing for a frontier-scale MoE model at $0.50 / $1.50 per 1M tokens with open Apache 2.0 weights.
- **Overall Score: 87/100.** Arithmetic mean of five quality dimensions: (88 + 89 + 86 + 84 + 88) / 5 = 435 / 5 = 87.0 → 87. Flagship open-weight multimodal powerhouse combining efficient MoE inference with strong reasoning and vision.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public web research across Mistral AI announcements, Hugging Face model cards, OpenRouter documentation, and independent AI benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Mistral Large 3](https://mistral.ai)
  - [OpenRouter — Mistral Large 3 (2512) Details](https://openrouter.ai)
  - [Hugging Face — mistralai/Mistral-Large-3](https://huggingface.co)
  - [Artificial Analysis — Mistral Model Evaluations](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

