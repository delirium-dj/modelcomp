# Qwen 3.8 27B — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `qwen-3.8-27b` (Qwen3.8-27B, Alibaba/Qwen) — folder: `model/qwen-3.8-27b`

## Overall
- **Overall Score: 89/100.** Compact dense vision-language model (27B) with strong agentic coding/vision benchmarks, 262K native context extensible to 1M, and flexible thinking controls, offering excellent self-hostable capability for its size.

## Scores
- **Tool use: 88/100.** Qwen highlights stronger agent execution and downstream harness compatibility; benchmark results show strong agentic/multimodal tool-use performance (e.g. CoWorkBench 70.7, JobBench 33.4, ClawEval-MM Pass@3 57.4, OSWorld-Verified 84.3, WebArena-Verified 64.8, AndroidWorld 81.9).
- **Reasoning: 87/100.** Thinking mode on by default with `reasoning_effort` controls and preserved thinking; strong text/VL reasoning results (e.g. GPQA Diamond 89.2, HLE 30.8, IFBench 79.5, LiveCodeBench v6 90.3, MathVision 90.0/94.6, BabyVision 65.7/85.6).
- **Context window: 90/100.** 262,144-token native context, extensible up to 1,000,000 tokens with YaRN/framework support, enabling long-horizon text and multimodal workflows when configured appropriately.
- **Multimodal: 90/100.** Native vision-language model supporting image and video understanding; strong VL benchmarks reported (e.g. CharXiv RQ 83.7/90.2, OmniDocBench 1.5 91.1, RealWorldQA 85.9, ERQA 65.5, Vision2Web 62.9, SWE-MM 38.6).
- **Coding: 90/100.** Excellent coding/agentic coding performance for a 27B dense model (e.g. Terminal Bench 2.1 Terminus 73.0, SWE-bench Pro 61.7, NL2Repo-Bench 42.3, DeepSWE 1.1 42.2, QwenSWEBench 79.0), suitable for local and hosted developer workflows.
- **Cost efficiency: 92/100.** Open weights (Apache-2.0) allow free self-hosting on comparatively accessible hardware for its capability class, with API/provider options available; strong performance-per-parameter and deployment flexibility.
- **Overall Score: 86/100.** A standout dense open model for agentic coding and vision with long-context extensibility, trading some frontier depth and very-long-context simplicity for efficiency and deployability.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://huggingface.co/Qwen/Qwen3.8-27B
  - https://qwen.ai/blog?id=qwen3.8
  - https://docs.sglang.io/cookbook/autoregressive/Qwen/Qwen3.8-27B

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/qwen-3.8-27b/meta.json
field: officialUrl
proposed: https://huggingface.co/Qwen/Qwen3.8-27B
source: https://huggingface.co/Qwen/Qwen3.8-27B
```