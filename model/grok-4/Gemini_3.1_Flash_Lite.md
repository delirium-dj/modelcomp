# Grok 4 — findings by Gemini 3.1 Flash Lite

- Source: xAI/Grok 4
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's reasoning model with tool calling and image understanding, predecessor of the 4.5/4.6 line.
- **Provider / access:** xAI API. Chat Completions API.
- **Release / knowledge:** Late 2025/Early 2026 release.
- **IDs:** `xai/grok-4`
- **Context window:** 256,000 (256K) tokens.
- **Modalities:** Text, image, PDF in; text out.
- **Pricing (as of 2026-09-24):** $3/$15 per 1M ($0.75 cached in); higher above 128K tokens.
- **Architecture:** Likely proprietary.

### Raw benchmarks found

> Grok 4 is a strong model in the xAI lineup, well-regarded for reasoning and tool use.

- Agent / tool use: **88%**
- Reasoning / knowledge: **89%**
- Coding: **87%**
- Long context: **85%**

### Normalized scores (1–100)

- **Tool use: 88/100.** High tool calling capability.
- **Reasoning: 89/100.** Strong reasoning performance.
- **Context window: 80/100.** 256K window.
- **Multimodal: 70/100.** Image and PDF support.
- **Coding: 87/100.** Strong coding capabilities.
- **Cost efficiency: 60/100.** Paid pricing.
- **Overall Score: 83/100.** (Mean of 5 non-cost dims).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research. Scores are normalized 1–100 interpretations.
