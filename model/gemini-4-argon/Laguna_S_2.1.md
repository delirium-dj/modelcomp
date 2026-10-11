# Gemini 4 Argon — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (paid tier; no Free ID on OpenCode Zen)
- **Short description:** Google DeepMind's Gemini 4 "Argon" variant, a reasoning model released September 30, 2026. Ranks #10 of 889 on BenchLM and #8 of 889 reasoning models on AA's Intelligence Index. Supports 1M context, text+image+video input, and strong agentic reasoning with excellent multimodal vision capabilities.
- **Provider / access:** Google API (`gemini-4-argon`); available on OpenCode Zen as `opencode/gemini-4-argon`. Supports extended thinking/reasoning.
- **Release / knowledge:** Released 2026-09-30. Knowledge cutoff not specified.
- **IDs:** `opencode/gemini-4-argon` (no Free ID on OpenCode Zen); `gemini-4-argon` on Google API
- **Context window:** 1M total tokens (262K output; 1M via continuation)
- **Modalities:** Text, image, video in; text out; reasoning/thinking yes; tool calls supported
- **Pricing (as of 2026-09-20):** Intro $2.00/$10.00 per 1M in/out through end-2026; cached input $0.10/M (90% off); free on Google AI Studio / unpaid API quota. Standard rates double to $4.00/$20.00 begin January 2027.
- **Architecture:** Proprietary (parameter count not disclosed by Google)
- **Speed / efficiency:** Output speed N/A (not measured by AA yet); $1.99 per Intelligence Index task is efficient; 110M output tokens per Intelligence Index task (moderately verbose)

### Raw benchmarks found

