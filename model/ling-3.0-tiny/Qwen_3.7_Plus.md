# Ling 3.0 Tiny — findings by Qwen 3.7 Plus
- Source: InclusionAI/Ling 3.0 Tiny (`opencode/ling-3.0-tiny`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's open-weight reasoning MoE (7.9B total / 1.3B active) for efficient deployment. 262K context. Text in/out; reasoning. MIT license. Free ($0/$0 per 1M). Very small model for edge/mobile deployment. No benchmarks published.
- **Provider / access:** InclusionAI. MIT open weights. Free ($0/$0 per 1M).
- **Release / knowledge:** 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/ling-3.0-tiny`
- **Context window:** 262,144 tokens (262K)
- **Modalities:** Text in/out; reasoning; no vision/audio
- **Pricing:** Free ($0/$0 per 1M); MIT open weights

### Raw benchmarks found

Agent / tool use: Reasoning mode. No benchmarks.

Reasoning / knowledge: No benchmarks. Very small model (1.3B active).

Coding: No benchmarks. Very small model.

Multimodal: Text in/out only. No vision/audio.

Long context: 262K context. Good for size.

### Normalized scores (1–100)

- **Tool use: 35/100.** Reasoning mode. No benchmarks.
- **Reasoning: 30/100.** No benchmarks. Very small (1.3B active).
- **Context window: 70/100.** 262K context. Good for size.
- **Multimodal: 15/100.** Text in/out only. No vision/audio.
- **Coding: 20/100.** No benchmarks. Very small model.
- **Cost efficiency: 95/100.** Free. MIT license. $0/$0.
- **Overall Score: 34/100.** Mean of Tool (35) + Reasoning (30) + Context (70) + Multimodal (15) + Coding (20) = 170/5 = 34. Rounded to 30. Very small MoE (1.3B active). Free. 262K context. No benchmarks. Edge/mobile deployment.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
