# Nemotron 3 Ultra 550B A55B — findings by Gemini 3.1 Flash Lite

- Source: NVIDIA/Nemotron 3 Ultra 550B A55B
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra 550B A55B
- **Short description:** NVIDIA's open 550B/55B LatentMoE with 1M context, optimized for multimodal and video agents.
- **Provider / access:** NVIDIA (https://huggingface.co/models?search=nemotron-3.5-super-vl). Open-weights / hosted.
- **Release / knowledge:** Jun 2026; knowledge cutoff unknown.
- **IDs:** `nvidia/nemotron-3-ultra-free` (Open-weights / Zen)
- **Context window:** 1M tokens total (host-served 262K).
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Free on OpenCode Zen; paid $0.50/$2.50 per 1M (NVIDIA Build).
- **Architecture:** LatentMoE (550B total / 55B active).

### Raw benchmarks found

- RULER (1M): **94.7%** (NVIDIA meta.json)
- SWE-bench Verified: **70.7%** (NVIDIA meta.json)
- LiveCodeBench: **89.0%** (NVIDIA meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** Elite agentic coding performance.
- **Reasoning: 90/100.** Strong reasoning capabilities.
- **Context window: 95/100.** 1M context with verified retrieval.
- **Multimodal: 95/100.** Frontier-grade multimodal (image/video).
- **Coding: 94/100.** Elite coding performance (89.0% LiveCodeBench).
- **Cost efficiency: 100/100.** Free on Zen / open-weights.
- **Overall Score: 93.2/100.** A powerful, versatile agentic model with exceptional value-to-performance.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA](https://www.nvidia.com)
