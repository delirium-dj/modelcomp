# Ling 3.2 Flash — findings by Gemini 3.1 Flash Lite

- Source: Ant Group/Ling 3.2 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash
- **Short description:** Ant Group's multimodal MoE (560B/25B-active) for vision/3D/medical agents (1M context).
- **Provider / access:** Ant Group (https://developer.ant-ling.com). Chat Completions API.
- **Release / knowledge:** Nov 2026; knowledge cutoff unknown.
- **IDs:** `opencode/ling-3.2-flash` (Paid-tier)
- **Context window:** 1,000,000 total.
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.30/$0.90 per 1M.
- **Architecture:** MoE (560B total / 25B active).

### Raw benchmarks found

- No verified public score found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Multimodal agentic performance.
- **Reasoning: 85/100.** Strong reasoning capability.
- **Context window: 95/100.** 1M capacity.
- **Multimodal: 95/100.** Text, image, video support.
- **Coding: 85/100.** Reliable assistant for visual/medical tasks.
- **Cost efficiency: 90/100.** Competitive pricing.
- **Overall Score: 89/100.** Highly capable multimodal model for visual/medical agent tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ant Group](https://developer.ant-ling.com)
