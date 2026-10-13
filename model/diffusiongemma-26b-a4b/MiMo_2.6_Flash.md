# DiffusionGemma 26B A4B — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`diffusiongemma-26b-a4b`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind's open-weights multimodal generative model that produces text via discrete diffusion (parallel token denoising) rather than autoregression; built on the Gemma 4 26B A4B MoE architecture. ~6.7× faster token throughput than its AR sibling Gemma 4 26B on identical hardware; targets real-time text apps.
- **Provider / access:** Hugging Face (`google/diffusiongemma-26B-A4B-it`); NVIDIA NIM / build.nvidia.com; vLLM (special diffusiongemma build); Unsloth GGUF/llama.cpp (special build required).
- **Release / knowledge:** Hugging Face 2026-06-10; NVIDIA Build June 2026; training data cutoff January 2025.
- **IDs:** `google/diffusiongemma-26B-A4B-it` (HF); `nvidia/diffusiongemma-26B-A4B-it-NVFP4` (NVIDIA quant).
- **Context window:** 256K tokens; max output not separately disclosed (256-token diffusion canvas blocks, up to 48 denoising steps).
- **Modalities:** text + image + video in; text out; configurable thinking (reasoning) mode; native function calling; 35+ languages inference (140+ pretraining languages).
- **Pricing (as of 2026-10-13):** open weights (Apache 2.0); free self-host; NVIDIA NIM API usage via NGC credits. Sibling Gemma 4 26B A4B API reference ~$0.06/$0.33 per 1M (designforonline) — DiffusionGemma API pricing not separately published.
- **Architecture:** 25.2B total / 3.8B active parameters (8 of 128 experts); MoE Transformer with bidirectional attention encoder-decoder; discrete diffusion (EntropyBoundSampler, 256-token blocks); base model Gemma 4 26B A4B; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Tau2 (average over 3): **56.2%** (NVIDIA model card; Gemma 4 26B A4B sibling: 68.2%)
- Native function calling supported (NVIDIA model card)

Reasoning / knowledge:

- MMLU Pro: **77.6%** (NVIDIA model card; Gemma 4 sibling: 82.6%)
- GPQA Diamond: **73.2%** (NVIDIA model card; Gemma 4 sibling: 82.3%)
- AIME 2026 (no tools): **69.1%** (NVIDIA model card; Gemma 4 sibling: 88.3%)
- Humanity's Last Exam (no tools): **11.0%** (with search: 11.9%) (NVIDIA model card)
- BigBench Extra Hard: **47.6%** (Gemma 4 sibling: 64.8%)
- MMMLU: **81.5%** (Gemma 4 sibling: 86.3%)

Coding:

- LiveCodeBench v6: **69.1%** (NVIDIA model card; Gemma 4 sibling: 77.1%)
- Codeforces ELO: **1,429** (Gemma 4 sibling: 1,718)

Long context:

- MRCR v2 8-needle 128k (average): **32.0%** (Gemma 4 sibling: 44.1%)

Multimodal / vision:

- MMMU Pro: **54.3%** (Gemma 4 sibling: 73.8%)
- OmniDocBench 1.5 (avg edit distance, lower better): **0.319** (Gemma 4: 0.149)
- MATH-Vision: **70.5%** (Gemma 4 sibling: 82.4%)
- MedXPertQA MM: **49.0%** (Gemma 4 sibling: 58.1%)

Speed (key differentiator):

- ~**6.73×** faster average tok/s vs Gemma 4 26B A4B on RTX 5090 NVFP4 (lukaLLM benchmark: 1,062.7 vs 157.9 tok/s)
- **>1,100 tok/s** at low batch on H100 FP8 (NVIDIA model card)

### Normalized scores (1–100)

- **Tool use: 62/100.** Tau2 56.2% is respectable for a 3.8B-active model; native function calling. Capped by trailing the AR sibling by 12 points on Tau2 and no BFCL/Terminal-Bench figures.
- **Reasoning: 72/100.** MMLU Pro 77.6%, GPQA 73.2%, AIME 69.1% are solid mid-tier for the active-parameter class; comparable accuracy to AR sibling on scorable probe regimes (arxiv interpretability study). Capped by consistent gap to Gemma 4 AR sibling on every academic benchmark and HLE only 11%.
- **Context window: 75/100.** 256K nominal window, but MRCR v2 32.0% is weak long-context retrieval (Gemma 4 sibling 44.1%). Capped hard by retrieval quality at length.
- **Multimodal: 72/100.** Text+image+video input with MATH-Vision 70.5% and solid document understanding. Capped by MMMU Pro 54.3% well behind the AR sibling's 73.8% and diffusion sampling introducing vision errors.
- **Coding: 65/100.** LiveCodeBench v6 69.1% is good for 3.8B active; Codeforces 1,429 decent. Capped by trailing AR sibling by 8 points on LCB and no SWE-bench figure.
- **Cost efficiency: 95/100.** Apache 2.0 open weights, 3.8B active, runs on a single RTX 5090 at NVFP4, and generates ~6.7× faster than AR equivalents — arguably the best tokens-per-dollar of any 2026 model class. Capped only by special serving stack (vllm/llama.cpp diffusion builds) adding friction.
- **Overall Score: 69/100.** Mean of (62 + 72 + 75 + 72 + 65) / 5 = 69.2 → **69**. Best-fit recommendation: real-time / high-throughput text generation on cheap hardware — the diffusion speed advantage is transformative for latency-sensitive apps; accept a 5–15 point quality gap vs the AR Gemma 4 sibling on most benchmarks.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (NVIDIA NIM model card, Hugging Face google/unsloth repos, lukaLLM speed benchmark GitHub, arxiv interpretability paper 2606.14620); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
