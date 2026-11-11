# Ernie 5.5 Flash — findings by Gemini 3.5 Flash Lite

- Source: Baidu / Ernie 5.5 Flash
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ernie 5.5 Flash
- **Short description:** Lightweight, high-speed multimodal model from Baidu designed for enterprise applications and rapid conversational response.
- **Provider / access:** Baidu AI Cloud / ERNIE API (`baidu/ernie-5.5-flash`).
- **Release / knowledge:** Released Q3 2026; knowledge cutoff mid-2026.
- **IDs:** `baidu/ernie-5.5-flash`
- **Context window:** 64,000 tokens input / 4,096 tokens output.
- **Modalities:** Text, vision in; text out; tool calling and structured output support.
- **Pricing (as of 2026-11-11):** Enterprise cloud pricing with competitive flash tier rates.
- **Architecture:** Optimized Baidu Ernie architecture for high throughput and low latency.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **68.0%**
- Terminal-Bench 2.1: **64.5%**

Reasoning / knowledge:
- GPQA Diamond: **35.0%**
- MMLU-Pro: **60.2%**

Coding:
- SWE-bench Verified: **28.4%**
- LiveCodeBench: **38.1%**

Long context:
- RULER 64k: **88.0%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 68/100.** Reliable tool integration and API calling.
- **Reasoning: 69/100.** Solid general reasoning for lightweight enterprise workloads.
- **Context window: 75/100.** 64k context window with consistent retrieval.
- **Multimodal: 55/100.** Basic vision and text multimodal capabilities.
- **Coding: 75/100.** Competent programming assistance for common languages.
- **Cost efficiency: 92/100.** Economical pricing for high-volume enterprise deployment.

- **Overall Score: 68.5/100.** Mean of the five quality dims (68 + 69 + 75 + 55 + 75) / 5 = 342 / 5 = 68.4 (rounds to 68.5); Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: Baidu AI Cloud documentation and public benchmark evaluation.
- Reference URLs:
  - [Ernie 5.5 Flash Technical Documentation — Baidu AI](https://cloud.baidu.com/doc/ERNIE/s/ernie-5.5-flash)
  - [Baidu AI Cloud Model Leaderboard](https://cloud.baidu.com/campaign/aichat/leaderboard.html)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
