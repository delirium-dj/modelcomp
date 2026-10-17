# Step 5 Preview — findings by Beam

- Source: StepFun/Step 5 Preview, `stepfun/step-5-preview`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship MoE (Sep 28, 2026): 600B total / 27B active, 1M context. Text/image/video in. BenchLM 69.45 (#20 of 954). Terminal-Bench 2.1 85.0%, DeepSWE 67.7%, SciCode 58.9%, ProgramBench 80.5%, GPQA-D 93.5%, HLE 46.5%, AA Intelligence 43.7%, AA-LCR 88.3%, CritPt 20.9%. Open weights (promised). $1.00/$2.70 per 1M.
- **Provider / access:** StepFun API; OpenRouter; Vercel AI Gateway.
- **Release / knowledge:** Released 2026-09-28 (preview); open weights promised Oct 15. Knowledge cutoff not stated.
- **IDs:** `stepfun/step-5-preview`
- **Context window:** 1,000,000 tokens; max output 1,000,000 (Vals) / 64K (CloudPrice).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes. Open weights (promised).
- **Pricing (as of 2026-10-17):** $1.00 / 1M input, $2.70 / 1M output; paid.
- **Architecture:** MoE, 600B total / 27B active, 1M context. StepFun.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **65.3** (Estimated · #18/128)
- Terminal-Bench 2.1: **85.0%** (StepFun official)
- Terminal-Bench 4.0: **33.30%** (StepFun official)
- CyberGym: **84.7%** (StepFun official)
- AutomationBench: **44.0%** (StepFun official)
- Toolathlon-Verified: **74.1%** (StepFun official)
- MCP Atlas: **85.6%** (StepFun official)
- JobBench: **59.0%** (StepFun official)
- APEX-Agents: **37.8%** (StepFun official)
- DRACO: **83.3%** (StepFun official)
- BrowseComp: **88.7%** (StepFun official)
- Agents' Last Exam: **29.5%** (StepFun official)
- GDPval-AA: **1566** / **54.3%** (StepFun/AA)
- DeepSWE: **67.7%** (StepFun official)
- τ³-bench: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **83.4** (Unranked · 2 rankable rows)
- GPQA-D: **93.5%** (StepFun official)
- HLE: **46.5%** (StepFun official)
- AA Intelligence Index: **43.7%** (Artificial Analysis)
- AA-HLE: **46.5%** (Artificial Analysis)
- AA-LCR: **88.3%** (StepFun official)
- CritPt: **20.9%** (StepFun official)
- MLCR-AA: **16.7%** (Artificial Analysis)
- AA-Omniscience Index: **16.4%** (Artificial Analysis)
- AA-Omniscience Accuracy: **41.5%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **43.0%** (Artificial Analysis)
- IFBench: not reported

Coding:

- Coding public-lane (BenchLM): **60.5** (Estimated · #20/150)
- DeepSWE: **67.7%** (StepFun official)
- Terminal-Bench 2.1: **85.0%** (StepFun official)
- SciCode: **58.9%** (StepFun official) / **58.9%** (AA)
- ProgramBench: **80.5%** (StepFun official)
- sweMarathon: **72.7%** (StepFun official)
- MLS-Bench Lite: **40.5%** (StepFun official)
- AA-SciCode: **58.9%** (Artificial Analysis)

Long context:

- 1M window; AA-LCR **88.3%** (StepFun official); MRCR not reported.

Multimodal:

- Multimodal public-lane (BenchLM): not individually reported
- Text/image/video in; MMMU-Pro **76%** (StepFun official), AA-MMMU-Pro **76.4%** (Artificial Analysis), OfficeQA Pro **60.3%** (StepFun official).

### Normalized scores (1–100)

- **Tool use: 76/100.** Agentic lane #18/128 (65.3), Terminal-Bench 2.1 85.0%, CyberGym 84.7%, AutomationBench 44.0%, Toolathlon 74.1%, MCP Atlas 85.6%, JobBench 59.0%, APEX 37.8%, DRACO 83.3%, BrowseComp 88.7%, Agents' Last Exam 29.5%, GDPval-AA 54.3%; caps at Agents' Last Exam 29.5%.
- **Reasoning: 76/100.** GPQA-D 93.5%, HLE 46.5%, AA Intelligence 43.7%, AA-LCR 88.3%, CritPt 20.9%, MLCR-AA 16.7%; caps at CritPt 20.9%.
- **Context window: 82/100.** 1M window; AA-LCR 88.3%; caps at no published MRCR.
- **Multimodal: 76/100.** Text/image/video in; MMMU-Pro 76%, OfficeQA Pro 60.3%; caps at no published CharXiv.
- **Coding: 74/100.** DeepSWE 67.7%, Terminal-Bench 2.1 85.0%, SciCode 58.9%, ProgramBench 80.5%, sweMarathon 72.7%, MLS-Bench 40.5%, coding lane #20/150 (60.5); caps at MLS-Bench 40.5%.
- **Cost efficiency: 84/100.** Mid $1.00/$2.70 per 1M.
- **Overall Score: 76.8/100.** Mean of five quality dims (BenchLM 69.45); best-fit for open-weight agentic coding at mid cost. #20 overall on BenchLM.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (StepFun official, BenchLM, Vals AI, OpenCode data, CloudPrice); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Step 5 Preview is open-weight (weights promised Oct 15, 2026). #20 overall on BenchLM. Superseded by Step 5 (full release).<|end|>>2>