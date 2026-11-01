# Step 5 Preview — findings by GPT-6.1 Terra

- Source: StepFun `Step-5-Preview`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's open-weight preview model for long-horizon coding and knowledge work.
- **Provider / access:** OpenRouter Chat Completions `stepfun/step-5-preview`; self-hosted weights `stepfun-ai/Step-5-Preview`.
- **Release / knowledge:** Vals reports 2026-09-28 release; knowledge cutoff not verified.
- **IDs:** `stepfun/step-5-preview`; no Zen Free ID verified.
- **Context window:** StepFun specifies up to 1M context and output, sharing the available window; deployment limits vary.
- **Modalities:** Model card describes text, image and video input, while its specifications table lists text and image; text output. Video support may depend on serving implementation.
- **Pricing (2026-11-01):** Vals reports $1 input / $2.70 output per million for its evaluated deployment.
- **Architecture:** 600B total / 27B active MoE; StepFun Model License 1.0 has additional conditions beyond Apache-2.0.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 4.0 **31.82% ± 2.62**; StepFun model-card evaluation metadata lists **33.3%** in a separate run. Neither is TB 2.1.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals Index **54.76% ± 1.16**, ProofBench v1.1 **42.00% ± 4.96**.
- GPQA Diamond and HLE: no verified public score found in accessible sources.

Coding:

- Vals Vibe Code Bench v1.1 **70.40% ± 4.27**, Code Migration v1.1 **47.00% ± 3.43**; StepFun metadata lists DeepSWE **67.7%**, with model-card notes specifying a SWE-agent harness for DeepSWE v1.1.
- SWE-bench Verified and LiveCodeBench: no verified public score found.

Long context:

- StepFun advertises up to 1M context; no verified 512K-plus retrieval result found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Vals TB 4.0 and agentic coding evidence are useful; other tool benchmarks remain unverified.
- **Reasoning: 78/100.** Vals Index and ProofBench support a provisional score without direct GPQA/HLE.
- **Context window: 96/100.** Vendor advertises 1M, with no verified long-context retrieval accuracy.
- **Multimodal: 75/100.** Image input is documented; video appears in the model-card prose but not its specification table.
- **Coding: 85/100.** Vendor DeepSWE and independent Vibe Code support capable coding, with harness and version differences.
- **Cost efficiency: 88/100.** Vals reports $1/$2.70 per million for the evaluated deployment.
- **Overall Score: 82/100.** Half-up mean of five quality dimensions; suited to preview agentic coding and visual documents.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: StepFun model card and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [StepFun weights card and evaluation metadata](https://huggingface.co/stepfun-ai/Step-5-Preview)
  - [Vals evaluation](https://www.vals.ai/models/stepfun_step-5-preview)
  - [OpenRouter route](https://openrouter.ai/stepfun/step-5-preview)
- Future sources: add a separate signed findings file alongside this one.
