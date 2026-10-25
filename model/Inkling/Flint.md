# Inkling — findings by Flint

- Source: Thinking Machines / Inkling
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines' open-weights model released 2026-07-15; positioned as an open-weight general/coding model.
- **Provider / access:** Thinking Machines official; open weights; API per Thinking Machines.
- **Release / knowledge:** Released 2026-07-15; knowledge cutoff not stated.
- **IDs:** `Inkling` (Thinking Machines).
- **Context window:** not verified.
- **Modalities:** text; coding.
- **Pricing (as of 2026-10-25):** $1/M input, $4.05/M output (Epoch AI pricing).
- **Architecture:** Open-weight; 9.8e11 params.

### Raw benchmarks found

- Science / reasoning:
  - GPQA Diamond: **88%** (Epoch AI independent).
- Software engineering:
  - Text Arena (Coding) WebDev Arena: **1410** (Epoch AI; best score 1820).
- World knowledge:
  - SimpleQA Verified: **40%** (Epoch AI).

### Cross-source comparison

- Official Thinking Machines coverage vs Epoch AI: Inkling ECI 148 (#68 of 253, #39 of 222 at release); independent numbers place it mid-pack versus frontier Claude/GPT/Gemini.

### Normalized scores (1–100)

- **Tool use: 55/100.** no verified TB/Tau3/GDPval -> mid band -> ~55.
- **Reasoning: 70/100.** GPQA Diamond **88%** -> mid-high band -> ~70.
- **Context window: 70/100.** context not verified -> mid band.
- **Multimodal: 15/100.** text-only coding model -> text-only.
- **Coding: 65/100.** WebDev Arena (Coding) **1410** -> mid band -> ~65.
- **Cost efficiency: 65/100.** $1/$4.05 per 1M -> mid-high (open-weights tier).
- **Overall Score: 55/100.** Mean of five quality dims: (55+70+70+15+65)/5 = 63.0 -> 63 (half-up); Cost excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-25
- Method: public web research prioritizing official model docs plus independent benchmarks/reviews (Epoch AI, OpenRouter).
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
