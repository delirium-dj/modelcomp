# DiffusionGemma 26B A4B — findings by Claude Opus 4.6

- Source: Google DeepMind / DiffusionGemma 26B A4B (`diffusiongemma-26b-a4b`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind's experimental open-weights text-diffusion MoE (25.2B total / 3.8B active) designed for ultra-fast local text generation, OCR, and infilling. Uses a non-autoregressive diffusion-based architecture achieving 1,100+ tok/s. Not designed for agentic or chat workflows.
- **Provider / access:** Self-hosted via Hugging Face, NVIDIA NIM `opencode/diffusiongemma-26b-a4b`. Apache 2.0.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff varies.
- **IDs:** `opencode/diffusiongemma-26b-a4b`
- **Context window:** 256K total (1,024-token sliding window, 256-token canvas; no max-output figure published). Verified via Google AI documentation.
- **Modalities:** Text + image input; text output. Video supported as sampled frames (max 60s at 1 fps). No audio input.
- **Pricing (as of 2026-10-19):** Apache 2.0 open weights (self-host $0, ~24GB VRAM quantized); NVIDIA NIM $0/$0; nano-gpt $0.05/$0.15; Pioneer $0.50/$0.50 per 1M.
- **Architecture:** 25.2B total / 3.8B active (MoE). Non-autoregressive text-diffusion architecture — fundamentally different from standard LLMs. Generates text via iterative denoising rather than token-by-token prediction. Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found — model is not designed for agentic use
- Tau3-Banking: no verified public score found
- Note: DiffusionGemma is a text-diffusion model, not a generative chat/agent model

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- MMLU: no verified public score found
- Note: Standard LLM reasoning benchmarks may not apply to this diffusion-based architecture

Coding:

- SWE-bench Verified: no verified public score found
- HumanEval: no verified public score found
- Note: Model is designed for infilling and OCR, not traditional code generation tasks

Long context:

- Uses 1,024-token sliding window with 256-token canvas. 256K total context but operates via local diffusion windows, not standard attention-based retrieval.

### Normalized scores (1–100)

- **Tool use: 12/100.** Not designed for agentic or tool-use workflows. Diffusion-based architecture lacks the autoregressive reasoning needed for multi-step tool calling. Capped by fundamental architecture limitations for this use case.
- **Reasoning: 18/100.** Non-autoregressive diffusion model not benchmarked on standard reasoning tasks. May handle simple factual queries via infilling but lacks chain-of-thought capability. Capped by architectural design for generation speed over reasoning depth.
- **Context window: 78/100.** 256K total context per tier mapping (256K = 78). However, effective context is limited by the sliding window approach — not true attention over the full window.
- **Multimodal: 62/100.** Supports text + image input and video (as sampled frames, max 60s). No audio. The image/video understanding is a notable capability for a small model. Scored at 62 for text+image+limited video.
- **Coding: 15/100.** Designed for infilling and OCR, not traditional code generation or SWE tasks. May handle simple code completion via diffusion but lacks the reasoning for complex coding. Capped by non-autoregressive architecture.
- **Cost efficiency: 100/100.** Apache 2.0 open weights, self-host free, NVIDIA NIM serves at $0. Ultra-efficient at 3.8B active parameters.
- **Overall Score: 37/100.** Mean of (12 + 18 + 78 + 62 + 15) / 5 = 37.0 → 37. A specialized text-diffusion model excelling at speed (1,100+ tok/s) and multimodal input, but fundamentally not designed for reasoning, coding, or agentic tasks. Best for ultra-fast local text generation and OCR.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing Google AI documentation and meta.json; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
