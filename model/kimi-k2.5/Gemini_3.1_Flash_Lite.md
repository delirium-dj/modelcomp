# Kimi K2.5 — findings by Gemini 3.1 Flash Lite

- Source: Moonshot AI/Kimi K2.5
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's trillion-parameter MoE model (262K context) for long-context agents.
- **Provider / access:** Moonshot AI (https://huggingface.co/models?search=kimi-k2.5). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/kimi-k2.5` (Paid-tier)

- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** ~$0.60/$3.00 per 1M.
- **Architecture:** MoE (1T total / 32B active).

### Raw benchmarks found

Reasoning / knowledge:
- τ²: **95.9%** (Moonshot AI meta.json)
- AIME: **95.8%** (Moonshot AI meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Elite agentic performance.
- **Reasoning: 95/100.** Elite-tier reasoning (95.8% AIME).
- **Context window: 80/100.** 262K capacity.
- **Multimodal: 80/100.** Text, image, video support.
- **Coding: 90/100.** Strong coding assistant.
- **Cost efficiency: 70/100.** Competitive pricing.
- **Overall Score: 87/100.** Elite agent model for reasoning-intensive tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI](https://platform.moonshot.ai)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

