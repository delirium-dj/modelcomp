# Ember-1 — findings by GPT 5.6 Luna

- Source: Fireworks Research / Ember-1
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's specialized reasoning model, built on Kimi K3 and tuned to reach comparable answers with shorter reasoning traces.
- **Provider / access:** Fireworks Serverless research preview; also exposed through gateways as `fireworks/ember-1`.
- **Release / knowledge:** Fireworks metadata lists 2026-09-22 creation and the launch post is dated 2026-09-23; knowledge cutoff is not published.
- **IDs:** `accounts/fireworks/models/ember-1` (Fireworks) and `fireworks/ember-1` (gateway route).
- **Context window:** 1,048,576 tokens (Fireworks lists approximately 1.04M).
- **Modalities:** Text and image input, text output; reasoning and function/tool calling are supported.
- **Pricing (as of 2026-11-02):** Fireworks Standard $3.00 input / $0.30 cached input / $15.00 output per 1M tokens; the advertised savings are primarily from shorter traces rather than a lower list price.
- **Architecture:** Closed Fireworks derivative of Kimi K3; Fireworks metadata lists a 2.78T-parameter MoE model.

## Raw benchmarks found

- BenchLM snapshot (2026-10-29): no public composite score; 5 source-displayable rows, therefore unranked. ([BenchLM Ember-1](https://benchlm.ai/models/ember-1))
- Terminal-Bench 2.1: **82.0%**; τ²-bench Airline: **66.0%**. ([Fireworks launch post](https://fireworks.ai/blog/ember-1))
- SWE-bench Verified: **92.2%**; DeepSWE: **75.2%**. ([Fireworks launch post](https://fireworks.ai/blog/ember-1))
- Fireworks' production A/B example reports a comparable task score of **0.753** versus Kimi K3's **0.751**, with output tokens falling from **49.3K** to **29.9K**. ([Fireworks launch post](https://fireworks.ai/blog/ember-1))

## Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 at 82.0% and τ²-bench Airline at 66.0% support strong agentic use, while the public tool set is still small. ([Fireworks launch post](https://fireworks.ai/blog/ember-1))
- **Reasoning: 82/100.** The Kimi K3 lineage and comparable-quality, shorter-trace result are credible, but no broad independent reasoning suite is published. ([Fireworks launch post](https://fireworks.ai/blog/ember-1))
- **Context window: 96/100.** The advertised 1.04M-token window is frontier-sized, without a public retrieval-quality result at that length. ([Fireworks model page](https://fireworks.ai/models/fireworks/ember-1))
- **Multimodal: 70/100.** Image input is supported, but the documented output remains text and no broader audio/video capability is established. ([Fireworks model page](https://fireworks.ai/models/fireworks/ember-1))
- **Coding: 89/100.** SWE-bench Verified at 92.2%, DeepSWE at 75.2%, and Terminal-Bench 2.1 at 82.0% make coding the strongest evidenced use case. ([Fireworks launch post](https://fireworks.ai/blog/ember-1))
- **Cost efficiency: 70/100.** The $3/$15 list price is expensive per token, but Fireworks reports roughly 35–50% fewer tokens on comparable tasks. ([Fireworks pricing](https://docs.fireworks.ai/serverless/pricing), [Fireworks launch post](https://fireworks.ai/blog/ember-1))
- **Overall Score: 84.4/100.** Arithmetic mean of Tool use 85, Reasoning 82, Context window 96, Multimodal 70, and Coding 89; cost efficiency is excluded.

## Evidence notes

- BenchLM's unranked status reflects sparse public coverage, not an absence of evidence. The benchmark rows above are primarily Fireworks-reported, so the score is intentionally below an independently replicated frontier rating.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-11-02
- Method: current public web research; normalized interpretations, not official vendor scores.
