# Claude Sonnet 4.6 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-sonnet-4.6`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 — **LEGACY SKU (four generations behind)**
- **Short description:** Anthropic's Feb-2026 mid-tier flagship, default on claude.ai Free/Pro plans. **Now four generations behind** current lineup (Sonnet 5.5 → Sonnet 5 → Sonnet 4.6). BenchLM: 55.66/100, #71/1015, **Non-Reasoning** classification. **Context window CONFLICT:** 1M beta (Anthropic announcement + AA) vs **200K** (BenchLM + meta.json) — unresolved.
- **Provider / access:** Anthropic API (`claude-sonnet-4-6`), AWS Bedrock, Google Antigravity/Code Assist (with trial quota — one of few free-ish routes), OpenRouter. **No OpenCode Zen route.** Messages API. Default chat model on claude.ai Free/Pro (chat product, not API free tier).
- **Release / knowledge:** 2026-02-17 release; knowledge cutoff **not restated by Anthropic** for this legacy SKU.
- **IDs:** `claude-sonnet-4-6` (Anthropic API, Bedrock, OpenRouter). **No API Free tier.**
- **Context window:** **CONFLICT — 1,000,000 tokens beta** (Anthropic announcement + AA) vs **200,000 tokens** (BenchLM + meta.json) — **unresolved**. Max output not restated; **not in 300K Batch list.**
- **Modalities:** Text, image input; text output. **Non-Reasoning** per BenchLM.
- **Pricing (as of 2026-11-08):** $3.00/M in, $15.00/M out (Anthropic, unchanged from Sonnet 4.5). Blended AA $2.31/M (7:2:1, 90% cache discount). **Sonnet 5.5 costs $2/$10** — less than half for 26 more BenchLM points. Antigravity/Code Assist trial quota provides limited free-ish route.
- **Architecture:** Proprietary, closed weights; parameters undisclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Anthropic sources. **Major conflict:** Step 5 Preview (Overall 62) vs GLM 5.3 Flash (85.6) vs Average of 30 qualifying raters (86.7). Step 5 weights independent measurements; GLM/average favor vendor+max-effort readings. **Context window conflict (1M vs 200K) is critical.**

Agent / tool use:

- Claw-Eval: **67.8%** — one of three measured in research series; **2nd best** (Step 5 / GLM)
- OSWorld-Verified: **72.1%** (OSWorld-Verified leaderboard) / **72.5%** (System Card) — **conflicts with OSWorld 2.0 paper: 8.3%** (different harness) (Step 5 / GLM)
- τ²-Bench: **79.5%** (AA) / **79.5%** (Step 5 / GLM)
- Terminal-Bench 2.0: **59.1%** (System Card, max effort) / **57.3%** (Vals TB 2.1) — far under 88%+ frontier reference; **note: 2.0 harness**
- CyberGym: **65.2%** / Gert Labs: **62.92%** / JobBench: **36.9%**
- ApprenticeBench: **2%** / MazeBench: **0%** (ASCII mode) / OSWorld 2.0: **8.3%** (paper, different harness) / OSWorld 2.0: **8.3%** (Step 5)
- **Terminal-Bench 4.0 / τ³-Banking / GDPval-AA / MCP-Atlas / BrowseComp / Toolathlon / ALE: no verified public score found** (Step 5 / GLM)
- GDPval-AA / MCP-Atlas: **no verified public score found** (GLM)
- AA Intelligence Index: **24.7** (AA current board) / **24.7%** (Step 5)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (System Card) / **85.6%** (Vals) / **79.9%** (AA) — **fails 90%+ reference on both Vals and AA**
- HLE: **49.0%** (System Card) / **13.3%** (AA-HLE, non-reasoning base) — **35.7-point vendor-vs-independent gap, largest in batch** (Step 5)
- AA Intelligence Index: **24.7** (AA current board) / **24.7%** (Step 5)
- ARC-AGI-2: **58.3%** (ARC Prize verified, Sonnet 4.6 Max) — slightly below 60.4% vendor claim (GLM) / **58.3%** (Step 5)
- ARC-AGI-1: **86.0%** (ARC Prize verified Max)
- FrontierMath v2: Tiers 1–3 **32.4%** / Tier 4 **8.3%** (Epoch AI) / **8.3%** (Step 5) — **very weak**
- CritPt: **0.9%** (AA) — **lowest measured in research series** (Step 5 / GLM)
- AA-LCR: **68.3%** (AA) / **68.3%** (Step 5) — mid
- AA-Omniscience: index **−3.5**, accuracy **38.6%**, hallucination **68.5%** (AA) — negative index (Step 5)
- SuperGPQA: **95%** (Qwen3.6-Plus) / MMLU-Pro: **87.3%** (Vals) / **79.2%** (Qwen table — conflict) (GLM)
- AA-IFBench: **41.2%** (GLM, NEW, weak)
- **FrontierMath / MRCR: no verified public score found** (Step 5 / GLM)

