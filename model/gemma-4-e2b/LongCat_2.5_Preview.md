# Gemma 4 E2B — findings by LongCat 2.5 Preview

- Source: Google DeepMind/gemma-4-E2B
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's smallest edge-optimized open-weight model with 2.3B effective parameters (5.1B with embeddings). Natively multimodal with text, image, and audio input. Designed for mobile and IoT devices. Apache 2.0 license.
- **Provider / access:** Hugging Face (`google/gemma-4-E2B`, `google/gemma-4-E2B-it` open weights), Amazon Bedrock, Ollama (`gemma4:e2b`), Kaggle, Google AI Edge, Google Cloud.
- **Release / knowledge:** 2026-04-02.
- **IDs:** `google/gemma-4-E2B` (base), `google/gemma-4-E2B-it` (instruction-tuned)
- **Context window:** 128K tokens — verified via Google AI docs, Hugging Face, Ollama.
- **Modalities:** Text, Image, Audio input; Text output. Reasoning: yes (configurable thinking mode). Tool calling: yes (native function calling).
- **Pricing (as of 2026-10-09):** $0.04/1M input, $0.08/1M output (Amazon Bedrock). Apache 2.0 open weights for self-hosting. Memory: 11.4 GB BF16, 5.7 GB SFP8, 2.9 GB Q4_0.
- **Architecture:** 2.3B effective (5.1B with embeddings), dense, 35 layers, sliding window 512 tokens, vocabulary 262K. Per-Layer Embeddings (PLE) for parameter efficiency. Vision encoder ~150M, audio encoder ~300M. Multi-Token Prediction (MTP) for faster inference.

### Raw benchmarks found

Agent / tool use:

- Native function calling: supported (Google AI docs, Hugging Face)
- Agentic workflows: supported (Google AI docs)
- TAU2 (average over 3): **24.5%** (arXiv — vs Gemma 4 31B 76.9%, 26B A4B 68.2%, 12B 69.0%, E4B 42.2%, Gemma 3 27B 16.2%)

Reasoning / knowledge:

- MMLU Pro: **60.0%** (Google — vs Gemma 4 31B 85.2%, 26B A4B 82.6%, 12B 77.2%, E4B 69.4%, Gemma 3 27B 67.6%)
- GPQA Diamond: **43.4%** (arXiv — vs 31B 84.3%, 26B A4B 82.3%, 12B 78.8%, E4B 58.6%, Gemma 3 27B 42.4%)
- AIME 2026 (no tools): **37.5%** (Google — vs 31B 89.2%, 26B A4B 88.3%, 12B 77.5%, E4B 42.5%, Gemma 3 27B 20.8%)

Coding:

- LiveCodeBench v6: **44.0%** (Google — vs 31B 80.0%, 26B A4B 77.1%, 12B 72.0%, E4B 52.0%, Gemma 3 27B 29.1%)
- Codeforces ELO: **633** (Google — vs 31B 2150, 26B A4B 1718, 12B 1659, E4B 940, Gemma 3 27B 110)
- SciCode: **21.0%** (arXiv — vs 31B 43.0%, 26B A4B 40.0%, 12B 38.0%, E4B 24.0%)

Long context:

- Context window: **128K tokens** — verified via Google AI docs, Hugging Face, Ollama
- MRCR v2 8 needle 128k: **19.1%** (arXiv — vs 31B 66.4%, 26B A4B 44.1%, 12B 43.4%, E4B 25.4%, Gemma 3 27B 13.5%)

Multimodal:

- MMMU Pro: **44.2%** (arXiv — vs 31B 76.9%, 26B A4B 73.8%, 12B 69.1%, E4B 52.6%, Gemma 3 27B 49.7%)
- MATH-Vision: **52.4%** (arXiv — vs 31B 85.6%, 26B A4B 82.4%, 12B 79.7%, E4B 59.5%, Gemma 3 27B 46.0%)
- MedXPertQA MM: **23.5%** (arXiv — vs 31B 61.3%, 26B A4B 58.1%, 12B 48.7%, E4B 28.7%)
- InfographicVQA: **63.9%** (arXiv — vs 31B 92.0%, 26B A4B 89.3%, 12B 88.4%, E4B 70.0%, Gemma 3 27B 70.6%)
- OmniDocBench 1.5: **0.290** (arXiv — vs 31B 0.131, 26B A4B 0.149, 12B 0.164, E4B 0.181, Gemma 3 27B 0.365)
- Text, Image, Audio input (Google AI docs, Hugging Face)

### Normalized scores (1–100)

- **Tool use: 62/100.** Native function calling, agentic workflows. TAU2 24.5%. Good tool use for edge deployment but limited by small parameter count.
- **Reasoning: 58/100.** MMLU Pro 60%, GPQA 43.4%, AIME 37.5%. Moderate reasoning for edge deployment, trails larger variants significantly.
- **Context window: 80/100.** 128K token context. Good long-context capability for an edge model.
- **Multimodal: 68/100.** Text, Image, Audio input. MMMU Pro 44.2%, MATH-Vision 52.4%, InfographicVIA 63.9%. Good multimodal understanding for edge, equals or beats Gemma 3 27B on some vision tasks.
- **Coding: 55/100.** LiveCodeBench 44%, Codeforces ELO 633. Below average coding, limited by very small effective parameter count.
- **Cost efficiency: 92/100.** $0.04/$0.08 per 1M (Bedrock). Apache 2.0 open weights. Fits in 2.9 GB Q4_0. Exceptional value for edge/mobile deployment.
- **Overall Score: 65/100.** Mean of Tool (62), Reasoning (58), Context (80), Multimodal (68), Coding (55) = 323/5 = 64.6 → 65. Good edge-optimized multimodal model with excellent cost efficiency, but limited capability across all dimensions due to very small size.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
