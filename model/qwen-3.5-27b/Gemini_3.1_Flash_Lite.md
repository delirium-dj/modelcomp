# Qwen 3.5 27B — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.5 27B
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's dense open-weights multimodal model for efficient coding and vision.
- **Provider / access:** Alibaba (https://huggingface.co/Qwen/Qwen3.5-27B). Apache 2.0 open-weights.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `qwen/qwen3.5-27b` (Open-weights)

- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** ~$0.27/$2.16 per 1M (hosted); self-host free.
- **Architecture:** Dense (27B).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **85.5%** (Alibaba meta.json)

Coding:
- SWE-bench Verified: **72.4%** (Alibaba meta.json)
- LiveCodeBench: **80.7%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 88/100.** Efficient coding and vision-language assistant.
- **Reasoning: 85/100.** Solid reasoning (85.5% GPQA).
- **Context window: 90/100.** 1M potential.
- **Multimodal: 85/100.** Strong Text, image, video support.
- **Coding: 90/100.** Strong coding assistant (72.4% SWE-bench Verified).
- **Cost efficiency: 100/100.** Open-weights / self-hostable.
- **Overall Score: 87.6/100.** Robust, efficient multimodal model for coding and general-purpose agents.

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

