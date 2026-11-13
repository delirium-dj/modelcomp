# Qwen 3.5 122B — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.5 122B
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B
- **Short description:** Alibaba's open-weight vision-language agent MoE (125B total/10B active).
- **Provider / access:** Alibaba (https://huggingface.co/Qwen/Qwen3.5-122B-A10B). Apache 2.0 open-weights.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `qwen/qwen3.5-122b-a10b` (Open-weights)
- **Context window:** 262K native (extensible to 1M).
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** ~$0.26/$2.08 per 1M (hosted); self-host $0.
- **Architecture:** MoE (125B total / 10B active).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **86.6%** (Alibaba meta.json)

Coding:
- SWE-bench Verified: **72.0%** (Alibaba meta.json)
- Terminal-Bench 2.0: **49.4%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong vision-language agent performance.
- **Reasoning: 88/100.** Reliable reasoning (86.6% GPQA).
- **Context window: 90/100.** 1M potential.
- **Multimodal: 85/100.** Strong text/image/video support.
- **Coding: 88/100.** Capable coding assistant (72.0% SWE-bench Verified).
- **Cost efficiency: 100/100.** Open-weights / self-hostable.
- **Overall Score: 87.8/100.** Highly efficient open-weights vision-language agent model.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenLM](https://qwenlm.github.io)
