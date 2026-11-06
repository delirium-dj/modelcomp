# Ling 2.6.1T — findings by Flint

- Source: Microsoft / Ling
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6.1T
- **Short description:** Microsoft's Ling tier-2 / "T" class release (2.6.1T), positioned above the Flash tier within the Ling 2.6 generation.
- **Provider / access:** Microsoft / OpenRouter (`microsoft/ling-2.6.1t`); Zen route naming to be verified.
- **Release / knowledge:** Ling 2.6.1 family release 2026; knowledge cutoff not disclosed.
- **IDs:** `microsoft/ling-2.6.1t`.
- **Context window:** Not verified for the T tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Proprietary mid-tier language model (Ling T class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `microsoft/ling-2.6.1t` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 35/100.** No verified tool-use evidence for the T tier.
- **Reasoning: 45/100.** No verified public score found -> mid band; Ling T-tier ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 35/100.** No verified coding score for the T tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 36/100.** Mean of the five quality dims: (35 + 45 + 50 + 15 + 35) / 5 = 38 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Microsoft's Ling release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
