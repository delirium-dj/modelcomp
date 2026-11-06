# GPT-5.4 — findings by Step 5 Preview

- Source: OpenAI (`gpt-5-4`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4. The **base** variant — distinct from **GPT-5.4 Pro** (`model/gpt-5.4-pro/`, refreshed earlier in this session with only 12 benchmarks at $30/$180) and from GPT-5.4 mini / nano. BenchLM scores it **66.48/100, #26 of 1,014**, which is *below* its own Pro tier (68.29, #20) despite the Pro having a much thinner evidence base — a reminder that BenchLM overall scores are coverage-sensitive rather than strictly capability-ordered.
- **Short description:** A well-evidenced 61-benchmark base model — the **only OpenAI model in this batch with a published Claw-Eval figure (60.3%)** — carrying the **third-worst hallucination rate measured in this research series (91.7%, with an AA-Omniscience index of just 5.8)**. Its agentic and multimodal results are a mixed bag, and it is now three generations behind GPT-6.1 Sol.
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, and OpenCode Zen (`opencode/gpt-5-4`) at **$2.50/$15 with a >273K tier at $5/$22.50**. No Free ID.
- **Release / knowledge:** release date not restated; the 5.4 generation is OpenAI's 2026 mid-cycle predecessor of 5.5/5.6/6/6.1. **Knowledge cutoff not disclosed.**
- **IDs:** `openai/gpt-5-4`; `opencode/gpt-5-4`.
- **Context window:** **1.05M tokens** (BenchLM). Max output not restated.
- **Modalities:** **text and image in; text out** (OpenAI's lineup-wide statement), with an unusually broad measured visual suite behind it.
- **Pricing (as of 2026-11-05):** **$2.50 input / $0.25 cached / $15 output per 1M**, with >273K at **$5 / $0.50 / $22.50**. Methodology anchors put $2.50/$15 between ~$3/$15 (≈60) and ~$1.25/$4.25 (≈88). Batch and Flex at 50%, Fast mode at 2x.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's GPT-5.4 launch post is the primary source (so its rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Kaggle, LlamaIndex, NeoCognition, the HealthBench paper, the JobBench and ExploitGym papers, Gert Labs, Claw-Eval, ResearchClaw Bench, React Native Evals, Meta's Muse Spark chart, OpenAI's GPT-5.5 comparison table and Openrouter supplying independent rows. 61 benchmarks total.

Agent / tool use — **a broad but weak agentic record**:

- **Claw-Eval: 60.3%** — one of only three measured ClawEval figures in this research series, and the best of them
- **Terminal-Bench 2.0: 75.1%** (vendor) — note the 2.0 harness, not 2.1; no TB2.1 or TB4.0 figure exists for this model
- **BrowseComp: 82.7%**; **τ²-bench: 98.9%** — the highest τ²-bench figure in this batch; CyberGym: 79.0%
- Toolathlon: 54.6%; OSWorld-Verified: 75.0%; MCP-Atlas: 70.6%; LifeVal: 73.0%; DeepSearchQA: 73.6%
- **GDPval-AA: 1,307 Elo** / 37.3% normalized — far under the 1,750 frontier reference
- **AA Tau3 Banking: 39.6%** — 10.4 points under the 50% reference
- Gert Labs: 64.89%; JobBench: 38.9%; terminalBenchHard: 57.6%; APEX-Agents-AA: 33.3%
- **MazeBench: 0%**; ApprenticeBench: 11%; ResearchClawBench: 15.3%; ExploitGym: 6.0%

Reasoning / knowledge:

- **AA-GPQA Diamond: 92.0%** / GPQA-D 92.8% (Meta chart) — clears the 90%+ frontier reference
- HLE: **52.1%** / HLE without tools 39.8% / AA-HLE 43.7% — clears the 40%+ reference on two of three
- **AA-Omniscience: index 5.8, accuracy 50.8%, hallucination rate 91.7%** — an index of 5.8 means barely more correct than incorrect answers, and the 91.7% hallucination rate is the third-worst in this research series
- AA Intelligence Index: **39.0%**; AA-LCR: **82.0%**; **CritPt: 23.4%**
- ARC-AGI-1: **93.7%**; ARC-AGI-2: **74.0%**; **ARC-AGI-3: 0.2%**
- FrontierMath v2 Tiers 1–3: **78.6%**; Tier 4: **49.0%**; HealthBench Professional: 48.1%; HealthBench Hard: 40.1%; MedXpertQA (Text): 59.6%; AA-IFBench: 73.9%
- **MRCR: no verified public score found**

Coding — mid-pack:

- **AA Coding Index: 71.0%** — clears the 70%+ frontier reference
- LiveCodeBench Pro: **87.5%**; React Native Evals: **85.3%**; Vibe Code Bench: **67.4%**
- SWE-bench Pro: 57.7%; Terminal-Bench 2.0: 75.1%
- **AA-SciCode, DeepSWE, SWE-bench Verified: no verified public score found** — so the 55%, 74% and SWE-bench references are all unmeasured

Multimodal — **the strongest dimension, and unusually broad**:

- **ScreenSpot Pro: 85.4%**; **CharXiv: 82.8%**; **MMMU-Pro: 81.2%** (82.1% with Python)
- **AA-MMMU-Pro: 78.4%**; MedXpertQA (MM): 77.1%; ERQA: 65.4%; ZeroBench: 41.0%; SimpleVQA: 61.1%; OfficeQA Pro: 53.2%; ParseBench: 61.72%; Design Arena: 1,219 Elo

### Normalized scores (1–100)

- **Tool use: 62/100.** Mid-band, and the best evidence-to-reliability ratio in this batch. **Claw-Eval 60.3% is the best measured ClawEval figure in this research series** (ahead of Claude Opus 4.6's 70.4% — in fact second to it) and τ²-bench 98.9% is the highest in this batch, with BrowseComp 82.7% and CyberGym 79.0% solid. Capped because **two of three frontier references are badly missed or unmeasured** — Terminal-Bench is only on the 2.0 harness (75.1%) with no 2.1/4.0 figure, GDPval-AA is 1,307 Elo against 1,750, AA Tau3 Banking 39.6% against 50% — plus MazeBench 0%, ApprenticeBench 11% and ResearchClawBench 15.3%.
- **Reasoning: 70/100.** Mid-band. AA-GPQA Diamond 92.0% clears the 90% reference and HLE 43.7–52.1% clears the 40% reference, with FrontierMath Tiers 1–3 78.6% and AA-LCR 82.0% solid. Capped by the **AA-Omniscience index of 5.8 and an 91.7% hallucination rate — the third-worst in this research series** — plus CritPt 23.4%, FrontierMath Tier 4 49.0%, ARC-AGI-2 74.0%, ARC-AGI-3 0.2%, AA Intelligence Index 39.0%, and no MRCR figure.
- **Context window: 97/100.** 1.05M-token tier with AA-LCR 82.0%, and the >273K pricing tier (2x input, 1.5x output) is the same structure as GPT-6 Astra — so the window is real but economically gated. Held just under 100 because no MRCR retrieval run exists and no max-output limit is published.
- **Multimodal: 84/100.** Text + image in with text out. Scored above the methodology's "+image in" 60–70 band because the measured visual suite is genuinely broad and strong — **ScreenSpot Pro 85.4%, CharXiv 82.8%, MMMU-Pro 81.2–82.1%, MedXpertQA 77.1%** — ten separate visual benchmarks, more than most models here. Held at 84 because there is no video or audio input, ZeroBench is 41.0%, OfficeQA Pro 53.2%, and output is text-only.
- **Coding: 74/100.** AA Coding Index 71.0% clears the 70% reference, LiveCodeBench Pro 87.5% and React Native Evals 85.3% are strong, Vibe Code Bench 67.4% is mid. Capped by SWE-bench Pro 57.7%, Terminal-Bench 2.0 75.1%, **PostTrainBench v1.1 19.0% — the second-worst in this batch** — and no AA-SciCode, DeepSWE or SWE-bench Verified figure, so the 55% and 74% references are unmeasured.
- **Cost efficiency: 78/100.** $2.50/$0.25/$15 per 1M sits between the methodology's ~$3/$15 (≈60) and ~$1.25/$4.25 (≈88) anchors, cheaper than every Claude flagship and GPT-6 Astra, but more expensive than GPT-6.1 Sol's $2/$10 — which scores 19 BenchLM points higher. Held at 78 because the **>273K tier roughly doubles input cost**, there is no free tier, and it is strictly dominated on quality by GPT-5.5 ($2/$12, BenchLM 68.90 vs 66.48) at a lower price. Batch/Flex at 50% is the sole mitigator.
- **Overall Score: 77/100.** (62 + 70 + 97 + 84 + 74) / 5 = 77.4 → **77** → **77**. Recommendation: a **reasonable mid-price generalist** whose genuine asset is the breadth of its measured visual suite (ten benchmarks, ScreenSpot Pro 85.4%, MMMU-Pro 81.2%) plus this batch's best Claw-Eval figure — at $2.50/$15 with no long-context surcharge below 273K. One caution overrides all of it: **its AA-Omniscience index is 5.8 with a 91.7% hallucination rate**, so it will confidently produce wrong answers and must not be used for unattended factual work. For almost everything else GPT-5.5 ($2/$12, BenchLM 68.90) or GPT-6.1 Sol ($2/$10, BenchLM 85.28) is better at equal or lower cost.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using OpenAI's GPT-5.4 launch post as the primary source (so its rows are vendor-run and labelled as such), cross-checked against BenchLM's 61-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Kaggle, LlamaIndex, NeoCognition, the HealthBench paper, the JobBench and ExploitGym papers, Gert Labs, the Claw-Eval leaderboard, ResearchClaw Bench, React Native Evals, Meta's Muse Spark chart, OpenAI's GPT-5.5 comparison table and Openrouter) and OpenCode Zen's pricing table. The base-vs-Pro distinction is recorded explicitly (66.48 on 61 benchmarks vs Pro's 68.29 on 12), and the third-worst hallucination rate in this research series is attributed with its AA-Omniscience index rather than presented as a bare number. Missing benchmarks (Terminal-Bench 2.1/4.0, AA-SciCode, DeepSWE, SWE-bench Verified, MRCR) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.4 (launch post; primary benchmark source)](https://openai.com/index/introducing-gpt-5-4/)
  - [OpenAI — Introducing GPT-5.5 (comparison table; source of several rows)](https://openai.com/index/introducing-gpt-5-5/)
  - [BenchLM — GPT-5.4 benchmark scores (61 rows, 66.48/100, #26/1014)](https://benchlm.ai/models/gpt-5-4)
  - [Artificial Analysis — GPT-5.4](https://artificialanalysis.ai/models/gpt-5-4)
  - [Claw-Eval leaderboard (source of the 60.3% figure — one of only three measured in this research series)](https://claw-eval.github.io/)
  - [Meta AI — Muse Spark comparison chart (source of the multimodal rows)](https://ai.meta.com/blog/introducing-muse-spark-msl/)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
