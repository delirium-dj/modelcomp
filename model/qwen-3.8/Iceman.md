# Qwen 3.8 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `qwen-3.8` (Qwen3.8 / Qwen3.8-2.4T-A95B open-weights family, Alibaba/Qwen) — folder: `model/qwen-3.8`

## Overall
- **Overall Score: 84/100.** High-capability open-weights MoE model (2.4T total / 95B activated) with 262K native context (extensible), strong coding/agent benchmark results, and broad deployment support, though it is text-only in this released checkpoint and requires thinking mode.

## Scores
- **Tool use: 90/100.** Qwen reports strong agentic execution and compatibility with popular harnesses/tools; benchmark table shows high performance on agent/tool-heavy evaluations (e.g. Toolathlon Verified 72.5, Automation-Bench 27.3, CoWorkBench 74.8, SkillsBench 70.2), indicating robust tool-using workflows.
- **Reasoning: 89/100.** Thinking is enabled by default with `reasoning_effort` controls (`xhigh`/`medium`/`low`) and preserved thinking support; strong results on reasoning/capability benchmarks (e.g. GPQA Diamond 92.6, HLE 43.6, IFBench 82.8) for a highly capable open model.
- **Context window: 90/100.** Native 262,144-token context, extensible up to ~1,010,000 tokens per model card, supporting long-horizon tasks (with framework/config considerations for extensions and output budgeting).
- **Multimodal: 60/100.** The released `Qwen3.8-2.4T-A95B` checkpoint described on Hugging Face is text-only and requires thinking mode (multimodal inputs not supported in this artifact), limiting direct multimodal use compared to hosted/other variants.
- **Coding: 91/100.** Excellent coding-agent results reported by Qwen (e.g. Terminal Bench 2.1 86.6, SWE-bench Pro 67.7, DeepSWE 1.1 56.6, FrontierSWE 73.5, AndroidBench 75.1, QwenSWEBench 80.7), making it highly competitive for software engineering and agentic coding.
- **Cost efficiency: 86/100.** Open weights enable self-hosting at infrastructure cost, and API pricing in repo/meta is competitive for its capability class; very large 2.4T MoE deployment still requires substantial serving resources.
- **Overall Score: 87/100.** Top-tier open coding/agent model with strong long-context and reasoning controls, balanced by text-only checkpoint limitations and high infrastructure demands for full-scale serving.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B
  - https://qwen.ai/blog?id=qwen3.8
  - https://www.alibabacloud.com/help/en/model-studio/models

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/qwen-3.8/meta.json
field: modalities
proposed: Text in; text out (Qwen3.8-2.4T-A95B open checkpoint is text-only/thinking-required; verify hosted variants separately)
source: https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B
```