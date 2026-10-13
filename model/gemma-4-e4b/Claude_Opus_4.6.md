# Gemma 4 E4B — findings by Claude Opus 4.6

- Source: Google DeepMind / Gemma 4 E4B
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's edge-optimized open model (~4.4B dense). "E" = Effective/Efficient. Runs on Raspberry Pi, Jetson, mobile. 128K context (huge for sub-5B). Native image + audio input. Function calling, extended thinking. 2.2x MTP speedup on mobile GPUs. Apache 2.0.
- **Provider / access:** Hugging Face, Ollama, LM Studio, LiteRT-LM. Apache 2.0 open weights.
- **Release / knowledge:** 2026.
- **IDs:** `google/gemma-4-e4b-it`
- **Context window:** 128,000 tokens.
- **Modalities:** Text, image, audio in; text out. Function calling, JSON decoding, multi-step planning, extended thinking.
- **Pricing (as of 2026-10-13):** $0 self-hosted (Apache 2.0). Runs on mobile/edge.
- **Architecture:** ~4.4B dense. Hybrid attention (local sliding window + global). Per-Layer Embeddings. Multi-Token Prediction (2.2x mobile GPU speedup). Apache 2.0.

### Raw benchmarks found

- MMLU: **69.4%** (source: deepmind.google)
- MMMU Pro: **52.6%** (source: deepmind.google)
- AIME 2026: **42.5%** (source: deepmind.google)
- LiveCodeBench v6: **52.0%** (source: deepmind.google)
- GPQA Diamond: **58.6%** (source: deepmind.google)
- τ²-bench Retail: **57.5%** (source: deepmind.google)
- MATH-Vision: **59.5%** (source: wavespeed.ai)

### Normalized scores (1–100)

- **Tool use: 68/100.** Native function calling. τ²-bench 57.5% is strong for 4.4B. Multi-step planning. Extended thinking. Remarkable for edge.
- **Reasoning: 66/100.** GPQA Diamond 58.6%, AIME 42.5%. Impressive for sub-5B. Extended thinking helps. Cannot match larger models.
- **Context window: 65/100.** 128K verified (ref: 128K = 65). Revolutionary for sub-5B edge model.
- **Multimodal: 72/100.** Text + image + audio in; text out. Triple modality on edge hardware. Variable aspect ratio vision. ASR. No video.
- **Coding: 68/100.** LiveCodeBench v6 52.0% is remarkable for 4.4B. Function calling aids coding workflows. Edge-class coding.
- **Cost efficiency: 99/100.** Apache 2.0. Runs on Raspberry Pi, mobile, Jetson. ~4.4B = minimal VRAM. MTP 2.2x speedup. Free.
- **Overall Score: 68/100.** Mean of (68 + 66 + 65 + 72 + 68) / 5 = 67.8, rounded to 68. Extraordinary edge model — triple multimodal + 128K context + function calling on a Raspberry Pi. Benchmarks impressive for the size class.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (deepmind.google, gemma4.dev, huggingface.co, wavespeed.ai, ollama.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
