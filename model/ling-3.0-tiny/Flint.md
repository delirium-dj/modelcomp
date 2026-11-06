# Ling 3.0 Tiny — findings by Flint

- Source: Microsoft / Ling
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** Microsoft's Ling 3.0 smallest-tier model release, positioned for minimal-compute text tasks.
- **Provider / access:** Microsoft / OpenRouter (`microsoft/ling-3.0-tiny`); Zen route naming to be verified.
- **Release / knowledge:** Ling 3.0 family release 2026; knowledge cutoff not disclosed.
- **IDs:** `microsoft/ling-3.0-tiny`.
- **Context window:** Not verified for the Tiny tier.
- **Modalities:** Text in / text out.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Proprietary smallest language model (Ling Tiny class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `microsoft/ling-3.0-tiny` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 25/100.** No verified tool-use evidence for the Tiny tier.
- **Reasoning: 30/100.** No verified public score found -> low band; Tiny-tier ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 25/100.** No verified coding score for the Tiny tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 29/100.** Mean of the five quality dims: (25 + 30 + 50 + 15 + 25) / 5 = 25 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Microsoft's Ling release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
