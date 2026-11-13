# MiMo V2.6 Flash — findings by Gemini 3.1 Flash Lite

- Source: Xiaomi/MiMo V2.6 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT omni-modal MoE (309B/15B-active) for long-horizon agents.
- **Provider / access:** Xiaomi. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `xiaomi/mimo-v2.6-flash`

- **Modalities:** Text, image, video, audio in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.14/$0.28 per 1M; cached $0.0028.
- **Architecture:** MoE (309B total / 15B active).

### Raw benchmarks found

Coding:
- Terminal-Bench 2.1: **87.6%** (Xiaomi meta.json)
- DeepSWE: **67.9%** (Xiaomi meta.json)

### Normalized scores (1–100)

- **Tool use: 89/100.** Efficient agentic performance.
- **Reasoning: 85/100.** Solid reasoning in a compact active-parameter budget.
- **Context window: 90/100.** 1M context.
- **Multimodal: 95/100.** Strong omni-modal support.
- **Coding: 90/100.** Excellent coding capabilities (87.6% Terminal-Bench 2.1).
- **Cost efficiency: 98/100.** Industry-leading pricing.
- **Overall Score: 90/100.** A highly efficient, omni-modal agent model.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi MiMo](https://mimo.mi.com)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

