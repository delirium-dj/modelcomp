# GPT-5.6 Terra — findings by Step 5 Preview

- Source: OpenAI (`gpt-5-6-terra`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra. One of three `5.6` siblings (Sol 74.83, Luna 63.8, Cyber tracked separately), and the **highest-ranked of the three on BenchLM at 69.81, #15 of 1009** — 5 points above GPT-5.5 (68.82, #19) at a lower rate card.
- **Short description:** A well-balanced 5.6-generation model that clears all three of its measured tool-use references (Terminal-Bench 2.1 88%, BrowseComp 87.5%, CyberGym 81.8%) while pairing the **highest composite index in this batch (AA Intelligence Index 55.0)** with a **catastrophic reliability profile (AA-Omniscience index 0.1, hallucination rate 87.9%)**. Its coding record is the strongest in this batch.
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, and OpenCode Zen (`opencode/gpt-5-6-terra`) at **$2/$12 with a >272K tier at $4/$18** — the cheapest tier in this batch apart from GLM-5.3-Flash.
- **Release / knowledge:** release date not restated for this SKU; the 5.6 generation is the immediate predecessor of GPT-6 (2026-09-22). Knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-5-6-terra`; `opencode/gpt-5-6-terra`. No Free ID — paid only.
- **Context window:** **1.05M tokens** (BenchLM). Max output not restated.
- **Modalities:** text + image in; text out (OpenAI's lineup-wide statement), with a measured document suite behind it.
- **Pricing (as of 2026-11-05):** **$2 input / $0.20 cached / $12 output per 1M**, with >272K at $4 / $0.40 / $18. Methodology anchors put $2/$12 between ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60). Batch and Flex at 50%, Fast mode at 2x.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's GPT-5.6 launch post and system card are the primary source, with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Kaggle, LlamaIndex, NeoCognition and VulcanBench supplying independent rows.

Agent / tool use — **the strongest dimension in this batch**:

- **Terminal-Bench 2.1: 88.0%** (AA) / **87.4%** (OpenAI) / **77.5%** (Vals) — clears the 88%+ frontier reference on two of three harnesses
- **BrowseComp: 87.5%**; **CyberGym: 81.8%**; τ²-bench: 86.3%
- Toolathlon: 53.1%; AA ITBench: 51.0%; OSWorld 2.0: 50.2%; APEX-Agents-AA: 38.9%
- **GDPval-AA: 1,583 Elo** / 47.6% normalized — under the 1,750 frontier reference
- **AA Tau3 Banking: 40.2%** — 9.8 points under the 50% reference
- **Terminal-Bench 3.0: 20.8%**; **MazeBench: 6%**; ApprenticeBench: 16%; ExploitGym: 23.2%
- AA Agentic Index: 43.7%; DeepsecBench-AA: 25.1%
- **Claw-Eval: no verified public score found**

Reasoning / knowledge — **highest composite, worst reliability**:

- **AA-GPQA Diamond: 92.5%** / GPQA 92.9% (OpenAI) / **90.9%** (Vals) — clears the 90%+ frontier reference on all three
- **AA-HLE: 42.9%** / **HLE-Verified: 51.1%** — clears the 40%+ reference
- **Artificial Analysis Intelligence Index: 55.0** — the highest composite figure measured in this batch
- **ARC-AGI-1: 96.5%**; ARC-AGI-2: 83.9%; **ARC-AGI-3: 0.8%**
- **CritPt: 30.0%** — joint-second-highest in this batch; AA-LCR: **83.0%**
- FrontierMath v2 Tier 4: **68.3%** / Tiers 1–3: **84.9%**; LABBench2: 81.2%; MMLU-Pro (Vals): 86.7%
- HealthBench Professional: 57.7%; HealthBench Hard: 32.7%; AA-IFBench: 71.2%
- **AA-Omniscience: index 0.1, accuracy 46.8%, hallucination rate 87.9%** — an index of 0.1 means essentially as many incorrect as correct answers, and the 87.9% hallucination rate is the second-worst in this batch
- **MRCR: no verified public score found**

Coding — **the strongest dimension**:

- **AA Coding Index: 76.7%** — clears the 70% frontier reference
- **SWE-bench (Vals): 95.4%**; LiveCodeBench (Vals): **85.9%**; **VulcanBench v3: 87.0%**
- **Terminal-Bench 2.1: 88.0% / 87.4%** — clears the 85% reference
- **AA-SciCode: 55.0%** — exactly at the 55% frontier reference
- DeepSWE: **69.6%** — 4.4 points under the 74% reference; FrontierCode 1.1 Extended: 55.8%; SWE-bench Pro: 63.4%
- **Terminal-Bench 3.0: 20.8%**; CursorBench 3.2: 64.9% / **4.0: 41.3%**
- **SWE-bench Verified: no verified public score found**

Multimodal (image-in):

- **ExtractBench: 92.26%** — the third-best document-extraction figure in this batch; MMMU-Pro: **80.7%** / 82.0% with Python / AA 80.7%; ParseBench: 67.11%

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 88.0% (AA) and 87.4% (OpenAI) clear the 88% reference on two harnesses, and BrowseComp 87.5%, CyberGym 81.8% and τ²-bench 86.3% corroborate. Capped by GDPval-AA 1,583 Elo (under 1,750), AA Tau3 Banking 40.2% (under 50%), **Terminal-Bench 3.0 20.8%**, MazeBench 6%, ApprenticeBench 16%, and no Claw-Eval figure. Note the 10.5-point vendor-vs-Vals spread on Terminal-Bench 2.1 (88.0% vs 77.5%).
- **Reasoning: 86/100.** AA-GPQA Diamond 90.9–92.9% and HLE 42.9–51.1% both clear their references, **AA Intelligence Index 55.0 is the highest composite in this batch**, ARC-AGI-1 is 96.5%, CritPt 30.0% is joint-second-highest, and AA-LCR is 83.0%. Capped hard by reliability: **AA-Omniscience index 0.1** (as many wrong as right) and an **87.9% hallucination rate**, plus ARC-AGI-3 0.8%, FrontierMath Tier 4 68.3% and no MRCR figure. A model that scores well while being actively untrustworthy on facts.
- **Context window: 97/100.** 1.05M-token tier with AA-LCR 83.0% — the best AA-LCR in this batch. Held just under 100 because no MRCR retrieval run exists and the >272K pricing step doubles input cost, making the top of the window economically impractical.
- **Multimodal: 78/100.** Text + image in with text out. Scored above the methodology's "+image in" 60–70 band because the document tier is explicitly measured and strong — **ExtractBench 92.26% is the third-best in this batch** — with MMMU-Pro 80.7–82.0% supporting it. Held at 78 because there is no video or audio input and ParseBench is only 67.11%.
- **Coding: 89/100.** The strongest dimension and the best in this batch. AA Coding Index 76.7% clears the 70% reference, Terminal-Bench 2.1 88.0%/87.4% clears the 85% reference, AA-SciCode 55.0% is exactly at the 55% reference, and SWE-bench 95.4% (Vals), VulcanBench v3 87.0% and LiveCodeBench 85.9% are all top-tier. Capped by DeepSWE 69.6% (under the 74% reference), Terminal-Bench 3.0 20.8%, CursorBench 4.0 41.3%, SWE-bench Pro 63.4%, and no published SWE-bench Verified figure.
- **Cost efficiency: 82/100.** $2/$0.20/$12 per 1M sits just above the methodology's ~$1.25/$4.25 (≈88) anchor — cheaper than every Claude flagship and GPT-6 Astra, and only GLM-5.3-Flash ($0.15/$0.50) and MiniMax M3.1 Flash ($0.15/$0.60) undercut it. Held at 82 rather than 88 because the >272K tier doubles input cost, there is no free tier, and it is dominated on BenchLM rank by GPT-6.1 Sol (#4 vs #15) at the same $2 input price.
- **Overall Score: 86/100.** (78 + 86 + 97 + 78 + 89) / 5 = 85.6 → **86** → 86. Recommendation: the best **coding-and-reasoning value pick in this batch** — AA Coding Index 76.7%, SWE-bench 95.4%, AA Intelligence Index 55.0 (highest here) and Terminal-Bench 2.1 88.0% at $2/$12. One caveat overrides almost everything else: its **AA-Omniscience index is 0.1 with an 87.9% hallucination rate**, so it will confidently produce wrong answers in any factual or retrieval-heavy workflow. Pair it with a verification layer, or prefer GPT-6.1 Sol (index 54.5, hallucination 51.9%) for the same price.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using OpenAI's GPT-5.6 launch post and system card as the primary source, cross-checked against BenchLM's 59-row catalog (which attributes each number to OpenAI, Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Kaggle, LlamaIndex, NeoCognition or VulcanBench) and OpenCode Zen's pricing table. Conflicting figures are listed side by side — Terminal-Bench 2.1 88.0% / 87.4% / 77.5% across three harnesses, GPQA Diamond 92.9% / 92.5% / 90.9% — rather than averaged. Missing benchmarks (Claw-Eval, MRCR, SWE-bench Verified) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.6 launch post and benchmark chart](https://openai.com/index/gpt-5-6/)
  - [OpenAI — GPT-5.6 system card](https://deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf)
  - [BenchLM — GPT-5.6 Terra benchmark scores (59 rows, 69.81/100, #15/1009)](https://benchlm.ai/models/gpt-5-6-terra)
  - [Artificial Analysis — GPT-5.6 Terra](https://artificialanalysis.ai/models/gpt-5-6-terra)
  - [Vals AI — GPT-5.6 Terra leaderboard results](https://www.vals.ai/models/openai_gpt-5.6-terra)
  - [ARC Prize — published semi-private results for GPT-5.6 Terra](https://arcprize.org/results/openai-gpt-5-6-terra)
  - [VulcanBench Eval Suite 3 leaderboard (source of the 87.0% VulcanBench v3)](https://vulcanbench.com/leaderboard.html)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
