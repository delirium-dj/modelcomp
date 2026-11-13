# Kimi K2.7 Code — findings by Gemini 3.1 Flash Lite

- Source: Moonshot AI/Kimi K2.7 Code
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-specialized 1T/32B MoE for long-horizon coding.
- **Provider / access:** Moonshot AI (https://platform.moonshot.ai). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/kimi-k2.7-code` (Paid-tier)
- **Context window:** 262K.
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Paid ~$0.95/$4.00 per 1M.
- **Architecture:** MoE (1T total / 32B active).

### Raw benchmarks found

- τ²: **90.1%** (Moonshot AI meta.json)
- SWE-bench: **78.2%** (Moonshot AI meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Specialized agentic coding.
- **Reasoning: 88/100.** Reliable coding reasoning.
- **Context window: 80/100.** 262K capacity.
- **Multimodal: 70/100.** Text, image, video support.
- **Coding: 92/100.** Elite coding specialist (78.2% SWE-bench).
- **Cost efficiency: 80/100.** Competitive pricing.
- **Overall Score: 84/100.** Capable coding specialist, optimized for long-horizon terminal work.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI](https://platform.moonshot.ai)
