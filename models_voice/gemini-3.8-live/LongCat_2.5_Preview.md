# Gemini 3.8 Live — findings by LongCat 2.5 Preview

- Source: Google/Gemini 3.8 Live (`gemini-3.8-live`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google's real-time voice-first model for live dialogue and voice-assistant applications. Part of the Gemini 3.8 family with native multimodal streaming.
- **Provider / access:** Google Gemini API `gemini-3.8-live`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-09-15; knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-3.8-live`
- **Context window:** Not publicly specified for Live; likely 1M based on Gemini 3.8 Flash.
- **Modalities:** Text, image, audio in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** Not publicly specified for Live.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Gemini 3.8 Live specifically.

Reasoning / knowledge:

- No verified public reasoning benchmark found for Gemini 3.8 Live specifically.

Coding:

- No verified public coding benchmark found for Gemini 3.8 Live specifically.

Long context:

- Context window not publicly specified for Live; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public agentic benchmark found for Gemini 3.8 Live. Capped by absence of data.
- **Reasoning: 50/100.** No verified public reasoning benchmark found for Gemini 3.8 Live. Capped by absence of data.
- **Context window: 95/100.** Likely 1M based on Gemini 3.8 Flash; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 80/100.** Text, image, and audio input with text output; strong multimodal support for voice-first applications.
- **Coding: 50/100.** No verified public coding benchmark found for Gemini 3.8 Live. Capped by absence of data.
- **Cost efficiency: 60/100.** Pricing not publicly specified for Live.
- **Overall Score: 65/100.** Mean of (50+50+95+80+50)/5 = 65.0 → 65. Best-fit recommendation: voice-first model with strong multimodal support; limited public benchmark coverage for the Live variant.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
