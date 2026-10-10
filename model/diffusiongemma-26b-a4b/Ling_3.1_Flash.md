# DiffusionGemma 26B A4B — findings by Ling 3.1 Flash

- Source: Google DeepMind (`diffusiongemma-26b-a4b`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind's experimental open-weights model that generates tokens by discrete diffusion instead of autoregression, built on the Gemma 4 26B A4B MoE architecture. Explores much faster text generation while staying deployable on consumer GPUs (quantized fits 18 GB VRAM). Not a variant of another entry — a distinct diffusion-generation model sharing the Gemma 4 backbone.
- **Provider / access:** Hugging Face `google/diffusiongemma-26B-A4B-it` (Apache 2.0 open weights); vLLM serving documented (canvas length 256, Entropy Bound sampler recommended); Google AI for Developers docs.
- **Release / knowledge:** Weights published 2026-09-29 (developer guide 2026-06-10); knowledge cutoff not stated.
- **IDs:** `google/diffusiongemma-26B-A4B-it` (HF). No OpenCode Zen Free ID found — open weights, self-hosted.
- **Context window:** up to 256K tokens; sliding window 1024 tokens; canvas length 256 tokens (denoising block size) — verified on the Google AI model card.
- **Modalities:** text and image in (spec table); text out; the overview page also claims video input, but the card's supported-modality table lists Text, Image only — treated conservatively as text+image. Vision encoder ~550M params. Tool calls / JSON mode: not stated.
- **Pricing (as of 2026-10-10):** Apache 2.0 open weights — no per-token API price; self-host cost is hardware only (quantized < 18 GB VRAM).
- **Architecture:** sparse MoE, 25.2B total / 3.8B active per token, 30 layers, 8 active of 128 total experts + 1 shared, vocab 262K; discrete diffusion generation with Entropy Bound sampler.

### Raw benchmarks found

Agent / tool use:

- Tau2 (average over 3 domains): **56.2%** (Google AI model card, EB sampler; Gemma 4 26B A4B: 68.2%)
- Terminal-Bench 2.1: no verified public score found
- τ³-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **73.2%** (Google AI model card; Gemma 4 26B A4B: 82.3%)
- HLE (no tools): **11.0%**; HLE with search: **11.9%** (Gemma 4: 8.7% / 17.2%)
- MMLU Pro: **77.6%** (Gemma 4: 82.6%); MMMLU: **81.5%** (86.3%)
- AIME 2026 (no tools): **69.1%** (Gemma 4: 88.3%)
- BigBench Extra Hard: **47.6%** (Gemma 4: 64.8%)
- LCR / MLCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- LiveCodeBench v6: **69.1%** (Google AI model card; Gemma 4: 77.1%)
- Codeforces ELO: **1429** (Gemma 4: 1718)
- SWE-bench Verified / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR v2, 8 needles @ 128K (average): **32.0%** (Google AI model card; Gemma 4: 44.1%) — weak retrieval at 128K; no RULER / GraphWalks number reported.

Vision:

- MMMU Pro: **54.3%** (Gemma 4: 73.8%); MATH-Vision: **70.5%** (82.4%); MedXPertQA MM: **49.0%** (58.1%); OmniDocBench 1.5 avg edit distance: **0.319** (lower is better; Gemma 4: 0.149)

### Normalized scores (1–100)

- **Tool use: 58/100.** Tau2 average 56.2% is mid-band; no Terminal-Bench, τ³-Banking, GDPval-AA, MCP-Atlas, or Toolathon numbers exist for this diffusion model.
- **Reasoning: 60/100.** GPQA 73.2% and MMLU Pro 77.6% sit in the mid band, AIME 69.1% is decent, but HLE 11.0% and BigBench Extra Hard 47.6% are well below the Gemma 4 backbone's levels — the diffusion objective trades reasoning depth for speed.
- **Context window: 68/100.** 256K nominal window (200K–500K band), but measured MRCR v2 retrieval at 128K is only 32.0%, dragging the score toward the bottom of the band.
- **Multimodal: 62/100.** Text + image input with text-only output (+image band, 60–70); MMMU Pro 54.3% is weak and the claimed video input is not in the card's modality table.
- **Coding: 70/100.** LiveCodeBench v6 69.1% and Codeforces ELO 1429 are solid for a 3.8B-active model but trail the Gemma 4 backbone (77.1% / 1718); no SWE-bench or DeepSWE numbers published.
- **Cost efficiency: 95/100.** Apache 2.0 open weights with no per-token API price — self-hosted inference is free per token (hardware only) and quantized runs fit 18 GB consumer GPUs.
- **Overall Score: 64/100.** Mean of Tool 58, Reasoning 60, Context 68, Multimodal 62, Coding 70 = 63.6 → 64. Best-fit: fast, cheap local diffusion generation for high-throughput text+image tasks where Gemma-4-class reasoning depth is not required.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (Google AI for Developers DiffusionGemma model card and overview, Hugging Face google/diffusiongemma-26B-A4B-it card, Google Developers blog guide 2026-06-10); scores are normalized 1–100 interpretations, not official vendor scores. All benchmarks are Google-reported with the recommended Entropy Bound sampler.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
