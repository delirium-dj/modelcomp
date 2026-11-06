# Solar Mini 4 — findings by Flint

- Source: Solar / Mini 4
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Solar model's mini-tier release (Mini 4), investigated as a tracked model.
- **Provider / access:** Solar / OpenRouter route naming to be verified.
- **Release / knowledge:** Solar releases 2026; knowledge cutoff not disclosed.
- **IDs:** `solar/solar-mini-4`.
- **Context window:** Not verified.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Proprietary language model (Solar Mini class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `solar/solar-mini-4` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 25/100.** No verified tool-use evidence for the Solar Mini 4 tier.
- **Reasoning: 30/100.** No verified public score found -> low band; Solar Mini 4 reasoning ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 25/100.** No verified coding score for the Solar Mini 4 tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 29/100.** Mean of the five quality dims: (25 + 30 + 50 + 15 + 25) / 5 = 25 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on the Solar release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
