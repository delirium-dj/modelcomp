# Step 5 Preview — findings by Inkling 2 Small

- Source: StepFun (`step-5-preview`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship foundation model for real-world agentic work — a sparse MoE with 600B total / 27B active parameters, positioned on the "Pareto frontier" of intelligence vs cost, with strength in AI coding, software engineering, professional knowledge work, and finance.
- **Provider / access:** StepFun API (`stepfun.com/step-5-preview`); open weights on Hugging Face (`stepfun-ai/Step-5-Preview`, BF16 mirrors on SHSLab / TypeSafeAI); Chat Completions-style API.
- **Release / knowledge:** Released 2026 (Preview); knowledge cutoff not publicly stated.
- **IDs:** `step-5-preview` (StepFun); `stepfun-ai/Step-5-Preview` (HF weights)
- **Context window:** 1,000,000 tokens; max output undisclosed.
- **Modalities:** text, image, and video in; text out; reasoning yes; tool calls yes; JSON mode not confirmed.
- **Pricing (as of 2026-11-10):** open weights (self-host); hosted API pricing not published on the model page — undisclosed per-token rate; preview access.
- **Architecture:** sparse Mixture-of-Experts, 600B total / 27B active.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (StepFun, 2026)
- MCP Atlas: **85.6%** (StepFun)
- BrowseComp: **88.7%** (StepFun)
- Toolathlon-Verified: **74.1%** (StepFun)
- DRACO: **83.3%** (StepFun)
- GDPval-AA: **1566** (StepFun); normalized 54.3% (Artificial Analysis)
- Terminal-Bench 4.0: **33.3%** (StepFun)
- CyberGym: **84.7%** vendor / CyberGym-E2E-AA **74.8%** (AA)
- JobBench: **59.0%**; APEX-Agents **37.8%** (vendor) / **38.0%** (AA)
- AA Harvey LAB v1.0: **93.4%** (Artificial Analysis)
- AA ITBench: **55.6%**; AA EnterpriseOps-Gym: **47.2%**; AA Cyber Index: **47.7%**

Reasoning / knowledge:

- GPQA-D: **93.5%** (StepFun)
- HLE: **46.5%** (StepFun); AA-HLE **46.5%**
- AA Intelligence Index: **28.5%** (Artificial Analysis); BenchLM **56.59/100** (#62/1020)
- CritPt: **20.9%** (StepFun)
- AA-LCR: **88.3%** (Artificial Analysis / StepFun)
- AA-Omniscience: Index **16.4**, Accuracy **36.4%**, Hallucination **31.3%**

Coding:

- Terminal-Bench 2.1: **85.0%** (StepFun)
- ProgramBench: **80.5%** (StepFun)
- sweMarathon: **72.7%** (StepFun)
- DeepSWE: **67.7%** (StepFun)
- SciCode / AA-SciCode: **58.9%** (StepFun / AA)
- MLS-Bench Lite: **40.5%** (StepFun)

Long context:

- AA-LCR: **88.3%** at 1M tokens — excellent long-context retrieval/reasoning.

Multimodal:

- MMMU-Pro: **76%** vendor / **76.4%** AA-MMMU-Pro; OfficeQA Pro **60.3%**

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 85.6%, BrowseComp 88.7%, Terminal-Bench 2.1 85.0%, Toolathlon 74.1%, DRACO 83.3% — elite agentic tool use; capped by Terminal-Bench 4.0 33.3% and APEX-Agents ~38%.
- **Reasoning: 55/100.** GPQA-D 93.5% is matched against HLE 46.5%, CritPt 20.9%, AA Index 28.5% and weak Omniscience — strong pattern knowledge, weak frontier reasoning.
- **Context window: 95/100.** 1M tokens, AA-LCR 88.3% — best-in-class long-context measurement.
- **Multimodal: 78/100.** Text/image/video in, text out; MMMU-Pro ~76%, OfficeQA Pro 60.3%; no audio/video generation.
- **Coding: 81/100.** Terminal-Bench 2.1 85.0%, ProgramBench 80.5%, sweMarathon 72.7%, DeepSWE 67.7%; capped by MLS-Bench Lite 40.5% and Terminal-Bench 4.0 33.3%.
- **Cost efficiency: 75/100.** Open weights (self-host) make it cheap to run at 27B active; hosted API price undisclosed.
- **Overall Score: 79/100.** (84 + 55 + 95 + 78 + 81) / 5 = 78.6 → 79. Best fit: open-weight agentic deployments with 1M-context and multimodal needs; weaker for hardest frontier-reasoning tasks.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (StepFun launch page via BenchLM mirrors, Hugging Face model card, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Step-5-Preview — StepFun](https://www.stepfun.com/step-5-preview)
  - [Step-5-Preview — GitHub](https://github.com/stepfun-ai/Step-5-Preview)
  - [Step-5-Preview — BenchLM](https://benchlm.ai/models/step-5-preview)
  - [Step 5 (Preview) — Artificial Analysis](https://artificialanalysis.ai/models/step-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
