# GPT Realtime 2 — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT Realtime 2 (`gpt-realtime-2`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime 2
- **Short description:** OpenAI's most capable realtime voice model, supporting speech-to-speech interactions with configurable reasoning effort, stronger instruction following, and reliable tool use for complex voice-agent workflows.
- **Provider / access:** OpenAI Realtime API `gpt-realtime-2`. Realtime API only.
- **Release / knowledge:** 2026-05-07; knowledge cutoff September 2024.
- **IDs:** `openai/gpt-realtime-2`
- **Context window:** 128,000 tokens (128K); max output 32K tokens (verified via OpenAI docs).
- **Modalities:** Text, image, audio in; text, audio out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $4.00/$24.00 per 1M text in/out (cached $0.40); $32/$64 per 1M audio in/out.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for GPT Realtime 2 specifically.

Reasoning / knowledge:

- No verified public reasoning benchmark found for GPT Realtime 2 specifically.

Coding:

- No verified public coding benchmark found for GPT Realtime 2 specifically.

Long context:

- 128K token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** Tool calling supported but no verified public agentic benchmark found. Capped by absence of data.
- **Reasoning: 50/100.** No verified public reasoning benchmark found for GPT Realtime 2. Capped by absence of data.
- **Context window: 55/100.** 128K token context window is below the 1M+ frontier standard.
- **Multimodal: 80/100.** Text, image, and audio input with text and audio output; strong multimodal support for voice-first applications.
- **Coding: 50/100.** No verified public coding benchmark found for GPT Realtime 2. Capped by absence of data.
- **Cost efficiency: 65/100.** $4.00/$24.00 per 1M text is moderate for a realtime voice model.
- **Overall Score: 57/100.** Mean of (50+50+55+80+50)/5 = 57.0 → 57. Best-fit recommendation: capable realtime voice model with strong multimodal support; held back by very limited public benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
