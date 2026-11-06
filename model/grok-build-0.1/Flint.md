# Grok Build 0.1 — findings by Flint

- Source: xAI / Grok Build
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's agentic coding / build-focused Grok model (docs.x.ai naming; the `grok-code-fast-1` alias resolves here), positioned for agentic software engineering.
- **Provider / access:** xAI / docs.x.ai (`grok-build-0.1`); OpenRouter route naming to be verified.
- **Release / knowledge:** Grok Build release 2026; knowledge cutoff not disclosed.
- **IDs:** `grok-build-0.1`; retired alias `grok-code-fast-1` (docs.x.ai) resolves to this model — alias-measured figures are lineage data cited under the measured ID.
- **Context window:** Not verified for the Build tier.
- **Modalities:** Text in / text out; code / agentic tool use targeted.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Proprietary xAI agentic coding model (Grok Build class).

### Raw benchmarks found

Coding:

- SWE-bench Verified: no verified public score found for the exact `grok-build-0.1` ID.

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified tool-use evidence for the Build tier.
- **Reasoning: 50/100.** No verified public score found -> mid band; agentic coding tier.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 50/100.** No verified coding score for the Build tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 43/100.** Mean of the five quality dims: (50 + 50 + 50 + 15 + 50) / 5 = 52 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on xAI's Grok Build release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
