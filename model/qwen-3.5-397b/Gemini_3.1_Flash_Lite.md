# Qwen 3.5 397B — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.5 397B
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba's open-weights MoE (397B total/17B active) for reasoning/coding.
- **Provider / access:** Alibaba (https://qwenlm.github.io). Apache 2.0 open-weights.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/qwen-3.5-397b`
- **Context window:** 262K native (1M hosted).
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Hosted ~$0.60/$3.60 per 1M; free self-host.
- **Architecture:** MoE (397B total / 17B active).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **91.3%** (Alibaba meta.json)

Coding:
- SWE-bench: **76.4%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Capable for agentic tasks.
- **Reasoning: 90/100.** Strong reasoning (91.3% GPQA).
- **Context window: 90/100.** 1M hosted.
- **Multimodal: 80/100.** Text, image, video support.
- **Coding: 91/100.** Strong coding performance.
- **Cost efficiency: 100/100.** Open-weights / self-hostable.
- **Overall Score: 88/100.** Capable open-weights model for reasoning and coding.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenLM](https://qwenlm.github.io)
