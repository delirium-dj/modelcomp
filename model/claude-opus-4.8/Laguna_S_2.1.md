# Claude Opus 4.8 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-16 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Claude Opus 4.8 (Anthropic)
- Short description: Anthropic's May 2026 adaptive reasoning flagship model, delivering top-tier intelligence. Superseded by Claude Opus 5 (per AA).
- Provider / access: Anthropic API (`claude-opus-4-8`), AWS Bedrock, Google Vertex AI.
- Release: 2026-05-01. Knowledge cutoff: 2026-03.
- IDs: `anthropic/claude-opus-4-8`
- Context window: 1,000,000 tokens (BenchLM confirms 1M)
- Modalities: text, image in; text out; reasoning yes; tool calls yes; JSON mode yes (per AA model page)
- Pricing (as of 2026-10-10): $5.00 input / $25.00 output per 1M tokens ($3.85 blended with cache)
- Architecture: Proprietary adaptive reasoning architecture

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/claude-opus-4-8`, overall 70.01, rank #17/954, 57 of 639 benchmarks, 2026-10-16), AA model benchmarks (τ²-bench 94.4%, GDPval-AA normalized 47.7%, GDPval-AA Elo 1593, Intelligence Index 41.8, CritPt 20.9%), Anthropic system card (PDF), Vals AI leaderboard, Epoch AI.

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI+Meta comparison citing Anthropic system card / BenchLM)
- Terminal-Bench 3.0: **28.4%** (Anthropic system card / BenchLM)
- AA Terminal-Bench 4.0: **27.1%** (AA leaderboard via BenchLM)
- τ²-bench: **94.4%** (BenchLM model page — exceptional)
- BrowseComp: **89.2%** (BenchLM model page — strong)
- DeepSearchQA: **93.1%** (BenchLM model page — strong)
- GDPval-AA: **62.8%** (BenchLM model page — revised up from "no verified score")
- GDPval-AA (Elo): **1642** (Anthropic system card / BenchLM)
- BBriefcase: **1356** (AA leaderboard via BenchLM)
- AutomationBench: **43.2%** (Anthropic system card)
- AA AutomationBench: **45.3%** (AA leaderboard via BenchLM)
- AA ITBench: **47.8%** (AA leaderboard via BenchLM)
- GDP.pdf: **15.8%** (BenchLM model page)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (BenchLM model page — revised up from 91.2% in prior file)
- AA-GPQA-D: **93.6%** (AA leaderboard via BenchLM)
- HLE (with tools): **56.9%** (Anthropic system card via comparison tables / BenchLM)
- AA-HLE: **55.0%** (AA leaderboard via BenchLM)
- AA Intelligence Index: **50** (BenchLM model page — revised up from 42 in prior file)
- AA-LCR: **82.7%** (AA model benchmarks via BenchLM)
- CritPt: **20.9%** (BenchLM model page — revised down from 31.4% in prior file; BenchLM cites fresh CritPt leaderboard at 20.9%)
- AA-Omniscience Index: **32.3** (AA model benchmarks via BenchLM)
- MLCR-AA: **75.0%** (AA model benchmarks via BenchLM)
- MMLU-Pro: **90.8%** (BenchLM model page)
- AA-MMLU-Pro: **90.8%** (BenchLM model page)
- ARC-AGI-2: **85.1%** (ARC Prize verified results via BenchLM)
- FrontierMath v2 (Tiers 1-3): **84.9%** (Anthropic system card)
- BixBench: **78.4%** (BenchLM model page)

Coding:

- SWE-bench: **72.3%** (Anthropic system card via comparison tables)
- SWE Multilingual: **84.7%** (Anthropic system card)
- DeepSWE: **62.9%** (BenchLM model page — revised down from 68.5% in prior file)
- AA-SciCode: **58.3%** (AA leaderboard via BenchLM)
- ProgramBench: **75.6%** (Anthropic system card)
- AA Coding Index: **71.2%** (AA model benchmarks via BenchLM)
- SWE-bench Verified: **78.5%** (BenchLM model page — revised up from "no verified score")
- LiveCodeBench: **84.2%** (BenchLM model page — revised up from "no verified score")

Multimodal:

- AA-MMMU-Pro: **81.9%** (BenchLM model page)
- Design Arena Website: **1243** (OpenRouter via BenchLM)

Long context:

- AA-LCR (long-context reasoning at 1M): 82.7%
- MLCR-AA (medical long-context reasoning): 75.0%

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 73.58, #16/889) and AA as of 2026-10-10.

- **Tool use: 88/100.** (Revised DOWN from 96.) τ²-bench 94.4% (near ≥95 frontier ref, confirmed on current page), BrowseComp 92.2% (≥90 frontier, revised up from 89.2%), CyberGym 81.8%, OSWorld-Verified 83.4% (new), MCP Atlas 82.2% (new). CRITICAL: GDPval-AA normalized 47.7% (down from 62.8%), GDPval-AA Elo 1593 (down from 1642, below 1750 frontier). Capped by GDPval-AA Elo below 1750 frontier, TB-3.0 21.1% (weak), OSWorld 2.0 20.6% (weak), ApprenticeBench 14.9%, AA Agentic Index 42.6%.
- **Reasoning: 86/100.** (Revised DOWN from 87.) GPQA 93.6% (≥90 frontier, unchanged), AA-GPQA-D 92.0% (down from 93.6%), ARC-AGI-1 95.00% (≥96 frontier, new), ARC-AGI-2 72.1% (down from 85.1%), HLE 57.9% (up from 56.9%), AA Intelligence Index 41.8 (CRITICAL downgrade from 50), AA-LCR 79.3% (down from 82.7%), CritPt 20.9% (unchanged), FrontierMath v2 T1-3 85.614% (≥85 frontier, up from 84.9%), USAMO 2026 96.7% (new). Capped by Intelligence Index 41.8 (below 60 frontier), ARC-AGI-2 72.1%, CritPt 20.9%.
- **Context window: 95/100.** 1M tokens (verified via BenchLM). AA-LCR 79.3% (down from 82.7%) and MLCR-AA 75.0% confirm long-context reasoning. No ≥98% retrieval at 512K+ data to claim higher than 95.
- **Multimodal: 72/100.** Text and image input, text output (per AA model page and BenchLM). New confirmed vision benchmarks: CharXiv 89.9%, ScreenSpot Pro 87.9% (both strong). Per methodology "+image in = 60-70", pushed to 72 by exceptional vision benchmarks. No audio/video input verified.
- **Coding: 88/100.** (Revised UP from 86.) SWE-bench Verified 88.6% (≥85 frontier, revised up from 78.5%), SWE-bench (Vals) 88.6% (new, ≥85 frontier), LiveCodeBench (Vals) 87.8% (new, ≥85 frontier), AA Coding Index 76.0% (up from 71.2%), DeepSWE 62.9%, AA-SciCode 54.4% (down from 58.3%). Capped by no SWE-bench Pro for reasoning variant, FrontierCode 46.5%, PostTrainBench 32.9%.
- **Cost efficiency: 45/100.** Premium tier pricing ($5.00 in / $25.00 out per 1M tokens).
- **Overall Score: 86/100.** Half-up mean: (88+86+95+72+88)/5 = 429/5 = 85.8 → 86. (Revised DOWN from 87.) Tool use downgraded (τ²-bench still 94.4%, BrowseComp 89.2→92.2%, but GDPval-AA normalized 62.8→47.7% and Elo 1642→1593); Reasoning downgraded (Intelligence Index 50→41.8 CRITICAL, ARC-AGI-2 85.1→72.1%, AA-GPQA-D 93.6→92.0%, AA-LCR 82.7→79.3%); Coding upgraded (SWE-bench Verified 78.5→88.6%, AA Coding Index 71.2→76.0%); Multimodal upgraded (CharXiv 89.9%, ScreenSpot Pro 87.9% new). BenchLM updated 73.58 (#16/889) → 70.01 (#17/954, 57 of 639).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-16 (UTC)
- Method: public internet research (BenchLM.ai model page for full benchmark tables; Artificial Analysis model benchmarks for τ²-bench, GDPval-AA, Intelligence Index; Anthropic system card via PDF for additional benchmarks; Vals AI for coding benchmarks; Epoch AI for FrontierMath v2); scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `*.md` findings files during research.
- Sources: BenchLM.ai model page `https://benchlm.ai/models/claude-opus-4-8` (Overall 70.01/100, rank #17/954, 57 of 639 benchmarks, 2026-10-16); AA model benchmarks (τ²-bench 94.4%, GDPval-AA Elo 1593, GDPval-AA normalized 47.7%, Intelligence Index 41.8, CritPt 20.9%); Anthropic Claude Opus 4.8 system card (PDF); Vals AI leaderboard; Epoch AI FrontierMath v2 leaderboard.
- Re-verification (Oct 16): BenchLM updated from 73.58 (#16/889) to 70.01 (#17/954, 57/639). CRITICAL: AA Intelligence Index 50→41.8, GDPval-AA normalized 62.8→47.7%, GDPval-AA Elo 1642→1593. ARC-AGI-2 85.1→72.1%, AA-GPQA-D 93.6→92.0%, AA-HLE 55.0→50.2%, AA-LCR 82.7→79.3%. Upward: BrowseComp 89.2→92.2%, SWE-bench Verified 78.5→88.6%, AA Coding Index 71.2→76.0%, FrontierMath v2 T1-3 84.9→85.614%. New: USAMO 2026 96.7%, HealthBench Professional 60.5%, AA-IFBench 57.0%, aaTB21 91.4%, INCLUDE 87.6%. Normalized: Tool 96→88, Reasoning 87→86, Multimodal 70→72, Coding 86→88. Overall 87→86.

---
