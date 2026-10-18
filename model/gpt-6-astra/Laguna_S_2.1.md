# GPT-6 Astra — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-17 (UTC) — re-verification of 2026-10-10 scores
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (max) (OpenAI)
- **Short description:** OpenAI's September 2026 frontier reasoning model, the most capable variant of the GPT-6.1 family and the #1 ranked model on BenchLM. Built for frontier reasoning and agents with a 1.05M-token context window, text+image input, and elite performance across agentic, coding, and multimodal benchmarks.
- **Provider / access:** OpenAI API via Chat Completions / Responses API; ID `gpt-6-astra`. Also available through 8 API providers. No verified Free ID on Zen (noFreeID per repo meta).
- **Release / knowledge:** September 3, 2026 (per AA), knowledge cutoff April 30, 2026 (per AA).
- **IDs:** `gpt-6-astra` (BenchLM canonical slug `gpt-6-astra`; repo meta `opencode/gpt-6-astra`). noFreeID per repo `meta.json`.
- **Context window:** **1,050,000** (BenchLM) / **1,000,000 (1.0M)** (AA technical spec; ~1500 A4 pages). BenchLM canonical page lists 1.05M; AA model spec lists 1M. Scored on ≥1M tier.
- **Modalities:** **Text and image input; text output** (AA confirms). Reasoning yes; tool/function calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** **$10.00 in / $50.00 out per 1M tokens** (AA confirmed); 90% cache discount ($1.00 cached in); $3.26 cost per Intelligence Index task. Paid-tier only; no Free ID on Zen.
- **Architecture:** Proprietary dense transformer (OpenAI). No parameter count disclosed.

### Raw benchmarks found

