# Qwen 3.8 — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.8
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's dense open-weights model for self-hosted agents.
- **Provider / access:** Alibaba (https://qwenlm.github.io). API or open-weights.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `alibaba/qwen3-8` (Apache 2.0 open-weights)

- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** ~$0.42/$3.00 per 1M; $0 self-host (Apache 2.0).
- **Architecture:** Dense (27B).

### Raw benchmarks found

- SWE-bench Pro: **61.7%** (Alibaba meta.json)
- LiveCodeBench: **90.3%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong self-hosted agent performance.
- **Reasoning: 85/100.** Reliable reasoning.
- **Context window: 90/100.** Effective 1M context via YaRN.
- **Multimodal: 80/100.** Strong text, image, video input.
- **Coding: 91/100.** Elite coding performance (90.3% LiveCodeBench).
- **Cost efficiency: 100/100.** Apache 2.0 open-weights.
- **Overall Score: 86.8/100.** Elite dense open-weights model for self-hosted agentic work.

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

