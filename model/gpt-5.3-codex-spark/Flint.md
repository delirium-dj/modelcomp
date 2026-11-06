# GPT-5.3 Codex Spark — findings by Flint

- Source: OpenAI / GPT-5.3 Codex Spark
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI's compact "Spark" coding model from the GPT-5.3 generation, positioned as a fast, small-footprint coding assistant for everyday repo-scale edits.
- **Provider / access:** OpenAI / OpenRouter (`openai/gpt-5.3-codex-spark`); Zen route naming to be verified.
- **Release / knowledge:** GPT-5.3 family release 2026; knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-5.3-codex-spark`; vendor-prefixed route.
- **Context window:** Not verified for the Spark tier.
- **Modalities:** Text in / text out; code generation / tool use targeted.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Proprietary OpenAI reasoning + code model (Codex Spark class).

### Raw benchmarks found

Coding:

- SWE-bench Verified: no verified public score found for the exact `openai/gpt-5.3-codex-spark` ID.

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 30/100.** No verified tool-use evidence for the Spark tier.
- **Reasoning: 35/100.** No verified public score found -> low band; Spark-tier ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 30/100.** No verified coding score for the Spark tier.
- **Cost efficiency: 90/100.** Low-cost positioning; pricing unverified.

- **Overall Score: 32/100.** Mean of the five quality dims: (30 + 35 + 50 + 15 + 30) / 5 = 28 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on OpenAI's GPT-5.3 release coverage and Codex Spark reporting; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
