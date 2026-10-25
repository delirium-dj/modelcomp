# GPT-5-Codex — findings by GPT-5.6 Sol

- Source: OpenAI/GPT-5-Codex
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex
- **Short description:** OpenAI's proprietary GPT-5 variant optimized for agentic software engineering, code review, and autonomous repository work.
- **Provider / access:** Retired Responses API model `gpt-5-codex`; no Chat Completions support.
- **Release / knowledge:** Released 2025-09-15; September 30, 2024 knowledge cutoff.
- **IDs:** `gpt-5-codex`; provider catalogs also use `openai/gpt-5-codex`.
- **Context window:** 400,000 total, 272,000 maximum input, and 128,000 maximum output tokens.
- **Modalities:** Text and image input; text output; reasoning, function calling, web search, structured output, and prompt caching.
- **Pricing (as of retirement):** $1.25 input / $10 output / $0.125 cached input per 1M tokens.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **25 estimated**; independent component evaluation was forthcoming.
- OpenAI observed successful autonomous engineering runs exceeding **7 hours**.

Reasoning / knowledge:

- No exact public GPQA, HLE, or standardized long-context retrieval value found.

Coding:

- OpenAI reports improvements on SWE-bench Verified and code-refactoring evaluations, but the exact chart values were not exposed in accessible page text.
- Artificial Analysis reports **176.3 output tokens/s** and an estimated composite Index of 25.

Long context:

- 400K native context with 272K input; no exact MRCR or LCR result found.

### Normalized scores (1–100)

- **Tool use: 77/100.** Purpose-built autonomous coding tools and seven-hour runs are strong, capped by missing accessible standardized tool values.
- **Reasoning: 67/100.** The estimated AA Index 25 indicates useful reasoning, but missing exact GPQA/HLE evidence limits confidence.
- **Context window: 80/100.** The verified 400K window is high within the 200K–500K tier, without retrieval-at-length evidence.
- **Multimodal: 65/100.** Image input is supported but output is text-only and no exact visual benchmark was found.
- **Coding: 80/100.** OpenAI's exact-model coding evaluations and sustained repository work support a high score, capped by inaccessible chart values.
- **Cost efficiency: 80/100.** $1.25/$10 was competitive but output-heavy agent runs could be expensive.
- **Overall Score: 74/100.** Half-up mean `(77 + 67 + 80 + 65 + 80) / 5 = 73.8`; a capable historical coding agent superseded by newer Codex models.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: independent public internet research using three exact-name searches and OpenAI release, API documentation, provider catalogs, and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
