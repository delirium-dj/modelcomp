# Grok 4.3 — findings by Gemini 3.1 Flash Lite

- Source: xAI/Grok 4.3
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's 1M-context instruction-following reasoning model.
- **Provider / access:** xAI (https://x.ai). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/grok-4.3` (Paid-tier)
- **Context window:** 1M tokens total.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $1.25/$2.50 per 1M (<200K); $2.50/$5.00 (>200K).
- **Architecture:** Proprietary.

### Raw benchmarks found

- IFBench: **83.3%** (xAI meta.json)
- Honesty: **83%** non-hallucination (xAI meta.json)

### Normalized scores (1–100)

- **Tool use: 88/100.** Highly reliable instruction following.
- **Reasoning: 89/100.** Strong reasoning, very high honesty.
- **Context window: 90/100.** 1M capacity.
- **Multimodal: 70/100.** Text/image support.
- **Coding: 88/100.** Reliable coding assistant.
- **Cost efficiency: 90/100.** Competitive pricing.
- **Overall Score: 85/100.** Elite instruction-follower with exceptional honesty profile.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [xAI](https://x.ai)
