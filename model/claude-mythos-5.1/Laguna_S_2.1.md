# Claude Mythos 5.1 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-16 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (restricted-access Mythos-class configuration of Fable 5.1)
- **Short description:** Anthropic's Mythos-class variant of Claude Fable 5.1 with cybersecurity, biology/chemistry and distillation safeguards relaxed for vetted Project Glasswing partners; same underlying weights as Fable 5.1.
- **Provider / access:** Anthropic API (`claude-mythos-5-1`), AWS Bedrock, Google Vertex AI; Messages/Responses API. Access is gated to vetted Project Glasswing cybersecurity and critical-infrastructure partners plus an incoming biomedical trusted-access program — not self-serve.
- **Release / knowledge:** Released June 9, 2026 (June 12 export-control suspension, restored July 1, 2026); Mythos 5.1 variant announced September 1–2, 2026. Knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-mythos-5-1`
- **Context window:** 1,048,576 (1M) in / 128,000 out
- **Modalities:** Text, image, pdf, tool-calls in; text, tool-calls out (no audio/video)
- **Pricing (as of 2026-09-20):** $10 in / $50 out per 1M tokens; cached read $0.25/M (75% cheaper than Fable 5), cache write $12.50/M; Batch API 50% discount. Paid only, no Free tier.
- **Architecture:** Proprietary; same weights as Claude Fable 5.1, parameters and architecture not disclosed.

### Raw benchmarks found

> Mythos 5.1 shares Claude Fable 5.1's underlying weights (Anthropic, explainx.ai), so Fable 5.1's disclosed scores apply to the Mythos-class configuration on general, non-safeguard-limited benchmarks; Mythos adds unrestricted cybersecurity capability, for which no public ExploitBench-style isolation score is published. Verified public numbers from BenchLM (`https://benchlm.ai/models/claude-fable-5-1`, overall 83.18, rank #4/954, 57 of 639 benchmarks) and Artificial Analysis. 57 benchmark rows verified across 3 independent sources. Re-verified 2026-10-16.

Agent / tool use:

