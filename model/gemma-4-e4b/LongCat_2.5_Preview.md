# Gemma 4 E4B — findings by LongCat 2.5 Preview

- Source: Google DeepMind/gemma-4-E4B
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's edge-optimized open-weight model with 4.5B effective parameters (8B total with embeddings). Natively multimodal with text, image, and audio input. Designed for laptops, consumer GPUs, and mobile devices. Apache 2.0 license.
- **Provider / access:** Hugging Face (`google/gemma-4-E4B`, `google/gemma-4-E4B-it` open weights), Ollama (`gemma4:e4b`), Fireworks, Google AI Studio, Kaggle, LM Studio, Google AI Edge.
- **Release / knowledge:** 2026-04-02.
- **IDs:** `google/gemma-4-E4B` (base), `google/gemma-4-E4B-it` (instruction-tuned)
- **Context window:** 128K tokens (131,072) — verified via Google AI docs, Ollama, Hugging Face.
- **Modalities:** Text, Image, Audio input; Text output. Reasoning: yes (configurable thinking mode). Tool calling: yes (native function calling).
- **Pricing (as of 2026-10-09):** $0.20/1M input, $0.20/1M output (Fireworks). Apache 2.0 open weights for self-hosting. Memory: 17.9 GB BF16, 8.9 GB SFP8, 4.5 GB Q4_0.
- **Architecture:** 4.5B effective (8B total with embeddings), dense, 42 layers, sliding window 512 tokens, vocabulary 262K. Per-Layer Embeddings (PLE) for parameter efficiency. Vision encoder ~150M, audio encoder ~300M.

### Raw benchmarks found

Agent / tool use:

- Tau2 airline: **52.0%** (arXiv — vs Gemma 4 31B 75.0%, 26B A4B 76.0%, 12B 75.0%, E2B 31.0%)
- Tau2 retail: **67.1%** (arXiv — vs 31B 86.4%, 26B A4B 85.5%, 12B 77.6%, E2B 34.6%)
- Tau2 telecom: **18.4%** (arXiv — vs 31B 69.3%, 26B A4B 43.0%, 12B 54.4%, E2B 19.7%)
- Native function calling: supported (Google AI docs)
- Agentic workflows: supported (Google AI docs)

Reasoning / knowledge:

- MMLU Pro: **69.4%** (Google — vs Gemma 4 31B 85.2%, 26B A4B 82.6%, 12B 77.2%, E2B 60.0%, Gemma 3 27B 67.6%)
- GPQA Diamond: **58.6%** (arXiv — vs 31B 84.3%, 26B A4B 82.3%, 12B 78.8%, E2B 43.4%, Gemma 3 27B 42.4%)
- AIME 2026 (no tools): **42.5%** (Google — vs 31B 89.2%, 26B A4B 88.3%, 12B 77.5%, E2B 37.5%, Gemma 3 27B 20.8%)
- BigBench Extra Hard: evaluated (Google)

Coding:

- LiveCodeBench v6: **52.0%** (Google — vs 31B 80.0%, 26B A4B 77.1%, 12B 72.0%, E2B 44.0%, Gemma 3 27B 29.1%)
- Codeforces ELO: **940** (Google — vs 31B 2150, 26B A4B 1718, 12B 1659, E2B 633, Gemma 3 27B 110)
- SciCode: **24.0%** (arXiv — vs 31B 43.0%, 26B A4B 40.0%, 12B 38.0%, E2B 21.0%)

Long context:

- Context window: **128K tokens** (131,072) — verified via Google AI docs, Ollama, Hugging Face
- MRCR v2 8 needle 128k: **25.4%** (arXiv — vs 31B 66.4%, 26B A4B 44.1%, 12B 43.4%, E2B 19.1%, Gemma 3 27B 13.5%)

Multimodal:

- MMMU Pro: **52.6%** (arXiv — vs 31B 76.9%, 26B A4B 73.8%, 12B 69.1%, E2B 44.2%, Gemma 3 27B 49.7%)
- MATH-Vision: **59.5%** (arXiv — vs 31B 85.6%, 26B A4B 82.4%, 12B 79.7%, E2B 52.4%, Gemma 3 27B 46.0%)
- MedXPertQA MM: **28.7%** (arXiv — vs 31B 61.3%, 26B A4B 58.1%, 12B 48.7%, E2B 23.5%)
- InfographicVQA: **70.0%** (arXiv — vs 31B 92.0%, 26B A4B 89.3%, 12B 88.4%, E2B 63.9%, Gemma 3 27B 70.6%)
- OmniDocBench 1.5: **0.181** (arXiv — vs 31B 0.131, 26B A4B 0.149, 12B 0.164, E2B 0.290, Gemma 3 27B 0.365)
- Text, Image, Audio input (Google AI docs, Hugging Face)
- Audio transcription and translation (CoVoST avg 42.0, FLEURS 0.08)

### Normalized scores (1–100)

- **Tool use: 62/100.** Native function calling, agentic workflows. TAU2 airline 52%, retail 67.1%. Good tool use for an edge model, but below larger variants.
- **Reasoning: 62/100.** MMLU Pro 69.4%, GPQA 58.6%, AIME 42.5%. Moderate reasoning for its size, trails larger Gemma 4 variants significantly.
- **Context window: 80/100.** 128K token context. Good long-context capability for an edge model.
- **Multimodal: 72/100.** Text, Image, Audio input. MMMU Pro 52.6%, MATH-Vision 59.5%, InfographicVQA 70.0%. Good multimodal understanding for edge deployment, equals or beats Gemma 3 27B on some vision tasks.
- **Coding: 62/100.** LiveCodeBench 52.0%, Codeforces ELO 940. Moderate coding, trails larger variants.
- **Cost efficiency: 90/100.** $0.20/$0.20 per 1M tokens. Apache 2.0 open weights. Fits in 8GB VRAM quantized (4.5 GB Q4_0). Exceptional value for edge deployment.
- **Overall Score: 68/100.** Mean of Tool (62), Reasoning (62), Context (80), Multimodal (72), Coding (62) = 338/5 = 67.6 → 68. Good edge-optimized multimodal model with excellent cost efficiency, but trails larger variants on reasoning and coding.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
