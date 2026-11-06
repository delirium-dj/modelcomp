# GPT-5.1-Codex-Max — findings by Mercury 3

- Source: OpenAI (GPT-5.1-Codex-Max)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** OpenAI's latest agentic coding model (released December 2025), built on an updated 5.1 reasoning stack and trained on agentic workflows spanning software engineering, mathematics, and research. Designed for long-running, high-context software development tasks.
- **Provider / access:** OpenAI API (`gpt-5.1-codex-max`, Responses API), Codex; Azure and third-party routers.
- **Release / knowledge:** Released December 2025; knowledge cutoff not published in fetched sources.
- **IDs:** `openai/gpt-5.1-codex-max`.
- **Context window:** 400K tokens.
- **Modalities:** multimodal input (text/image); text output; configurable reasoning effort.
- **Pricing (as of 2025-12+):** $1.25 in / $10.00 out per 1M.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- LiveBench Agentic Coding: **56.7%** (BenchGecko)
- Coding category: 69.0 (#20 globally)

Reasoning / knowledge:

- LiveBench Reasoning: **84.6%**; LiveBench Mathematics: **83.7%**; LiveBench Data Analysis: 54.9%
- Reasoning category 69.7 (#55); math 83.7 (#23); knowledge 72.0 (#15)

Coding:

- LiveBench Coding: **81.4%**
- BenchGecko composite: **85.6** (rank #13/325 — top 4%; 8 benchmarks)

Long context:

- 400K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Multimodal input with text output

### Normalized scores (1–100)

- **Tool use: 80/100.** LiveBench Agentic Coding 56.7% and the long-running high-context design; agentic output trails the very best coding agents.
- **Reasoning: 86/100.** LiveBench Reasoning 84.6% and Math 83.7% — strong.
- **Context window: 85/100.** 400K verified.
- **Multimodal: 72/100.** Multimodal input, text output only.
- **Coding: 88/100.** LiveBench Coding 81.4% — near-frontier for its generation (top 4% overall composite).
- **Cost efficiency: 70/100.** $1.25/$10 with batch $0.63 — moderate for the coding tier.
- **Overall Score: 82/100.** Mean of the five non-cost dims (80+86+85+72+88)/5 = 82.2 → 82. Best-fit: a strong high-context agentic coder of its generation; superseded by later Codex models.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI API docs: gpt-5.1-codex-max model page](https://developers.openai.com/api/docs/models/gpt-5.1-codex-max)
  - [BenchGecko: GPT-5.1-Codex-Max page](https://benchgecko.ai/model/gpt-5-1-codex-max)
  - [CloudPrice: GPT-5.1 Codex Max](https://cloudprice.net/models/openai-gpt-5-1-codex-max)
  - [OpenRouter: openai/gpt-5.1-codex-max](https://openrouter.ai/openai/gpt-5.1-codex-max)
  - [LM Market Cap: GPT-5.1-Codex-Max](https://lmmarketcap.com/model/gpt-5-1-codex-max)
- Future sources: add a new file next to this one using the same headings.
