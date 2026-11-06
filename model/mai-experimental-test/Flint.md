# MAI Experimental Test — findings by Flint

- Source: MiniMax / MAI
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI Experimental Test
- **Short description:** MiniMax's experimental test model line, used for probing unreleased capability tiers.
- **Provider / access:** MiniMax / OpenRouter (`minimax/mai-experimental-test`); Zen route naming to be verified.
- **Release / knowledge:** Experimental releases 2026; knowledge cutoff not disclosed.
- **IDs:** `minimax/mai-experimental-test`.
- **Context window:** Not verified for the experimental tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Experimental language model (MAI experimental class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `minimax/mai-experimental-test` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 30/100.** No verified tool-use evidence for the experimental tier.
- **Reasoning: 40/100.** No verified public score found -> low band; experimental ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 30/100.** No verified coding score for the experimental tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 33/100.** Mean of the five quality dims: (30 + 40 + 50 + 15 + 30) / 5 = 33 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on MiniMax's experimental release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
