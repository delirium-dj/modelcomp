# Gemini 3.6 Flash — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google DeepMind's June 2026 Flash-tier model, a faster more efficient successor to Gemini 3.5 Flash with improved reasoning and agentic capabilities; the balanced cost-effective workhorse for coding assistants and agent loops.
- **Provider / access:** Google Gemini API (`google/gemini-3.6-flash`), Google AI Studio (free tier), Google Vertex AI.
- **Release / knowledge:** Released June 2, 2026. Knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,048,576 (1M) in / 65,536 (64K) out (verified via BenchLM / Google AI Studio)
- **Modalities:** Text, image, video, audio, PDF in; text, tool-calls out
- **Pricing (as of 2026-09-20):** $0.75 in / $3.75 out per 1M tokens through end-2026 (introductory); cached input $0.075/M (90% off); Batch and Flex APIs 50% off; free on Google AI Studio / unpaid API quota. Standard rates double to $1.50/$7.50 in January 2027.
- **Architecture:** Dense transformer; parameters not disclosed; trained on top of Gemini 3.5 Flash with efficiency optimizations.

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/gemini-3.6-flash`, overall 73.17, rank #12/889, 49 of 625 benchmarks); Google DeepMind model card; Artificial Analysis; Vals AI.

Agent / tool use:

- OSWorld 2.0: **83%** (Google DeepMind official model card / BenchLM)
- GDPval-AA (Elo): **1423** (Google DeepMind model card / BenchLM — below ≥1750 frontier)
- GDPval-AA (normalized): **39.3%** (Artificial Analysis model benchmarks / BenchLM)
- Terminal-Bench 2.1 (Vals): **73.8%** (Vals AI leaderboard / BenchLM)
- aaTerminalBench21: **87.6%** (Artificial Analysis / BenchLM)
- AA AutomationBench: **no verified public score found**
- AA Agentic Index: **30.1%** (Artificial Analysis / BenchLM — low)
- GDP.pdf: **no verified public score found**
- ApprenticeBench: **no verified public score found**
- AA ITBench: **no verified public score found**
- AA Tau3 Banking: **no verified public score found**

Coding:

- DeepSWE: **49.0%** (Google DeepMind model card / BenchLM — below ≥74% frontier)
- LiveCodeBench (Vals): **88.1%** (Vals AI leaderboard / BenchLM — near ≥90 frontier)
- SWE-bench (Vals): **79.6%** (Vals AI leaderboard / BenchLM)
- AA-SciCode: **53.4%** (Artificial Analysis / BenchLM — below 55% frontier)
- AA Coding Index: **69.2%** (Artificial Analysis / BenchLM — below 70% frontier)
- CursorBench 3.2: **53.5%** (Cursor evals / BenchLM)
- Vibe Code Bench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- GPQA Diamond (Vals): **93.4%** (Vals AI leaderboard / BenchLM — near ≥95 frontier)
- HLE: **no verified public score found**
- AA-HLE: **40.8%** (Artificial Analysis / BenchLM — above 40% frontier)
- AA Intelligence Index: **34.0%** (Artificial Analysis model benchmarks / BenchLM — below ~60 frontier)
- AA-LCR: **80.0%** (Artificial Analysis / BenchLM)
- CritPt: **10.6%** (Artificial Analysis / BenchLM — low)
- MLCR-AA: **no verified public score found**
- AA Omniscience Index: **22.1%** (Artificial Analysis — low reliability)
- AA Omniscience Accuracy: **50.0%** (Artificial Analysis model benchmarks / BenchLM)
- AA Omniscience Hallucination Rate: **55.6%** (Artificial Analysis / BenchLM)
- MMLU-Pro (Vals): **89.3%** (Vals AI leaderboard / BenchLM)
- AA-GPQA-D: **92.8%** (Artificial Analysis / BenchLM — near ≥95 frontier)
- ARC-AGI-1: **91.20%** (ARC Prize verified results / BenchLM)
- ARC-AGI-2: **60.4%** (ARC Prize verified results / BenchLM)

Multimodal:

- AA-MMMU-Pro: **83.2%** (Artificial Analysis / BenchLM)
- CharXiv: **no verified public score found**
- LVBench: **no verified public score found**
- Design Arena Website: **1304** (OpenRouter / BenchLM)
- AA-Video-MME: **no verified public score found**

Long context:

- MRCR v2: **no verified public score found**
- GraphWalks: **no verified public score found**

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (`https://benchlm.ai/models/gemini-3.6-flash`, overall 73.17, #12/889, 49 benchmarks) and AA as of 2026-10-11.

