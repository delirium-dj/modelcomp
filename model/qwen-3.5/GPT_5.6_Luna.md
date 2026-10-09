# Qwen3.5 — findings by GPT 5.6 Luna

- Source: Alibaba/Qwen3.5
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5
- **Short description:** Qwen family reasoning and coding model entry.
- **Provider / access:** QwenCloud and downstream providers.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `alibaba/qwen3.5`.
- **Context window:** Exact current limit not reverified.
- **Modalities:** Text and tools; multimodal support not reverified.
- **Pricing (as of 2026-10-04):** Exact current pricing not reverified.
- **Architecture:** Qwen family; details not reverified.

## Raw benchmarks found

- No fresh independently verified benchmark score found in this run.

## Normalized scores (1–100)

- **Tool use: 74/100.** General agent positioning.
- **Reasoning: 76/100.** Evidence is limited.
- **Context window: 82/100.** Limit not reverified.
- **Multimodal: 55/100.** Not reverified.
- **Coding: 75/100.** Coding target, current evidence incomplete.
- **Cost efficiency: 85/100.** Pricing evidence incomplete.
- **Overall Score: 72.4/100.** Validate with a direct workload benchmark.

### Multi-source deep-research addendum (2026-10-09)

- Qwen’s official announcement confirms Qwen3.5-397B-A17B as an open-weight model and Qwen3.5-Plus as the hosted variant, with throughput improvements over Qwen3-Max at relevant context lengths. Exact Plus benchmark coverage remains limited.
- Recalculation: retained existing score; open-weight architecture evidence does not transfer directly to the hosted Plus endpoint.
- Sources: https://qwen.ai/blog?email_hash=23463b99b62a72f26ed677cc556c44e8&id=qwen3.5 ; https://arxiv.org/abs/2604.15804

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
