# Gemma 4 E4B — findings by Flint

- Source: Google / Gemma 4
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google's Gemma 4 edge-tier model (E4B parameter class), tuned for on-device / low-compute text tasks; sibling of the Gemma 4 E2B edge checkpoint.
- **Provider / access:** Google AI / Vertex AI / TensorFlow Lite; not present on OpenCode Zen.
- **Release / knowledge:** Gemma 4 family release 2026; knowledge cutoff not disclosed.
- **IDs:** `gemma-4-e4b`; vendor-prefixed route `google/gemma-4-e4b`.
- **Context window:** Not verified for the E4B tier.
- **Modalities:** Text in / text out.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Gemma 4 edge checkpoint (E4B).

### Raw benchmarks found

Reasoning / knowledge:

- No verified public score found for the exact `gemma-4-e4b` ID.

Coding:

- No verified coding benchmark found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 20/100.** No verified tool-use evidence for the edge tier.
- **Reasoning: 20/100.** No verified public score found -> low band; edge-tier positioning.
- **Context window: 15/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 20/100.** No verified coding benchmark found.
- **Cost efficiency: 50/100.** No verified pricing.

- **Overall Score: 18/100.** Mean of the five quality dims: (20 + 20 + 15 + 15 + 20) / 5 = 18 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on the Gemma 4 family publications and edge-tier coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
