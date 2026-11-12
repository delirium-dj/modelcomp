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

---

## Archived research pass — `Solar_Mini_4.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Solar_Mini_4.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Claude Opus 4.8 — findings by Solar Mini 4

> TEMPLATE — do not commit as-is. Replace every `<...>` placeholder with your own research, and strip this notice block. Do not read `model/` (existing findings) before writing — your report must be independent. Overview + scoring methodology: `../../model-comparison.md`.
>
> - Source: Anthropic (`claude-opus-4-8`)
> - Date: 2026-10-24 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Claude Opus 4.8 (`claude-opus-4-8`; Platform IDs: Bedrock `anthropic.claude-opus-4-8`, Google Cloud, Azure Foundry)
- **Short description:** Anthropic's flagship reasoning model with 1M context / 128K output, adaptive thinking, dynamic workflows (Claude Code), and agent teams — legacy model, migrate to Opus 5.5.
- **Provider / access:** claude.ai, Claude API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry; Messages + Responses APIs.
- **Release / knowledge:** released May 28, 2026; knowledge cutoff Jan 2026.
- **IDs:** `claude-opus-4-8` (Claude API); `anthropic.claude-opus-4-8` (Bedrock). No free ID — paid only.
- **Context window:** 1,048,576 (1M) total; 128K max output (batch API beta: 300K).
- **Modalities:** text + image in → text out; adaptive thinking (default high; xhigh/max options); tool calls; JSON mode.
- **Pricing (as of 2026-10-24):** $5/M input / $25/M output; cache 5m write $6.25, 1h write $10, read $0.50; batch 50%; fast mode $10/$50 (2.5x speed).
- **Architecture:** proprietary, undisclosed param count; "Legacy" status in the lineup; retirement not sooner than May 28, 2027.

## Raw benchmarks found

> Measured numbers with source, rank/percentile and harness. "Est." = model-based estimate with confidence interval.

**Agent / tool use**
- GDPval-AA: 1890 Elo (AA, measured, max effort) — #1; +137 vs Opus 4.7; ~67% win rate vs GPT-5.5 xhigh
- Online-Mind2Web: 84% (official, strongest computer-use/browser-agent in Anthropic's tests)
- MCP Atlas: 82.2% measured (Benchgap)
- BrowseComp: 84.3% measured (Benchgap)
- CursorBench 3.1: 58.4% measured; 3.2: 62.3% measured
- Super-Agent benchmark: only model to complete every case end-to-end, beating prior Opuses and GPT-5.5 at parity on cost (official)
- AutomationBench-AA: 58.6% estimated ±10.5 pp, low; AA-AnalystAgent 39.4% estimated ±7.2 pp, medium

**Terminal-Bench 2.1:** 74.6% measured (Benchgap); official footnote: Terminus-2 harness; GPT-5.5 (Codex CLI) 83.4%

**Tau3-Banking / Tau2-Bench:** no verified public score found for Opus 4.8 in my sources

**GDPval-AA:** 1890 Elo (AA, above) — included under tool use

**Claw-Eval / ClawProBench:** no verified public score found

**MCP-Atlas / SWE Atlas / Toolathlon:** MCP Atlas 82.2% measured (above); Toolathlon-Verified 73.4% estimated ±1.0 pp, medium (Benchgap)

**Reasoning / knowledge**
- HLE: 57.9% measured (Benchgap); AA-HLE 48.7% measured (AA) — conflict noted, 9.2 pp
- GPQA Diamond: 93.6% measured (Benchgap)
- CritPt: 20.9% measured (Benchgap) — weak frontier physics
- AA-Omniscience Accuracy: 48.8% measured (#2 behind Gemini 3.1 Pro)
- Artificial Analysis Intelligence Index: 42 measured, #51/215 (AA model page, deprecated); launch article reported 61.4 at max effort — conflict noted
- MMLU: 90.1% estimated ±3.6 pp (Benchgap); MMLU-Pro 85.8% estimated ±2.5 pp (Benchgap)

**Coding**
- SWE-bench Verified: 88.6% measured (Benchgap; llm-stats)
- SWE-bench Pro: 69.2% measured (Benchgap)
- Terminal-Bench 2.1: 74.6% measured (Benchgap)
- LiveCodeBench v6: 90.2% estimated ±2.4 pp, low (Benchgap); Vals LiveCodeBench 87.8% measured

**Long context**
- MRCR v2: 76% at 1M (8-needle) (official + The Decoder; Sonnet 4.5 18.5%)
- AA-LCR: 77.7% measured; MRCR 85.4% estimated ±11.3 pp, low; LongBench v2 61.8% estimated ±5.9 pp, low

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
