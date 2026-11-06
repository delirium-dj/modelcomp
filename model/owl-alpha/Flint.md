# Owl Alpha — findings by Flint

- Source: Owl / Alpha
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** Stealth / alpha-suffixed model line investigated as a distinct tracked model.
- **Provider / access:** Owl / OpenRouter route naming to be verified.
- **Release / knowledge:** Releases 2026; knowledge cutoff not disclosed.
- **IDs:** `owl/owl-alpha`.
- **Context window:** Not verified.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Proprietary language model (Owl Alpha class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `owl/owl-alpha` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 30/100.** No verified tool-use evidence for the Owl Alpha tier.
- **Reasoning: 40/100.** No verified public score found -> low band; Owl Alpha reasoning ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 30/100.** No verified coding score for the Owl Alpha tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 33/100.** Mean of the five quality dims: (30 + 40 + 50 + 15 + 30) / 5 = 33 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on the Owl release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
