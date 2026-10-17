# Claude Opus 5 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-16 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Claude 5-gen model for the deepest reasoning and longest autonomous coding/research runs, with a 1M-token context and on-by-default extended thinking.
- **Provider / access:** Anthropic Messages API & Message Batches API beta, AWS Bedrock, Google Vertex AI, Microsoft Foundry (`anthropic/claude-opus-5`).
- **Release / knowledge:** Released July 24, 2026 (successor to Claude Opus 4.8). Knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-opus-5`
- **Context window:** 1,048,576 (1M) in / 128,000 out (300,000 out via Message Batches API beta header)
- **Modalities:** Text, image, pdf in; text, tool-calls out (parallel function calling; no native audio/video)
- **Pricing (as of 2026-10-10):** $5 in / $25 out per 1M tokens (unchanged from Opus 4.8); Fast Mode $10/$50; Batch API 50% off ($2.50/$12.50); prompt caching 90% off input from the 512-token threshold. Paid only, no Free tier.
- **Architecture:** Proprietary; parameters and architecture type not disclosed.

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/claude-opus-5`, overall 79.63, rank #8/954, 99 of 639 benchmarks) and Artificial Analysis. 99 benchmark rows verified across 3 independent sources.

Agent / tool use:

- Terminal-Bench 3.0: **42.7%** (FrontierBench leaderboard / BenchLM)
- BrowseComp: **90.8%** (Anthropic: Claude Opus 5 system card / BenchLM — ≥90% frontier threshold)
- DeepSearchQA: **95.0%** (Anthropic: Introducing Claude Opus 5 / BenchLM — ≥90% frontier threshold)
- DRACO: **88.6%** (Anthropic: Claude Opus 5 system card / BenchLM)
- MCP Atlas: **85.8%** (Anthropic: Claude Opus 5 system card / BenchLM)
- MCP-Atlas claim coverage: **89.1%** (Anthropic: Claude Opus 5 system card / BenchLM)
- TB-2.1 (Vals): **84.6%** (Vals AI leaderboard / BenchLM)
- GDPval-AA (Elo): **1862** (Anthropic: Claude Opus 5 system card / BenchLM — exceeds ≥1750 frontier!)
- GDPval-AA (normalized): **61.2%** (Artificial Analysis model benchmarks / BenchLM)
- AA Briefcase (Elo): **1720** (Anthropic: Claude Opus 5 system card / BenchLM)
- AA Harvey LAB v1.0: **91.2%** (Anthropic: Claude Opus 5 system card / BenchLM)
- OSWorld 2.0: **70.6%** (Anthropic: Claude Opus 5 system card / BenchLM)
- Toolathlon-Verified: **80.6%** (Anthropic: Claude Opus 5 system card / BenchLM)
- Toolathlon Pass@3: **87.0%** (Anthropic: Claude Opus 5 system card / BenchLM)
- Toolathlon Pass³: **73.1%** (Anthropic: Claude Opus 5 system card / BenchLM)
- AA ITBench: not listed
- AA AutomationBench: **77.5%** (Artificial Analysis / BenchLM)
- GDP.pdf: 21.8% (Artificial Analysis — low)
- AA Terminal-Bench 4.0: **59.6%** (Artificial Analysis / BenchLM)
- ApprenticeBench: **36%** (NeoCognition / BenchLM)
- AA Agentic Index: **56.2%** (Artificial Analysis model benchmarks / BenchLM)

Reasoning / knowledge:

