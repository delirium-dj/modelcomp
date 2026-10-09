# DiffusionGemma 26B-A4B — findings by Step 5 Preview

- Source: Google DeepMind (`google/diffusiongemma-26B-A4B-it`, released 2026-06-10)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B-A4B (Google DeepMind's text-diffusion variant of the Gemma 4 26B-A4B MoE)
- **Short description:** Google's experiment in **discrete text diffusion** — warm-started from the post-trained Gemma 4 26B-A4B checkpoint, this encoder-decoder model (shared weights, bidirectional attention) denoises **256-token blocks in parallel** in ~12 forward passes, i.e. ~20 tokens per forward pass versus the ~3–6 that state-of-the-art speculative decoding achieves. The result is a new intelligence-to-speed Pareto point: ~1,479 tokens/second on a single H100 (5× the AR baseline's 303 tok/s under MTP serving, up to 2,000 tok/s on an RTX 6000 per Unsloth), on ~18GB of quantized VRAM — a single consumer GPU. The price is accuracy: against its own AR parent it gives up 5.0 points of MMLU-Pro, 19.2 of AIME, 8.0 of LCB, 9.1 of GPQA and 19.5 of MMMU-Pro. It also retains AR decoding, so requests can be routed by latency needs.
- **Provider / access:** Open weights (Apache 2.0) on Hugging Face (`google/diffusiongemma-26B-A4B-it`); NVIDIA NIM (BF16, NVFP4 via Model Optimizer); build.nvidia.com.
- **Release:** 2026-06-10; knowledge cutoff January 2025.
- **Context window:** 256K tokens.
- **Modalities:** Text, image and video in → text out (inherited multimodal stack); configurable thinking; native function calling; 140+ languages (35+ per NVIDIA's card).
- **Pricing:** free open weights (Apache 2.0); runs single-GPU after quantization.
- **Architecture:** 25.2B total / 3.8B active MoE; two-stage fine-tune using <10% of the AR model's training-token budget; Entropy-Bounded (EB) sampler with adaptive stopping is the recommended decode path.

### Raw benchmarks found

Vendor model card (TD mode, thinking on, EB sampler; Gemma 4 26B-A4B AR/MTP in parents):

Reasoning & knowledge:

- MMLU-Pro: **77.6%** (82.6); MMMLU: **81.5%** (86.3)
- GPQA Diamond: **73.2%** (82.3); AIME 2026 (no tools): **69.1%** (88.3)
- HLE (no tools): **11.0%** (8.7); HLE (with search): **11.9%** (17.2); BBH EH: **47.6%** (64.8)
- GSM8K: 96.3 (tech report)

Coding:

- LiveCodeBench v6: **69.1%** (77.1); Codeforces Elo: **1,429** (1,718)

Instruction following / agentic:

- Tau2 (average over 3): **56.2%** (68.2)

Vision:

- MMMU-Pro: **54.3%** (73.8); MATH-Vision: **70.5%** (82.4); OmniDocBench 1.5: 0.319 edit distance (0.149); MedXPertQA MM: **49.0%** (58.1)

Long context:

- MRCR v2 8-needle 128K (average): **32.0%** (44.1)

Mode comparison (tech report Table 3): TD 69.1 AIME / 73.2 GPQA / 69.1 LCB vs the same weights in AR mode 84.2 / 79.8 / 71.4.

Quantization (NVIDIA NVFP4 vs BF16 baseline, thinking on): GPQA 68.6 vs 69.4; AIME 67.33 vs 68.33; GSM8K 94.01 vs 94.54; IFEval 94.56 vs 94.01; HumanEval 95.00 vs 94.09; MMMLU 88.13 vs 88.50; MMLU-Pro 80.7 vs 81.0.

### Normalized scores (1–100)

- **Tool use: 52/100.** Tau2 (3-domain average) 56.2% is the only agentic number; no Terminal-Bench, MCP Atlas or GDPval run exists for this model, so mid-band on a single eval.
- **Reasoning: 55/100.** MMLU-Pro 77.6%, GPQA 73.2%, AIME 69.1% and HLE 11.0% — mid-band, and uniformly 5–19 points below the AR Gemma 4 26B-A4B it was fine-tuned from.
- **Context window: 62/100.** 256K is the 200K–500K band (65–84) with MRCR 8-needle 128K at 32.0% — weak retrieval even at half the window.
- **Multimodal: 66/100.** Text + image + video in → text out is the 75–90 band; docked to the 60s because the diffusion conversion costs the vision stack heavily — MMMU-Pro 54.3% vs the AR model's 73.8%, OmniDocBench 0.319 vs 0.149.
- **Coding: 55/100.** LiveCodeBench 69.1% and Codeforces 1,429 are mid-band; GSM8K 96.3% and HumanEval 95.0% (NVFP4) show solid classic problem-solving, but the ~19-point LCB deficit to the AR parent defines the tier.
- **Cost efficiency: 97/100.** Apache-2.0 weights, ~18GB quantized VRAM, single-GPU, 1,000–1,500 tok/s — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier, and the throughput is the entire reason this model exists.
- **Overall Score: 58/100.** Best-fit recommendation: the fastest open-weights generation in the roster — 256-token parallel diffusion delivering ~1,500 tok/s on one H100 (and 700+ on a 5090) with mid-tier accuracy; the right pick for latency-bound high-volume generation, the wrong one for accuracy-bound work.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Google model card, Hugging Face card, technical report arXiv:2608.00146, NVIDIA NIM/build cards, DataNorth coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DiffusionGemma_31B.md`, using the same headings.
