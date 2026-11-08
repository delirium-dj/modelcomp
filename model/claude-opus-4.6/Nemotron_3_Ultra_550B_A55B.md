# Claude Opus 4.6 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-opus-4.6`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (Non-reasoning, High) — **LEGACY SKU (four generations behind)**
- **Short description:** Anthropic's early-2026 Opus-class flagship for coding and long-running professional/agentic tasks, released 2026-02-05. First Opus-class 1M-token context (beta at launch, GA 2026-03-13); SOTA on TB 2.0, HLE, GDPval-AA, BrowseComp at release. **Now an Active (legacy) model** — Anthropic's docs point migrations to Opus 5.5 (newer and cheaper at $4/$20 vs $5/$25). BenchLM: 61.82/100, #47/1009, Non-Reasoning classification.
- **Provider / access:** Anthropic Messages API (`claude-opus-4-6`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry, AWS, OpenRouter. **Absent from OpenCode Zen's current model list.** No Free tier.
- **Release / knowledge:** 2026-02-05 release; **knowledge cutoff: May 2025** (last Opus with 2025 cutoff). Retirement floor 2027-02-05.
- **IDs:** `claude-opus-4-6` (all platforms). No Free ID.
- **Context window:** 1,000,000 tokens total (1M GA flat pricing, no long-context premium); max output 128K synchronous. **Not in 300K Batch extended-output list** (output capped at 128K). Up to 600 images/PDF pages per request.
- **Modalities:** Text, image, **PDF input**; text output. Tool calls: yes (native + programmatic). Adaptive thinking (extended `budget_tokens` mode deprecated; effort high default). **No audio/video.** Text watermark retrofit lands 2026-11-16 (applies when temperature/top_p/top_k at defaults).
- **Pricing (as of 2026-11-08):** $5.00/M in, **$0.50/M cache read** (90% off), $6.25/M (5m) / $10/M (1h) cache write, $25.00/M out. Batch 50% off ($2.50/$12.50). Fast mode removed 2026-06-29. US-only routing 1.1x. **Identical list price to Opus 5/4.8; 2.5× Opus 5.5's $4/$20.**
- **Architecture:** Proprietary, closed weights; parameters undisclosed. Effort/adaptive-thinking variants (AA benchmarks reasoning and non-reasoning modes separately).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Anthropic sources. **Major rater disagreement documented:** Step 5 Preview (Overall 70) vs GLM 5.3 Flash (Overall 90) vs Average of 31 qualifying raters (89.1). Conflicts explicitly noted.

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (Anthropic System Card, best at release vs Opus 4.5 59.8%) — **note: 2.0 harness, not 2.1**
- Terminal-Bench 2.1: **60.1%** (Vals, estimate — excluded by Step 5) / **no verified TB 2.1/4.0 figure** (Step 5)
- Terminal-Bench Hard: **48.5%** (benchgap)
- Tau2-Bench: **84.8%** (AA) / τ² Retail **91.9%** / Telecom **99.3%** (Anthropic) / AA Telecom **92.1%** / best-of-suite τ² **92.1% #44/321** (Sophon)
- OSWorld-Verified: **72.7%** (System Card, #5/13 per Shawn Hack) / **72.7%** (Step 5 / GLM)
- BrowseComp: **83.7–84.0%** (86.8% multi-agent, compaction to 10M tokens) — **PROVENANCE CAVEAT: sourced from Claude Mythos Preview system card, a different/later model** (Step 5)
- GDPval-AA: **1,606 Elo** (launch; +144 over GPT-5.2, +190 over Opus 4.5)
- AutomationBench: **56.1%** (Sophon, NEW, strong) / InfraResolutionBench **84.9%** (GLM)
- Claw-Eval: **70.4%** — one of only two models in research series with published Claw-Eval (GLM/Step 5)
- CyberGym: **66.6%** / DeepSearchQA: **73.7%** / Gert Labs: **61.85%** / ResearchClawBench: **19.9%**
- AndroidWorld: **62.0%** / SWE-bench Multilingual: **72%** (GLM, NEW)
- MCP Atlas: **61.8% max-effort** (benchgap) / **62.7% high effort** (launch footnote) — regression vs 4.5 flagged (GLM)
- AndroidWorld: **62.0%** (GLM)
- ApprenticeBench: **5%** / JobBench: **36.7%** / terminalBenchHard: **48.5%** / ResearchClawBench: **19.9%** / Gert Labs: **61.85%**
- τ³-Banking / GDPval-AA (current) / OSWorld 2.x / MCP-Atlas / Toolathlon / MazeBench: **no verified public score found** (Step 5)

Reasoning / knowledge:

- GPQA: **91.3%** (System Card) / GPQA-D **89.2%** (Arcee) / **89.6%** (Vals #47/159, GLM) / **AA-GPQA Diamond 84.0%** (AA) — **clears 90% reference only on Anthropic's own run**
- HLE: **53% with tools** (System Card, corrected 2026-02-23 for 3 flagged cheats) / **40.0% without tools** (Muse chart) / **AA-HLE 19.1%** (AA, standard set) — **33.9-point vendor-vs-independent gap** (Step 5)
- AA Intelligence Index: **26.4** (non-reasoning) / **31.9 max effort** (AA effort split, GLM) — prior 26.4 was non-reasoning reading; AA page deprecated/historical
- SuperGPQA: **95%** (Arcee) / MMLU-Pro: **82%** (Qwen) / **89.1%** (Arcee/Vals #5/73) / AIME25: **99.8%** (Arcee) / **94.4%** (ModelPicker)
- LiveBench (GLM, NEW): Overall **78.8**, Reasoning **88.7**, Math **89.3**, Language **83.3**, Data Analysis **69.9**, IF **63.3**
- FrontierMath v2: Tiers 1–3 **66.0%** / Tier 4 **26.8%** (Epoch re-scored)
- ARC-AGI-2: **68.8%** max effort (120K budget; ModelPicker reads 69.2) — ~2× Opus 4.5
- ARC-AGI-3: **0.5%** (Step 5)
- CritPt: **2.8%** non-reasoning / **12.6% max effort** (AA effort split, GLM) — **worst non-reasoning CritPt in research series**
- AA-LCR: **67.0%** (BenchLM) / **78% max effort** (Sophon) — effort split, both cited
- IFBench: **44.6%** / **53.1% max effort** (GLM)
- MMMLU: **91.1%** / MMLU: **91%** / MATH: **93%** / HumanEval: **95%** (GLM)
- MMMU Pro: **73.9%** / **77.3% with tools** (GLM) / AA-MMMU-Pro: **72.5%** / **75.4% max** (GLM)
- MedXpertQA Text: **52.1%** / MM: **64.8%** / HealthBench Hard: **14.8%** / ERQA: **51.6%** / ScreenSpot Pro: **83.1%**
- AA-Omniscience: hallucination **80.1%** / accuracy **45.8%** / index **2.4** / hallucination-rate row **61.3% #47/109** (GLM)
- **MRCR: no verified public score found** (Step 5 / GLM)
- Arena Elo: **1503-1504 #7-9/151** (GLM, NEW)

Coding:

- SWE-bench Verified: **80.8%** (System Card, 25-trial avg; 81.42% prompt-modified) / **Vals independent: 78.2% #19/78** (GLM, NEW) / **75.6%** (Arcee)
- SWE-bench Pro: **53.4%** (System Card) / **53.4%** (Step 5 / GLM)
- LiveCodeBench Pro: **70.7%** / **LiveCodeBench (Vals): 84.7% #11/47** (GLM, NEW)
- SWE-Rebench: **65.3%** / React Native Evals: **84.1%** / Vibe Code Bench: **57.57%** (Vals v1.1)
- FrontierCode 1.1 Main: **26.9%** (Cognition) / Terminal-Bench 2.0: **65.4%** (System Card)
- **DeepSWE / AA Coding Index / AA-SciCode: no verified public score found** (Step 5)
- Successor context: Fable 5 SWE-V **95.0%**, Opus 4.8 **88.1%** — two+ generations ahead (GLM)

Multimodal:

- MMMU-Pro: **77.3%** (System Card) / **73.9%** / **77.3% with tools** (GLM) / AA-MMMU-Pro **72.5%** / **75.4% max** (GLM)
- ScreenSpot Pro: **83.1%** (GLM / Step 5)
- MedXpertQA MM: **64.8%** / ERQA: **51.6%** / ParseBench: **54.07%** (Step 5)
- Design Arena: **1,291 Elo** (OpenRouter) / **1,290** (Step 5)
- MedXpertQA Text: **52.1%** (GLM)

Long context:

- AA-LCR: **67.0%** (BenchLM) / **78% max effort** (Sophon) — effort split, both cited (GLM) — **weakest AA-LCR in batch** (Step 5)
- MRCRv2: **93** (Sophon row — conflicts with benchgap's 58.0 estimate; Sophon value cited) (GLM)
- **MRCR / RULER / GraphWalks: no verified public score found for 4.6 specifically** (Step 5 / GLM)
- 1M GA flat pricing (2026-03-13); max output 128K (no 300K Batch beta)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Synthesizing 2 recent qualified raters + 31-rater average (89.1 Overall). **Major conflict:** Step 5 Preview (70) vs GLM 5.3 Flash (90) vs Average (89.1). Step 5 weights independent measurements heavily (AA-HLE 19.1%, CritPt 2.8%, provenance issues); GLM weights max-effort readings and release-era SOTA claims. Average of qualifying raters strongly favors GLM's view (Step 5 excluded from top 10).

- **Tool use: 88/100.** (was 68) TB 2.0 65.4%, BrowseComp 83.7–84.0%, OSWorld 72.7%, Tau2 84.8% (τ² 92.1% best-of-suite), AutomationBench 56.1%, InfraResolution 84.9%, Claw-Eval 70.4% (rare figure), CyberGym 66.6%. **Capped by:** no TB 2.1/4.0, **BrowseComp provenance compromised** (Mythos Preview card), ApprenticeBench 5%, JobBench 36.7%, terminalBenchHard 48.5%, no τ³-Banking/GDPval-AA(current)/MCP-Atlas/Toolathlon/MazeBench.
- **Reasoning: 82/100.** (was 72) **LiveBench Reasoning 88.7 / Math 89.3** (GLM, NEW), **AA max-effort Index 31.9 / CritPt 12.6 / LCR 78%** (GLM), GPQA 89.2–91.3%, ARC-AGI-2 68.8%, SuperGPQA 95%, AIME25 99.8%. **Capped by:** AA non-reasoning Index 26.4, **AA-HLE 19.1% (33.9-pt vendor gap)**, non-reasoning CritPt **2.8% (worst in series)**, FrontierMath Tier 4 26.8%, ARC-AGI-3 0.5%, hallucination 80.1%, no MRCR. **Scored on independent measurements per methodology.**
- **Context window: 92/100.** (was 90) 1M GA flat pricing, **MRCRv2 93** (Sophon, GLM), AA-LCR 67–78% effort split. Held at 92 (not 96) due to **no MRCR/RULER/GraphWalks**, **weakest AA-LCR in batch (67%)**, 128K output cap (no 300K Batch).
- **Multimodal: 80/100.** (was 70) Text, image, **PDF input** (600 pages); MMMU-Pro 72.5–77.3%, ScreenSpot Pro 83.1%, MedXpertQA MM 64.8%, Design Arena 1290 Elo. **Scored above +image-only 60-70 band due to PDF input.** Capped by no audio/video, AA-MMMU-Pro 4.8 pts lower than system card, ParseBench 54.07%.
- **Coding: 82/100.** (was 75) SWE-bench Verified **80.8%** (25-trial) / **78.2% Vals independent #19/78**, LiveCodeBench **84.7% Vals #11/47**, React Native **84.1%**, SWE-Multilingual **72%**. **Capped by:** SWE-Pro 53.4%, FrontierCode 26.9%, **no DeepSWE/AA Coding Index/AA-SciCode**, successors far ahead (Fable 5 95%, Opus 4.8 88.1%).
- **Cost efficiency: 35/100.** (was 40) $5/$25 with $0.50/M cache read (90% off), Batch $2.50/$12.50. **Strictly dominated by Opus 5.5 ($4/$20, newer, fresher May 2025 cutoff vs Jun 2026).** No free tier, no fast mode (removed 2026-06-29).
- **Overall Score: 84.8/100.** (was 75) Half-up mean of (88 + 82 + 92 + 80 + 82) / 5 = 424 / 5 = 84.8 → **85**. **Below average of 89.1 from 31 qualifying raters.** Best-fit: **Legacy flagship with strong release-era agentic profile (TB 2.0 SOTA, τ² 92.1%, BrowseComp 83.7%, SWE-V 80.8%) but severe independent measurement gaps** (AA-HLE 19.1%, CritPt 2.8%, no TB 2.1/4.0/DeepSWE). Migrate to Opus 5.5 (cheaper, newer, fresher knowledge) unless pinned to `claude-opus-4-6`. Watermark retrofit 2026-11-16 adds compliance variable for sampling-default users.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 70), GLM 5.3 Flash (2026-11-05, Overall 90) + official Anthropic sources (Opus 4.6 system card, models overview page, pricing, watermark notice). **Critical conflicts documented:** Step 5 vs GLM (70 vs 90); BrowseComp provenance (Mythos Preview card); AA-HLE 19.1% vs vendor 53%; CritPt 2.8% (worst non-reasoning); AA Index effort split (26.4 vs 31.9); LiveBench 78.8 (new); no TB 2.1/4.0/DeepSWE/MRCR.
- Reference URLs:
  - [Anthropic — Claude Opus 4.6 System Card](https://www.anthropic.com/claude-opus-4-6-system-card)
  - [Anthropic — Models Overview (legacy status, migrate to Opus 5.5)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [BenchLM — Opus 4.6 (61.82/100, #47/1009, 51 rows, Non-Reasoning)](https://benchlm.ai/models/claude-opus-4-6)
  - [Artificial Analysis — Opus 4.6](https://artificialanalysis.ai/models/claude-opus-4-6)
  - [Claw-Eval Leaderboard](https://claw-eval.github.io/)
  - [Arcee — Trinity-Large-Thinking Comparison](https://www.arcee.ai/blog/trinity-large-thinking)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Meta AI — Muse Spark Comparison Chart](https://ai.meta.com/blog/introducing-muse-spark-msl/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---