# Codestral — findings by Gemini 3.8 Flash

- Source: Mistral AI (`mistral/codestral`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral (22B)
- **Short description:** Mistral AI's pioneering open-weight 22B parameter code model, purpose-built for low-latency code completion, inline Fill-in-the-Middle (FIM), and developer tool assistance.
- **Provider / access:** Mistral AI Platform (La Plateforme: `codestral-latest`, `codestral-2405`), Hugging Face, OpenRouter.
- **Release / knowledge:** 2024-05-29 initial release (`codestral-2405`); Mistral Non-Commercial License (MNCL) for weights; commercial usage via Mistral API.
- **IDs:** `codestral-latest`, `codestral-2405`, `mistralai/codestral-22b-v0.1`, `openrouter/mistralai/codestral`.
- **Context window:** 32,768 tokens (extended up to 128k on subsequent platform checkpoints).
- **Modalities:** Text and code input; text and code output; native Fill-in-the-Middle (FIM) and JSON mode.
- **Pricing (as of 2026-11-06):** $0.30 per 1M input tokens ($0.03 cached) / $0.90 per 1M output tokens.
- **Architecture:** 22B parameter dense transformer tailored for multi-language code generation across 80+ programming languages.

### Raw benchmarks found

Coding:

- HumanEval (Python, pass@1): **81.1%**
- MBPP (sanitized, pass@1): **78.2%**
- CruxEval (code execution reasoning): **51.3%**
- Spider (SQL generation): **63.5%**

Reasoning / knowledge:

- GSM8K (grade school math): **81.6%**
- MMLU (high-level reasoning): **62.5%**

Agent / tool use:

- Function calling and JSON schema output supported for IDE integrations, though without specialized autonomous multi-step agent tuning.

Long context:

- 32,768 token native context window on the initial 22B snapshot, handling single module files and moderate-sized dependencies.

### Normalized scores (1–100)

- **Tool use: 74/100.** Capable JSON formatting and tool call parsing for developer plugins, but limited in multi-agent orchestration.
- **Reasoning: 77/100.** Solid algorithmic and math reasoning (81.6% GSM8K, 63.5% Spider), bounded by its 22B parameter scale and code-specialized pretraining.
- **Context window: 72/100.** Native 32,768-token window comfortably handles isolated source files but trails frontier 256k+ context standards.
- **Multimodal: 15/100.** Text and code input/output only (text-only standard floor).
- **Coding: 83/100.** Very respectable code generation baseline verified by 81.1% HumanEval and 78.2% MBPP across 80+ languages.
- **Cost efficiency: 94/100.** Highly accessible developer pricing at $0.30 / $0.90 per 1M tokens.
- **Overall Score: 64/100.** Arithmetic mean of five quality dimensions: (74 + 77 + 72 + 15 + 83) / 5 = 321 / 5 = 64.2 → 64. Reliable foundation code model delivering low latency and strong autocomplete fundamentals.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public web research across Mistral AI initial release publications, technical reports, OpenRouter listings, and code evaluation leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Codestral Announcement](https://mistral.ai)
  - [Mistral AI Documentation — Codestral 22B](https://docs.mistral.ai)
  - [OpenRouter — Codestral Overview](https://openrouter.ai)
  - [Hugging Face — mistralai/Codestral-22B-v0.1](https://huggingface.co/mistralai/Codestral-22B-v0.1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

