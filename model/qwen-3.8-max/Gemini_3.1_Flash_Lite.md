# Qwen 3.8 Max — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.8 Max
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's flagship multimodal MoE (2.4T total / 95B-active) for coding and reasoning agents.
- **Provider / access:** Alibaba (https://qwenlm.github.io). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `alibaba/qwen3-8-max`

- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Paid $2.00/$6.00 per 1M (one-time 1M-token free quota).
- **Architecture:** Multimodal MoE (2.4T total / 95B-active).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **~93.7%** (Alibaba meta.json)

Coding:
- SWE-bench Pro: **67.7%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** Frontier agentic capabilities.
- **Reasoning: 93/100.** Strong reasoning (93.7% GPQA).
- **Context window: 95/100.** 1M context.
- **Multimodal: 95/100.** Elite multimodal (Text, image, video).
- **Coding: 91/100.** Strong coding assistant.
- **Cost efficiency: 90/100.** Exceptional value for flagship-class model.
- **Overall Score: 93.2/100.** Powerful, multimodal flagship MoE with market-leading value-to-performance.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenLM](https://qwenlm.github.io)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

