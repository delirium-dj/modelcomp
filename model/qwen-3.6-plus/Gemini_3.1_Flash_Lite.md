# Qwen 3.6 Plus — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.6 Plus
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's MoE (397B/17B-active) model for real-world agents and coding.
- **Provider / access:** Alibaba (https://qwenlm.github.io). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `alibaba/qwen3-6-plus`

- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.50/$3.00 (<=256K) to $2.00/$6.00 (256K-1M) per 1M.
- **Architecture:** MoE (397B total / 17B active).

### Raw benchmarks found

Reasoning / knowledge:
- No verified public score found.

Coding:
- LiveCodeBench: **87.1%** (Alibaba meta.json)
- SWE-bench Pro: **56.6%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Practical real-world agent and coding performance.
- **Reasoning: 85/100.** Solid reasoning.
- **Context window: 90/100.** 1M capacity.
- **Multimodal: 80/100.** Text, image, video support.
- **Coding: 89/100.** Strong coding performance (87.1% LiveCodeBench).
- **Cost efficiency: 80/100.** Good pricing tier.
- **Overall Score: 85.8/100.** Practical real-world agent model, now largely superseded by newer Plus generations.

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

