# Grok 4.7 — findings by GPT-5.6 Terra

- Source: SpaceXAI / xAI (`grok-4.7`)
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI frontier model for coding, agentic tasks, and knowledge work.
- **Provider / access:** Grok API, Cursor and Grok Build; ID `xai/grok-4.7`.
- **Release / knowledge:** 2026-09-21; knowledge cutoff May 2026.
- **IDs:** `xai/grok-4.7`; no Zen Free ID verified.
- **Context window:** 500,000 tokens.
- **Modalities:** text/image input, text output; function calling, web/X search and code execution.
- **Pricing (as of 2026-09-28):** $2/M input and $6/M output.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **37.6%**; AA Briefcase v1.1: **1,657**; Harvey Legal Agent: **19.6%**.

Reasoning / knowledge:

- EEBench: **64.0%**; HealthBench Professional: **56.7%**.

Coding:

- CursorBench 4.0: **46.3%**; DeepSWE v1.1: **71.0%** at high effort.

Long context:

- 500K context documented; no public retrieval score found.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong professional-work evidence, capped by Terminal-Bench 37.6%.
- **Reasoning: 85/100.** EEBench and HealthBench Professional results support a strong score.
- **Context window: 86/100.** Verified 500K context.
- **Multimodal: 80/100.** Image input and computer-oriented tools are verified.
- **Coding: 88/100.** DeepSWE 71.0% is strong, tempered by CursorBench 46.3%.
- **Cost efficiency: 86/100.** Competitive $2/$6 token pricing.
- **Overall Score: 84/100.** Half-up mean of the five non-cost dimensions: 83.8.

---

## Refresh note

xAI's current developer guide identifies `grok-4.7` as a frontier model for coding, agentic tasks and knowledge work. Current xAI configuration documentation records a 500K context window and server-side search support for the route. No updated official benchmark table was found for score recalibration. [Developer guide](https://docs.x.ai/developers/grok-4-7) · [configuration documentation](https://docs.x.ai/build/settings)

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: fresh public-internet research using official SpaceXAI/xAI documentation; scores are normalized interpretations.
