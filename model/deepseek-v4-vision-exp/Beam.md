# DeepSeek V4 Flash Vision Exp — findings by Beam

- Source: DeepSeek/DeepSeek V4 Flash Vision Exp, `deepseek-ai/deepseek-v4-flash-vision-exp`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Exp
- **Short description:** DeepSeek's experimental multimodal model (Aug 21, 2026): adds visual understanding to V4 Flash architecture; 305B params, 1M context, MIT license. Approaches Opus 4.8 on multimodal agent tasks.
- **Provider / access:** DeepSeek API `deepseek-v4-flash-vision-exp`; HuggingFace (open weights, MIT); DeepInfra; OpenRouter.
- **Release / knowledge:** Released 2026-08-21; knowledge cutoff not stated.
- **IDs:** `deepseek-ai/deepseek-v4-flash-vision-exp`
- **Context window:** 1,048,576 tokens; max output 384,000.
- **Modalities:** text, image in; text out; reasoning yes (configurable effort); tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-10-17):** $0.30 / 1M input (peak), $0.15 off-peak; $1.20 / 1M output (peak), $0.60 off-peak; $0.006 / 1M cached. Paid.
- **Architecture:** 305B params, MoE, vision encoder + aligner, MIT license.

### Raw benchmarks found

Text agent evaluations (Vision Exp / V4 Flash 0731 / Opus 4.8):

- Terminal-Bench 2.1: **83.9 / 82.7 / 85.0**
- NL2Repo: **57.7 / 54.2 / 69.7**
- CyberGym: **75.3 / 76.7 / 78.3**
- DeepSWE: **59.3 / 54.4 / 58.0**
- Toolathlon-Verified: **75.9 / 70.3 / 76.2**
- DSBench-Hard: **63.6 / 59.6 / 71.7**
- AutomationBench (Public): **25.7 / 25.1 / 27.2**

Multimodal agent evaluations:

- ApexBench (Pass@1): **36.5 / 26.2† / 39.4**
- Agents' Last Exam: **27.3 / 25.2† / 25.7**
- Chartography: **64.3 / - / 65.0**
- ZeroBench (Pass@5): **35.0 / - / 34.0**

Reasoning / knowledge:

- HLE: **36.8%** (39.1†) for V4 Flash; Vision Exp not separately reported
- GPQA Diamond: **90.9%** (V4 Flash); Vision Exp not separately reported

Coding:

- DeepSWE: **59.3%**
- Terminal-Bench 2.1: **83.9%**

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Chartography: **64.3%**
- ApexBench: **36.5%**
- ZeroBench: **35.0%**
- Agents' Last Exam: **27.3%**

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 83.9%, Toolathlon-Verified 75.9%, CyberGym 75.3%, DSBench-Hard 63.6%, AutomationBench 25.7%; caps at Agents' Last Exam 27.3%.
- **Reasoning: 76/100.** Inherited from V4 Flash (GPQA 90.9%, HLE 36.8%); caps at HLE 39.1% (†).
- **Context window: 84/100.** 1M window; caps at no published MRCR.
- **Multimodal: 78/100.** Text/image in; Chartography 64.3%, ApexBench 36.5%, ZeroBench 35.0%; caps at Agents' Last Exam 27.3%.
- **Coding: 76/100.** DeepSWE 59.3%, Terminal-Bench 2.1 83.9%; caps at no SWE-bench Verified/Pro.
- **Cost efficiency: 96/100.** Very cheap $0.15-$0.30 / 1M input.
- **Overall Score: 78/100.** Mean of five quality dims (no BenchLM aggregate); best-fit for cost-efficient multimodal agentic coding (open weights, experimental).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (DeepSeek docs/announcement, HuggingFace, GIGAZINE, Pandaily, DeepInfra); scores are normalized 1–100 interpretations, not official vendor scores. Vision Exp not separately scored on BenchLM; text benchmarks inherited from V4 Flash.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.