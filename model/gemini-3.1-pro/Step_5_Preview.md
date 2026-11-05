# Gemini 3.1 Pro — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-3-1-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro. Google's 3.1-generation flagship Pro SKU, positioned between the Gemini 4 family (Argon, Carbon) and the Flash/Lite tiers. Note that Artificial Analysis and Vals track it under the identifier **`gemini-3.1-pro-preview`**, so benchmark rows sourced from them describe that ID.
- **Short description:** Google's multimodal reasoning flagship for the 3.1 generation — strong on scientific knowledge and multilingual understanding, mid-tier on agentic execution. BenchLM scores it 64.41/100, **#34 of 1009**, which is a striking 18 places behind Gemini 4 Argon (82.28) and 6 behind Gemini 3.7 Flash (66.53) — the weakest quality/rank ratio in the Gemini 3.x lineup.
- **Provider / access:** Gemini API and OpenCode Zen (`opencode/gemini-3-1-pro-preview` at $2/$12/$0.20 with a >200K-token tier at $4/$18/$0.40); also `google/gemini-3.1-pro-preview` on OpenRouter. Zen lists it on the **paid** tier.
- **Release / knowledge:** the Gemini 4 Argon comparison table (Oct 2026) lists Gemini 3.1 Pro among Google's current lineup; Anthropic- and Meta-referenced benchmark charts already treat it as the established comparator, placing release around mid-2026. **Knowledge cutoff not disclosed.**
- **IDs:** `gemini-3.1-pro` / `gemini-3.1-pro-preview`; `google/gemini-3.1-pro-preview`.
- **Context window:** **1M tokens** — stated by Google's lineup comparison and confirmed by BenchLM and Artificial Analysis. Zen's rate card confirms the 1M window via its >200K pricing tier. Max output not published by Google.
- **Modalities:** **text, image, video and audio in; text out** (per Anthropic's lineup statement that all current models share this modality set, and confirmed by Google's own comparison table). Reasoning model.
- **Pricing (as of 2026-11-05):** Zen sells it at **$2 input / $0.20 cached read / $12 output per 1M**, with a **>200K-token tier at $4 / $0.40 / $18** — the "Premium" pricing tier in Zen's model list. Notably it is priced *above* Gemini 4 Argon's introductory $2/$10 despite ranking 18 places lower on BenchLM.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

BenchLM's 49-row catalog is the index. The majority of the strongest numbers come from **Meta's Muse Spark comparison chart** (an independent third-party evaluation set) plus Artificial Analysis, Vals AI, ARC Prize and Epoch AI; where Meta and AA measure the same benchmark, both are shown.

Agent / tool use — the weakest dimension, and the story of this model:

