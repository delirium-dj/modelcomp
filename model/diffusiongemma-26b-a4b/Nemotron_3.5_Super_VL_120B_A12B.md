# DiffusionGemma 26B A4B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: build.nvidia.com google/diffusiongemma-26b-a4b-it model card (official NVIDIA NIM page for Google's model), ai.google.dev/gemma/docs/diffusiongemma/model_card (official Google AI model card), huggingface.co nvidia/diffusiongemma-26B-A4B-it-NVFP4 (NVFP4 quantized card), huggingface.co google/diffusiongemma-26B-A4B-it (base), gigazine.net (third-party summary), benchlm.ai compare (Gemma 4 26B A4B vs Gemma 4 12B; note: benchmarks are for Gemma 4, not DiffusionGemma specifically), diffrun.dev (speed benchmarks), omlx.ai (community speed benchmark)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B IT (Google DeepMind)
- **Short description:** Open-weights multimodal generative model built on Gemma 4 26B A4B MoE architecture; generates text via discrete diffusion (block-parallel 256-token canvas), text+image in → text out; 256K context; configurable thinking (reasoning) mode; native function calling; 35+ languages; Apache 2.0; released June 2026 (Build.NVIDIA 06/2026, Hugging Face 06/10/2026).
- **Provider / access:** Google (google/diffusiongemma-26B-A4B-it on HF), NVIDIA NIM (build.nvidia.com endpoint, NVFP4 quantized via nvidia/diffusiongemma-26B-A4B-it-NVFP4), Jetson (NVFP4/AWQ-INT4), oMLX/llama.cpp community ports.
- **Release / knowledge:** Released 2026-06-10 (HF); training data collection cutoff January 2025; built upon Gemini Diffusion results (announced May 2025).
- **IDs:** `google/diffusiongemma-26B-A4B-it` (base), `nvidia/diffusiongemma-26B-A4B-it-NVFP4` (quantized), `diffusiongemma-26b-a4b-it` (build.nvidia.com endpoint).
- **Context window:** Up to 256,000 tokens (Google AI model card; NVIDIA NIM card; Jetson lists 8K which appears to be a deployment default, not model limit — treat 256K as authoritative).
- **Modalities:** Text + image in, text out (NVIDIA card mentions video but Google AI card specifies Text + Image only — treat as text+image); video NOT confirmed by Google; reasoning yes (configurable thinking mode); tool calls yes (native function calling); JSON/structured output not explicitly advertised.
- **Pricing (as of 2026-10-16):** Open weights Apache 2.0 (self-host effectively $0); hosted pricing not disclosed in fetched sources.
- **Architecture:** 25.2B total / 3.8B active MoE, 30 layers, sliding window 1024 tokens, encoder-decoder with bidirectional canvas attention, discrete diffusion sampler, 8 active / 128 total + 1 shared experts, ~550M vision encoder parameters, vocab 262K.

### Raw benchmarks found

All official figures from build.nvidia.com / ai.google.dev model cards (instruction-tuned variants, Entropy-Bounded Denoising sampler) plus NVIDIA NVFP4 quantized comparison table. benchlm.ai figures shown are for Gemma 4 26B A4B (dense autoregressive sibling), NOT DiffusionGemma — clearly labeled where used.

Agent / tool use:

- Tau2 (average over 3): **56.2%** (DiffusionGemma) vs 68.2% (Gemma 4 26B A4B) (official model card)

Reasoning / knowledge:

- MMLU Pro: **77.6%** (DiffusionGemma) vs 82.6% (Gemma 4)
- GPQA Diamond: **73.2%** (DiffusionGemma) vs 82.3% (Gemma 4); NVFP4: 69.4% (baseline) / 68.6% (quantized)
- HLE (no tools): **11.0%** (DiffusionGemma) vs 8.7% (Gemma 4)
- HLE (with search): **11.9%** vs 17.2%
- BigBench Extra Hard: **47.6%** vs 64.8%
- MMMLU: **81.5%** vs 86.3%
- AIME 2026 (no tools): **69.1%** vs 88.3%; NVFP4 AIME 2025: 68.33% / 67.33%
- GSM8K (NVFP4 table): **94.54%** baseline / 94.01% quantized
- IFEval (NVFP4 table): **94.01%** baseline / 94.56% quantized
- HumanEval (NVFP4 table): **94.09%** baseline / 95.00% quantized
- MMMLU 0 Shot (NVFP4 table): **88.50%** / 88.13%
- MMLU Pro (NVFP4 table): **81.0%** / 80.7%

