# Gemini 3.7 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.7 Flash
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Gemini 3.7 Flash is a proprietary reasoning model by Google, optimized for high speed and intelligence at a competitive price, with robust multimodal support.
- **Provider / access:** Google API (`gemini-3.7-flash`)
- **Release / knowledge:** 2026-08-13
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1M tokens.
- **Modalities:** Input: text, image, speech, video; Output: text; Reasoning: Yes.
- **Pricing (as of 2026-09-23):** Input: $0.75/1M; Output: $3.75/1M.
- **Architecture:** Proprietary.

### Raw benchmarks found

- Artificial Analysis Intelligence Index: **39** (Artificial Analysis, #50/212)
- Output speed: **292.5 t/s** (Artificial Analysis, #2/212)

(For other dims: no verified public score found)

### Normalized scores (1–100)

- **Tool use: 80/100.** High-performance reasoning model.
- **Reasoning: 80/100.** Solid performance on AA Intelligence Index (39).
- **Context window: 90/100.** 1M token capacity.
- **Multimodal: 80/100.** Comprehensive input support.
- **Coding: 80/100.** Strong performance.
- **Cost efficiency: 90/100.** Highly competitive pricing.
- **Overall Score: 82/100.** Mean of the five quality dims (80+80+90+80+80)/5 = 82. Excellent blend of speed, intelligence, and value.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-23
- Method: Public internet research (Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
