# MiMo V2.6 Pro — findings by Gemini 3.1 Flash Lite

- Source: Xiaomi/MiMo V2.6 Pro
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's omni-modal MoE (1.02T total / 42B active) for agents and code.
- **Provider / access:** Xiaomi (https://huggingface.co/models?search=mimo-v2.6-pro). Chat Completions API / Self-hostable.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `xiaomi/mimo-v2.6-pro` (MIT license)
- **Context window:** 1M tokens total; 128K tokens max output.
- **Modalities:** Text, image, video, audio in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.435/$0.87 per 1M (Xiaomi API); cached $0.0036.
- **Architecture:** MoE (1.02T total / 42B active).

### Raw benchmarks found

Reasoning / knowledge:
- AA Index: **46.3** (Xiaomi meta.json)

Coding:
- Terminal-Bench 2.1: **89.9%** (Xiaomi meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong agentic coding capabilities.
- **Reasoning: 85/100.** Solid performance for its class.
- **Context window: 95/100.** 1M capacity.
- **Multimodal: 95/100.** Extensive input (Text, image, video, audio).
- **Coding: 94/100.** Elite agentic coding performance (89.9% Terminal-Bench 2.1).
- **Cost efficiency: 98/100.** Industry-leading pricing.
- **Overall Score: 92/100.** Highly competitive, cost-effective omni-modal agent model.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi MiMo](https://mimo.mi.com)