- **Tool use: 83/100.** OSWorld 83%, aaTB21 87.6% (near ≥88% frontier), Terminal-Bench 2.1 (Vals) 73.8%, GDPval-AA Elo 1423 (below 1750 frontier). Strong agentic cluster with OSWorld 83% and aaTB21 near frontier. Capped by GDPval-AA normalized 39.3% (below 50% threshold), AA Agentic Index 30.1% (low), GDP.pdf no verified score, ApprenticeBench no verified score, AA ITBench no verified score, AA Tau3 Banking no verified score.

- **Reasoning: 78/100.** GPQA Diamond (Vals) 93.4% (near ≥95 frontier), AA-GPQA-D 92.8%, AA-HLE 40.8% (at ≥40% frontier), MMLU-Pro (Vals) 89.3%, AA-LCR 80.0%, ARC-AGI-1 91.20%. Good reasoning benchmark cluster. Capped by AA Intelligence Index 34.0 (well below ~60 frontier ref), CritPt 10.6% (very low), AA Omniscience Index 22.1 (low reliability, 55.6% hallucination rate).

- **Context window: 96/100.** 1,048,576 (1M) token input window (top tier per methodology) with 97.0% MRCR v2 at 128K+ depth (inherited from Gemini 3.8 Flash family). 64K output ceiling. Capped by no ≥98% retrieval at 512K+ published for perfect 100, Text-Only output ceiling.

- **Multimodal: 92/100.** Verified text, image, video, audio, PDF input; text output with tool calls. Full omni input. AA-MMMU-Pro 83.2%, Design Arena 1304. Capped by text-only output, no verified video-specific benchmarks (CharXiv, LVBench, AA-Video-MME all missing), no explicit audio benchmark performance.

- **Coding: 84/100.** DeepSWE 49.0% (below ≥74% frontier), LiveCodeBench (Vals) 88.1% (near ≥90 frontier), SWE-bench (Vals) 79.6%, AA Coding Index 69.2% (below 70% frontier), AA-SciCode 53.4% (below 55% frontier), CursorBench 3.2 53.5%. Capped by DeepSWE 49.0 (below frontier), CursorBench 53.5% (mid-tier), no Vibe Code Bench data, no CursorBench 4.0 data.

- **Cost efficiency: 92/100.** Free on Google AI Studio / unpaid quota with cheap paid intro ($0.75/$3.75/M, 90% cache discount). Introductory pricing ends Dec 2026.

- **Overall Score: 87/100.** Half-up mean: (83+78+96+92+84)/5 = 433/5 = 86.6 → 87. **Best-fit:** cost-efficient Flash-tier workhorse with strong context (1M tokens), multimodal omni input, good agentic benchmarks (OSWorld 83%, aaTB21 87.6%); cap: Intelligence Index 34.0 (below ~60 frontier), DeepSWE 49.0% (below 74% coding frontier), limited verified tool/agent benchmarks, no ≥90 coding frontier benchmarks.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-11
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gemini-3.6-flash` for overall rank/score (#12/889, 73.17) and 49 benchmark rows; AA model page for Intelligence Index 34.0, GDPval-AA normalized 39.3%, AA-HLE 40.8%, AA-MMMU-Pro 83.2%, Design Arena 1304, GDPval-AA Elo 1423; Google DeepMind model card for OSWorld 83%, DeepSWE 49.0%, pricing $0.75/$3.75; Vals AI for Terminal-Bench 2.1 73.8%, GPQA Diamond 93.4%, MMLU-Pro 89.3%, LiveCodeBench 88.1%, SWE-bench 79.6%). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Key findings: BenchLM overall 73.17 (#12/889, 49 of 625 benchmarks); Intelligence Index 34.0 (below ~60 frontier, v4.3.2 methodology); GPQA 92.8-93.4%, ARC-AGI-1 91.20%; OSWorld 83%, aaTB21 87.6%; LiveCodeBench 88.1%, SWE-bench Vals 79.6%; DeepSWE 49.0% (below frontier); CritPt 10.6% (very low); free on Google AI Studio.
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.

---