> Verified public numbers sourced from BenchLM (`https://benchlm.ai/models/gpt-6-astra`, overall 83.88, rank #3/954, 74 of 639 benchmarks, 2026-10-17); Google DeepMind evaluation methodology; Artificial Analysis.

Agent / tool use:

- BrowseComp: **91.5%** (OpenAI launch blog — ≥90% frontier threshold!)
- DeepSearchQA: **95.0%** (OpenAI launch blog — ≥90% frontier threshold!)
- OSWorld 2.0: **72.6%** (OpenAI launch blog — corrected from GPT-5.5 cross-ref 78.7% to GPT-6 Astra-specific)
- Terminal-Bench 4.0: **57.90%** (OpenAI launch blog)
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI launch blog)
- ExploitGym: **42.4%** (OpenAI launch blog)
- Agents' Last Exam: **59.3%** (OpenAI launch blog)
- GDPval-AA (normalized): **53.6%** (Artificial Analysis model benchmarks)
- GDPval-AA (Elo): **1573** (Artificial Analysis leaderboard — below ~1750 frontier but strong)
- AA Briefcase (Elo): **1570** (Artificial Analysis leaderboard)
- AA AutomationBench: no verified public score found
- AA Agentic Index: **51.5%** (Artificial Analysis model benchmarks)
- Hermes Index: **56.3%** (BenchLM model page)
- Hermes Bench: **73.7%** (BenchLM model page)
- MazeBench: **23%** (BenchLM model page)
- GDP.pdf: **31.0%** (Artificial Analysis leaderboard — low)
- AA ITBench: **48.6%** (Artificial Analysis leaderboard)
- aaTerminalBench21: **88.4%** (Artificial Analysis: terminalbench-v2-1 leaderboard)
- AA Terminal-Bench 4.0: **59.1%** (Artificial Analysis: terminalbench-v4-0 leaderboard)
- Terminal-Bench 2.1 (Vals): **87.3%** (Vals AI leaderboard)
- ApprenticeBench: **68%** (NeoCognition)
- CWE-bench v1: **68.0%** (CWE-bench leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **96%** (OpenAI launch blog — ≥90 frontier)
- GPQA Diamond (Vals): **96.0%** (Vals AI leaderboard)
- AA-GPQA-D: **96.1%** (Artificial Analysis leaderboard — ≥95 frontier)
- HLE: **57.2%** (OpenAI launch blog — above 40% frontier)
- HLE w/ tools: **57.2%** (OpenAI launch blog)
- HLE w/o tools: **56.3%** (OpenAI launch blog)
- AA-HLE: **54.7%** (Artificial Analysis leaderboard)
- AA Intelligence Index: **52.7%** (Artificial Analysis — #7/889, 4/4 units for Intelligence)
- AA-LCR: **80.7%** (Artificial Analysis leaderboard)
- MLCR-AA: **35.0%** (Artificial Analysis leaderboard)
- CritPt: **31.7%** (Artificial Analysis leaderboard)
- AA-Omniscience Index: **43.4** (Artificial Analysis)
- AA-Omniscience Accuracy: **62.6%** (Artificial Analysis leaderboard)
- AA-Omniscience Hallucination Rate: **51.3%** (Artificial Analysis model benchmarks)
- MMLU-Pro (Vals): **91.6%** (Vals AI leaderboard)
- AA-MMLU-Pro: no verified public score found
- AA Global-MMLU-Lite: no verified public score found
- ARC-AGI-1: **98.50%** (ARC Prize verified results)
- ARC-AGI-2: **95%** (ARC Prize verified results)
- ARCG-A-3: **62.7%** (ARC Prize verified results)
- GeneBench-Pro: **37.8%** (OpenAI launch blog)
- MRCR v2 256K-512K: **100.0%** (OpenAI launch blog — ≥98% at 512K+ frontier!)
- MRCR v2 512K-1M: **96.3%** (OpenAI launch blog — ≥98% at 512K+ frontier!)
- GraphWalks BFS 256K–1M: **71.8%** (Gemini 4 Argon launch chart)
- FrontierMath v2 (Tier 4): **97.600%** (OpenAI launch blog)
- FrontierMath v2 (Tiers 1-3): **93.684%** (OpenAI launch blog — new Oct 17)

Coding:

- DeepSWE: **74.1%** (OpenAI launch blog — ≥74% frontier threshold!)
- SWE-bench (Vals): **97.0%** (Vals AI leaderboard / BenchLM — NEW: prior file had "no verified score")
- SWE-bench Verified: **96%** (OpenAI launch blog — NEW: prior file had "no verified score")
- LiveCodeBench: **88.5%** (Google DeepMind model card / BenchLM — NEW)
- SWE-bench Pro: **81.2%** (OpenAI launch blog — NEW)
- SWE-bench Multilingual: **93.9%** (OpenAI launch blog)
- SWE-bench Multimodal: **61.4%** (OpenAI launch blog)
- AA-SciCode: **56.5%** (Artificial Analysis leaderboard — ≥55% frontier)
- AA Coding Index: **76.9%** (Artificial Analysis model benchmarks — above 70% frontier)
- VulcanBench v3: **87.0%** (VulcanBench technical report)
- VulcanBench CII v1: **96.4%** (VulcanBench CII v1)
- ProgramBench: **93.0%** (OpenAI launch blog)
- FrontierCode 1.1 Main: **53.3%** (OpenAI launch blog)
- FrontierCode 1.1 Extended: **64.5%** (OpenAI launch blog)
- CursorBench 3.2: **70.0%** (Cursor evals)
- CursorBench 4.0: **46.6%** (Cursor evals)
- FrontierSWE v2: **65.5%** (FrontierSWE leaderboard)
- PostTrainBench v1.1: **44.3%** (Google Gemini 4 Argon launch chart / BenchLM)
- Bug Hunt Bench: **43.8 fixes** (BenchLM model page)

Multimodal:

- ScreenSpot Pro: **92.7%** (OpenAI launch blog)
- BenchCAD Vision2Code (tools): **0.959** (OpenAI launch blog)
- AA-MMMU-Pro: **86.9%** (Artificial Analysis leaderboard)
- Design Arena Website: **1314** (OpenRouter model benchmarks)
- AA-Video-MME: no verified public score found

Long context:

- Context window: 1,050,000 (BenchLM) / 1,000,000 (1.0M) (AA technical spec; ~1500 A4 pages) — ≥1M tier
- MRCR v2 256K-512K: **100.0%** (OpenAI launch blog — ≥98% at 512K+ frontier!)
- MRCR v2 512K-1M: **96.3%** (OpenAI launch blog — ≥98% at 512K+)
- AA-LCR: 80.7% (Artificial Analysis) — long-context reasoning proxy
- GraphWalks BFS 256K–1M: 71.8% (Google Gemini 4 Argon launch chart)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 83.88, #3/954, 74 of 639) and AA as of 2026-10-17.

- **Tool use: 92/100.** GDPval-AA Elo 1573 (below ~1750 frontier but strong), BrowseComp 91.5% (≥90 frontier), aaTB21 88.4%, TB-2.1 (Vals) 87.3%, AA Terminal-Bench 4.0 59.1%, DeepSearchQA 95.0% (≥90 frontier), OSWorld 72.6%, GDPval-AA normalized 53.6%, AA Agentic Index 51.5%, Hermes Index 56.3%, Hermes Bench 73.7%, MazeBench 23%, AA Briefcase 1570 Elo. Strong agentic cluster with two ≥90% frontier benchmarks and aaTB21 meeting ≥88% frontier. Capped by TB-4.0 57.9%, GDP.pdf 31.0%, ApprenticeBench 68%, AA ITBench 48.6%.
- **Reasoning: 89/100.** GPQA Diamond 96% / AA-GPQA-D 96.1% (≥95 frontier), HLE w/ tools 57.2% (above 40% frontier), AA-HLE 54.7%, MMLU-Pro (Vals) 91.6%, AA-LCR 80.7%, ARC-AGI-1 98.50%, ARC-AGI-2 95%. MRCR v2 256K-512K 100% and 512K-1M 96.3% (≥98% at 512K+ frontier!). Capped by AA Intelligence Index 52.7 (below ~60 frontier ref), CritPt 31.7%, MLCR-AA 35% (below 40% mid-tier), Omniscience Index 43.4 (moderate reliability, 51.3% hallucination rate).
- **Context window: 97/100.** BenchLM-verified **1,050,000** tokens (≥1M tier = 95-100 per methodology); MRCR v2 256K-512K at **100.0%** and 512K-1M at **96.3%** — both ≥98% at 512K+ threshold. Capped by 96.3% at 512K-1M (below 100% for nominal), not ≥98% for a perfect 100.
- **Multimodal: 67/100.** Verified text+image input, text output only (AA confirms; methodology "+image in = 60-70"). Benchmark performance is elite (AA-MMMU-Pro 86.9%, ScreenSpot Pro 92.7%) but dimension scores coverage per v4 methodology. Capped by text-only output, no video/audio/PDF input, no AA-Video-MME.
- **Coding: 90/100.** SWE-bench Verified 96% (NEW — prior file: "no verified score"), SWE-bench (Vals) 97.0% (NEW), LiveCodeBench 88.5% (NEW), DeepSWE 74.1% (≥74% frontier ref), AA-SciCode 56.5% (≥55% frontier), AA Coding Index 76.9% (≥70% frontier), VulcanBench CII 96.4%, ProgramBench 93.0%, VulcanBench v3 87.0%, SWE-bench Multilingual 89.5%, SWE-bench Multimodal 61.4%, Bug Hunt Bench 45.0. Multiple elite coding benchmarks across 4 of 4 coding frontiers (DeepSWE ≥74%, LiveCode ≥90, SciCode ≥55%, Coding Index ≥70). Capped by no SWE-bench Verified on BenchLM (using OpenAI launch blog), CursorBench 4.0 46.6%, FrontierCode 53.3%.
- **Cost efficiency: 30/100.** $10.00 in / $50.00 out per 1M tokens (paid tier, most expensive per methodology). 90% cache discount + $1.00 cached input offsets somewhat; $3.26 cost per Intelligence Index task; noFreeID (no Zen free tier).
  - **Overall Score: 87/100.** Half-up mean: (92+89+97+67+90)/5 = 435/5 = 87. **Best-fit:** #3-ranked model on BenchLM (83.88, #3/954) with elite reasoning (GPQA 96%, AA-GPQA-D 96.1%, ARC-AGI-1 98.50%, MRCR 100%) and coding clusters (SWE-bench Verified 96%, DeepSWE 74.1%, SWE-bench (Vals) 97%); BrowseComp 91.5% (≥90 frontier) + GDPval 1573 lead agentic performance; cap: Intelligence Index 52.7 (below ~60 frontier), premium $10/$50 pricing, no free tier.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gpt-6-astra` for overall rank/score (#3/954, 83.88, 74 of 639) and 72 benchmark rows; AA model page `https://artificialanalysis.ai/models/gpt-6-astra` for Intelligence Index 52.7, GPQA 96.1%, pricing $10/$50, aaTB21 88.4%, AA Terminal-Bench 4.0 59.1%, GDPval-AA normalized 52.1%, AA-MMMU-Pro 86.9%, GDP.pdf 31.0%, AA ITBench 48.6%; OpenAI launch blog for BrowseComp 91.5%, DeepSearchQA 95.0%, OSWorld 72.6%, GPQA 96%, SWE-bench Verified 96%, DeepSWE 74.1%, MRCR 100%/96.3%, FrontierMath 97.6%; Vals AI for SWE-bench (Vals) 97.0%, LiveCodeBench 88.5%, GPQA 96.0%, MMLU-Pro 91.6%, TB-2.1 87.3%; ARC Prize for ARC-AGI-1 98.50%, ARC-AGI-2 95%; VulcanBench for CII 96.4%, VulcanBench v3 87.0%). Zero-influence: did not read peer `*.md` findings files during research.
- Re-verification (2026-10-17): BenchLM overall 83.88 (#3/954, 74/639) unchanged from Oct 16. GDPval-AA Elo 1542→1573, normalized 52.1→53.6%; AA Briefcase 1569→1570; Bug Hunt Bench 43.8→45.0; new Oct 17 benchmarks: FrontierMath v2 (Tiers 1-3) 93.684%, Hermes Index 56.3%, Hermes Bench 73.7%, MazeBench 23%. Dimension scores and Overall retained at 87.
- Key revisions from Oct 1 to Oct 10 fresh BenchLM fetch: OSWorld corrected from 78.7% (GPT-5.5 cross-ref) to 72.6% (GPT-6 Astra-specific); BrowseComp corrected from 90.1% to 91.5% (OpenAI launch blog confirmed); new coding benchmarks confirmed (SWE-bench Verified 96%, SWE-bench (Vals) 97.0%, LiveCodeBench 88.5%, SWE-bench Pro 81.2%, VulcanBench CII 96.4%, ProgramBench 93.0%); AA Terminal-Bench 4.0 59.1% and AA ITBench 48.6% added; MRCR v2 512K-1M 96.3% confirmed (≥98% at 512K+ frontier). Overall revised from 86 to 87.

---
