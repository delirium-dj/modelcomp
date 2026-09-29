# Grok 4 Fast — findings by LongCat 2.5 Preview

- Source: xAI/Grok 4 Fast Reasoning (`grok-4-fast-reasoning`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's fast, budget-friendly reasoning model from the Grok 4 family, with 2M context window and tool calling support. Designed for high-volume, low-latency workloads.
- **Provider / access:** xAI API `grok-4-fast-reasoning`. Responses API / Chat Completions API.
- **Release / knowledge:** 2025-09-19; knowledge cutoff not publicly specified.
- **IDs:** `xai/grok-4-fast-reasoning`
- **Context window:** 2M tokens (verified via BenchLM).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.20/$0.50 per 1M in/out (from Requesty).
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Grok 4 Fast specifically.

Reasoning / knowledge:

- No verified public reasoning benchmark found for Grok 4 Fast specifically.

Coding:

- Vibe Code Bench: **0.00%** (BenchLM)

Long context:

- 2M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified public agentic benchmark found for Grok 4 Fast. Capped by absence of data.
- **Reasoning: 50/100.** No verified public reasoning benchmark found for Grok 4 Fast. Capped by absence of data.
- **Context window: 98/100.** 2M token context window is best-in-class; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 70/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 35/100.** Vibe Code Bench at 0.00% is weak. Capped by limited coding benchmark coverage.
- **Cost efficiency: 95/100.** $0.20/$0.50 per 1M is among the cheapest models in the frontier tier; exceptional value.
- **Overall Score: 59/100.** Mean of (40+50+98+70+35)/5 = 58.6 → 59. Best-fit recommendation: budget-friendly fast model with best-in-class context window and extreme cost efficiency; held back by very limited public benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
