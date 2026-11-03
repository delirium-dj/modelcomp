# Gemini 3.1 Pro — findings by Mercury 3

- Source: Google/Gemini 3.1 Pro
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's upgraded core-intelligence flagship (preview released 2026-02-19), the successor to Gemini 3 Pro, designed for complex problem-solving with strong multimodal input and 1M context. Its agentic/tool profile is solid but below the 2026 autumn flagships.
- **Provider / access:** Gemini API (`gemini-3.1-pro-preview`), Google AI Studio, Vertex AI / Gemini Enterprise, Gemini CLI, Antigravity, Android Studio; Gemini app/NotebookLM for Pro & Ultra subscribers.
- **Release / knowledge:** Preview released 2026-02-19 (GA later in 2026); knowledge cutoff not published.
- **IDs:** `gemini-3.1-pro-preview` (Gemini API).
- **Context window:** 1,000,000 tokens (1M) total; max output 66K (Vals).
- **Modalities:** text + image + speech + video input, text output; reasoning (extended thinking / high thinking level in evals); tool calls.
- **Pricing (as of 2026-11-03):** $2.00 input / $12.00 output per 1M tokens, 90% cache discount (blended ~$1.74). No free tier for Pro.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **57.8%**; DeepSearchQA: **69.7%**; τ²-bench: **95.6%**; APEX-Agents-AA: **32.0%** (AA)
- GDPval-AA: **904 Elo** (AA; normalized 14.6%); AA Agentic Index: **10.3%**; AA-AnalystAgent: **41.3%**; AA EnterpriseOps-Gym: **42.2%**
- Terminal-Bench Hard (AA): **53.8%**; Terminal-Bench 4.0 (Vals): **2.52%** — Vals harness (likely non-agentic settings) diverges sharply from other agentic figures
- Vals: Finance Agent v2 **42.98%**, Legal Research **20.67%**, Tax Agent **9.29%**, SRE Bench **0%**, MedCode **59.06%** (#2/107), MortgageTax **69.40%** (#6/98)
- Terminal-Bench 2.1 (Vals): **70.8%**; GERT Labs: 56.87%; ResearchClawBench: 13.3%; MazeBench ASCII: 1%

Reasoning / knowledge:

- ARC-AGI-2: **77.1%** (Google official, verified — more than double Gemini 3 Pro)
- GPQA Diamond: **95.45%** (Vals, #1/138) vs **94.1%** (AA) vs 94.3% (Meta chart)
- HLE: **45.4%** without tools (Meta chart) vs **47.0%** (AA)
- AA-LCR: **82.0%**; CritPt: **17.7%**; ARC-AGI-3: **0.4%** (ARC Prize)
- FrontierMath v2: Tiers 1–3 **59.65%**, Tier 4 **26.83%** (Epoch AI)
- MMLU-Pro: **90.99%** (Vals); Global-MMLU-Lite: 93.2% (AA); IFBench: 77.1% (AA)

Coding:

- LiveCodeBench: **88.48%** (Vals); SWE-bench: **78.8%** (Vals; 69.6% in Vals Feb-20 update)
- AA Coding Index: **68.8%**; AA-SciCode: **58.7%**; React Native Evals: 78.9%
- Vibe Code Bench v1.1: **32.03%** (Vals); ProgramBench: 0% (Vals); PostTrainBench v1.1: 22.0%

Long context:

- 1M window; AA-LCR 82.0%; no MRCR/GraphWalks verified public figure found (closest: none).

Multimodal:

- text/image/speech/video input; MMMU-Pro 88.21% (Vals) / 83.9% (Meta chart); CharXiv 80.2%; ERQA 69.4%; SimpleVQA 72.4%; ScreenSpot Pro 84.4%; ZeroBench 29.0%; MedXpertQA (MM) 81.3%.

### Normalized scores (1–100)

- **Tool use: 76/100.** Mixed agentic suite — strong on banking-style tool calls (τ² 95.6%, Claw-Eval 57.8%, TB Hard 53.8%) but weak overall (GDPval 904, Agentic Index 10.3%, Vals TB4.0 2.52%).
- **Reasoning: 88/100.** GPQA 94–95.5% and ARC-AGI-2 77.1% are elite; capped by moderate HLE ~45–47%, CritPt 17.7%, and FrontierMath T1–3 ~60%.
- **Context window: 92/100.** 1M window with good LCR 82%; 66K output cap and no published ≥98%-retrieval figure hold it below the top band.
- **Multimodal: 91/100.** text/image/speech/video in — full omni input coverage, strong visual reasoning (MMMU-Pro 88%); text-only output caps at 91.
- **Coding: 83/100.** LiveCodeBench 88.5% and SWE-bench 78.8% are respectable; weak Vibe 32%, SciCode 58.7%, and Vals ProgramBench 0% cap it below the coding flagships.
- **Cost efficiency: 78/100.** $2/$12 with 90% cache discount — moderate premium pricing for its capability tier.
- **Overall Score: 86/100.** Mean of (76+88+92+91+83)/5 = 86.0 → 86. A capable 1M-context omni-input model, but not in the top agentic/coding tier the queue position might suggest.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Google blog, Artificial Analysis model page/leaderboards, Vals AI, BenchLM aggregation, ARC Prize, Epoch AI, Meta comparison charts); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB4.0, GPQA, HLE) listed side by side.
- Reference URLs:
  - [Gemini 3.1 Pro: a smarter model for your most complex tasks (Google, 2026-02-19)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [Gemini 3.1 Pro — Artificial Analysis model page ($2/$12, 1M, text/image/speech/video in)](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [Gemini 3.1 Pro Preview — Vals AI model page](https://www.vals.ai/models/google_gemini-3.1-pro-preview)
  - [Gemini 3.1 Pro — BenchLM benchmark aggregation](https://benchlm.ai/models/gemini-3-1-pro)
  - [ARC Prize leaderboard](https://arcprize.org/leaderboard)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