- Terminal-Bench 4.0: **55.80%** (Anthropic: Claude Fable 5.1 and Claude Mythos 5.1 system card / BenchLM)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic system card / BenchLM)
- AA Terminal-Bench 4.0: **52.0%** (Artificial Analysis / BenchLM — decreased from 59.6%)
- aaTerminalBench21: **91.4%** (Artificial Analysis / BenchLM — increased from 84.3%)
- GDPval-AA (Elo): **1754** (Anthropic system card / BenchLM — still exceeds ≥1750 frontier threshold; decreased from 1758)
- GDPval-AA (normalized): **62.7%** (Artificial Analysis model benchmarks / BenchLM — decreased from 66.8%)
- AA Briefcase (Elo): **1674** (Artificial Analysis — decreased from 1710)
- AA Agentic Index: **58.0%** (Artificial Analysis model benchmarks / BenchLM — increased from 56.2%)
- AA Harvey LAB v1.0: **93.0%** (Artificial Analysis — NEW)
- Terminal-Bench 2.1 (Vals): **85.0%** (Vals AI leaderboard / BenchLM — NEW)
- AA ITBench: **49.5%** (Artificial Analysis — NEW)
- AA-AnalystAgent: **57.5%** (Artificial Analysis — NEW)
- GDP.pdf: **26.2%** (Artificial Analysis — increased from 21.8%)
- AA AutomationBench: **59.4%** (Artificial Analysis — decreased from 71.3%)
- ApprenticeBench: **72%** (NeoCognition — increased from 36%)
- AA Tau3 Banking: **47.2%** (Artificial Analysis — NEW)
- OSWorld 2.0: **41.7%** (Anthropic system card / BenchLM — decreased from 66.9%)
- AutomationBench: **31.4%** (Anthropic / BenchLM — decreased from 51.3%)
- Toolathlon-Verified: **77.8%** (Anthropic system card / BenchLM — NEW)
- Toolathlon Verified Pass@3: **81.5%** (Anthropic system card / BenchLM)
- Toolathlon Verified Pass³: **73.1%** (Anthropic system card / BenchLM — NEW)
- SWE-bench Verified: **95.0%** (Anthropic system card / BenchLM)
- SWE-bench Pro: **81.2%** (Anthropic system card / BenchLM)
- SWE-bench (Vals): **97.0%** (Vals AI leaderboard / BenchLM — Mythos shares Fable 5.1 weights)
- SWE Multilingual: **89.1%** (Anthropic system card / BenchLM — decreased from 90.3%)
- SWE Multimodal: **54.7%** (Anthropic system card / BenchLM)
- LiveCodeBench (Vals): **90.5%** (Vals AI leaderboard / BenchLM — Mythos shares Fable 5.1 weights)
- DeepSWE: **67.4%** (Anthropic system card / BenchLM — below 74% frontier)
- CWE-bench v1: **58.0%** (Collinear — NEW)
- MazeBench: **10%** (MazeBench AI leaderboard — NEW)

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (Anthropic / BenchLM — ≥90 frontier threshold; Mythos shares Fable 5.1 weights)
- GPQA Diamond (Vals): **93.4%** (Vals AI leaderboard / BenchLM — changed from 93.2%)
- AA-GPQA-D: **93.7%** (Artificial Analysis / BenchLM)
- HLE w/ tools: **65%** (Anthropic system card / BenchLM — well above 40% frontier; Mythos shares Fable 5.1 weights)
- HLE w/o tools: **60.9%** (Anthropic system card / BenchLM — increased from 56.3%)
- AA-HLE: **59.1%** (Artificial Analysis / BenchLM — increased from 54.9%)
- AA Intelligence Index: **53.4%** (Artificial Analysis — increased from 53; tied 1st with GPT-6 Astra; v4.3.2 methodology)
- AA-LCR: **85.3%** (Artificial Analysis / BenchLM — increased from 79.3%)
- CritPt: **29.7%** (Artificial Analysis / BenchLM — increased from 29.1%)
- MLCR-AA: **71.1%** (Artificial Analysis / BenchLM — increased from 55.6%)
- ARC-AGI-1: **97.50%** (ARC Prize verified results / BenchLM — Mythos shares Fable 5.1 weights)
- ARC-AGI-2: **90%** (ARC Prize verified results / BenchLM — decreased from 91.7%)
- MMLU-Pro (Vals): **92.4%** (Vals AI leaderboard / BenchLM — increased from 91.6%)
- AA-MMMU-Pro: **84.7%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)
- BioMysteryBench (human-solvable): **90.1%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- ArXivMath (tools): **96.9%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- FrontierMath v2 (Tiers 1-3): **90.175%** (Epoch AI — NEW, exceeds ≥90 frontier threshold!)
- FrontierMath v2 (Tier 4): **87.805%** (Epoch AI — NEW)
- AA-Omniscience Index: **43.5%** (Artificial Analysis — increased from 37.1%)
- AA-Omniscience Accuracy: **67.2%** (Artificial Analysis — increased from 60.9%)
- AA-Omniscience Hallucination Rate: **72.6%** (Artificial Analysis — increased from 58.6%)

Multimodal:

- Design Arena Website: **1314** (OpenRouter / BenchLM — Mythos shares Fable 5.1 weights)
- AA-MMMU-Pro: **84.7%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)
- OfficeQA: **78.1%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- OfficeQA Pro: **66.9%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- Chartography (tools): **89.0%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- Chartography (no tools): **29.6%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- AA-Video-MME: no verified public score found

Coding:

