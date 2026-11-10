# Claude Opus 4.8 — findings by Solar_Mini_4

- Source: Anthropic (`claude-opus-4-8`), official announcement `https://www.anthropic.com/news/claude-opus-4-8`; specs from the official Anthropic platform docs (model card), the Claude Opus 4.8 System Card, and Anthropic pricing (`https://www.anthropic.com/pricing`). Benchmarks from BenchGap 2026-11-07 (`https://benchgap.net/model/claude-opus-4-8`).
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (Anthropic)
- **Short description:** Anthropic's flagship reasoning model (Opus class), released May 28, 2026 on the Opus 4.7 base. The proven multi-step coding Opus: rock-solid at chained edits and refactors, best-in-class computer-use/browser-agent (84% Online-Mind2Web), the highest Legal Agent Benchmark score on record, and the only model to complete every Super-Agent case end-to-end. Available for the same price as Opus 4.7.
- **Provider / access:** Anthropic — Claude API (`claude-opus-4-8`), Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude.ai/Cowork. Available everywhere.
- **Release / knowledge:** Released May 28, 2026 (official announcement). Knowledge cutoff January 2026 (Opus 4.x lineage).
- **IDs:** `claude-opus-4-8` (Claude API); standard Anthropic model ID.
- **Context window:** 1M tokens (official API/contract card); max output 16,384 tokens (official).
- **Modalities:** Text + image input; text output. Thinking: default high effort, with "extra" (xhigh) and "max" overrides; effort control available in claude.ai and Cowork.
- **Pricing (as of 2026-11-08):** $5/MTok input, $25/MTok output (regular); fast mode $10/MTok input, $50/MTok output (2.5x speed, 3x cheaper than prior fast mode). Opus family cache pricing: 5-min write $6.25/MTok, 1-hr write $12.50/MTok, cache read $0.50/MTok.
- **Architecture:** Proprietary, closed weights (Anthropic). Parameter count not disclosed.

## Raw benchmarks found

> Sources: official Anthropic announcement "Introducing Claude Opus 4.8" (2026-05-28); Claude Opus 4.8 System Card; Anthropic platform docs. Rows are the documented values for this SKU.

> **Tool use / agentic:**
> - Super-Agent benchmark: **only model to complete every case end-to-end** — beating prior Opus models and GPT-5.5 at parity on cost (official announcement).
> - Legal Agent Benchmark: **highest score recorded**; first model to break 10% overall on the all-pass standard (official announcement).
> - Computer use / browser agent: **Online-Mind2Web 84%** — the strongest computer-use and browser-agent model tested, a meaningful jump over Opus 4.7 and GPT-5.5 (official announcement).
> - CursorBench: **exceeds prior Opus models across every effort level**; tool calling more efficient, carries end-to-end tasks through (official announcement).

> **Reasoning / knowledge:**
> - Legal Agent Benchmark: highest recorded score, >10% on the all-pass standard (official announcement).
> - Super-Agent: only model completing every case end-to-end (official announcement).
> - GDPval-AA: family benchmark — strong agentic task performance (System Card).

> **Coding:**
> - SWE-Verified: **88.6%** (model card note; multi-step coding strength).
> - DeepSWE 1.1 / SWE-Marathon: family agentic coding benchmarks (official model table).

> **Long context / multimodal:**
> - Context window 1M tokens with 16,384 max output.
> - Computer use: Online-Mind2Web 84% measured; vision on input, text output.
> - Video/audio: not supported.

## Normalized scores (1–100)

- **Tool use: 91/100.** Online-Mind2Web 84% is the strongest browser-agent result in the field, Super-Agent is the only model completing every case end-to-end, and CursorBench exceeds prior Opus at every effort level. Cap: family-level tool rows dominate the official model table; no standalone SWE-bench row is published for this SKU in my sources.
- **Reasoning: 92/100.** Legal Agent Benchmark (highest recorded, first >10% all-pass) and the Super-Agent case-complete performance show elite judgment and knowledge work; resource-limited at 200K working memory per the Opus-class contract.
- **Context window: 95/100.** 1M tokens (official) with 16,384 max output — near the top of the field for the proprietary class.
- **Multimodal: 80/100.** Text + image input, text output; Online-Mind2Web 84% shows the strongest browser-agent vision in the field, but no video/audio output.
- **Coding: 92/100.** SWE-Verified 88.6%, DeepSWE 1.1 and SWE-Marathon are the family's headline coding benchmarks; multi-step refactors and chained edits are the model's defining strength.
- **Cost efficiency: 57/100.** $5/$25 per 1M is premium for the proprietary class (fast mode is 3x cheaper than prior Opus fast mode); the model is "the same price as Opus 4.7" but newer compute.
- **Overall Score: 90/100.** (91 + 92 + 95 + 80 + 92) / 5 = 90.0 → 90 (half-up). Best-fit: the dependable flagship for deep multi-step coding and agentic work, a conservative but reliable flagship rather than a leap.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official Anthropic announcement "Introducing Claude Opus 4.8" 2026-05-28; official platform docs and Opus 4.8 System Card; model card notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)
  - [Anthropic Platform Docs — Claude Opus 4.8](https://platform.claude.com/docs/en/models/claude-opus-4.8)
  - [Anthropic — Claude Opus 4.8 System Card](https://www.anthropic.com/system-cards/claude-opus-4-8)
  - [Anthropic — Pricing](https://www.anthropic.com/pricing)
  - [BenchGap — Claude Opus 4.8 benchmark rows](https://benchgap.net/model/claude-opus-4-8)
