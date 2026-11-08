# Claude Opus 5 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 87). Fresh sources this pass: BenchLM model page
> (last updated 2026-11-07, 105 benchmark rows) + Artificial Analysis model
> page (via BenchLM citations) + llm-stats pricing.
> Changes: Multimodal 65→78 (GDP.pdf / SWE-bench Multimodal now publish
> PDF+image-input scores for this release), Coding 93→94 (LiveCodeBench 89.0
> and AA-SciCode 56.4 fill the two named gaps), Overall 87→89.8; Tool use 91,
> Reasoning 91, Context 95, Cost efficiency 50 held.

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Opus-tier hybrid-reasoning flagship (released 2026-07-24) for long-running agentic coding, computer use, and knowledge work — positioned as near-Claude-Fable-5 intelligence at half the price. Not a variant/alias; separate from Opus 4.8 and Opus 5.5.
- **Provider / access:** Claude API (`claude-opus-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude apps/Platform. Messages API (Anthropic format).
- **Release / knowledge:** released 2026-07-24; knowledge cutoff not disclosed in retrieved sources.
- **IDs:** `anthropic/claude-opus-5` (gateway routes) / `claude-opus-5` (native).
- **Context window:** 1,000,000 tokens (default and maximum); max output 128K class (per Claude platform conventions; batch output up to 300K beta on the platform).
- **Modalities:** text + images in; PDF input confirmed benchmarked for this release (GDP.pdf); text out; reasoning yes (extended thinking on by default, per-request effort low/medium/high/xhigh/max); tool calls yes (computer use, code execution, web/batch tools).
- **Pricing (as of 2026-11-08):** $5 in / $25 out per 1M, $0.50 cached input (llm-stats + BenchLM, re-confirmed 2026-11-08); prompt caching up to 90% savings on reads, Batch API 50% off; Fast mode $10/$50 at ~2.5× speed. Paid, no free tier.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.6%** (Vals AI leaderboard, via BenchLM) / **89.1%** (AA terminalbench-v2-1 leaderboard, via BenchLM); TB3.0: **42.7%** (Terminal-Bench 3.0 / frontierbench.ai leaderboard, via BenchLM) — first board number for TB3 in this file.
- GDPval-AA: **1862** Elo (Anthropic Claude Opus 5 system card, via BenchLM — re-confirmed vs 1861 previously); normalized 61.1%; AA Briefcase: 1720 Elo.
- OSWorld 2.0: **70.6%** (Anthropic system card, via BenchLM); Toolathlon-Verified: **80.6% Pass@1 / 87.0% Pass@3 / 73.1% Pass³, 23.5 turns**; MCP Atlas: **85.8%** (+89.1% claim coverage); AutomationBench: **26.0%**; BrowseComp: **90.8%** single-agent / **93.6%** 10-agent prerelease; DeepSearchQA: **95.0%** (Anthropic launch); AA Agentic Index: **56.2%**; LAB all-pass (Anthropic harness): 23.58%.
- Tau3-Banking / Claw-Eval / Toolathon-2: no verified public score found (re-checked 2026-11-08).

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (AA) / **93.4%** (Vals AI); HLE: **56.3% w/o tools** (Anthropic system card) / **54.9%** (AA) / **64.7% w/ tools** (Anthropic system card); HLE-Verified: 54.4% (Google Gemini 3.8 Flash model card cross-citation).
- Artificial Analysis Intelligence Index: **50.8%** (AA model page, via BenchLM, 2026-11-07 snapshot) — fills the previously missing cross-check row.
- AA-LCR: **79.3%** (AA model page, via BenchLM) — first verified LCR row; CritPt: **29.1%** (AA, via BenchLM) — first verified CritPt row.
- ARC-AGI-1: 97.50% / ARC-AGI-2: 90.4% / ARC-AGI-3: **30.2%** (ARC Prize published results); AA-Omniscience Accuracy 60.9% / Hallucination Rate 60.8% / Index 37.1% (AA, via BenchLM).
- FrontierMath v2 Tier 1-3: **85.614%**, Tier 4: **73.171%** (Epoch AI leaderboard, via BenchLM); IMO 2026: **42/42** (Anthropic system card).

Coding:

- SWE-bench Verified: **96%** (Anthropic system card) / **97%** (Vals AI); SWE-bench Pro: **79.2%**; SWE Multilingual: **89.5%**; SWE Multimodal: **59.4%** (all Anthropic system card, via BenchLM).
- LiveCodeBench: **89.0%** (Vals AI leaderboard, via BenchLM) — fills the previously missing row; AA-SciCode: **56.4%** (AA, via BenchLM) — fills the previously missing row, clears the 55% frontier ref; AA Coding Index: **78.0%** (Anthropic launch, via BenchLM) — clears the 70% frontier ref.
- DeepSWE: **68.8%** (Anthropic system card — still below the 74% frontier ref); FrontierCode 1.1 Main: **53.4%** / Extended: **63.6%**; FrontierCode 2.0: **26.7%** (Cognition); CursorBench 3.2: **70.0%**; CursorBench 4.0: **46.6%** (Cursor evals); ProgramBench: **93.0%**.
- Vibe Code Bench: no verified public score found.

Long context:

- No MRCR / RULER retrieval row found for Opus 5 (re-checked 2026-11-08) — "no long-context retrieval reported" beyond the 1M window spec; ProgramBench 93.0% remains the strongest long-horizon proxy.

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval-AA 1862 and TB2.1 84.6/89.1 stay top-tier, with fresh fills MCP Atlas 85.8, DeepSearchQA 95.0, AA Agentic Index 56.2 and Toolathlon 80.6/87.0; unchanged hold because AutomationBench is still 26.0% and Tau3-Banking / Claw-Eval still have no verified public score (2026-11-08 re-check) — those two gaps cap it below 94.
- **Reasoning: 91/100.** The named cap (no AA Intelligence Index / LCR row) is now filled: AA Index 50.8 (below the 60+ frontier ref — so no upward move), AA-LCR 79.3 well clear of the mid band, CritPt 29.1, GPQA 93.2–93.4, HLE 56.3/64.7; held at 91 because the Index cross-check lands below frontier and no MRCR row exists.
- **Context window: 95/100.** 1M window sits in the ≥1M tier floor; no published needle-retrieval score at 512K+ (MRCR still absent 2026-11-08) to justify anything above the tier minimum — unchanged.
- **Multimodal: 78/100.** Moved 65→78: the old cap ("no published PDF-input evidence for this specific release") is gone — Anthropic's Opus 5 system card now shows GDP.pdf 83.4% (no tools) / 85.5% (tools) plus SWE-bench Multimodal 59.4% and AA-MMMU-Pro 84.7%, putting it in the +video/PDF-in 75–90 band; no video or audio input and text-only output keep it at the low end of that band.
- **Coding: 94/100.** Moved 93→94: the two named missing rows are now filled and clear the frontier refs — LiveCodeBench 89.0 (Vals) and AA-SciCode 56.4 (≥55 ref), plus AA Coding Index 78.0 (≥70 ref); still capped by DeepSWE 68.8 (<74 ref) and FrontierCode 2.0 at 26.7.
- **Cost efficiency: 50/100.** $5/$25 sits halfway between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors (re-confirmed 2026-11-08 via llm-stats/BenchLM); up-to-90% cache reads and 50% batch discount soften agentic workloads, and Fast mode doubles price — unchanged.
- **Overall Score: 89.8/100.** (91+91+95+78+94)/5 = 89.8 → near-frontier paid daily driver for SWE-bench-class coding, GDPval knowledge work, and PDF/chart-heavy computer use at mid-tier flagship cost.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page last updated 2026-11-07, Artificial Analysis model page, llm-stats, ARC Prize / Epoch / Cursor evals / Vals AI rows as cited); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 5 — BenchLM](https://benchlm.ai/models/claude-opus-5)
  - [Claude Opus 5 — Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-5)
  - [Claude Opus 5 — llm-stats](https://www.llm-stats.com/models/claude-opus-5)
  - [Anthropic: Introducing Claude Opus 5 (system card)](https://www.anthropic.com/news/claude-opus-5)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
