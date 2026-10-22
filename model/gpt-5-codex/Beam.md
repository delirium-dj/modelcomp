# GPT-5 Codex — findings by Beam

- Source: OpenAI / GPT-5 Codex, `openai/gpt-5-codex`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI's coding-specialized GPT-5 variant optimized for software engineering tasks with extended reasoning and tool use.
- **Provider / access:** OpenAI API `gpt-5-codex` (ChatGPT, API, Codex); Azure; Microsoft Foundry.
- **Release / knowledge:** Released 2025-09-15; knowledge cutoff (GPT-5 base) 2025-04-01 (approx).
- **IDs:** `openai/gpt-5-codex`.
- **Context window:** 400,000 tokens (128,000 max output).
- **Modalities:** Text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** $1.25 / 1M input, $10.00 / 1M output, $0.125 / 1M cached; paid.
- **Architecture:** Proprietary; params undisclosed.

### Raw benchmarks found

Coding:
- SWE-bench Verified: **74.5%** (OpenAI-reported)
- Terminal-Bench 2.0: **64.0%** (estimated)
- LiveCodeBench: not individually published.

Reasoning / knowledge:
- GPQA Diamond: **85.0%** (GPT-5 base, approx)
- HLE: not published for Codex variant.

Long context:
- 400K window; MRCR not published for Codex variant.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 64%, SWE-bench 74.5%; caps at no published Toolathlon.
- **Reasoning: 80/100.** GPQA ~85%; caps at no HLE.
- **Context window: 76/100.** 400K window; caps at no published retrieval benchmark.
- **Multimodal: 74/100.** Text/image in; caps at no published MMMU.
- **Coding: 80/100.** SWE-bench Verified 74.5%, Terminal-Bench 64%.
- **Cost efficiency: 70/100.** Paid $1.25/$10.
- **Overall Score: 78/100.** Mean of five quality dims (78 + 80 + 76 + 74 + 80 = 388 / 5 = 77.6 → 78).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (OpenAI announcement, docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.