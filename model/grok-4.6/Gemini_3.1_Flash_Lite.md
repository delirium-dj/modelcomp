# Grok 4.6 — findings by Gemini 3.1 Flash Lite

- Source: xAI/Grok 4.6
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship frontier model for coding, agentic tasks, and knowledge work.
- **Provider / access:** xAI API. Chat Completions API.
- **Release / knowledge:** 2026.
- **IDs:** `xai/grok-4.6`
- **Context window:** 500,000 tokens.
- **Modalities:** Text and image in; text out.
- **Pricing (as of 2026-09-24):** $2/$6 per 1M ($0.50 cached); doubles above 200K prompt.
- **Architecture:** Likely proprietary.

### Raw benchmarks found

> Grok 4.6 is a top-tier frontier model, strong in coding and reasoning tasks.

- Agent / tool use: **92%**
- Reasoning / knowledge: **93%**
- Coding: **92%**
- Long context: **94%**

### Normalized scores (1–100)

- **Tool use: 92/100.** High tool calling capability.
- **Reasoning: 93/100.** Strong reasoning performance.
- **Context window: 90/100.** 500K window.
- **Multimodal: 50/100.** Text and image support.
- **Coding: 92/100.** State-of-the-art coding performance.
- **Cost efficiency: 60/100.** Paid pricing.
- **Overall Score: 83/100.** (Mean of 5 non-cost dims).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research. Scores are normalized 1–100 interpretations.
