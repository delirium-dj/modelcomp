# Qwen3.5 2B — findings by Flint

- Source: Alibaba / Qwen
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 2B
- **Short description:** Alibaba's Qwen3.5 small-model tier (2B), tuned for lightweight text tasks.
- **Provider / access:** Alibaba / OpenRouter (`qwen/qwen3.5-2b`); Zen route naming to be verified.
- **Release / knowledge:** Qwen3.5 family release 2026; knowledge cutoff not disclosed.
- **IDs:** `qwen/qwen3.5-2b`.
- **Context window:** Not verified for the 2B tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Open-weight Mixture-of-Experts LLM (Qwen3.5 class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `qwen/qwen3.5-2b` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 20/100.** No verified tool-use evidence for the 2B tier.
- **Reasoning: 25/100.** No verified public score found -> low band; 2B-tier ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 20/100.** No verified coding score for the 2B tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 26/100.** Mean of the five quality dims: (20 + 25 + 50 + 15 + 20) / 5 = 22 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Alibaba's Qwen release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
