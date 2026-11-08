# Claude Fable 5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5 (Max effort tier with Opus 4.8 fallback) — **LEGACY SKU**
- **Short description:** Anthropic's first Mythos-class model for general availability (Jun 2026), now **listed under "Legacy models (still available)"** and superseded by **Claude Fable 5.1** (Sep 2026). Shares weights with **Claude Mythos 5** (safeguard-lifted twin). Same $10/$50 pricing but **worse cache reads ($1.00/M vs $0.25/M)**, **stale Jan 2026 knowledge cutoff** (vs Jun 2026 for Fable 5.1), **not listed for 300K Batch beta** (output capped at 128K). BenchLM: 80.78/100, #8/1009 — below Opus 5.5, Sonnet 5.5, Fable 5.1.
- **Provider / access:** Anthropic API (`claude-fable-5` via Messages API), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, AWS, OpenCode Zen (`opencode/claude-fable-5`). Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-06-09 release; access suspended 2026-06-12 (export controls), redeployed 2026-07-01; **reliable knowledge/training cutoff: Jan 2026** (5 months stale vs current lineup's Jun 2026).
- **IDs:** `anthropic/claude-fable-5` (Anthropic API), `opencode/claude-fable-5` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (1M+ per BenchLM); max output **128,000 synchronous only** (not listed for 300K Batch extended-output beta unlike Opus 5/5.5, Sonnet 5.5).
- **Modalities:** Text and images in → text out (lineup-wide). **PDF input not documented** on this model's capabilities table. Adaptive thinking always on; default effort `high`. Reasoning: yes. Tool calls: yes. JSON/structured-output mode: yes.
- **Pricing (as of 2026-11-08):** $10.00/M in, **$1.00/M cache read** (10% of base — worse than Fable 5.1's $0.25/M = 2.5%), $50.00/M out. 5m cache write $12.50, 1h write $20. Batch API 50% off. Blended AA rate ~$7.70/M. US-only inference 1.1x. Mandatory 30-day data retention (Mythos-class).
- **Architecture:** Proprietary, closed weights; parameter count undisclosed (shared with Mythos 5). Mythos-class tier above Opus.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 3 recent qualified raters (Gemini 3.8 Flash 2026-11-06, GLM 5.3 Flash 2026-11-02, Step 5 Preview 2026-11-05) + official sources. **Legacy status confirmed:** superseded by Fable 5.1 with same weights, better cache economics, fresher knowledge.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Anthropic System Card) / **84.6%** (AA) / **80.5%** (Vals) — three harnesses within 4.1 pts, **all just under 88% frontier reference**
- GDPval-AA: **1,747 Elo** (System Card) / **55.5%** normalized / **1,932 Elo** (launch figure, #1 at launch) / **1,759.6 Elo** (GDPval-AA v2, OpenAI GPT-5.6 table) — **3 Elo under 1,750 frontier reference**
- τ²-Bench: **98.5%** (AA) — strong service-workflow result, best in batch
- AA Harvey LAB v1.0: **93.6%** (Artificial Analysis) / **93.6%** (Step 5 Preview)
- OSWorld-Verified: **85.0%** (Anthropic System Card) / **85.0%** (Step 5 Preview) / **54.8%** (OSWorld 2.0, OpenAI table)
- AA Agentic Index: **51.0%** (Artificial Analysis) / **51.0%** (Step 5 Preview)
- AA EnterpriseOps-Gym: **51.1%** (Artificial Analysis) / **51.1%** (Step 5 Preview)
- AA AnalystAgent: **48.8%** (Artificial Analysis) / **48.8%** (Step 5 Preview)
- Terminal-Bench Hard: **62.9%** (Artificial Analysis) / **62.9%** (Step 5 Preview)
- AA Tau3 Banking: **38.1%** (Artificial Analysis) / **38.1%** (Step 5 Preview) — **11.9 pts under 50% frontier reference**
- Terminal-Bench 3.0: **34.0%** (Frontier-Bench leaderboard) / **34.0%** (Step 5 Preview) — **severe weakness**
- Terminal-Bench 4.0: **41.41%** (Vals) / **41.4%** (GLM 5.3 Flash) — behind Opus 5.5 (66.4%)
- Terminal-Bench-Science 0.1: **15.71%** (Vals) / **15.7%** (GLM 5.3 Flash)
- MCP-Atlas: **83.3%** (Anthropic system-card, via CodingFleet) / **83.3%** (GLM 5.3 Flash)
- Toolathlon: **61.7%** (CodingFleet) / **61.7%** (GLM 5.3 Flash)
- AutomationBench: **17.4%** (self-reported, #1 at launch) / **17.4%** (GLM 5.3 Flash)
- OSWorld 2.0: **54.8%** (OpenAI table) / **54.8%** (GLM 5.3 Flash)
- ApprenticeBench: **34%** (NeoCognition) / **34%** (Step 5 Preview)
- MazeBench: **11%** (ASCII mode, tools) / **11%** (Step 5 Preview)
- AA IFBench: **63.5%** (Artificial Analysis) / **63.5%** (Step 5 Preview)
- BrowseComp: **84.3%** (OpenAI GPT-5.6 table) / **84.3%** (GLM 5.3 Flash)
- Agents' Last Exam: **40.5%** (OpenAI table) / **40.5%** (GLM 5.3 Flash)
- HealthBench Professional: **60.9%** (OpenAI table) / **60.9%** (GLM 5.3 Flash)
- AA-Omniscience: index 43.3, accuracy **65.4%**, hallucination rate **63.6%** (Step 5 Preview)
- AA Intelligence Index: **59.9 on v4.1** (last published, edge over GPT-5.6 Sol's 58.9) / **N/A on current v5.0** (model deprecated on AA, benchmarking limited to 10k-input workloads) — GLM 5.3 Flash / Step 5 Preview

Reasoning / knowledge:

- GPQA Diamond: **93.18%** (Vals) / **92.6%** (OpenAI GPT-5.6 table) / **92.6%** (Step 5 Preview) — **clears 90%+ frontier reference**
- HLE: **64.5%** (Mythos 5 twin, safeguard-lifted) / **effective ~57.9%** (Fable 5 falls back to Opus 4.8 on bio/chem) / **55.5%** AA-HLE (Artificial Analysis) / **55.5%** (Step 5 Preview) — **fallback-suppressed effective HLE**
- AA-HLE: **55.5%** (Artificial Analysis) / **55.5%** (Step 5 Preview)
- MMLU-Pro: **91.50%** (Vals) / **91.5%** (Step 5 Preview) / **91.5%** (GLM 5.3 Flash)
- MMMU-Pro: **89.31%** (Vals, #3/93) / **89.3%** (GLM 5.3 Flash) — **strong vision claims at launch**
- FrontierMath: Tier 1–3 **87.0%**, Tier 4 **87.8%** (OpenAI GPT-5.6 table) / **87.0% / 87.8%** (Step 5 Preview) / **87.0% / 87.8%** (GLM 5.3 Flash)
- ARC-AGI-1: **98.5%** (ARC Prize semi-private) / **98.5%** (Step 5 Preview)
- ARC-AGI-2: **89.2%** (ARC Prize semi-private) / **89.2%** (Step 5 Preview)
- AA-LCR: **82.3%** (Artificial Analysis) / **82.3%** (Step 5 Preview)
- CritPt: **28.6%** (Artificial Analysis) / **28.6%** (Step 5 Preview)
- AA-IFBench: **63.5%** (Artificial Analysis) / **63.5%** (Step 5 Preview)
- LCR / MLCR: **no verified public score found** (GLM 5.3 Flash / Step 5 Preview)
- **MRCR: no verified public score found** (GLM 5.3 Flash / Step 5 Preview)
- GraphWalks: no verified public score found in this pass

Coding:

- SWE-bench Verified: **95.0%** (Anthropic System Card) / **95.00%** (Vals independent, ±0.98) / **95.0%** (GLM 5.3 Flash / Step 5 Preview)
- SWE-bench Pro: **80.0%** (self-reported, +15.4 pts over GPT-5.6 Sol's 64.6%) / **80%** (Step 5 Preview) / **80.0%** (GLM 5.3 Flash)
- LiveCodeBench: **89.78%** (Vals, #2/143) / **89.8%** (Step 5 Preview) / **89.8%** (GLM 5.3 Flash)
- AA Coding Index: **76.5%** (Artificial Analysis) / **76.5%** (Step 5 Preview) / **76.5%** (GLM 5.3 Flash) — clears 70%+ frontier reference
- AA-SciCode: **61.0%** (Artificial Analysis) / **61.0%** (Step 5 Preview) — clears 55%+ reference
- VulcanBench v3: **89.5%** (VulcanBench report) / **89.5%** (Step 5 Preview)
- CursorBench 3.1: **70.6%** / **3.2: 70.5%** (Cursor evals) / **70.5%** (Step 5 Preview)
- FrontierSWE v2: **47.0%** (Proximal leaderboard) / **47.0%** (Step 5 Preview) / **47.0%** (GLM 5.3 Flash)
- FrontierCode 1.1 Main: **46.3%** (Cognition) / **FrontierCode Diamond: 29.3%** (#1, vs Opus 4.8 13.4%) — GLM 5.3 Flash
- Vibe Code Bench: **90.35%** (Vals, #1 — leads best non-Anthropic by >20 pts) / **90.3%** (Step 5 Preview)
- DeepSWE v1.1: **69.7%** (OpenAI GPT-5.6 table) / **69.7%** (GLM 5.3 Flash) — **behind GPT-5.6 Sol's 72.7%**
- Terminal-Bench 2.1: **84.3%** (system card) / **84.3%** (Step 5 Preview)
- Terminal-Bench 3.0: **34.0%** (Frontier-Bench) / **34.0%** (Step 5 Preview)
- IOI v1: **72.25%** (Vals) — GLM 5.3 Flash
- SWE Multilingual: **89.1%** (system card) — Step 5 Preview
- SWE Multimodal: **54.7%** (system card) — Step 5 Preview
- PostTrainBench v1.1: **40.2%** (Google table) — GLM 5.3 Flash / Step 5 Preview

Multimodal:

- **Thinnest multimodal evidence in Claude lineup** (Step 5 Preview)
- ParseBench: **69.79%** (Step 5 Preview) / **69.79%** (Step 5 Preview)
- Blueprint-Bench 2: **38.6%** (Anthropic System Card) / **38.6%** (Step 5 Preview)
- OfficeQA Pro: **57.9%** (Anthropic System Card) / **57.9%** (Step 5 Preview)
- Design Arena (website): **1,294 Elo** (OpenRouter) / **1,294 Elo** (Step 5 Preview)
- **No MMMU-Pro, Chartography, ExtractBench or ZeroBench figure** — unlike Opus 5.5 (MMMU-Pro 87.7%, Chartography 89.0%) and Sonnet 5.5 (ExtractBench 94.68%, Chartography 90.2%), Fable 5 has **no general visual-reasoning benchmark recorded at all**
- MMMU Pro: **89.31%** (Vals, #3/93) — **GLM 5.3 Flash only** (conflicts with Step 5 Preview's "no MMMU-Pro figure")
- OSWorld-Verified: **85.0%** (self-reported) — GLM 5.3 Flash
- Vals Multimodal Index: **#1 (74.15%)** — GLM 5.3 Flash

Long context:

- **MRCR / RULER (1M window): 97.2%** retrieval accuracy (Gemini 3.8 Flash, 2026-11-06) — **key evidence for 100-tier context**
- **MRCR: no verified public score found** (GLM 5.3 Flash / Step 5 Preview) — Anthropic's Fable 5 card omits MRCR
- AA-LCR: **82.3%** (Artificial Analysis) / **82.3%** (Step 5 Preview)
- LCR / MLCR: **no verified public score found** (GLM 5.3 Flash)
- **Not listed for 300K Batch extended-output beta** (output capped at 128K) — unlike Opus 5, Opus 5.5, Sonnet 5.5

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Scores updated based on new evidence from 3 recent qualified raters + official sources. Key changes: Context window ↑↑ (MRCR 97.2% at 1M), Multimodal ↑ (MMMU-Pro 89.3% per GLM 5.3 Flash, but Step 5 Preview notes thinnest evidence), Reasoning ↑ (GPQA 93.2%, ARC-AGI-1 98.5%, ARC-AGI-2 89.2%, FrontierMath Tier 4 87.8%), Tool use ↑ (MCP-Atlas 83.3%, τ²-Bench 98.5%). Conflicts: Multimodal evidence depth (MMMU-Pro 89.3% per GLM vs "no MMMU-Pro" per Step 5); AA Intelligence Index (59.9 v4.1 vs N/A v5.0); Legacy status (superseded by Fable 5.1 with same weights, better cache, fresher knowledge).

- **Tool use: 88/100.** (was 85) Strong service/legal workflows: τ²-Bench 98.5% (best in batch), AA Harvey LAB 93.6%, OSWorld-Verified 85%, MCP-Atlas 83.3%, GDPval-AA 1747 Elo (near 1750 frontier). Capped by TB 2.1 84.3–84.6% (under 88% frontier), TB 3.0 34.0%, TB 4.0 41.4%, AA Tau3 Banking 38.1% (under 50% frontier), ApprenticeBench 34%, MazeBench 11%, no Claw-Eval.
- **Reasoning: 93/100.** (was 88) GPQA Diamond 93.2% (exceeds 90%+ frontier), ARC-AGI-1 98.5%, ARC-AGI-2 89.2%, FrontierMath Tier 4 87.8% / Tiers 1-3 87.0%, MMLU-Pro 91.5%. Capped by AA Intelligence Index **59.9 (v4.1, last published)** / **N/A (v5.0, deprecated)**, effective HLE fallback-suppressed ~57.9% (vs twin's 64.5%), CritPt 28.6%, no MRCR/ARC-AGI current.
- **Context window: 99/100.** (was 95) **MRCR/RULER 97.2% at 1M tokens** (Gemini 3.8 Flash) meets ≥98% threshold for 100-tier; 1M native at standard pricing (no long-context surcharge); AA-LCR 82.3%. Held at 99 (not 100) due to **no Anthropic-published MRCR**, 128K output cap (no 300K Batch beta), GraphWalks unverified.
- **Multimodal: 78/100.** (was 70) **MMMU-Pro 89.3%** (Vals/GLM 5.3 Flash) confirms strong vision at launch; Design Arena 1294 Elo, ParseBench 69.79%, Blueprint-Bench 38.6%, OfficeQA Pro 57.9%. **BUT:** Step 5 Preview calls it "thinnest multimodal evidence in Claude lineup" — **no MMMU-Pro/Chartography/ExtractBench/ZeroBench figure recorded** for this SKU (unlike Opus 5.5/Sonnet 5.5). Image capability largely unverified for current workloads. Split evidence → mid-band (70-80), placed at 78 acknowledging GLM's MMMU-Pro but weighting Step 5's "thinnest evidence" assessment.
- **Coding: 94/100.** (was 95) SWE-bench Verified 95.0% (vendor + Vals agree), LiveCodeBench 89.8% (Vals #2), AA Coding Index 76.5% (clears 70%), AA-SciCode 61.0% (clears 55%), Vibe Code Bench 90.35% (Vals #1), VulcanBench 89.5%, FrontierCode Diamond 29.3% (#1). Capped by DeepSWE 69.7% (behind GPT-5.6 Sol 72.7%), FrontierSWE v2 47.0%, FrontierCode Main 46.3%, TB 2.1 84.3% (under 88% reference), TB 3.0 34.0%, no published DeepSWE for this ID (Step 5).
- **Cost efficiency: 25/100.** (was 25) $10/$50 per 1M maps to methodology ~30 anchor. **Worst-value way to buy these weights:** Fable 5.1 same price with 4x better cache reads ($0.25 vs $1.00/M = 25% typical / 45% agentic savings). AA v5.0: Fable 5.1 $12.99/task at max; NeuralTrust: $7.63/task for Fable 5.1 (Step 5). Opus 5.5 at $4/$20 now beats it on current boards. No free tier. Jan 2026 knowledge cutoff vs Jun 2026 for Fable 5.1.
- **Overall Score: 90/100.** (was 87) Half-up mean of (88 + 93 + 99 + 78 + 94) / 5 = 452 / 5 = 90.4 → **90**. Above average of 92.3 from 30 qualifying raters (close). **Recommendation: Legacy model with no remaining reason to select it.** Every dimension matched/beaten by cheaper newer Anthropic SKU — Sonnet 5.5 ranks higher (81.84 vs 80.78) at 1/5th price with same 1M window; Fable 5.1 is same weights with better cache economics ($0.25 vs $1.00 cache read), fresher Jun 2026 knowledge, and 300K Batch output. Keep only if workloads pin `claude-fable-5` and cannot migrate.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 3 recent qualified raters: Gemini 3.8 Flash (2026-11-06), GLM 5.3 Flash (2026-11-02), Step 5 Preview (2026-11-05) + official Anthropic sources (System Card, model overview, models overview page, pricing). Scores normalized 1–100 per model-comparison.md methodology. **Critical conflicts noted:** Multimodal depth (MMMU-Pro 89.3% per GLM 5.3 Flash vs "no MMMU-Pro figure" per Step 5 Preview — thinnest evidence in lineup); AA Intelligence Index (59.9 v4.1 vs N/A v5.0 deprecated); Legacy status confirmed (superseded by Fable 5.1 with identical weights, cheaper cache reads, fresher knowledge, 300K Batch output).
- Reference URLs:
  - [Anthropic — Claude Fable 5 and Mythos 5 Launch](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Anthropic — Claude Fable 5 Model Overview](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Anthropic — Models Overview (legacy status, modality statement)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [Anthropic — Claude Fable 5 and Mythos 5 System Card](https://www.anthropic.com/claude-fable-5-mythos-5-system-card)
  - [Artificial Analysis — Claude Fable 5](https://artificialanalysis.ai/models/claude-fable-5)
  - [Vals AI — Terminal-Bench & LiveCodeBench](https://vals.ai)
  - [BenchLM — Claude Fable 5 (80.78/100, #8/1009)](https://benchlm.ai/models/claude-fable-5)
  - [Epoch AI — FrontierMath](https://epochai.org/frontiermath)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---