# Qwen 3.5 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud / Qwen 3.5 Flash Lite
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Ultra-lightweight flash variant of the Qwen 3.5 series optimized for maximum inference speed and minimal resource consumption.
- **Provider / access:** Alibaba Cloud DashScope (`qwen/qwen-3.5-flash-lite`).
- **Release / knowledge:** Released Q2 2026; knowledge cutoff early 2026.
- **IDs:** `qwen/qwen-3.5-flash-lite`
- **Context window:** 32,768 tokens input / 4,096 tokens output.
- **Modalities:** Text in; text out; tool use and JSON schema formatting.
- **Pricing (as of 2026-11-11):** Extremely low-cost flash tier pricing ($0.05 / 1M input).
- **Architecture:** Compact optimized Qwen transformer architecture.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **75.4%**

Reasoning / knowledge:
- GPQA Diamond: **36.2%**
- MMLU: **65.0%**

Coding:
- LiveCodeBench: **42.1%**

Long context:
- RULER 32k: **82.0%**

### Normalized scores (1–100)

- **Tool use: 75/100.** Efficient tool calling and function routing.
- **Reasoning: 74/100.** Solid lightweight reasoning.
- **Context window: 75/100.** 32k context window support.
- **Multimodal: 20/100.** Text-only flash model.
- **Coding: 74/100.** Capable routine programming assistance.
- **Cost efficiency: 99/100.** Ultra-low cost flash API pricing.

- **Overall Score: 63.6/100.** Mean of the five quality dims (75 + 74 + 75 + 20 + 74) / 5 = 318 / 5 = 63.6; Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: Alibaba Cloud Qwen documentation and second-pass benchmark evaluation.
- Reference URLs:
  - [Qwen 3.5 Flash Lite Model Card — Alibaba Cloud](https://help.aliyun.com/zh/dashscope/developer-reference/qwen-3.5-flash-lite)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
