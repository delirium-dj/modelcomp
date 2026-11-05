# Gemini 3.6 Flash — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-3-6-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash. The 3.6-generation Flash tier, now **three generations behind** Gemini 4 (Argon, Carbon) and behind its own successors 3.7 Flash (66.53) and 3.8 Flash (66.22). BenchLM scores it 62.41/100, #44 of 1009.
- **Short description:** The **weakest agentic profile in this batch** (MazeBench 0%, AA Agentic Index 30.1%, ApprenticeBench absent but JobBench 36.7%) paired with **the worst deep-scientific reasoning in the batch** (CritPt 10.6%, FrontierMath Tier 4 22.0%) and **the weakest repository coding** (DeepSWE 49.0% — 25 points under the frontier reference). Its one genuinely strong suit is multimodal vision (AA-MMMU-Pro 83.2%, Design Arena 1,299).
- **Provider / access:** Gemini API and OpenCode Zen (`opencode/gemini-3-6-flash`) at **$1.50/$7.50/$0.15**, no >200K tier. Also `google/gemini-3.6-flash` on OpenRouter.
- **Release / knowledge:** release date not restated; the 3.6 generation is Google's 2026 mid-cycle line. **Knowledge cutoff not disclosed.**
- **IDs:** `gemini-3-6-flash` (Gemini API, Zen); `google/gemini-3-6-flash`.
- **Context window:** **1M tokens** (BenchLM). Max output not published.
- **Modalities:** **text, image, video and audio in; text out** (per Anthropic's lineup-wide statement that all current models share this modality set, corroborated by the MMMU-Pro and Design Arena results). Reasoning model.
- **Pricing (as of 2026-11-05):** **$1.50 input / $0.15 cached / $7.50 output per 1M**, with no long-context tier. Methodology anchors put $1.50/$7.50 between ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60).
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Google's own Gemini 3.6 Flash launch post is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Google's own comparison charts and OpenRouter supplying independent rows. The catalog holds only 29 rows — the second-thinnest in this batch.

Agent / tool use — **the weakest dimension in this batch**:

- **OSWorld-Verified: 83%** (Google) — the one genuinely strong agentic figure
- **GDPval-AA: 1,423 Elo** / 39.2% normalized — 327 Elo points under the 1,750 frontier reference
- **Terminal-Bench 2.1 (Vals): 73.8%** — 14.2 points under the 88%+ reference
- **AA Agentic Index: 30.1%** — the second-lowest in this batch; **MazeBench: 0%**
- **Terminal-Bench 2.1/4.0 (vendor), τ³-Banking, τ²-bench, BrowseComp, MCP-Atlas, Toolathlon, Claw-Eval, Agents' Last Exam: no verified public score found** — so two of the three frontier references are entirely unmeasured

Reasoning / knowledge:

- **AA-GPQA Diamond: 92.8%** / **93.4%** (Vals) — clears the 90%+ frontier reference
- **AA-HLE: 40.8%** — just clears the 40%+ frontier reference
- ARC-AGI-1: **91.2%**; ARC-AGI-2: 60.4%; AA-LCR: **80.0%**
- **CritPt: 10.6%** — the second-worst scientific-reasoning figure in this batch
- FrontierMath v2 Tiers 1–3: **58.9%**; **Tier 4: 22.0%** — the second-worst Tier 4 in this batch
- Artificial Analysis Intelligence Index: **34.0**; MMLU-Pro (Vals): 89.3%
- AA-Omniscience: index 22.1, accuracy 50.0%, hallucination rate **55.6%**
- **MRCR: no verified public score found**

Coding — **the weakest repository-coding record in this batch**:

- LiveCodeBench (Vals): **88.1%**; SWE-bench (Vals): **79.6%** — two solid figures
- **AA Coding Index: 69.2%** — 0.8 points under the 70% frontier reference
- **AA-SciCode: 53.4%** — 1.6 points under the 55% reference; Terminal-Bench 2.1: 73.8% — 11.2 points under the 85% reference
- **DeepSWE: 49.0%** — 25 points under the 74% frontier reference, the worst in this batch
- CursorBench 3.2: 53.5%; Vibe Code Bench: 57.57%; FrontierCode 1.1 Main: 26.9%
- **SWE-bench Verified: no verified public score found**

Multimodal — the strongest dimension:

- **AA-MMMU-Pro: 83.2%**; ParseBench: 69.38%; Design Arena (website): **1,299 Elo**
- **CharXiv, ExtractBench, BabyVision, ZeroBench: no verified public score found** — so the visual evidence is narrower than peers' despite the same tier placement

### Normalized scores (1–100)

