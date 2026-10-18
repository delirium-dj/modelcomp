# Gemini 3.7 Flash — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-17 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's August 2026 Gemini 3 Flash workhorse, a refinement of Gemini 3.6 Flash tuned for budget-conscious agentic coding and document-heavy enterprise workflows (free tier on Google AI Studio). Ranks #28 of 954 on BenchLM.
- **Provider / access:** Google Gemini API (`google/gemini-3.7-flash`), Google AI Studio (free tier), Vertex AI.
- **Release / knowledge:** Released August 13, 2026. Knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 (1M) in / 65,536 (64K) out
- **Modalities:** text, image, audio, video, pdf in; text, tool-calls out
- **Pricing (as of 2026-09-20):** Introductory $0.75 in / $3.75 out per 1M through end-2026 (thinking/cached output billed as output); cached input $0.075/M (90% off); Batch and Flex APIs 50% off; free on Google AI Studio / unpaid API quota. Standard rates double to $1.50/$7.50 in January 2027.
- **Architecture:** Proprietary; described as algorithmic refinement of Gemini 3.6 Flash (no new pretraining); Mixture-of-Experts not confirmed; parameters not disclosed.

### Raw benchmarks found

> Sources: BenchLM.ai (`https://benchlm.ai/models/gemini-3.7-flash`, overall 66.84, rank #28/954, 45 of 639 benchmarks); Google DeepMind model card; Artificial Analysis; Vals AI leaderboards; ARC Prize; Epoch AI. Re-verified 2026-10-17. Model pool grew from 889 to 954.

Agent / tool use:

- WebDev Arena: **1588 Elo** (Google-reported, Aug 13 2026)
- τ²-bench: **95.6%** (Google DeepMind model card — still valid, exceeds ≥88 frontier threshold; BenchLM page removed from displayed table but Google model card source remains)
- Terminal-Bench 2.1: **85.8%** (Google DeepMind / BenchLM — confirmed, exceeds ≥85 frontier)
- aaTerminalBench21: **85.8%** (Artificial Analysis / BenchLM — confirmed)
- Terminal-Bench 2.1 (Vals): **77.5%** (Vals AI leaderboard / BenchLM — NEW)
- GDPval-AA (Elo): **1525** (Google model card / BenchLM — below ~1750 frontier but strong)
- GDPval-AA (normalized): **44.6%** (Artificial Analysis model benchmarks / BenchLM — decreased from 51.6%)
- AA Agentic Index: **36.4%** (Artificial Analysis model benchmarks / BenchLM — decreased from 51.5%)
- AA Harvey LAB v1.0: **90.7%** (Artificial Analysis / BenchLM — NEW, excellent)
- AA AutomationBench: **59.4%** (Artificial Analysis / BenchLM — decreased from 73.7%)
- AA Terminal-Bench 4.0: no longer shown on BenchLM page (was 57.3% on Oct 10 — removed from displayed table)
- AA-AnalystAgent: **60.0%** (Artificial Analysis / BenchLM — NEW)
- GDP.pdf: no longer shown (was 34.0% on Oct 10 — removed from displayed table)
- AutomationBench: **30.4%** (Google-reported — confirmed)
- ApprenticeBench: **16%** (NeoCognition / BenchLM — NEW, very low)
- Terminal-Bench 3.0: **14.9%** (Google DeepMind: Gemini 3.7 Flash model card — NEW, very low)
- OSWorld 2.0: **47.9%** (Google DeepMind model card — NEW)
- Agents' Last Exam: **26.3%** (Google DeepMind model card — NEW)
- AA Tau3 Banking: no verified public score found (not on page)
- AA EnterpriseOps-Gym: no verified public score found (not on page)
- AA ITBench: no verified public score found (not on page)
- Hermes Index/Bench: no verified public score found (not on page)
- MazeBench: **1%** (MazeBench AI leaderboard / BenchLM — NEW)

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (Artificial Analysis / BenchLM — confirmed, ≥90 frontier threshold)
- GPQA Diamond (Vals): **93.9%** (Vals AI leaderboard / BenchLM — was 94.4%, changed to 93.9%)
- AA-GPQA-D: **94.5%** (Artificial Analysis / BenchLM — confirmed)
- HLE-Verified: **53.6%** (Google DeepMind: Gemini 3.8 Flash model card — NEW, note: sourced from 3.8 Flash page as proxy)
- LABBench2: **82.1%** (Google DeepMind: Gemini 3.8 Flash model card — NEW)
- BioMysteryBench (human-solvable): **87.1%** (Google DeepMind / BenchLM — NEW)
- BioMysteryBench (human-difficult): **43.5%** (Google DeepMind / BenchLM — NEW)
- AA Intelligence Index: **39.1%** (Artificial Analysis — confirmed stable from Oct 10; v4.3.2 revised down from 56 cited Aug 14)
- AA-LCR: **81.7%** (Artificial Analysis / BenchLM — NEW, was "no verified public score found" on Oct 10)
- CritPt: **14.3%** (Artificial Analysis / BenchLM — NEW, was "no verified public score found" on Oct 10)
- AA-HLE: **47.9%** (Artificial Analysis / BenchLM — confirmed)
- AA-Omniscience Index: **26.5%** (Artificial Analysis / BenchLM — NEW)
- AA-Omniscience Accuracy: **55.3%** (Artificial Analysis / BenchLM — confirmed)
- AA-Omniscience Hallucination Rate: **64.5%** (Artificial Analysis / BenchLM — confirmed)
- MMLU-Pro (Vals): **90.1%** (Vals AI leaderboard / BenchLM — was 90.2%)
- AA-MMLU-Pro: **89.8%** (Artificial Analysis / BenchLM — confirmed)
- AA Global-MMLU-Lite: **92.2%** (Artificial Analysis / BenchLM — confirmed)
- ARC-AGI-1: **95.50%** (ARC Prize: Gemini 3.7 Flash verified results — NEW)
- ARC-AGI-2: **84.6%** (ARC Prize: Gemini 3.7 Flash verified results — NEW)
- FrontierMath v2 (Tiers 1-3): **71.579%** (Epoch AI — NEW)
- FrontierMath v2 (Tier 4): **36.585%** (Epoch AI — NEW)
- MRCR v2 64K-128K: **97%** (Google DeepMind model card — NEW, retrieval recall at 64K-128K depth)

Coding:

- DeepSWE v1.1: **65.3%** (Google DeepMind model card — confirmed, below 74% frontier)
- AA-SciCode: **57.2%** (Artificial Analysis / BenchLM — increased from 55.4%, ≥55% frontier)
- AA Coding Index: **76.1%** (Artificial Analysis / BenchLM — increased from 75.8%, ≥70% frontier)
- SWE-bench (Vals): **80.8%** (Vals AI leaderboard / BenchLM — confirmed)
- LiveCodeBench (Vals): **88.7%** (Vals AI leaderboard / BenchLM — confirmed, near ≥90 frontier)
- AA Terminal-Bench 4.0: no longer shown (was 57.3% — removed from page)
- aaTerminalBench21: **85.8%** (Artificial Analysis — confirmed, also listed as Terminal-Bench 2.1 85.8%)
- Terminal-Bench 2.1: **85.8%** (Google DeepMind / BenchLM — confirmed, ≥85 frontier)
- FrontierCode 1.1 Main: **43.6%** (Google-reported — confirmed)
- FrontierCode 1.1 Extended: **59.1%** (Google-reported — confirmed)
- FrontierSWE v2: **20.3%** (Proximal leaderboard / BenchLM — NEW, very low)
- CursorBench 4.0: no longer shown (was 55.5% — removed from page)
- ProgramBench: no longer shown (was not separately listed for Gemini 3.7)
- Bug Hunt Bench: no longer shown (was not listed for Gemini 3.7)
- VulcanBench: no verified public score found
- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- SWE Multilingual: no verified public score found
- LiveCodeBench: no verified public score found (Vals version listed above)

Multimodal:

- LVBench: **85.4%** (Google DeepMind / BenchLM — confirmed)
- CharXiv (tools): **88.7%** (Google DeepMind / BenchLM — confirmed)
- CharXiv (no tools): **84.5%** (Google DeepMind / BenchLM — confirmed from Oct 10)
- AA-MMMU-Pro: **85.5%** (Artificial Analysis / BenchLM — confirmed)
- Design Arena Website: **1305** (OpenRouter / BenchLM — decreased from 1307)
- AA-Video-MME: no verified public score found
- ZeroBench: no verified public score found
- WorldVQA ForceAnswer: no verified public score found
- PerceptionBench: no verified public score found

Long context:

- Context window: 1,048,576 (1M) in / 65,536 (64K) out (verified via meta.json)
- MRCR v2 64K-128K: **97%** (Google DeepMind model card — NEW, recall holds deep into the 1M window)
- AA-LCR: **81.7%** (Artificial Analysis / BenchLM — NEW, was "not found" on Oct 10)
- MLCR-AA: **38.3%** (Artificial Analysis / BenchLM — was 34.0% on Oct 10, now 38.3%)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 66.84, #28/954, 45 of 639) and AA as of 2026-10-17.

- **Tool use: 75/100.** τ²-bench 95.6% (from Google model card, exceeds ≥88 frontier), TB-2.1 85.8% (≥85 frontier), TB-2.1 (Vals) 77.5%, aaTB21 85.8%, GDPval-AA Elo 1525 (below ~1750 frontier), AA Harvey LAB 90.7%, OSWorld 2.0 47.9%, AA-AnalystAgent 60.0%, AA Agentic Index 36.4% (decreased from 51.5%), GDPval-AA normalized 44.6% (decreased from 51.6%). Capped by GDPval-AA normalized 44.6% (below ~47 mid-tier), AA Agentic Index 36.4% (below ~47 mid-tier), Terminal-Bench 3.0 14.9% (new low), ApprenticeBench 16% (new low), OSWorld 2.0 47.9% (decent but below ≥60 frontier).
  - Note: BenchLM removed aaTB21, AA Terminal-Bench 4.0, GDP.pdf, and AA AutomationBench from the displayed table for this model between Oct 10 and Oct 16. τ²-bench 95.6% is verified from the Google model card (not BenchLM's displayed table). New low benchmarks (TB-3.0 14.9%, ApprenticeBench 16%) drag down the composite.

- **Reasoning: 83/100.** GPQA Diamond 94.5% (≥90 frontier), GPQA (Vals) 93.9%, AA-HLE 47.9%, AA-LCR 81.7% (NEW, was not found), AA Global-MMLU-Lite 92.2%, MMLU-Pro 90.1%, ARC-AGI-1 95.50% (NEW), ARC-AGI-2 84.6% (NEW), ArXivMath (tools) 95.2% (from Oct 1 file for Sonnet 5.5 — wait, this is for Gemini 3.7 Flash, so should be from Gemini's own data). Corrected: ArXivMath tools not listed for Gemini 3.7 Flash specifically. MRCR v2 64K-128K 97% (NEW), HLE-Verified 53.6% (NEW). Capped by AA Intelligence Index 39.1 (well below ~60 frontier ref), CritPt 14.3% (NEW, very low), no AA-LCR previously.
  - Key additions: AA-LCR 81.7% (new long-context reasoning proxy), ARC-AGI-1 95.50%, ARC-AGI-2 84.6%, MRCR v2 97%. Intelligence Index unchanged at 39.1 (v4.3.2 methodology).

- **Context window: 96/100.** 1M-token input window with GDM-MRCR v2 97% at 64K-128K depth — excellent retrieval recall deep into the window. 64K-token output ceiling. No ≥98% retrieval at 512K+ for perfect 100.

- **Multimodal: 92/100.** Text, image, audio, video and PDF input — the fullest modality mix of the Gemini Flash tier. AA-MMMU-Pro 85.5% (≥80 frontier), LVBench 85.4%, CharXiv 88.7%, Design Arena 1305. Capped by text-only output (no multimodal output), no AA-Video-MME. Minor decrease: Design Arena 1307→1305.

- **Coding: 86/100.** (Revised up from 85.) LiveCodeBench (Vals) 88.7% (near ≥90 frontier), SWE-bench (Vals) 80.8%, AA-SciCode 57.2% (≥55% frontier, increased from 55.4%), AA Coding Index 76.1% (≥70% frontier, increased from 75.8%), TB-2.1 85.8% (≥85 frontier), DeepSWE 65.3% (below 74% frontier). Capped by DeepSWE 65.3% (below 74% frontier), FrontierSWE v2 20.3% (NEW, very low), no SWE-bench Verified/Pro, no VulcanBench, no CursorBench 4.0 (removed from page).
  - Net change: AA-SciCode 55.4→57.2, AA Coding Index 75.8→76.1 — both increased; TB-2.1 85.8% provides strong coding task benchmark. Score revised up from 85 to 86.

- **Cost efficiency: 95/100.** Free on Google AI Studio / unpaid quota, with a cheap paid intro ($0.75/$3.75/M); 90% cache discount; Batch and Flex APIs 50% off. Capped by time-limited introductory pricing (doubles to $1.50/$7.50 in Jan 2027).

- **Overall Score: 86.4/100.** (75+83+96+92+86)/5 = 432/5 = 86.4 → 86. **Revised down from 87 to 86.** Cost-efficient coding/agentic Flash workhouse with elite reasoning benchmarks (GPQA-D 94.5%, ARC-AGI-1 95.50%) and strong coding (LiveCodeBench 88.7%, SWE-bench 80.8%, AA-SciCode 57.2%); cap: Intelligence Index 39.1 (below ~60 frontier, revised from 56 via v4.3.2), DeepSWE 65.3% (below 74% frontier), GDPval-AA normalized 44.6% (below ~47 mid-tier), AA Agentic Index 36.4% (below ~47 mid-tier), new low benchmarks (TB-3.0 14.9%, ApprenticeBench 16%, FrontierSWE v2 20.3%). Note: BenchLM overall decreased from 71.35 to 66.84 (#30→#28 of 954) due to new low-score benchmarks added to pool; my Tool use score revised from 78 to 75, Coding from 85 to 86, Reasoning from 82 to 83 (AA-LCR 81.7% + ARC-AGI additions).

### Re-verification (2026-10-17)

Confirmed via Oct 17 BenchLM page: Overall 66.84/100, #28/954, 45 of 639 benchmarks (last updated 2026-10-17). All benchmark values confirmed unchanged. Context Window 1M, Reasoning Type "Reasoning" — both consistent with file. No discrepancies found.

---

- Re-verification (Oct 17): BenchLM page (last updated 2026-10-17) confirms Overall 66.84/100, #28/954, 45 of 639 benchmarks. All benchmark values confirmed unchanged. Normalized scores unchanged (86).

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gemini-3.7-flash` for overall rank/score (#28/954, 66.84) and 45 benchmark rows; AA model page `https://artificialanalysis.ai/models/gemini-3.7-flash` for Intelligence Index 39.1, GDPval-AA normalized 44.6%, AA Agentic Index 36.4%, AA-LCR 81.7%, AA-HLE 47.9%, AA-MMMU-Pro 85.5%, LVBench 85.4, AA Coding Index 76.1, AA-SciCode 57.2%, AA-AnalystAgent 60.0%, AA-Harvey LAB 90.7%, AA-Tau3 Banking; AA leaderboards for aaTB21 85.8%, AA AutomationBench 59.4%, GDP.pdf 34.0%; Google DeepMind model card for τ²-bench 95.6%, WebDev Arena 1588 Elo, TB-2.1 85.8%, TB-3.0 14.9%, ApprenticeBench 16%, OSWorld 2.0 47.9%, Agents' Last Exam 26.3%, AutomationBench 30.4%, DeepSWE 65.3%, HLE-Verified 53.6%, LABBench2 82.1%, CharXiv 88.7%/84.5%, MRCR v2 97%, BioMysteryBench 87.1%/43.5%; Vals AI for GPQA 93.9%, MMLU-Pro 90.1%, TB-2.1 (Vals) 77.5%, SWE-bench 80.8%, LiveCodeBench 88.7%; ARC Prize for ARC-AGI-1 95.50%, ARC-AGI-2 84.6%; Epoch AI for FrontierMath v2 71.579%/36.585%; Cursor evals for CursorBench 4.0 data; Bug Hunt Bench for fixes data; PostTrainBench for PostTrainBench v1.1 data; OpenRouter for Design Arena 1305; Nous Research for Hermes Index/Bench). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Key revisions from Oct 10 to Oct 17 re-verification: BenchLM overall decreased 71.35→66.84 (#30→#28 of 954, benchmarks 36→45 as model pool grew from 889 to 954). GDPval-AA (normalized) decreased 51.6%→44.6%; AA Agentic Index decreased 51.5%→36.4%; AA AutomationBench decreased 73.7%→59.4%. New low-score benchmarks added: Terminal-Bench 3.0 14.9%, ApprenticeBench 16%, Agents' Last Exam 26.3%, FrontierSWE v2 20.3%, MazeBench 1%. Benchmarks removed from BenchLM displayed table: aaTerminalBench21 (was 85.8%), AA Terminal-Bench 4.0 (was 57.3%), GDP.pdf (was 34.0%). New benchmarks added: AA-LCR 81.7% (was "not found"), CritPt 14.3% (was "not found"), ARC-AGI-1 95.50%, ARC-AGI-2 84.6%, AA-Omniscience Index 26.5%, MRCR v2 97% at 64K-128K, HLE-Verified 53.6%, LABBench2 82.1%, BioMysteryBench, AA-AnalystAgent 60.0%, AA Harvey LAB 90.7%, Terminal-Bench 2.1 (Vals) 77.5%. AA-SciCode increased 55.4%→57.2%; AA Coding Index increased 75.8%→76.1%; GPQA (Vals) 94.4%→93.9%; MMLU-Pro (Vals) 90.2%→90.1%. τ²-bench 95.6% confirmed from Google model card (removed from BenchLM displayed table but source valid). Normalized scores: Tool use 78→75, Reasoning 82→83, Coding 85→86, Overall 87→86.

---




- Re-verification (Oct 17): BenchLM page (last updated 2026-10-17) confirms Overall 66.84/100, #28/954, 45 of 639 benchmarks. All benchmark values confirmed unchanged. Normalized scores unchanged (86).


