# Gemini 3.8 Flash — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-17 (UTC) — re-verification of 2026-10-10 scores
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's September 2026 Flash-tier long-horizon coding-agent model, further trained on top of Gemini 3.7 Flash on a 1M-token sparse Mixture-of-Experts; the workhorse for long-horizon software engineering and agent loops.
- **Provider / access:** Google Gemini API (`google/gemini-3.8-flash`), Google AI Studio (free tier), Google Vertex AI.
- **Release / knowledge:** Released September 2, 2026. Knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 (1M) in / 65,536 (64K) out
- **Modalities:** text, image, video, audio, pdf in; text, tool-calls out
- **Pricing (as of 2026-09-20):** Introductory $0.75 in / $3.75 out per 1M tokens through end-2026 (thinking/cached output billed as output); cached input $0.075/M (90% off); Batch and Flex APIs 50% off; free on Google AI Studio / unpaid API quota. Standard rates double to $1.50/$7.50 in January 2027.
- **Architecture:** Sparse Mixture-of-Experts; parameters not disclosed; further-trained from Gemini 3.7 Flash.

### Raw benchmarks found

> Sources: BenchLM.ai (`https://benchlm.ai/models/gemini-3.8-flash`, overall 73.17, rank #12/889, 49 of 625 benchmarks); Google DeepMind model card; Artificial Analysis.

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google DeepMind model card / BenchLM — meets ≥88% frontier threshold)
- Terminal-Bench 2.1 (Vals): **81.3%** (Vals AI leaderboard / BenchLM)
- aaTerminalBench21: **87.6%** (Artificial Analysis / BenchLM)
- Terminal-Bench 4.0: **19.10%** (Google DeepMind model card / BenchLM — below benchmark threshold)
- AA Terminal-Bench 4.0: **19.7%** (Artificial Analysis / BenchLM)
- GDPval-AA (Elo): **1545** (Google DeepMind model card / BenchLM — below ≥1750 frontier)
- GDPval-AA (normalized): **46.8%** (Artificial Analysis model benchmarks / BenchLM)
- OSWorld 2.0: **59.0%** (Google DeepMind model card / BenchLM)
- AA AutomationBench: **59.9%** (Artificial Analysis / BenchLM)
- AA Agentic Index: **41.1%** (Artificial Analysis model benchmarks / BenchLM)
- GDP.pdf: **21.0%** (Artificial Analysis / BenchLM)
- ApprenticeBench: **24%** (NeoCognition / BenchLM)
- AA ITBench: **52.5%** (Artificial Analysis / BenchLM)
- AA Tau3 Banking: **44.9%** (Artificial Analysis / BenchLM)
- AA Briefcase (Elo): **1203** (Artificial Analysis / BenchLM)
  - Hermes Index: **38.1%** (Nous Research: Hermes Index leaderboard / BenchLM, Oct 17)
  - Hermes Bench: **62.2%** (Nous Research: Hermes Index leaderboard / BenchLM, Oct 17)
  - MazeBench: **4%** (MazeBench AI leaderboard / BenchLM, Oct 17)

Coding:

- DeepSWE: **73.8%** (DeepSWE v1.1 leaderboard / BenchLM — just below ≥74% frontier threshold)
- Terminal-Bench 2.1: **89.4%** (Google DeepMind model card — coding category)
- LiveCodeBench (Vals): **89.5%** (Vals AI leaderboard / BenchLM — near ≥90 frontier)
- SWE-bench (Vals): **80.0%** (Vals AI leaderboard / BenchLM)
- SWE-bench Verified: **88.9%** (BenchLM model page — verified, at frontier)
- AA-SciCode: **56.6%** (Artificial Analysis / BenchLM — above 55% frontier)
- AA Coding Index: **76.3%** (Artificial Analysis model benchmarks / BenchLM)
- Vibe Code Bench: **14.30%** (Vals AI — very poor)
- CursorBench 3.2: **69.2%** (Cursor evals / BenchLM)
- CursorBench 4.0: **39.6%** (Cursor evals / BenchLM)
- FrontierSWE v2: **19.6%** (Proximal / BenchLM)
- Bug Hunt Bench: **18.0 fixes** (Bug Hunt Bench / BenchLM)

Reasoning / knowledge:

- AA-GPQA Diamond: **95.3%** (Artificial Analysis / BenchLM — ≥95% frontier threshold)
- GPQA Diamond (Vals): **94.4%** (Vals AI leaderboard / BenchLM)
- HLE-Verified: **54.9%** (Google DeepMind model card / BenchLM — above 40% frontier)
- AA-HLE: **47.8%** (Artificial Analysis / BenchLM)
- AA Intelligence Index: **40.9%** (Artificial Analysis — revised DOWN from 59 cited Sep 20; v4.3.2 methodology update)
- AA-LCR: **81.3%** (Artificial Analysis / BenchLM)
- CritPt: **18.3%** (Artificial Analysis / BenchLM — low)
- MLCR-AA: **21.7%** (Artificial Analysis / BenchLM — low)
- AA-Omniscience Index: **29.6%** (Artificial Analysis — low reliability)
- AA-Omniscience Accuracy: **54.6%** (Artificial Analysis model benchmarks / BenchLM)
- AA-Omniscience Hallucination Rate: **55.2%** (Artificial Analysis model benchmarks / BenchLM)
- MMLU-Pro (Vals): **90.2%** (Vals AI leaderboard / BenchLM)
- AA-MMLU-Pro: **89.8%** (Artificial Analysis / BenchLM)
- AA Global-MMLU-Lite: **92.2%** (Artificial Analysis / BenchLM)
- ARC-AGI-1: **98.50%** (ARC Prize verified results / BenchLM)
- ARC-AGI-2: **89.2%** (ARC Prize verified results / BenchLM)
- FrontierMath v2 (Tiers 1-3): **36.9%** (Epoch AI / BenchLM)
- FrontierMath v2 (Tier 4): **18.75%** (Epoch AI / BenchLM)
- BioMysteryBench (human-solvable): **88.8%** (Google DeepMind / BenchLM)
- BioMysteryBench (human-difficult): **56.5%** (Google DeepMind / BenchLM)
- Gray Swan IPI (15 attempts): **5.5%** (Google Gemini 4 Argon launch chart / BenchLM)

