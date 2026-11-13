# Step 5 Preview — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `step-5-preview` (Step 5 Preview, StepFun) — folder: `model/step-5-preview`

## Overall
- **Overall Score: 85.6/100.** Large multimodal MoE preview model (~600B total / 27B active) with 1M context, reasoning/tool-calling support, and domain strengths in professional knowledge work, but preview maturity and uneven benchmark performance limit production confidence.

## Scores
- **Tool use: 84/100.** NVIDIA Build lists function calling and reasoning as supported capabilities; StepFun positions the model for agentic work, long-horizon tool use, software engineering, and professional research workflows.
- **Reasoning: 84/100.** Supports reasoning (recommended high reasoning settings per builder/NVIDIA notes) and is aimed at knowledge work/finance/agentic tasks; reported results show solid but not universally frontier-leading performance.
- **Context window: 96/100.** NVIDIA/StepFun materials indicate up to 1,048,576-token context (with large output potential depending on configuration), enabling very long-context document and agent workflows.
- **Multimodal: 82/100.** Vision-language model accepting text and image inputs with text output, useful for visual development, document/chart understanding, and multimodal professional tasks.
- **Coding: 82/100.** Targeted at repository-level software engineering and agentic execution; repo/meta cites mixed terminal/coding results (e.g. Terminal-Bench 4.0 33.3% noted in meta context), suggesting capability but uneven consistency versus top coding specialists.
- **Cost efficiency: 80/100.** Available for free prototyping on NVIDIA NIM/Build and via paid StepFun API (repo/meta ~$1.00/$2.70 per MTok), offering reasonable access options though not the cheapest for sustained high-volume use.
- **Overall Score: 82/100.** A promising long-context multimodal MoE for agentic and professional knowledge workflows with accessible preview deployment, balanced by preview status and variable coding/benchmark competitiveness.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://build.nvidia.com/stepfun-ai/step-5-preview
  - https://huggingface.co/stepfun-ai/Step-5-Preview
  - https://www.stepfun.com/step-5-preview

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/step-5-preview/meta.json
field: officialUrl
proposed: https://build.nvidia.com/stepfun-ai/step-5-preview
source: https://build.nvidia.com/stepfun-ai/step-5-preview
```