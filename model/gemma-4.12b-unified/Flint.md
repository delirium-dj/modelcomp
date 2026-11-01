# Gemma 4 12B Unified — findings by Flint

- Source: Google DeepMind (Google) / Gemma 4 12B Unified
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's encoder-free unified multimodal open-weight reasoning model — a dense ~11.95B-parameter decoder that natively ingests text, image and audio (video via frames) in one transformer, with built-in thinking, a 256K context, and Apache 2.0 open weights; positioned as frontier-class intelligence that runs on a laptop.
- **Provider / access:** Open weights under Apache 2.0 (`google/gemma-4-12B` pre-trained, `google/gemma-4-12B-it` instruction-tuned); Hugging Face Inference (`google/gemma-4-12B-it`); Ollama (`gemma4:12b`, `gemma4:12b-mlx`); LiteRT-LM (`litert-community/gemma-4-12B-it-litert-lm`); Google AI Studio / Gemini API (family docs emphasize the 26B A4B / 31B); Vertex Model Garden; OpenRouter did not list the 12B at launch (listed the 31B instead).
- **Release / knowledge:** Released 2026-06-03 (Google DeepMind / Hugging Face); Gemma 4 Technical Report arXiv:2607.02770 published 2026-07-02; model card 2026-07-30; knowledge cutoff not verified in sources found.
- **IDs:** `google/gemma-4-12B` (pre-trained), `google/gemma-4-12B-it` (instruction-tuned); Ollama `gemma4:12b`.
- **Context window:** 256,000 tokens (256K) per official model card; an independent open-source optimized build (gemma-4-12b GitHub) claims an extended 1M-token context on 8GB RAM; runtimes: LiteRT-LM benchmark config used 4096 ctx (device up to 128K, web up to 195K); max output ~33K per cost tracker.
- **Modalities:** Text, image, audio (16 kHz), video (frame sequence) input; text output; built-in thinking; native function calling; Multi-Token Prediction (MTP) drafters for speculative decoding.
- **Pricing (as of 2026-11-01):** Apache 2.0 (free, commercial use permitted); no paid per-token hosted price (Google AI Studio free quota; self-host free; Ollama free). Local inference: ~6.6 GB VRAM at Q4_K_M; optimized build runs on 8GB RAM.

- **Architecture:** Dense 11.95B total parameters (8B effective with embeddings), 48 layers, sliding window 1024, encoder-free unified multimodal design (35M vision projection matmul replaces the 550M separate vision encoder; native 16 kHz audio), p-RoPE, MTP drafters.

### Raw benchmarks found

Official (Google DeepMind / Google / Hugging Face / arXiv):

- MMLU Pro: **77.2%** (Gemma 4 12B Unified, instruction-tuned) — vs 82.6% (26B A4B), 69.4% (E4B), 67.6% (Gemma 3 27B).
- AIME 2026 (no tools): **77.5%** (12B) — vs 89.2% (31B), 88.3% (26B A4B), 42.5% (E4B).
- LiveCodeBench v6: **72.0%** (12B) — vs 77.1% (26B A4B), 80.0% (31B), 52.0% (E4B).
- MMMU Pro: **69.1%** (12B) — vs 73.8% (26B A4B), 52.6% (E4B).
- GPQA Diamond: **78.8%** (12B) — per Google/HF-card reporting via independent write-ups.
- MathVision: **79.7%**; MedXpertQA (MM): **48.7%**; MRCR v2 (8 needles, 128K): **43.4%** (12B) vs 44.1% (26B A4B).

Independent (Artificial Analysis / BenchLM / community):

- Artificial Analysis Intelligence Index: **14** (estimated, Reasoning) — ranked ~28 of 719 models on the index; AA Coding Index **31.0**; AA-IFBench **73.5`.
- BenchLM: **35.48/100** overall, rank **#163/1004**, context 256K, reasoning-typed, open weight — with note that only 22 of 724 benchmarks covered (partial coverage → conservative score).

### Cross-source comparison

- Composite-scale conflict: BenchLM overall **35.48/100** vs AA Intelligence Index reasoning score **14** (estimated) — different composite constructions, not directly comparable on the same axis.
- Vendor capability claim: Google states Gemma 4 12B Unified approaches the 26B MoE on standard benchmarks while using <half the memory footprint (MMLU Pro 77.2 vs 82.6; LiveCodeBench 72.0 vs 77.1; AIME 77.5 vs 88.3) — the gap is task-dependent.
- Context conflict: official card **256K** vs independent optimized build's **1M** context claim — sources disagree on the effective window.
- Safety: Google reports internal automated + human evaluations (CSAM filtering, data filtering, safety policies, red teaming via Google AI Red Team / AART); improvements over Gemma 3, minimal policy violations, low unjustified refusals, testing run without safety filters.

### Normalized scores (1–100)

- **Tool use: 65/100.** AA-IFBench **73.5** + native function calling; capped by lack of a Terminal-Bench number for the 12B.
- **Reasoning: 75/100.** GPQA Diamond **78.8**, MMLU Pro **77.2**, AIME **77.5**, MathVision **79.7**; near-26B-class performance for a 12B dense model.
- **Context window: 80/100.** Official **256K** (mid tier; 200K–500K band ≈ 65–84, 200K = 70; optimized build claims 1M).
- **Multimodal: 90/100.** Encoder-free unified design (text+image+audio+video), native audio, thinking, function calling.
- **Coding: 70/100.** LiveCodeBench v6 **72.0**, AIME **77.5**, MMLU Pro **77.2**.
- **Cost efficiency: 100/100.** Apache 2.0, $0 hosted/local inference.

- **Overall Score: 76/100.** Mean of the five quality dims (65 + 75 + 80 + 90 + 70) / 5 = **76**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/gemma-4-12b-unified)** — 2026-11-01
- Method: public web research prioritizing official model card/docs (Google DeepMind blog, Hugging Face `google/gemma-4-12B`, Gemma 4 Technical Report arXiv:2607.02770, ai.google.dev model card, LiteRT-LM) plus independent benchmarks/reviews (Artificial Analysis, BenchLM, community write-ups) — five independent web searches.
- Reference URLs:
  - [Introducing Gemma 4 12B: a unified, encoder-free multimodal model](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12B/)
  - [google/gemma-4-12B · Hugging Face](https://huggingface.co/google/gemma-4-12B)
  - [Gemma 4 Technical Report - arXiv](https://arxiv.org/abs/2607.02770)
  - [Gemma 4 model card | Google AI for Developers](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Gemma 4 12B Benchmark Scores & Performance | BenchLM](https://benchlm.ai/models/gemma-4-12b)
  - [Gemma 4 12B - Intelligence, Performance & Price Analysis | Artificial Analysis](https://artificialanalysis.ai/models/gemma-4-12b)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.

