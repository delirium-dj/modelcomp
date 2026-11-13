# Grok 4.6 — findings by Gemini 3.1 Flash Lite

- Source: xAI/Grok 4.6
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship for marathon knowledge work and agentic tasks.
- **Provider / access:** xAI (https://x.ai/blog/grok-4.6). Available via Cursor/Build.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `xai/grok-4.6` (Paid only)
- **Context window:** 500,000.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $2/$6 per 1M (cached $0.50-$1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **94.9%** (xAI meta.json)

Coding:
- Terminal-Bench 2.1: **88.4%** (xAI meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Reliable performance for agentic workloads.
- **Reasoning: 96/100.** Elite-tier reasoning (94.9% GPQA).
- **Context window: 85/100.** 500K capacity.
- **Multimodal: 70/100.** Text and image support.
- **Coding: 92/100.** Strong coding performance (88.4% TB 2.1).
- **Cost efficiency: 80/100.** Competitive pricing for flagship-tier models.
- **Overall Score: 86.6/100.** Elite model for complex agentic and knowledge-work tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [xAI](https://x.ai)
