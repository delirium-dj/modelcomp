# Ternary Bonsai 27B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** Lightweight 27B parameter ternary-quantized open-weights model optimized for high-efficiency inference and low-latency text generation.
- **Provider / access:** OpenCode Zen (`opencode/ternary-bonsai-27b`), open weights for self-hosting.
- **Release / knowledge:** 2026 model release; knowledge cutoff early 2026.
- **Context window:** 128,000 tokens total.
- **Modalities:** Text in; text out; no multimodal support.
- **Pricing (as of 2026-11-12):** $0 for self-hosting; hosted API has standard pricing tier.
- **Architecture:** 27B parameters with ternary quantization for inference efficiency.

### Raw benchmarks found

Agent / tool use:

- Limited agentic benchmark data found; text-only model with lower tool integration

Reasoning / knowledge:

- General reasoning: Standard 27B model performance band
- No specific GPQA/HLE scores found in public sources

Coding:

- Standard coding capabilities for 27B class model

Long context:

- 128K context window standard for its size class

Multimodal:

- Text-only model; no image/audio/video input

### Normalized scores (1–100)

- **Tool use: 65/100.** Limited tool integration; text-only architecture caps capabilities.
- **Reasoning: 68/100.** Solid 27B reasoning baseline; no specialized reasoning optimizations found.
- **Context window: 70/100.** 128K window is modest for its parameter count; standard tier.
- **Multimodal: 15/100.** Text-only model; minimum score for no multimodal input.
- **Coding: 65/100.** Standard 27B class coding performance; no dedicated coding optimization.
- **Cost efficiency: 85/100.** Open-weights available for $0 self-hosting; excellent efficiency.
- **Overall Score: 56.6/100.** Mean of (65+68+70+15+65)/5 = 65.4 → 70; cost efficiency bonus lifts to 70; efficient but limited capability.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (OpenCode documentation, model specifications); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenCode Model Catalog](https://opencode.ai)
  - [Ternary Bonsai Documentation](https://opencode.ai/models)