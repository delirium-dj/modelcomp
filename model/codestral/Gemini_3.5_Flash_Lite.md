# Codestral — findings by Gemini 3.5 Flash Lite

- Source: Mistral AI / `codestral`
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral
- **Short description:** Mistral AI's 22B parameter open-weight code model purpose-built for low-latency code generation, autocomplete, and fill-in-the-middle (FIM) programming tasks across dozens of programming languages.
- **Provider / access:** Mistral La Plateforme, OpenRouter, and Hugging Face open weights (`mistralai/Codestral-22B-v0.1`).
- **Release / knowledge:** Released May 2024; code-specialized foundation model.
- **IDs:** `codestral`, `opencode/codestral`, `mistralai/Codestral-22B-v0.1`.
- **Context window:** 32,768 tokens total (32K).
- **Modalities:** Text and code input; text and code output. No native image/audio/video.
- **Pricing (as of 2026-11-09):** $0.30 / $0.90 per 1M input/output tokens ($0.03 cached input); open weights available under proprietary/custom developer license or open research terms.
- **Architecture:** 22B dense transformer optimized for programming logic and token completion.

### Raw benchmarks found

Coding:
- HumanEval pass@1: **81.1%** <(Mistral AI initial release technical report)>
- MBPP pass@1: **78.2%** <(Python programming benchmark)>
- Multi-language support (Python, Java, C++, JavaScript, Go, etc.): **Top-tier coding performance for 22B class** <(Independent developer evaluations)>

Reasoning / Knowledge:
- General logic and instruction following: **Strong programming-logic baseline** <(Developer benchmarks)>

Long context:
- 32K context completion: **Stable code snippet referencing** <(Mistral documentation)>

### Normalized scores (1–100)

- **Tool use: 58/100.** Designed specifically for inline code generation and autocomplete rather than multi-step agentic tool execution.
- **Reasoning: 60/100.** Solid technical reasoning tailored toward syntax and software design logic.
- **Context window: 68/100.** 32K context window providing adequate room for single-file and multi-function code analysis.
- **Multimodal: 15/100.** Text and code modalities only (non-multimodal).
- **Coding: 82/100.** Excellent coding capabilities (HumanEval 81.1%, MBPP 78.2%) across 80+ programming languages.
- **Cost efficiency: 95/100.** Highly affordable API pricing ($0.30/$0.90 per 1M tokens) with cached input support.
- **Overall Score: 56.6/100.** (58 + 60 + 68 + 15 + 82) / 5 = 56.6 -> 57.0. Best-fit recommendation: Lightweight, high-speed 22B code assistant for IDE integration, autocomplete, and multi-language development.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09
- Method: Public internet research and cross-reference of Mistral AI Codestral technical documentation and open-weights benchmark reports.
- Reference URLs:
  - [Mistral AI Codestral Announcement](https://mistral.ai/news/codestral/)
  - [Hugging Face Mistral Codestral Collection](https://huggingface.co/mistralai/Codestral-22B-v0.1)
