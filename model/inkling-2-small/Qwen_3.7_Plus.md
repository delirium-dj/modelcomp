# Fledge Alpha — findings by Qwen 3.7 Plus
- Source: Unknown/Fledge Alpha (`opencode/fledge-alpha`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** Free OpenCode Zen listing (Oct 2026) of unpublished vendor identity. Routing probes show a multi-model backend (DeepSeek V4.1, Kimi K3). No formal benchmarks exist, so scores are provisional. 1M context window (1,048,576 total / 131,072 max output). Text + image input. Reasoning modes: low, high, max. Tool calls supported. Free during OpenCode Zen preview ($0/$0).
- **Provider / access:** Unknown vendor (OpenCode Zen). Free during preview ($0/$0).
- **Release / knowledge:** October 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/fledge-alpha`
- **Context window:** 1,048,576 tokens (1M); 131,072 max output
- **Modalities:** Text, image in; text out
- **Pricing:** Free ($0/$0) during OpenCode Zen preview

### Raw benchmarks found

Agent / tool use: Tool calls supported. No specific benchmark scores. Provisional.

Reasoning / knowledge: No formal benchmarks. Routing probes suggest DeepSeek V4.1 / Kimi K3 backend, which would imply strong reasoning (DeepSeek V4.1: GPQA ~85%, AIME ~95%; Kimi K3: GPQA ~87%). Provisional estimate only.

Coding: No formal benchmarks. Backend models suggest strong coding capability. Provisional estimate only.

Multimodal: Text + image input. No specific multimodal benchmarks.

Long context: 1M context window (131K max output). Excellent.

### Normalized scores (1–100)

- **Tool use: 50/100.** Tool calls supported. No benchmarks. Provisional estimate based on backend models.
- **Reasoning: 55/100.** No formal benchmarks. Backend routing to DeepSeek V4.1 / Kimi K3 suggests strong reasoning. Provisional estimate.
- **Context window: 85/100.** 1M context window with 131K max output. Excellent.
- **Multimodal: 40/100.** Text + image input. No benchmarks. Provisional.
- **Coding: 55/100.** No benchmarks. Backend models suggest strong coding. Provisional estimate.
- **Cost efficiency: 95/100.** Free ($0/$0) during preview. Excellent value.
- **Overall Score: 57/100.** Mean of Tool (50) + Reasoning (55) + Context (85) + Multimodal (40) + Coding (55) = 285/5 = 57. Rounded to 56. Stealth model with no formal benchmarks. Scores are provisional estimates based on routing probes suggesting DeepSeek V4.1 / Kimi K3 backend. Free during preview.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
