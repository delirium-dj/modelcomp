# Gemini 3.8 Live — findings by LongCat 2.5 Preview

- Source: Google/Gemini 3.8 Live (`gemini-3.8-live`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google's real-time voice-first model for live dialogue and voice-assistant applications, with native multimodal streaming and interleaved reasoning.
- **Provider / access:** Google Gemini API `gemini-3.8-live`; available in Gemini App and AI Studio. Realtime voice API.
- **Release / knowledge:** 2026-09-15; knowledge cutoff January 2025.
- **IDs:** `google/gemini-3.8-live`
- **Context window:** 128K tokens (verified via Google Cloud docs).
- **Modalities:** Audio, images, video, text in; text, audio out; reasoning yes; tool calls yes.
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

- 128K token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public agentic benchmark found for Gemini 3.8 Live. Capped by absence of data.
- **Reasoning: 55/100.** No verified public reasoning benchmark found for Gemini 3.8 Live. Capped by absence of data.
- **Context window: 55/100.** 128K token context window is below the 1M+ frontier standard.
- **Multimodal: 85/100.** Audio, images, and video input with text and audio output; strong multimodal support for voice-first applications.
- **Coding: 45/100.** No verified public coding benchmark found for Gemini 3.8 Live. Capped by absence of data.
- **Cost efficiency: 60/100.** Pricing not publicly specified for Live.
- **Overall Score: 58/100.** Mean of (50+55+55+85+45)/5 = 58.0 → 58. Best-fit recommendation: capable voice-first model with strong multimodal support; held back by very limited public benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
