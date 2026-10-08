# Step 5 Preview — findings by GLM 5.3

- Source: StepFun (`step-5-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship preview model for agentic work — frontier-level software engineering and professional knowledge work with particular strength in finance, built on a sparse Mixture-of-Experts architecture (600B total / 27B active parameters).
- **Provider / access:** StepFun Open Platform (`platform.stepfun.ai`, Chat Completions API + Messages API; `reasoning_effort` low/medium/high). Also tracked as `stepfun/step-5-preview` on Vals AI.
- **Release / knowledge:** API preview opened 2026-09-18 (Artificial Analysis lists release September 18, 2026; llmlineage lists first public release 2026-09-20; Vals AI lists September 28, 2026). Open weights announced — BrainDetox (2026-09-21) reported weights arriving October 15, 2026; Vals AI already lists "Weights: Open" (knowledge cutoff not published).
- **IDs:** `step-5-preview` (StepFun platform); no OpenCode Zen Free ID found.
- **Context window:** 1M tokens total, maximum input 1M, maximum output 64k per official StepFun docs (verified on platform.stepfun.ai model guide, 2026-10-09); Vals AI test runs used a 1,024,000 max-output cap — the official 64k output figure is used here.
- **Modalities:** text, image (up to 60/request, JPG/PNG/WebP/GIF), and video input (MP4/QuickTime/Matroska, <128 MB/file); text output; reasoning yes (extended thinking, configurable effort); tool calls yes; JSON Mode + JSON Schema yes; streaming + prompt caching yes.
- **Pricing (as of 2026-10-09):** $1.00 / 1M input, $2.70 / 1M output, 90% cache discount per Artificial Analysis (blended $0.54/1M at 7:2:1; $1.03 per Intelligence Index task). Paid only.
- **Architecture:** sparse MoE, 600B total / 27B active parameters (Artificial Analysis FAQ; BrainDetox technical analysis); open-weights release announced/rolling out (sources disagree on exact weights date — see Release note).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (StepFun launch table via BenchLM)
- Terminal-Bench 4.0: **33.3%** (BenchLM, cross-checked 31.82% ±2.62, #14/45 on Vals AI)
- MCP Atlas: **85.6%** (StepFun launch table via BenchLM)
- Toolathlon-Verified: **74.1%** (StepFun launch table via BenchLM)
- BrowseComp: **88.7%** (StepFun launch table via BenchLM)
- CyberGym: **84.7%** (StepFun launch table via BenchLM)
- DRACO: **83.3%** (StepFun launch table via BenchLM)
- AutomationBench: **44.0%** vendor / **51.0%** AA harness (BenchLM)
- JobBench: **59.0%** (StepFun launch table via BenchLM)
- APEX-Agents: **37.8%** vendor / **38.0%** AA (BenchLM)
- GDPval-AA: **1566 Elo / 54.3% normalized** (Artificial Analysis)
- AA Briefcase: **1424 Elo** (Artificial Analysis)
- AA EnterpriseOps-Gym: **47.2%**; AA Harvey LAB v1.0: **93.4%**; AA ITBench: **55.6%**; AA-AnalystAgent: **35.0%**; GDP.pdf: **14.8%** (Artificial Analysis)
- Agents' Last Exam: **29.5%** (StepFun launch table via BenchLM)
- Claw-Eval / ClawProBench: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (StepFun launch table via BenchLM)
- HLE: **46.5%** (StepFun launch table via BenchLM; AA-HLE agrees 46.5%)
- LCR (AA-LCR v1.1): **88.3%** (StepFun launch table via BenchLM)
- MLCR-AA: **16.7%** (Artificial Analysis)
- CritPt: **20.9%** (StepFun launch table via BenchLM)
- Artificial Analysis Intelligence Index: **44/100 (#40 of 226)** (Artificial Analysis, v4.3.2)
- Omniscience Accuracy / Hallucination Rate: **41.5% / 43.0%** (Artificial Analysis)
- Vals Index: **49.35% ±1.22 (#30 of 45)** (Vals AI)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- DeepSWE: **67.7%** (StepFun launch table via BenchLM)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **58.9%** (StepFun launch table via BenchLM; AA agrees 58.9%)
- ProgramBench: **80.5%** (StepFun launch table via BenchLM)
- sweMarathon: **72.7%** (StepFun launch table via BenchLM)
- MLS-Bench Lite: **40.5%** (StepFun launch table via BenchLM)
- Vibe Code Bench v1.1: **70.40% ±4.27 (#36 of 110)** (Vals AI)
- Code Migration (Vals): **38.98% ±4.53 (#28/74)**; IOI: **38.06% (#36/42)** (Vals AI)
- Terminal-Bench Science: **2.86% (#29/38)** (Vals AI)

Long context:

- 1M-token window verified by official docs; MRCR/RULER/GraphWalks: no long-context retrieval benchmark score found (AA-LCR 88.3% is a reasoning-over-context result, not a retrieval rate).

Multimodal:

- MMMU-Pro: **76.0% vendor / 76.4% AA** (BenchLM)
- OfficeQA Pro: **60.3%** (StepFun launch table via BenchLM)

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong agentic core (TB2.1 85%, MCP Atlas 85.6%, BrowseComp 88.7%, CyberGym 84.7%, Harvey LAB 93.4%) with GDPval-AA 1566 Elo above the ~900–1200 mid band but short of the ~1750 frontier ref; capped by weak next-gen agent suites (TB4.0 33%, APEX-Agents 38%, Agents' Last Exam 29.5%, EnterpriseOps 47.2%).
- **Reasoning: 80/100.** GPQA-D 93.5% and HLE 46.5% clear the frontier refs (90%+ / 40%+), AA-LCR 88.3% is strong, but the AA Intelligence Index of 44 (frontier ref 60+) and weak spots (CritPt 20.9%, MLCR-AA 16.7%, Omniscience hallucination 43%) keep it just below the 90–100 band.
- **Context window: 96/100.** Verified 1M-token window (official docs, AA, Vals) lands the top tier (≥1M = 95–100); no published ≥98% retrieval-at-512K figure to justify 100.
- **Multimodal: 80/100.** Text + image + video input with text-only output sits in the 75–90 band; MMMU-Pro 76% and OfficeQA Pro 60.3% are solid but not exceptional; no audio input or non-text output.
- **Coding: 78/100.** DeepSWE 67.7% (frontier ref 74%+), TB2.1 85%, SciCode 58.9%, ProgramBench 80.5%, Vibe Code 70.4% — a strong engineering profile capped by the absence of any verified SWE-bench Verified number and weak TB4.0 (33%) / Code Migration (39%).
- **Cost efficiency: 90/100.** $1.00/$2.70 per 1M with 90% cache discount and $1.03/task on the AA Intelligence Index — cheaper than the $1.25/$4.25 (~88) anchor, with third parties calling it a Pareto-cost leader (65% lower cost at matched intelligence per ExplainX); paid tier only, no Free ID.
- **Overall Score: 82/100.** Half-up mean of (78 + 80 + 96 + 80 + 78) = 82.4 → 82. Best fit: cost-conscious agentic software engineering and finance-flavored knowledge work at 1M context.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/GLM-5.3)** — 2026-10-09
- Method: public internet research (StepFun official platform docs, BenchLM, Artificial Analysis, Vals AI, plus search-indexed launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
