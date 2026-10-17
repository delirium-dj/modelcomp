# Nemotron 3 Nano Omni — findings by Laguna S 2.1

- Source: NVIDIA / Nemotron 3 Nano Omni (arXiv:2604.24954; HF: nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni (30B-A3B MoE, ~3B active params per token)
- **Short description:** NVIDIA's open 30B-A3B Mamba2-Transformer hybrid MoE omni-modal model with native audio, vision, video, and text understanding. Supports tool calling and reasoning mode (on by default).
- **Provider / access:** NVIDIA Build free API endpoint; open checkpoints on Hugging Face (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-{BF16,FP8,NVFP4}`) and NGC.
- **Release / knowledge:** Released 2026-04-28 via Build.NVIDIA.com, Hugging Face, and NGC.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8` (HF); `opencode/nemotron-3-nano-omni` (free API via NVIDIA Build)
- **Context window:** 256,000 total tokens
- **Modalities:** Text, Image, Video, Audio (in); Text (out)
- **Pricing (as of 2026-10-16):** $0 via NVIDIA Build free API; open checkpoints available for self-hosting
- **Architecture:** Mamba2-Transformer hybrid Mixture of Experts (MoE); 3.1×10¹⁰ parameters (31B), ~3B active per token

### Raw benchmarks found

All benchmarks are verified public scores from the official Hugging Face model card (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8`), with release date 2026-04-28.

| Task | Benchmark | Score |
|---|---|---|
| Grounding | CVBench2D | 83.95 |
| Document | OCRBenchV2 (EN) | 67.04 |
| Computer Use | OSWorld | 47.4 |
| Chart Reasoning | Charxiv Reasoning | 63.6 |
| Multi-Image Reasoning | MMlongBench Doc | 57.5 |
| Math Reasoning | MathVista_MINI | 82.8 |
| OCR Reasoning | OCR_Reasoning | 54.14 |
| Video Q/A | Video MME | 72.2 |
| Video + Audio Q/A | World Sense | 55.4 |
| Video + Audio Q/A | Daily Omni | 74.52 |
| Speech Instruction Following | Voice interaction | 89.39 |

Sources checked:
- Hugging Face model card: `https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8` (11 verified benchmarks published 2026-04-28)
- Artificial Analysis: 404 (model page not indexed as of 2026-10-16)
- BenchLM: 404
- ArXiv paper: arXiv:2604.24954 (references multimodal evaluation benchmarks only)

No text-only reasoning benchmarks (HLE, GPQA, SWE-bench, LiveCodeBench) are published for this model. No coding benchmarks are published.

### Normalized scores (1–100)

- **Tool use: 76/100** — OSWorld 47.4% is strong for a 30B-A3B model (~3B active params); competitive with larger frontier models. No other agentic tool benchmarks (TB2, τ²-bench, MCP-Atlas) published.
- **Reasoning: 78/100** — No text-only reasoning benchmarks (HLE, GPQA, LCR, Intelligence Index) published. Multimodal reasoning benchmarks (Charxiv 63.6%, MathVista 82.8%) indicate solid reasoning capability. Reasoning mode is on by default with chain-of-thought output.
- **Context window: 100/100** — 256,000 token context window places this in the top tier for context length.
- **Multimodal: 92/100** — Supports text, image, video, and audio input; text output. Covers all modality combinations (text+image, text+video, text+audio, text+video+audio) with 11 multimodal benchmarks across vision, video, and speech tasks.
- **Coding: 15/100** — No verified public coding benchmarks (SWE-bench, LiveCodeBench, DeepSWE, SciCode) published.
- **Cost efficiency: 100/100** — Free via NVIDIA Build API endpoint and open-weight checkpoints; no per-token cost barrier.

**Overall Score: 72/100**

### Conflict handling

The `.md.excluded` file (dated 2026-10-08) self-excluded citing "no verified public benchmark scores." This was resolved by fresh research on 2026-10-16: the official Hugging Face model card (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8`) published 11 verified multimodal benchmarks on 2026-04-28 alongside the model release. Artificial Analysis, BenchLM, and NGC catalog pages remain 404, but the HF model card is an authoritative primary source.

The `.md.excluded` file's model card attributes (30B-A3B, 256k context, $0 API) are confirmed accurate by the HF model card.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-16 (UTC)
- Method: public internet research; 11 verified public multimodal benchmark scores from official Hugging Face model card.
- Sources: Hugging Face model card (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8`), arXiv:2604.24954.
