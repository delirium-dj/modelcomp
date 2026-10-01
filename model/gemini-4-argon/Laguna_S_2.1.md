# Gemini 4 Argon — findings by Laguna S 2.1

- Source: Google (`opencode/gemini-4-argon`); DeepMind official evaluation methodology
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (paid tier; no Free ID on OpenCode Zen)
- **Short description:** Google DeepMind's Gemini 4 "Argon" variant, a reasoning model released September 30, 2026. Ranks #10 of 638 on BenchLM and #8 of 224 reasoning models on AA's Intelligence Index. Supports 1M context, text+image input, and strong agentic reasoning with excellent multimodal vision capabilities.
- **Provider / access:** Google API (`gemini-4-argon`); available on OpenCode Zen as `opencode/gemini-4-argon`. Supports extended thinking/reasoning.
- **Release / knowledge:** Released 2026-09-30. Knowledge cutoff not specified.
- **IDs:** `opencode/gemini-4-argon` (no Free ID on OpenCode Zen); `gemini-4-argon` on Google API
- **Context window:** 1M total tokens (verified via Artificial Analysis and supported by GraphWalks BFS evaluations at 256K–1M context). Note: meta.json lists "128K total" — appears to reflect OpenCode Zen listing rather than native model specification; AA measurements confirm 1M.
- **Modalities:** Text + image input; text output; reasoning/thinking yes; tool calls supported
- **Pricing (as of 2026-10-01):** $2.00 input / $10.00 output per 1M tokens (95% cache discount); $1.99 per Intelligence Index task; no free tier
- **Architecture:** Proprietary (parameter count not disclosed by Google)
- **Speed / efficiency:** Output speed N/A (not measured by AA yet); $1.99 per Intelligence Index task is efficient; 110M output tokens per Intelligence Index task (moderately verbose)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.40%** (Google: Gemini 4 Argon evaluation methodology)
- AA Terminal-Bench 4.0: 57.1% (Artificial Analysis: terminalbench-v4-0 leaderboard)
- GDPval-AA: **1611 Elo** (Artificial Analysis: GDPval-AA leaderboard)
- GDPval-AA (AA normalized): 55.6% (Artificial Analysis model benchmarks)
- AA-Briefcase: **1494 Elo** (Artificial Analysis: aa-briefcase leaderboard)
- OSWorld 2.0: **69.2%** (Google: Gemini 4 Argon evaluation methodology)
- AutomationBench: 51.3% (Google evals methodology)
- AA AutomationBench: **77.5%** (Artificial Analysis: automationbench-aa leaderboard)
- Finance Agent v2: 65.4% (Google evals methodology)
- Agents' Last Exam: 39.5% (Google evals methodology)
- Terminal-Bench-Science 0.1 (6x verifier): 57.6% (Google evals methodology)
- GDP.pdf: 21.8% (Artificial Analysis: GDP-pdf leaderboard)
- AA-HLE: 55.0% (AA leaderboard)
- Toolathlon / MCP-Atlas: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found (closest proxy: OSWorld 69.2%)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (closest proxy: AA-HLE 55.0%, HLE w/ tools 55.0%)
- AA-HLE: **55.0%** (Artificial Analysis: humanitys-last-exam leaderboard)
- Artificial Analysis Intelligence Index: **53** (rank #8 of 224 reasoning models)
- GraphWalks BFS 128K: **99.7%** (Google evals methodology — short-horizon graph traversal)
- GraphWalks BFS 256K–1M: **84.2%** (Google evals methodology — long-horizon traversal at 1M context)
- AA-LCR: 79.7% (Artificial Analysis: artificial-analysis-long-context-reasoning leaderboard)
- MLCR-AA: no verified public score found for Gemini 4 Argon
- CritPt: 27.1% (Artificial Analysis: critpt leaderboard — physics reasoning, low)
- LABBench2: 88.8% (Google evals methodology)
- GMMLU: no verified public score found
- MILU: no verified public score found
- AA-Omniscience Index: 42.4 (Artificial Analysis: omniscience leaderboard)
- AA-Omniscience Accuracy: 49.9% (Artificial Analysis model benchmarks)
- AA-Omniscience Hallucination Rate: **15.1%** (Artificial Analysis model benchmarks — low hallucination rate is strong)
- MRCR: no verified public score found (closest proxy: GraphWalks BFS 1M 84.2%)
- LCR: AA-LCR 79.7%

Coding:

- DeepSWE: **77.9%** (Google evals methodology — exceeds 74% frontier threshold)
- Vibe Code Bench: **91.90%** (Google evals methodology)
- AA-SciCode: **61.8%** (Artificial Analysis: scicode leaderboard — meets 55% frontier)
- SWE-bench Verified / SWE-Pro: no verified public score found (closest proxy: DeepSWE 77.9%)
- SWE Multilingual: no verified public score found
- FrontierSWE v2: 55.1% (Proximal: FrontierSWE v2 leaderboard)
- PostTrainBench v1.1: 45.3% (Google evals methodology)
- LiveCodeBench: no verified public score found
- Terminal-Bench 4.0: 57.40% (already listed — overlaps with tool use)

Long context:

- GraphWalks BFS 256K–1M: **84.2%** (Google evals methodology — 1M context)
- GraphWalks BFS 128K: **99.7%** (Google evals methodology)
- AA-LCR (long-context reasoning at 1M): 79.7%

Speed / Cost:

- Output speed: N/A (not measured by AA)
- Cost per Intelligence Index task: $1.99 (Artificial Analysis)
- Cache discount: 95% (Artificial Analysis)
- Gray Swan IPI (15 attempts): 0.7% (Google: Gemini 4 Argon launch chart)

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld 69.2% and GDPval-AA 1611 Elo show solid agentic capability; TB 4.0 57.4% (57.1% per AA) well below 88%+ frontier; GDPval-AA 1611 below 1750 frontier; AA-Briefcase 1494 moderate; no verified GPQA or Tau3. Capped by TB 4.0 and GDPval-AA below frontier thresholds.

- **Reasoning: 87/100.** HLE 55.0% (AA) above 40% frontier; GraphWalks BFS 128K 99.7% and 256K–1M 84.2% exceptional; Intelligence Index 53 just below 60+ frontier; no GPQA score; CritPt 27.1% is a notable weakness; strong OA-Omniscience Hallucination Rate 15.1% (low).

- **Context window: 95/100.** 1M context qualifies for 95–100 tier; GraphWalks BFS 1M 84.2% and AA-LCR 79.7% demonstrate strong long-context reasoning at 1M; no specific ≥98% retrieval-at-512K data to claim 100; meta.json lists 128K but measurements confirm 1M.

- **Multimodal: 70/100.** Text + image input with strong vision benchmarks (LVBench 91.7%, Chartography 71.6%); text-only output; no video/audio input; no multimodal output. Methodology places text+image at 60–70. Note: meta.json says "Text in/out" — discrepancy likely reflects OpenCode Zen listing; AA confirms text+image.

- **Coding: 88/100.** DeepSWE 77.9% exceeds 74% frontier; Vibe Code Bench 91.90% exceptional; AA-SciCode 61.8% meets 55% frontier; FrontierSWE v2 55.1% and PostTrainBench 45.3% are lower; no SWE-bench Verified/Pro public score. Capped by lack of SWE-bench score and moderate FrontierSWE.

- **Cost efficiency: 72/100.** $2/$10 per 1M tokens with 95% cache discount; ~72 interpolated between $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60; $1.99 per Intelligence Index task is efficient; no free tier on Zen.

- **Overall Score: 85/100.** (85+87+95+70+88)/5 = 85. Strong mid-tier frontier reasoning model with exceptional GraphWalks long-context scores and solid coding (DeepSWE, Vibe); TB 4.0 and GDPval-AA below frontier cap Tool use and Reasoning; good cost efficiency with 95% cache discount.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: Public internet research via BenchLM, Artificial Analysis model/evaluation pages, and Google DeepMind evaluation methodology page; sources fetched 2026-10-01. Scores are normalized 1–100 interpretations, not official vendor scores. Raw benchmark numbers are listed with sources above.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
