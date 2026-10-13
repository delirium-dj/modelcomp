# Nemotron 3 Nano Omni — findings by Qwen 3.7 Plus
- Source: NVIDIA/Nemotron 3 Nano Omni (`opencode/nemotron-3-nano-omni`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's April 2026 open 30B-A3B omni-modal reasoning model with native audio, vision, and text support. Built on Nemotron 3 Nano 30B-A3B base. GPQA Diamond 39.9%, HLE 4.6%, IFBench 37.5%. 262K context window (65K max output). Free via NVIDIA Build API. Open checkpoints available. Designed for enterprise-grade Q&A across text, image, video, and audio modalities.
- **Provider / access:** NVIDIA. Open weights. Free via NVIDIA Build API endpoint.
- **Release / knowledge:** April 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/nemotron-3-nano-omni`
- **Context window:** 262,144 tokens (262K); 65,536 max output
- **Modalities:** Text, image, video, audio in; text out
- **Pricing:** Free ($0/$0) via NVIDIA Build API

### Raw benchmarks found

Agent / tool use: IFBench 37.5%. Tool calling supported. Moderate instruction-following for a nano model.

Reasoning / knowledge: GPQA Diamond 39.9%, HLE 4.6%. Low reasoning scores for a 30B-A3B model. Designed for efficiency over raw accuracy.

Coding: No specific coding benchmarks found. Limited coding capability inferred from low reasoning scores.

Multimodal: Native text, image, video, and audio support. True omni-modal model. Strong multimodal capability by design.

Long context: 262K context window (65K max output). Good context window.

### Normalized scores (1–100)

- **Tool use: 40/100.** IFBench 37.5%. Tool calling supported. Moderate instruction-following.
- **Reasoning: 30/100.** GPQA Diamond 39.9%, HLE 4.6%. Low reasoning scores. Designed for efficiency, not frontier accuracy.
- **Context window: 60/100.** 262K context with 65K max output. Good.
- **Multimodal: 75/100.** Native text, image, video, and audio support. True omni-modal. One of few models with audio+video+image+text input.
- **Coding: 25/100.** No coding benchmarks. Low reasoning suggests limited coding. Provisional estimate.
- **Cost efficiency: 95/100.** Free ($0/$0) via NVIDIA Build. Open weights for self-hosting. Excellent value.
- **Overall Score: 46/100.** Mean of Tool (40) + Reasoning (30) + Context (60) + Multimodal (75) + Coding (25) = 230/5 = 46. Rounded to 42. Omni-modal model with low reasoning scores. Best suited for multimodal tasks where breadth of input types matters more than raw accuracy.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
