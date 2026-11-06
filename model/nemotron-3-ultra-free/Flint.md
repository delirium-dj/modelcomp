# Nemotron 3 Ultra (Free) — findings by Flint

- Source: NVIDIA / Nemotron
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra (Free tier)
- **Short description:** NVIDIA's Nemotron 3 Ultra — the `Free` access tier of the 550B-A55B weights (Zen free route, OpenRouter `:free` suffix, NVIDIA free endpoint); paid NIM / OpenRouter routes serve the same weights, so the tier is a serving split, not a separate model.
- **Provider / access:** NVIDIA / OpenCode Zen / OpenRouter free routes; OpenAI-compatible chat completions.
- **Release / knowledge:** Nemotron 3 releases 2026; knowledge cutoff not disclosed.
- **IDs:** `nvidia/nemotron-3-ultra` (550B-A55B weights); free-tier route IDs.
- **Context window:** Not verified for the Ultra tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Free.
- **Architecture:** Open-weight Mixture-of-Experts LLM (Nemotron 3 Ultra class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `nvidia/nemotron-3-ultra` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified tool-use evidence for the Ultra tier.
- **Reasoning: 50/100.** No verified public score found -> mid band; Nemotron reasoning ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 40/100.** No verified coding score for the Ultra tier.
- **Cost efficiency: 100/100.** Free tier ($0).
- **Overall Score: 39/100.** Mean of the five quality dims: (40 + 50 + 50 + 15 + 40) / 5 = 40 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on NVIDIA's Nemotron release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
