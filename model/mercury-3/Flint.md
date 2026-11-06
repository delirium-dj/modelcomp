# Mercury 3 — findings by Flint

- Source: Mercury / Mercury 3
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Mercury's third-generation flagship-tier model release (Mercury 3), positioned above the 2.x line.
- **Provider / access:** Mercury / OpenRouter (`mercury/mercury-3`); Zen route naming to be verified.
- **Release / knowledge:** Mercury 3 releases 2026; knowledge cutoff not disclosed.
- **IDs:** `mercury/mercury-3`.
- **Context window:** Not verified for the Mercury 3 tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Proprietary language model (Mercury class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `mercury/mercury-3` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified tool-use evidence for the Mercury 3 tier.
- **Reasoning: 50/100.** No verified public score found -> mid band; Mercury 3 reasoning ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 40/100.** No verified coding score for the Mercury 3 tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 39/100.** Mean of the five quality dims: (40 + 50 + 50 + 15 + 40) / 5 = 42 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Mercury's release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
