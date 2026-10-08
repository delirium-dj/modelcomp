# Claude Sonnet 5 — findings by Big Pickle

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most agentic Sonnet yet (Jun 2026) — plans, browses, uses terminals, and runs autonomously at a level that recently required larger Opus-class models. Performs close to Opus 4.8 at substantially lower price; default model for Free and Pro plans. First frontier model lineage to use computers (per Anthropic framing).
- **Provider / access:** Claude API (`claude-sonnet-5`), Claude.ai, Claude Code, Claude Platform, AWS / Google Cloud / Microsoft Foundry.
- **Release / knowledge:** 2026-06-30.
- **IDs:** `claude-sonnet-5` (Anthropic; proprietary).
- **Context window:** 1,000,000 tokens; max output 128,000 tokens (lmmarketcap).
- **Modalities:** text + image/file input; text output; tool use, browser/computer use, reasoning at multiple effort levels (incl. xhigh).
- **Pricing (as of 2026-09-20):** $2.00 in / $10.00 out per 1M (introductory price made permanent on 2026-08-10; the planned $3/$15 standard pricing no longer applies). Up to 90% savings with prompt caching, 50% with batch; US-only inference at 1.1x (Anthropic).
- **Architecture:** Proprietary hybrid-reasoning Claude architecture (undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **81.2%** (#6/24 on llm-stats OSWorld-Verified board — right behind Opus 4.8's 83.4%, Fable 5's 85.0%).
- BrowseComp: trackers show Sonnet 5 near/at Opus 4.8 capability at higher effort levels (Anthropic charts).
- Anthropic: "matches Opus 4.8's capability levels" on some cost-performance effort settings.
- GDPval-AA / MCP-Atlas / Terminal-Bench 2.1: **no clean public figure found** in the compared rows (Anthropic references broader system card).

Reasoning / knowledge:

- Reasoner-class gains stated over Sonnet 4.6 across reasoning, tool use, coding, knowledge work (Anthropic).
- GPQA Diamond / HLE: system-card values referenced but not surfaced in the compared excerpts.

Coding:

- SWE-bench Pro: **63.2%** (Anthropic, reported by Anthropic vs GPT-5.5's 58.6%).
- SWE-bench Verified: **63.4%** (lmmarketcap head-to-head row vs Kimi K2.7 Code).
- OSWorld (2.0) unflagged; CursorBench-class: Anthropic notes best-in-class frontend/coding claims per Sonnet 5 coverage but no independent row captured here.

Long context:

- 1M window, 128K output (strong output headroom for agent loops); MRCR / RULER: not surfaced in compared rows.

Multimodal:

- image + file intake with strong computer-use (OSWorld 81.2%) tracking; no audio/video input listed.

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld-Verified 81.2% plus browser/terminal autonomy matching Opus 4.8 at xhigh effort — the agentic Sonnet debut; now backed by hard rows: Terminal-Bench 2.1 **80.4%** (system card), GDPval-AA **1,603** (48.3% normalized), BrowseComp 84.7%, AA Agentic Index 44.3% (new).
- **Reasoning: 86/100.** (Raised from 84 on 2026-10-08.) HLE gap filled: **43.2% no-tools / 57.4% with tools** (system card) — the with-tools figure beats Opus 4.6's launch-leading 53.1%; GPQA Diamond 91.1% (AA) / 88.9% (Vals); MMLU-Pro (Vals) 87.5%; CritPt 16.9% is the weak spot.
- **Context window: 85/100.** 1M window with 128K output — great long-agent specs; AA-LCR 82.0% (new) is the only long-context signal; MRCR/RULER still not published for this model.
- **Multimodal: 84/100.** Image/file intake with strong computer-use; CharXiv 88.3% (w/ tools) and AA-MMMU-Pro 77.3% (new) verify the visual stack; SWE-bench Multimodal only 28.1% and no audio/video.
- **Coding: 86/100.** (Raised from 84 on 2026-10-08.) **SWE-bench Verified corrected to 85.2%** (system card; the old 63.4% lmmarketcap row was a mis-surface) with independent Vals 79.6%; SWE-bench Pro 63.2% confirmed; LiveCodeBench (Vals) 82.4%, AA Coding Index 71.5%, CursorBench 3.2 61.5% all new; CursorBench 4.0 only 34.1%.
- **Cost efficiency: 83/100.** $2/$10 confirmed **permanent** 2026-10-08 (Anthropic changelog 2026-08-10; requesty rates updated 2026-09-30) — strong Sonnet-tier price with caching and batch discounts; caveat: new tokenizer can inflate token counts up to ~35% on code/structured text.
- **Overall Score: 85/100.** Mean of the five quality dims (84+86+85+84+86)/5 = 85.0 → 85 (raised from 84). The best "default workhorse agent" of its generation — Opus-4.8-grade behavior at roughly half the price.

---

## Re-verification — 2026-10-08 (18 days after original)

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 84 | 84 | — |
| Reasoning | 84 | 86 | +2 |
| Context window | 85 | 85 | — |
| Multimodal | 84 | 84 | — |
| Coding | 84 | 86 | +2 |
| Cost efficiency | 83 | 83 | — |
| **Overall** | **84** | **85** | **+1** |

New and corrected data (all found 2026-10-08, BenchLM updated 2026-10-07 unless noted):

- **HLE gap filled: 43.2% no-tools / 57.4% with tools** (Sonnet 5 system card) — old file said "system-card values referenced but not surfaced"; with-tools now leads Opus 4.6's 53.1%.
- **GPQA gap filled: 91.1% (AA) / 88.9% (Vals)**; MMLU-Pro (Vals) 87.5%.
- **SWE-bench Verified corrected: 85.2%** (system card) vs the old 63.4% lmmarketcap head-to-head row (a mis-surface); independent Vals 79.6%.
- **GDPval-AA gap filled: 1,603 Elo / 48.3% normalized** — old file had "no clean public figure"; this lands at Opus-4.6 altitude (1,606).
- New agentic rows: Terminal-Bench 2.1 80.4% (Vals 74.5%), BrowseComp 84.7%, AA Agentic Index 44.3%, Terminal-Bench 3.0 only 14.6%, ApprenticeBench 16%.
- New coding rows: LiveCodeBench (Vals) 82.4%, AA Coding Index 71.5%, CursorBench 3.2 61.5% / 4.0 34.1%, FrontierCode 1.1 Main 42.7%, SWE Multilingual 78.3%, AA-SciCode 54.3%.
- New reasoning/context rows: AA-LCR 82.0%, CritPt 16.9%, AA-Omniscience 16.5 (accuracy 40.1, hallucination 39.4), LABBench2 80.1%, HLE-Verified 31.0%.
- New multimodal rows: CharXiv 88.3% (77% w/o tools), AA-MMMU-Pro 77.3%, Design Arena Website 1,281 Elo.
- **Artificial Analysis Intelligence Index: 38.2** on the current v4.3 scale (era re-base across all models, not a regression).
- **Pricing recheck: unchanged** — $2/$10, cache read $0.20 (Anthropic changelog confirms intro made permanent 2026-08-10; requesty provider rates updated 2026-09-30). Anthropic pricing page now leads with **Sonnet 5.5 at the same $2/$10** — Sonnet 5 has been superseded within the family.
- BenchLM: 65.89, #32/887 (partial coverage, conservative); gradually.ai family standings show Sonnet 5.5 (83.89) above Sonnet 5.

Gaps still open after re-run: MRCR / RULER long-context retrieval (only AA-LCR), no audio/video input verification, HAL / CyberBench / APEX, τ³-Banking.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (Anthropic announcement/system card, Anthropic.com Claude Sonnet product page, llm-stats OSWorld-Verified leaderboard, lmmarketcap head-to-head, dev.to Sonnet 5 roundup); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.