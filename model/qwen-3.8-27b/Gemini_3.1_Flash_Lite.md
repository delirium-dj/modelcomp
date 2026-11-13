# Qwen 3.8 27B — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.8 27B
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's dense open-weights model for high-efficiency agentic tasks.
- **Provider / access:** Alibaba (https://qwenlm.github.io). Apache 2.0 open-weights.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `alibaba/qwen3-8-27b`
- **Context window:** 262K native (1M via YaRN).
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Open-weights (self-host $0).
- **Architecture:** Dense (27B).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **90.5%** (Alibaba meta.json)

Coding:
- SWE-bench: **86.0%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 88/100.** Solid agentic coding performance.
- **Reasoning: 89/100.** Good reasoning performance (90.5% GPQA).
- **Context window: 90/100.** 1M context via YaRN.
- **Multimodal: 80/100.** Text, image, video input.
- **Coding: 91/100.** Strong coding capabilities (86.0% SWE-bench).
- **Cost efficiency: 100/100.** Open-weights.
- **Overall Score: 88/100.** Excellent value dense model for self-hosted agentic coding.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenLM](https://qwenlm.github.io)
