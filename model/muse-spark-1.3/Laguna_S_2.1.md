# Muse Spark 1.3 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-16 (UTC) — re-verification of 2026-10-10 scores
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (Free) — reporting the free Contributor-tier xhigh variant
- **Short description:** Meta's Muse Spark 1.3 (xhigh), the fourth Muse Spark release, available free on OpenCode Zen in exchange for a training-data consent agreement; same weights as the standard $1.25/$4.25 paid tier, tuned for agentic knowledge work and science reasoning.
- **Provider / access:** Meta first-party API and Muse Code; OpenCode Zen free Contributor tier (`opencode/muse-spark-1.3-contributor-free`).
- **Release / knowledge:** Released September 2, 2026. Knowledge cutoff not disclosed.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Free Contributor tier); paid `meta/muse-spark-1.3`
- **Context window:** 1,048,576 (1M) in / 131,072 (128K) out
- **Modalities:** text, image, video in; text out
- **Pricing (as of 2026-09-20):** Free Zen Contributor tier (training-data consent); paid $1.25 in / $4.25 out per 1M (cached $0.15/M).
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

> Sources: BenchLM.ai (`https://benchlm.ai/models/muse-spark-1.3`, overall 82.02, rank #5/889, 38 of 625 benchmarks); Artificial Analysis model page; Meta AI Research launch scorecard. 38 benchmarks verified across 4 independent sources.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta AI Research launch scorecard / BenchLM — meets ≥88% frontier threshold!)
- Terminal-Bench 2.1 (Vals): **72.3%** (Vals AI leaderboard)
- aaTerminalBench21: **84.3%** (Artificial Analysis: terminalbench-v2-1 leaderboard / BenchLM)
- GDPval-AA (Elo): **1754** (Meta AI Research launch scorecard / BenchLM — exceeds ≥1750 frontier threshold!)
- GDPval-AA (normalized): **59.2%** (Artificial Analysis model benchmarks / BenchLM)
- AA Briefcase (Elo): **1583** (Artificial Analysis / BenchLM)
- OSWorld 2.0: **66.9%** (Meta AI Research / BenchLM)
- DeepSearchQA: **89.4%** (Meta AI Research / BenchLM)
- AutomationBench: **49.4%** (Meta AI Research / BenchLM)
- AA AutomationBench: **57.9%** (Artificial Analysis / BenchLM)
- AA Agentic Index: **55.7%** (Artificial Analysis / BenchLM)
- AA ITBench: **33.2%** (Artificial Analysis / BenchLM)
- GDP.pdf: **26.6%** (Artificial Analysis / BenchLM)
- ApprenticeBench: **19%** (NeoCognition / BenchLM)
- AA Terminal-Bench 4.0: **33.3%** (Artificial Analysis / BenchLM)
- CWE-bench v1: **55.0%** (Collinear / BenchLM)
- Toolathlon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Artificial Analysis: gpqa-diamond leaderboard / BenchLM — ≥90 frontier threshold)
- GPQA Diamond (Vals): **93.5%** (Vals AI leaderboard / BenchLM)
- HLE: **48.7%** (Artificial Analysis: humanitys-last-exam leaderboard / BenchLM — above 40% frontier)
- AA Intelligence Index: **48.1%** (Artificial Analysis — revised DOWN from 61 cited Sep 2 2026; this significant drop reflects AI ranking methodology evolution v4.3.2 as the model pool grew from 230 to 889 models)
- AA-LCR: **83.0%** (Artificial Analysis: long-context-reasoning leaderboard / BenchLM)
- MRCR v2 256K-512K: **98.5%** (Meta AI Research — ≥98% at 512K+ threshold!)
- MRCR v2 512K-1M: **98.1%** (Meta AI Research / BenchLM)
- CritPt: **24.9%** (Artificial Analysis / BenchLM)
- MLCR-AA: **43.3%** (Artificial Analysis / BenchLM)
- AA-Omniscience Index: **25.0%** (Artificial Analysis — low reliability)
- AA-Omniscience Accuracy: **43.6%** (Artificial Analysis model benchmarks / BenchLM)
- AA-Omniscience Hallucination Rate: **32.9%** (Artificial Analysis model benchmarks / BenchLM)
- MMLU-Pro (Vals): **91.6%** (Vals AI leaderboard / BenchLM)
- AA-MMLU-Pro: **89.8%** (Artificial Analysis / BenchLM)
- AA Global-MMLU-Lite: **92.2%** (Artificial Analysis / BenchLM)
- ARC-AGI-1: **97.50%** (ARC Prize verified results / BenchLM)

Coding:

- DeepSWE: **75.4%** (Meta AI Research launch scorecard / BenchLM — meets ≥74% frontier threshold!)
- SWE-bench Verified / LiveCodeBench: no verified public score found
- AA-SciCode: **58.8%** (Artificial Analysis / BenchLM — ≥55% frontier threshold)
- AA Coding Index: **75.8%** (Artificial Analysis / BenchLM — ≥70% frontier threshold)
- CursorBench 4.0: **41.6%** (Cursor evals / BenchLM)
- Bug Hunt Bench: **32.2 fixes** (Bug Hunt Bench)
- SWE-Atlas Codebase QnA: **59.4%** (Meta AI Research / BenchLM)

Multimodal:

- Design Arena Website: **1363** (OpenRouter model benchmarks / BenchLM)
- AA-MMMU-Pro: no verified public score found

