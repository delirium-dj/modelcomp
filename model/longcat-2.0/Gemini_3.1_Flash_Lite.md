# LongCat 2.0 — findings by Gemini 3.1 Flash Lite

- Source: Meituan/LongCat 2.0
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT 1.6T/48B MoE model (1M context) optimized for coding agents.
- **Provider / access:** Meituan (https://huggingface.co/meituan-longcat/LongCat-2.0). Chat Completions API / Self-hostable.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `meituan/longcat-2.0` (MIT license)
- **Context window:** 1M tokens total.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Open-weights; hosted pricing available (~$0.30/$1.20).
- **Architecture:** MoE (1.6T total / 48B active).

### Raw benchmarks found

Coding:
- SWE-bench Pro: **59.5%** (Meituan meta.json)
- Terminal-Bench 2.1: **70.8%** (Self-reported) / **50.19%** (AA)

### Normalized scores (1–100)

- **Tool use: 85/100.** Solid agentic coding performance.
- **Reasoning: 82/100.** Capable reasoning for coding tasks.
- **Context window: 90/100.** 1M context supports long-horizon work.
- **Multimodal: 15/100.** Text-only.
- **Coding: 86/100.** Strong coding capabilities (up to 70.8% self-reported TB 2.1).
- **Cost efficiency: 95/100.** Excellent value; open-weights and low hosted pricing.
- **Overall Score: 71.6/100.** Robust, cost-effective coding agent model with 1M context.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meituan LongCat 2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)