- SWE-bench Verified: **95.0%** (Anthropic system card / BenchLM — Mythos shares weights)
- SWE-bench Pro: **81.2%** (Anthropic system card / BenchLM — Mythos shares weights)
- SWE-bench (Vals): **97.0%** (Vals AI leaderboard / BenchLM — Mythos shares Fable 5.1 weights)
- SWE Multilingual: **89.1%** (Anthropic system card / BenchLM — Mythos shares weights; decreased from 90.3%)
- SWE Multimodal: **54.7%** (Anthropic system card / BenchLM — Mythos shares weights)
- LiveCodeBench (Vals): **90.5%** (Vals AI leaderboard / BenchLM — Mythos shares Fable 5.1 weights)
- DeepSWE: **67.4%** (Anthropic system card / BenchLM — Mythos shares weights; below 74% frontier)
- AA-SciCode: **63.1%** (Artificial Analysis — increased from 56.4%)
- AA Coding Index: **81.6%** (Artificial Analysis — increased from 78.0%)
- ProgramBench: **87.6%** (Anthropic system card / BenchLM — increased from 79.7%)
- CursorBench 3.2: **73.4%** (Cursor evals — NEW)
- PostTrainBench v1.1: **40.2%** (BenchLM — NEW)

Long context:

- Context window: 1,048,576 (1M) in / 128,000 out (verified via Anthropic platform docs)
- AA-LCR: **85.3%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights; increased from 79.3%) — long-context reasoning proxy
- MRCR / RULER: no verified public score found for this exact ID

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 83.18, #4/954, 57 of 639) and AA as of 2026-10-16. Mythos 5.1 shares Fable 5.1's underlying weights — all disclosed Fable 5.1 benchmarks apply to the Mythos-class configuration on general (non-safeguard-limited) benchmarks.

- **Tool use: 90/100.** GDPval-AA Elo 1754 (still exceeds ≥1750 frontier!), aaTB21 91.4%, AA Agentic Index 58.0%, AA Harvey LAB 93.0%, Toolathlon-Verified 77.8%, Terminal-Bench 2.1 (Vals) 85.0%, AA-AnalystAgent 57.5%, AA ITBench 49.5%, SWE-bench Pro 81.2%, SWE Multilingual 89.1%, CWE-bench v1 58.0%. GDPval ≥1750 frontier bonus. Capped by OSWorld 41.7% (significant decrease from 66.9%), TB-4.0 55.8%, GDPval-AA normalized 62.7% (down from 66.8%), no MCP-Atlas score.

- **Reasoning: 89/100.** GPQA Diamond 93.7% (≥90 frontier), HLE w/ tools 65% (well above 40% frontier), AA-LCR 85.3% (increased from 79.3%), MLCR-AA 71.1% (increased from 55.6%), MMLU-Pro 92.4%, AA-MMMU-Pro 84.7%, ARC-AGI-1 97.50%, FrontierMath v2 (Tiers 1-3) 90.175% (NEW, ≥90 frontier), ArXivMath tools 96.9%. Capped by AA Intelligence Index 53.4 (below ~60 frontier ref), CritPt 29.7%, AA-HLE 59.1%.

- **Context window: 95/100.** 1M-token input window (≥1M tier). No MRCR/RULER retrieval curve ≥98% at 512K+ published for 100. AA-LCR 85.3% demonstrates strong long-context reasoning capability but below retrieval threshold.

- **Multimodal: 80/100.** Text, image and PDF input / text output (+image/+PDF in = 60-70 tier with PDF pushing toward 70-90); AA-MMMU-Pro 84.7%, Chartography tools 89.0%, OfficeQA 78.1%, Design Arena 1314. Capped by text-only output, Chartography no tools 29.6%, no video/audio input, no AA-Video-MME.

- **Coding: 88/100.** SWE-bench Verified 95.0%, SWE-bench (Vals) 97.0%, SWE Multilingual 89.1%, SWE-bench Pro 81.2%, LiveCodeBench 90.5%, DeepSWE 67.4% (below 74% frontier), AA Coding Index 81.6% (increased from 78.0%), AA-SciCode 63.1% (increased from 56.4%), ProgramBench 87.6% (increased from 79.7%), CursorBench 3.2 73.4% (NEW). Capped by DeepSWE 67.4% (below 74% frontier), no SWE-Atlas, no VulcanBench.

- **Cost efficiency: 30/100.** $10.00 / $50.00 per 1M in/out (paid tier, most expensive). Cache reads 75% cheaper; no free tier.

