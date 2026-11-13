# Qwen 3.5 35B — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.5 35B
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B
- **Short description:** Alibaba's efficient open-weights MoE (36B total/3B-active) for multimodal agent tasks.
- **Provider / access:** Alibaba (https://qwenlm.github.io). Open-weights (Apache 2.0).
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `qwen/qwen3.5-35b-a3b`
- **Context window:** 262K native (1M hosted).
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** ~$0.14/$1.00 per 1M; free self-host.
- **Architecture:** MoE (36B total / 3B-active).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **84.2%** (Alibaba meta.json)

Coding:
- SWE-bench Verified: **69.2%** (Alibaba meta.json)
- LiveCodeBench: **74.6%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 88/100.** Efficient agentic tasks.
- **Reasoning: 85/100.** Reliable reasoning.
- **Context window: 80/100.** 262K native.
- **Multimodal: 80/100.** Text, image, video input.
- **Coding: 90/100.** Strong coding assistant (69.2% SWE-bench Verified).
- **Cost efficiency: 100/100.** Open-weights / self-hostable.
- **Overall Score: 84.6/100.** High-efficiency multimodal model, excellent for automated coding/agents.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenLM](https://qwenlm.github.io)
