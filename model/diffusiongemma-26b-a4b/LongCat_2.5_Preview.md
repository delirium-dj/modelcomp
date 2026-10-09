# DiffusionGemma 26B A4B — findings by LongCat 2.5 Preview

- Source: Google DeepMind/diffusiongemma-26B-A4B-it
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind's experimental open-weights text diffusion model based on Gemma 4 26B A4B. Generates tokens in parallel 256-token blocks via discrete diffusion instead of sequential autoregressive decoding. Achieves 1,100+ tokens/s on H100. Apache 2.0 license.
- **Provider / access:** Hugging Face (`google/diffusiongemma-26B-A4B-it` open weights), NVIDIA NIM, Google Model Garden, Kaggle. OpenAI-compatible API via vLLM/Transformers.
- **Release / knowledge:** 2026-06-09/10; knowledge cutoff January 2025.
- **IDs:** `google/diffusiongemma-26B-A4B-it`
- **Context window:** 262,144 tokens (256K) — verified via NVIDIA, Hugging Face, OpenCode; up to 33,000 output tokens.
- **Modalities:** Text, Image, Video input; Text output. Reasoning: yes (configurable thinking mode). Tool calling: yes (native function calling).
- **Pricing (as of 2026-10-09):** $0.50/1M input, $0.50/1M output (OpenCode). Apache 2.0 open weights for self-hosting. 35+ languages.
- **Architecture:** 25.2B total / 3.8B active MoE, 30 layers, 128 experts with 8 active + 1 shared, encoder-decoder with bidirectional attention over 256-token canvases. Discrete diffusion: generates entire paragraphs in parallel rather than token-by-token. Warm-started from Gemma 4 26B A4B weights.

### Raw benchmarks found

Agent / tool use:

- Native function calling: supported (NVIDIA, Hugging Face)
- Agentic workflows with structured tool use (NVIDIA)
- Tau2 (average over 3): **56.2%** (NVIDIA — vs Gemma 4 26B A4B 68.2%)

Reasoning / knowledge:

- MMLU Pro: **77.6%** (NVIDIA — vs Gemma 4 26B A4B 82.6%)
- GPQA Diamond: **73.2%** (NVIDIA — vs Gemma 4 26B A4B 82.3%)
- AIME 2026 (no tools): **69.1%** (NVIDIA — vs Gemma 4 26B A4B 88.3%)
- HLE (no tools): **11.0%** (NVIDIA — vs Gemma 4 26B A4B 8.7%)
- HLE (with search): **11.9%** (NVIDIA — vs Gemma 4 26B A4B 17.2%)
- BigBench Extra Hard: **47.6%** (NVIDIA — vs Gemma 4 26B A4B 64.8%)
- MMMLU: **81.5%** (NVIDIA — vs Gemma 4 26B A4B 86.3%)

Coding:

- LiveCodeBench v6: **69.1%** (NVIDIA — vs Gemma 4 26B A4B 77.1%)
- Codeforces ELO: **1429** (NVIDIA — vs Gemma 4 26B A4B 1718)

Long context:

- Context window: **262,144 tokens** (256K) — verified via NVIDIA, Hugging Face, OpenCode
- MRCR v2 8 needle 128k: **32.0%** (NVIDIA — vs Gemma 4 26B A4B 44.1%)

Multimodal:

- MMMU Pro: **54.3%** (NVIDIA — vs Gemma 4 26B A4B 73.8%)
- MATH-Vision: **70.5%** (NVIDIA — vs Gemma 4 26B A4B 82.4%)
- MedXPertQA MM: **49.0%** (NVIDIA — vs Gemma 4 26B A4B 58.1%)
- OmniDocBench 1.5: **0.319** (NVIDIA — vs Gemma 4 26B A4B 0.149)
- Text, Image, Video input (NVIDIA, Hugging Face)
- Image understanding: OCR, document/PDF parsing, chart comprehension, screen/UI understanding (Hugging Face)

### Normalized scores (1–100)

- **Tool use: 65/100.** Native function calling, agentic workflows. Tau2 56.2%. Capable tool use but below autoregressive counterpart.
- **Reasoning: 68/100.** GPQA 73.2%, AIME 69.1%, MMLU Pro 77.6%. Below Gemma 4 AR counterpart on most reasoning benchmarks. Diffusion approach trades some accuracy for speed.
- **Context window: 82/100.** 256K token context. Good long-context capability, though MRCR v2 (32.0%) is below average.
- **Multimodal: 72/100.** Text, Image, Video input. MMMU Pro 54.3%, MATH-Vision 70.5%. Good multimodal understanding but trails Gemma 4 AR on vision tasks.
- **Coding: 68/100.** LiveCodeBench 69.1%, Codeforces ELO 1429. Below Gemma 4 AR counterpart on coding tasks.
- **Cost efficiency: 88/100.** $0.50/$0.50 per 1M tokens. Apache 2.0 open weights. Exceptional speed (1,100+ tok/s on H100, up to 2,000 TPS on RTX 6000). 4x faster than autoregressive models.
- **Overall Score: 71/100.** Mean of Tool (65), Reasoning (68), Context (82), Multimodal (72), Coding (68) = 355/5 = 71. Innovative diffusion-based approach with exceptional speed, but trades some accuracy vs autoregressive counterpart.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
