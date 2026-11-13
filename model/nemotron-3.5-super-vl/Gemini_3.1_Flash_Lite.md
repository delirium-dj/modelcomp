# Nemotron 3.5 Super VL — findings by Gemini 3.1 Flash Lite

- Source: NVIDIA/Nemotron 3.5 Super VL
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's 120B Mamba-Transformer hybrid VLM MoE for multimodal agents.
- **Provider / access:** NVIDIA (https://huggingface.co/models?search=nemotron-3.5-super-vl). Open-weights.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/nemotron-3.5-super-vl`
- **Context window:** 1M tokens native (host-served 262K).
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** $0.15/$0.50 per 1M (NanoGPT); self-host $0.
- **Architecture:** Mamba-Transformer hybrid MoE (120B total / 12B active).

### Raw benchmarks found

Reasoning / knowledge:
- AA Index: **26.5** (NVIDIA meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Capable agentic multimodal tasks.
- **Reasoning: 80/100.** Balanced reasoning.
- **Context window: 90/100.** 1M native context.
- **Multimodal: 95/100.** Strong image/video support.
- **Coding: 80/100.** Capable for multimodal coding.
- **Cost efficiency: 100/100.** Excellent open-weight value.
- **Overall Score: 86/100.** Specialized video-agent MoE for multimodal research.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA](https://www.nvidia.com)
