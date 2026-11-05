# Gemini 2.5 Pro — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-2-5-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro. Now **six generations behind** the current lineup: Gemini 4 Carbon (88.79) and 4 Argon (82.29) at the top, then 3.8/3.7 Flash (66.7), 3.1 Pro (64.48), 3.6 Flash (62.56), 3.5 Flash (61.62), 3 Pro (60.94), 3 Flash (54.18) — and then this at **49.02, #106 of 1,015**. BenchLM also classifies it **Non-Reasoning**, the fifth such model in this corpus.
- **Short description:** A 2025-era flagship whose measured record has aged decisively, and which holds **two of the three worst figures in this research series**: **AA-Omniscience index −16.3 with a 90.9% hallucination rate**, and **FrontierMath Tier 4 at 0.000%**. Its surviving assets are a 1M window and MATH-500 96.7%. It is a compatibility model.
- **Provider / access:** Gemini API, and OpenCode Zen (`opencode/gemini-2.5-pro`) at **$2/$12 with a >200K tier at $4/$18**. No Free ID.
- **Release / knowledge:** release date not restated; the 2.5 generation is Google's early-2025 line, predating the Gemini 3 and 4 families. **Knowledge cutoff not disclosed.**
- **IDs:** `gemini-2-5-pro` (Gemini API, Zen); `google/gemini-2.5-pro` (Openrouter).
- **Context window:** **1M tokens** (BenchLM) — unusually large for a 2025 model, and the reason its context score is not as low as its quality scores.
- **Modalities:** **text and image in; text out**. Non-Reasoning per BenchLM.
- **Pricing (as of 2026-11-05):** **$2 input / $0.20 cached / $12 output per 1M**, with **>200K at $4 / $0.40 / $18** — the same structure as Gemini 3.1 Pro, and note **Gemini 3.8 Flash costs $1.50/$7.50** and scores 17+ BenchLM points higher.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Google's own Gemini 2.5 Pro launch material is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, Epoch AI, Kaggle, LlamaIndex, Phi-4-reasoning-plus's comparison chart and Openrouter supplying independent rows. 30 benchmarks total — the thinnest base-tier evidence in this batch.

Agent / tool use — **near-absent**:

- τ²-bench: **54.1%**; Gert Labs: 42.01%
- **GDPval-AA: 616 Elo** / 0.0% normalized — the **lowest GDPval figure measured anywhere in this research series**, and 0.0% normalized means it produced no acceptable output at all
- **AA Agentic Index: 3.5%** — the second-lowest agentic index in this research series
- **Terminal-Bench, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, Claw-Eval, JobBench, MazeBench, ALE: no verified public score found** — so two of three frontier references are entirely unmeasured and the one that is measured is 0.0%

Reasoning / knowledge — **the worst reliability in this research series**:

- GPQA: **83.0%** (vendor) / AA-GPQA Diamond 84.4% — fails the 90%+ reference on both
- HLE: **18.8%** (vendor) / AA-HLE 22.5% — fails the 40%+ reference by a wide margin
- **AA-Omniscience: index −16.3, accuracy 39.1%, hallucination rate 90.9%** — the **worst Omniscience index and the second-worst hallucination rate measured in this research series**
- AA Intelligence Index: **16.1%** — the lowest composite in this batch; AA-LCR: **69.0%**; **CritPt: 2.6%**
- AIME 2024: 92%; MATH-500: **96.7%** — the two respectable figures, and both on benchmarks that saturate
- **FrontierMath v2 Tiers 1–3: 24.6%; Tier 4: 0.000%** — the lowest Tier 4 figure measured anywhere in this research series
- MMLU-Pro (AA): 86.2%; AA-IFBench: 48.7%; AA Global-MMLU-Lite: 90.3%
- **ARC-AGI, MRCR: no verified public score found**

Coding — weak:

- SWE-bench Verified: **63.8%** (vendor) / **54.4%** (Vals) — a 9.4-point gap, both far under frontier
- AA LiveCodeBench: **80.1%** — the one respectable coding figure
- **AA-SciCode: 46.3%**; **AA Coding Index: 33.3%**; **Vibe Code Bench: 0.40%** — the second-lowest Vibe figure in this research series
- **DeepSWE, SWE-bench Pro, Terminal-Bench, FrontierCode: no verified public score found**

Multimodal (image-in):

- AA-MMMU-Pro: **74.9%**; Design Arena (website): **1,165 Elo** — the lowest Design Arena figure in this batch

### Normalized scores (1–100)