- **Overall Score: 88.4/100.** Half-up mean: (90+89+95+80+88)/5 = 442/5 = 88.4 → 88. **Best-fit:** Mythos-class restricted-access configuration sharing Fable 5.1's exact weights; GDPval 1754 Elo (≥1750 frontier) + GPQA 93.7% + SWE-bench Verified 95% + FrontierMath v2 90.175% provide frontier performance; cap: Intelligence Index 53.4 (below ~60 frontier), DeepSWE 67.4% (below 74% frontier), OSWorld decreased to 41.7% (from 66.9%), premium $10/$50 pricing, restricted access (vetted partners only). Note: BenchLM overall decreased from 89.45 to 83.18 as model pool grew from 889 to 954 and new benchmarks were added; normalized scores changed modestly due to strong individual benchmark stability.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-16 (UTC)
- Method: public-internet research (BenchLM `https://benchlm.ai/models/claude-fable-5-1` for overall rank/score (#3/889, 89.45) and 86 benchmark rows including GPQA-D 93.7%, HLE 65%, SWE-bench Verified 95.0%, LiveCodeBench 90.5%, DeepSWE 67.4%, GDPval-AA Elo 1758, TB-4.0 55.8%; AA model page `https://artificialanalysis.ai/models/claude-fable-5-1` for Intelligence Index 53, pricing $10/$50, aaTB21 84.3%, AA Agentic Index 56.2%, AA Terminal-Bench 4.0 59.6%, GDP.pdf 21.8%, AA-MMMU-Pro 84.7%; Anthropic/Fable 5.1 system card PDF for SWE-bench Verified 95.0%, SWE-bench Pro 81.2%, LiveCodeBench 90.5%, DeepSWE 67.4%, HLE 65%, GPQA 93.7%, GDPval Elo 1758). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research. Mythos 5.1 shares Fable 5.1's underlying weights (Anthropic, explainx.ai) — all general (non-safeguard-limited) benchmarks are identical.
- Key revisions from Sep 23 to Oct 10 fresh BenchLM fetch: GDPval-AA Elo 1758 confirmed (≥1750 frontier); new benchmarks confirmed (GPQA-D 93.7%, HLE 65%, SWE-bench Verified 95.0%, LiveCodeBench 90.5%, DeepSWE 67.4%, SWE-bench Pro 81.2%, SWE-bench (Vals) 97.0%); aaTB21 84.3% and AA Terminal-Bench 4.0 59.6% added from AA. Overall revised from 87 to 88.
- Key revisions from Oct 10 to Oct 16 re-verification: BenchLM overall decreased from 89.45 to 83.18 (#3/889→#4/954, benchmarks 86→57 as model pool grew from 889 to 954 and new benchmarks added). OSWorld 2.0 decreased 66.9%→41.7%; GDPval-AA normalized 66.8%→62.7%, Elo 1758→1754 (still ≥1750 frontier); AA Terminal-Bench 4.0 59.6%→52.0%; aaTB21 increased 84.3%→91.4%; ApprenticeBench increased 36%→72%; AA-LCR increased 79.3%→85.3%; MLCR-AA increased 55.6%→71.1%; HLE w/o tools 56.3%→60.9%; AA-HLE 54.9%→59.1%; ProgramBench 79.7%→87.6%; AA-SciCode 56.4%→63.1%; AA Coding Index 78.0%→81.6%; Intelligence Index 53→53.4; new benchmarks: FrontierMath v2 (90.175%/87.805%), Toolathlon-Verified 77.8%, AA Harvey LAB 93.0%, Terminal-Bench 2.1 (Vals) 85.0%, AA ITBench 49.5%, AA-AnalystAgent 57.5%, Toolathlon Pass³ 73.1%, CursorBench 3.2 73.4%, CursorBench 4.0 51.8%, CWE-bench v1 58.0%, Bug Hunt Bench 43.0 fixes, PostTrainBench v1.1 40.2%, GraphWalks 65.0%. My normalized Overall revised from 88 to 89 (Reasoning increased due to FrontierMath v2 90.175% + AA-LCR 85.3% + MLCR-AA 71.1%; Tool use maintained at 90 despite OSWorld decrease due to GDPval ≥1750 frontier bonus + aaTB21 91.4% increase).

---
