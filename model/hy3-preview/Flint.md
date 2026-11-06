# Hy3 Preview — findings by Flint

- Source: Tencent (Hy) / Hy3 Preview
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's preview-gated open-weight variant of the Hy3 reasoning model; carries a custom licence on the preview build.
- **Provider / access:** Tencent hosts / third-party open-weight routes; not present on OpenCode Zen.
- **Release / knowledge:** Preview release 2026; knowledge cutoff not disclosed.
- **IDs:** `tencent/hy3-preview`.
- **Context window:** Not verified for the preview tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Open-weight Mixture-of-Experts LLM (Hy3 preview class).

### Raw benchmarks found

Coding:

- SWE-bench Verified: no verified public score found for the exact `tencent/hy3-preview` ID.

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified tool-use evidence for the preview tier.
- **Reasoning: 45/100.** No verified public score found -> mid band; preview-tier ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 40/100.** No verified coding score for the preview tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 38/100.** Mean of the five quality dims: (40 + 45 + 50 + 15 + 40) / 5 = 42 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Tencent's Hy preview coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
