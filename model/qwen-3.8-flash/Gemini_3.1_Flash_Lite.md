# Qwen 3.8 Flash — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.8 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's sparse-MoE (6B-active) model for high-volume coding and agents.
- **Provider / access:** Alibaba (https://qwenlm.github.io). Chat Completions API / Open-weights.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `alibaba/qwen3-8-flash`
- **Context window:** 1M (API); 262K native.
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Paid ~$0.15/$0.47 per 1M. Free via Qoder.
- **Architecture:** Sparse MoE (6B active).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **91.7%** (Alibaba meta.json)

Coding:
- LiveCodeBench: **91.9%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Exceptional efficiency for high-volume agent tasks.
- **Reasoning: 90/100.** Strong reasoning (91.7% GPQA).
- **Context window: 90/100.** 1M context.
- **Multimodal: 80/100.** Text, image, video support.
- **Coding: 94/100.** Frontier-class coding efficiency (91.9% LiveCodeBench).
- **Cost efficiency: 100/100.** Market-leading low-cost efficiency.
- **Overall Score: 88.8/100.** Elite model for high-volume coding and agent tasks at an unbeatable price point.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenLM](https://qwenlm.github.io)