- **Claw-Eval: 57.8%** (Claw-Eval leaderboard) — the one genuinely respectable agentic figure
- τ²-bench: **95.6%**; DeepSearchQA: **69.7%**; Gert Labs: 56.87% (all from Meta's Muse Spark chart)
- **GDPval-AA: 14.6% normalized / 904 Elo** (AA) — catastrophically below the 1,750+ frontier reference
- **AA Agentic Index: 10.3%** — the single worst agentic figure in this entire research series
- **MazeBench: 1%**; **ResearchClawBench: 13.3%**; APEX-Agents-AA: 32.0%
- Terminal-Bench 2.1 (Vals): 70.8%; Terminal-Bench Hard: 53.8%; AA-EnterpriseOps-Gym: 42.2%; AA-AnalystAgent: 41.3%

Coding — better than agentic, still mid-pack:

- LiveCodeBench Pro: **82.9%** (Meta); LiveCodeBench (Vals): **88.5%**; SWE-bench (Vals): **78.8%**
- React Native Evals: 78.9%; AA Coding Index: 68.8% (just under the 70% reference)
- AA-SciCode: **58.7%** (clears the 55% reference)
- **Vibe Code Bench: 32.03%**; ScarfBench: 37.6%; **PostTrainBench v1.1: 22.0%**
- DeepSWE: **no verified public score found**

Reasoning / knowledge — the strongest dimension:

- **GPQA Diamond: 94.3%** (Meta) / **94.1%** (AA) / **95.5%** (Vals) — three agreement within 1.4 points
- AA-HLE: **47.0%**; HLE without tools: **45.4%**; MMLU-Pro (Vals): **91.0%**
- **AA Global-MMLU-Lite: 93.2%**; MedXpertQA (Text): 71.5%; AA-IFBench: 77.1%
- ARC-AGI-2: **77.1%** (Google); **ARC-AGI-3: 0.4%** — essentially zero on the newest abstract-reasoning benchmark
- AA-LCR: **82.0%**; **CritPt: 17.7%**
- FrontierMath v2 Tiers 1–3: **59.6%**; **Tier 4: 26.8%** (Epoch AI) — far behind Gemini 4 Argon's 78.0%
- **MRCR: no verified public score found**; no Artificial Analysis Intelligence Index figure published for this ID

Multimodal — strong, and the second-best dimension:

- MMMU-Pro: **83.9%** (Meta) / **82.4%** (AA); CharXiv: **80.2%**; ScreenSpot Pro: **84.4%**; SimpleVQA 72.4%; ERQA 69.4%; MedXpertQA (MM) 81.3%
- **ZeroBench: 29.0%** — the weak spot; ParseBench: 69.14%; Design Arena (website): 1,251 Elo

Safety: no Gray Swan IPI or equivalent prompt-injection figure found.

### Normalized scores (1–100)

- **Tool use: 48/100.** The decisive finding: this model is a knowledge engine wrapped in a weak agent. Claw-Eval 57.8% and τ²-bench 95.6% are respectable, and DeepSearchQA 69.7% is solid, but GDPval-AA 14.6%/904 Elo, AA Agentic Index 10.3%, MazeBench 1% and ResearchClawBench 13.3% are all near the floor, and Terminal-Bench 2.1 is only 70.8% (Vals). It meets **none** of the three tool-use frontier references (no TB2.1 88%+, no τ³-Banking, no GDPval 1,750+). Scored in the mid band, not lower, purely because τ²-bench and Claw-Eval show the tool-calling substrate is present — the failure is in long-horizon agentic execution, not in the ability to emit a tool call.
- **Reasoning: 78/100.** Genuinely strong on scientific and multilingual knowledge: GPQA Diamond 94.1–95.5% (three harnesses agree), MMLU-Pro 91.0%, Global-MMLU-Lite 93.2%, MedXpertQA 71.5%, AA-LCR 82.0%. Capped by AA-HLE 47.0% and HLE 45.4% (well below the 60%+ frontier models), FrontierMath Tier 4 26.8% (a third of Gemini 4 Argon's 78.0% and a quarter of GPT-6 Astra's 97.6%), CritPt 17.7%, ARC-AGI-3 0.4% and ARC-AGI-2 only 77.1%. Scored above the methodology's mid band on the strength of GPQA and the multilingual suite; no composite index exists for this ID to anchor it either way.
- **Context window: 95/100.** 1M-token tier as required, confirmed by Google's lineup comparison, BenchLM and AA, and corroborated structurally by Zen's >200K pricing tier. AA-LCR 82.0% is respectable long-context reasoning. Held at the tier floor because no MRCR retrieval figure exists and no max-output limit is published by Google.
- **Multimodal: 90/100.** Text + image + video + **audio** input places it in the methodology's 90–100 "audio in" tier, and the depth supports the lower part of it: MMMU-Pro 83.9%/82.4%, ScreenSpot Pro 84.4%, CharXiv 80.2%, MedXpertQA (MM) 81.3%. Held below the Gemini 4 models (92) by ZeroBench 29.0%, ParseBench 69.14%, a 1,251-Elo Design Arena result, and text-only output.
- **Coding: 68/100.** Right at the boundary of the methodology's mid band. LiveCodeBench 88.5% (Vals) and SWE-bench 78.8% (Vals) are strong, and AA-SciCode 58.7% clears the 55% reference, but AA Coding Index 68.8% is just *under* the 70% frontier reference, Vibe Code Bench is 32.03%, ScarfBench 37.6%, PostTrainBench v1.1 22.0% and no DeepSWE figure exists. A model that writes good isolated functions but cannot sustain an engineering task — consistent with its 10.3% agentic index.
- **Cost efficiency: 74/100.** $2/$12 per 1M with a >200K tier at $4/$18 sits between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors. Drawn down from the pure rate-card reading because it is priced *above* Gemini 4 Argon's introductory $2/$10 while ranking 18 places lower on BenchLM — i.e. it is dominated on both price and quality by a same-family model — and because Zen applies a surcharge rather than a discount to it. The $0.20 cache-read price and the absence of any free tier are the neutral factors.
- **Overall Score: 76/100.** (48 + 78 + 95 + 90 + 68) / 5 = 75.8 → 76. Recommendation: a poor default choice in its own family. If you are already paying Zen prices, **Gemini 4 Argon at $2/$10 introductory beats it on every quality dimension** (BenchLM #5 vs #34) at a lower rate card — and Gemini 3.7 Flash (66.53) also outranks it. The one genuine reason to select Gemini 3.1 Pro is its scientific/multilingual knowledge profile (GPQA 94.1–95.5%, Global-MMLU-Lite 93.2%, MedXpertQA) combined with full audio/video input, for retrieval-heavy or document-VQA workloads where the 1M window and MMMU-Pro 83.9% matter and agentic execution does not.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Google's own lineup comparison and the Gemini 3.1 Pro launch material as the primary source for specs, cross-checked against BenchLM's 49-row catalog (which attributes each number to Meta's Muse Spark chart, Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Claw-Eval, Gert Labs, ResearchClawBench, Kaggle, LlamaIndex, OpenRouter or a public leaderboard), plus OpenCode Zen's pricing table for the rate card and tier structure. Conflicting figures are listed side by side — GPQA Diamond 94.3% / 94.1% / 95.5% across three harnesses, MMMU-Pro 83.9% / 82.4% — rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 3.1 Pro (launch material, ARC-AGI-2 figure)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [BenchLM — Gemini 3.1 Pro benchmark scores (49 rows, 64.41/100, #34/1009)](https://benchlm.ai/models/gemini-3-1-pro)
  - [Artificial Analysis — Gemini 3.1 Pro (tracked as gemini-3.1-pro-preview)](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [Meta AI — Muse Spark comparison chart (source of the MMMU-Pro, GPQA-D, τ²-bench, LiveCodeBench Pro figures)](https://ai.meta.com/blog/introducing-muse-spark-msl/)
  - [Vals AI — Gemini 3.1 Pro leaderboard results](https://www.vals.ai/models/google_gemini-3.1-pro-preview)
  - [ARC Prize — leaderboard](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
