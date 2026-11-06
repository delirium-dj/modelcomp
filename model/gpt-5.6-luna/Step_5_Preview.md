# GPT-5.6 Luna — findings by Step 5 Preview

- Source: OpenAI (`openai/gpt-5.6-luna`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna. The **luna** variant of the GPT-5.6 family — siblings Sol (74.88, refreshed earlier in this session), Terra (69.89, refreshed earlier) and Cyber — scoring **63.94/100, #37 of 1,015** with **54 benchmarks**. It is the best-evidenced model in this batch and the lowest-scored GPT-5.6 sibling, which is exactly what a "luna" tier should be.
- **Short description:** A genuinely strong all-rounder with **the batch's best composite (AA Intelligence Index 51.2%), best long-context (AA-LCR 83.7%), best FrontierMath (Tier 4 58.5%) and best multimodal (ExtractBench 91.16%, MMMU-Pro 79.5% w/ Python)**, at a **1.05M-token window — the largest in this research series**. Its defects are concentrated in two places: **AA-Omniscience index −10.3 with a 92.6% hallucination rate**, and a **weak agentic-execution layer** (MazeBench 0%, ApprenticeBench 7%, OSWorld 2.0 45.6%).
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; GPT-5.6 is OpenAI's late-2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `openai/gpt-5.6-luna`; `openai_gpt-5.6-luna` (Vals, ARC).
- **Context window:** **1.05M tokens (1,050,000)** per BenchLM — **the largest context window measured anywhere in this research series**, above Gemini 4 Carbon's and Step 5 Preview's 1M.
- **Modalities:** **text and image in; text out**, with an unusually deep measured visual suite including document extraction.
- **Pricing (as of 2026-11-05):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's GPT-5.6 launch post and system card are the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize, Cognition/Devin, Cursor, VulcanBench, LlamaIndex, MazeBench, NeoCognition, Epoch AI and Openrouter supplying independent rows. 54 benchmarks total.

Agent / tool use — **split**:

- **Terminal-Bench 2.1: 84.7%** (vendor) / **79.0%** (Vals) / **80.9%** [AA] — a 5.7-point spread, and all three under the 88%+ reference
- BrowseComp: **83.3%**; CyberGym: **77.9%**; Toolathlon: 53.4%; GDPval-AA: **1,582 Elo** (vendor) / **48.0% normalized** [AA]
- **OSWorld 2.0: 45.6%**; **AA Agentic Index: 42.7%**; APEX-Agents-AA: 35.8%; AA EnterpriseOps-Gym: 40.8%; AA ITBench: 40.3%
- **Terminal-Bench 3.0: 14.3%**; ExploitGym: 12.4%; **MazeBench: 0%**; **ApprenticeBench: 7%** — all near-floor on the newer/harder harnesses
- **τ³-Banking, MCP-Atlas, OSWorld (1.0), Claw-Eval, ALE, JobBench: no verified public score found**

Reasoning / knowledge — **the batch's best composite, with a severe reliability defect**:

- **AA Intelligence Index: 51.2%** — the second-highest composite in this research series, behind only DeepSeek V4 Pro's 53.2%
- **GPQA Diamond: 92.3%** (vendor) / **91.1%** [AA] / 91.7% (Vals) — clears the 90%+ reference on all three
- **AA-HLE: 39.5%** — **0.5 points under the 40%+ reference**, the narrowest miss in this batch
- **AA-Omniscience: index −10.3, accuracy 42.7%, hallucination rate 92.6%** — a deeply negative index, meaning far more incorrect than correct answers
- **AA-LCR: 83.7%** — the best long-context reasoning figure in this batch; **CritPt: 20.6%**
- **ARC-AGI-1: 88.0%**; **ARC-AGI-2: 59.5%**; **ARC-AGI-3: 0.2%** [ARC Prize]
- **FrontierMath v2 Tiers 1–3: 78.6%; Tier 4: 58.5%** — the best FrontierMath figures in this research series, and more than double the next-best here
- MMLU-Pro (Vals): 86.0%; HealthBench Professional: 55.7%; HealthBench Hard: 32.0%
- **MRCR: no verified public score found**

Coding — **strong**:

- **SWE-bench (Vals): 93.0%** — the strongest SWE-bench figure in this batch
- **AA Coding Index: 71.5%** — **clears the 70%+ frontier reference**
- **VulcanBench v3: 85.5%**; **SWE-bench Pro: 62.7%**; CursorBench 3.2: 61.1%; FrontierCode 1.1 Extended: 55.1%
- **DeepSWE: 67.2%** — 6.8 points under the 74% reference; AA-SciCode: 53.6% — under the 55% reference; CursorBench 4.0: 35.9%
- **SWE-bench Verified, LiveCodeBench, Terminal-Bench 4.0, Vibe Code Bench: no verified public score found**

Multimodal (image-in) — **the batch's best**:

- **ExtractBench: 91.16%** [LlamaIndex]; **ParseBench: 66.86%** [LlamaIndex] — the strongest document-extraction figures in this research series
- **MMMU-Pro: 78.4%** (vendor) / **79.5% w/ Python** (vendor) / **78.6%** [AA] — all three agree within 1.1 points
- **CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 68/100.** Mid-band. **Terminal-Bench 2.1 84.7% (vendor) / 80.9% [AA] is 3–7 points under the 88%+ reference**, BrowseComp 83.3% and CyberGym 77.9% are solid, and GDPval-AA 1,582 Elo is respectable. Capped by **OSWorld 2.0 45.6%, AA Agentic Index 42.7%, APEX-Agents-AA 35.8%, and the near-floor newer-harness results — Terminal-Bench 3.0 14.3%, MazeBench 0%, ApprenticeBench 7%** — plus **τ³-Banking, MCP-Atlas, OSWorld 1.0, Claw-Eval, ALE and JobBench having no figure at all**.
- **Reasoning: 82/100.** Above the methodology's mid band and the strongest dimension. **AA Intelligence Index 51.2%, AA-LCR 83.7%, FrontierMath Tier 4 58.5% (the best in this research series and more than double the next-best), GPQA Diamond 91.1–92.3% clearing the reference on three harnesses, and ARC-AGI-1 88.0% / ARC-AGI-2 59.5%** make this the deepest reasoning profile in the batch. Capped by **AA-HLE 39.5% (0.5 under), CritPt 20.6%, ARC-AGI-3 0.2%, and above all by AA-Omniscience index −10.3 with a 92.6% hallucination rate** — the model reasons well and cannot be trusted on facts.
- **Context window: 99/100.** **1.05M tokens — the largest window measured anywhere in this research series** — with **AA-LCR 83.7%** as strong evidence the window is usable. Scored at 99 rather than 100 because no MRCR or GraphWalks retrieval run exists at that depth and no max-output limit is published.
- **Multimodal: 86/100.** Text + image in with text out, scored in the methodology's upper band on the batch's best visual suite: **ExtractBench 91.16%, ParseBench 66.86%, MMMU-Pro 78.4–79.5% across three harnesses agreeing within 1.1 points**. Held below 90+ because there is no video or audio input, output is text-only, and CharXiv/ZeroBench/BabyVision are unmeasured.
- **Coding: 82/100.** Above the methodology's mid band and a strong dimension. **SWE-bench 93.0% (Vals) is the strongest in this batch and AA Coding Index 71.5% clears the 70%+ frontier reference**, with VulcanBench v3 85.5%, SWE-bench Pro 62.7% and FrontierCode 1.1 Extended 55.1% supporting. Capped by **DeepSWE 67.2% (6.8 under the 74% reference), AA-SciCode 53.6% (under 55%), CursorBench 4.0 35.9%, and the absence of SWE-bench Verified, LiveCodeBench and Vibe Code Bench**.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary flagship-tier SKU with unverified pricing. **Explicitly an estimate, not a measurement** — GPT-5.6 Sol and Terra are historically priced in the $1.25–$3 input range, which is the one directional signal, and it is the reason this is not scored at the unverified floor.
- **Overall Score: 83/100.** (68 + 82 + 99 + 86 + 82) / 5 = 83.4 → **83** → **83**. Recommendation: **the strongest all-round mid-tier model in this batch, and the best long-context reasoner after DeepSeek V4 Pro** — AA Intelligence Index 51.2%, AA-LCR 83.7%, FrontierMath Tier 4 58.5%, ExtractBench 91.16%, AA Coding Index 71.5% and a 1.05M window, the largest in this research series. Two cautions: **its AA-Omniscience index is −10.3 with a 92.6% hallucination rate**, so it must be paired with retrieval for any factual work; and **its agentic-execution layer collapses on newer harnesses** (Terminal-Bench 3.0 14.3%, MazeBench 0%, ApprenticeBench 7%), so it is a reasoner rather than an autonomous agent. Prefer GPT-5.6 Sol (74.88) unless the luna tier's pricing is decisive.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using OpenAI's GPT-5.6 launch post and system card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 54-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, ARC Prize, Cognition/Devin, Cursor, VulcanBench, LlamaIndex, MazeBench, NeoCognition and Openrouter). Conflicting figures are listed side by side — Terminal-Bench 2.1 84.7% (vendor) / 80.9% [AA] / 79.0% (Vals); MMMU-Pro 78.4% / 79.5% w-Python / 78.6% [AA] — rather than averaged, with the independent run preferred on each. The series-largest context window (1.05M) and the series-best FrontierMath Tier 4 (58.5%) are attributed rather than presented bare, as is the deeply negative Omniscience index. Missing benchmarks (τ³-Banking, MCP-Atlas, OSWorld 1.0, Claw-Eval, ALE, JobBench, MRCR, SWE-bench Verified, LiveCodeBench, Vibe Code Bench, CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.6 launch post (primary benchmark source)](https://openai.com/index/gpt-5-6/)
  - [OpenAI — GPT-5.6 system card](https://deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf)
  - [BenchLM — GPT-5.6 Luna benchmark scores (54 rows, 63.94/100, #37/1015)](https://benchlm.ai/models/gpt-5-6-luna)
  - [Artificial Analysis — GPT-5.6 Luna](https://artificialanalysis.ai/models/gpt-5-6-luna)
  - [Vals AI — GPT-5.6 Luna leaderboard results](https://www.vals.ai/models/openai_gpt-5.6-luna)
  - [ARC Prize — published Semi-Private results for GPT-5.6 Luna](https://arcprize.org/results/openai-gpt-5-6-luna)
  - [Cognition — GPT-5.6 models in Devin](https://devin.ai/blog/gpt-5-6)
  - [Cursor evals — CursorBench 3.2 / 4.0](https://cursor.com/cursorbench)
  - [VulcanBench Eval Suite 3 leaderboard](https://vulcanbench.com/leaderboard.html)
  - [ExtractBench leaderboard (LlamaIndex)](https://www.extractbench.ai/#leaderboard)
  - See also: [`model/gpt-5.6-sol/`](gpt-5.6-sol.md), [`model/gpt-5.6-terra/`](gpt-5.6-terra.md) — siblings refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
