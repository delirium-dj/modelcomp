# Gemini 3.7 Flash — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's August 2026 Gemini 3 Flash workhorse, a refinement of Gemini 3.6 Flash tuned for budget-conscious agentic coding and document-heavy enterprise workflows (free tier on Google AI Studio).
- **Provider / access:** Google Gemini API (`google/gemini-3.7-flash`), Google AI Studio (free tier), Vertex AI.
- **Release / knowledge:** Released August 13, 2026. Knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 (1M) in / 65,536 (64K) out
- **Modalities:** text, image, audio, video, pdf in; text, tool-calls out
- **Pricing (as of 2026-09-20):** Introductory $0.75 in / $3.75 out per 1M through end-2026 (thinking/cached output billed as output); cached input $0.075/M (90% off); Batch and Flex APIs 50% off; free on Google AI Studio / unpaid API quota. Standard rates double to $1.50/$7.50 in January 2027.
- **Architecture:** Proprietary; described as algorithmic refinement of Gemini 3.6 Flash (no new pretraining); Mixture-of-Experts not confirmed; parameters not disclosed.

### Raw benchmarks found

> Sources: BenchLM.ai (`https://benchlm.ai/models/gemini-3.7-flash`, overall 71.35, rank #30/889, 36 of 625 benchmarks); Google DeepMind model card; Artificial Analysis; Vals AI leaderboards. 42 benchmarks verified across 3 independent sources (36 from fresh Oct 10 BenchLM + 6 from Google launch + AA).

Agent / tool use:

- WebDev Arena: **1588 Elo** (Google-reported, Aug 13 2026; ahead of Claude Sonnet 5 1541 and GPT-5.6 Terra 1523)
- τ²-bench: **95.6%** (Google DeepMind / BenchLM — NEW, elite)
- Terminal-Bench 2.1: **85.8%** (Artificial Analysis / BenchLM — NEW, near ≥88 frontier)
- aaTerminalBench21: **85.8%** (Artificial Analysis / BenchLM — NEW)
- GDPval-AA (Elo): **1525** (Artificial Analysis / BenchLM — NEW, below ~1750 frontier but strong)
- GDPval-AA (normalized): **51.6%** (Artificial Analysis model benchmarks / BenchLM — NEW)
- AA Agentic Index: **51.5%** (Artificial Analysis model benchmarks / BenchLM — NEW)
- AA Terminal-Bench 4.0: **57.3%** (Artificial Analysis / BenchLM — NEW)
- AA AutomationBench: **73.7%** (Artificial Analysis / BenchLM — NEW, strong)
- AutomationBench: **30.4%** (Google-reported, Aug 13 2026; ahead of Claude Sonnet 5 10.7% and GPT-5.6 Terra 23.6%)
- GDP.pdf: **34.0%** (Google-reported, Aug 13 2026; up from Gemini 3.6 Flash's 22.0%)
- OSWorld 2.0: no verified public score found
- ApprenticeBench: no verified public score found
- AA ITBench: no verified public score found
- AA Briefcase (Elo): no verified public score found
- AA Tau3 Banking: no verified public score found
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Terminal-Bench 4.0: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (Artificial Analysis / BenchLM — NEW, ≥90 frontier threshold!)
- GPQA Diamond (Vals): **94.4%** (Vals AI leaderboard / BenchLM — NEW)
- HLE: **54.9%** (Artificial Analysis / BenchLM — NEW, above 40% frontier)
- HLE w/ tools: **54.9%** (Artificial Analysis / BenchLM — NEW)
- AA-HLE: **47.8%** (Artificial Analysis / BenchLM — from Sep 20 file, confirmed via BenchLM citation)
- AA Intelligence Index: **39.1%** (Artificial Analysis — revised DOWN from 56 cited Aug 14 2026; significant drop reflecting AI ranking methodology evolution v4.3.2 as model pool grew from 212 to 889 models)
- AA-LCR: no verified public score found
- MLCL-AA: **34.0%** (Artificial Analysis / BenchLM — NEW, below mid-tier)
- MMLU-Pro: **90.2%** (Artificial Analysis / BenchLM — NEW)
- AA-MMLU-Pro: **89.8%** (Artificial Analysis / BenchLM — NEW)
- CritPt: no verified public score found
- ARC-AGI-1: **98.50%** (ARC Prize verified results / BenchLM — NEW)
- ARC-AGI-2: **89.2%** (ARC Prize verified results / BenchLM — NEW)
- BioMysteryBench: no verified public score found
- AA-Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **65.3%** (Google-reported, Aug 13 2026; +16.7 pts vs Gemini 3.6 Flash's 49.0%; below 74% frontier)
- FrontierCode 1.1: **43.6%** (Google-reported, Aug 13 2026; up from 34.4%)
- LiveCodeBench: **88.7%** (Artificial Analysis / BenchLM — NEW, near ≥90 frontier)
- LiveCodeBench (Vals): **88.7%** (Vals AI leaderboard / BenchLM — NEW)
- SWE-bench: **80.8%** (Artificial Analysis / BenchLM — NEW)
- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- AA-SciCode: **55.4%** (Artificial Analysis / BenchLM — NEW, ≥55% frontier)
- AA Coding Index: **75.8%** (Artificial Analysis / BenchLM — NEW, above 70% frontier)
- VulcanBench: no verified public score found
- CursorBench: no verified public score found
- Bug Hunt Bench: no verified public score found

Multimodal:

- LVBench: **85.4%** (Artificial Analysis / BenchLM — NEW)
- CharXiv (tools): **88.7%** (Google DeepMind / BenchLM — NEW)
- CharXiv (no tools): **86.2%** (Google DeepMind / BenchLM — NEW)
- AA-MMMU-Pro: **85.5%** (Artificial Analysis / BenchLM — NEW, ≥80 frontier)
- Design Arena Website: **1307** (OpenRouter / BenchLM)
- AA-Video-MME: no verified public score found

Long context:

- Context window: 1,048,576 (1M) in / 65,536 (64K) out (verified via meta.json)
- GDM-MRCR v2 (128K depth): **97.0%** (Google-reported, Aug 13 2026 — recall holds deep into the 1M window)
- MRCR: no ≥98% retrieval at 512K+ figure published
- GraphWalks: no verified public score found for this model

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 71.35, #30/889, 36 of 625) and AA as of 2026-10-10.

- **Tool use: 78/100.** τ²-bench 95.6% (elite), TB-2.1 85.8% (near ≥88 frontier), aaTB21 85.8%, GDPval-AA Elo 1525 (below ~1750 frontier but strong), AA Agentic Index 51.5%, GDPval-AA normalized 51.6%, AA AutomationBench 73.7%, WebDev Arena 1588 Elo, GDP.pdf 34.0%, AutomationBench 30.4%. τ²-bench at 95.6% and TB-2.1 near frontier lift this dimension. Capped by GDPval-AA 1525 (below 1750 frontier), TB-4.0 not listed, GDP.pdf 34.0% (low), ApprenticeBench not listed, OSWorld not listed, no SWE-bench Verified/LiveCodeBench in tool-use category.
- **Reasoning: 82/100.** GPQA Diamond 94.5% (≥90 frontier), GPQA (Vals) 94.4%, HLE 54.9% (above 40% frontier), AA-LCR not listed, MMLU-Pro 90.2%, AA-MMLU-Pro 89.8%, AA Global-MMLU-Lite 92.2%, ARC-AGI-1 98.50%, ARC-AGI-2 89.2%. Capped by AA Intelligence Index 39.1 (well below ~60 frontier ref, revised down from 56 via v4.3.2 methodology update as model pool grew from 212 to 889 — significant 16.9-point drop), CritPt not listed, MLCL-AA 34.0% (below 40% mid-tier), no LCR.
- **Context window: 96/100.** 1M-token input window with GDM-MRCR v2 97.0% at 128K depth — usable, not nominal. 64K-token output ceiling. No ≥98% retrieval at 512K+ for perfect 100.
- **Multimodal: 92/100.** Text, image, audio, video and PDF input — the fullest modality mix of the Gemini Flash tier. AA-MMMU-Pro 85.5%, LVBench 85.4%, CharXiv 88.7%, Design Arena 1307. Capped by text-only output (no multimodal output), no AA-Video-MME.
- **Coding: 85/100.** LiveCodeBench 88.7% (near ≥90 frontier), SWE-bench 80.8%, AA-SciCode 55.4% (≥55% frontier), AA Coding Index 75.8% (≥70% frontier), TB-2.1 85.8% (≥85 frontier), DeepSWE 65.3% (below 74% frontier), FrontierCode 43.6%. Capped by DeepSWE 65.3% (below 74% frontier), no SWE-bench Verified/Pro, no VulcanBench, no CursorBench, no Bug Hunt Bench.
- **Cost efficiency: 95/100.** Free on Google AI Studio / unpaid quota, with a cheap paid intro ($0.75/$3.75/M); 90% cache discount; Batch and Flex APIs 50% off. Capped by time-limited introductory pricing (doubles to $1.50/$7.50 in Jan 2027).
- **Overall Score: 87/100.** Half-up mean: (78+82+96+92+85)/5 = 433/5 = 86.6 → 87. **Best-fit:** cost-efficient coding/agentic Flash workhorse with elite reasoning benchmarks (GPQA-D 94.5%, ARC-AGI-1 98.50%) and strong coding (LiveCodeBench 88.7%, SWE-bench 80.8%, AA-SciCode 55.4%); cap: Intelligence Index revised from 56 to 39.1 (v4.3.2 methodology as model pool grew 212→889), DeepSWE 65.3% below 74% frontier, GDPval-AA 1525 below 1750 frontier. Free on Google AI Studio.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gemini-3.7-flash` for overall rank/score (#30/889, 71.35) and 36 benchmark rows including τ²-bench 95.6%, GPQA-D 94.5%, TB-2.1 85.8%, aaTB21 85.8%, GDPval-AA Elo 1525, GDPval-AA normalized 51.6%, AA Agentic Index 51.5%, AA AutomationBench 73.7%, AA Terminal-Bench 4.0 57.3%, AA-MMMU-Pro 85.5%, LVBench 85.4%, CharXiv 88.7%, MMLU-Pro 90.2%, AA-MMLU-Pro 89.8%, AA Global-MMLU-Lite 92.2%, AA-SciCode 55.4%, AA Coding Index 75.8%, LiveCodeBench 88.7%, SWE-bench 80.8%, MLCL-AA 34.0%, ARC-AGI-1 98.50%, ARC-AGI-2 89.2%; AA model page `https://artificialanalysis.ai/models/gemini-3.7-flash` for Intelligence Index 39.1 (revised from 56 via v4.3.2), GDPval-AA Elo 1525, pricing $0.75/$3.75; Google DeepMind model card for GDM-MRCR 97.0%, WebDev Arena 1588 Elo, GDP.pdf 34.0%, DeepSWE 65.3%, Vibe Code Bench not listed, FrontierCode 43.6%; Vals AI for LiveCodeBench (Vals) 88.7%, GPQA 94.4%; ARC Prize for ARC-AGI-1 98.50%, ARC-AGI-2 89.2%). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Key revisions from Sep 20 to Oct 10 fresh BenchLM fetch: AA Intelligence Index revised from 56 to 39.1% (v4.3.2 methodology update as model pool grew from 212 to 889 — 16.9-point drop, median increased); new benchmarks confirmed (τ²-bench 95.6%, GPQA-D 94.5%, TB-2.1 85.8%, aaTB21 85.8%, GDPval-AA Elo 1525, AA Agentic Index 51.5%, AA AutomationBench 73.7%, AA Terminal-Bench 4.0 57.3%, LiveCodeBench 88.7%, SWE-bench 80.8%, AA-MMMU-Pro 85.5%, LVBench 85.4%, CharXiv 88.7%, MMLU-Pro 90.2%, AA-MMLU-Pro 89.8%, AA Global-MMLU-Lite 92.2%, AA-SciCode 55.4%, AA Coding Index 75.8%, MLCL-AA 34.0%, HLE 54.9%, ARC-AGI-1 98.50%, ARC-AGI-2 89.2%); GDM-MRCR v2 97.0% at 128K confirmed. Overall revised from 85 to 87 (Intelligence Index drop offset by elite new benchmarks: τ²-bench 95.6%, GPQA-D 94.5%, ARC-AGI-1 98.50%, LiveCodeBench 88.7%).

---
