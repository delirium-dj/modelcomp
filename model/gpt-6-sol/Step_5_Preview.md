# GPT-6 Sol — findings by Step 5 Preview

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol. One of the two models that launched the GPT-6 family on 2026-09-22 (with GPT-6 Luna), and the **#11-ranked model of 1009 on BenchLM (77.97)** — behind GPT-6 Astra (86.07, #6) and GPT-6.1 Sol (85.27, #4) but ahead of GPT-5.6 Sol (74.83, #12). Its own successor is GPT-6.1 Sol.
- **Short description:** A reasoning specialist with two genuinely standout results — **FrontierMath v2 Tier 4 at 90.0%** and **CritPt 30.9%**, both near the top of this research series — paired with the **thin agentic evidence base of any top-15 model examined (40 benchmarks, and no Terminal-Bench figure at all)**. Its reliability is mid-pack (hallucination 60.1%, Omniscience index 27.1).
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, and OpenCode Zen (`opencode/gpt-6-sol`) at **$2/$10 with a >272K tier at $4/$15**.
- **Release / knowledge:** released **2026-09-22** (the GPT-6 family launch). Knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-6-sol`; `opencode/gpt-6-sol`. No Free ID — paid only.
- **Context window:** **1.05M tokens** (BenchLM). Max output not restated.
- **Modalities:** text + image in; text out (OpenAI's lineup-wide statement), with a measured document suite behind it.
- **Pricing (as of 2026-11-05):** **$2 input / $0.20 cached / $10 output per 1M**, with >272K at $4 / $0.40 / $15 — the same rate card as GPT-6.1 Sol, which scores 7.3 BenchLM points higher. Methodology anchors put $2/$10 between ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60). Batch and Flex at 50%, Fast mode at 2x.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's GPT-6 Sol/Luna launch post is the primary source, with Artificial Analysis, ARC Prize, Epoch AI, Cognition, Kaggle, Cursor, Collinear, Nous Research, STEMBench, Google's Gemini 4 Argon chart and Openrouter supplying independent rows. **Only 40 benchmarks exist** — the thinnest top-15 evidence base in this batch.

Agent / tool use — **the weakest dimension, and severely under-measured**:

- **Agents' Last Exam: 56.4%** (OpenAI) — solid, though below Muse Wonder Full's 77.4% and GPT-6 Astra's 59.3%
- OSWorld 2.0: **60.5%**; AutomationBench: **33.2%**
- **GDPval-AA: 50.4% normalized** (AA; no Elo figure published) — under the 1,750+ reference
- AA ITBench: 49.4%; Hermes Bench: 73.5%; Hermes Index: 44.1%
- **MazeBench: 7%**; ExploitGym: 22.1%; **CyberGym-E2E-AA: 0.0%**
- CWE-bench v1: 52.0%; CWE-Bench-AA: 64.2%; DeepsecBench-AA: **46.3%** (the best DeepsecBench in this batch); AA Cyber Index: 36.8%
- **Terminal-Bench 2.1, Terminal-Bench 4.0, τ³-Banking, τ²-bench, BrowseComp, MCP-Atlas, OSWorld-Verified, Toolathlon, Claw-Eval: no verified public score found** — the entire terminal and browsing reference set is absent

Reasoning / knowledge — **the strongest dimension**:

- **FrontierMath v2 Tier 4: 90.0%** (Epoch AI) — near-frontier, and the second-highest Tier 4 in this batch behind GPT-6.1 Sol's 100.0%
- **CritPt: 30.9%** — the third-highest physics-reasoning figure in this research series
- **ARC-AGI-1: 95.5%**; **ARC-AGI-2: 89.6%**; ARC-AGI-3: **4.6%** (Provider-Adapter 23.03% — a 18.4-point harness gap)
- AA Intelligence Index: **47.6**; **AA-HLE: 47.9%** — clears the 40%+ reference
- AA-LCR: **83.7%**; AA-Omniscience: index 27.1, accuracy 54.5%, hallucination rate **60.1%**
- HealthBench Professional: 60.8% (raw 59.5%); HealthBench Hard: 30.1%; length-adjusted 53.2%
- **GPQA Diamond: no verified public score found** — the methodology's primary reasoning reference is missing for this model; **MRCR: no verified public score found**

Coding — mid-pack and under-measured:

- DeepSWE: **68.8%** — 5.2 points under the 74% frontier reference
- **AA-SciCode: 57.6%** — clears the 55% reference
- FrontierCode 2.0: **34.3%**
- **SWE-bench Verified, SWE-bench Pro, Terminal-Bench, AA Coding Index, LiveCodeBench, Vibe Code Bench: no verified public score found** — so the 85%-terminal, 70%-index and SWE-bench references are all unmeasured

Multimodal (image-in):

- **ExtractBench: 94.57%** — the third-best document-extraction figure in this batch; AA-MMMU-Pro: **82.9%**; ParseBench: 68.89%

### Normalized scores (1–100)

- **Tool use: 62/100.** The weakest dimension, and the reason this model ranks below its BenchLM position. **There is no Terminal-Bench figure of any kind for this model** — the methodology's primary tool-use reference — and no τ³-Banking, BrowseComp, MCP-Atlas, Toolathlon or Claw-Eval either. What exists is mid-tier: Agents' Last Exam 56.4%, OSWorld 2.0 60.5%, AutomationBench 33.2%, GDPval-AA 50.4% normalized with no Elo, AA ITBench 49.4%, and three near-floor results in MazeBench 7%, ExploitGym 22.1% and CyberGym-E2E-AA 0.0%. Hermes Bench 73.5% and DeepsecBench-AA 46.3% are the only strong rows.
- **Reasoning: 88/100.** The strongest dimension and one of the best in this batch. **FrontierMath Tier 4 90.0%** and **CritPt 30.9%** are both near the top of this research series, ARC-AGI-2 is 89.6%, ARC-AGI-1 95.5%, AA-HLE 47.9% clears its reference, and the AA Intelligence Index is 47.6. Capped by the **missing GPQA Diamond** (the primary reference), ARC-AGI-3 4.6%, a 60.1% hallucination rate, no MRCR figure, and the 18.4-point ARC-AGI-3 harness gap.
- **Context window: 97/100.** 1.05M-token tier with AA-LCR 83.7%. Held just under 100 because no MRCR retrieval run exists and the >272K pricing step doubles input cost, making the top of the window economically impractical.
- **Multimodal: 78/100.** Text + image in with text out. Scored above the methodology's "+image in" 60–70 band because the document tier is explicitly measured and strong — **ExtractBench 94.57% is the third-best in this batch** — with AA-MMMU-Pro 82.9% supporting it. Held at 78 because there is no video or audio input and ParseBench is only 68.89%.
- **Coding: 68/100.** Mid-pack, and under-measured. AA-SciCode 57.6% clears the 55% reference, but DeepSWE is 68.8% (under the 74% reference), FrontierCode 2.0 is 34.3%, and **SWE-bench Verified, SWE-bench Pro, Terminal-Bench, the AA Coding Index and LiveCodeBench are all unpublished** for this ID — so four of the five coding references cannot be checked. A model whose coding is probably better than its measured record, which is exactly why it cannot score higher.
- **Cost efficiency: 84/100.** $2/$0.20/$10 per 1M sits just above the methodology's ~$1.25/$4.25 (≈88) anchor — cheaper than every Claude flagship and GPT-6 Astra. Held at 84 rather than 88 by the >272K tier, no free tier, and the fact that **GPT-6.1 Sol sits on the identical rate card and scores 7.3 BenchLM points higher**, so within its own family this is the inferior buy at equal price.
- **Overall Score: 79/100.** (62 + 88 + 97 + 78 + 68) / 5 = 78.6 → **79** → 79. Recommendation: a **strong reasoning and document-handling model at a fair price** — FrontierMath Tier 4 90.0%, CritPt 30.9%, ARC-AGI-2 89.6%, ExtractBench 94.57% and AA-LCR 83.7% at $2/$10. Two cautions: its **agentic and coding evidence is the thinnest of any top-15 model examined (no Terminal-Bench, SWE-bench Verified or Coding Index at all)**, so the 79 may understate it; and for the same money **GPT-6.1 Sol beats it on BenchLM, ARC-AGI-2, FrontierMath Tier 4 (100% vs 90%) and hallucination (51.9% vs 60.1%)** — prefer 6.1 Sol unless 6 is already deployed.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using OpenAI's GPT-6 Sol/Luna launch post as the primary source, cross-checked against BenchLM's 40-row catalog (which attributes each number to OpenAI, Artificial Analysis, ARC Prize, Epoch AI, Cognition, Kaggle, Cursor, Collinear, Nous Research, STEMBench, Google's Gemini 4 Argon chart or Openrouter) and OpenCode Zen's pricing table. The catalog's thinness (40 rows) and the total absence of Terminal-Bench, SWE-bench and Coding Index figures are recorded as this report's dominant finding rather than smoothed over, and the ARC-AGI-3 harness gap (4.6% vs 23.03%) is listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-6 Sol and Luna (launch post and benchmark chart)](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [OpenAI — GPT-6 Sol model documentation](https://developers.openai.com/api/docs/models/gpt-6-sol)
  - [OpenAI — GPT-6 Astra system card (source of the HealthBench and ExploitGym rows)](https://deploymentsafety.openai.com/gpt-6-astra)
  - [BenchLM — GPT-6 Sol benchmark scores (40 rows, 77.97/100, #11/1009)](https://benchlm.ai/models/gpt-6-sol)
  - [Artificial Analysis — GPT-6 Sol](https://artificialanalysis.ai/models/gpt-6-sol)
  - [ARC Prize — published semi-private results for GPT-6 Sol](https://arcprize.org/results/openai-gpt-6-sol)
  - [Epoch AI — FrontierMath v2 leaderboard (source of the 90.0% Tier 4)](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
