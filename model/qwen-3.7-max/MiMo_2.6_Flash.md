# Qwen 3.7 Max — findings by MiMo 2.6 Flash

- Source: Alibaba Cloud Community launch post (May 21, 2026), TheRouter/W&B/DataCamp coverage, Benchmark Registry/ModelRegistry, OpenRouter, repo meta
- Date: 2026-11-10 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-07 (Overall 82). Fresh sources this pass: **BenchLM model page**
> (snapshot 2026-11-10, overall **62.06, #47/1020**, 66/804 rows) with its
> cited per-row provenance — the **Artificial Analysis model page now
> exists** (it did not at the previous pass), **Epoch AI FrontierMath v2
> leaderboard**, **Vals AI leaderboards**, the Qwen3.7-Max blog rows, Gert
> Labs, ResearchClawBench, OpenRouter benchmarks. The previous pass's
> central cap — "No AA, BenchLM, Epoch or Vals entry exists for this model…
> every row is vendor-run with zero independent evaluation" — is **resolved:
> all four now exist**. Changes: **Tool use 87→88** (named gap gone —
> independent **τ²-bench 94.7%** [AA], plus **BFCL v4 75.0**, **Claw-Eval
> 65.2%**, **TB2.1 61.0%** [Vals, independent], **GDPval-AA 1190 Elo /
> 31.4%** [independent]; offset by AA Agentic Index **23.9**, ResearchClawBench
> **18.7**, still no OSWorld/BrowseComp row), **Reasoning 89→90** (the
> "zero independent evaluation" cap is gone — AA-GPQA **92.3** and Vals
> GPQA **90.2** independently corroborate the vendor 92.4, AA-HLE **40.5**
> corroborates 41.4, and the first independent math row lands: **Epoch
> FrontierMath v2 T1–3 64.561% / T4 34.146%**; held in check by
> AA-Omniscience net 13.5 and AA Intelligence Index 29.5), **Context
> 94→95** (the withheld figure is published — **MRCRv2 90.4%** — plus
> independent **AA-LCR 79.0%**), **Coding 86→87** (the missing LCB row is
> published: **LiveCodeBench v6 91.6** vendor / **87.1** Vals-independent,
> SWE-bench 68.8 Vals, **AA Coding Index 66.0**; offset by independent
> **AA-SciCode 49.5** confirming the SciCode weakness), Overall 82→**83**
> (mean 82.2 → 83.0). Held: Multimodal 55 (Design Arena Website 1272 is a
> text-to-web row — model is still text-only in for May snapshots), Cost 85
> (pricing unchanged, $1.48/$4.43). Merged-duplicate section below untouched.

## Model card

- **Name:** Qwen3.7-Max — Alibaba's **proprietary flagship of the Qwen3.7 series**, announced at Alibaba Cloud Summit **2026-05-20** (blog 2026-05-21: "Qwen3.7: The Agent Frontier"); preview had appeared on Arena AI / Qwen Chat a day earlier. Sits above Qwen 3.7 Plus in the line.
- **Short description:** **Agent-era flagship**: "text input and output, designed for agent-centric workloads, with particular strengths in coding, office and productivity tasks, and long-horizon autonomous execution" with "notable gains in coding and agentic performance over prior Qwen generations" (OpenRouter) and explicit prompt caching. Launch demo: **35-hour continuous autonomous kernel-optimization run on an unseen T-Head ZW-M890 PPU** — 1,158 tool calls, 10× geometric-mean speedup over the Triton reference. First domestic model on Arena AI at release. **Text-only** (unlike the multimodal 3.7-Plus).
- **Provider / access:** Alibaba Cloud Model Studio / Qwen ecosystem + OpenRouter `qwen/qwen3.7-max` (created 2026-05-21) and other OpenAI-compatible routers. Proprietary.
- **Release / knowledge:** 2026-05-19/21.
- **Context window:** **1,000,000 in / 131,072 max out** (meta; OpenRouter 1.0M).
- **Modalities:** **text in, text out** (+ reasoning traces and tool calls; no image input).
- **Pricing:** **$1.48 / $4.43 per 1M** (OpenRouter $1.475/$4.425; meta), **cached ~$0.25**; ModelRegistry lists an official-looking $2.5/$7.5 tier — price-registry conflict flagged, OpenRouter used.

### Raw benchmarks found

> Primary: Alibaba launch post (self-reported, May 2026; methodology footnotes: TB2.0
> Harbor/Terminus-2 5-run avg, 256K ctx; SWE series internal scaffold, 200K ctx).
> **Update 2026-11-10: AA, BenchLM, Epoch and Vals entries now all exist** (they were
> absent at the previous pass) — BenchLM 62.06 #47/1020 (66/804 rows), AA model page with
> Index/GPQA/HLE/LCR/SciCode/GDPval/τ² rows, Epoch FrontierMath v2, Vals TB2.1/LCB/SWE/GPQA
> rows; independent corroboration noted per row below.

Agentic / tool use:

- **Terminal-Bench 2.0 (Terminus): 69.7** — leads DeepSeek-V4-Pro Max 67.9, K2.6 Thinking 66.7, Opus-4.6 Max 65.4. **Terminal-Bench 2.1 (Vals AI): 61.0** — first independent terminal row; **terminalBenchHard (AA): 50.8**.
- **MCP Atlas: 76.4** — near-top per W&B ("leads or near-top on MCP-Mark, Apex"). **BFCL v4: 75.0** and **Claw-Eval: 65.2** (Qwen blog, via BenchLM 2026-11-10 — new); QwenClawBench 64.3, QwenWebBench 1568, VITA-Bench 47.9, Gert Labs 64.27 (new rows).
- **τ²-bench: 94.7%** (AA leaderboard — **new, independent**; fills the "no τ²" gap); **GDPval-AA: 1190 Elo / 31.4% normalized** (AA — new, independent, mid band); **AA Agentic Index: 23.9** (weak); AA EnterpriseOps-Gym 45.0, AA ITBench 42.5, ResearchClawBench 18.7 (weak).
- Toolathlon Verified: **49.7% Pass@1** (Qwen3.8-Max launch cross-table — recorded in the merged-duplicate section below; low vs 3.8-Max 72.5).
- CoWorkBench (long-horizon CS/finance/legal/medical/productivity), SkillsBench (78 tasks via OpenCode), QwenWorldBench, VITA-Bench evaluated — values not disclosed in fetched coverage; YC-Bench startup sim **$2.08M revenue** (2× Qwen3.6-Plus's $1.05M).
- Not present: OSWorld, BrowseComp.

Coding:

- **SWE-bench Verified: 80.4** (par with Opus-4.6 Max 80.8, DS-V4-Pro Max 80.6); **SWE-bench (Vals AI): 68.8** — first independent SWE reading.
- **SWE-bench Pro: 60.6** — highest in the launch comparison (K2.6 59.5, DS-V4-Pro 59.0).
- **SWE-bench Multilingual: 78.3** (beats Opus-4.6 Max 77.5). **SciCode: 53.5** — just under the 55 reference (Opus-4.6 Max 51.9); **AA-SciCode: 49.5** (independent — confirms the miss).
- **LiveCodeBench v6: 91.6** (Qwen blog via BenchLM — **new, the previously-missing Max LCB row**); **LiveCodeBench (Vals): 87.1** (independent).
- **AA Coding Index: 66.0** (Artificial Analysis — new composite).
- NL2Repo 47.2; QwenSVG 1608; Kernel-Bench L3 10× speedup (35-h run); OpenHarmony Bench 53.4 (new).

Reasoning & knowledge:

- **GPQA Diamond: 92.4** ✓ — tops Opus-4.6 (91.3), K2.6 (90.5), DS-V4-Pro (90.1); **independently corroborated: AA-GPQA 92.3, Vals GPQA 90.2** (new).
- **HLE: 41.4** ✓ — clears 40 (Opus-4.6: 40.0); **AA-HLE: 40.5** (independent — corroborates). **HMMT Feb-2026: 97.1** (Opus-4.6: 96.2); IMOAnswerBench 90; **APEX 44.5** (DS-V4-Pro 38.3); xhigh-effort reasoning mode at launch.
- **FrontierMath v2: 64.561% (Tiers 1–3) / 34.146% (Tier 4)** — Epoch AI leaderboard (**new — first independent math row**; mid-frontier: above Grok 4.6-class era rows on T4, below Haiku 5.5's 75.088 on T1–3).
- **AA Intelligence Index: 29.5** (new — the model is on AA now); **AA-Omniscience: net 13.5** (accuracy 31.1, hallucination 25.6 — low-confabulation but mid accuracy); CritPt 13.4; MMLU-Pro 89.6 (Vals 89.3), MMLU-Redux 95, SuperGPQA 73.6 (vendor rows re-confirmed).
- **ARC-AGI: still no verified public score found.**

Multimodal / long context:

- Text-only — no image/video rows at all (multimodal scored on the text-only band); **Design Arena Website: 1272 Elo** (OpenRouter, new — text-to-web generation, not a vision row).
- **MRCR-v2: 90.4%** (Qwen blog, via BenchLM 2026-11-10 — **the launch-run figure is now published**; previous pass: "score not published"); **AA-LCR: 79.0%** (Artificial Analysis — new, independent); LongBench v2 65.3 (merged-duplicate row); 1M API window documented.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.0 69.7 and MCP Atlas 76.4 remain leading agentic rows, and the independent-coverage gap that held 87 is now partly closed: **τ²-bench 94.7 (AA)**, BFCL v4 75.0, Claw-Eval 65.2, TB2.1 61.0 (Vals), GDPval-AA 1190 → 88 (was 87). Still short of 90: no OSWorld/BrowseComp figure anywhere, AA Agentic Index 23.9 is low, ResearchClawBench 18.7 weak, and Toolathlon 49.7 lags the 3.8 generation.
- **Reasoning: 90/100.** The single cap that held 89 — "every row is vendor-run with zero independent evaluation" — is gone: AA-GPQA 92.3 and Vals GPQA 90.2 corroborate the vendor 92.4, AA-HLE 40.5 corroborates 41.4, and Epoch measures **FrontierMath v2 64.561/34.146** independently → 90. Held there (not higher) by FrontierMath sitting mid-frontier (below Haiku 5.5's 75.1), AA Intelligence Index 29.5, AA-Omniscience net 13.5, and still no ARC-AGI row.
- **Context window: 95/100.** 1M/131K with the withheld retrieval figure now published — **MRCRv2 90.4** — plus independent **AA-LCR 79.0** → 95 (was 94). Not 100: no ≥512K-window retrieval row and no ≥98%-at-window claim.
- **Multimodal: 55/100.** Text-only model → baseline text band, despite the sibling 3.7-Plus being video-capable; the new Design Arena Website 1272 row is text-to-web generation, not vision input (no change).
- **Coding: 87/100.** SWE-Pro 60.6 (best in class at launch), SWE-Multi 78.3, SWE-V 80.4 par-with-frontier, TB2.0 69.7 — and the missing competitive-coding row is now published: **LiveCodeBench v6 91.6** (Vals independent 87.1), plus **AA Coding Index 66.0** and Vals SWE 68.8 → 87 (was 86). Capped by SciCode 53.5 (vendor) / **49.5 (AA, independent)** both missing 55, and SWE-V 5 points under the 85 ref.
- **Cost efficiency: 85/100** (excluded from Overall). $1.48/$4.43 with ~$0.25 cache sits a touch above the $1.25/$4.25 ≈ 88 anchor (registry $2.5/$7.5 conflict flagged); 65% cheaper than $5/$25-class Opus tiers for par-on-SWE-V capability. Pricing unchanged this pass.
- **Overall Score: 83/100.** (88+90+95+55+87)/5 = 415/5 = 83.0 → **83** — the text-only agent flagship: launch-leading TB2.0/MCP Atlas/SWE-Pro and reference-clearing GPQA/HLE/HMMT, now with independent AA/Epoch/Vals corroboration and a published MRCR figure, held down by a low absolute AA Agentic Index, mid-frontier independent math, and a hard 55 on multimodal that its image+video sibling 3.7-Plus does not share.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-10
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-10 with per-row provenance — Artificial Analysis model page [new since 2026-10-07], Epoch AI FrontierMath v2 leaderboard, Vals AI leaderboards, Qwen3.7-Max blog rows, Gert Labs, ResearchClawBench, OpenRouter benchmarks — checked against the 2026-10-07 sources: alibabacloud.com launch post, OpenRouter, TheRouter, W&B, DataCamp, Benchmark Registry, ModelRegistry, all direct BenchLM/AA/llm-stats checks then 404). Scores are normalized 1–100 interpretations, not official vendor scores; family ordering checked against own Qwen 3.7-Plus (83, multimodal) and 3.8-Max (88) reports — text-only band enforced here. Previous Signature 2026-10-07; merged-duplicate section (Mimo V2.6 Flash, 2026-09-23) preserved untouched.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Qwen 3.7 — findings by Mimo V2.6 Flash

- Source: Alibaba/`qwen-3.7` (site meta `opencode/qwen-3.7`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba Qwen's May 2026 agent-era generation (Qwen3.7-Max announced Apsara Summit 2026-05-17/20; Plus multimodal follow-on) — API-only (no open weights ever shipped for 3.7; open release skipped to 3.8). Max is text-only flagship with 1M context and SWE-Pro 60.6 / TB2.0 69.7 at $2.50/$7.50; Plus is the multimodal workhorse at lower price. Site meta lists 128K/text-only — stale vs verified 1M product rows; scoring uses live sources.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope / QwenCloud (`qwen3.7-max`, `qwen3.7-plus` OpenAI-compatible Chat Completions; Zen/Go plan uses Anthropic Messages protocol per opencode issues #29556/#29754); OpenRouter / models.dev `alibaba/qwen3.7-*`. Site meta `opencode/qwen-3.7`.
- **Release / knowledge:** 2026-05-17 early preview / 2026-05-19–21 Max blog & Apsara; Plus 2026-05-26 snapshot / 2026-06-03 blog. Knowledge cutoff not published in rows reviewed.
- **IDs:** Site `opencode/qwen-3.7`; commercial `qwen3.7-max` / `qwen3.7-plus` (+ dated snapshots `qwen3.7-max-2026-05-20`, `qwen3.7-plus-2026-05-26`, vision-updated `qwen3.7-max-2026-06-08`). **Flag:** site 128K/text-only meta is stale — Max API is 1M (text-only May snapshots; vision added 2026-06-08); Plus is 1M multimodal from the start.
- **Context window:** 1,000,000 tokens (Max & Plus Model Studio: ~991,808 usable input, 131,072 output; thinking CoT 262,144).
- **Modalities:** Max May snapshots: text in only; Max 2026-06-08+: image understanding added; Plus: text/image/video in, text out; thinking mode; tool calls; JSON/structured; web search; context caching; batch (Plus: batch unsupported per docs table — noted).
- **Pricing (as of 2026-09-23):** Max $2.50 / $7.50 per 1M in/out (prior public rows); Plus ~$0.40 / $1.60 per 1M class (budget multimodal agent rows). Paid API; Token Plan credits. CN vs intl tiers separate.
- **Architecture:** proprietary (params undisclosed for Max/Plus API models); no open weights for the 3.7 generation (confirmed: no HF `Qwen/Qwen3.7-*`, no Ollama `qwen3.7` — betterclaw/codersera).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.
> Numbers below are primarily Qwen3.7-Max rows from the Qwen3.8-Max launch comparison table (OpenLM / qwen.ai blog) unless marked Plus.

Agent / tool use:

- Terminal-Bench 2.0-Terminus: **74.5%** Max (Qwen3.8 launch cross-table — Opus 4.8 84.6, Fable 84.6, Sol 88.8); Plus TB2.0-class: **64.0%** (OpenLM 27B/Plus comparison table)
- Terminal-Bench 2.0 (earlier Max row): **69.7%** (witho2 / betterclaw-era Max launch)
- Toolathlon Verified: **49.7%** Pass@1 Max (Qwen3.8 launch table — low vs 3.8-Max 72.5)
- SWE-bench Verified: **80.4%** Max (witho2 cross-table — "on par with Opus-4.6 Max 80.8, DS-V4-Pro Max 80.6"; harness-specific high row)
- CoWorkBench: **64.6%** Max / **65.1%** Plus; JobBench: **31.3%** Max / **27.6%** Plus; SkillsBench: **61.2%** Max (Qwen launch tables)
- Agents' Last Exam: **Pass 11.8 / Score 31.1** Max; Automation-Bench Pass@1 **14.2%** Max (Qwen3.8 launch table — weak long-horizon vs 3.8)
- AndroidBench: **56.5%** Max; Plus ScreenSpot-Pro GUI grounding: **79.0** (betterclaw Plus row)
- GDPval-AA / MCP Atlas / OSWorld / Claw-Eval: **no verified public score found** for 3.7 ids in rows reviewed

Reasoning / knowledge:

- GPQA Diamond: **92.4%** Max (Qwen3.8 launch cross-table — beats Opus-4.6 91.3); Plus GPQA-class: **90.3%** (OpenLM Plus row)
- HLE: **41.4%** no tools / **53.5%** with tools Max (Qwen launch); Plus HLE: **34.7%** (OpenLM)
- HMMT 2026 Feb: **97.1%** Max; IMOAnswerBench: **90** Max; Apex: **44.5** Max (Qwen3.7-Max blog / alibabacloud)
- IFBench: **79.1%** Max; SuperGPQA: **73.6** Max; WMT24++: **85.8**; MAXIFE: **89.2** (Max blog)
- IFBench: **79.1%** also Plus (OpenLM); AA Intelligence Index / ARC-AGI: **no verified public score found**

Coding:

- SWE-bench Pro: **60.6%** Max (Qwen launch — Opus 4.8 69.2, Fable 80.0); Plus SWE-Pro: **57.6%** (OpenLM)
- SWE-Multilingual: **78.3%** Max; SciCode: **53.5%** Max (alibabacloud blog)
- DeepSWE 1.1: **21.6%** Max (Qwen3.8 launch table — very weak vs 3.8-Max 56.6, Sol 73); NL2Repo: **47.2%** Max; FrontierSWE: **40.7%** Max; QwenSWEBench: **63.4%** Max
- LiveCodeBench: Plus **89.6%** (OpenLM — strong competitive coding on Plus row); Max LCB: **no verified public score found**
- Terminal-Bench 2.1 for 3.7-Max: **no separate row** in 3.7-Max blog (3.8-Max published 86.6; 3.7-Max used TB2.0 74.5 in 3.8 cross-table)

Long context:

- MRCR v2 256K (8-needle): **86.7%** Max (Qwen3.8 launch table — solid but below 3.8-Max 92.9)
- LongBench v2: **65.3%** Max; 1M API window documented

Multimodal:

- Max (June 8+ snapshot): image understanding added; Plus: text/image/video in (docs input modality table)
- MMMU-Pro: Plus **79.0%** (Qwen3.8 multimodal cross-table — Max multimodal row uses Plus as 3.7 representative)
- MathVision: Plus **90.3 / --**; BabyVision: Plus **64.7 / 70.4**; HLE-VL tools: Plus **25.6%** (Qwen multimodal table)
- Max May text-only snapshots: no vision — scoring uses June 8+/Plus multimodal capability for the generation

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.0 74.5 Max, SWE-V harness 80.4, ScreenSpot-Pro 79.0 Plus — solid agentic coding; capped hard by Toolathlon 49.7, ALE Pass 11.8, Automation 14.2, DeepSWE 21.6 (weak long-horizon vs 2026 field) and missing MCP/GDPval/OSWorld rows.
- **Reasoning: 90/100.** GPQA 92.4, HMMT 97.1, IMOAnswerBench 90, HLE 41.4/53.5-tools — elite science/math; capped by missing AA Index / ARC-AGI and HLE no-tools under Fable 53.3-class.
- **Context window: 95/100.** Full 1M API; MRCR 86.7@256K solid; not 100 (no ≥512K public retrieval row).
- **Multimodal: 80/100.** Image+video in on Plus/June-Max (75–90 band); MMMU-Pro 79.0, MathVision 90.3 — good but trails 3.8-Max MMMU 82.3 / top Sol 83; May Max snapshots still text-only (generation split noted).
- **Coding: 82/100.** SWE-V harness 80.4, SWE-Pro 60.6, SWE-Multi 78.3, LCB 89.6 (Plus) — strong coding; capped by DeepSWE 21.6 and FrontierSWE 40.7 far behind 3.8/Sol cluster.
- **Cost efficiency: 76/100.** Max $2.50/$7.50 better than $3/$15≈60 but worse than 3.8-Max $2/$6 and Grok 4.5 $2/$6; Plus ~$0.40/$1.60 row would score much higher — composite sits mid-high because Max is the named flagship of the generation.
- **Overall Score: 85/100.** Mean of Tool 78 + Reasoning 90 + Context 95 + Multimodal 80 + Coding 82 = 425/5 = 85.0 → **85** (best-fit: 1M multimodal-or-text agent API when you need proven GPQA/HMMT-class science + solid SWE at $2.50/$7.50 Max — or Plus as budget multimodal GUI agent; accept weaker long-horizon (ALE/Automation/DeepSWE) vs Qwen3.8 generation).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (Qwen3.7-Max alibabacloud blog, Qwen3.8 launch cross-tables via OpenLM, Model Studio docs for Max/Plus pricing/context/modalities, betterclaw/codersera open-weights absence confirmation, opencode GitHub Zen protocol issues); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

