# Qwen 3.8 2400B A95B — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud / Qwen 3.8 2400B A95B
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 2400B A95B
- **Short description:** Massive-scale mixture-of-experts frontier model from Alibaba Qwen series with 2.4 trillion total parameters and 95 billion active parameters per token.
- **Provider / access:** Alibaba Cloud DashScope (`qwen/qwen-3.8-2400b-a95b`).
- **Release / knowledge:** Released Q4 2026; knowledge cutoff current.
- **IDs:** `qwen/qwen-3.8-2400b-a95b`
- **Context window:** 256,000 tokens input / 16,384 tokens output.
- **Modalities:** Text, vision in; text out; advanced tool calling, reasoning, and JSON mode.
- **Pricing (as of 2026-11-11):** Enterprise tier pricing reflecting massive parameter scale.
- **Architecture:** 2.4T total parameter MoE (95B active) trained on extensive multilingual corpus.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **94.2%**
- Terminal-Bench 2.1: **92.8%**

Reasoning / knowledge:
- GPQA Diamond: **78.5%**
- HLE: **65.2%**
- Artificial Analysis Intelligence Index: **93.8 / #1**

Coding:
- SWE-bench Verified: **81.5%**
- LiveCodeBench: **86.4%**

Long context:
- RULER 256k: **97.5%**

### Normalized scores (1–100)

- **Tool use: 94/100.** Elite agentic tool use and complex function orchestration.
- **Reasoning: 95/100.** Frontier-class reasoning across complex reasoning benchmarks.
- **Context window: 98/100.** 256k context with near-perfect retrieval accuracy.
- **Multimodal: 92/100.** High-fidelity vision and document processing.
- **Coding: 86/100.** Superior software engineering and repository-level coding.
- **Cost efficiency: 75/100.** Premium enterprise pricing for 2.4T parameter scale.

- **Overall Score: 93/100.** Mean of the five quality dims (94 + 95 + 98 + 92 + 86) / 5 = 465 / 5 = 93.0; Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: Alibaba Cloud Qwen technical report and frontier benchmark evaluation.
- Reference URLs:
  - [Qwen 3.8 2400B A95B Technical Brief — Alibaba Cloud](https://qwenlm.github.io/blog/qwen-3.8-2400b-a95b/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
