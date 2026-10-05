# DiffusionGemma 26B A4B — findings by Space Bunny

- Source: Google DeepMind (`google/diffusiongemma-26B-A4B-it`; hosted as `opencode/diffusiongemma-26b-a4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B (instruction-tuned: DiffusionGemma 26B A4B IT)
- **Short description:** Google's experimental open-weight **discrete-diffusion** language model — the first diffusion LLM (dLLM) natively supported in vLLM. It generates blocks of 256 tokens in parallel across ~12 forward passes instead of decoding one token at a time, reaching ~1,500 output tokens/s on a single H100 (vLLM FP8: 1,288 tok/s on H200, 1,008 on H100). Fine-tuned from Gemma 4 26B A4B rather than trained from scratch, using under 10% of the AR model's training-token budget. Google explicitly states its **overall output quality is lower than standard Gemma 4** and recommends standard Gemma 4 for maximum quality. It is a distinct model from Gemma 4 26B A4B (same backbone, different decoding objective), not an alias.
- **Provider / access:** open weights on Hugging Face (`google/diffusiongemma-26B-A4B-it`, plus the base `diffusiongemma-26B-A4B`) under Apache 2.0; served by NVIDIA NIM (`google/diffusiongemma-26b-a4b-it`, BF16 build 2026-06-10) and vLLM model runner v2; quantized FP8 / dynamic-activation and NVFP4 compressed-tensor checkpoints from RedHatAI via LLM Compressor; third-party early benchmarking by Unsloth reports up to ~2,000 tok/s on RTX 6000. Hosted at `opencode/diffusiongemma-26b-a4b`.
- **Release / knowledge:** released 2026-06-10 (Google launch post, vLLM and NVIDIA NIM same day); DiffusionGemma Technical Report arXiv 2608.00146 dated 2026-07-31. Knowledge cutoff not stated in reviewed sources.
- **IDs:** `google/diffusiongemma-26B-A4B`, `google/diffusiongemma-26B-A4B-it`, NVIDIA NIM `google/diffusiongemma-26b-a4b-it`, hosted `opencode/diffusiongemma-26b-a4b`.
- **Context window:** 256K tokens (NVIDIA NIM model card; the starting Gemma 4 26B A4B backbone is also 256K). No separate max-output figure published in the reviewed sources.
- **Modalities:** text, image and video in; text out; configurable thinking/reasoning mode; native function calling; multilingual across 35+ languages. **Also supports standard left-to-right autoregressive decoding** as a fallback mode — quality recovers part of the TD-mode gap, at much lower throughput.
- **Pricing (as of 2026-10-05):** Apache 2.0 open weights, self-host only in practice — no per-token API price is published for DiffusionGemma specifically (NVIDIA NIM is a self-hosted/container deployment). Google states the quantized 26B-total/3.8B-active MoE **fits inside 18 GB VRAM** on high-end consumer GPUs. The `opencode/diffusiongemma-26b-a4b` listing carries only "Standard pricing"; no verified public per-token rate found. Native NVFP4 kernels accelerate it on Hopper, Blackwell, DGX Spark/Station and RTX PRO.
- **Architecture:** MoE, 25.2B total / 3.8B active (Gemma 4 26B A4B backbone: 8 of 128 experts active + 1 shared, 30 layers, 262K vocab), converted to a diffusion head with bidirectional attention and block-wise parallel generation of 256-token blocks; encoder-decoder style denoising layout; ~20 tokens per forward pass vs ~3–6 TPF for state-of-the-art speculative decoding. Two-stage training: (1) SFT for bidirectional denoising, (2) RL + sampler distillation. Recommended sampler: Entropy-Bounded Denoising with Adaptive Stopping (max 48 denoising steps, temperature linear decay 0.8 → 0.4, entropy bound 0.1, adaptive-stopping entropy threshold 0.005).

### Raw benchmarks found

All figures are vendor-published instruction-tuned results with the **recommended Entropy Bound (EB) sampler** in text-diffusion (TD) mode with thinking enabled, from the official DiffusionGemma model card (Google AI for Developers / `google/diffusiongemma-26B-A4B-it`), the DiffusionGemma Technical Report (arXiv 2608.00146, Table 3), and the NVIDIA NIM model card. The same table reports the Gemma 4 26B A4B AR baseline for scale.

Agent / tool use:

- Tau2-bench (average over airline / retail / telecom): **56.2%** (Gemma 4 26B A4B AR baseline: 68.2%). The technical report's per-area grouping places Tau2 Retail / Airline / Telecom under "instruction following and agentic behaviour" together with IFEval.
- IFEval: **no standalone percentage published in the reviewed extracts** — it is one of the four constituents of the report's agentic/instruction area, reported only as an unweighted group mean.
- Terminal-Bench / Terminal-Bench Hard: **no verified public score found**.
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.
- Comparative datapoint from the report: in TD mode it is "highly competitive with Mercury 2, a closed-weight text-diffusion model, while reaching roughly 1,500 output tokens per second … a roughly 2.5× speedup over Mercury 2".

Reasoning / knowledge:

- GPQA Diamond: **73.2%** TD+think (Gemma 4 26B A4B: 82.3%). Mode breakdown from the report: TD no-think 64.6, **AR mode 79.8**, AR no-think 67.2.
- AIME 2026 (no tools): **69.1%** TD+think (Gemma 4 26B A4B: 88.3%). TD no-think 50.8; AR mode 84.2; AR no-think 57.5.
- MMLU Pro: **77.6%** (Gemma 4 26B A4B: 82.6%).
- MMMLU (multilingual): **81.5%** (86.3%).
- BigBench Extra Hard: **47.6%** (64.8%). TD no-think 40.0; AR mode 59.1.
- HLE: **11.0%** no tools, **11.9%** with search (Gemma 4 26B A4B: 8.7 / 17.2) — the one dimension where it edges its AR baseline.
- GSM8K: **96.3%** (report Table 3; Gemma 4 26B A4B 96.7, LLaDA 2.1 Flash 100B 45.0).
- LCR / MLCR / CritPt / Artificial Analysis Intelligence Index / BenchLM overall / Arena Elo: **no verified public score found** — DiffusionGemma has no Arena row and no Artificial Analysis entry.

Coding:

- LiveCodeBench v6: **69.1%** (Gemma 4 26B A4B: 77.1%). TD no-think 60.6; AR mode 71.4.
- Codeforces ELO: **1429** (Gemma 4 26B A4B: 1718; LLaDA 2.1 Flash 718). TD no-think 959; AR mode 1569.
- HumanEval / BigCodeBench / LBPP v2 / Natural2Code: named in the report as constituents of its coding area but **no per-benchmark numbers published in the reviewed extracts** (group mean only).
- SWE-bench Verified / SWE-Pro / SciCode / Vibe Code Bench: **no verified public score found**.

Long context:

- MRCR v2 8-needle @128k (average): **32.0%** (Gemma 4 26B A4B: 44.1%) — a 12-point drop, the largest relative regression in the table.
- RULER / GraphWalks: **no verified public score found** at any window length; the 256K limit itself is documented but unmeasured.

### Normalized scores (1–100)

- **Tool use: 60/100.** Tau2 average 56.2% is the only published agentic figure and it is 12 points below the Gemma 4 26B A4B baseline (68.2%); the report's agentic area also folds in IFEval without a standalone number. Capped by the complete absence of Terminal-Bench, Tau3, MCP-Atlas and Claw-Eval evidence, and by the fact that diffusion block decoding still has to emit correct tool-call structure without the sequential left-to-right guarantees an AR model has.
- **Reasoning: 68/100.** GPQA Diamond 73.2% and MMLU Pro 77.6% are respectable, and GSM8K 96.3% shows arithmetic is intact, but AIME 2026 collapses from 88.3% to 69.1% and BigBench Extra Hard from 64.8% to 47.6% versus the AR backbone — a large, consistent quality tax from the diffusion objective. Kept at 68 rather than lower because HLE no-tools (11.0%) is actually above the AR baseline and AR-mode fallback recovers most of the gap (GPQA-D 79.8, AIME 84.2).
- **Context window: 76/100.** The nominal 256K matches the Gemma 4 medium tier, but MRCR @128k at 32.0% (vs 44.1% for the AR backbone, 66.4% for the 31B dense) is the weakest retrieval result in the whole Gemma 4 comparison, and no RULER/GraphWalks figure is published at any length. Long-context degradation is the clearest diffusion cost.
- **Multimodal: 62/100.** Image and video input are supported and MATH-Vision 70.5% / MedXPertQA MM 49.0% are respectable, but MMMU Pro drops to 54.3% from 73.8% and OmniDocBench edit distance more than doubles (0.319 vs 0.149) — document/OCR parsing degrades badly under parallel block generation. No audio input, same as the Gemma 4 26B backbone.
- **Coding: 64/100.** LiveCodeBench v6 69.1% and Codeforces 1429 are usable but trail the AR baseline (77.1 / 1718) and the dense 31B (80.0 / 2150) by a wide margin; the TD-no-think column falls to 60.6 / 959, so reasoning effort is load-bearing for code here. No SWE-bench Verified or SWE-Pro figure exists.
- **Cost efficiency: 88/100.** Apache 2.0 open weights, quantized to fit ~18 GB VRAM on consumer GPUs, plus native NVFP4 kernels and ~1,500 tok/s on a single H100 (1,000+ on RTX 5090) make this by far the cheapest throughput-per-second option in the comparison. Not higher because there is no published per-token API price to anchor against and self-hosting still requires a capable GPU.
- **Overall Score: 66.0/100.** The speed frontier of open text diffusion — ~1,500 tok/s at roughly Gemma 4 26B A4B minus 15–20 points of quality — best fit for latency-critical interactive editing, high-throughput batch generation and diffusion research, explicitly not for maximum-quality production output, where Google itself recommends standard Gemma 4.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-05
- Method: public internet research (Google AI for Developers DiffusionGemma model card, `google/diffusiongemma-26B-A4B-it` Hugging Face card, DiffusionGemma Technical Report arXiv 2608.00146, Google launch blog, NVIDIA NIM model card, vLLM integration blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.