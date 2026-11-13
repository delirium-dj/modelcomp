# Qwen 3.8 Max — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `qwen-3.8-max` (Qwen 3.8 Max / Qwen3.8-2.4T-A95B family, Alibaba/Qwen) — folder: `model/qwen-3.8-max`

## Overall
- **Overall Score: 86/100.** Large open-weight MoE model with very strong coding/agent/reasoning benchmarks and long-context capability per Qwen's model card, but the open weights are text-only/thinking-focused while some hosted "Max" features (e.g. vision, non-thinking mode, built-in tools, default 1M context product behavior) differ from the weight release.

## Scores
- **Tool use: 88/100.** Qwen highlights strong agent execution and broad downstream compatibility for harnesses/tools; benchmark table shows competitive results on agent/tool-heavy evaluations (e.g. SkillsBench 70.2, Toolathlon Verified Pass@1 72.5, Automation-Bench 27.3), though hosted built-in tools are not part of the open weights.
- **Reasoning: 93/100.** Reported strong general/reasoning performance (e.g. GPQA Diamond 92.6, HLE 43.6, FrontierMath Tier 1–3 47.6, ARC/long-context/agentic results in card context) and designed for complex multi-step tasks with adjustable reasoning effort.
- **Context window: 96/100.** Model card states 262,144 native context length extensible up to 1,010,000 tokens (with benchmark results reported at long contexts), supporting long-horizon workflows.
- **Multimodal: 62/100.** The open-weight `Qwen3.8-2.4T-A95B` release is text-only; repo/meta notes indicate hosted Qwen3.8-Max adds vision and other product features, but those multimodal capabilities are not evidenced for the open weights themselves.
- **Coding: 91/100.** Strong coding/agentic coding benchmark results reported (e.g. Terminal Bench 2.1 86.6, SWE-bench Pro 67.7, DeepSWE 1.1 56.6, FrontierSWE 73.5, AndroidBench 75.1, QwenReactBench 1724), indicating high software-engineering capability.
- **Cost efficiency: 82/100.** Open weights enable self-hosting flexibility for a Max-class model, but at 2.4T total / 95B activated parameters it requires substantial compute; hosted pricing/quotas vary by provider and are not fully specified in the primary model card.
- **Overall Score: 87/100.** Excellent reasoning/coding/long-context performance for an open-weight frontier model, tempered by high serving cost and a gap between text-only open weights and hosted multimodal/product feature set.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B
  - https://qwen.ai/blog?id=qwen3.8
  - https://www.qwencloud.com/models/qwen3.8-max

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/qwen-3.8-max/meta.json
field: officialUrl
proposed: https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B
source: https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B
```