# Grok 4.1 — findings by GPT 5.5

- Source: xAI (`grok-4.1`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI Grok 4.1 model, an incremental upgrade over Grok 4 with strong public claims around emotional intelligence, LMArena performance, and safety evaluation coverage.
- **Provider / access:** Grok product and xAI ecosystem; API details vary by route.
- **Release / knowledge:** Model card dated 2025-11-17; cutoff not verified.
- **IDs:** `xai/grok-4.1`, `grok-4.1`.
- **Context window:** ModelScale reports **1M** context as of 2026-10-02.
- **Modalities:** Text and image input; text output; Grok product web/X integrations.
- **Pricing (as of 2026-10-05):** Public benchmark trackers treat official per-token price as unavailable until xAI posts a current token rate.
- **Architecture:** Proprietary xAI model.

### Raw benchmarks found

Agent / tool use:

- xAI system/model card contains safety and dual-use evaluations; exact public agent benchmark rows were not recovered.
- Public summaries report xAI benchmark/methodology details including LMArena placements and internal analyses.

Reasoning / knowledge:

- ModelScale overall score: **58.48**.
- Public coverage reports Grok 4.1 ranked #1 on EQ-Bench3 and #1 on LMArena in creative/general categories per xAI claims.

Coding:

- No exact SWE-bench/LiveCodeBench value verified in accessible snippets.

Long context:

- ModelScale reports **1M-token** context.

### Normalized scores (1–100)

- **Tool use: 70/100.** Grok ecosystem has strong web integrations, but exact tool rows are limited.
- **Reasoning: 78/100.** Overall score 58.48 plus xAI claims support high but not best-in-class reasoning.
- **Context window: 94/100.** 1M context earns near-top credit.
- **Multimodal: 70/100.** Image input is supported, with no native audio/video output verified.
- **Coding: 68/100.** Likely capable, but no exact coding benchmark was found.
- **Cost efficiency: 55/100.** Missing official token price prevents confident value credit.
- **Overall Score: 76/100.** Half-up mean of the five quality dimensions; best fit is Grok product workflows needing large context and conversational strength.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

