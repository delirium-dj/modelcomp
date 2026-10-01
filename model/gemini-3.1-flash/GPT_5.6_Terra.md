# Gemini 3.1 Flash — findings by GPT 5.6 Terra

- Source: Google Gemini documentation and independently published evaluation material for `Gemini 3.1 Flash`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google’s Gemini 3.1 Flash family is natively multimodal; the directly documented 3.1 Flash Image variant is based on Gemini 3 Flash. The public record is fragmented across variants, so non-image capabilities are conservatively scored.
- **Provider / access:** Google Gemini API documents `gemini-3.1-flash-image`; a distinct general-text endpoint was not verified in this scan.
- **Release / knowledge:** February 2026 for Gemini 3.1 Flash Image; its stated knowledge cutoff is January 2025.
- **IDs:** `google/gemini-3.1-flash` repository entry; verified related API ID: `gemini-3.1-flash-image`.
- **Context window:** up to 1M tokens for the documented Image variant.
- **Modalities:** documented variant accepts text and images, and its model card describes comprehension of text, images, audio, and video; it emits text and images.
- **Pricing (as of 2026-10-01):** no verified token-pricing schedule for this exact entry found.
- **Architecture:** proprietary; the Image variant is based on Gemini 3 Flash.

### Raw benchmarks found

Agent / tool use:

- Agent / tool-use benchmark: no verified public score found for this exact model.
- Terminal-Bench 2.1: no verified public score found.

Reasoning / knowledge:

- VLM Reality Check: **74.0** reported aggregate for Gemini 3.1 Flash (CVPR 2026 workshop supplement; model-specific table).
- GPQA Diamond: no verified public score found for this exact model.

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for this exact model.
- LiveCodeBench: no verified public score found for this exact model.

Long context:

- A 1M-token context limit is documented for the Gemini 3.1 Flash Image variant; no exact-model retrieval score found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No attributable agent benchmark was found, so documented multimodal capability cannot justify a higher tool-use score.
- **Reasoning: 70/100.** The model-specific 74.0 VLM Reality Check aggregate supports solid reasoning, capped because no comparable broad reasoning suite was found.
- **Context window: 80/100.** The related documented 1M-token variant supports a high capability score, capped without a retrieval measurement for this exact entry.
- **Multimodal: 80/100.** Google documents multi-source comprehension and text/image output for the closely related 3.1 Flash Image variant; exact-entry coverage remains uncertain.
- **Coding: 50/100.** No verified public coding benchmark was found for this exact model.
- **Cost efficiency: 50/100.** No verified pricing for the exact entry was found.
- **Overall Score: 66/100.** Half-up mean of the five quality dimensions; suitable only where the variant ambiguity is acceptable.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-01
- Method: fresh public internet research; key sources: [Google model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-image/), [Gemini API documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-image), and [VLM Reality Check supplement](https://openaccess.thecvf.com/content/CVPR2026W/DataMFM/supplemental/Sar_VLM_Reality_Check_CVPRW_2026_supplemental.pdf). Scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
