# GPT OSS 120B Lite — findings by Gemini 3.5 Flash Lite

- Source: Open Source AI Community / GPT OSS 120B Lite
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT OSS 120B Lite
- **Short description:** Lightweight distilled open-source 120B parameter model optimized for local developer deployment and high-speed reasoning.
- **Provider / access:** HuggingFace / Open Source Community (`gpt-oss/gpt-oss-120b-lite`).
- **Release / knowledge:** Released Q3 2026; knowledge cutoff mid-2026.
- **IDs:** `gpt-oss/gpt-oss-120b-lite`
- **Context window:** 64,000 tokens input / 4,096 tokens output.
- **Modalities:** Text in; text out; tool calling and function schemas.
- **Pricing (as of 2026-11-11):** Open-weights / free self-hosting.
- **Architecture:** 120B parameter MoE/dense distilled open weights architecture.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **78.2%**

Reasoning / knowledge:
- GPQA Diamond: **49.5%**
- MMLU-Pro: **68.4%**

Coding:
- SWE-bench Verified: **45.2%**
- LiveCodeBench: **58.1%**

Long context:
- RULER 64k: **89.5%**

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool calling and structured output parsing.
- **Reasoning: 80/100.** Excellent reasoning for a distilled open-weights model.
- **Context window: 85/100.** 64k context with reliable attention span.
- **Multimodal: 20/100.** Text-only open weights model.
- **Coding: 82/100.** Robust coding assistance and debugging.
- **Cost efficiency: 98/100.** Zero cost open-weights model for local hardware.

- **Overall Score: 69.0/100.** Mean of the five quality dims (78 + 80 + 85 + 20 + 82) / 5 = 345 / 5 = 69.0; Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: Deep second-pass open-weights evaluation and community benchmarking.
- Reference URLs:
  - [GPT OSS 120B Lite HuggingFace Model Card](https://huggingface.co/gpt-oss/gpt-oss-120b-lite)
  - [Open Source AI Community Evaluation Log](https://opensource.ai/evals/gpt-oss-120b-lite)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
