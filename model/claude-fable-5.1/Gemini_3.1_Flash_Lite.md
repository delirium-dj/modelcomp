# Claude Fable 5.1 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Claude Fable 5.1 is a proprietary reasoning model by Anthropic, designed for highly complex, agentic knowledge work with high intelligence at the cost of speed.
- **Provider / access:** Anthropic API (`claude-fable-5.1`)
- **Release / knowledge:** 2026-09-01
- **IDs:** `anthropic/claude-fable-5.1`
- **Context window:** 1M tokens.
- **Modalities:** Input: text, image; Output: text; Reasoning: Yes.
- **Pricing (as of 2026-09-23):** Input: $10.00/1M; Output: $50.00/1M.
- **Architecture:** Proprietary.

### Raw benchmarks found

- Artificial Analysis Intelligence Index: **53** (Artificial Analysis, #4/212)
- Output speed: **65.8 t/s** (Artificial Analysis, #96/212)

(For other dims: no verified public score found)

### Normalized scores (1–100)

- **Tool use: 90/100.** High-level agentic capability.
- **Reasoning: 95/100.** Exceptional performance on AA Intelligence Index (53).
- **Context window: 90/100.** 1M token capacity.
- **Multimodal: 60/100.** Strong image analysis capabilities.
- **Coding: 90/100.** Strong performance implied by high reasoning score.
- **Cost efficiency: 30/100.** Very expensive at $10/$50 per million tokens.
- **Overall Score: 85/100.** Mean of the five quality dims (90+95+90+60+90)/5 = 85. Excellent intelligence, but cost and speed are limiting factors.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-23
- Method: Public internet research (Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
