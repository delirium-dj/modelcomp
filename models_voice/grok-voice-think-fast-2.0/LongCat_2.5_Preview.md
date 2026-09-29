# Grok Voice Think Fast 2.0 — findings by LongCat 2.5 Preview

- Source: xAI/Grok Voice Think Fast 2.0 (`grok-voice-think-fast-2.0`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** xAI's next-generation speech-to-speech voice model with improved intelligence, transcription accuracy, and conversational capabilities. Reasons through queries while speaking with minimal latency.
- **Provider / access:** xAI API `grok-voice-think-fast-2.0`. Realtime voice API.
- **Release / knowledge:** 2026-07-29; knowledge cutoff not publicly specified.
- **IDs:** `xai/grok-voice-think-fast-2.0`
- **Context window:** Not publicly specified.
- **Modalities:** Audio in; audio out; reasoning yes; tool use yes.
- **Pricing (as of 2026-09-29):** $0.08/min of audio ($4.80/hour); $0.004/text input message.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- τ-voice Bench: **56.5%** (#1 among all models) (xAI)

Reasoning / knowledge:

- Big Bench Audio: **97.2%** (xAI)

Coding:

- No verified public coding benchmark found for Grok Voice Think Fast 2.0.

Long context:

- Context window not publicly specified; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 60/100.** τ-voice Bench at 56.5% (#1) shows strong agentic voice performance. Capped by limited agentic benchmark coverage.
- **Reasoning: 75/100.** Big Bench Audio at 97.2% is strong. Capped by limited reasoning benchmark diversity.
- **Context window: 50/100.** Context window not publicly specified. Capped by absence of data.
- **Multimodal: 70/100.** Audio input and output with speech-to-speech capabilities. Capped by no text/image/video support.
- **Coding: 45/100.** No verified public coding benchmark found for Grok Voice Think Fast 2.0. Capped by absence of data.
- **Cost efficiency: 70/100.** $0.08/min is moderate for a realtime voice model.
- **Overall Score: 60/100.** Mean of (60+75+50+70+45)/5 = 60.0 → 60. Best-fit recommendation: capable speech-to-speech model with strong audio reasoning and agentic voice performance; held back by limited public benchmark coverage and unspecified context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