> Sources: BenchLM.ai (`https://benchlm.ai/models/gemini-4-argon`, overall 81.19, rank #10/889, 68 of 625 benchmarks); Google DeepMind evaluation methodology; Artificial Analysis. 68 benchmark rows verified across 3 independent sources.

Agent / tool use:

- Terminal-Bench 4.0: **57.40%** (Google: Gemini 4 Argon evaluation methodology / BenchLM)
- AA Terminal-Bench 4.0: **59.1%** (Artificial Analysis: terminalbench-v4-0 leaderboard / BenchLM — revised from 57.1% to 59.1%)
- Terminal-Bench 2.1: **84.3%** (Artificial Analysis / BenchLM — near ≥88 frontier)
- aaTerminalBench21: **84.3%** (Artificial Analysis / BenchLM)
- GDPval-AA (Elo): **1611** (Artificial Analysis: GDPval-AA leaderboard / BenchLM — below ~1750 frontier)
- GDPval-AA (normalized): **55.6%** (Artificial Analysis model benchmarks / BenchLM)
- AA-Briefcase (Elo): **1494** (Artificial Analysis: aa-briefcase leaderboard / BenchLM)
- OSWorld 2.0: **69.2%** (Google: Gemini 4 Argon evaluation methodology / BenchLM)
- AA AutomationBench: **77.5%** (Artificial Analysis / BenchLM)
- AutomationBench: **51.3%** (Google evals methodology / BenchLM)
- AA Agentic Index: **56.2%** (Artificial Analysis model benchmarks / BenchLM)
- AA ITBench: **48.6%** (Artificial Analysis / BenchLM — NEW)
- Finance Agent v2: **65.4%** (Google evals methodology / BenchLM)
- Agents' Last Exam: **39.5%** (Google evals methodology / BenchLM)
- Terminal-Bench-Science 0.1: **57.6%** (Google evals methodology / BenchLM)
- GDP.pdf: **21.8%** (Artificial Analysis / BenchLM)
- ApprenticeBench: **36%** (NeoCognition / BenchLM)
- AA Tau3 Banking: **44.9%** (Artificial Analysis / BenchLM)
- Toolathlon / MCP-Atlas: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Artificial Analysis / BenchLM — ≥90 frontier threshold)
- GPQA Diamond (Vals): **94.4%** (Vals AI leaderboard / BenchLM)
- AA-GPQA-D: **93.5%** (Artificial Analysis / BenchLM)
- HLE-Verified: **54.9%** (Google DeepMind / BenchLM — above 40% frontier)
- AA-HLE: **55.0%** (Artificial Analysis / BenchLM)
- AA Intelligence Index: **53** (Artificial Analysis — rank #8/889; confirmed stable from Oct 1)
- AA-LCR: **79.7%** (Artificial Analysis / BenchLM)
- MLCR-AA: no verified public score found for Gemini 4 Argon
- CritPt: **27.1%** (Artificial Analysis / BenchLM — low)
- AA-Omniscience Index: **42.4** (Artificial Analysis)
- AA-Omniscience Accuracy: **49.9%** (Artificial Analysis model benchmarks / BenchLM)
- AA-Omniscience Hallucination Rate: **15.1%** (Artificial Analysis model benchmarks / BenchLM — low, strong)
- MMLU-Pro (Vals): **90.2%** (Vals AI leaderboard / BenchLM)
- AA-MMLU-Pro: **89.8%** (Artificial Analysis / BenchLM)
- AA Global-MMLU-Lite: **92.2%** (Artificial Analysis / BenchLM)
- AA-MMMU-Pro: **85.5%** (Artificial Analysis / BenchLM — NEW, ≥80 frontier)
- ARC-AGI-1: **98.50%** (ARC Prize verified results / BenchLM)
- ARC-AGI-2: **89.2%** (ARC Prize verified results / BenchLM)
- LVBench: **85.4%** (BenchLM model page — NEW)
- CharXiv (tools): **88.7%** (Google DeepMind / BenchLM — NEW)
- CharXiv (no tools): **86.2%** (Google DeepMind / BenchLM — NEW)
- GraphWalks BFS 128K: **99.7%** (Google evals methodology / BenchLM)
- GraphWalks BFS 256K–1M: **84.2%** (Google evals methodology / BenchLM)
- Gray Swan IPI (15 attempts): **0.7%** (Google: Gemini 4 Argon launch chart / BenchLM)
- τ²-bench: **95.6%** (Google DeepMind model card / BenchLM — NEW, elite)

Coding:

- DeepSWE: **77.9%** (Google evals methodology / BenchLM — ≥74% frontier threshold)
- Vibe Code Bench: **91.90%** (Google evals methodology / BenchLM — NEW, ≥90 frontier)
- AA-SciCode: **61.8%** (Artificial Analysis / BenchLM — ≥55% frontier threshold)
- AA Coding Index: **88.0%** (Artificial Analysis / BenchLM — NEW, ≥70% frontier)
- SWE-bench Verified: **88.9%** (BenchLM model page — at frontier)
- SWE-bench (Vals): **80.0%** (Vals AI leaderboard / BenchLM)
- LiveCodeBench: **89.5%** (Vals AI leaderboard / BenchLM — near ≥90 frontier)
- SWE-bench Pro: no verified public score found
- FrontierSWE v2: **55.1%** (Proximal: FrontierSWE v2 leaderboard / BenchLM)
- PostTrainBench v1.1: **45.3%** (Google evals methodology / BenchLM)
- CursorBench 3.2: **69.2%** (Cursor evals / BenchLM)
- CursorBench 4.0: **39.6%** (Cursor evals / BenchLM)
- Bug Hunt Bench: **18.0 fixes** (Bug Hunt Bench / BenchLM)

Multimodal:

- LVBench: **85.4%** (BenchLM model page)
- CharXiv (tools): **88.7%** (Google DeepMind / BenchLM)
- CharXiv (no tools): **86.2%** (Google DeepMind / BenchLM)
- AA-MMMU-Pro: **85.5%** (Artificial Analysis / BenchLM)
- Design Arena Website: **1307** (OpenRouter / BenchLM)
- AA-Video-MME: no verified public score found
- Gray Swan IPI (15 attempts): 0.7% (Google: Gemini 4 Argon launch chart)

Long context:

- Context window: 1,000,000 total tokens (1M; 262K output; 1M via continuation) — ≥1M tier
- GraphWalks BFS 128K: **99.7%** (Google evals methodology / BenchLM)
- GraphWalks BFS 256K–1M: **84.2%** (Google evals methodology / BenchLM)
- AA-LCR: 79.7% (Artificial Analysis / BenchLM) — long-context reasoning proxy
- MRCR: no verified public score found (GraphWalks used as long-context proxy)

Speed / Cost:

- Output speed: N/A (not measured by AA)
- Cost per Intelligence Index task: $1.99 (Artificial Analysis)
- Cache discount: 95% (Artificial Analysis)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 81.19, #10/889, 68 of 625) and AA as of 2026-10-10.

- **Tool use: 89/100.** TB-2.1 84.3% (near ≥88 frontier), aaTB21 84.3%, AA Terminal-Bench 4.0 59.1%, GDPval-AA Elo 1611 (below ~1750 frontier), GDPval-AA normalized 55.6%, AA AutomationBench 77.5%, OSWorld 69.2%, AA Agentic Index 56.2%, AA ITBench 48.6% (NEW), AA Briefcase 1494 Elo, Finance Agent 65.4%, TB-4.0 57.4%. Strong agentic cluster with aaTB21 near frontier. Capped by TB-4.0 57.4% (below 88%+ frontier), GDPval-AA 1611 (below 1750), GDP.pdf 21.8%, ApprenticeBench 36%, AA ITBench 48.6%.
- **Reasoning: 87/100.** GPQA Diamond 93.5% (≥90 frontier), GPQA (Vals) 94.4%, HLE 54.9%/55.0% (above 40% frontier), AA-LCR 79.7%, AA-MMLU-Pro 89.8%, MMLU-Pro (Vals) 90.2%, AA Global-MMLU-Lite 92.2%, ARC-AGI-1 98.50%, CritPt 27.1%, GraphWalks BFS 128K 99.7% / 256K–1M 84.2%. Capped by AA Intelligence Index 53 (below ~60 frontier ref), CritPt 27.1% (notable weakness), MLCR-AA not listed, Low Omniscience Index 42.4 (moderate reliability).
- **Context window: 95/100.** 1M context qualifies for ≥1M tier (95-100 range); GraphWalks BFS 1M 84.2% demonstrates long-context at 1M; no specific ≥98% retrieval at 512K+ for perfect 100; AA-LCR 79.7% at 1M.
- **Multimodal: 87/100.** Text, image and video input; text output (+image/+video in = 75-90 tier); LVBench 85.4%, CharXiv 88.7%, AA-MMMU-Pro 85.5%, Design Arena 1307, AA-Video-MME not available. Capped by text-only output, no audio input, no video output, Gray Swan IPI 0.7%.
- **Coding: 88/100.** DeepSWE 77.9% (≥74% frontier), Vibe Code Bench 91.90% (≥90 frontier), AA-SciCode 61.8% (≥55% frontier), SWE-bench Verified 88.9% (at frontier), LiveCodeBench 89.5% (near ≥90 frontier), AA Coding Index 88.0% (≥70 frontier), SWE-bench (Vals) 80.0%. Strong coding cluster across 4 of 4 coding frontiers (DeepSWE ≥74%, LiveCode near 90%, SciCode ≥55%, Coding Index ≥70%). Capped by SWE-bench Pro not listed, Vibe Code Bench 91.90% not at 95%+ elite, CursorBench 4.0 39.6%, FrontierSWE v2 55.1%.
- **Cost efficiency: 72/100.** Intro $2.00/$10.00 per 1M in/out (through end-2026); 90% cache discount; $1.99 per Intelligence Index task is efficient. noFreeID — no free tier on OpenCode Zen; standard rates $4.00/$20.00 begin January 2027. Interpolated between $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60.
- **Overall Score: 89/100.** Half-up mean: (89+87+95+87+88)/5 = 446/5 = 89.2 → 89. **Best-fit:** strong mid-tier frontier reasoning model with exceptional GraphWalks long-context scores (99.7% at 128K, 84.2% at 1M) and strong coding (DeepSWE 77.9%, Vibe Code Bench 91.90%, SWE-bench Verified 88.9%); cap: Intelligence Index 53 (below ~60 frontier), TB 4.0 57.4% (below 88%), GDPval-AA 1611 (below 1750); free on Google AI Studio, paid $2/$10.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gemini-4-argon` for overall rank/score (#10/889, 81.19) and 68 benchmark rows including GPQA 93.5%, τ²-bench 95.6%, TB-2.1 84.3%, aaTB21 84.3%, AA Terminal-Bench 4.0 59.1%, AA ITBench 48.6%, DeepSWE 77.9%, Vibe Code Bench 91.90%, AA-SciCode 61.8%, AA Coding Index 88.0%, SWE-bench Verified 88.9%, LiveCodeBench 89.5%, AA-MMMU-Pro 85.5%, LVBench 85.4%, CharXiv 88.7%, MMLU-Pro 90.2%; AA model page `https://artificialanalysis.ai/models/gemini-4-argon` for Intelligence Index 53, GDPval-AA 1611, GDPval-AA normalized 55.6%, pricing $2/$10 intro; Google DeepMind evaluation methodology page for TB-4.0 57.4%, DeepSWE 77.9%, Vibe Code Bench 91.90%, GraphWalks 99.7%/84.2%, OA-Omniscience 15.1% hallucination rate). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Key revisions from Oct 1 to Oct 10 fresh BenchLM fetch: τ²-bench 95.6% confirmed (elite); Vibe Code Bench 91.90% confirmed (≥90 frontier); AA-SciCode 61.8% confirmed (≥55% frontier); AA ITBench 48.6% and AA Terminal-Bench 4.0 59.1% added; AA-MMMU-Pro 85.5% (≥80 frontier) and LVBench 85.4% and CharXiv 88.7% added for multimodal; Overall revised from 85 to 89.

---
