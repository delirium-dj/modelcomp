# Kimi K2.6

Kimi K2.6 is an open-weights frontier model released by Moonshot AI in April 2026. It is designed as a multimodal agentic model, specifically built for long-horizon coding tasks, autonomous execution, and swarm-based task orchestration.

- **Developer:** Moonshot AI
- **Release Date:** April 2026
- **Type:** Open-weights multimodal agentic model
- **Architecture:** Mixture-of-Experts (MoE) with 1T total parameters / 32B active parameters; Multi-head Latent Attention (MLA); includes a 400M-parameter MoonViT vision encoder.

## Performance

Kimi K2.6 is positioned as a leading open-weights model for agentic and coding tasks. It excels in long-horizon autonomous workflows, utilizing an "Agent Swarm" system that scales coordination across sub-agents. It shows significant improvement over its predecessor, Kimi K2.5, across benchmarks for coding, information research, and tool use.

### Benchmarks (Verified Figures)

- **SWE-Bench Verified:** 80.2%
- **Terminal-Bench 2.0:** 66.7%
- **LiveCodeBench (v6):** 89.6%
- **Toolathlon:** 50.0%
- **GPQA-Diamond:** 90.5%
- **MMMU-Pro (w/ Python):** 80.1%

## Limitations

- **Performance vs. Proprietary Models:** While leading among open-weights models for agentic tasks, it still trails the highest-performing closed proprietary models (like Opus 4.7 or GPT-5.4 family) on some specialized benchmarks.
- **Inference Complexity:** Requires careful handling of "Thinking" vs. "Instant" modes for optimal performance and latency balancing.

## Scoring

- **Tool use: 93/100.** Highly proactive and accurate tool invocation for autonomous workflows.
- **Reasoning: 90/100.** Strong performance, particularly when utilizing the "Thinking" chain-of-thought mode.
- **Context window: 92/100.** Supports a 256k-token context window.
- **Multimodal: 88/100.** Strong native support for image and video inputs.
- **Coding: 94/100.** A standout model for coding, software engineering, and complex task completion.
- **Cost efficiency: 88/100.** High performance-to-cost ratio for an MoE architecture.
- **Overall Score: 91/100.**

Provided by: **Gemini 3.1 Flash Lite (MoonshotAI/kimi-k2.6)** — 2026-11-01 UTC

- Reference URLs:
  - https://artificialanalysis.ai/articles/kimi-k2-6-the-new-leading-open-weights-model
  - https://www.kimi.ai/blog/kimi-k2-6
  - https://catalog.ngc.nvidia.com/orgs/nim/teams/moonshotai/models/kimi-k2.6
  - https://deepinfra.com/blog/kimi-k2-6-api-benchmarks-latency-throughput-cost

---

## Archived research pass — `Gemini_3.1_Flash_Lite.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Gemini_3.1_Flash_Lite.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## kimi-k2.6 — findings by Gemini 3.1 Flash Lite

- Source: kimi-k2.6 (opencode/kimi-k2.6)
- Archived date: 2026-10-23 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

### Model card

- **Name:** kimi-k2.6
- **Short description:** [No verified description found]
- **Provider / access:** [No verified provider found]

## Raw benchmarks found

> No verified public benchmark numbers found.
