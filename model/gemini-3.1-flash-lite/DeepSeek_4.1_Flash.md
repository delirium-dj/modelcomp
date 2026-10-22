# Gemini 3.1 Flash-Lite — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.1 Flash-Lite (`google/gemini-3.1-flash-lite`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18

> **Re-verified 2026-10-18.** BenchLM (`gemini-3-1-flash-lite`, 12 rows) computes an overall **46.98/100 (#113 of 972)** and confirms the 2026-10-11 deep pass (GPT-1: GPQA Vals 81.1%, MMLU-Pro 86.2%, LiveCodeBench 80.1%, SWE-bench Vals 62.8%, Terminal-Bench 2.1 Vals 34.1%, CharXiv 73.2%, Vibe Code Bench 0.0%, ParseBench 58.32%, FrontierMath v2 27.72%). **No score change** (Overall 66).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). The official Google DeepMind model card (published 2026-03-03), BenchLM, Artificial Analysis, Vals AI, llm-stats.com and TopReviewed.ai were re-read. Vals AI and BenchLM now carry independent Terminal-Bench 2.1, SWE-bench Verified, LiveCodeBench and GPQA runs absent from the prior pass; the official card publishes MRCR long-context recall (contradicting third-party "unpublished" claims). Conflicts surfaced: GPQA Diamond 86.9% (Google) vs 81.1% (Vals); LiveCodeBench 72.0% (Google) vs 80.1% (Vals); MMMU-Pro 76.8% (Google) vs 82.49% (Vals); AA Intelligence Index 16 now (rescaled v4.3.2) vs 34/25.04 earlier.

## Model card

- **Name:** Gemini 3.1 Flash-Lite (GA high-efficiency tier; no "Free" wording, AI Studio quota offered)
- **Short description:** Google's March 2026 budget multimodal model ("intelligence at scale"): low-latency, high-volume work such as subagent routing, document parsing, classification and agentic search. Supersedes Gemini 2.5 Flash-Lite and is itself superseded by Gemini 3.5 Flash-Lite (GA 2026-07-21, $0.30/$2.50), with an earliest possible shutdown of 2027-05-07.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI (GA on both since 2026-05-07). Proprietary, closed-weights; no self-hosting. Also resold via DeepInfra/OpenRouter.
- **Release / knowledge:** Preview 2026-03-03; stable/GA 2026-05-07 (preview id shut down 2026-05-25); catalogue date 2026-05-07 (BenchmarkList). Knowledge cutoff 2025-01.
- **IDs:** `google/gemini-3.1-flash-lite` (also `gemini-3.1-flash-lite`; retired preview `gemini-3.1-flash-lite-preview`). No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens (1M) input; 65,536-token max output (model card; trackers list 65.5K/66K/67K).
- **Modalities:** text, image, video, audio and PDF/file input; text output; function calling; structured output via response schemas; code execution; reasoning yes — configurable thinking budget, thinking tokens billed as output.
- **Pricing (as of 2026-10-11):** $0.25 / 1M in and $1.50 / 1M out (unchanged since launch); cached input $0.025 (90% off); batch ≈50% off ($0.125/$0.75); audio input 2x ($0.50); Search grounding 5,000 prompts/mo free then $14/1,000 queries; flat, no >200K cliff.
- **Architecture:** proprietary Transformers/MoE family based on Gemini 3 Pro; parameter count undisclosed. Trained on Google TPUs with JAX + ML Pathways.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **34.1%** (Vals AI, rank 70/75; BenchLM lists the same 34.1%) — up from the prior pass's 31.1%
- Gert Labs: **38.46%**; Vals agentic set: Finance Agent v2 **29.99%**, SAGE **49.54%** (20/91), TaxEval v2 **71.79%**, MortgageTax **68.04%**
- Vibe Code Bench v1.1: **0.00%** (109/112); ProgramBench **0.00%** (63/64); Harvey Legal Agent **0.00%** (63/79)
- GDPval-AA / MCP Atlas / Tau3-Banking / APEX-Agents / Claw-Eval / Toolathon: **no verified public score found** in this pass

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (official model card) vs **81.1%** (Vals AI, rank 66/138)
- HLE (full set, text + MM): **16.0%** (model card); SimpleQA Verified **43.3%**; FACTS **40.6%**
- MMLU-Pro: **86.2%** (Vals AI, 45/138); MMMLU **88.9%** (model card); JevBench 1.4 **14.26** / 1.5 **19.58** (BenchLM)
- Artificial Analysis Intelligence Index: **16** (rank 70/175, v4.3.2); TopReviewed cites an older pre-rescale value of 34 and the prior pass saw 25.04
- CritPt / AA-LCR: **no verified public score found**

Coding:

- LiveCodeBench: **72.0%** (official card, 2025-01→2025-05 window) vs **80.1%** (Vals AI, rank 71/143)
- SWE-bench Verified: **62.8%** (Vals AI, 75/88); LMArena Coding Elo **1457**
- SciCode / DeepSWE / SWE-Atlas / AA LiveCodeBench / WebDev Arena: **no verified public score found**; Vibe Code Bench **0.00%**

Multimodal:

- MMMU-Pro: **76.8%** (official card) vs **82.49%** (Vals AI, 37/93)
- CharXiv Reasoning: **73.2%**; Video-MMMU **84.8%**; MedScribe **63.90%**; MedCode **47.60%** (Vals AI)

Long context:

- MRCR v2 (8-needle) 128k average: **60.1%**; 1M pointwise: **12.3%** (official model card) — recall degrades sharply near full depth.

### Normalized scores (1–100)

- **Tool use: 40/100.** Terminal-Bench 2.1 34.1% (still below the ~45–60% mid band) plus 0.00% on Vibe Code Bench, ProgramBench and Harvey Legal Agent fit "subagent and tool-router", not autonomous agent; SAGE 49.54% and TaxEval 71.79% are the only strong agentic signals. https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview
- **Reasoning: 60/100.** GPQA Diamond 86.9% (Google) / 81.1% (Vals) is strong for the price class, but HLE 16.0% and an AA Intelligence Index of 16 (v4.3.2, median 13) show a shallow frontier-reasoning ceiling. https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/ + https://artificialanalysis.ai/models/gemini-3-1-flash-lite-preview
- **Context window: 95/100.** 1,048,576 tokens with ~50% batch and 90% cache discounts is excellent value for long ingestion; capped below 100 by weak recall at depth (MRCR v2 12.3% @1M, 60.1% @128k). https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/
- **Multimodal: 90/100.** Official card confirms text, image, video, audio and PDF/file input in one call with text output — the methodology's "+audio in" 90–100 band; MMMU-Pro 76.8%/82.49%, Video-MMMU 84.8% and CharXiv 73.2% support the top of the cheap tier, held to 90 by text-only output and sub-Pro modality quality. https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/ + https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview
- **Coding: 65/100.** SWE-bench Verified 62.8% (Vals) and LiveCodeBench 80.1% (Vals) now exist, but Vibe Code Bench 0.00% and Terminal-Bench 2.1 34.1% cap it at the methodology's "LiveCode ~80% but Vibe <10%" 65–75 band's lower edge. https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview + https://benchlm.ai/models/gemini-3-1-flash-lite
- **Cost efficiency: 88/100.** $0.25/$1.50 per 1M with 90% cache reads, ~50% batch off, flat pricing and AA's $0.06 per task (#22/175) is cheap and discountable; the 2x audio premium and a pricier $1.50 output (vs a $0.87 median) cap the score. https://artificialanalysis.ai/models/gemini-3-1-flash-lite-preview
- **Overall Score: 70/100.** Mean of the five quality dims (40+60+95+90+65)/5 = 70.0 → 70. Best fit: high-volume multimodal ingestion, routing and classification where a million-token window and low latency matter more than agentic depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (official Google DeepMind model card + evals page, BenchLM model page + per-eval results, Vals AI model page + leaderboards, Artificial Analysis, llm-stats.com, TopReviewed.ai); deep second-pass re-verification of the 2026-10-01 report, with conflicting harness figures listed side by side. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
