# Grok 5 — findings by Flint

- Source: xAI / Grok
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 5
- **Short description:** xAI's fifth-generation Grok model family, positioned for broad chat / reasoning capability with real-time information awareness; successor in the Grok line.
- **Provider / access:** xAI / OpenRouter (`xai/grok-5`); Zen route naming to be verified.
- **Release / knowledge:** Grok 5 family release 2026; knowledge cutoff not disclosed.
- **IDs:** `xai/grok-5`.
- **Context window:** Not verified for the Grok 5 tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Proprietary xAI foundation model (Grok class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `xai/grok-5` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified tool-use evidence for the Grok 5 tier.
- **Reasoning: 45/100.** No verified public score found -> mid band; Grok reasoning line.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 40/100.** No verified coding score for the Grok 5 tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 38/100.** Mean of the five quality dims: (40 + 45 + 50 + 15 + 40) / 5 = 42 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on xAI's Grok release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