Multimodal:

- CharXiv w/o tools: **86.2%** (Google DeepMind / BenchLM)
- CharXiv: **88.7%** (Google DeepMind / BenchLM)
- LVBench: **85.4%** (Google DeepMind / BenchLM)
- AA-MMMU-Pro: **85.6%** (Artificial Analysis / BenchLM)
- Design Arena Website: **1307** (OpenRouter / BenchLM)
- CharXiv: 86.2%/88.7% (Google DeepMind model card)

Long context:

- MRCR v2 64K-128K: **97.0%** (Google DeepMind model card / BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 69.25, #22/954, 55 of 639) and AA as of 2026-10-17.

- **Tool use: 90/100.** Terminal-Bench 2.1 89.4% (≥88% frontier threshold), aaTB21 87.6%, TB-2.1 (Vals) 81.3%, GDPval-AA Elo 1545 (below 1750 frontier), OSWorld 59.0%, GDPval-AA normalized 46.8%. Strong agentic cluster with TB-2.1 meeting ≥88% frontier. Capped by TB-4.0 19.1%, GDP.pdf 21.0%, ApprenticeBench 24%, GDPval-AA Elo 1545 (below 1750).
- **Reasoning: 80/100.** AA-GPQA-D 95.3% (≥95% frontier), GPQA (Vals) 94.4%, HLE-Verified 54.9% (above 40% frontier), AA-LCR 81.3%, ARC-AGI-1 98.50%, MMLU-Pro 90.2%, AA Global-MMLU-Lite 92.2%. Capped by AA Intelligence Index 40.9 (revised from 59 — well below ~60 frontier), CritPt 18.3%, MLCR-AA 21.7%, Omniscience Index 29.6 (low reliability, 55.2% hallucination rate).
- **Context window: 96/100.** 1M-token input window (top tier) with GDM-MRCR v2 97.0% at 128K depth — usable, not nominal. 64K-token output ceiling. No ≥98% retrieval at 512K+ for perfect 100.
- **Multimodal: 92/100.** Text, image, video, audio and PDF input; text, tool-calls out — full omni input. AA-MMMU-Pro 85.6%, LVBench 85.4%, CharXiv 88.7%, Design Arena 1307. Capped by text-only output and Gray Swan IPI 5.5%.
- **Coding: 89/100.** SWE-bench Verified 88.9% (new data, at frontier), LiveCodeBench (Vals) 89.5% (near ≥90 frontier), SWE-bench (Vals) 80.0%, DeepSWE 73.8% (just below 74% frontier), VulcanBench not listed, AA Coding Index 76.3%, AA-SciCode 56.6% (≥55% frontier). Capped by Vibe Code Bench 14.3%, CursorBench 4.0 39.6%, FrontierSWE v2 19.6%.
- **Cost efficiency: 95/100.** Free on Google AI Studio / unpaid quota, with a cheap paid intro ($0.75/$3.75/M).
- **Overall Score: 89.4/100.** Half-up mean: (90+80+96+92+89)/5 = 447/5 = 89.4 → 89. **Best-fit:** cost-efficient coding/agentic Flash workhorse with elite reasoning benchmarks (GPQA-D 95.3%, ARC-AGI-1 98.50%) and strong coding (SWE-bench Verified 88.9%, LiveCodeBench 89.5%); cap: Intelligence Index revised from 59 to 40.9 (v4.3.2 methodology as model pool grew 230→889), poor TB-4.0 19.1% and GDP.pdf 21.0%. Free on Google AI Studio.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gemini-3-8-flash` for overall rank/score (#22/954, 69.25, 55 of 639) and 55 benchmark rows; AA model page `https://artificialanalysis.ai/models/gemini-3.8-flash` for Intelligence Index 40.9, pricing $0.75/$3.75; Google DeepMind model card for TB-2.1, MRCR 97.0%, multimodal benchmarks). Zero-influence: did not read peer `*.md` findings files during research.
- Re-verification (2026-10-17): Oct 16→17 re-verification confirmed; BenchLM overall 69.25 (#22/954, 55/639) unchanged from Oct 16; all benchmark scores unchanged; new benchmarks added: Hermes Index 38.1%, Hermes Bench 62.2%, MazeBench 4%; dimension scores and Overall retained at 89.4.
- Key revision: Intelligence Index revised from 59 (Sep 20, pre-v4.3.2) to 40.9 (Oct 10, v4.3.2 methodology update as model pool grew from 230 to 889); BenchLM overall revised from 75.9 (#6/230) to 73.17 (#12/889); GPQA-D added at 95.3% (≥95 frontier); SWE-bench Verified confirmed at 88.9%.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash_Cyber.md`, using the same headings.

---
