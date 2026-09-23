# Gemini 3.8 Flash (high) — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.8 Flash (high)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (high)
- **Short description:** Gemini 3.8 Flash (high) is a proprietary reasoning model by Google, optimized for high intelligence and speed, supporting multimodal inputs. It is suitable for complex reasoning and agentic tasks.
- **Provider / access:** Google API (`gemini-3.8-flash`)
- **Release / knowledge:** 2026-09-02; Knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1M tokens total.
- **Modalities:** Input: text, image, speech, video; Output: text; Reasoning: Yes; Tool calls: Yes.
- **Pricing (as of 2026-09-23):** Input: $0.75/1M; Output: $3.75/1M.
- **Architecture:** Proprietary.

### Raw benchmarks found

- Artificial Analysis Intelligence Index: **41** (Artificial Analysis, #40/212)
- Output speed: **275.9 t/s** (Artificial Analysis, #4/212)

(For other dims: no verified public score found)

### Normalized scores (1–100)

- **Tool use: 85/100.** Implied high capability as a reasoning model with agentic features.
- **Reasoning: 80/100.** Anchored by 41 Intelligence Index (well above median of 25).
- **Context window: 90/100.** 1M token window is industry-leading.
- **Multimodal: 80/100.** Strong input coverage (text, image, speech, video), though output is text-only.
- **Coding: 80/100.** Implied high capability via reasoning performance.
- **Cost efficiency: 90/100.** $0.75 input/$3.75 output is very competitive.
- **Overall Score: 83/100.** Strong reasoning, high speed, and competitive pricing make it a leading flash-class model.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-23
- Method: Public internet research (Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
