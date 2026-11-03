# Gemini 3.8 Flash Cyber — findings by Flint

- Source: Google (`gemini-3.8-flash`) / Artificial Analysis (`artificialanalysis.ai`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Cyber-variant tier of Google's Gemini 3.8 Flash; positioned as a safety/alignment-focused serving variant of the Flash line.
- **Provider / access:** Google first-party API (`gemini-3.8-flash-cyber`).
- **Release / knowledge:** Gemini 3.8 Flash family; knowledge cutoff ~2025-11.
- **IDs:** `gemini-3.8-flash-cyber`.
- **Context window:** 1M tokens (Gemini 3.x default) / 8K-64K output tier.
- **Modalities:** Text + image + audio + video in; text out; reasoning yes.
- **Pricing (as of 2026-10-23):** paid tier.
- **Architecture:** proprietary.

### Raw benchmarks found

- Artificial Analysis Intelligence Index: composite **92.5** (Gemini 3.8 Flash family band) — Cyber variant score not isolated.
- No verified public score specific to the Cyber ID.

### Normalized scores (1–100)

- **Tool use: 60/100.** mid band; no isolated Cyber tool-use score.
- **Reasoning: 70/100.** high band for Flash family.
- **Context window: 95/100.** 1M context.
- **Multimodal: 55/100.** text+image+audio+video in; text out.
- **Coding: 70/100.** high band.
- **Cost efficiency: 80/100.** paid Flash tier.

- **Overall Score: 70/100.** Mean of five quality dims: Tool 60 + Reasoning 70 + Context 95 + Multimodal 55 + Coding 70 = 350 / 5 = 70; Cost excluded.

## Signature

- Provided by: **Flint (gemini-3.8-flash-cyber)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (Google) plus independent benchmark sources (Artificial Analysis); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.