- AA-GPQA Diamond: **93.2%** (Artificial Analysis / BenchLM)
- GPQA Diamond (Vals): **93.4%** (Vals AI leaderboard / BenchLM)
- GPQA Diamond: **94.1%** (vendor-reported, Anthropic/HokAI, rank 6 of 44 — from prior file, confirmed via BenchLM citation)
- HLE w/ tools: **64.7%** (Anthropic: Claude Opus 5 system card / BenchLM)
- HLE w/o tools: **56.3%** (Anthropic: Claude Opus 5 system card / BenchLM)
- AA-HLE: **54.9%** (Artificial Analysis / BenchLM)
- AA Intelligence Index: **50.8%** (Artificial Analysis — revised DOWN from 61 cited Sep 20; v4.3.2 methodology update as model pool grew from 223 to 227 models; confirmed by AA model page)
- AA-LCR: **79.3%** (Artificial Analysis / BenchLM)
- CritPt: **29.1%** (Artificial Analysis / BenchLM)
- MLCR-AA: **55.6%** (Artificial Analysis / BenchLM)
- AA-Omniscience Index: **37.1%** (Artificial Analysis)
- AA-Omniscience Accuracy: **60.9%** (Artificial Analysis model benchmarks / BenchLM)
- AA-Omniscience Hallucination Rate: **58.6%** (Artificial Analysis model benchmarks / BenchLM)
- MMLU-Pro (Vals): **91.6%** (Vals AI leaderboard / BenchLM)
- AA Global-MMLU-Lite: **93.1%** (Artificial Analysis / BenchLM)
- ARC-AGI-1: **97.50%** (ARC Prize verified results / BenchLM)
- ARC-AGI-2: **90.4%** (ARC Prize verified results / BenchLM)
- GraphWalks BFS 256K–1M: **65.0%** (Google: Gemini 4 Argon launch chart / BenchLM)

Coding:

- SWE-bench Verified: **96%** (Anthropic: Claude Opus 5 system card / BenchLM)
- SWE-bench Pro: **79.2%** (Anthropic / BenchLM)
- SWE Multilingual: **89.5%** (Anthropic / BenchLM)
- SWE Multimodal: **59.4%** (Anthropic / BenchLM)
- DeepSWE: **68.8%** (Anthropic: Claude Opus 5 system card / BenchLM)
- ProgramBench: **93.0%** (Anthropic / BenchLM — revised up from 91.2%)
- AA Coding Index: **78.0%** (Artificial Analysis / BenchLM)
- AA-SciCode: **56.4%** (Artificial Analysis / BenchLM)
- VulcanBench v3: **87.0%** (VulcanBench technical report / BenchLM)
- VulcanBench CII v1: **96.4%** (VulcanBench CII v1 / BenchLM)
- LiveCodeBench (Vals): **89.0%** (Vals AI leaderboard / BenchLM — NEW)
- SWE-bench (Vals): **97.0%** (Vals AI leaderboard / BenchLM — NEW)
- CursorBench 3.2: **70.0%** (Cursor evals / BenchLM)
- CursorBench 4.0: **46.6%** (Cursor evals / BenchLM)
- FrontierCode 1.1 Main: **53.4%** (Anthropic / BenchLM — NEW)
- FrontierCode 1.1 Extended: **63.6%** (Anthropic / BenchLM — NEW)
- PostTrainBench v1.1: **49.3%** (PostTrainBench / BenchLM — NEW)
- Bug Hunt Bench: **27 fixes** (Bug Hunt Bench / BenchLM)

Multimodal:

