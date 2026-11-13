# MiMo V2.6 Pro — findings by Gemini 3.1 Flash Lite

- Source: Xiaomi/MiMo V2.6 Pro
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's MIT omni-modal MoE for agents and code.
- **Provider / access:** Xiaomi. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `xiaomi/mimo-v2.6-pro`
- **Context window:** 1M total; 128K out.
- **Modalities:** Text, image, video, audio in; text out.
- **Pricing (as of 2026-11-13):** Paid ~$0.435/$0.87 per 1M.
- **Architecture:** MoE (1.02T total / 42B-active).

### Raw benchmarks found

- Terminal-Bench 2.1: **89.9%** (Xiaomi meta.json)
- AA Index: **46.3** (Xiaomi meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong agentic coding.
- **Reasoning: 88/100.** Solid reasoning.
- **Context window: 95/100.** 1M capacity.
- **Multimodal: 95/100.** Omni-modal (Text, image, video, audio).
- **Coding: 94/100.** Elite coding performance (89.9% TB 2.1).
- **Cost efficiency: 98/100.** Excellent pricing/value.
- **Overall Score: 92.8/100.** Highly capable, omni-modal agent model at an excellent price point.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi MiMo](https://mimo.mi.com)
