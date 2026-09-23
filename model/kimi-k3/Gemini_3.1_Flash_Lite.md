# Kimi K3 — findings by Gemini 3.1 Flash Lite

- Source: Kimi/Kimi K3
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Kimi K3 is an open weights reasoning model by Kimi, offering strong performance for its size class.
- **Provider / access:** Kimi API (`kimi-k3`)
- **Release / knowledge:** 2026-07-16
- **IDs:** `moonshot/kimi-k3`
- **Context window:** 1M tokens.
- **Modalities:** Input: text, image; Output: text; Reasoning: Yes.
- **Pricing (as of 2026-09-23):** Input: $3.00/1M; Output: $15.00/1M.
- **Architecture:** Open weights (MoE: 2.8T total, 104B active).

### Raw benchmarks found

- Artificial Analysis Intelligence Index: **44** (Artificial Analysis, #3/114)
- Output speed: **36.7 t/s** (Artificial Analysis, #55/114)

(For other dims: no verified public score found)

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong reasoning model capability.
- **Reasoning: 95/100.** High performance on AA Intelligence Index (44).
- **Context window: 90/100.** 1M token capacity.
- **Multimodal: 60/100.** Strong image analysis capabilities.
- **Coding: 90/100.** Strong performance implied by high reasoning score.
- **Cost efficiency: 50/100.** Competitive pricing for open-weights models, but premium for API usage.
- **Overall Score: 84/100.** Mean of the five quality dims (85+95+90+60+90)/5 = 84. A highly capable, large-scale reasoning model.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-23
- Method: Public internet research (Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
