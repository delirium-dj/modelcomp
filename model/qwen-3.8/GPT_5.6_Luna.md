# Qwen3.8 — findings by GPT 5.6 Luna

- Source: Alibaba/Qwen3.8
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8
- **Short description:** Alibaba's Qwen general model family entry for reasoning and coding.
- **Provider / access:** QwenCloud and downstream providers.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `alibaba/qwen3.8`.
- **Context window:** Large context reported; exact limit not reverified.
- **Modalities:** Text and tools; multimodal support not reverified.
- **Pricing (as of 2026-10-04):** Exact current pricing not reverified.
- **Architecture:** Qwen proprietary/open-family details not reverified.

## Raw benchmarks found

- No fresh independently verified benchmark score found in this run.

## Normalized scores (1–100)

- **Tool use: 76/100.** General agent positioning.
- **Reasoning: 78/100.** Mid-tier Qwen reasoning positioning.
- **Context window: 84/100.** Large context reported, limit unverified.
- **Multimodal: 55/100.** Not reverified.
- **Coding: 77/100.** Coding target, evidence incomplete.
- **Cost efficiency: 85/100.** Pricing evidence incomplete.
- **Overall Score: 74/100.** Validate with a direct workload benchmark.

### Multi-source deep-research addendum (2026-10-09)

- Public coverage describes Qwen 3.8 preview endpoints with roughly 984K context, 131K max output, always-on reasoning, and xhigh as the default. Independent local testing exists for smaller Qwen3.8-27B variants, but it should not be transferred to the Max model.
- Recalculation: retained existing score; the preview documentation and variant fragmentation are insufficient for a dimension change.
- Sources: https://www.reddit.com/r/coursivofficial/comments/1v2hjjl/qwen_38_preview_access_specs_pricing_benchmarks/ ; https://www.reddit.com/r/LocalLLaMA/comments/1vqzl5l/qwen3827b_at_160k_context_on_a_single_rtx_4090/ ; https://www.reddit.com/r/Qwen_AI/comments/1vu8dgd/i_ran_the_benchmarks/

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
