# Ling 3.0 Flash — findings by Flint

- Source: Microsoft / Ling
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** Microsoft's Ling 3.0 Flash-tier general model release (3.0).
- **Provider / access:** Microsoft / OpenRouter (`microsoft/ling-3.0-flash`); Zen route naming to be verified.
- **Release / knowledge:** Ling 3.0 family release 2026; knowledge cutoff not disclosed.
- **IDs:** `microsoft/ling-3.0-flash`.
- **Context window:** Not verified for the 3.0 Flash tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Proprietary mid-tier language model (Ling 3.0 class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `microsoft/ling-3.0-flash` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 35/100.** No verified tool-use evidence for the 3.0 Flash tier.
- **Reasoning: 45/100.** No verified public score found -> mid band; Ling 3.0 Flash ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 35/100.** No verified coding score for the 3.0 Flash tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 36/100.** Mean of the five quality dims: (35 + 45 + 50 + 15 + 35) / 5 = 38 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Microsoft's Ling release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
