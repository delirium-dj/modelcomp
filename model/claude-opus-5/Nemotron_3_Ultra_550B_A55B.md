# Claude Opus 5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (Max effort tier) — **LEGACY SKU**
- **Short description:** Anthropic's July 2026 frontier Opus-tier agentic coding/knowledge-work model, **now superseded by Opus 5.5 (Sep 2026)** but still served on all platforms. Listed under "Legacy models (still available)" on Anthropic's models overview. SWE-bench Verified 96-97% (highest in research series), IMO 2026 42/42 perfect, ARC-AGI-3 30.2% (quadrupling baselines). BenchLM: 79.68/100, #10/1009 (104 benchmarks).
- **Provider / access:** Anthropic Messages API (`claude-opus-5`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry, AWS, OpenCode Zen (`opencode/claude-opus-5` at $5/$25/$0.50). **Only Anthropic model at this tier on Zen** (no Opus 5.5 legacy route). Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-07-24 release; **reliable knowledge cutoff: May 2026** (training data cutoff May 2026). Retirement committed not sooner than 2027-07-24.
- **IDs:** `anthropic/claude-opus-5` (all platforms). No Free tier.
- **Context window:** 1,000,000 tokens total (1M — **lineage inference**: BenchLM records "Coming soon" for this SKU; Anthropic's current lineup omits Opus 5); max output 128K synchronous, **300K on Message Batches API** with `output-300k-2026-03-24` beta header (explicitly listed for Opus 5).
- **Modalities:** Text, image, **PDF input** (incl. PDF via platform document support); text output. No audio/video. Adaptive thinking always on; default effort `high`. Tool calls: yes (client/server-side: bash, code execution, computer use, text editor, MCP; **no web fetch tool**). JSON/structured outputs: yes.
- **Pricing (as of 2026-11-08):** $5.00/M in, **$0.50/M cache read** (10% of base), $6.25/M (5m) / $10/M (1h) cache write, $25.00/M out. Batch 50% off ($2.50/$12.50). Fast mode ≈2.5× speed at 2× price ($10/$50). No free tier. No data-retention requirement for general API access. Cost/task: TB4.0 high (Vals).
- **Architecture:** Proprietary, closed weights; parameter count undisclosed. Effort-steerable adaptive reasoning; safety-classifier fallback to Opus 4.8 available.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 3 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-02, Gemini 3.8 Flash 2026-10-20) + official Anthropic sources. **Legacy status confirmed: superseded by Opus 5.5.**

Agent / tool use:

- aaTerminalBench21: **89.1%** (AA) / **84.6%** (Vals) — clears 88%+ frontier reference on AA harness
- GDPval-AA v2: **1,862 Elo** (Anthropic System Card) / **1,861 Elo** (AA, max effort — highest at release, >100 Elo ahead of Fable 5, GPT-5.6 Sol) / **61.1%** normalized (AA) — clears 1,750+ frontier reference
- BrowseComp: **90.8%** (System Card) / **93.6%** (10-agent prerelease) — strongest in batch
- DeepSearchQA: **95.0%** (Anthropic announcement)
- DRACO: **88.6%** (System Card)
- MCP-Atlas: **85.8%** (System Card, claim coverage 89.1%) / **no verified public score found** (GLM 5.3 Flash)
- OSWorld 2.0: **70.6%** (System Card) / **70.6%** (Step 5 Preview / Gemini 3.8 Flash)
- OSWorld 2.1: **74.0%** (Opus 5.5 system-card comparison) / **74.0%** (GLM 5.3 Flash)
- Toolathlon Verified: **80.6%** (System Card) / **73.1%** verified pass, 23.5 avg turns (GLM 5.3 Flash) / **80.6%** Pass@3 87.0%, Pass³ 73.1%, mean 23.5 turns (Step 5 Preview)
- AA Harvey LAB v1.0: **93.5%** (AA) / **93.5%** (Step 5 Preview)
- AA Agentic Index: **56.2%** (AA) / **56.2%** (Step 5 Preview)
- AA Briefcase Elo: **1,720** (System Card)
- LAB criterion-pass: **93.74%** (Anthropic harness) / **94.1%** (Harvey held-out) but all-pass only **23.58%** / **11.7%** — 4x gap (Step 5 Preview)
- Terminal-Bench 4.0: **53.9% ±3.2%** (tbench.ai official, Claude Code, xhigh, rank 6) / **53.5%** (Vals AI, Mini-SWE-agent, rank 10) / **64.8% ±3.1** (tbench.ai public board, native agent) — **behind Opus 5.5 (66.4/59.6%) and Qwen 3.8 Max on tau3**
- Terminal-Bench 3.0: **42.7%** (Frontier-Bench) / **43.3%** (BenchmarkList)
- Terminal-Bench-Science 0.1: **30.0%** (public leaderboard, ±3.5-5 pts) / **29.0%** (Anthropic reproduction) / **27.1%** (Vals AI) — **weak**
- Tau3-Banking: **48.7%** (taubench.com, banking_knowledge pass^1, Sierra, max effort, #2 behind Qwen 3.8 Max 55.2%) / **44.7%** (AA via BenchmarkList) / **44.0%** (Mercor half-duplex, max reasoning)
- GDPval-AA v2: **1,861 Elo** (AA, max effort — highest at release) / **61.1%** normalized (AA)
- BrowseComp: **90.8%** / **93.6%** (10-agent prerelease)
- AutomationBench (Zapier): **26.0%** (System Card) — Anthropic claims ~1.5× next-best at same cost
- Terminal-Bench 2.1: **84.6%** (Vals, effort high; 81.3% when fallback-assisted = failures) / **89.1%** (BenchmarkList, 97th pct) / **89.1%** (AA)
- Frontier-Bench v0.1: **43.3%** (Anthropic announcement/DataCamp, mini-SWE-agent, mean over 5 attempts — SOTA at release, >2× Opus 4.8's 18.7%)
- OSWorld 2.1: **74.0%** (Opus 5.5 comparison table) / **74.0%** (GLM 5.3 Flash)
- AA AnalystAgent: **53.8%** / AA EnterpriseOps-Gym: **47.5%** (Step 5 Preview)
- ApprenticeBench: **36%** / MazeBench: **12%** / DeepsecBench-AA: **25.9%** (Step 5 Preview)
- LAB legal agentic: criterion-pass **93.74%** / held-out **94.1%** but all-pass **23.58%** / **11.7%** (4x gap) — Step 5 Preview
- τ³-Banking / Claw-Eval: **no verified public score found** (Step 5 Preview / GLM 5.3 Flash)

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (AA) / **93.4%** (Vals) / **93.4% ±1.2** (Vals, rank 8/138, effort max) — clears 90%+ frontier reference
- HLE: **64.7%** with tools (System Card) / **63.6%** (BenchmarkList, 89th pct) / **56.3%** no tools / **54.9%** AA-HLE (AA) — clears 40%+ frontier reference
- ARC-AGI-1: **97.5%** (ARC Prize semi-private) / **97.5%** (BenchmarkList)
- **ARC-AGI-2: 90.4%** (ARC Prize semi-private) / **90.4%** (Step 5 Preview)
- **ARC-AGI-3: 30.2%** (ARC Prize semi-private) / **~3× next-best claim at release** (GLM 5.3 Flash) — **only model with verified ARC-AGI-3 score in series; quadrupled previous baselines**
- AA Intelligence Index: **51** (rank #17/217, AA v4.3.2 recalibrated) / **50.8** (Step 5 Preview) / **61** at release (AA article 2026-07-24, #1 then, ahead of Fable 5 max 60, GPT-5.6 Sol 59, Kimi K3 57) — **recalibrated from #1 (61) to #18 (51)**
- CritPt: **29.1%** (AA) / **no verified per-benchmark score** (GLM 5.3 Flash)
- FrontierMath v2: Tier 4 **73.171%** / Tiers 1-3 **85.614%** (Epoch AI) / **73.2% / 85.6%** (Step 5 Preview / GLM 5.3 Flash)
- IMO 2026: **42/42 — PERFECT SCORE** (System Card) / **only perfect score in research series** (Step 5 Preview)
- MMLU-Pro: **91.6%** (Vals) / **91.6%** (Step 5 Preview / GLM 5.3 Flash)
- MMMU-Pro: **84.7%** (AA) / **89.9%** (Vals, #2/93) — GLM 5.3 Flash
- Chartography: **83.0%** with tools / **29.6%** no tools (System Card) / **83.0% / 29.6%** (Step 5 Preview) — striking tool-dependence gap
- BenchCAD Vision2Code: **0.821** with tools / **0.366** no tools (System Card) — striking tool-dependence gap
- GDP.pdf: **85.5%** with tools / **83.4%** no tools (System Card) — **strongest document reasoning in batch**
- LABBench2: **84.2%** (Google DeepMind) / **84.2%** (Step 5 Preview / GLM 5.3 Flash)
- BioMysteryBench: solvable **90.1%** / difficult **49.4%** (System Card)
- HealthBench: raw **67.1%** / length-adj **57.8%** / Professional **59.8%** / Professional raw **73.4%** (System Card)
- ArXivMath: **90.8%** no tools / **91.3%** with tools (System Card)
- RiemannBench: **60.0%** no tools / **79.0%** with tools (System Card) / **79.0%** (GLM 5.3 Flash)
- AA-LCR: **79.3%** (AA) / **79.3%** (Step 5 Preview)
- MLCR-AA: **55.6%** (AA)
- **MRCR / RULER: no verified public score found** (GLM 5.3 Flash / Step 5 Preview) — **but** GDM-MRCRv2 (8-needle) at 128K: **91.3% #3/184**, AUC@128K **97.5% #1** (Context Arena, max effort) — **strong short-range retrieval evidence**
- GraphWalks BFS 1M / MRCR at 1M: **no verified public score found** (GLM 5.3 Flash)
- AA-Omniscience: index 37.1, accuracy 60.9%, hallucination **60.8%** (AA) / **60.8%** (Step 5 Preview)

Coding:

- SWE-bench Verified: **96%** (System Card) / **97.0% ±0.8 rank 1/88** (Vals AI) — **highest verified SWE-bench figure in research series**
- SWE-bench Pro: **79.2%** (System Card) / **79.2%** (Step 5 Preview / GLM 5.3 Flash) — ~10.7 pp behind Opus 5.5 (89.9%)
- SWE-bench (Vals): **97.0%** (Vals leaderboard) / **97.0%** (Step 5 Preview)
- LiveCodeBench: **89.0% ±0.9 rank 4/143** (Vals) / **89.0%** (Step 5 Preview / GLM 5.3 Flash)
- AA Coding Index: **78.0%** (Anthropic blog) / **78** (joint #1 at release with Claude Code xhigh) / **78.0%** (Step 5 Preview / GLM 5.3 Flash) — clears 70%+ frontier reference
- AA-SciCode: **56.4%** (AA) / **56.4%** (Step 5 Preview / GLM 5.3 Flash) — clears 55%+ reference
- DeepSWE: **68.8%** (System Card) / **68.8%** (Step 5 Preview / GLM 5.3 Flash) — **5.2 pts under 74% frontier reference**
- FrontierCode 1.1: **53.4%** main / **63.6%** extended (System Card) / **53.4% / 63.6%** (Step 5 Preview / GLM 5.3 Flash)
- **FrontierCode 2.0: 26.7%** (Step 5 Preview) — weak
- FrontierSWE v2: **52.0%** (Proximal) / **52.0%** (Step 5 Preview / GLM 5.3 Flash)
- ProgramBench: **93.0%** (System Card, episode 1: 83.0%) / **93.0%** (Step 5 Preview)
- VulcanBench v3: **87.0%** / **87.0%** (Step 5 Preview)
- **VulcanBench CII v1: 96.4%** (VulcanBench report) / **96.4%** (Step 5 Preview / GLM 5.3 Flash)
- CursorBench 3.2: **70.0%** / **CursorBench 4.0: 46.6%** (Cursor evals) / **46.6%** (Step 5 Preview / GLM 5.3 Flash)
- Vibe Code Bench v1.1: **88.4%** (Vals) / **88.4%** (GLM 5.3 Flash)
- IOI: **84.3% ±10.0** (Vals) / **91.7%** (Vals IOI v1) — GLM 5.3 Flash
- Android Bench: **91.8% (87.4-95.7) rank 1/46** (BenchmarkList) — GLM 5.3 Flash
- Bug Hunt Bench: **27.0 fixes** (public data)
- PostTrainBench v1.1: **35.0%** (PostTrainBench leaderboard)
- ScarfBench: **69.8%** (GLM 5.3 Flash)

Multimodal:

- MMMU-Pro: **84.7%** (AA) / **89.9%** (Vals, #2/93) — GLM 5.3 Flash
- Chartography: **83.0%** with tools / **29.6%** no tools (System Card) / **83.0% / 29.6%** (Step 5 Preview) — striking tool-dependence gap
- BenchCAD Vision2Code: **0.821** with tools / **0.366** no tools (System Card) — striking tool-dependence gap
- GDP.pdf: **85.5%** with tools / **83.4%** no tools (System Card) — **strongest document reasoning in batch**
- OfficeQA: **78.1%** / Pro: **66.9%** (System Card)
- Design Arena Website: **1,309 Elo** (OpenRouter) / **1,309** (Step 5 Preview)
- SWE Multimodal: **59.4%** (System Card) / **59.4%** (Step 5 Preview / GLM 5.3 Flash)
- OSWorld 2.1: **74.0%** partial computer use (Opus 5.5 comparison)

Long context:

- AA-LCR: **79.3%** (AA) / **79.3%** (Step 5 Preview)
- MLCR-AA: **55.6%** (AA)
- **MRCR / RULER: no verified public score found for Opus 5** (GLM 5.3 Flash / Step 5 Preview) — BenchLM records "Coming soon" for this SKU
- **BUT**: GDM-MRCRv2 (8-needle) at 128K: **91.3% #3/184**, AUC@128K **97.5% #1** (Context Arena, max effort, 1M-token model) — **strong short-range retrieval evidence**
- GraphWalks BFS 1M / MRCR at 1M: **no verified public score found** (GLM 5.3 Flash)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Scores updated based on 3 recent qualified raters + official sources. **Legacy status confirmed: superseded by Opus 5.5.** Key changes: Tool use ↑ (aaTerminalBench21 89.1% AA #1, GDPval 1862 Elo #1 at release), Reasoning ↑ (ARC-AGI-3 30.2% only verified in series, IMO 42/42 perfect, GPQA 93.4%, ARC-AGI-2 90.4%), Context ↑ (MRCRv2 91.3% at 128K AUC 97.5% #1, 300K Batch output), Multimodal ↑ (MMMU-Pro 89.9% Vals, PDF input confirmed, GDP.pdf 85.5% strongest doc reasoning), Coding ↑ (SWE-bench Verified 96-97% highest in series, VulcanBench CII 96.4%, Android Bench 91.8% #1). Conflicts: Context window 1M is lineage inference (BenchLM "Coming soon"); no MRCR at 1M; AAII recalibrated from #1 (61) to 51 (#18); DeepSWE 68.8% under 74% ref; FrontierCode 2.0 26.7%; CursorBench 4.0 46.6%; cost efficiency low ($5/$25).

- **Tool use: 95/100.** (was 88) **Best tool-use profile in research series** — aaTerminalBench21 89.1% AA (clears 88% frontier), GDPval-AA 1862 Elo (clears 1750+ frontier, #1 at release), MCP-Atlas 85.8%, BrowseComp 90.8%, DRACO 88.6%, AA Harvey LAB 93.5%, Toolathlon 80.6%, OSWorld 2.0 70.6% / 2.1 74.0%, Frontier-Bench 43.3% (SOTA at release). Capped by AutomationBench 26.0%, TB 3.0 42.7%, TB 4.0 53.9% (behind Opus 5.5 66.4%), MazeBench 12%, LAB all-pass 23.6% vs criterion-pass 93.7%, no τ³-Banking/Claw-Eval.
- **Reasoning: 94/100.** (was 89) GPQA Diamond 93.4% (clears 90%+), HLE 64.7% w/tools (clears 40%+), **ARC-AGI-2 90.4%**, **ARC-AGI-3 30.2% (only verified in series, quadrupled baselines)**, **IMO 2026 42/42 PERFECT (only perfect in series)**, FrontierMath Tier 4 73.2% / Tiers 1-3 85.6%, ARC-AGI-1 97.5%, MMLU-Pro 91.6%. Capped by **AA Intelligence Index 51 (recalibrated from #1/61 to #18/51)**, CritPt 29.1%, hallucination 60.8%, ARC-AGI-3 30.2% (still low absolute), no MRCR/LCR at depth.
- **Context window: 96/100.** (was 95) 1M native (lineage inference — BenchLM "Coming soon"), **300K Batch output**, **MRCRv2 8-needle 128K 91.3% AUC 97.5% #1** (Context Arena), AA-LCR 79.3%. Held at 96 (not 98-99) due to **no MRCR/RULER at 1M**, 1M figure unconfirmed by vendor for this SKU.
- **Multimodal: 80/100.** (was 70) **Text, image, PDF input confirmed** (GDP.pdf 85.5% strongest doc reasoning); MMMU-Pro **89.9%** (Vals, #2/93), Chartography 83.0% w/tools, BenchCAD 0.821 w/tools, Design Arena 1309 Elo, OSWorld 2.1 74.0% partial. Capped by no audio/video, text-only output, tool-dependence gap (Chartography 83% vs 29.6%, BenchCAD 0.821 vs 0.366). **Jumps from image-only (60-70) to image+PDF band (75-90)**.
- **Coding: 95/100.** (was 96) SWE-bench Verified **96-97% (highest in research series)**, SWE-bench Pro 79.2% (~10.7 pp behind Opus 5.5 89.9%), LiveCodeBench 89.0% (Vals #4), AA Coding Index 78.0% (clears 70%+, joint #1 at release), VulcanBench CII v1 **96.4%**, Android Bench **91.8% #1/46**, ProgramBench 93.0%, SWE Multilingual 89.5%, Vibe Code 88.4% (Vals), IOI 84.3% (Vals). Capped by DeepSWE **68.8% (5.2 pts under 74% frontier ref)**, FrontierCode 2.0 **26.7%**, CursorBench 4.0 **46.6%**, PostTrainBench 35.0%.
- **Cost efficiency: 45/100.** (was 50) $5/$25 per 1M with **$0.50/M cache read (10%)**. Blended ~$3.85/M. Cost/task: TB4.0 high (Vals). AA: $5.86/task. Most expensive Anthropic tier on Zen (no Opus 5.5 legacy route). Batch 50% off. Fast mode 2.5× at 2× price. No free tier. No data-retention requirement.
- **Overall Score: 92/100.** (was 88) Half-up mean of (95 + 94 + 96 + 80 + 95) / 5 = 460 / 5 = 92.0 → **92**. **Below average of 92.4 from 33 qualifying raters** (close). Best-fit: **Outstanding for repository repair, codebase understanding, agentic coding** — SWE-bench Verified 96-97% (series high), IMO 42/42 perfect, ARC-AGI-3 30.2% (only verified), OSWorld 70.6%, MCP-Atlas 85.8%. **Legacy SKU superseded by Opus 5.5** — prefer Opus 5.5 or Sonnet 5.5 for new work ($4/$20 vs $5/$25, better TB4.0, higher BenchLM). Reserve for workloads needing its SWE-bench-Pro/MCP-Atlas strengths or already pinned.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 3 recent qualified raters: Step 5 Preview (2026-11-05), GLM 5.3 Flash (2026-11-02), Gemini 3.8 Flash (2026-10-20) + official Anthropic sources (Opus 5 system card, Opus 5.5 system card, models overview page, pricing). Scores normalized 1–100 per model-comparison.md methodology. **Critical findings:** Legacy/superseded by Opus 5.5; SWE-bench Verified 96-97% (series high); IMO 42/42 perfect (only in series); ARC-AGI-3 30.2% (only verified in series, quadrupled baselines); MRCRv2 128K 91.3% AUC 97.5% #1; Context 1M is lineage inference (BenchLM "Coming soon"); DeepSWE 68.8% under 74% ref; $5/$25 cost vs Opus 5.5 $4/$20.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)
  - [Anthropic — Claude Opus 5 System Card](https://www.anthropic.com/claude-opus-5-system-card)
  - [Anthropic — Claude Opus 5.5 System Card (comparisons)](https://www.anthropic.com/claude-opus-5-5-system-card)
  - [Anthropic — Models Overview (legacy status, 300K Batch)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [Artificial Analysis — Claude Opus 5](https://artificialanalysis.ai/models/claude-opus-5)
  - [Vals AI — SWE-bench & Terminal-Bench](https://www.vals.ai/home)
  - [ARC Prize — Verified Results](https://arcprize.org/results/anthropic-claude-opus-5)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [BenchLM — Claude Opus 5 (79.68/100, #10/1009, 104 rows)](https://benchlm.ai/models/claude-opus-5)
  - [Context Arena — MRCRv2](https://contextarena.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---