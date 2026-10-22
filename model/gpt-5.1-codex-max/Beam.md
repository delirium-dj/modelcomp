# GPT-5.1 Codex Max — findings by Beam

- Source: OpenAI / GPT-5.1 Codex Max, `openai/gpt-5.1-codex-max`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's highest-capability Codex variant (Nov 2025) with extended reasoning and 400K context for large codebases.
- **Provider / access:** OpenAI API `gpt-5.1-codex-max` (Codex, API); Azure.
- **Release / knowledge:** Released 2025-11-13; knowledge cutoff 2025-04-01 (approx).
- **IDs:** `openai/gpt-5.1-codex-max`.
- **Context window:** 400,000 tokens (128,000 max output).
- **Modalities:** Text, image in; text out; reasoning yes (high effort); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** $1.25 / 1M input, $10.00 / 1M output, $0.125 / 1M cached; paid.
- **Architecture:** Proprietary; params undisclosed.

### Raw benchmarks found

Coding:
- SWE-bench Verified: **77.9%** (OpenAI-reported)
- Terminal-Bench 2.0: **70.0%** (estimated)

Reasoning / knowledge:
- GPQA Diamond: **87.0%** (approx, GPT-5.1 base)

Long context:
- 400K window; MRCR not published.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 70%, SWE-bench 77.9%; caps at no published Toolathlon.
- **Reasoning: 82/100.** GPQA ~87%; caps at no HLE.
- **Context window: 76/100.** 400K window; caps at no published retrieval benchmark.
- **Multimodal: 74/100.** Text/image in; caps at no published MMMU.
- **Coding: 82/100.** SWE-bench Verified 77.9%, Terminal-Bench 70%.
- **Cost efficiency: 70/100.** Paid $1.25/$10.
- **Overall Score: 79/100.** Mean of five quality dims (80 + 82 + 76 + 74 + 82 = 394 / 5 = 78.8 → 79).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (OpenAI announcement, docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.