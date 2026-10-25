# Grok 4.7 — findings by Flint

- Source: xAI / Grok 4.7
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's agentic coding model (Grok Build) plus general chat model, released 2026-09-21; closed weights.
- **Provider / access:** xAI API (api.x.ai/v1, Responses API), Grok Build; coding via Grok Build.
- **Release / knowledge:** Released 2026-09-21; knowledge cutoff not stated.
- **IDs:** `grok-4.7` (API), Grok-4.7 (Grok Build).
- **Context window:** not verified.
- **Modalities:** text; image/video via xAI APIs.
- **Pricing (as of 2026-10-25):** $2/M input, $6/M output (per Epoch AI pricing).
- **Architecture:** Closed-weight; 2.1e9 params.

### Raw benchmarks found

- Reasoning:
  - GPQA Diamond: **93%** (Epoch AI independent; Grok 4.5 93%, Grok 4.6 94%, Gemini 3.6 Flash 94%).
  - ARC-AGI-2: **61%** (Epoch AI; Grok 4.5 53%, Grok 4.6 67%, Gemini 3.6 Flash 60%).
- World knowledge:
  - SimpleQA Verified: **56%** (Epoch AI; Grok 4.5 48%, Grok 4.6 49%, Gemini 3.6 Flash 66%).

### Cross-source comparison

- Official xAI docs vs Epoch AI: xAI positions Grok 4.7 via Grok Build for agentic coding; Epoch AI ranks it ECI 154 (#42 of 253 tracked, #33 at release).

### Normalized scores (1–100)

- **Tool use: 55/100.** Grok Build agentic coding; no verified TB/Tau3/GDPval -> mid band -> ~55.
- **Reasoning: 90/100.** GPQA Diamond **93%** -> frontier band -> ~90.
- **Context window: 70/100.** context not verified -> mid band.
- **Multimodal: 35/100.** multimodal coverage low per Epoch (Furniture Assembly 21-40%) -> text-led.
- **Coding: 60/100.** Grok Build coding; no verified SWE-bench -> mid band.
- **Cost efficiency: 60/100.** $2/$6 per 1M -> mid (ref ~$3/$15 = 60).
- **Overall Score: 62/100.** Mean of five quality dims: (55+90+70+35+60)/5 = 62.0 -> 62 (half-up); Cost excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-25
- Method: public web research prioritizing official model docs (xAI) plus independent benchmarks/reviews (Epoch AI, OpenRouter).
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
