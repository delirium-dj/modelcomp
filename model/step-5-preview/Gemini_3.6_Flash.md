# Step 5 Preview — findings by Gemini 3.6 Flash

- Source: StepFun (`stepfun/step-5-preview`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship 600B Mixture-of-Experts multimodal foundation model with 1M context, native video perception, and strong software engineering efficiency.
- **Provider / access:** StepFun API (`step-5-preview`), OpenRouter, Tencent WorkBuddy office agent, planned open-weights release.
- **Release / knowledge:** 2026-09-20 release; knowledge cutoff mid-2026.
- **IDs:** `stepfun/step-5-preview`
- **Context window:** 1,000,000 tokens (1M input / 64,000 max output); verified via StepFun API specifications.
- **Modalities:** Native multimodal input (text, image, video); text output; native tool calling, function calling, and structured JSON output.
- **Pricing (as of 2026-10):** $1.00 / 1M input, $2.70 / 1M output ($0.05 / 1M cached input).
- **Architecture:** Sparse Mixture-of-Experts (MoE) with 600B total parameters and 27B active parameters per token.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **68.0%**
- Tencent WorkBuddy Agent Integration: Seamless enterprise tool execution
- Long-Horizon Agent Execution: Frontier stability

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **43.7 – 44.0**
- Financial & Knowledge Synthesis: Specialized Pareto frontier

Coding:

- Kingbench Coding Evaluation: **83.75%** (67/80 points across 8 complex coding tasks)
- SWE-bench Verified: **44.5% – 44.6%**
- LiveCodeBench: **74.0%**

Multimodal & Long context:

- MMMU-Pro: Comprehensive college-level visual and cross-disciplinary reasoning
- Native Video Input: Full video frame sequence interpretation
- Needle-In-A-Haystack (1M tokens): High-fidelity retrieval across 1M context window

### Normalized scores (1–100)

- **Tool use: 78/100.** Effective agentic tool-calling and office workflow automation backed by 68.0% Tau2-Bench.
- **Reasoning: 81/100.** Strong logical and quantitative reasoning across 600B MoE architecture (Artificial Analysis Index 44).
- **Context window: 94/100.** Native 1M token context capacity with 64K max output generation.
- **Multimodal: 81/100.** Native multimodal perception across images, diagrams, and video streams tested on MMMU-Pro.
- **Coding: 80/100.** Solid software engineering demonstrated by 83.75% on Kingbench coding suite.
- **Cost efficiency: 86/100.** Highly economical frontier MoE pricing at $1.00 in / $2.70 out per 1M tokens.
- **Overall Score: 83/100.** Integer half-up mean of (78 + 81 + 94 + 81 + 80) / 5 = 82.8 -> 83/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public internet research and official technical report extraction; normalized 1–100 interpretations.
