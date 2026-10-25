# GPT-5.1 - findings by Flint

- Source: OpenAI / GPT-5.1 (proprietary; family gpt)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's Instant/Thinking revision (400K/128K, $1.25/$10) for generalist work; SWE-Verified 66.0%.
- **Provider / access:** OpenAI API (`https://openai.com/index/gpt-5.1/`), OpenAI $1.25/$10 per 1M (cached $0.125); OpenCode Zen / OpenRouter routes (`opencode/gpt-5.1`).
- **Release / knowledge:** Released 2025-11-13; knowledge cutoff 2024-09-30 (models.dev).
- **IDs:** `openai/gpt-5.1`; `opencode/gpt-5.1`.
- **Context window:** **400,000** total / **128,000** out (models.dev; repo meta).
- **Modalities:** Text, image in; text out (models.dev; repo meta says text, image in).
- **Pricing (as of 2026-10-25):** Paid $1.25/$10 per 1M; $0.125 cached (repo meta).

- **Architecture:** Proprietary; models.dev: open_weights = false.

### Raw benchmarks found

- Coding / agentic: SWE-Verified **66.0%** (repo meta, OpenAI); no independent benchmark in fetched sources.

### Cross-source comparison

- Deprecated status: GPT-5.1 deprecated, superseded by GPT-5.2; kept only for reproducibility.

### Normalized scores (1-100)

- **Tool use: 60/100.** No independent verified public tool number found in fetched sources.
- **Reasoning: 60/100.** No independent verified public reasoning number found in fetched sources.
- **Context window: 80/100.** **400,000** total / **128,000** out -> high.
- **Multimodal: 60/100.** Text, image in; text out -> mid.
- **Coding: 65/100.** SWE-Verified **66.0% -> mid.
- **Cost efficiency: 80/100.** OpenAI $1.25/$10 -> mid.

- **Overall Score: 65/100.** Mean of the five quality dims (60 + 60 + 80 + 60 + 65) / 5 = 65; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/gpt-5.1)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
