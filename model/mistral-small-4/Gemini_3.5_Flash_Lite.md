# Mistral Small 4 — findings by Gemini 3.5 Flash Lite

- Source: Mistral AI / `mistralai/mistral-small-2603` (`mistral-small-4`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral AI's Mixture of Experts (MoE) model featuring 119B total / ~6.5B active parameters, native multimodality (text + image input), 256K context window, and configurable reasoning effort modes.
- **Provider / access:** Mistral La Plateforme (`mistral-small-2603`), OpenRouter, Hugging Face, and Azure AI Foundry. Supports Chat Completions, function calling, structured outputs, and JSON mode.
- **Release / knowledge:** Released March 2026; Apache 2.0 open-weight ancestry.
- **IDs:** `mistral-small-2603`, `mistralai/mistral-small-2603`, `mistralai/Mistral-Small-4-119B-2603` (HF), `opencode/mistral-small-4`.
- **Context window:** 262,144 tokens total (256K).
- **Modalities:** Text and image input; text output; reasoning support (configurable effort); native tool calling and structured outputs.
- **Pricing (as of 2026-11-09):** $0.15 / $0.60 per 1M input/output tokens ($0.015 cached read); open weights allow $0 self-hosting.
- **Architecture:** MoE transformer, 119B total parameters with ~6.5B active per token.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **76.9%** <(Artificial Analysis, reasoning mode) / **59.1%** (instruct)>
- MMLU Pro: **78.0%** <(Reasoning mode) / **73.5%** (instruct)>
- HLE: **9.9%** <(Artificial Analysis, reasoning mode)>

Agent / Tool use:
- Tau2-Bench Telecom: **41.2%** <(Artificial Analysis, reasoning mode)>
- Terminal-Bench 2.1: **21.0%** <(OpenRouter / Artificial Analysis)>

Coding:
- SciCode: **38.8%** <(Artificial Analysis / BenchmarkList)>
- LiveCodeBench: **64** <(Maker-reported, reasoning mode)>

Long context:
- AA-LCR: **49.7%** <(Artificial Analysis, reasoning mode) / **28.3%** (non-reasoning)>

### Normalized scores (1–100)

- **Tool use: 62/100.** Solid mid-tier agentic capability demonstrated by Tau2-Bench Telecom (41.2%) and Terminal-Bench 2.1 (21.0%), balanced against conservative agentic index scores.
- **Reasoning: 68/100.** Strong reasoning capability in reasoning mode with GPQA Diamond at 76.9% and MMLU Pro at 78.0%, balanced by HLE at 9.9%.
- **Context window: 74/100.** 256K context window with moderate retrieval accuracy (AA-LCR 49.7% in reasoning mode).
- **Multimodal: 60/100.** Text and image input support with solid foundational multimodal task performance; text-only output.
- **Coding: 60/100.** Capable general coding and code generation (SciCode 38.8%, LiveCodeBench 64), forming a reliable open-weight coding assistant.
- **Cost efficiency: 90/100.** Highly affordable hosted pricing ($0.15/$0.60 per 1M tokens) with caching support and Apache 2.0 open-weight self-hosting options.
- **Overall Score: 64.8/100.** (62 + 68 + 74 + 60 + 60) / 5 = 64.8 -> 65.0. Best-fit recommendation: Cost-efficient open-weight MoE deployment for general instruction following, reasoning-enhanced tasks, and multimodal chat applications.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09
- Method: Public internet research and cross-reference of Mistral AI model cards, Artificial Analysis leaderboards, and OpenRouter evaluations.
- Reference URLs:
  - [Mistral AI Model Cards](https://docs.mistral.ai/models/model-cards/mistral-small-4-26-03)
  - [Mistral AI Announcement](https://mistral.ai/news/mistral-small-4)
  - [Artificial Analysis Mistral Small 4](https://artificialanalysis.ai/models/mistral-small-4)
