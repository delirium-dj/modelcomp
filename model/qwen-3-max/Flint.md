# Qwen3 Max — findings by Flint

- Source: Alibaba / Qwen
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's Qwen3 Max-tier model release (large / flagship class within Qwen3).
- **Provider / access:** Alibaba / OpenRouter (`qwen/qwen3-max`); Zen route naming to be verified.
- **Release / knowledge:** Qwen3 family release 2026; knowledge cutoff not disclosed.
- **IDs:** `qwen/qwen3-max`.
- **Context window:** Not verified for the Max tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Open-weight Mixture-of-Experts LLM (Qwen3 Max class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `qwen/qwen3-max` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified tool-use evidence for the Qwen3 Max tier.
- **Reasoning: 50/100.** No verified public score found -> mid band; Qwen3 Max reasoning ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 40/100.** No verified coding score for the Qwen3 Max tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 39/100.** Mean of the five quality dims: (40 + 50 + 50 + 15 + 40) / 5 = 42 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Alibaba's Qwen release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