Coding:

- LiveCodeBench v6: **69.1%** (DiffusionGemma) vs 77.1% (Gemma 4)
- Codeforces ELO: **1429** vs 1718
- HumanEval: **94.09%** (baseline NVFP4 table) / 95.00% (quantized)

Multimodal & grounded:

- MMMU Pro: **54.3%** (DiffusionGemma) vs 73.8% (Gemma 4)
- MATH-Vision: **70.5%** vs 82.4%
- MedXPertQA MM: **49.0%** vs 58.1%
- OmniDocBench 1.5 (avg edit distance, lower better): **0.319** vs 0.149
- Vision: text+image confirmed; video not confirmed by Google source

Long context:

- MRCR v2 8 needle 128k (average): **32.0%** (DiffusionGemma) vs 44.1% (Gemma 4) — weak long-context retrieval
- Declared 256K context; MRCR only measured at 128k.

Instruction following:

- IFEval: **94.01%** (baseline) / 94.56% (NVFP4 quantized) — strong

### Conflicting results noted

- **Context window:** 256K (Google AI + NVIDIA NIM cards) vs 8K (Jetson AI Lab page — appears to be a deployment/context allocation default, not the model limit); treat 256K as authoritative.
- **Modalities:** NVIDIA NIM card says "text, image, and video inputs"; Google AI card says "Text, Image" only; video unconfirmed by Google — treat as text+image.
- **MMLU Pro discrepancy:** Official card 77.6% vs NVIDIA NVFP4 table 81.0% — different evaluation slices (main card vs quantized eval table); both cited.
- **benchlm.ai:** Overall score 45.64 / public-lane figures shown are for Gemma 4 26B A4B (sibling), not DiffusionGemma — not used for DiffusionGemma scoring.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 56/100.** Tau2 56.2%, native function calling; agentic use cases listed but few scored agent benchmarks (no Terminal-Bench/BrowseComp/MCP Atlas found).
- **Reasoning: 62/100.** GPQA Diamond 73.2, MMLU Pro 77.6, AIME 69.1, BigBench 47.6, HLE 11.0 (weak); spiky — strong knowledge, weak open-ended reasoning.
- **Context window: 70/100.** Declared 256K but MRCR v2 at 128k is only 32.0% (weak retrieval); no full-window retrieval score.
- **Multimodal: 64/100.** Text+image; MMMU Pro 54.3, MATH-Vision 70.5, MedXPertQA MM 49.0, OmniDocBench 0.319 (weak); video unconfirmed.
- **Coding: 78/100.** LiveCodeBench 69.1, Codeforces 1429, HumanEval 94.09/95.00, GSM8K 94.54 — strong coding for its size.
- **Cost efficiency: 90/100.** Apache 2.0 open weights (self-host ~$0), 3.8B-active MoE, >1,100 tok/s generation speed on H100 FP8; not counted toward Overall.
- **Overall Score: 66/100.** Half-up mean of (56 + 62 + 70 + 64 + 78) / 5 = 66.0 → 66. Best-fit recommendation: high-speed open multimodal model where generation throughput matters; coding strong, long-context retrieval weak (MRCR 32.0%).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Google AI model card + NVIDIA NIM model card + NVFP4 HF card + gigazine third-party + diffrun/omlx speed data); benchlm.ai figures are for Gemma 4 sibling and deliberately excluded; scores are normalized 1–100 interpretations, not official vendor scores. Context/modality conflicts flagged.
- Future sources: add a new file next to this one, using the same headings.
