# Qwen 3.8 Flash — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `qwen-3.8-flash` (Qwen3.8-Flash-Next / Qwen 3.8 Flash family, Alibaba/Qwen) — folder: `model/qwen-3.8-flash`

## Overall
- **Overall Score: 86/100.** Efficient multimodal sparse-MoE model with strong coding/agent benchmark results and long-context support per Qwen's model card, designed for high-throughput workloads at lower cost than flagship lanes.

## Scores
- **Tool use: 84/100.** Built for agentic scenarios and shows strong agent benchmark performance (e.g. CoWorkBench 73.9, JobBench 55.7, Toolathlon Verified Pass@1 73.5, Agents' Last Exam Pass@1 24.3 / Score 51.2) with support in common inference frameworks/APIs.
- **Reasoning: 83/100.** Thinking mode is supported by default with adjustable reasoning effort; benchmark results indicate strong general/reasoning performance for its class (e.g. GPQA Diamond 91.7, HLE 35.9, IFBench 81.3) though it targets efficiency over maximal frontier depth.
- **Context window: 90/100.** Qwen states 262,144 native context length, extensible up to 1,000,000 tokens (with YaRN/framework support), enabling long-horizon tasks while keeping base efficiency high.
- **Multimodal: 86/100.** Official model card is image-text-to-text and includes image/video input examples and multimodal benchmarks (e.g. AndroidWorld 84.5, OSWorld 2.0 partial 52.3, RealWorldQA 88.5, LVBench 76.6, Vision2Web 64.0).
- **Coding: 87/100.** Strong coding/agentic coding results reported (e.g. DeepSWE 1.1 58.7, SWE-bench Pro 62.5, SWE-bench Multilingual 81.0, NL2Repo-Bench 48.1, LiveCodeBench v6 91.9), making it competitive for efficient software-engineering workflows.
- **Cost efficiency: 92/100.** Sparse MoE design (125B total with ~6B activated, plus n-gram embedding/MTP components) targets cost-efficient inference; repo/meta indicates low API pricing/self-host options and free Qoder access tiers, favoring high-volume use.
- **Overall Score: 82/100.** Excellent efficiency-oriented multimodal coding/agent model with long-context capability, but below the very top flagship models on hardest reasoning tasks and dependent on framework configuration for best long-context behavior.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://huggingface.co/Qwen/Qwen3.8-Flash-Next
  - https://qwen.ai/blog?id=qwen3.8-flash-next
  - https://github.com/QwenLM/Qwen3.8-Flash-Next/blob/main/tech_report.pdf

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/qwen-3.8-flash/meta.json
field: officialUrl
proposed: https://huggingface.co/Qwen/Qwen3.8-Flash-Next
source: https://huggingface.co/Qwen/Qwen3.8-Flash-Next
```