- **Tool use: 35/100.** Below the methodology's mid band, and the lowest tool-use score in this batch. **GDPval-AA is 616 Elo with a 0.0% normalized score** — the worst measured anywhere in this research series, meaning no acceptable outputs — and **AA Agentic Index is 3.5%**, the second-lowest. τ²-bench 54.1% and Gert Labs 42.01% are the only other figures, and **Terminal-Bench, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon and Claw-Eval have no measurement at all**, leaving two of three references unmeasured and the third at zero.
- **Reasoning: 40/100.** The weakest dimension and the bottom of the methodology's mid band. GPQA 83.0–84.4% fails the 90% reference, HLE 18.8–22.5% fails the 40% reference by roughly half, **CritPt is 2.6%, FrontierMath Tier 4 is 0.000%, the AA Intelligence Index is 16.1% (lowest here) and the AA-Omniscience index is −16.3 with a 90.9% hallucination rate**. MATH-500 96.7% and AIME 2024 92% are genuine but saturating benchmarks. Scored at 40 rather than lower because the knowledge substrate is demonstrably present — it is simply unreliable.
- **Context window: 97/100.** 1M-token tier, and one of the larger windows in this research series. Held just under 100 because **AA-LCR is 69.0%**, no MRCR retrieval figure exists, and no max-output limit is published. Note the >200K tier doubles input cost, so the top of the window is economically gated.
- **Multimodal: 70/100.** Text + image in with text out, at the top of the methodology's 60–70 band on AA-MMMU-Pro 74.9%. Held at 70 rather than above because the visual suite is two benchmarks, Design Arena is only 1,165 Elo (the lowest here), and there is no video or audio input.
- **Coding: 45/100.** Below the methodology's mid band. AA LiveCodeBench 80.1% is the one respectable figure; SWE-bench Verified is 54.4% (Vals) / 63.8% (vendor) — a 9.4-point gap — and **AA Coding Index 33.3%, AA-SciCode 46.3% and Vibe Code Bench 0.40%** are all near-floor. DeepSWE, SWE-bench Pro, Terminal-Bench and FrontierCode have no figure.
- **Cost efficiency: 76/100.** $2/$0.20/$12 per 1M sits between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors, and the 1M window is a genuine asset at that price. Held at 76 rather than 88 because the **>200K tier doubles input cost**, and because the model is **dominated three times on quality at a lower price** — Gemini 3.8 Flash ($1.50/$7.50, BenchLM 66.74), Gemini 3.1 Pro ($2/$12, 64.48) and Gemini 3.7 Flash ($1.50/$7.50, 66.49) all cost the same or less while scoring 12–17 points higher. Batch/Flex at 50% is the sole mitigator.
- **Overall Score: 57/100.** (35 + 40 + 97 + 70 + 45) / 5 = 57.4 → **57**. Recommendation: **a 2025 compatibility model with no remaining reason to select it.** Its two headline dimensions — 1M context and mid-tier multimodal input — are the only things it still does adequately, and both are available cheaper and better in the 3.x and 4 families. Its measured record contains three of the worst figures in this research series (GDPval 616 Elo / 0.0% normalized, AA-Omniscience index −16.3, FrontierMath Tier 4 0.000%), so it must never be used for agentic or factual work. Migrate unless pinned to `gemini-2.5-pro`.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Google's Gemini 2.5 Pro launch material as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 30-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, Kaggle, LlamaIndex, Phi-4-reasoning-plus's comparison table and Openrouter) and OpenCode Zen's pricing table. The three series-worst figures are attributed explicitly rather than presented bare, and the 9.4-point SWE-bench vendor-vs-Vals gap (63.8% vs 54.4%) is listed side by side. Missing benchmarks (Terminal-Bench, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, Claw-Eval, JobBench, MazeBench, ALE, ARC-AGI, MRCR, DeepSWE, SWE-bench Pro, FrontierCode, and most multimodal benchmarks) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 2.5 Pro launch/update material (primary benchmark source)](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/)
  - [Google DeepMind — Gemini Pro model page](https://deepmind.google/models/gemini/pro/)
  - [BenchLM — Gemini 2.5 Pro benchmark scores (30 rows, 49.02/100, #106/1015)](https://benchlm.ai/models/gemini-2-5-pro)
  - [Artificial Analysis — Gemini 2.5 Pro](https://artificialanalysis.ai/models/gemini-2-5-pro)
  - [Vals AI — Gemini 2.5 Pro leaderboard results](https://www.vals.ai/models/google_gemini-2.5-pro)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
