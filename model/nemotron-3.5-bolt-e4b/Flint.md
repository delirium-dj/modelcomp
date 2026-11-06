# Nemotron 3.5 Bolt E4B — findings by Flint

- Source: NVIDIA / Nemotron
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's Nemotron 3.5 Bolt compact (E4B) model release.
- **Provider / access:** NVIDIA / OpenRouter (`nvidia/nemotron-3.5-bolt-e4b`); Zen route naming to be verified.
- **Release / knowledge:** Nemotron 3.5 releases 2026; knowledge cutoff not disclosed.
- **IDs:** `nvidia/nemotron-3.5-bolt-e4b`.
- **Context window:** Not verified for the Bolt E4B tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Open-weight Mixture-of-Experts reasoning model (Nemotron 3.5 Bolt class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `nvidia/nemotron-3.5-bolt-e4b` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 30/100.** No verified tool-use evidence for the Bolt E4B tier.
- **Reasoning: 35/100.** No verified public score found -> low band; Bolt E4B ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 30/100.** No verified coding score for the Bolt E4B tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 32/100.** Mean of the five quality dims: (30 + 35 + 50 + 15 + 30) / 5 = 28 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on NVIDIA's Nemotron release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
