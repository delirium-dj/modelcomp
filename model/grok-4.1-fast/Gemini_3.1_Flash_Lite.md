# Grok 4.1 Fast — findings by Gemini 3.1 Flash Lite

- Source: xAI/Grok 4.1 Fast
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's high-efficiency flagship with 2M context and advanced tool-calling reasoning.
- **Provider / access:** xAI (https://x.ai). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `xai/grok-4.1-fast-reasoning` (Paid-tier)
- **Context window:** 2,000,000 tokens total; ~30,000 max output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.20/$0.50 per 1M (cached $0.05).
- **Architecture:** Proprietary.

### Raw benchmarks found

Reasoning / knowledge:
- Tau2 (reasoning): **93.3%** (xAI meta.json)
- Tau2 (plain): **63.7%** (xAI meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** Optimized for high-volume, low-latency tool calling.
- **Reasoning: 90/100.** Strong performance in specialized builds.
- **Context window: 100/100.** 2M capacity.
- **Multimodal: 70/100.** Text and image support.
- **Coding: 85/100.** Capable for agentic tasks.
- **Cost efficiency: 100/100.** Industry-leading low cost for volume.
- **Overall Score: 87.4/100.** Highly efficient flagship model for volume-heavy tool-calling agents.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [xAI](https://x.ai)
