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

## Re-verification — 2026-11-05 (46 days after original)

Re-run requested by the user to compare the original findings against current data. Original findings above are preserved; corrections are noted below.

| Dimension | 2026-09-20 | 2026-11-05 | Change |
| --- | --- | --- | --- |
| Tool use | 84 | 85 | **+1** |
| Reasoning | 84 | 85 | **+1** (HLE/GPQA now published) |
| Context window | 85 | 85 | — |
| Multimodal | 84 | 84 | — |
| Coding | 84 | 85 | **+1** (SWE-bench corrected) |
| Cost efficiency | 83 | 83 | — |
| **Overall** | **84** | **85** | **+1** |

**BenchLM composite: 64.45/100, #35 of 1014**, from 50 of 739 rows (partial coverage — conservative, not comparable to this project's normalized scale).

**The one big correction: SWE-bench Verified 63.4% → 85.2%.** The original took 63.4% from an lmmarketcap head-to-head row; the system card and BenchLM both carry **85.2%**, with **SWE-bench (Vals) 79.6%** as the independent check. The 63.4% figure was a bad row, not a different harness. **SWE-bench Pro 63.2%** is corroborated exactly.

**The gaps the original flagged as missing are now filled.** HLE **43.2%** without tools / **57.4%** with tools; GPQA Diamond **91.1%** (Vals 88.9%); AA Intelligence Index **38.2**; AA-LCR **82.0%**; CritPt **16.9%**; FrontierMath v2 **65.614%** (T1–3) / **29.268%** (T4); Terminal-Bench 2.1 **80.4%**; BrowseComp **84.7%**; OSWorld-Verified **81.2%**; GDPval-AA **1603 Elo / 48.2%**.

**Newly measured agentic:** AA Agentic Index **44.3%**, Tau3 Banking **37.3%**, AA EnterpriseOps-Gym **44.7%**, AA-AnalystAgent **46.3%**, OSWorld 2.1 **57.0%**, ApprenticeBench **16%**, MazeBench **0%**, Terminal-Bench 3.0 **14.6%**.

**Newly measured coding:** AA Coding Index **71.5%**, SWE Multilingual **78.3%**, AA-SciCode **54.3%**, CursorBench 3.2 **61.5%**, FrontierCode 1.1 **42.7%**, VulcanBench CII **89.2%**. Two soft spots: **SWE Multimodal 28.1%** and **CursorBench 4.0 34.1%**.

**Multimodal:** CharXiv **88.3%** (77% without tools), AA-MMMU-Pro **77.3%**, ParseBench **61.16%** — a genuinely strong document/vision profile, no audio.

**Pricing and lifecycle.** **$2.00 in / $10.00 out, $0.20 cached, 1M context / 128K output** (models.dev) — the permanent introductory price is confirmed. Superseded by **Sonnet 5.5** (BenchLM 81.89) but still the cheapest 1M-context Anthropic agent on Zen.

**Honesty caveat.** AA-Omniscience **40.1% accuracy / 39.4% hallucination** is mid-pack; it is a good agent, not a reliable closed-book oracle.

**Net assessment.** The correction is material and it goes in the model's favour: the report understated Sonnet 5's coding by 22 points because of one bad row. Tool/Reasoning/Coding each move +1, Overall 84 → 85.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-09-20
- Re-verified by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public web research (Anthropic announcement/system card, Anthropic.com Claude Sonnet product page, llm-stats OSWorld-Verified leaderboard, lmmarketcap head-to-head, dev.to Sonnet 5 roundup; BenchLM, Vals AI and models.dev on re-run); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Sonnet 5 system card](https://www-cdn.anthropic.com/d9bb04416ffe1352af84721476c1fa9994c07fde/Claude%20Sonnet%205%20System%20Card.pdf)
  - [BenchLM — Claude Sonnet 5](https://benchlm.ai/models/claude-sonnet-5)
  - [models.dev — provider catalogue (opencode pricing/limits)](https://models.dev/api.json)
  - [OpenCode Zen — models and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_5_2.md`, using the same headings.