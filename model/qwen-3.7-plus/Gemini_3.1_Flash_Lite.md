# Qwen 3.7 Plus — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.7 Plus
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's GUI-agent model driven by the Max backbone, optimized for real-time interface control.
- **Provider / access:** Alibaba. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/qwen-3.7-plus`

- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.32-$1.20/$1.28-$4.80 per 1M.
- **Architecture:** Proprietary (Max backbone).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **90.0%** (Alibaba meta.json)

Coding:
- LiveCodeBench: **89.6%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 95/100.** Optimized for real-time GUI and interface agent tasks.
- **Reasoning: 90/100.** Strong reasoning.
- **Context window: 90/100.** 1M context.
- **Multimodal: 80/100.** Text/image input.
- **Coding: 92/100.** Elite coding capabilities.
- **Cost efficiency: 80/100.** Balanced pricing for GUI-agent tier.
- **Overall Score: 89.4/100.** Frontier-class model specializing in GUI agent interaction.

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

