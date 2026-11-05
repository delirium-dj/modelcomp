# GPT-5.6 Sol — findings by Step 5 Preview

- Source: OpenAI (`gpt-5-6-sol`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol. One of three `sol` siblings in the GPT-5.6 family (Terra, Luna, Cyber are tracked separately), and the immediate predecessor of GPT-6.1 Sol.
- **Short description:** OpenAI's 5.6-generation reasoning flagship, and the strongest **tool-use** model in this batch: Terminal-Bench 2.1 91.9%, BrowseComp 92.2%, CyberGym 84.5% and a **CritPt of 32.3% — the highest physics-reasoning figure measured anywhere in this research series**. BenchLM scores it 74.83/100, #12 of 1009.
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, and OpenCode Zen (`opencode/gpt-5-6-sol`, Responses-API-compatible) at **$4/$20 with a >272K tier at $8/$30**.
- **Release / knowledge:** knowledge cutoff not disclosed by OpenAI for this SKU. The 5.6 generation is the immediate predecessor of GPT-6.1 Sol (2026-09-29).
- **IDs:** `openai/gpt-5-6-sol`; `opencode/gpt-5-6-sol`. No Free ID — paid only.
- **Context window:** **1.05M tokens** (BenchLM and Artificial Analysis agree). Max output not restated on this SKU's page.
- **Modalities:** text + image in; text out (OpenAI's lineup-wide statement). Reasoning model with `low`/`medium`/`high`/`xhigh`/`max` effort levels in this generation.
- **Pricing (as of 2026-11-05):** Zen sells it at **$4 input / $0.40 cached read / $20 output per 1M**, with the same two-tier split OpenAI uses on GPT-6 Astra — **>272K input tokens priced at $8 / $0.80 / $30**. Batch and Flex at 50%, Fast mode at 2x.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's GPT-5.6 launch post and system card are the primary source; Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Proximal, PostTrainBench, VulcanBench and LlamaIndex supply independent rows. Vendor and independent figures are shown separately.

Agent / tool use — **the strongest dimension**:

- **Terminal-Bench 2.1: 91.9%** (OpenAI) / **85.8%** (Vals AI) — a 6.1-point harness spread, both at or above the 88% frontier reference on the vendor run
- **BrowseComp: 92.2%** (OpenAI) — the strongest browsing figure in this batch
- **CyberGym: 84.5%**; ExploitGym: 33.7%; Toolathlon: 58%
- **GDPval-AA: 1,735 Elo** / 55.4% normalized — 15 Elo points under the 1,750 frontier reference
- **AA Tau3 Banking: 44.3%** — 5.7 points under the 50% reference
- τ²-bench: **85.1%**; AA ITBench: **56.2%**; Terminal-Bench Hard: 65.9%; OSWorld 2.0: 62.6%
- LifeVal: **80.0%**; AA Agentic Index: 50.5%; AA-AnalystAgent: 47.5%; AA EnterpriseOps-Gym: 42.9%
- **Terminal-Bench 3.0: 34.6%**; AutomationBench (not listed here); MazeBench: 13%; ApprenticeBench: 26%
- **Claw-Eval: no verified public score found**

Reasoning / knowledge:

- **AA-GPQA Diamond: 94.1%** / GPQA 94.6% (OpenAI) / **95.2%** (Vals) — clears the 90%+ frontier reference on all three
- HLE-Verified: **54.5%**; AA-HLE: **49.5%** — clears the 40%+ reference
- **ARC-AGI-1: 96.5%**; **ARC-AGI-2: 92.5%**; **ARC-AGI-3: 7.8%**
- **CritPt: 32.3%** — the highest measured in this research series
- FrontierMath v2 Tier 4: **83.0%**; Tiers 1–3: **89.0%**; FrontierMath (legacy): 89%
- AA-LCR: **84.0%**; MMLU-Pro (Vals): 89.1%; LABBench2: 82.1%; AA-IFBench: 72.7%
- HealthBench Professional: 60.5%; HealthBench Hard: 33.1%; GeneBench-Pro: 28.7%
- Artificial Analysis Intelligence Index: **58.9**
- **AA-Omniscience: index 22.0, accuracy 59.4%, hallucination rate 92.2%** — the worst hallucination figure measured in this research series
- **MRCR: no verified public score found**

Coding:

- **AA Coding Index: 77.4%** — clears the 70% frontier reference
- **SWE-bench (Vals): 96.2%**; SWE-bench Pro: 64.6% (OpenAI)
- **Terminal-Bench 2.1: 91.9%** — clears the 85% reference
- **AA-SciCode: 57.1%** — clears the 55% reference; VulcanBench v3: **87.0%**; VulcanBench CII v1: **86.5%**
- LiveCodeBench (Vals): 82.6%; DeepSWE: **72.7%** (3 points under the 74% reference); CursorBench 3.2: 67.2%
- FrontierCode 1.1 Extended: 60.6%; **FrontierCode 2.0: 27.6%**; **FrontierSWE v2: 32.2%**; CursorBench 4.0: 41.7%; PostTrainBench v1.1: 36.2%; Bug Hunt Bench: 42.0 fixes
- SWE-bench Verified: **no verified public score found**

Multimodal (image-in only): MMMU-Pro **83.0%** (OpenAI) / 84.6% with Python / 83.4% (AA); ExtractBench **93.77%**; ParseBench 74.46%.

Safety: **Gray Swan indirect prompt injection (15 attempts): 27.0%** — by far the weakest prompt-injection resistance measured in this research series (next worst is Gemini 3.8 Flash at 5.5%, then GPT-6 Astra at 8.5%).

### Normalized scores (1–100)

- **Tool use: 88/100.** The strongest agentic profile in this batch. Terminal-Bench 2.1 91.9% (OpenAI) and BrowseComp 92.2% both clear the frontier reference, with CyberGym 84.5%, τ²-bench 85.1%, AA ITBench 56.2% and LifeVal 80.0% corroborating. Capped because the two other frontier references are missed (GDPval-AA 1,735 Elo just under 1,750; AA Tau3 Banking 44.3% just under 50%) and because Terminal-Bench 3.0 34.6% and MazeBench 13% are weak, and no Claw-Eval figure exists.
- **Reasoning: 90/100.** GPQA Diamond 94.1–95.2% clears the 90%+ reference on all three harnesses, HLE 49.5–54.5% clears the 40%+ reference, ARC-AGI-2 is 92.5%, FrontierMath Tier 4 is 83.0% and the AA Intelligence Index of 58.9 is the second-highest in this batch. **CritPt 32.3% is the single best physics-reasoning result in this entire research series.** Capped by three things: ARC-AGI-3 7.8%, a 92.2% hallucination rate (the worst measured anywhere — worse than MiniMax M3's 91.4%), and no published MRCR figure.
- **Context window: 97/100.** 1.05M-token tier with AA-LCR 84.0%. Held just under 100 because no MRCR retrieval run exists and the >272K pricing step doubles input cost, making the upper end of the window economically impractical.
- **Multimodal: 70/100.** Image-in/text-out only — no video or audio input, so it sits at the top of the methodology's "+image in" 60–70 band. Justification for the ceiling: MMMU-Pro 83.0–84.6% and ExtractBench 93.77% are both strong for an image-in-only model. Not higher, because coverage is the binding constraint and there is no Chartography, BabyVision or perception benchmark to evidence depth.
- **Coding: 91/100.** AA Coding Index 77.4% clears the 70% reference, Terminal-Bench 2.1 91.9% clears the 85% reference, AA-SciCode 57.1% clears the 55% reference, and SWE-bench 96.2% (Vals), VulcanBench v3 87.0% and VulcanBench CII v1 86.5% are strong. Capped by DeepSWE 72.7% (under the 74% reference), FrontierCode 2.0 27.6%, FrontierSWE v2 32.2% and no published SWE-bench Verified figure.
- **Cost efficiency: 58/100.** $4/$20 per 1M with a >272K tier at $8/$30 sits just below the methodology's ~$3/$15 (≈60) anchor — cheaper than GPT-6 Astra and the Claude 5.1/5.5 flagships, but no Pareto lead is published for it. Mitigators: 50% Batch/Flex and a 90% cache-read discount. No free tier.
- **Overall Score: 87/100.** (88 + 90 + 97 + 70 + 91) / 5 = 87.2 → 87. Recommendation: the best **tool-use and browsing** model in this batch and the strongest physics reasoner measured (CritPt 32.3%), at a mid-range price that undercuts GPT-6 Astra by 60%. Two hard cautions before deploying it unattended: its **92.2% hallucination rate is the worst measured anywhere in this research series**, and its **Gray Swan prompt-injection resistance is 27.0%** — roughly 3x the next-weakest model — so it is the least suitable model here for workloads that read untrusted input.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using OpenAI's GPT-5.6 launch post and system card as the primary source, cross-checked against BenchLM's 77-row catalog (which attributes each number to OpenAI, Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Proximal, PostTrainBench, VulcanBench, Google's Gemini 3.8 Flash card, LlamaIndex, NeoCognition or OpenRouter) and OpenCode Zen's pricing table. Conflicting figures are listed side by side — Terminal-Bench 2.1 91.9% vs 85.8%, GPQA Diamond 94.6% / 94.1% / 95.2% — rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.6 launch post and benchmark chart](https://openai.com/index/gpt-5-6/)
  - [OpenAI — GPT-5.6 system card](https://deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf)
  - [BenchLM — GPT-5.6 Sol benchmark scores (77 rows, 74.83/100, #12/1009)](https://benchlm.ai/models/gpt-5-6-sol)
  - [Artificial Analysis — GPT-5.6 Sol](https://artificialanalysis.ai/models/gpt-5-6-sol)
  - [Vals AI — GPT-5.6 Sol leaderboard results](https://www.vals.ai/models/openai_gpt-5.6-sol)
  - [ARC Prize — published semi-private results for GPT-5.6 Sol](https://arcprize.org/results/openai-gpt-5-6-sol)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
