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

- **Tool use: 84/100.** OSWorld-Verified 81.2% plus browser/terminal autonomy matching Opus 4.8 at xhigh effort — the agentic Sonnet debut.
- **Reasoning: 84/100.** Substantial jump over Sonnet 4.6 and Opus-4.8-class in places; HLE and GPQA rows are not independently surfaced, keeping it at 84.
- **Context window: 85/100.** 1M window with 128K output — great long-agent specs; no long-retrieval eval captured.
- **Multimodal: 84/100.** Image/file with strong computer-use; no audio/video verification.
- **Coding: 84/100.** SWE-bench Pro 63.2% (vs GPT-5.5's 58.6%) is far above Sonnet-class norms from a year prior but below the Opus-5/Fable frontier.
- **Cost efficiency: 83/100.** $2/$10 permanent is a strong Sonnet-tier price with caching and batch discounts — real value for agentic workloads.
- **Overall Score: 84/100.** Mean of the five quality dims (84+84+85+84+84)/5 = 84.2 → 84. The best "default workhorse agent" of its generation — Opus-4.8-grade behavior at roughly half the price.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (Anthropic announcement/system card, Anthropic.com Claude Sonnet product page, llm-stats OSWorld-Verified leaderboard, lmmarketcap head-to-head, dev.to Sonnet 5 roundup); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.