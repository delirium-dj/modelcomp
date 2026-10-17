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
- Design Arena Website: **1302** (OpenRouter / BenchLM — revised down from 1304)
- AA-Video-MME: **no verified public score found**

Long context:

- MRCR v2: **no verified public score found**
- GraphWalks: **no verified public score found**

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (`https://benchlm.ai/models/gemini-3.6-flash`, overall 62.78, #44/954, 28 of 639 benchmarks) and AA/Vals/Google as of 2026-10-17.

- **Tool use: 82/100.** (Revised DOWN from 83.) OSWorld-Verified 83%, Terminal-Bench 2.1 (Vals) 73.8%, GDPval-AA Elo 1423 (below 1750 frontier), GDPval-AA normalized 39.2% (below 50% threshold), AA Agentic Index 30.1% (low). CRITICAL: aaTB21 87.6% was a near-frontier benchmark on Oct 11 page but REMOVED from current Oct 17 page. Fewer agentic benchmarks on current page (28 vs 49 benches). Capped by GDPval-AA normalized 39.2% (below 50%), AA Agentic Index 30.1% (low), no aaTB21 ≥88%.

- **Reasoning: 78/100.** GPQA Diamond (Vals) 93.4% (near ≥95 frontier), AA-GPQA-D 92.8%, AA-HLE 40.8% (at ≥40% frontier), MMLU-Pro (Vals) 89.3%, AA-LCR 80.0%, ARC-AGI-1 91.20%. Good reasoning benchmark cluster. Capped by AA Intelligence Index 34.0 (well below ~60 frontier ref), CritPt 10.6% (very low), AA Omniscience Index 22.1 (low reliability, 55.6% hallucination rate).

- **Context window: 96/100.** 1,048,576 (1M) token input window (top tier per methodology). 64K output ceiling. No ≥98% retrieval at 512K+ published for perfect 100.

- **Multimodal: 92/100.** Verified text, image, video, audio, PDF input; text output with tool calls. Full omni input. AA-MMMU-Pro 83.2%, Design Arena 1302. Capped by text-only output, no verified video-specific benchmarks (CharXiv, LVBench, AA-Video-MME all missing), no explicit audio benchmark performance.

- **Coding: 84/100.** DeepSWE 49.0% (below ≥74% frontier), LiveCodeBench (Vals) 88.1% (near ≥90 frontier), SWE-bench (Vals) 79.6%, AA Coding Index 69.2% (below 70% frontier), AA-SciCode 53.4% (below 55% frontier), CursorBench 3.2 53.5%. Capped by DeepSWE 49.0 (below frontier), CursorBench 53.5% (mid-tier).

- **Cost efficiency: 92/100.** Free on Google AI Studio / unpaid quota with cheap paid intro ($0.75/$3.75/M, 90% cache discount). Introductory pricing ends Dec 2026.

- **Overall Score: 86/100.** (Revised DOWN from 87.) Half-up mean: (82+78+96+92+84)/5 = 432/5 = 86.4 → 86. BenchLM overall dropped 73.17→62.78 (#12→#44/954) due to expanding pool and fewer benchmarks on page (49→28). Tool use 83→82 (aaTB21 removed). **Best-fit:** cost-efficient Flash-tier workhorse with strong context (1M tokens), multimodal omni input, good agentic benchmarks (OSWorld 83%); cap: Intelligence Index 34.0 (below ~60 frontier), DeepSWE 49.0% (below 74% coding frontier), limited agentic benchmark coverage.

---
 
## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gemini-3.6-flash` for overall rank/score (#44/954, 62.78, 28 of 639 benchmarks) and benchmark tables; Google DeepMind model card for OSWorld 2.0 83%, DeepSWE 49.0%, pricing $0.75/$3.75; Vals AI for Terminal-Bench 2.1 73.8%, GPQA Diamond 93.4%, MMLU-Pro 89.3%, LiveCodeBench 88.1%, SWE-bench 79.6%; AA model page for Intelligence Index 34.0, GDPval-AA normalized 39.2%, AA-HLE 40.8%, AA-MMMU-Pro 83.2%, Design Arena 1302, GDPval-AA Elo 1423, AA Agentic Index 30.1%, AA-GPQA-D 92.8%, AA-LCR 80.0%, CritPt 10.6%, AA Coding Index 69.2%, AA-SciCode 53.4%; Epoch AI for FrontierMath v2 (T1-3 66.478%, T4 21.712%). aaTB21 87.6% was on Oct 11 page but REMOVED from current Oct 17 page.
- Key findings: BenchLM overall 62.78 (#44/954, 28 of 639 benchmarks); Intelligence Index 34.0 (below ~60 frontier); GPQA 92.8-93.4%, ARC-AGI-1 91.20%; OSWorld 83%, aaTB21 REMOVED from current page; LiveCodeBench 88.1%, SWE-bench Vals 79.6%; DeepSWE 49.0% (below frontier); CritPt 10.6% (very low); free on Google AI Studio.
- Re-verification (Oct 17): BenchLM overall 73.17→62.78 (#12/889→#44/954, 49→28 benches). aaTB21 87.6% REMOVED from current page. GDPval-AA normalized 39.3→39.2% (negligible). Design Arena 1304→1302. Intelligence Index 34.0 (unchanged). Tool use 83→82 (aaTB21 removal reduces cap). Overall 87→86.

---
