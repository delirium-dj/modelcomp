# Claude Sonnet 5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Sonnet 5
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's legacy everyday agent and coding model, designed to approach older Opus capability at a lower price. Sonnet 5.5 is now the current Sonnet release.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS, and Claude apps; API ID `claude-sonnet-5`.
- **Release / knowledge:** Released June 30, 2026; reliable knowledge and training cutoffs are January 2026.
- **IDs:** `claude-sonnet-5`; Bedrock and cloud routes use their platform-specific prefixes.
- **Context window:** 1,000,000 tokens; maximum output 128,000 tokens synchronously and up to 300,000 in the documented Batch beta.
- **Modalities:** Text and image input, text output, adaptive thinking, tools, browser/terminal-style agent workflows, and structured outputs.
- **Pricing (as of 2026-11-02):** $2 input / $10 output per 1M tokens. Anthropic made the introductory price permanent; cache reads are $0.20/M and Batch is 50% off.
- **Architecture:** Proprietary; parameter count and internal architecture undisclosed.

## Raw benchmarks found

- BenchLM current profile: **64.25/100, #36 of 1,004**; the site notes partial coverage and a conservative composite.
- CharXiv: **88.3%** (Anthropic Sonnet 5 system card).
- AA-SciCode: **54.3%**; VulcanBench CII v1: **89.2%**; CursorBench 4.0: **34.1%** (current independent rows via BenchLM).
- Vals reports SWE-bench around **82.0%** and Terminal-Bench 2.1 around **69.3%**; these are independent harness results with configuration sensitivity.
- Anthropic's launch evaluation states Sonnet 5 is close to Opus 4.8 on selected agentic, reasoning, coding, and knowledge-work evaluations; exact rows vary by effort setting.
- Context window: **1M tokens** and image-to-text input/output (Anthropic platform documentation).

## Normalized scores (1–100)

- **Tool use: 84/100.** Sonnet 5 is explicitly built for browser/terminal agents and has solid independent terminal/SWE results, but it trails the current Opus/Sonnet 5.5 frontier.
- **Reasoning: 87/100.** Anthropic positions it near Opus 4.8 and the model has strong system-card evidence, though current independent aggregate placement is mid-frontier.
- **Context window: 96/100.** The 1M-token context is verified; no independent full-window retrieval curve was found for the current serving route.
- **Multimodal: 87/100.** Text/image input and CharXiv 88.3% support useful visual reasoning; output remains text and audio/video support is not claimed.
- **Coding: 87/100.** SWE-bench, Terminal-Bench, VulcanBench, and Anthropic's coding evaluations support strong everyday engineering, with suite variance and CursorBench 4.0 limiting the score.
- **Cost efficiency: 91/100.** $2/$10 is competitive for a 1M-context adaptive-thinking model.
- **Overall Score: 88.2/100.** Mean of the five quality dimensions `(84 + 87 + 96 + 87 + 87) / 5 = 88.2`; best fit is everyday coding, research, and agents where Opus-level pricing is not justified.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Anthropic platform/launch documentation, Sonnet 5 system-card evidence, BenchLM's October 29 profile, and Vals/Artificial Analysis rows; scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Claude Sonnet 5 platform documentation](https://platform.claude.com/docs/en/models/sonnet-5/overview)
  - [Anthropic Sonnet 5 announcement](https://www.anthropic.com/research/claude-sonnet-5)
  - [BenchLM Claude Sonnet 5 profile](https://benchlm.ai/models/claude-sonnet-5)
