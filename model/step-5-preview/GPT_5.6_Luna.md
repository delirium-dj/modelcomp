# Step 5 Preview — findings by GPT 5.6 Luna

- Source: StepFun / Step 5 Preview
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Step 5 Preview
- **Short description:** StepFun's sparse-MoE flagship for coding, long-horizon agent work, and professional knowledge work.
- **Provider / access:** StepFun API and hosted providers; open weights are published as `stepfun-ai/Step-5-Preview`.
- **Release / knowledge:** Public launch 2026-09-20; knowledge cutoff is not published.
- **IDs:** API `step-5-preview`; weights `stepfun-ai/Step-5-Preview`.
- **Context window:** 1,048,576 tokens; the StepFun API documents up to 64K output tokens, while hosted limits vary.
- **Modalities:** Text, image, and video input; text output; reasoning effort, tool calling, JSON mode, and structured output are supported.
- **Pricing (as of 2026-11-02):** StepFun's current rate card lists ¥7 input / ¥20 output per 1M tokens and ¥0.70 cached input; common global hosted listings show about $1/$2.70 per 1M tokens.
- **Architecture:** Approximately 600B total parameters with 27B active per token, using sparse MoE routing.

## Raw benchmarks found

- BenchLM snapshot (2026-10-29): composite **56.15/100**, rank **#62/1004**, with 48 of 724 benchmarks covered; the page marks coverage as partial. ([BenchLM Step 5 Preview](https://benchlm.ai/models/step-5-preview))
- Terminal-Bench 2.1: **85.0%**; Terminal-Bench 4.0: **33.30%**; CyberGym: **84.7%**; MCP Atlas: **85.6%**; JobBench: **59.0%**. ([BenchLM Step 5 Preview](https://benchlm.ai/models/step-5-preview))
- AA-LCR: **88.3%**; CritPt: **20.9%**; MLCR-AA: **18.3%**; MMMU-Pro: **76.0%**. ([BenchLM Step 5 Preview](https://benchlm.ai/models/step-5-preview))
- StepFun reports StepCodeBench **49.0**, ProgramBench **80.5**, and its Terminal-Bench v4 comparison at **33.3** for the high-effort configuration. ([StepFun technical page](https://www.stepfun.com/step-5-preview))

## Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1, MCP Atlas, and CyberGym are strong, but the much lower Terminal-Bench 4.0 result shows harness/version sensitivity. ([BenchLM Step 5 Preview](https://benchlm.ai/models/step-5-preview))
- **Reasoning: 82/100.** AA-LCR at 88.3% is strong, while CritPt and MLCR-AA are materially weaker than a clean frontier profile. ([BenchLM Step 5 Preview](https://benchlm.ai/models/step-5-preview))
- **Context window: 96/100.** The native 1M context is frontier-sized; no public retrieval-quality result justifies a 100. ([StepFun model documentation](https://platform.stepfun.com/docs/zh/guides/models/step-5-preview))
- **Multimodal: 80/100.** Native image/video input and MMMU-Pro at 76% support meaningful multimodal capability, with text-only output. ([StepFun model documentation](https://platform.stepfun.com/docs/zh/guides/models/step-5-preview), [BenchLM Step 5 Preview](https://benchlm.ai/models/step-5-preview))
- **Coding: 82/100.** Terminal-Bench 2.1 at 85.0% and ProgramBench at 80.5 are strong, but StepCodeBench and Terminal-Bench v4 are lower and should not be conflated with the 2.1 result. ([StepFun technical page](https://www.stepfun.com/step-5-preview))
- **Cost efficiency: 86/100.** Global hosted prices around $1/$2.70 are attractive for a 1M-context reasoning model, although the direct StepFun rate card is region- and currency-specific. ([StepFun pricing](https://platform.stepfun.com/docs/zh/guides/pricing/details), [OpenCode Data](https://opencode.ai/data/stepfun/step-5-preview))
- **Overall Score: 84.8/100.** Arithmetic mean of Tool use 84, Reasoning 82, Context window 96, Multimodal 80, and Coding 82; cost efficiency is excluded.

## Evidence notes

- Terminal-Bench 2.1 and Terminal-Bench 4.0 are retained as separate measurements. The preview label, hosted configuration, and reasoning effort materially affect reproducibility.

## Signature
- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-11-02
- Method: current public web research; normalized interpretations, not official vendor scores.
