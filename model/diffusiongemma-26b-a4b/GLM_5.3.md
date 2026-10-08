# DiffusionGemma 26B A4B — findings by GLM 5.3

- Source: Google DeepMind (`diffusiongemma-26b-a4b`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind's experimental open-weights text-diffusion model built on the Gemma 4 26B A4B MoE (25.2B total / 3.8B active) — block-autoregressive discrete diffusion denoising 256-token canvases in parallel, exceeding 1,100 tok/s per user on one H100 (FP8). Best for latency-sensitive local editing and code infilling; slightly below its autoregressive Gemma 4 sibling on quality across the board.
- **Provider / access:** self-host via Hugging Face `google/diffusiongemma-26B-A4B-it` (Apache 2.0, ~24GB VRAM quantized); hosted at $0 on NVIDIA NIM, $0.05/$0.15 on nano-gpt, $0.50/$0.50 on Pioneer (project meta). Project meta lists Zen ID `opencode/diffusiongemma-26b-a4b` (absent from the live Zen models list when re-checked 2026-10-08).
- **Release / knowledge:** 2026-06-10 (Artificial Analysis); training data cutoff January 2025 (model card).
- **IDs:** `opencode/diffusiongemma-26b-a4b` (project meta); Hugging Face `google/diffusiongemma-26B-A4B-it`.
- **Context window:** 256K total (model card "up to 256K"; Artificial Analysis 260k), 32K max output (project meta); canvas length 256 tokens.
- **Modalities:** text, image, video in (video as frames, max 60s at 1fps); text out; thinking mode configurable; native function calling; JSON mode not verified.
- **Pricing (as of 2026-10-08):** Apache 2.0 self-host $0; NVIDIA NIM serves $0/$0 per 1M; nano-gpt $0.05/$0.15; Pioneer $0.50/$0.50 (project meta pricing tiers).
- **Architecture:** 25.2B total / 3.8B active MoE (8 active experts of 128 + 1 shared), 30 layers, encoder-decoder with bidirectional attention over the generation canvas, vision encoder ~550M params, vocab 262K; discrete text diffusion with Entropy-Bounded Denoising (48 max steps, adaptive stopping).

### Raw benchmarks found

> All capability numbers are vendor model-card results for the instruction-tuned model with the recommended EB sampler (Hugging Face `google/diffusiongemma-26B-A4B-it`), each paired with the autoregressive Gemma 4 26B A4B sibling for scale. Artificial Analysis tracks the model (estimated Intelligence Index 10 — independent evaluation not yet public; no AA-measured rows). BenchLM/ApX: no page.

Agent / tool use:

- Tau2 (average over 3 domains): **56.2%** (Gemma 4 sibling: 68.2%) (model card)
- Native function calling: verified capability (model card)
- Terminal-Bench / Tau3 / GDPval / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **73.2%** (sibling 82.3%) (model card)
- AIME 2026 (no tools): **69.1%** (sibling 88.3%) (model card)
- MMLU Pro: **77.6%** (sibling 82.6%) (model card)
- MMMLU: **81.5%** (sibling 86.3%) (model card)
- BigBench Extra Hard: **47.6%** (sibling 64.8%) (model card)
- HLE: **11.0%** no tools / **11.9%** with search (sibling 8.7%/17.2%) (model card)
- AA Intelligence Index: **10** (estimated, independent evaluation forthcoming) (Artificial Analysis)

Coding:

- LiveCodeBench v6: **69.1%** (sibling 77.1%) (model card)
- Codeforces ELO: **1429** (sibling 1718) (model card)
- SWE-bench / SciCode / DeepSWE: **no verified public score found**

Multimodal:

- MMMU Pro: **54.3%** (sibling 73.8%) (model card)
- MATH-Vision: **70.5%** (sibling 82.4%) (model card)
- MedXPertQA MM: **49.0%** (sibling 58.1%) (model card)
- OmniDocBench 1.5 (avg edit distance, lower is better): **0.319** (sibling 0.149) (model card)

Long context:

- MRCR v2 8-needle 128K (average): **32.0%** (sibling 44.1%) (model card) — weak measured retrieval.

Serving speed (the headline claim, not a capability benchmark):

- **>1,100 tokens/s** per user in low-batch settings on a single H100 (FP8), 15–20 tokens per forward pass via parallel canvas denoising (model card); ~1,500 tok/s block generation per project meta.

### Normalized scores (1–100)

- **Tool use: 52/100.** Tau2 56.2% is mid-band with native function calling verified, but no Terminal-Bench/GDPval/Claw coverage exists — thin agentic evidence on a paradigm (block diffusion) whose multi-step tool behavior is unproven.
- **Reasoning: 55/100.** GPQA 73.2%, AIME 69.1% and MMLU-Pro 77.6% are respectable for 3.8B active, but every number trails the autoregressive sibling by ~9–19 points, with HLE ~11% and BBH-Extra-Hard 47.6% capping further.
- **Context window: 68/100.** 256K is just above the 200K (=70) tier floor, and the only published retrieval measurement (MRCR v2 32.0% at 128K) is poor — scored below the tier midpoint.
- **Multimodal: 72/100.** Text, image and video input verified (video via frames), with Math-Vision 70.5% solid but MMMU-Pro 54.3% and document parsing (OmniDocBench 0.319 edit distance) mediocre.
- **Coding: 55/100.** LiveCodeBench v6 69.1% and Codeforces 1429 are mid-tier with zero SWE-bench evidence; the card pitches adaptive speed on code rather than frontier correctness.
- **Cost efficiency: 100/100.** Apache 2.0 self-hosting at $0 and free NIM hosting ($0/$0 per 1M) — as close to free as serving gets, with extreme token velocity on top.
- **Overall Score: 60/100.** (52 + 55 + 68 + 72 + 55) / 5 = 60.4 → 60. Best-fit recommendation: latency-critical local editing, infilling and drafting where >1,100 tok/s matters more than peak accuracy — the diffusion tax costs ~10 quality points versus the same-size autoregressive Gemma 4.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Hugging Face model card with vendor benchmark table, Artificial Analysis tracking, project pricing tiers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
