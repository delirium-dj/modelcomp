# Nemotron 3.5 Lightning Free — findings by Qwen 3.7 Plus
- Source: NVIDIA/Nemotron 3.5 Lightning Free (`opencode/nemotron-3.5-lightning-free`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's August 2026 compact open 30B MoE (3B active) for high-volume, low-latency execution in always-on agents. 262K context. Text-only. Tool calls supported. "Pairs with a frontier planner." Free Zen/NVIDIA trial. No formal benchmarks published. Open model.
- **Provider / access:** NVIDIA. Open model. Free Zen/NVIDIA trial.
- **Release / knowledge:** August 11, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/nemotron-3.5-lightning-free`
- **Context window:** 262,144 tokens (262K)
- **Modalities:** Text-only; tool calls; no vision/audio
- **Pricing:** Free Zen/NVIDIA trial

### Raw benchmarks found

Agent / tool use: "For always-on agents." Tool calls supported. "Pairs with a frontier planner." No specific benchmarks.

Reasoning / knowledge: No benchmarks. "Compact... for high-volume execution."

Coding: No benchmarks. Execution layer model.

Multimodal: Text-only. No vision/audio.

Long context: 262K context. Good for agents.

### Normalized scores (1–100)

- **Tool use: 50/100.** Tool calls. "For always-on agents." No benchmarks.
- **Reasoning: 40/100.** No benchmarks. "Compact execution layer."
- **Context window: 70/100.** 262K context. Good.
- **Multimodal: 15/100.** Text-only. No vision/audio.
- **Coding: 35/100.** No benchmarks. Execution layer model.
- **Cost efficiency: 95/100.** Free. Open model.
- **Overall Score: 42/100.** Mean of Tool (50) + Reasoning (40) + Context (70) + Multimodal (15) + Coding (35) = 210/5 = 42. Rounded to 45. 30B/3B MoE. Free. Text-only. For high-volume agents. No benchmarks.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
