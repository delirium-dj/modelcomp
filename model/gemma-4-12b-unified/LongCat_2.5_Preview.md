# Gemma 4 12B Unified — findings by LongCat 2.5 Preview

- Source: Google DeepMind/gemma-4-12B
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's encoder-free multimodal open-weight model that brings frontier-class intelligence to laptops. 11.95B dense transformer handling text, images, audio, and video in a single decoder-only stack. Runs locally on 16GB VRAM. Apache 2.0 license.
- **Provider / access:** Hugging Face (`google/gemma-4-12B`, `google/gemma-4-12B-it`), Ollama (`gemma4:12b`), Google Cloud Model Garden, Cloud Run, GKE, LM Studio, LiteRT-LM.
- **Release / knowledge:** 2026-06-03; knowledge cutoff January 2025.
- **IDs:** `google/gemma-4-12B` (base), `google/gemma-4-12B-it` (instruction-tuned), `google/gemma-4-12B-it-assistant` (MTP drafter)
- **Context window:** 262,144 tokens (256K) — verified via Google AI docs, Ollama, ApX.
- **Modalities:** Text, Image, Audio, Video input; Text output. Reasoning: yes (configurable thinking mode). Tool calling: yes (native function calling). Up to 30s audio, 60s video (1 fps).
- **Pricing (as of 2026-10-09):** ~$0.10/1M input, ~$0.30/1M output (ApX). Apache 2.0 open weights for self-hosting. Runs on consumer laptops with 16GB VRAM.
- **Architecture:** 11.95B dense transformer, 48 layers, hybrid local (sliding window 1024) + global attention, hidden dimension 3840, vocabulary 262K. Encoder-free: raw image patches and audio waveforms projected directly into embedding space via lightweight linear layers. Multi-Token Prediction (MTP) drafters for speculative decoding.

### Raw benchmarks found

Agent / tool use:

- Native function calling: supported (Google AI docs)
- Codeforces ELO: **1659** (Ollama — vs Gemma 4 26B A4B 1718, Gemma 4 31B 2150, Gemma 3 27B 110)
- TAU2 (CloudPrice): **0.4 / #229**
- TerminalBench Hard (CloudPrice): **0.2 / #165**

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (Google, BenchLM — vs Gemma 4 26B A4B, Claude Sonnet 4.6 89.9%)
- AIME 2026 (no tools): **77.5%** (Google, BenchLM — vs Gemma 4 26B A4B 88.3%, Gemma 4 31B 89.2%, Gemma 3 27B 20.8%)
- MMLU Pro: **77.2%** (Google — vs Gemma 4 26B A4B 82.6%, Gemma 4 31B 85.2%, Gemma 3 27B 67.6%)
- BigBench Extra Hard: **53%** (BenchLM)
- HLE (no tools): **5.2%** (BenchLM)
- MMMLU: **83.4%** (Ollama)
- Intelligence Index (ApX): **0.09 / #221**
- Intelligence Index (CloudPrice): **14.2 / #232**

Coding:

- LiveCodeBench v6: **72.0%** (Google, BenchLM — vs Gemma 4 26B A4B 77.1%, Gemma 4 31B 80.0%, Gemma 3 27B 29.1%)
- Coding Index (ApX): **0.31 / #122**
- Coding Index (CloudPrice): **31.0 / #117**
- SciCode (CloudPrice): **0.4 / #205**

Long context:

- Context window: **262,144 tokens** (256K) — verified via Google AI docs, Ollama, ApX
- MRCR v2 (8 needle, 128K): **43.4%** (BenchLM)
- LCR (CloudPrice): **0.6 / #178**

Multimodal:

- DocVQA: **94.9%** (Google)
- InfoVQA: **88.4%** (Google)
- MMMU Pro: **69.1%** (BenchLM — vs Gemma 4 26B A4B 73.8%)
- MathVision: **79.7%** (BenchLM)
- FLEURS: **93.1%** (Ollama)
- MedXpertQA (MM): **48.7%** (BenchLM)
- Text, Image, Audio, Video input (Google AI docs, Hugging Face)

### Normalized scores (1–100)

- **Tool use: 60/100.** Native function calling, Codeforces ELO 1659. Below average on agentic benchmarks (TAU2 #229, TerminalBench Hard #165). Capable but not competitive with frontier models on complex agent tasks.
- **Reasoning: 68/100.** GPQA 78.8%, AIME 2026 77.5%, MMLU Pro 77.2%. Good reasoning for a 12B model, approaching 26B MoE performance but trailing frontier models.
- **Context window: 82/100.** 256K token context. Good long-context capability, though MRCR v2 (43.4%) is below average.
- **Multimodal: 72/100.** Text, Image, Audio, Video input with encoder-free architecture. DocVQA 94.9%, InfoVQA 88.4%. Strong document/image understanding but MMMU-Pro (69.1%) is below frontier.
- **Coding: 65/100.** LiveCodeBench v6 72.0%, Codeforces ELO 1659. Decent coding for a 12B model, trails larger models.
- **Cost efficiency: 93/100.** ~$0.10/$0.30 per 1M tokens — extremely affordable. Apache 2.0 open weights. Runs on consumer laptops with 16GB VRAM. Exceptional value.
- **Overall Score: 69/100.** Mean of Tool (60), Reasoning (68), Context (82), Multimodal (72), Coding (65) = 347/5 = 69.4 → 69. Excellent value open-weight multimodal model for local deployment, approaching 26B performance at less than half the memory footprint.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