Long context:

- Context window: 1,048,576 (1M) tokens (verified via AA model page)
- MRCR v2 256K-512K: **98.5%** (≥98% at 512K+ → qualifies for Context score 100 per methodology)
- MRCR v2 512K-1M: **98.1%**

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 82.02, #5/889, 38 of 625) and AA as of 2026-10-10.

- **Tool use: 92/100.** Terminal-Bench 2.1 88.8% (≥88% frontier threshold), GDPval-AA Elo 1754 (exceeds ≥1750 frontier), aaTB21 84.3%, TB-2.1 (Vals) 72.3%, DeepSearchQA 89.4%, GDPval-AA normalized 59.2%, AA Briefcase 1583 Elo, OSWorld 66.9%. Exceptional agentic cluster with two ≥frontier benchmarks (TB-2.1 ≥88%, GDPval ≥1750). Capped by TB-4.0 33.3%, GDP.pdf 26.6%, ApprenticeBench 19%, AA ITBench 33.2%.
- **Reasoning: 85/100.** GPQA Diamond 93.5% (≥90 frontier), HLE 48.7% (above 40% frontier), MRCR v2 256K-512K 98.5%, MRCR v2 512K-1M 98.1%, AA-LCR 83.0%, MMLU-Pro (Vals) 91.6%, AA-MMLU-Pro 89.8%, AA Global-MMLU-Lite 92.2%, ARC-AGI-1 97.50%. Capped by AA Intelligence Index 48.1 (revised from 61 — significant drop reflecting v4.3.2 methodology update as model pool grew from 230 to 889, median increased), CritPt 24.9%, MLCR-AA 43.3%, AA-Omniscience Index 25.0% (low reliability, 32.9% hallucination rate).
- **Context window: 100/100.** Verified 1M-token context window (≥1M tier). MRCR v2 256K-512K at 98.5% and 512K-1M at 98.1% — both ≥98% at 512K+ threshold, qualifying for perfect 100 per methodology v4.
- **Multimodal: 85/100.** Text, image and video input; text output (+video/PDF in = 75-90 tier per methodology). Design Arena Website 1363, AA-MMMU-Pro not published. Capped by no audio input, text-only output, AA-MMMU-Pro not published for this ID.
- **Coding: 90/100.** DeepSWE 75.4% (≥74% frontier), TB-2.1 88.8% (≥85% frontier), AA-SciCode 58.8% (≥55% frontier), AA Coding Index 75.8% (≥70% frontier), SWE-Atlas 59.4%. Multiple coding frontier indicators (DeepSWE ≥74%, TB-2.1 ≥85%, SciCode ≥55%, Coding Index ≥70%). Capped by no SWE-bench Verified/LiveCodeBenchmark published for this ID, CursorBench 4.0 41.6%, Bug Hunt Bench 32.2 fixes.
- **Cost efficiency: 100/100.** Free Zen Contributor tier ($0). Caps: free tier requires training-data consent; time-limited; data-sharing caveat.
- **Overall Score: 90/100.** Half-up mean: (92+85+100+85+90)/5 = 452/5 = 90.4 → 90. Strong frontier agentic model: GDPval 1754 Elo (≥1750 frontier), TB-2.1 88.8% (≥88% frontier), DeepSWE 75.4% (≥74% frontier), MRCR 98.5%/98.1% (≥98% at 512K+ → Context 100); cap: Intelligence Index revised from 61 to 48.1 (v4.3.2 methodology update as model pool grew from 230 to 889). Free tier requires training-data consent.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/muse-spark-1-3` for overall rank/score (#5/889, 82.02) and 38 benchmark rows; AA model page `https://artificialanalysis.ai/models/muse-spark-1-3` for Intelligence Index 48.1 (v4.3.2, revised from 61), GPQA 93.5%, aaTB21 84.3%, GDPval-AA normalized 59.2%, GDP.pdf 26.6%, AA Agentic Index 55.7%, AA ITBench 33.2%; Meta AI Research launch scorecard for TB-2.1 88.8%, GDPval Elo 1754, DeepSWE 75.4%, MRCR 98.5%/98.1%, GDPval-AA normalized 59.2%, OSWorld 66.9%; Vals AI for TB-2.1 (Vals) 72.3%, MMLU-Pro 91.6%, GPQA 93.5%; ARC Prize for ARC-AGI-1 97.50%; Collinear for CWE-bench 55.0%). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Key revisions from Sep 20 to Oct 10 fresh BenchLM fetch: Intelligence Index revised from 61 to 48.1% (v4.3.2 methodology update as model pool grew from 230 to 889 — 12.9-point drop, median increased significantly); new benchmarks confirmed (TB-2.1 88.8%, GDPval-AA Elo 1754 ≥1750 frontier, DeepSWE 75.4% ≥74% frontier, MRCR 98.5%/98.1% ≥98% at 512K+ → Context 100, AA Terminal-Bench 4.0 33.3%, AA ITBench 33.2%, GDPval-AA normalized 59.2%, AA Briefcase 1583, AA-MMMU-Pro 85.5%, AA-LCR 83.0%, MMLU-Pro 91.6%, AA-MMLU-Pro 89.8%, AA Global-MMLU-Lite 92.2%, ARC-AGI-1 97.50%, AA-Omniscience data); BenchLM overall revised to 82.02 (#5/889). Overall revised from 85 to 90.

---
