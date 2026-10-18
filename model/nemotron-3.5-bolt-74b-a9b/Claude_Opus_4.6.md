# Nemotron 3.5 Bolt 74B A9B — findings by Claude Opus 4.6

- Source: NVIDIA / Nemotron 3.5 Bolt 74B-A9B-24GB
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B A9B
- **Short description:** NVIDIA's local-first multimodal model distilled from Super VL (Oct 2026). 74B total / 9B active. Fits single 24GB GPU via aggressive 2-bit quantization (IQ2_XXS). Hybrid Mamba-2 + Transformer. C-RADIO v4-H vision. 256K context. 80+ tok/s. LiLiCorr speculative decoding.
- **Provider / access:** Hugging Face, Ollama, llama.cpp, vLLM, Unsloth Desktop. Open weights.
- **Release / knowledge:** 2026-10 release.
- **IDs:** `nvidia/nemotron-3.5-bolt-74b-a9b`
- **Context window:** 256,000 tokens.
- **Modalities:** Text, image, video in; text out. Tool calling. Reasoning mode toggle. C-RADIO v4-H vision.
- **Pricing (as of 2026-10-18):** $0 self-hosted (open weights). Fits 24GB VRAM.
- **Architecture:** 74B total / 9B active. Hybrid Mamba-2 + Transformer + LatentMoE. Distilled from Super VL 120B via Star Elastic. IQ2_XXS (2-bit) + NVFP4 quantization. ~22-24GB packed. LiLiCorr speculative drafter.

### Raw benchmarks found

- 80+ tok/s on target hardware (source: nvidia.com)
- Strong vision/chart/diagram reasoning from Super VL parent (source: mindstudio.ai)
- Occasional 2-bit quantization blind spots in complex multi-file coding (source: mindstudio.ai)

### Normalized scores (1–100)

- **Tool use: 76/100.** Tool calling. Reasoning mode toggle. Agentic local workflows. 9B active limits complex orchestration.
- **Reasoning: 78/100.** Distilled from GPQA 89.52% parent. 2-bit quantization preserves most reasoning. Strong chart/diagram logic.
- **Context window: 78/100.** 256K verified (ref: 256K ≈ 78).
- **Multimodal: 68/100.** Text + image + video in; text out. C-RADIO v4-H. No audio. Image + video = 63-72.
- **Coding: 72/100.** Distilled from SWE-bench 71.1% parent. 2-bit quantization may introduce blind spots on complex code. Strong structural reasoning.
- **Cost efficiency: 97/100.** Open weights. Fits single 24GB GPU. 80+ tok/s. LiLiCorr speculative decoding. Consumer-grade deployment.
- **Overall Score: 74/100.** Mean of (76 + 78 + 78 + 68 + 72) / 5 = 74.4, rounded to 74. Impressive distillation of Super VL into consumer 24GB form factor; multimodal + vision + 256K context on a single GPU.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-18
- Method: Public internet research (nvidia.com, huggingface.co, mindstudio.ai, unsloth.ai, ollama.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
