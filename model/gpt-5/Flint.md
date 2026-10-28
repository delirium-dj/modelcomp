# GPT-5 - findings by Flint

- Source: OpenAI / GPT-5 (proprietary; router flagship)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's router flagship (Instant/Thinking lanes) for general work; deprecated, removal scheduled.
- **Provider / access:** OpenAI API (`https://openai.com/index/gpt-5/`), OpenAI $1.25/$10 per 1M (cached $0.125); OpenCode Zen $1.07/$8.50.
- **Release / knowledge:** Released 2025-08-07; knowledge cutoff 2024-09-30 (models.dev).
- **IDs:** `openai/gpt-5`; `opencode/gpt-5`.
- **Context window:** 400,000 total / 128,000 max output (models.dev); repo meta 400K/128K.
- **Modalities:** Text, image, file in; text out (repo meta).
- **Pricing (as of 2026-10-25):** OpenAI $1.25/$10 (cached $0.125); Zen $1.07/$8.50.

- **Architecture:** Proprietary; models.dev: open_weights = false.

### Raw benchmarks found

- Coding: Aider Polyglot: **88.0%** (aider.chat/docs/leaderboards, 2025-08-23); SWE-Bench Pro: **41.78** resolve rate (Scale Labs).
- Reasoning: AIME **94.6%, SWE-bench Verified **74.9% (repo meta).

### Cross-source comparison

- Deprecation: GPT-5 deprecated, removal scheduled; migrate to 5.5/6.x lanes.

### Normalized scores (1-100)

- **Tool use: 70/100.** Aider Polyglot **88.0%** -> strong.
- **Reasoning: 75/100.** AIME **94.6%, SWE-bench Verified **74.9% -> high.
- **Context window: 80/100.** 400K/128K -> high.
- **Multimodal: 60/100.** Text, image, file in; text out -> mid.
- **Coding: 75/100.** SWE-bench Verified **74.9%, Aider Polyglot **88.0% -> strong.
- **Cost efficiency: 80/100.** OpenAI $1.25/$10 -> mid.

- **Overall Score: 72/100.** Mean of the five quality dims (70 + 75 + 80 + 60 + 75) / 5 = 72; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/gpt-5)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
