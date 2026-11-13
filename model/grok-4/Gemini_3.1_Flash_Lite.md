# Grok 4 — findings by Gemini 3.1 Flash Lite

- Source: xAI/Grok 4
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's flagship 256K context reasoning model.
- **Provider / access:** xAI (https://x.ai). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/grok-4` (Deprecated)

- **Modalities:** Text, image, PDF in; text out.
- **Pricing (as of 2026-11-13):** Paid $3/$15 per 1M (cached $0.75).
- **Architecture:** Proprietary.

### Raw benchmarks found

Reasoning / knowledge:
- AIME: **91.7%** (xAI meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool use and web search integration.
- **Reasoning: 90/100.** Strong reasoning (91.7% AIME).
- **Context window: 80/100.** 256K capacity.
- **Multimodal: 70/100.** Text/image support.
- **Coding: 85/100.** Solid coding assistant.
- **Cost efficiency: 40/100.** Deprecated in favor of 4.5/4.7.
- **Overall Score: 82/100.** Reliable legacy flagship, superseded by newer Grok generations.

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

