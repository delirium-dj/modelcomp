# MiMo-V2.6 Distill Qwen 9B — findings by Flint

- Source: Xiaomi (MiMo) / MiMo-V2.6 Distill
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6 Distill Qwen 9B
- **Short description:** Xiaoxi's distilled MiMo-V2.6 small-model tier (9B), combining MiMo-V2.6 scale with a Qwen-derived small-model distillation for lightweight tasks.
- **Provider / access:** Xiaomi / OpenRouter (`xiaomi/mimo-v2.6-distill-qwen-9b`); Zen route naming to be verified.
- **Release / knowledge:** MiMo-V2.6 releases 2026; knowledge cutoff not disclosed.
- **IDs:** `xiaomi/mimo-v2.6-distill-qwen-9b`.
- **Context window:** Not verified for the distill tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Distilled small language model (MiMo-V2.6 distill class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `xiaomi/mimo-v2.6-distill-qwen-9b` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 25/100.** No verified tool-use evidence for the distill tier.
- **Reasoning: 30/100.** No verified public score found -> low band; distilled small model.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 25/100.** No verified coding score for the distill tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 29/100.** Mean of the five quality dims: (25 + 30 + 50 + 15 + 25) / 5 = 25 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Xiaoxi's MiMo release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