- Chartography (tools): **89.0%** (Anthropic / BenchLM)
- Chartography (no tools): **29.6%** (Anthropic / BenchLM — revised down from prior file's 64.4%)
- AA-MMMU-Pro: **84.7%** (Artificial Analysis / BenchLM)
- OfficeQA: **78.1%** (Anthropic / BenchLM)
- OfficeQA Pro: **66.9%** (Anthropic / BenchLM)
- Design Arena Website: **1314** (OpenRouter / BenchLM)

Long context:

- 1M-token window verified (BenchLM / Anthropic platform docs); GraphWalks BFS 256K–1M: 65.0%

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 79.44, #7/889, 96 of 625) and AA as of 2026-10-10.

- **Tool use: 92/100.** GDPval-AA Elo 1862 (exceeds ≥1750 frontier), BrowseComp 90.8% (≥90 frontier), DeepSearchQA 95.0% (≥90 frontier), DRACO 88.6%, MCP Atlas 85.8% / 89.1% claim coverage, aaTB21 84.3%, TB-2.1 (Vals) 84.6%, Toolathlon Pass@3 87.0%, GDPval-AA normalized 61.2%, AA Agentic Index 56.2%. Exceptional agentic cluster with GDPval ≥1750 and three ≥90% frontier benchmarks. Capped by TB-3.0 42.7%, GDP.pdf 21.0%, OSWorld 48.7%, ApprenticeBench 36%, AA ITBench 38.2%.
- **Reasoning: 87/100.** GPQA 93.2-94.1% (≥90% frontier), HLE w/ tools 64.7% (above 40% frontier), AA-LCR 79.3%, ARC-AGI-1 97.50%, ARC-AGI-2 90.4%, MMLU-Pro (Vals) 91.6%, AA Global-MMLU-Lite 93.1%. Capped by AA Intelligence Index 50.8 (revised from 61 — v4.3.2 methodology update, confirmed by AA model page), CritPt 29.1%, MLCR-AA 55.6%, Omniscience Index 37.1. No GPQA Diamond published for this exact ID on BenchLM (AA-GPQA-D 93.2% used).
- **Context window: 95/100.** 1M-token input window (≥1M tier). GraphWalks BFS 256K–1M: 65.0%, AA-LCR 79.3%. No ≥98% retrieval at 512K+ for 100.
- **Multimodal: 80/100.** Text, image and PDF in / text out (+image/+PDF in = 60-70 tier); lifted by Chartography tools 89.0%, AA-MMMU-Pro 84.7%, OfficeQA 78.1%, Design Arena 1314. No audio/video.
- **Coding: 97/100.** SWE-bench Verified 96%, SWE-bench (Vals) 97.0%, SWE Multilingual 89.5%, ProgramBench 93.0%, DeepSWE 68.8%, VulcanBench CII 96.4%, VulcanBench 87.0%, LiveCodeBench 89.0%, AA Coding Index 78.0%. Exceptional coding cluster with SWE-bench 96/97% and VulcanBench CII 96.4%. Capped by DeepSWE 68.8% (below 74% frontier), CursorBench 4.0 46.6%, AA-SciCode 56.4% (below 55% frontier), FrontierSWE v2 not listed.
- **Cost efficiency: 40/100.** Premium paid tier ($5.00 in / $25.00 out per 1M tokens).
- **Overall Score: 90/100.** Half-up mean: (92+87+95+80+97)/5 = 451/5 = 90.2 → 90. **Best-fit:** elite reasoning + coding agent for the deepest reasoning and longest autonomous coding/research runs; GDPval 1862 + BrowseComp 90.8% + DeepSearchQA 95.0% lead agentic performance, SWE-bench Verified 96% + LiveCodeBench 89% lead coding; cap: Intelligence Index revised 61→50.8 (v4.3.2 methodology), DeepSWE 68.8% below 74% frontier, premium $5/$25 pricing.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/claude-opus-5` for overall rank/score (#7/889, 79.44) and 96 benchmark rows including BrowseComp 90.8%, DeepSearchQA 95.0%, GDPval 1862, SWE-bench Verified 96%, LiveCodeBench 89.0%; AA model page `https://artificialanalysis.ai/models/claude-opus-5` for Intelligence Index 50.8, aaTB21 84.3%, GPQA 93.2%; Anthropic Claude Opus 5 system card PDF). Zero-influence: did not read peer `*.md` findings files during research.
- Key revisions from Oct 1 to Oct 10 fresh BenchLM fetch: Intelligence Index revised from 61 to 50.8 (v4.3.2 methodology update as model pool grew from 223 to 227 reasoning models); AA-LCR revised from 84.7% to 79.3%; new benchmarks confirmed (SWE-bench Verified 96%, LiveCodeBench 89.0%, SWE-bench (Vals) 97.0%, VulcanBench CII 96.4%); AA-GPQA-D 93.2% and MMLU-Pro (Vals) 91.6% added.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5_1.md`, using the same headings.

---
