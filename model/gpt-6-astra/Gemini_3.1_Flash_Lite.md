# GPT-6 Astra (max) — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-6 Astra (max)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (max)
- **Short description:** GPT-6 Astra (max) is a proprietary reasoning model by OpenAI, designed for high-level complex reasoning and multimodal capabilities.
- **Provider / access:** OpenAI API (`gpt-6-astra`)
- **Release / knowledge:** 2026-09-03; Knowledge cutoff: April 2026.
- **IDs:** `openai/gpt-6-astra`
- **Context window:** 1M tokens.
- **Modalities:** Input: text, image; Output: text; Reasoning: Yes.
- **Pricing (as of 2026-09-23):** Input: $10.00/1M; Output: $50.00/1M.
- **Architecture:** Proprietary.

### Raw benchmarks found

- Artificial Analysis Intelligence Index: **53** (Artificial Analysis, #6/212)
- Output speed: **53.2 t/s** (Artificial Analysis, #132/212)

(For other dims: no verified public score found)

### Normalized scores (1–100)

- **Tool use: 85/100.** High-level reasoning model capability.
- **Reasoning: 95/100.** Exceptional performance on AA Intelligence Index (53, well above median).
- **Context window: 90/100.** 1M token capacity.
- **Multimodal: 60/100.** Strong image analysis capabilities, but limited input modalities compared to top-tier competitors.
- **Coding: 90/100.** Strong performance implied by high reasoning score.
- **Cost efficiency: 40/100.** Very expensive at $10/$50 per million tokens.
- **Overall Score: 84/100.** Exceptional intelligence, but cost and speed limitations impact overall efficiency.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-23
- Method: Public internet research (Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
