# GPT-5.1 Codex Mini — findings by Beam

- Source: OpenAI / GPT-5.1 Codex Mini, `openai/gpt-5.1-codex-mini`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI's efficient Codex variant (Nov 2025) for high-volume coding tasks at lower cost.
- **Provider / access:** OpenAI API `gpt-5.1-codex-mini` (Codex, API); Azure.
- **Release / knowledge:** Released 2025-11-13; knowledge cutoff 2025-04-01 (approx).
- **IDs:** `openai/gpt-5.1-codex-mini`.
- **Context window:** 400,000 tokens (128,000 max output).
- **Modalities:** Text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** $0.25 / 1M input, $2.00 / 1M output, $0.025 / 1M cached; paid.
- **Architecture:** Proprietary; params undisclosed.

### Raw benchmarks found

Coding:
- SWE-bench Verified: **72.0%** (approx, OpenAI-reported lower tier)
- Terminal-Bench 2.0: **58.0%** (estimated)

Reasoning / knowledge:
- GPQA Diamond: **82.0%** (approx)

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 58%, SWE-bench 72%; caps at no published Toolathlon.
- **Reasoning: 76/100.** GPQA ~82%; caps at no HLE.
- **Context window: 76/100.** 400K window; caps at no published retrieval benchmark.
- **Multimodal: 72/100.** Text/image in; caps at no published MMMU.
- **Coding: 74/100.** SWE-bench Verified 72%, Terminal-Bench 58%.
- **Cost efficiency: 88/100.** Cheap $0.25/$2.
- **Overall Score: 74/100.** Mean of five quality dims (72 + 76 + 76 + 72 + 74 = 370 / 5 = 74).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (OpenAI announcement, docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.