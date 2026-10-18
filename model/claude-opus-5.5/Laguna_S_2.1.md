# Claude Opus 5.5 — findings by Laguna S 2.1

> Source: anthropic/claude-opus-5-5 (Anthropic), e.g. BenchLM, Artificial Analysis, Anthropic platform docs
> Date: 2026-10-17 (UTC) — re-verification of 2026-10-10 scores
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (Anthropic)
- **Short description:** First model of Anthropic's Claude 5.5 family; enterprise Opus workhorse with adaptive thinking (always on) and 1M context, built for long-running agentic coding and knowledge work.
- **Provider / access:** Anthropic API `claude-opus-5-5` (Messages API); OpenCode Zen `opencode/claude-opus-5-5` (paid tier, noZen Free ID — `noFreeId: true`); also available on Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, and Claude Platform on AWS.
- **Release / knowledge:** 2026-09-22 (Anthropic platform docs / BenchLM). Reliable knowledge cutoff: Jun 2026; training data cutoff: Jun 2026.
- **IDs:** `anthropic/claude-opus-5-5` (Claude API, Bedrock, Vertex, Foundry, AWS). No free Zen Free ID (`noFreeId`).
- **Context window:** 1M tokens total (1M input / 128K output; up to 300K output via Batch API beta header `output-300k-2026-03-24`).
- **Modalities:** Text, image in; text out. Reasoning yes (adaptive thinking, always on, non-disableable); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-10):** $4.00 in / $20.00 out per 1M tokens (Anthropic API); cache read $0.20/MTok (5% = 95% cache discount); Batch API 50% off input+output. noFreeId — no Zen free tier.
- **Architecture:** Proprietary (Anthropic has not disclosed parameter count or internal architecture).

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/claude-opus-5-5`, overall 86.43, rank #1/889, 74 of 625 benchmarks) and Artificial Analysis. GPQA Diamond not published for this ID on BenchLM or AA.

Agent / tool use:

- Terminal-Bench 4.0: **66.40%** (Anthropic: Introducing Claude Opus 5.5 / BenchLM)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic: Claude Opus 5.5 system card / BenchLM)
- GDPval-AA (Elo): **1862** (Anthropic: Claude Opus 5.5 system card / BenchLM — exceeds ≥1750 frontier)
- GDPval-AA (normalized): **68.3%** (Artificial Analysis model benchmarks)
  - AA Briefcase (Elo): **1805** (Anthropic: Claude Opus 5.5 system card / BenchLM — Oct 17: was 1807)
- OSWorld 2.0: **48.7%** (Anthropic: Claude Opus 5.5 system card PDF / BenchLM)
- DRACO: **88.6%** (Anthropic: Claude Opus 5.5 system card / BenchLM)
- Toolathlon-Verified: **77.8%** (Anthropic system card / BenchLM)
- Toolathlon Verified Pass@3: **82.4%** (Anthropic system card / BenchLM)
- Toolathlon Verified Pass³: **72.2%** (Anthropic system card / BenchLM)
- AA ITBench: **38.2%** (Artificial Analysis / BenchLM)
- AA Agentic Index: **55.7%** (Artificial Analysis model benchmarks / BenchLM)
- aaTerminalBench21: **84.3%** (Artificial Analysis / BenchLM)
- AA Terminal-Bench 4.0: **59.6%** (Artificial Analysis / BenchLM)
- AA AutomationBench: **69.5%** (Artificial Analysis / BenchLM)
- AA-AnalystAgent: **56.3%** (Artificial Analysis / BenchLM)
- GDP.pdf: **26.2%** (Artificial Analysis / BenchLM)
- TB-2.1 (Vals): **84.6%** (Vals AI leaderboard / BenchLM)
- ApprenticeBench: **36%** (NeoCognition / BenchLM)
  - CWE-bench v1: **67.0%** (Collinear / BenchLM)
  - Hermes Index: **63.3%** (Nous Research: Hermes Index leaderboard / BenchLM, Oct 17)
  - Hermes Bench: **76.7%** (Nous Research: Hermes Index leaderboard / BenchLM, Oct 17)
- GDPval-AA (Elo): no separate value (1862 from system card above)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (not published on BenchLM or AA for this ID)
- AA-GPQA-D: **92.6%** (Artificial Analysis / BenchLM)
- ARC-AGI-1: **97.50%** (ARC Prize verified results / BenchLM)
- ARC-AGI-2: **91.7%** (ARC Prize verified results / BenchLM)
- HLE w/ tools: **64.7%** (Anthropic system card / BenchLM)
- HLE w/o tools: **56.3%** (Anthropic system card / BenchLM)
- AA-HLE: **54.9%** (Artificial Analysis / BenchLM)
- AA Intelligence Index: **50.8%** (Artificial Analysis — revised down from 57.6% in prior Sep 20 file; v4.3.2 methodology update as model pool grew from 223 to 227 models, median increased)
- AA-LCR: **79.3%** (Artificial Analysis / BenchLM)
- MLCR-AA: **55.6%** (Artificial Analysis / BenchLM)
- CritPt: **29.1%** (Artificial Analysis / BenchLM)
- AA-Omniscience Index: **37.1%** (Artificial Analysis)
- AA-Omniscience Accuracy: **60.9%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **58.6%** (Artificial Analysis)
- MMLU-Pro (Vals): **91.6%** (Vals AI leaderboard / BenchLM)
- GMMLU: **92.5%** (Anthropic system card / BenchLM)
- MILU: **92.1%** (Anthropic system card / BenchLM)
- HealthBench (raw): **68.1%** (Anthropic system card / BenchLM)
- HealthBench Professional (raw): **77.1%** (Anthropic system card / BenchLM)
- BioMysteryBench (human-solvable): **90.1%** (Anthropic system card / BenchLM)
- ArXivMath (tools): **96.9%** (Anthropic system card / BenchLM)

Coding:

- SWE-bench Verified: **96%** (Anthropic system card / BenchLM — NEW: prior file had "no verified score")
- SWE-bench Pro: **89.9%** (Anthropic system card / BenchLM)
- SWE Multilingual: **93.9%** (Anthropic system card / BenchLM)
- SWE Multimodal: **61.4%** (Anthropic system card / BenchLM)
- DeepSWE: **74.2%** (Anthropic system card / BenchLM — ≥74% frontier threshold)
- ProgramBench: **93.0%** (Anthropic system card / BenchLM)
- AA Coding Index: **78.0%** (Artificial Analysis / BenchLM — revised up from 76.5%)
- AA-SciCode: **56.4%** (Artificial Analysis / BenchLM — revised down from 66.9%)
- VulcanBench v3: **87.0%** (VulcanBench technical report / BenchLM)
- VulcanBench CII v1: **96.4%** (VulcanBench CII v1 / BenchLM)
- LiveCodeBench (Vals): **89.0%** (Vals AI leaderboard / BenchLM — NEW)
- SWE-bench (Vals): **97.0%** (Vals AI leaderboard / BenchLM — NEW)
- CursorBench 3.2: **70.0%** (Cursor evals / BenchLM)
- CursorBench 4.0: **46.6%** (Cursor evals / BenchLM)
- FrontierCode 1.1 Main: **54.4%** (Anthropic system card / BenchLM)
- FrontierCode 1.1 Extended: **63.6%** (Anthropic system card / BenchLM)
- PostTrainBench v1.1: **49.3%** (PostTrainBench public leaderboard / BenchLM)
- Bug Hunt Bench: **27 fixes** (Bug Hunt Bench / BenchLM)

Multimodal:

- Chartography (tools): **89.0%** (Anthropic system card / BenchLM)
- Chartography (no tools): **29.6%** (Anthropic system card / BenchLM — revised down from prior file's 64.4%)
- AA-MMMU-Pro: **87.7%** (Artificial Analysis / BenchLM)
- OfficeQA: **78.1%** (Anthropic system card / BenchLM)
- OfficeQA Pro: **66.9%** (Anthropic system card / BenchLM)
- Design Arena Website: **1314** (OpenRouter model benchmarks / BenchLM)

Long context:

- 1M-token window verified (BenchLM / Anthropic platform docs); no MRCR/RULER retrieval curve ≥98% at 512K+ published for 100

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 86.56, #1/954, 80 of 639) and AA as of 2026-10-16.

- **Tool use: 90/100.** GDPval-AA Elo 1862 (exceeds ≥1750 frontier), DRACO 88.6%, aaTB21 84.3%, TB-2.1 (Vals) 84.6%, Toolathlon-Verified 77.8%, Toolathlon Pass@3 82.4%, GDPval-AA normalized 68.3%, AA Agentic Index 55.7%. Strong agentic cluster with GDPval ≥1750 and multiple high benchmarks. Capped by TB-4.0 66.40%, GDP.pdf 26.2%, OSWorld 48.7%, AA ITBench 38.2%, ApprenticeBench 36%.
- **Reasoning: 87/100.** ARC-AGI-1 97.50%, ARC-AGI-2 91.7%, HLE w/ tools 64.7% (above 40% frontier), AA-HLE 54.9%, MMLU-Pro 91.6%, GMMLU 92.5%, ArXivMath tools 96.9%. Capped by AA Intelligence Index 50.8 (revised down from 57.6 — v4.3.2 methodology update), AA-GPQA-D 92.6% (below ≥93 frontier), CritPt 29.1%, MLCR-AA 55.6%, Omniscience Index 37.1 (low reliability). No GPQA Diamond published for this exact ID.
- **Context window: 95/100.** 1M-token window verified (≥1M tier). No MRCR/RULER retrieval curve ≥98% at 512K+ for higher than 95.
- **Multimodal: 72/100.** Text + image in / text out (+image in = 60-70 tier); AA-MMMU-Pro 87.7%, Chartography tools 89.0%, OfficeQA 78.1%, Design Arena 1314. Capped by text-only output, Chartography no tools 29.6%, no video/audio input.
- **Coding: 92/100.** SWE-bench Verified 96% (NEW — was "no verified score"), SWE-bench (Vals) 97.0%, SWE Multilingual 89.5%, DeepSWE 74.2% (≥74% frontier), ProgramBench 93.0%, VulcanBench CII 96.4%, VulcanBench 87.0%, LiveCodeBench 89.0%, AA Coding Index 78.0%, AA-SciCode 56.4%. Capped by AA-SciCode 56.4% (revised down from 66.9%, below 55% frontier) and CursorBench 4.0 46.6%.
- **Cost efficiency: 55/100.** $4.00 in / $20.00 out per 1M tokens (paid, above $3/$15 ~60 ref); 95% cache discount noted; noFreeId (no Zen free tier).
- **Overall Score: 87/100.** Half-up mean: (90+87+95+72+92)/5 = 436/5 = 87.2 → 87. **Best-fit:** top-tier reasoning + coding agent for complex knowledge work and tool use; GPTval 1862 Elo + BrowseComp 90.8% lead agentic performance, SWE-bench Verified 96% + DeepSWE 74.2% lead coding; cap: Intelligence Index revised 57.6→50.8 (v4.3.2 methodology update as model pool grew), premium $4/$20 pricing, no free tier.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research (BenchLM `https://benchlm.ai/models/claude-opus-5-5` for overall rank/score (#1/954, 86.56, 80 of 639) and 80 benchmark rows; AA model page `https://artificialanalysis.ai/models/claude-opus-5-5` for Intelligence Index 50.8, GPQA 92.6%, pricing $4/$20; Anthropic system card PDF for SWE-bench Verified 96%, DeepSWE 74.2%, DRACO 88.6%). Zero-influence: did not read peer `*.md` findings files during research.
- Re-verification (2026-10-17): Oct 16→17 re-verification; BenchLM overall 86.56 (#1/954, 80/639) retained from Oct 16; GDPval-AA Elo 1862→1846 (still ≥1750 frontier); AA Briefcase 1807→1805; new benchmarks: Hermes Index 63.3%, Hermes Bench 76.7%; dimension scores and Overall retained at 87.
- Key revisions from Oct 1 to Oct 10 fresh BenchLM fetch: Intelligence Index revised from 57.6 to 50.8 (v4.3.2 methodology update as model pool grew from 223 to 227 models); AA-SciCode revised from 66.9% to 56.4% (below 55% frontier); new coding benchmarks confirmed (SWE-bench Verified 96%, LiveCodeBench 89.0%, SWE-bench (Vals) 97.0%, VulcanBench CII 96.4%); Chartography no tools revised from 64.4% to 29.6%.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.

---
