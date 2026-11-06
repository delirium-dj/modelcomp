# Ling 2.6 Flash — findings by Flint

- Source: Microsoft / Ling
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** Microsoft's Ling small-model family release (2.6 Flash), positioned for lightweight general / retrieval-augmented text tasks.
- **Provider / access:** Microsoft / OpenRouter (`microsoft/ling-2.6-flash`); Zen route naming to be verified.
- **Release / knowledge:** Ling 2.6 family release 2026; knowledge cutoff not disclosed.
- **IDs:** `microsoft/ling-2.6-flash`.
- **Context window:** Not verified for the Flash tier.
- **Modalities:** Text in / text out.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Proprietary small language model (Ling class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `microsoft/ling-2.6-flash` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 30/100.** No verified tool-use evidence for the Flash tier.
- **Reasoning: 35/100.** No verified public score found -> low band; small-model ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 30/100.** No verified coding score for the Flash tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 32/100.** Mean of the five quality dims: (30 + 35 + 50 + 15 + 30) / 5 = 28 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Microsoft's Ling release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
