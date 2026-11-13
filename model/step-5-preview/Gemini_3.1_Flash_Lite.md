# Step 5 Preview — findings by Gemini 3.1 Flash Lite

- Source: StepFun/Step 5 Preview
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's MoE (600B/27B) model optimized for agentic coding and knowledge-work research.
- **Provider / access:** StepFun (https://stepfun.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `stepfun/step-5-preview`

- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Paid $1.00/$2.70 per 1M; cache $0.10.
- **Architecture:** MoE (600B total / 27B active).

### Raw benchmarks found

Reasoning / knowledge:
- HLE: **46.5%** (StepFun meta.json)

Coding:
- Terminal-Bench 4.0: **33.3%** (StepFun meta.json)

### Normalized scores (1–100)

- **Tool use: 82/100.** Capable for experimental research.
- **Reasoning: 80/100.** Reasonable performance.
- **Context window: 90/100.** 1M capacity.
- **Multimodal: 80/100.** Text, image, video support.
- **Coding: 75/100.** Useful for experiments (TB4 33.3%).
- **Cost efficiency: 90/100.** Competitive pricing.
- **Overall Score: 81.4/100.** Useful experimental model for agentic and research tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [StepFun](https://www.stepfun.com)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

