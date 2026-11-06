# GPT-5.5 — findings by Step 5 Preview

- Source: OpenAI (`gpt-5-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5. The base `5.5` variant, distinct from the premium **GPT-5.5 Pro** ($30/$180, 9 benchmarks). BenchLM scores it 68.82/100, #19 of 1009 — 3.94 points above Pro, on **73 benchmarks instead of 9**, which is the single most important fact about this model: the base SKU is far better evidenced, barely lower-scored, and **six times cheaper**.
- **Short description:** A well-rounded 5.5-generation workhorse with real strengths in long-context retrieval (**MRCR v2 87.5% at 128K–256K**), document extraction (**ExtractBench 93.57%**) and service workflows (**τ²-bench 98%**). Its weakness is concentrated in the newest agentic harnesses (OSWorld 2.0 13.0%, MazeBench 0%, ARC-AGI-3 0.4%) and in reliability (**89.0% hallucination rate**).
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, ChatGPT Plus/Pro/Business/Enterprise, and OpenCode Zen (`opencode/gpt-5-5`) at **$5/$30 with a >272K tier at $10/$45**.
- **Release / knowledge:** release date not restated for this SKU; the 5.5 generation is the 2026 mid-cycle predecessor of 5.6/6/6.1. Knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-5-5`; `opencode/gpt-5-5`. No Free ID — paid only.
- **Context window:** **1M tokens** (BenchLM). Max output not restated.
- **Modalities:** text + image in; text out (OpenAI's lineup-wide statement), with a deep measured document/chart suite behind it.
- **Pricing (as of 2026-11-05):** **$5 input / $0.50 cached / $30 output per 1M**, with >272K at $10 / $1.00 / $45. Methodology anchors put $5/$30 between ~$3/$15 (≈60) and ~$10/$50 (≈30). Batch and Flex at 50%, Fast mode at 2x.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's GPT-5.5 launch post is the primary source, with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, the Terminal-Bench 2.0 leaderboard, Cognition, Cursor, PostTrainBench, Kaggle, LlamaIndex, Gert Labs, ResearchClawBench, JobBench, the OSWorld 2.0 and ExploitGym papers, React Native Evals and OpenRouter supplying independent rows.

Agent / tool use — **split across generations**:

- **aaTerminalBench21: 84.3%** (AA) / **Terminal-Bench 2.0: 82.0%** (leaderboard) / **76.4%** (Vals) — clears neither the 88% nor consistently the 85% reference
- **BrowseComp: 84.4%**; **τ²-bench: 98.0%** — the highest τ²-bench figure in this batch
- **CyberGym: 81.8%**; MCP Atlas: 75.3%; OSWorld-Verified: 78.7%; Toolathlon: 55.6%; LifeVal: 77.4%; Gert Labs: 72.93%
- **GDPval-AA: 1,396 Elo** / 42.5% normalized — well under the 1,750 frontier reference
- **AA Tau3 Banking: 39.0%** — 11 points under the 50% reference
- AA Agentic Index: 37.3%; AA-AnalystAgent: 50.0%; AA ITBench: 45.8%; AA EnterpriseOps-Gym: 46.6%; terminalBenchHard: 60.6%; JobBench: 42.7%; APEX-Agents-AA: 37.7%
- **OSWorld 2.0: 13.0%**; **MazeBench: 0%**; ResearchClawBench: 17.0%; ApprenticeBench: 20%; ExploitGym: 13.4%
- **Claw-Eval: no verified public score found**

Reasoning / knowledge:

- **AA-GPQA Diamond: 93.5%** / GPQA 93.6% (OpenAI) / **93.2%** (Vals) — clears the 90%+ frontier reference on all three
- **HLE: 52.2%** (OpenAI) / 41.4% without tools / AA-HLE 45.8% — clears the 40%+ reference
- **MRCR v2: 83.1% at 64K–128K / 87.5% at 128K–256K** — the second-best measured retrieval in this batch after Qwen3.8 Max's 92.9% at 256K
- **ARC-AGI-1: 95.0%**; ARC-AGI-2: 85.0%; **ARC-AGI-3: 0.4%**
- AA-LCR: **84.3%**; CritPt: 27.1%; FrontierMath v2 Tier 4: **72.5%** / Tiers 1–3: **85.3%**
- MMLU-Pro (Vals): 88.1%; AA-IFBench: 75.9%
- Artificial Analysis Intelligence Index: **38.4**; **AA-Omniscience: index 20.5, accuracy 58.0%, hallucination rate 89.0%** — the second-worst hallucination figure in this batch

Coding:

- **AA Coding Index: 74.9%** — clears the 70% frontier reference
- LiveCodeBench (Vals): **85.3%**; SWE-bench (Vals): **82.6%**; React Native Evals: 84.7%
- **AA-SciCode: 55.8%** — barely clears the 55% reference
- Vibe Code Bench: 69.85%; CursorBench 3.1 59.2% / 3.2 58.4%; SWE-bench Pro: 58.6%
- FrontierCode 1.1 Main: 43.0%; **FrontierCode 2.0: 22.6%**; PostTrainBench v1.1: 27.2%; Terminal-Bench 2.0: 82.0%
- **SWE-bench Verified, DeepSWE: no verified public score found**

Multimodal (image-in):

- **ExtractBench: 93.57%** — the second-best document-extraction figure in this batch; MMMU-Pro: **81.2%** / 83.2% with Python / AA 79.9%; ParseBench: 66.63%; OfficeQA Pro: 54.1%; Design Arena: 1,256 Elo

### Normalized scores (1–100)

- **Tool use: 70/100.** Middle of the band, with the same generational split seen across this batch. The classic suite is good — τ²-bench 98.0%, BrowseComp 84.4%, CyberGym 81.8%, OSWorld-Verified 78.7%, MCP Atlas 75.3% — while the new suite collapses: OSWorld 2.0 13.0%, MazeBench 0%, ResearchClawBench 17.0%, ApprenticeBench 20%. Terminal-Bench 2.1 tops out at 84.3% (AA) against the 88% reference, GDPval-AA is 1,396 Elo against 1,750, AA Tau3 Banking is 39.0% against 50%, and Claw-Eval is missing.
- **Reasoning: 85/100.** GPQA Diamond 92.0–93.6% clears the 90% reference on three harnesses, HLE 41.4–52.2% clears the 40% reference, **MRCR v2 87.5% at 128K–256K is the second-best measured retrieval in this batch**, and ARC-AGI-1 is 95.0%. AA-LCR 84.3% and FrontierMath Tier 4 72.5% corroborate. Capped by an AA Intelligence Index of 38.4, ARC-AGI-3 0.4%, ARC-AGI-2 only 85.0%, CritPt 27.1% and an 89.0% hallucination rate.
- **Context window: 97/100.** 1M-token tier with **the batch's second-best measured retrieval (MRCR v2 87.5% at 128K–256K, 83.1% at 64K–128K)** plus AA-LCR 84.3%. Held just under 100 because 87.5% is below the ≥98% threshold, no MRCR run exists at 512K+, and no max-output limit is published.
- **Multimodal: 78/100.** Text + image in with text out. Scored above the methodology's "+image in" 60–70 band because the document tier is explicitly measured and strong — **ExtractBench 93.57% is the second-best in this batch** — with MMMU-Pro 79.9–83.2% supporting it. Held at 78 because there is no video or audio input, OfficeQA Pro is only 54.1% and ParseBench 66.63%.
- **Coding: 83/100.** AA Coding Index 74.9% clears the 70% reference, and LiveCodeBench 85.3%, SWE-bench 82.6% (Vals) and React Native Evals 84.7% are all solid. Capped by AA-SciCode 55.8% (barely clearing the 55% reference), Terminal-Bench 2.1 at best 84.3% (under the 85% reference), SWE-bench Pro 58.6%, FrontierCode 2.0 22.6%, PostTrainBench 27.2%, and the absence of SWE-bench Verified and DeepSWE.
- **Cost efficiency: 50/100.** $5/$30 per 1M with a >272K tier at $10/$45 sits between the methodology's ~$3/$15 (≈60) and ~$10/$50 (≈30) anchors. Drawn down from a pure rate-card reading by three things: it is **six times more expensive than GPT-6.1 Sol** ($2/$10) for a lower BenchLM rank (68.82 vs 85.27), it carries a >272K surcharge, and **the GPT-5.5 Pro variant sits on the identical model at $30/$180** — so this SKU is the value option in its own family, which is the only good thing to say about its price. Batch/Flex at 50% is the sole mitigator.
- **Overall Score: 83/100.** (70 + 85 + 97 + 78 + 83) / 5 = 82.6 → **83** → 83. Recommendation: a reasonable **mid-price generalist** for document-heavy and retrieval-heavy work — MRCR 87.5% at 128K–256K, ExtractBench 93.57%, τ²-bench 98% and AA Coding Index 74.9% at $5/$30 are all defensible. Two cautions: its **89.0% hallucination rate** makes it unsuitable for unattended factual work, and its agentic layer has not transferred to the newer harnesses (OSWorld 2.0 13.0%, MazeBench 0%). Prefer GPT-6.1 Sol at $2/$10 for almost everything — it beats this on BenchLM, ARC-AGI-2, FrontierMath Tier 4 and measured cost per task.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using OpenAI's GPT-5.5 launch post as the primary source, cross-checked against BenchLM's 73-row catalog (which attributes each number to OpenAI, Artificial Analysis, Vals AI, ARC Prize, Epoch AI, the Terminal-Bench 2.0 leaderboard, Cognition, Cursor, PostTrainBench, Kaggle, LlamaIndex, Gert Labs, ResearchClawBench, JobBench, the OSWorld 2.0 and ExploitGym papers, React Native Evals or OpenRouter) and OpenCode Zen's pricing table. The base-vs-Pro distinction is recorded explicitly (68.82 on 73 benchmarks vs Pro's 72.76 on 9) and base figures are used throughout. Conflicting figures are listed side by side — Terminal-Bench 2.1 84.3% / 82.0% / 76.4% across three harnesses, GPQA Diamond 93.6% / 93.5% / 93.2% — rather than averaged. Missing benchmarks (SWE-bench Verified, DeepSWE, Claw-Eval, MRCR at 512K+) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.5 (launch post; primary benchmark source)](https://openai.com/index/introducing-gpt-5-5/)
  - [BenchLM — GPT-5.5 benchmark scores (73 rows, 68.82/100, #19/1009)](https://benchlm.ai/models/gpt-5-5)
  - [Artificial Analysis — GPT-5.5](https://artificialanalysis.ai/models/gpt-5-5)
  - [Vals AI — GPT-5.5 leaderboard results](https://www.vals.ai/models/openai_gpt-5.5)
  - [ARC Prize — GPT-5.5 (XHigh) verified results](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