- **Tool use: 48/100.** The weakest agentic profile in this batch, and scored accordingly. OSWorld-Verified 83% is the only respectable figure; GDPval-AA is 1,423 Elo against 1,750, Terminal-Bench 2.1 is 73.8% against 88%, **AA Agentic Index is 30.1% and MazeBench is 0%**, and **Terminal-Bench (vendor run), τ³-Banking, τ²-bench, BrowseComp, MCP-Atlas, Toolathlon and Claw-Eval are all absent**, leaving two of three references unmeasured and the one that is measured badly missed.
- **Reasoning: 70/100.** AA-GPQA Diamond 92.8%/93.4% clears the 90%+ reference on two harnesses, AA-HLE 40.8% just clears the 40%+ reference, and ARC-AGI-1 91.2% is solid. Capped by the weakest deep-reasoning suite in this batch — **CritPt 10.6%, FrontierMath Tier 4 22.0%** — an AA Intelligence Index of only 34.0, ARC-AGI-2 60.4%, a 55.6% hallucination rate, and no MRCR figure. A model with surface scientific knowledge and no depth.
- **Context window: 96/100.** 1M-token tier with AA-LCR 80.0% and no >200K pricing tier, so the window is sold at the flat $1.50/$7.50 rate. Held just under 100 because no MRCR or GraphWalks retrieval measurement exists and no max-output limit is published — so the window's usable depth at the top is unverified, which given this batch's MRCR-1M failures elsewhere is a material unknown.
- **Multimodal: 88/100.** Text + image + video + **audio** input places it in the methodology's 90–100 "audio in" tier, and AA-MMMU-Pro 83.2% plus a 1,299-Elo Design Arena support the upper-middle of that band. Held at 88 rather than the 90s because the visual suite is unusually narrow for the tier — **no CharXiv, ExtractBench, BabyVision or ZeroBench figure** — and ParseBench is only 69.38%.
- **Coding: 64/100.** LiveCodeBench 88.1% and SWE-bench 79.6% (Vals) are decent, but they cannot carry the dimension against **DeepSWE 49.0% — 25 points under the 74% reference, the worst in this batch — plus AA Coding Index 69.2% (under 70%), AA-SciCode 53.4% (under 55%), Terminal-Bench 2.1 73.8% (under 85%), CursorBench 3.2 53.5% and FrontierCode 1.1 Main 26.9%**, with no SWE-bench Verified figure. A model that writes acceptable isolated functions and cannot sustain repository work.
- **Cost efficiency: 85/100.** $1.50/$0.15/$7.50 per 1M sits between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors, and there is **no >200K tier**, so the full 1M window is sold at the flat rate. Held at 85 rather than 88 because it has no free tier and is dominated twice on quality by Gemini 3.7 Flash (#23) and 3.8 Flash (#27) at the same $1.50 input price.
- **Overall Score: 73/100.** (48 + 70 + 96 + 88 + 64) / 5 = 73.2 → 73. Recommendation: a **cheap multimodal vision engine and little else**. AA-MMMU-Pro 83.2%, Design Arena 1,299 and audio/video input at $1.50/$7.50 with no long-context surcharge make it reasonable for document and image analysis. Do not deploy it for agentic work (AA Agentic Index 30.1%, MazeBench 0%) or repository coding (DeepSWE 49.0%), and note it is three generations behind. For the same money Gemini 3.7 Flash beats it on BenchLM, agentic, retrieval and reasoning.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Google's Gemini 3.6 Flash launch post as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 29-row catalog (attributing independent numbers to Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Google's own comparison charts and OpenRouter) and OpenCode Zen's pricing table. The catalog's thinness (29 rows) is recorded explicitly, and missing benchmarks — Terminal-Bench vendor runs, τ³-Banking, τ²-bench, BrowseComp, MCP-Atlas, Toolathlon, Claw-Eval, Agents' Last Exam, SWE-bench Verified, CharXiv, ExtractBench, BabyVision, ZeroBench and MRCR — are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber launch post (primary source)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
  - [BenchLM — Gemini 3.6 Flash benchmark scores (29 rows, 62.41/100, #44/1009)](https://benchlm.ai/models/gemini-3-6-flash)
  - [Artificial Analysis — Gemini 3.6 Flash](https://artificialanalysis.ai/models/gemini-3-6-flash)
  - [Vals AI — Gemini 3.6 Flash leaderboard results](https://www.vals.ai/models/google_gemini-3.6-flash)
  - [ARC Prize — published semi-private results for Gemini 3.6 Flash](https://arcprize.org/results/gemini-3-6-flash)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenRouter — Gemini 3.6 Flash benchmarks and pricing](https://openrouter.ai/google/gemini-3.6-flash/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
