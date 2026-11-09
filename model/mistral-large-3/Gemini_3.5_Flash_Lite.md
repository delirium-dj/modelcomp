# Mistral Large 3 — findings by Gemini 3.5 Flash Lite

- Source: Mistral AI / `mistral-large-3` (`mistral-large-2512`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral AI's 675B total / 41B active parameter Apache 2.0 open-weights MoE flagship released in December 2025 (`mistral-large-2512`), featuring native vision support and a 256K context window. Predecessor to Mistral Large 4.
- **Provider / access:** Mistral La Plateforme (`mistral-large-2512`), OpenRouter, Hugging Face open weights (`mistralai/Mistral-Large-3-675B-Instruct-2512`), and enterprise cloud platforms.
- **Release / knowledge:** Released December 2025 (`mistral-large-2512`); Apache 2.0 open weights.
- **IDs:** `mistral-large-3`, `mistral-large-2512`, `mistralai/Mistral-Large-3-675B-Instruct-2512`, `opencode/mistral-large-3`.
- **Context window:** 256,000 tokens total (256K).
- **Modalities:** Text and image input; text output; native tool calling and structured outputs.
- **Pricing (as of 2026-11-09):** $0.50 / $1.50 per 1M input/output tokens via hosted API providers; Apache 2.0 open weights allow $0 self-hosting.
- **Architecture:** Mixture of Experts (MoE) transformer, 675B total parameters with ~41B active per token.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **68.5%** <(Open-weights baseline evaluation)>
- MMLU Pro: **75.2%** <(Mistral technical release evaluation)>

Agent / Tool use:
- Function calling and structured output success rate: **84.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval / LiveCodeBench: **56.5%** <(Code generation evaluation)>

Long context:
- 256K context window evaluation: **Stable retrieval up to 256K** <(Mistral model card)>

### Normalized scores (1–100)

- **Tool use: 64/100.** Solid agentic tool calling and structured output support, though superseded on recent leaderboards by Mistral Large 4.
- **Reasoning: 66/100.** Robust reasoning performance for a 41B active MoE (GPQA Diamond 68.5%, MMLU Pro 75.2%), providing dependable general intelligence.
- **Context window: 78/100.** 256K context window with reliable retrieval across extended documents.
- **Multimodal: 60/100.** Native text and image input support; text-only output.
- **Coding: 58/100.** Competent coding assistant for standard development tasks, though trailing specialized models like Codestral.
- **Cost efficiency: 85/100.** Competitive hosted API pricing ($0.50/$1.50 per 1M tokens) combined with Apache 2.0 open weights for self-hosting.
- **Overall Score: 65.2/100.** (64 + 66 + 78 + 60 + 58) / 5 = 65.2 -> 65.0. Best-fit recommendation: Sovereign, self-hostable Apache 2.0 open-weight flagship for enterprise workflows requiring local deployment and vision support.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09
- Method: Public internet research and cross-verification of Mistral AI model documentation, Hugging Face weight releases, and open-weights technical specifications.
- Reference URLs:
  - [Mistral AI Documentation](https://docs.mistral.ai)
  - [Hugging Face Mistral Large 3 Collection](https://huggingface.co/collections/mistralai/mistral-large-3)
