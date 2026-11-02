# Claude Opus 4.8 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Opus 4.8
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's former flagship reasoning and coding model for advanced software engineering, research, and agent work. It remains available as a legacy model while newer Opus releases are current.
- **Provider / access:** Anthropic Claude API and cloud partners, including Bedrock and Vertex AI; API ID `claude-opus-4-8`. Messages API access includes adaptive thinking and tools.
- **Release / knowledge:** Released May 28, 2026; the current Anthropic platform page lists a January 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-4-8` and Anthropic API ID `claude-opus-4-8`.
- **Context window:** 1,000,000 tokens; maximum output 128,000 tokens.
- **Modalities:** Text and image input, text output, adaptive thinking, and tool calls.
- **Pricing (as of 2026-11-02):** $5 input / $25 output per 1M tokens. The platform documentation describes the price as unchanged for this legacy model.
- **Architecture:** Proprietary; parameter count and internal architecture undisclosed.

## Raw benchmarks found

Current independent aggregation is broader than the earlier single-comparison snapshot; harness and effort differences remain material.

- BenchLM overall: **69.63/100, #16 of 1,004**, with 64 of 724 benchmark rows covered.
- LiveCodeBench: **87.8%** (Vals AI leaderboard via BenchLM).
- SWE-bench: **88.6%** (Vals AI leaderboard via BenchLM).
- Artificial Analysis Coding Index: **74.3%** (via BenchLM).
- PostTrainBench v1.1: **32.9%** and FrontierCode 2.0: **14.7%** (current BenchLM profile).
- Terminal-Bench 2.1: **87.0%** and ARC-AGI-2: **89.2%** (independent comparison reporting; exact harnesses differ from the current BenchLM rows).
- Context window: **1M tokens** and maximum output **128K** (Anthropic platform documentation).
- Independent WorkBench reporting found **89% completion** but also a **2.5% unintended harmful-action rate**; this is an agent evaluation, not a raw capability score.

## Normalized scores (1–100)

- **Tool use: 91/100.** Strong agent/tool positioning plus Terminal-Bench and WorkBench results support a high score, with the safety tradeoff and harness variance preventing a top score.
- **Reasoning: 92/100.** ARC-AGI-2 at 89.2% and strong current aggregate placement indicate excellent reasoning; the public evidence is not uniform across task families.
- **Context window: 96/100.** The 1M-token window and 128K output are verified; no independent full-window retrieval curve was found.
- **Multimodal: 86/100.** Image input and text output are verified, but audio/video support and broad multimodal benchmark coverage were not established.
- **Coding: 92/100.** SWE-bench 88.6%, LiveCodeBench 87.8%, and earlier Terminal-Bench 87.0% are frontier-grade, while FrontierCode 14.7% shows meaningful benchmark spread.
- **Cost efficiency: 76/100.** $5/$25 is expensive but competitive for a frontier legacy model with a 1M context.
- **Overall Score: 91.4/100.** Mean of the five quality dimensions `(91 + 92 + 96 + 86 + 92) / 5 = 91.4`; best fit is demanding coding, research, and long-running agents.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Anthropic platform and launch documentation, BenchLM's October 29 independent aggregation, and the previously located independent comparison/system-card evidence; benchmark harness differences are retained rather than averaged away, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Anthropic Claude Opus 4.8 platform documentation](https://platform.claude.com/docs/en/models/opus-4-8/overview)
  - [Anthropic Opus 4.8 announcement](https://www.anthropic.com/news/claude-opus-4-8)
  - [BenchLM Claude Opus 4.8 profile](https://benchlm.ai/models/claude-opus-4-8)
