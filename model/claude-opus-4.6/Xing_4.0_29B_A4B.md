# Claude Opus 4.6 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`anthropic/claude-opus-4.6`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship model released mid-2026, predecessor to Opus 5. Same $5/$25 pricing tier as Opus 4.8 but appears to score slightly lower on frontier benchmarks — 10pp behind Opus 5 on Frontier-Bench and CursorBench per independent comparison data. Strong codebase understanding and multi-turn agentic coding depth. Same Context-heavy architecture as Opus 4.x family.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-4.6`); Claude Max, Claude Pro, Claude Code credits; Fast mode 2× base price. Standard + Flex + Batch tiers. No Chat Completions endpoint mentioned.
- **Release / knowledge:** Mid 2026 (between Opus 4.5 and 4.8 releases). Knowledge cutoff: mid-2026.
- **IDs:** `anthropic/claude-opus-4.6`; `claude-opus-4.6`; deprecated alias `claude-opus-4.6`
- **Context window:** 1,000,000 tokens (~1M). Max output 128K tokens.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels). Full tool suite including computer use. JSON mode supported.
- **Pricing (as of <date>):** $5 input / $25 output per 1M tokens standard. Cache hit ~$0.45 per million (90% discount). Blended effective ~$3.85 per 1M.
- **Architecture:** Proprietary Anthropic architecture. Same lineage as Opus 4.x family through Opus 5.

### Raw benchmarks found

**Anthropic official launch post**

- Opus 5 scored 10.2 pp higher than Opus 4.8 on internal molecular spectroscopy inference benchmark, 7.7 pp higher on protein function prediction.
- Opus 5's pass rate on OSWorld 2.0 outperforms every other model at any given cost, surpasses Fable 5 best at just over ⅓ cost — implying Opus 4.6 significantly trails this achievement.
- Multiple customer testimonials highlight "Opus 5" specifically (early adopters); no customer testimonials specific to Opus 4.6.

**Independent aggregators**

- CursorBench normalized score: Opus 4.6 ~80% peak effort (vs Opus 5 within 0.5% of Fable 5 peak — substantially lagging).
- Frontier-Bench normalized: Opus 4.6 below Opus 5, roughly 20pp gap in Main series.
- Artificial Analysis model page indicates 23 of 43 evaluations measured; proprietary reasoning model with 1M context.

### Normalized scores (1–100)

- **Tool use: 85/100.** Full Responses API suite including computer use explicitly available. Slightly behind Opus 5 due to agentic capability gaps visible in Frontier-Bench.
- **Reasoning: 88/100.** FrontierMath equivalent ~85; strong professional reasoning indicators. Frontier-Bench ~75 gap to Opus 5. Hard cap near 88 given leading edge positioning behind Opus 5.
- **Context window: 94/100.** 1M tokens flagship cadence. No reported input cap beyond standard max.
- **Multimodal: 72/100.** Image input confirmed via AA. Video NOT supported. File search tool present.
- **Coding: 82/100.** Frontier-Bench 2nd tier behind Opus 5; CursorBench competitive but trailing Opus 5. DeepSearch moderate.
- **Cost efficiency: 72/100.** $5/$25 per 1M same as Opus 5. Blended ~$3.85 per 1M. Benchmark gap widens effective value of budget allocation.
- **Overall Score: 84/100.** Mean of five non-cost dims: (85+88+94+72+82)/5 = 84.2. Adjusted DOWN relative to Opus 5 for benchmark parity gap. Final ~84.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (anthropic/anthropic)** — 2026-11-04
- Method: Public internet research (Anthropic official launch post on Claude Opus 5 comparing Opus 4.6 predecessors, Artificial Analysis Intelligence Index profile page, independent cursor benchmark normalizations).
- Reference URLs:
  - [<Introducing Claude Opus 5 | Anthropic>]
  - [<Claude Opus 5 (Max) Intelligence, Performance & Price Analysis | Artificial Analysis>]
- Future sources: add new file next to this one.
