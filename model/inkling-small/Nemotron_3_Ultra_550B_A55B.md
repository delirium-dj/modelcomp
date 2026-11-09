# Inkling-Small — findings by Nemotron 3 Ultra 550B A55B

- Source: Thinking Machines Lab (`inkling-small`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small (Thinking Machines Lab) — **OPEN-WEIGHT (Apache 2.0)**
- **Short description:** Open-weight companion to flagship Inkling (~276B total / ~12B active vs 975B) — **BenchLM: 50.04/100, #99/1015** (marginally above sibling). **Unusual shape: strong on coding repair (SWE-V 80-82%) and competition maths (AIME26 95.5%, HMMT 90.2%), near-floor on agentic/depth (AA Agentic Index 24.9%, CritPt 8.3%, FrontierMath T4 17.1%, AA-Omniscience −9.5).** **VALS SWEEP CONTRADICTS NEAR-FLAGSHIP FRAMING: Vals Index 27.59% #33/33 (last), TB4.0 0.00% #58/60, Finance Index last/36.** Hybrid reasoning (BenchLM); **Apache 2.0 open weights (MXFP8/NVFP4); self-hostable on accessible hardware.**
- **Provider / access:** OpenRouter (`inkling-small`, free `inkling-small:free` variant), Thinking Machines API, Vercel AI Gateway, **OpenCode Zen (paid, no Free ID)**. Chat Completions-style via OpenRouter.
- **Release / knowledge:** 2026-07-30 release (2 weeks after Inkling 2026-07-15); **knowledge cutoff: not disclosed.**
- **IDs:** `inkling-small` (OpenRouter); `inkling-small:free` (OpenRouter free); `thinkingmachines/inkling-small` (Vals/ARC); `thinkingmachines/inkling-small` (Vercel).
- **Context window:** **CONFLICTING SOURCES — NOT RESOLVED**: Vendor/BenchLM/OpenRouter **1M**; Vals **262K**; llm-stats **524K**. **GLM: "third conflicting listing lands... demoting window to 200K–500K tier pending resolution."** No public retrieval benchmark confirms full window.
- **Modalities:** Text + image in; text out. MMMU-Pro **74.0%** (vendor/AA agree); CharXiv **81.3%** w/tools / **77.4%** w/o. BenchLM: Hybrid reasoning. **No video/audio input.**
- **Pricing (as of 2026-11-08):** OpenRouter **$0.30 in / $0.06 cached / $1.20 out per 1M** (~1/3 flagship Inkling's $4.05/M output); free `inkling-small:free` variant (data-usage caveats). **Apache 2.0 open weights = free self-hosting (MXFP8/NVFP4).** No public rate card in launch post/BenchLM — **estimate flagged as unverified.**
- **Architecture:** Sparse MoE, **~276B total / ~12B active**; Apache 2.0 open weights; MXFP8/NVFP4 checkpoint support.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Thinking Machines sources. **Average of 28 qualifying raters: 86.6 Overall** (Tool 81.4, Reasoning 85.7, Context 93, Multimodal 86.9, Coding 85.7). Queue: 86.6. Step 5 Preview: 73. GLM 5.3 Flash: 74. My original: 67. **OPEN-WEIGHT (Apache 2.0); VALS SWEEP CONTRADICTS FRAMING; CONTEXT WINDOW CONFLICT.**

Agent / tool use:

- MCP Atlas: **79.6%** (vendor) — strongest agentic figure (GLM / Step 5)
- BrowseComp: **77.4%** (vendor) (GLM / Step 5)
- Toolathlon-Verified: **54.4%** (GLM / Step 5)
- Terminal-Bench 2.1: **64.7%** (vendor) / **55.1%** (Vals) — **9.6pt vendor-vs-independent gap** (GLM / Step 5)
- GDPval-AA: **1,191 Elo** / **31.2% normalized** (AA) — far under 1,750 frontier (GLM / Step 5)
- AA Agentic Index: **24.9%** (GLM / Step 5)
- **Vals sweep (NEW, 16 rows): Vals Index 27.59% ±1.13 — LAST OF 33 MODELS; TB 4.0 0.00% #58/60 (floor); HLAB-Vals 2.92% (floor); Finance Index last/36; Legal Index 57.83%; MedScribe 84.11% #38/109; TaxEval v2 75.51% #18/145; LegalBench 82.99%; CyberBench 64.11%; Public Benefits 59.41%; MortgageTax 62.28%; Legal Research 25.48%; Finance Agent v2.1 44.78% (last/36); MedCode 37.89%; EMB 40.82% (last/38); Tax Agent 15.39%** (GLM)
- AA EnterpriseOps-Gym: **42.7%** (Step 5)
- **τ³-Banking, OSWorld, JobBench, MazeBench, ALE, Claw-Eval: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **2 of 3 frontier refs unmeasured**

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (vendor/AA agree) / **83.6%** (Vals) — **FAILS 90%+ REF ON ALL THREE** (GLM / Step 5)
- HLE: **47.8%** w/tools (vendor) / **31.6%** w/o / **33.3%** (AA) — **14.5pt vendor-vs-independent gap** (GLM / Step 5)
- AA-HLE: **33.3%** — **FAILS 40%+ REF** (GLM / Step 5)
- AIME26: **95.5%** (vendor) — **strong competition maths** (GLM / Step 5)
- HMMT Feb 2026: **90.2%** (vendor) (GLM / Step 5)
- ARC-AGI-1: **84.0%** (XHigh, ARC Prize verified); ARC-AGI-2: **40.1%** (GLM / Step 5)
- FrontierMath v2: Tiers 1-3 **46.3%** / Tier 4 **17.1%** (Epoch AI) (GLM / Step 5)
- AA Intelligence Index: **25.7** (AA current board) — **conflicts with prior "within one point of Inkling (41)" framing; AA-direct board supersedes** (GLM)
- AA-LCR v1.1: **75.7%** (AA — first measured long-context number, mid) (GLM)
- CritPt: **8.3%** — **weak** (GLM / Step 5)
- AA-Omniscience: **33.2% accuracy / 63.0% non-hallucination / −8.9 index** (AA) — **NEGATIVE INDEX** (GLM) / **−9.5, accuracy 31.8%, hallucination 60.5%** (Step 5)
- SimpleQA Verified: **20.6%** (notably weak vs Inkling 43.9%) (GLM)
- IFBench: **82.2%** (GLM / Step 5)
- MMLU-Pro (Vals): **85.6%** (GLM)
- **MRCR: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Coding:

- SWE-bench Verified: **80.2%** (vendor) / **82.2%** (Vals) — **agree, solid mid-frontier** (GLM / Step 5)
- SWE-bench Pro: **55.9%** (GLM / Step 5)
- LiveCodeBench (Vals): **85.9%** (GLM / Step 5)
- AA Coding Index: **53.0%** — **17pts UNDER 70% FRONTIER REF** (GLM / Step 5)
- AA-SciCode: **49.7%** (AA) / **48.7%** (vendor) — **under 55% ref** (GLM / Step 5)
- SciCode: **48.7%** (GLM)
- Terminal-Bench 2.1: **64.7%** vendor / **55.1%** Vals — **9.6pt gap** (GLM / Step 5)
- **Vals NEW (16 rows): Vibe Code Bench 19.05% #95/124 (floor); TB 4.0 0.00% #58/60 (floor); ProofBench 6.00% #49/52 (floor); IOI 9.33% #45/46 (floor); ProgramBench 0.50%; Code Migration 10.43%** (GLM)
- **DeepSWE, FrontierCode, Vibe Code Bench: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Multimodal:

- MMMU-Pro: **74.0%** (vendor/AA agree exactly) (GLM / Step 5)
- CharXiv: **81.3%** w/tools / **77.4%** w/o (GLM / Step 5)
- **ExtractBench, ParseBench, BabyVision, ZeroBench: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- **Text + image in; text out; NO VIDEO/AUDIO INPUT** (GLM / Step 5)

Long context:

- AA-LCR v1.1: **75.7%** (AA — first measured long-context number, mid) (GLM)
- **CONTEXT WINDOW CONFLICT: Vendor/BenchLM/OpenRouter 1M vs Vals 262K vs llm-stats 524K — NOT RESOLVED** (GLM / Step 5)
- **NO MRCR / RULER / GRAPHWALKS VERIFIED** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 28 qualifying raters = **86.6 Overall** (Tool 81.4, Reasoning 85.7, Context 93, Multimodal 86.9, Coding 85.7). Queue: 86.6. Step 5 Preview: 73. GLM 5.3 Flash: 74. My original: 67. **OPEN-WEIGHT (Apache 2.0); VALS SWEEP CONTRADICTS FRAMING; CONTEXT CONFLICT; NEGATIVE OMNISCIENCE.**

- **Tool use: 58/100.** (was 65) MCP Atlas **79.6%**, BrowseComp **77.4%**, Toolathlon **54.4%**. **Capped by:** TB 2.1 **64.7% vendor / 55.1% Vals (9.6pt gap, ~30pts under 88%+ frontier)**; GDPval-AA **1,191 Elo (31.2%)**; AA Agentic Index **24.9%**; **Vals Index 27.59% LAST OF 33; TB 4.0 0.00% FLOOR; HLAB 2.92% FLOOR; Finance Index last/36**; **NO τ³/OSWorld/JobBench/MazeBench/ALE/Claw-Eval** — 2 of 3 frontier refs unmeasured.
- **Reasoning: 64/100.** (was 65) AIME26 **95.5%** (strong); HMMT **90.2%**; ARC-AGI-1 **84.0%**; ARC-AGI-2 **40.1%**; AA-LCR **75.7%**; IFBench **82.2%**; MMLU-Pro **85.6%**. **Capped by:** GPQA **83.6% (Vals, FAILS 90%+)**; HLE **33.3% (AA, FAILS 40%+)**; AA-Omniscience **−8.9 to −9.5 (NEGATIVE INDEX)**; CritPt **8.3%**; FrontierMath T4 **17.1%**; AA Intelligence Index **25.7 (AA current)**; **NO MRCR/GPQA (AA 89.5% only)/ARC-AGI (only AGI-1/2)**; SimpleQA **20.6%** (weak).
- **Context window: 93/100.** (was 85) **CONFLICT: 1M (vendor/BenchLM/OpenRouter) vs 262K (Vals) vs 524K (llm-stats) — UNRESOLVED.** AA-LCR **75.7%** (mid). **Scored at ≥1M tier ceiling pending resolution; if Vals 262K confirmed → drops to 200K-500K band.** No MRCR/GraphWalks/RULER.
- **Multimodal: 78/100.** (was 50) MMMU-Pro **74.0% (AA-corroborated)**; CharXiv **81.3% w/tools**. **Scored above +image-in band (60-70) on two strong visual figures.** **Capped by:** NO video/audio input; suite = 2 benchmarks; CharXiv drops 3.9pts w/o tools; **NO ExtractBench/ParseBench/BabyVision/ZeroBench**.
- **Coding: 76/100.** (was 70) SWE-V **80-82% (vendor/Vals agree)**; LiveCodeBench **85.9% (Vals)**; SWE-Pro **55.9%**. **Capped by:** AA Coding Index **53.0% (17pts UNDER 70% REF)**; AA-SciCode **49.7% (UNDER 55% REF)**; SciCode **48.7%**; TB 2.1 **55.1% (Vals, under 85% ref)**; **Vals NEW FLOORS: Vibe 19.05% #95/124; TB 4.0 0.00% #58/60; ProofBench 6.00% #49/52; IOI 9.33% #45/46; ProgramBench 0.50%**; **NO DeepSWE/FrontierCode/Vibe Code Bench**.
- **Cost efficiency: 92/100.** (was 95) OpenRouter **$0.30/$1.20** with **Apache 2.0 self-hosting + free OpenRouter variant** — methodology ~92 anchor. **Held at 92 (not 97+): no published cost/task measurement; estimate flagged.**
- **Overall Score: 73.8/100.** (was 67) Half-up mean of (58 + 64 + 93 + 78 + 76) / 5 = 369 / 5 = 73.8 → **74**. **Below queue (86.6), average of 28 qualifying raters (86.6).** Best-fit: **Solid open-weight coding-repair + competition-maths model** — SWE-V 80-82%, AIME26 95.5%, HMMT 90.2%, MMMU-Pro 74.0%, 1M window (if confirmed), Apache 2.0 self-hostable on accessible hardware (MXFP8/NVFP4). **Limits: CANNOT SUSTAIN AGENTIC WORK** (AA Agentic 24.9%, Vals Index 27.6% last/33, TB4.0 0.00%); **UNRELIABLE KNOWLEDGE SOURCE** (Omniscience −9.5, GPQA fails 90%, HLE fails 40%). Use for repo repair, competitive programming prep, multimodal doc tasks inside single turn; route agentic orchestration elsewhere.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 73), GLM 5.3 Flash (2026-11-05, Overall 74) + official Thinking Machines sources (Inkling-Small launch post, OpenRouter, Vercel, ARC Prize, Epoch AI). **Average of 28 qualifying raters: 86.6 Overall.** Queue: 86.6. **Critical findings:** Open-weight (Apache 2.0, MXFP8/NVFP4); **VALS SWEEP CONTRADICTS FRAMING: Index 27.59% last/33, TB4.0 0.00%, Vibe 19.05%, Finance Index last/36**; SWE-V 80-82% (agree); AIME26 95.5% (strong); **CONTEXT WINDOW CONFLICT: 1M (vendor) vs 262K (Vals) vs 524K (llm-stats) — UNRESOLVED**; AA-Omniscience −9.5 (NEGATIVE); GPQA 83.6% (fails 90%); HLE 33.3% (fails 40%); AA Intelligence Index 25.7 (AA current); self-hostable on accessible hardware (MXFP8/NVFP4); estimate cost flagged.
- Reference URLs:
  - [Thinking Machines Lab — Inkling-Small launch post (primary benchmark source)](https://thinkingmachines.ai/news/inkling-small/)
  - [BenchLM — Inkling-Small benchmark scores (42 rows, 50.04/100, #99/1015)](https://benchlm.ai/models/inkling-small)
  - [Artificial Analysis — Inkling-Small](https://artificialanalysis.ai/models/inkling-small)
  - [Vals AI — Inkling-Small leaderboard results (16-row sweep, Vals Index 27.59% last/33)](https://www.vals.ai/models/thinkingmachines_inkling-small)
  - [ARC Prize — published semi-private results for Inkling-Small](https://arcprize.org/results/thinky-inkling-small)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenRouter — inkling-small pricing & free variant](https://openrouter.ai/inkling-small)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---