# Step 5 Preview — findings by Laguna S 2.1

- Source: StepFun (`opencode/step-5-preview`)
- Date: 2026-10-10
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** Flagship reasoning model from StepFun (Beijing), released September 2026 as a preview of the Step 5 family; built for agentic software-engineering and professional knowledge work, with stated strength in finance. Exposed on OpenCode Zen as a limited-time, zero-retention free tier (`step-5-preview-free`) behind the openai-compatible Chat Completions API.
- **Provider / access:** StepFun native Chat Completions / Messages at `https://platform.stepfun.ai/`; OpenCode Zen free tier via Chat Completions at `https://opencode.ai/zen/v1/chat/completions` (OpenAI-compatible), id `opencode/step-5-preview` (Zen free id `step-5-preview-free`).
- **Release / knowledge:** released September 18, 2026 (Artificial Analysis FAQ); knowledge cutoff not disclosed.
- **IDs:** `step-5-preview` (StepFun); `opencode/step-5-preview` (Zen). Official model card: `https://platform.stepfun.ai/docs/en/guides/models/step-5-preview`.
- **Context window:** 1,048,576 (1M) total; max output 64,000 — verified (StepFun model card, Artificial Analysis, BenchLM).
- **Modalities:** text + image + video in, text out — image input verified via MMMU-Pro (76%); video input documented by the StepFun model card (MP4/QuickTime/Matroska, ≤128MB, <5min) but not independently benchmarked by Artificial Analysis (which lists text+image only); reasoning enabled (extended thinking / chain-of-thought, `reasoning_effort` low/medium/high); tool calls supported; JSON Mode + JSON Schema supported.
- **Pricing (as of 2026-10-10):** paid StepFun API $1.00/1M input, $2.70/1M output (cache discount 90%, $1.03/task, cost #53/227). On OpenCode Zen evaluated free tier (`step-5-preview-free`): Free/Free/Free input/output/cached, zero-retention (limited-time). Cost efficiency scored on the free Zen tier.
- **Architecture:** ~600B parameters (StepFun FAQ); proprietary, closed weights (Artificial Analysis); dense; reasoning type; 1M context.

### Raw benchmarks found

> Measured public numbers with source. BenchLM model page `https://benchlm.ai/models/step-5-preview` (read 2026-10-10) cites each score to StepFun's own evals (`https://www.stepfun.com/step-5-preview`) or to Artificial Analysis (`https://artificialanalysis.ai/models/step-5`). BenchLM's composite (70.25/100, #17/889) is conservative (42/625 benches covered).

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (StepFun; BenchLM)
- CyberGym: **84.7%** (StepFun; BenchLM)
- MCP Atlas: **85.6%** (StepFun; BenchLM)
- BrowseComp: **88.7%** (StepFun; BenchLM)
- DRACO: **83.3%** (StepFun; BenchLM)
- Toolathlon-Verified: **74.1%** (StepFun; BenchLM)
- JobBench: **59.0%** (StepFun; BenchLM)
- GDPval-AA: **1566** Elo (StepFun; BenchLM)
- AA-AutomationBench: **51.0%** (Artificial Analysis)
- AA-Harvey LAB v1.0: **93.4%** (Artificial Analysis)
- AA-ITBench: **55.6%** (Artificial Analysis)
- AA Briefcase: **1424** Elo (Artificial Analysis)
- Terminal-Bench 4.0: **33.30%** (StepFun + AA; weaker on the v4.0 harness — note harness/version disagreement)
- AA-AnalystAgent: **35.0%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **47.2%** (Artificial Analysis)
- AA GDP.pdf: **14.8%** (Artificial Analysis)
- APEX-Agents / APEX-Agents-AA: **37.8%** / **38.0%** (StepFun / Artificial Analysis)
- Agents' Last Exam: **29.5%** (StepFun; BenchLM)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (StepFun; BenchLM)
- HLE: **46.5%** (StepFun; BenchLM) — AA-HLE **46.5%** (Artificial Analysis)
- AA-LCR: **88.3%** (StepFun; BenchLM)
- CritPt: **20.9%** (StepFun; BenchLM — weak)
- MLCR-AA: **16.7%** (Artificial Analysis — weak; note harness disagreement with AA-LCR 88.3%)
- Artificial Analysis Intelligence Index / BenchLM overall: **44 / #40 of 22744** (Artificial Analysis; BenchLM reports 43.7)
- BenchLM overall: **70.25 / #17 of 889** (composite, 42/625 coverage — conservative)
- AA-Omniscience Accuracy / Hallucination Rate: **41.5% / 43.0%** (Artificial Analysis)

Coding:

- Terminal-Bench 2.1: **85.0%** (StepFun; BenchLM)
- DeepSWE: **67.7%** (StepFun; BenchLM)
- SciCode: **58.9%** (StepFun; BenchLM) — AA-SciCode **58.9%** (Artificial Analysis)
- ProgramBench: **80.5%** (StepFun; BenchLM)
- sweMarathon: **72.7%** (StepFun; BenchLM)
- MLS-Bench Lite: **40.5%** (StepFun; BenchLM)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found
- Coding Index: no verified public score found (AA Intelligence Index 44 is a composite, not a coding index)

Multimodal & grounded:

- MMMU-Pro: **76%** (StepFun; BenchLM) — AA-MMMU-Pro **76.4%** (Artificial Analysis)
- OfficeQA Pro: **60.3%** (StepFun; BenchLM)

Long context:

- AA-LCR (Long Context Retrieval): **88.3%** at 1M context (Artificial Analysis; StepFun via BenchLM). No MRCR / RULER / GraphWalks figure found.

### Normalized scores (1–100)

> Derived per `model-comparison.md` methodology (v4: Overall = half-up mean of the five quality dims; Cost excluded). Sources cited above; scores are normalized interpretations, not official vendor scores.

- **Tool use: 88/100.** Terminal-Bench 2.1 85.0%, MCP Atlas 85.6%, CyberGym 84.7%, BrowseComp 88.7%, AA-Harvey LAB 93.4%, GDPval-AA 1566 — near-frontier (Muse Spark 1.3: TB2.1 88.8%, GDPval 1754). Capped by TB2.1 85.0% (< 88% frontier) and GDPval 1566 (< 1750), plus weak agentic rows (AA-AnalystAgent 35.0, GDP.pdf 14.8).
- **Reasoning: 84/100.** GPQA Diamond 93.5% and HLE 46.5% meet frontier knowledge thresholds; AA-LCR 88.3% strong. Capped below frontier by Intelligence Index 44 (< 60), CritPt 20.9%, and MLCR-AA 16.7%.
- **Context window: 95/100.** 1M total, verified by the StepFun model card, Artificial Analysis, and BenchLM (≥1M tier). No ≥98% retrieval-at-512K figure published, so below the 100 cap.
- **Multimodal: 77/100.** Text + image + video input (image verified via MMMU-Pro 76%/AA 76.4% and OfficeQA Pro 60.3%; video input documented by the StepFun model card but not independently benchmarked — AA lists text+image only) and text output. No audio input or non-text output.
- **Coding: 85/100.** Terminal-Bench 2.1 85.0% (frontier+), SciCode 58.9% (55%+ frontier), ProgramBench 80.5%, sweMarathon 72.7%; capped by DeepSWE 67.7% (< 74% frontier) and MLS-Bench Lite 40.5%.
- **Cost efficiency: 100/100.** Free on OpenCode Zen (`step-5-preview-free`, Free/Free/Free, zero-retention). Paid StepFun fallback $1.00/$2.70 ($1.03/task).
- **Overall Score: 86/100.** (88 + 84 + 95 + 77 + 85) / 5 = 429 / 5 = 85.8 → 86. Near-frontier reasoning+agentic+coding preview on a 1M-context, image+video multimodal model, free on Zen. Best-fit: agentic software-engineering and professional knowledge work on the free tier; avoid where the DeepSWE gap (67.7%) matters for the deepest code reasoning.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: fresh public internet research (BenchLM `https://benchlm.ai/models/step-5-preview`, StepFun model card `https://platform.stepfun.ai/docs/en/guides/models/step-5-preview`, Artificial Analysis `https://artificialanalysis.ai/models/step-5`, and OpenCode Zen docs `https://opencode.ai/docs/zen`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
