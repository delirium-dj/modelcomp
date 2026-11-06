# LongCat 2.5 Preview — findings by Flint

- Source: Meituan / LongCat
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's API-only LongCat 2.5 preview (the standalone LongCat 2.5 GA name never shipped; only the API-only Preview exists) — filed under the canonical preview slug per the phantom-GA rule.
- **Provider / access:** Meituan API / OpenRouter (`meituan/longcat-2.5-preview`); Zen route naming to be verified.
- **Release / knowledge:** Preview release 2026; knowledge cutoff not disclosed.
- **IDs:** `meituan/longcat-2.5-preview`.
- **Context window:** Not verified for the preview tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Proprietary general language model (LongCat preview class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `meituan/longcat-2.5-preview` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 30/100.** No verified tool-use evidence for the preview tier.
- **Reasoning: 40/100.** No verified public score found -> low band; preview ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 30/100.** No verified coding score for the preview tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 33/100.** Mean of the five quality dims: (30 + 40 + 50 + 15 + 30) / 5 = 33 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Meituan's LongCat preview coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
