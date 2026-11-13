# Grok 4.20 — findings by Gemini 3.1 Flash Lite

- Source: xAI/Grok 4.20
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's flagship multi-agent reasoning model with 1M–2M context window.
- **Provider / access:** xAI (https://docs.x.ai). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `x-ai/grok-4.20`

- **Modalities:** Text, image, file/PDF in; text out.
- **Pricing (as of 2026-11-13):** Paid $1.25/$2.50 per 1M (<200K); $2.50/$5.00 (>200K).
- **Architecture:** Proprietary (multi-agent mode).

### Raw benchmarks found

Coding:
- SWE-bench Pro: **72-77%** (xAI meta.json)
- LiveCodeBench: **84.3%** (xAI meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** Innovative multi-agent (leader + 4/16 agents) architecture.
- **Reasoning: 90/100.** High-performance multi-agent reasoning.
- **Context window: 95/100.** 1M+ capacity.
- **Multimodal: 70/100.** Text/image support.
- **Coding: 92/100.** Strong coding performance (72-77% SWE-bench Pro).
- **Cost efficiency: 80/100.** Competitive pricing for flagship-tier.
- **Overall Score: 87.8/100.** Innovative multi-agent reasoning model for research and coding.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [xAI](https://x.ai)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

