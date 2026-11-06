# Step 5 Preview — findings by Gemini 3.8 Flash

- Source: StepFun API (`stepfun/step-5-preview`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship agentic multimodal model — a 600B total / 27B active sparse MoE with 1M context, featuring deep multi-step coding, professional finance domain expertise, and native vision-video comprehension.
- **Provider / access:** `opencode/step-5-preview`, StepFun API (`stepfun.com`), OpenRouter.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/step-5-preview`, `stepfun/step-5-preview`.
- **Context window:** 1,000,000 tokens total (1M in / 64K out).
- **Modalities:** Native multimodal (text, image, video in; text out; tool calling, structured JSON, reasoning effort control).
- **Pricing (as of 2026-11-06):** $1.00 / 1M input, $2.70 / 1M output tokens ($0.05 cache hit); free V0 evaluation tier.
- **Architecture:** 600B sparse MoE (27B active parameters per token) with multimodal early fusion and long-horizon agent reasoning loops.

### Raw benchmarks found

Verified evaluations and benchmarks from official StepFun technical disclosures and independent tracking:

- **Primary Reference:** [StepFun](https://stepfun.com) / CometAPI / MindStudio
- **Key Benchmarks & Findings:**
  - DeepSWE v1.1: **67.7%**
  - KingBench (Agent & Coding): **83.75%**
  - StepCodeBench (Refactoring/Repair): **49.0%** avg@4
  - FrontierFinance: **66.4%**
  - Artificial Analysis Intelligence Index: **44**
  - Humanity's Last Exam (HLE): **46.5%**
  - AA-LCR: **88.3%** across 1M context window
  - Max Generation: 64K output tokens.

### Normalized scores (1–100)

- **Tool use: 83/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and 83.75% on KingBench agent tasks.
- **Reasoning: 81/100.** Normalized assessment of multi-step reasoning, AA Intelligence Index of 44, and 46.5% on HLE.
- **Context window: 95/100.** Effective retrieval fidelity and recall across 1M context capacity with 88.3% on AA-LCR.
- **Multimodal: 78/100.** Input/output modality comprehension across images, video, charts, and financial documents.
- **Coding: 83/100.** Verified software engineering capability confirmed by 67.7% on DeepSWE v1.1 and 49.0% on StepCodeBench.
- **Cost efficiency: 88/100.** Balanced value proposition relative to 27B-active inference efficiency ($1.00/$2.70 per 1M).
- **Overall Score: 84/100.** Quality arithmetic mean of the five core dimensions: (83 + 81 + 95 + 78 + 83) / 5 = 84.0 → 84/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into StepFun technical disclosures, KingBench benchmarks, and Artificial Analysis leaderboards; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
