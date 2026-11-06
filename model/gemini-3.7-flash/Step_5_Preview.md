# Gemini 3.7 Flash — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-3-7-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash. The predecessor of Gemini 3.8 Flash and the **highest-ranked Flash-tier model in the entire Gemini lineup on BenchLM (66.53, #23 of 1009)** — it outranks Gemini 3.1 Pro (64.41, #34) and sits 0.31 points above its own successor Gemini 3.8 Flash (66.22, #27).
- **Short description:** Google's 3.7-generation fast model, with a genuinely distinctive profile: **flagship-grade scientific knowledge and the only measured MRCR figure in this batch (97% at 64K–128K)**, paired with near-floor agentic execution (Terminal-Bench 3.0 14.9%, MazeBench 1%, Agents' Last Exam 26.3%). A knowledge engine, not an agent.
- **Provider / access:** Gemini API and OpenCode Zen (`opencode/gemini-3-7-flash` at **$1.50/$7.50/$0.15**, no >200K tier — the 1M window is sold at the flat rate). Also `google/gemini-3.7-flash` on OpenRouter.
- **Release / knowledge:** release date not published on the model card; the Gemini 4 Argon comparison (Oct 2026) lists it in the current lineup. **Knowledge cutoff not disclosed.**
- **IDs:** `gemini-3-7-flash` (Gemini API, Zen); `google/gemini-3-7-flash`.
- **Context window:** **1M tokens**, confirmed by Google's model card, BenchLM and Artificial Analysis. Zen's flat rate card (no >200K tier) corroborates that the window carries no surcharge. Max output not published.
- **Modalities:** **text, image, video and audio in; text out** (per Anthropic's lineup-wide statement that all current models share this modality set; corroborated by the CharXiv chart and LVBench long-video results). Reasoning model.
- **Pricing (as of 2026-11-05):** **$1.50 input / $0.15 cached / $7.50 output per 1M**, with no long-context tier. No free tier.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Google's model card is the primary source; Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Proximal, LlamaIndex, NeoCognition and OpenRouter supply the independent rows. Where Google and AA/Vals measure the same benchmark, all are shown.

Agent / tool use — **the weakest dimension, and decisively so**:

- **Terminal-Bench 2.1: 85.8%** (Google model card) / **85.8%** (AA) / **77.5%** (Vals AI) — the two strongest harnesses clear the 88% reference only on Google's own run
- **GDPval-AA: 1,525 Elo** / 44.6% normalized — well under the 1,750 frontier reference
- **Terminal-Bench 3.0: 14.9%**; **FrontierSWE v2: 20.3%**; **MazeBench: 1%**; **Agents' Last Exam: 26.3%**; ApprenticeBench: 16%
- OSWorld 2.0: **47.9%**; AutomationBench: **30.4%**; AA Agentic Index: 36.4%
- AA-AnalystAgent: **60.0%** (the one genuinely good agentic figure); **AA Harvey LAB v1.0: 90.7%**
- **τ³-Banking: no verified public score found**; **Claw-Eval: no verified public score found**

Reasoning / knowledge — **the strongest dimension**:

- **AA-GPQA Diamond: 94.5%** / **93.9%** (Vals) — clears the 90%+ frontier reference; the second-highest GPQA in this batch behind GPT-5.6 Sol's 95.2%
- HLE-Verified: **53.6%**; AA-HLE: **47.9%** — clears the 40%+ reference
- **MRCR v2 64K–128K: 97%** — the only measured MRCR figure in this entire batch, and the strongest measured long-context retrieval result here
- **ARC-AGI-1: 95.5%**; ARC-AGI-2: 84.6%
- LABBench2: **82.1%**; BioMysteryBench: **87.1%** (human-solvable) / 43.5% (human-difficult); MMLU-Pro (Vals): **90.1%**
- AA-LCR: **81.7%**; **CritPt: 14.3%** — the joint-weakest physics reasoning in this batch
- Artificial Analysis Intelligence Index: **39.1**; FrontierMath v2 Tiers 1–3: **71.6%**; **Tier 4: 36.6%**
- AA-Omniscience: index 26.5, accuracy 55.3%, hallucination rate **64.5%**

Coding — mid-pack:

- **AA Coding Index: 76.1%** — clears the 70% frontier reference
- **Terminal-Bench 2.1: 85.8%** — clears the 85% reference
- **AA-SciCode: 57.2%** — clears the 55% reference; SWE-bench (Vals): **80.8%**; LiveCodeBench (Vals): **88.7%**
- DeepSWE: **65.3%** — 8.7 points under the 74% reference
- FrontierCode 1.1 Main: 43.6%; **FrontierSWE v2: 20.3%**; **Terminal-Bench 3.0: 14.9%**
- SWE-bench Verified / SWE-bench Pro: **no verified public score found**

Multimodal — second-strongest dimension:

- **AA-MMMU-Pro: 85.5%** — the second-highest image-understanding figure in this batch
- **CharXiv: 88.7%** (84.5% without tools); **LVBench (long video): 85.4%**; ParseBench: 70.66%; Design Arena (website): 1,302 Elo

### Normalized scores (1–100)

- **Tool use: 68/100.** Meets one frontier reference (Terminal-Bench 2.1 85.8% on Google's and AA's runs) and misses the other two decisively — GDPval-AA 1,525 Elo against the 1,750 reference, and no τ³-Banking figure at all. Held up by AA-AnalystAgent 60.0% and AA Harvey LAB 90.7%, which show real analytical-tool competence. Drawn down hard by Terminal-Bench 3.0 14.9%, FrontierSWE v2 20.3%, MazeBench 1%, Agents' Last Exam 26.3%, OSWorld 2.0 47.9% and AutomationBench 30.4%. A model that reasons about tools well but cannot sustain a multi-step agentic task.
- **Reasoning: 84/100.** GPQA Diamond 93.9–94.5% and HLE 47.9–53.6% both clear the frontier references, and **MRCR v2 97% at 64K–128K is the only measured MRCR figure in this batch** and the strongest long-context retrieval result here. LABBench2 82.1% and BioMysteryBench 87.1% are strong. Capped by an AA Intelligence Index of only 39.1 (the lowest in this batch), CritPt 14.3%, FrontierMath Tier 4 36.6% (under half of Opus 5.5's 95.0%), ARC-AGI-2 84.6% and a 64.5% hallucination rate.
- **Context window: 97/100.** 1M-token tier with the batch's only measured MRCR figure (97% at 64K–128K) plus AA-LCR 81.7%, and the commercial detail that **Zen sells the full 1M window at the flat $1.50/$7.50 rate with no >200K tier**. Held under 100 because 97% is below the ≥98% retrieval threshold and no max-output limit is published.
- **Multimodal: 92/100.** Text + image + video + **audio** input places it in the methodology's 90–100 "audio in" tier, and depth is the second-best in this batch: MMMU-Pro 85.5%, CharXiv 88.7%, LVBench 85.4%, Design Arena 1,302 Elo. Held below Gemini 4 Argon (also 92) only by ParseBench 70.66% and text-only output.
- **Coding: 84/100.** AA Coding Index 76.1% clears the 70% reference, Terminal-Bench 2.1 85.8% clears the 85% reference and AA-SciCode 57.2% clears the 55% reference, with SWE-bench 80.8% and LiveCodeBench 88.7% (Vals) corroborating. Capped by DeepSWE 65.3% (8.7 points under the reference), FrontierSWE v2 20.3%, Terminal-Bench 3.0 14.9% and no published SWE-bench Verified or Pro figure — the same agentic-execution weakness that caps its tool-use score.
- **Cost efficiency: 85/100.** $1.50/$0.15/$7.50 per 1M sits between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors, and there is **no >200K tier**, so the entire 1M window is sold at the standard rate. Held below 88 because it is dominated on quality by Gemini 4 Argon at a similar introductory rate ($2/$10, BenchLM #5 vs #23) and has no free tier.
- **Overall Score: 85/100.** (68 + 84 + 97 + 92 + 84) / 5 = 85 → **85** → 85. Recommendation: an excellent **cheap knowledge-and-long-context engine** — GPQA 94.5%, the batch's only measured MRCR (97%), MMMU-Pro 85.5%, LVBench 85.4% and 1M context at a flat $1.50/$7.50 with no long-context surcharge. It is also, on BenchLM, the best-ranked Flash-tier model in the Gemini lineup and marginally better than its own successor. Do not deploy it as an autonomous coding agent: Terminal-Bench 3.0 14.9%, FrontierSWE v2 20.3% and MazeBench 1% show the agentic layer does not hold at all.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Google's Gemini 3.7 Flash model card as the primary source, cross-checked against BenchLM's 47-row catalog (which attributes each number to Google's model card, Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Proximal, Google's Gemini 3.8 Flash card, LlamaIndex, NeoCognition or OpenRouter) and OpenCode Zen's pricing table. Conflicting figures are listed side by side — Terminal-Bench 2.1 85.8% / 85.8% / 77.5% across three harnesses, GPQA Diamond 94.5% / 93.9% — rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Gemini 3.7 Flash model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [BenchLM — Gemini 3.7 Flash benchmark scores (47 rows, 66.53/100, #23/1009)](https://benchlm.ai/models/gemini-3-7-flash)
  - [Artificial Analysis — Gemini 3.7 Flash](https://artificialanalysis.ai/models/gemini-3-7-flash)
  - [Vals AI — Gemini 3.7 Flash leaderboard results](https://www.vals.ai/models/google_gemini-3.7-flash)
  - [ARC Prize — published semi-private results for Gemini 3.7 Flash](https://arcprize.org/results/google-gemini-3-7-flash)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
