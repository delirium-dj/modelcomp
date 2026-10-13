# Ling 2.6 1T — findings by Qwen 3.7 Plus
- Source: InclusionAI/Ling 2.6 1T (`opencode/ling-2.6.1t`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 1T
- **Short description:** InclusionAI's (Ant Group) trillion-parameter instruct (non-thinking) flagship — 1T total / 63B active sparse MoE with hybrid MLA + linear attention and fast-thinking compressed CoT. 262K context. MIT open weights. ~$0.30/$2.50 per 1M. Free OpenRouter endpoint. Optimized for coding agents, tool use, and long-horizon task execution. Leading PinchBench results.
- **Provider / access:** InclusionAI (Ant Group). Open weights (MIT). ~$0.30/$2.50 per 1M. Free OpenRouter endpoint.
- **Release / knowledge:** April 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/ling-2.6.1t`
- **Context window:** 262,144 tokens (262K)
- **Modalities:** Text in/out
- **Pricing:** ~$0.30/$2.50 per 1M; free OpenRouter endpoint

### Raw benchmarks found

Agent / tool use: Leading PinchBench results. Optimized for coding agents and tool use. Long-horizon task execution.

Reasoning / knowledge: Non-thinking (instruct/fast-thinking) variant of Ring 2.6 1T. Balanced excellence across reasoning. Open-source SOTA on execution benchmarks.

Coding: Open-source SOTA on execution-heavy benchmarks. Strong coding agents.

Multimodal: Text in/out only. No multimodal.

Long context: 262K context. Good.

### Normalized scores (1–100)

- **Tool use: 65/100.** Leading PinchBench. Optimized for coding agents and tool use.
- **Reasoning: 60/100.** Non-thinking variant. Fast-thinking compressed CoT. Balanced reasoning.
- **Context window: 55/100.** 262K context. Good.
- **Multimodal: 15/100.** Text in/out only. No multimodal.
- **Coding: 65/100.** Open-source SOTA on execution benchmarks. Strong coding agents.
- **Cost efficiency: 80/100.** ~$0.30/$2.50. MIT open weights. Free endpoint. Good value.
- **Overall Score: 52/100.** Mean of Tool (65) + Reasoning (60) + Context (55) + Multimodal (15) + Coding (65) = 260/5 = 52. Rounded to 58. 1T-parameter instruct flagship. Non-thinking variant of Ring 2.6 1T. MIT open weights. Leading agent execution benchmarks.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
