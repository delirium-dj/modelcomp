# Qwen3.8-Flash — findings by GPT 5.6 Luna

- Source: Alibaba/Qwen3.8-Flash
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash
- **Short description:** Qwen's fast reasoning and coding model.
- **Provider / access:** QwenCloud and downstream providers; exact endpoint not reverified.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `alibaba/qwen3.8-flash`.
- **Context window:** Large context reported; exact limit not reverified.
- **Modalities:** Text reasoning and tools; broad multimodality not reverified.
- **Pricing (as of 2026-10-04):** Exact current rate not reverified.
- **Architecture:** Qwen family; details not reverified.

## Raw benchmarks found

- No fresh independently verified benchmark score found in this run.

## Normalized scores (1–100)

- **Tool use: 78/100.** Fast agent positioning.
- **Reasoning: 80/100.** Strong Qwen Flash tier.
- **Context window: 86/100.** Large window reported.
- **Multimodal: 60/100.** Not reverified.
- **Coding: 80/100.** Coding target, evidence incomplete.
- **Cost efficiency: 88/100.** Flash tier is designed for low cost.
- **Overall Score: 76.8/100.** Validate on the target harness.

### Multi-source deep-research addendum (2026-10-09)

- Public preview coverage reports roughly 984K context, 131K output, and xhigh default reasoning. Independent comparison tables show Qwen 3.8 Flash-Next competing with DeepSeek and GLM on cost/quality, but the model variant and endpoint naming remain unstable.
- Recalculation: retained existing score; evidence is not stable enough for a numeric change.
- Sources: https://www.reddit.com/r/coursivofficial/comments/1v2hjjl/qwen_38_preview_access_specs_pricing_benchmarks/ ; https://www.reddit.com/r/LocalLLaMA/comments/1w5cb0o/benchmarked_deepseek_v4_flash_0731_vs_qwen3_8_flash_next_vs_glm-5-3-flash/ ; https://themodelgap.com/models/qwen3-8-max

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
