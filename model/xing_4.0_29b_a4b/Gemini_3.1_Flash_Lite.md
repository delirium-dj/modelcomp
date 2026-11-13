# Xing 4.0 29B A4B — findings by Gemini 3.1 Flash Lite

- Source: TeleAI/Xing 4.0 29B A4B
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B A4B
- **Short description:** TeleAI's 29B/4B-active MoE model trained on Ascend NPUs for agentic tasks.
- **Provider / access:** TeleAI (https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B). Apache 2.0 open-weights.
- **Release / knowledge:** Sep 2026; knowledge cutoff unknown.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (Apache 2.0)
- **Context window:** 262K native (512K via YaRN).
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Open-weights / self-host $0.
- **Architecture:** MoE (29B total / 4B active).

### Raw benchmarks found

- SWE-bench Verified: **75.0%** (TeleAI meta.json)
- Terminal-Bench 2.1: **57.5%** (TeleAI meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Capable for agentic tasks.
- **Reasoning: 80/100.** Solid reasoning performance.
- **Context window: 85/100.** 262K native / 512K via YaRN.
- **Multimodal: 15/100.** Text-only.
- **Coding: 88/100.** Capable coding assistant (75.0% SWE-bench Verified).
- **Cost efficiency: 100/100.** Open-weights / self-hostable.
- **Overall Score: 70.6/100.** Efficient open-weights model, noteworthy for Ascend NPU training.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [TeleAI](https://huggingface.co/XingChen-AGI)
