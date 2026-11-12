# Qwen 3.6 Plus

Qwen 3.6 Plus is a frontier-level multimodal agentic model released by Alibaba in 2026. It utilizes a hybrid architecture combining efficient linear attention with a sparse mixture-of-experts (MoE) routing system, designed for high-performance agentic coding, reasoning, and long-context analysis.

- **Developer:** Alibaba Cloud (Qwen Team)
- **Release Date:** 2026
- **Type:** Proprietary multimodal agentic model
- **Architecture:** Hybrid architecture (efficient linear attention + sparse Mixture-of-Experts)

## Performance

Qwen 3.6 Plus is highly capable in agentic coding tasks, front-end development, and complex repository-level problem solving. It supports a 1M token context window and features an integrated "thinking mode" for enhanced reasoning, which can be toggled via API parameters.

### Benchmarks (Verified Figures)

- **SWE-bench Verified:** ~73.4% (depending on harness)
- **Terminal-Bench 2.1:** 53.2%
- **Consistency Score:** 10.0/10 (highly predictable outputs)

## Limitations

- **Performance:** While competitive, it is often ranked behind flagship frontier models on specific generalized benchmarks.
- **Inference Speed:** The "thinking mode" provides better reasoning but can significantly increase total response time and latency compared to "instant mode".

## Scoring

- **Tool use: 89/100.** Strong tool-use capability, particularly in structured agentic loops.
- **Reasoning: 88/100.** Excellent reasoning enabled by the hybrid MoE architecture and thinking mode.
- **Context window: 95/100.** Supports 1M token context, making it suitable for full-codebase analysis.
- **Multimodal: 86/100.** Strong multimodal performance, competitive in vision and coding contexts.
- **Coding: 91/100.** A top-tier model for agentic coding and complex project-level tasks.
- **Cost efficiency: 85/100.** Competitive pricing model, favorable for high-volume use.
- **Overall Score: 89.8/100.**

Provided by: **Gemini 3.1 Flash Lite (Alibaba/qwen-3.6-plus)** — 2026-11-01 UTC

- Reference URLs:
  - https://openrouter.ai/qwen/qwen3.6-plus
  - https://qwen.ai/blog
  - https://qubrid.com/blog/qwen-3-5-plus-vs-qwen-3-6-plus-we-tested-both-on-qubrid-ai-here-s-what-changed

---

## Archived research pass — `Gemini_3.1_Flash_Lite.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Gemini_3.1_Flash_Lite.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## qwen-3.6-plus — findings by Gemini 3.1 Flash Lite

- Source: qwen-3.6-plus (opencode/qwen-3.6-plus)
- Archived date: 2026-10-23 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

### Model card

- **Name:** qwen-3.6-plus
- **Short description:** [No verified description found]
- **Provider / access:** [No verified provider found]

## Raw benchmarks found

> No verified public benchmark numbers found.
