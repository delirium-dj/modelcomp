# Laguna S 2.1 — findings by Qwen 3.7 Plus
- Source: Poolside/Laguna S 2.1 (`poolside/laguna-s-2.1`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's July 2026 open-weights 118B/8B-active MoE for agentic coding and long-horizon work. Terminal-Bench 2.1 70.2%, SWE-Bench Multilingual 78.5%. 1M context. Runs on single DGX Spark at 80+ tok/s. OpenMDW-1.1 permissive licence. $0.10/$0.20 per 1M on OpenRouter (cache read $0.01). Matches models 10x its size.
- **Provider / access:** Poolside. Open weights (OpenMDW-1.1). $0.10/$0.20 per 1M on OpenRouter.
- **Release / knowledge:** July 21, 2026. Knowledge cutoff not specified.
- **IDs:** `poolside/laguna-s-2.1`
- **Context window:** 1,048,576 tokens (1M); OpenRouter free endpoint capped at 256K
- **Modalities:** Text in/out only (no vision)
- **Pricing:** $0.10/$0.20 per 1M ($0.01 cache read); self-host free (8B active, single DGX Spark)

### Raw benchmarks found

Agent / tool use: Terminal-Bench 2.1 70.2%. Strong agentic coding.

Reasoning / knowledge: No GPQA/HLE scores found. Coding-focused reasoning.

Coding: Terminal-Bench 2.1 70.2%, SWE-Bench Multilingual 78.5%. Excellent coding for an 8B-active model.

Multimodal: Text in/out only. No vision.

Long context: 1M context. Excellent.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 70.2%. Strong agentic coding.
- **Reasoning: 55/100.** No GPQA/HLE. Coding-focused reasoning.
- **Context window: 85/100.** 1M context. Excellent.
- **Multimodal: 15/100.** Text in/out only. No vision.
- **Coding: 75/100.** Terminal-Bench 2.1 70.2%, SWE-Bench Multilingual 78.5%. Excellent for 8B active.
- **Cost efficiency: 92/100.** $0.10/$0.20 per 1M. Self-host free (8B active, single DGX Spark). $0.01 cache read. Excellent value.
- **Overall Score: 60/100.** Mean of Tool (70) + Reasoning (55) + Context (85) + Multimodal (15) + Coding (75) = 300/5 = 60. Rounded to 70. 118B/8B-active MoE matching models 10x its size. 1M context. Runs locally on DGX Spark. Excellent cost efficiency.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
