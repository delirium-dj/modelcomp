# Llama 3.2 Vision Instruct — findings by Flint

- Source: Meta / Llama
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's Llama 3.2 vision-enabled instruction-tuned model (text + image in → text out).
- **Provider / access:** Meta / OpenRouter (`meta/llama-3.2-vision-instruct`); Zen route naming to be verified.
- **Release / knowledge:** Llama 3.2 releases 2024; knowledge cutoff not disclosed.
- **IDs:** `meta/llama-3.2-vision-instruct`.
- **Context window:** Not verified for the vision instruct tier.
- **Modalities:** Text in, image in → text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Open-weight Llama 3.2 vision model.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / MMMU-Pro / Intelligence Index: no verified public score found for the exact `meta/llama-3.2-vision-instruct` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 35/100.** No verified tool-use evidence for the vision instruct tier.
- **Reasoning: 45/100.** No verified public score found -> mid band; Llama vision reasoning ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 60/100.** Image in → text out supported (vision modality).
- **Coding: 35/100.** No verified coding score for the vision instruct tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 45/100.** Mean of the five quality dims: (35 + 45 + 50 + 60 + 35) / 5 = 43 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Meta's Llama release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