Coding:

- SWE-bench Verified: **79.6%** (System Card) / **77.4%** (Vals) — 2.2-point gap, both respectable (Step 5 / GLM)
- LiveCodeBench (Vals): **82.1%** (Vals) / **82.1%** (Step 5 / GLM)
- React Native Evals: **80.6%** / SWE-Rebench: **60.7%** / Vibe Code Bench: **51.5%** (Vals v1.1) (Step 5 / GLM)
- CursorBench 3.1: **48.8%** / FrontierCode 1.1 Main: **24.3%** (Cognition) — weak (Step 5 / GLM)
- **AA-SciCode / DeepSWE / AA Coding Index / SWE-bench Pro: no verified public score found** (Step 5 / GLM) — so 55%/74%/70% references unmeasured

Multimodal:

- CharXiv: **77.4%** (System Card) / **77.4%** (Step 5)
- AA-MMMU-Pro: **70.6%** (AA) / **70.6%** (Step 5)
- Design Arena: **1,283 Elo** (OpenRouter) / **1,283** (Step 5) / **1,291** (GLM)
- MMMU-Pro / ExtractBench / ParseBench / BabyVision / ZeroBench: **no verified public score found** (Step 5)

Long context:

- **CONTEXT WINDOW CONFLICT:** **1M beta** (Anthropic announcement + AA) vs **200K** (BenchLM + meta.json) — **unresolved** (GLM / Step 5)
- AA-LCR: **68.3%** (AA) / **68.3%** (Step 5 / GLM) — mid
- **MRCR / RULER: no verified public score found for 4.6** (Step 5 / GLM)
- **Not in 300K Batch list** (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Synthesizing 2 recent qualified raters + 30-rater average (86.7 Overall). **Major conflict:** Step 5 Preview (62) vs GLM 5.3 Flash (85.6) vs Average (86.7). Step 5 weights independent measurements (AA-HLE 13.3%, CritPt 0.9%, AA-Omniscience −3.5); GLM/average favor vendor+max-effort. **Context window conflict (1M vs 200K) is critical.** Average of 30 qualifying raters strongly favors GLM (Step 5 excluded from top 10).

- **Tool use: 72/100.** (was 55) Claw-Eval **67.8%** (2nd best in series), OSWorld-Verified **72.1%**, τ²-Bench **79.5%**, CyberGym **65.2%**, TB 2.0 **59.1%** / TB 2.1 **57.3%** (far under 88% frontier). **Capped by:** no TB 4.0, no GDPval-AA, no MCP-Atlas/Toolathlon/BrowseComp/τ³-Banking/ALE, OSWorld 2.0 **8.3%** (different harness), ApprenticeBench **2%**, MazeBench **0%**, JobBench **36.9%**.
- **Reasoning: 75/100.** (was 70) GPQA Diamond **89.9%** (vendor, near 90%) / **85.6%** (Vals) / **79.9%** (AA), HLE **49.0%** (vendor) / **13.3%** (AA-HLE, **35.7-pt gap**), ARC-AGI-2 **58.3%**, ARC-AGI-1 **86.0%**, SuperGPQA **95%**, MMLU-Pro **87.3%**. **Capped by:** AA-HLE **13.3%** (fails 40% ref), **CritPt 0.9% (lowest in series)**, AA Intelligence Index **24.7**, AA-Omniscience index **−3.5 / hallucination 68.5%**, FrontierMath T4 **8.3%**, AA-IFBench **41.2%**, no FrontierMath/MRCR.
- **Context window: 78/100.** (was 70) **CRITICAL CONFLICT:** 1M beta (Anthropic/AA) vs 200K (BenchLM/meta.json). **If 1M:** 95–100 tier; **if 200K:** 65–75 tier. **AA-LCR 68.3%** (mid). **No MRCR/RULER/GraphWalks.** **Not in 300K Batch.** Scored at 200K tier floor (70) + partial credit for 1M claim = 78. **Unresolved conflict dominates uncertainty.**
- **Multimodal: 76/100.** (was 65) Text + image in; CharXiv **77.4%**, AA-MMMU-Pro **70.6%**, Design Arena **1,283 Elo**. No video/audio/PDF. **Scored at top of +image-only 60-70 band** due to CharXiv/Design Arena depth. Capped by AA-MMMU-Pro 70.6%, no ExtractBench/ParseBench/ZeroBench.
- **Coding: 80/100.** (was 73) SWE-bench Verified **79.6%** / **77.4% Vals** (2.2-pt gap), LiveCodeBench **82.1%** (Vals), React Native **80.6%**, SWE-Rebench **60.7%**. **Capped by:** Vibe Code **51.5%**, CursorBench 3.1 **48.8%**, FrontierCode 1.1 **24.3%**, **no AA-SciCode/DeepSWE/AA Coding Index/SWE-Pro**.
- **Cost efficiency: 65/100.** (was 65) $3/$15 maps to methodology ~60 anchor. **Antigravity/Code Assist trial quota** provides limited free-ish route. **Drawn down because Sonnet 5.5 costs $2/$10** (1/3 price for 26 more BenchLM points) — strictly dominated on price-per-capability. No API free tier.
- **Overall Score: 76/100.** (was 67) Half-up mean of (72 + 75 + 78 + 76 + 80) / 5 = 381 / 5 = 76.2 → **76**. **Below average of 86.7 from 30 qualifying raters.** Best-fit: **Legacy mid-tier Sonnet with solid repair-coding (SWE-V 79.6%, LCB 82.1%) but severe independent measurement gaps** (AA-HLE 13.3%, CritPt 0.9%, AA-Omniscience −3.5, FrontierMath 8.3%, no TB 4.0/DeepSWE). **Context window conflict (1M vs 200K) dominates uncertainty.** Dominated by Sonnet 5.5 ($2/$10, 81.89 BenchLM, 1M context). Migrate unless pinned for compatibility; Antigravity trial quota is only reason to run.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 62), GLM 5.3 Flash (2026-11-05, Overall 85.6) + official Anthropic sources (Sonnet 4.6 system card, models overview page, pricing). **Critical conflicts documented:** Step 5 vs GLM/average (62 vs 85.6/86.7); Context window (1M beta vs 200K BenchLM/meta.json); AA-HLE 13.3% vs vendor 49% (35.7-pt gap); CritPt 0.9% (lowest in series); AA-Omniscience −3.5; FrontierMath T4 8.3%; no TB 4.0/DeepSWE/MRCR.
- Reference URLs:
  - [Anthropic — Introducing Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)
  - [Anthropic — Claude Sonnet 4.6 System Card](https://www.anthropic.com/claude-sonnet-4.6-system-card)
  - [Anthropic — Models Overview (legacy status, modality)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [BenchLM — Sonnet 4.6 (55.66/100, #71/1015, 40 rows, Non-Reasoning)](https://benchlm.ai/models/claude-sonnet-4-6)
  - [Artificial Analysis — Sonnet 4.6](https://artificialanalysis.ai/models/claude-sonnet-4-6)
  - [Vals AI — Sonnet 4.6](https://www.vals.ai/models/anthropic_claude-sonnet-4-6)
  - [ARC Prize — Sonnet 4.6](https://arcprize.org/leaderboard)
  - [Claw-Eval Leaderboard](https://claw-eval.github.io/)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---