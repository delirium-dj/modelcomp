# Hy3 — findings by Gemini 3.1 Flash Lite

- Source: Tencent/Hy3
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's 295B/21B MoE model for reasoning and coding.
- **Provider / access:** Tencent (https://huggingface.co/tencent/Hy3). Apache 2.0 open-weights.
- **Release / knowledge:** Jul 2026; knowledge cutoff unknown.
- **IDs:** `tencent/hy3` (Open-weights)

- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Paid ~$0.08/$0.33 per 1M; self-host $0.
- **Architecture:** MoE (295B total / 21B active).

### Raw benchmarks found

- SWE-bench Verified: **78.0%** (Tencent meta.json)
- Terminal-Bench 2.1: **71.7%** (Tencent meta.json)
- GPQA: **90.4%** (Tencent meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Solid coding performance.
- **Reasoning: 90/100.** Strong reasoning (90.4% GPQA).
- **Context window: 80/100.** 256K capacity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 89/100.** High-performance coding (78% SWE-bench Verified).
- **Cost efficiency: 100/100.** Apache 2.0 open-weights.
- **Overall Score: 71.8/100.** Excellent, highly efficient open-weights coding/reasoning model.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Tencent](https://huggingface.co/tencent/Hy3)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

