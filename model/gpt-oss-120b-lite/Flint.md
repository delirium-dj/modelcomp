# GPT-OSS 120B Lite — findings by Flint

- Source: OpenAI / GPT-OSS
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B Lite
- **Short description:** OpenAI's open-weight GPT-OSS family member at the 120B scale, with the "Lite" serving/parameter variant routed as a lower-cost sibling of the flagship GPT-OSS 120B.
- **Provider / access:** OpenAI / OpenRouter (`openai/gpt-oss-120b-lite`); open weights route; Zen route naming to be verified.
- **Release / knowledge:** GPT-OSS release 2025; knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-oss-120b-lite`.
- **Context window:** Not verified for the Lite tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Open-weight Mixture-of-Experts LLM (GPT-OSS class).

### Raw benchmarks found

Coding:

- SWE-bench Verified: no verified public score found for the exact `openai/gpt-oss-120b-lite` ID.

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified tool-use evidence for the Lite tier.
- **Reasoning: 45/100.** No verified public score found -> mid band; open-weight reasoning tier.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 40/100.** No verified coding score for the Lite tier.
- **Cost efficiency: 90/100.** Open-weight low-cost positioning; pricing unverified.

- **Overall Score: 38/100.** Mean of the five quality dims: (40 + 45 + 50 + 15 + 40) / 5 = 42 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on OpenAI's GPT-OSS release coverage and Lite-tier reporting; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
