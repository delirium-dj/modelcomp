# DiffusionGemma 26B A4B — findings by Kimi K3

- Source: Google DeepMind (`diffusiongemma-26b-a4b-it`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B (instruction-tuned)
- **Short description:** Google DeepMind's experimental open-weights **text-diffusion** model (launched 2026-07 per The Keyword + HF collection): block-autoregressive decoder that denoises 256-token canvases in parallel for >1100 tok/s per-user generation on a single H100 (FP8). Built on the Gemma 4 26B-A4B backbone — quality trades down for speed.
- **Provider / access:** Open weights, Apache 2.0 (`google/diffusiongemma-26B-A4B-it` on HF/Kaggle); Transformers / vLLM / SGLang / Docker; NVIDIA NIM listing. Chat template with `<|think|>` thinking mode and native system prompts.
- **Release / knowledge:** 2026-07 (The Keyword launch; HF collection updated Jul 21); training data cutoff Jan 2025 (model card).
- **IDs:** `google/diffusiongemma-26B-A4B-it` (HF). No OpenCode Zen Free ID verified; free = self-host (Apache 2.0).
- **Context window:** up to 256K tokens; sliding window 1,024; canvas length 256; vocab 262K. Video input limited to ~60 s at 1 fps.
- **Modalities:** text/image/video in → text out (~550M-param vision encoder, variable aspect/resolution [70–1120 token budgets]); thinking mode; native function calling; encoder caches prompt (AR prefill) + bidirectional diffusion decoder.
- **Pricing (as of 2026-10-09):** free open weights (Apache 2.0); hosted cost = own hardware (single capable accelerator by design).
- **Architecture:** encoder-decoder diffusion LM on Gemma 4 MoE: 25.2B total / 3.8B active, 30 layers, 8-of-128 experts + 1 shared.

### Raw benchmarks found

(HF model card, EB sampler, instruction-tuned; Gemma 4 26B A4B shown as reference)

Agent / tool use:

- Tau2 (avg of 3): **56.2%** (vs Gemma 4's 68.2%); native function calling supported
- Terminal-Bench / Tau3 / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **73.2%** (vs 82.3%); AIME 2026 (no tools): **69.1%** (vs 88.3%)
- HLE: **11.0%** no tools / **11.9%** with search; BigBench Extra Hard: **47.6%**
- MMLU-Pro: **77.6%**; MMMLU: **81.5%**
- CritPt / AA Intelligence Index: no verified public score found

Coding:

- LiveCodeBench v6: **69.1%** (vs 77.1%); Codeforces Elo: **1429** (vs 1718)
- SWE-bench Verified / SciCode: no verified public score found

Long context:

- MRCR v2 (8-needle, 128k): **32.0% average** (vs Gemma 4's 44.1%) — weakest dimension in the card.

Multimodal:

- MMMU-Pro: **54.3%** (vs 73.8%); MathVision: **70.5%**; MedXPertQA MM: **49.0%**; OmniDocBench 1.5 edit distance: **0.319** (worse than 0.149)

Speed (the actual point): **>1100 tok/s** per user at low batch on H100 FP8 (15–20 tokens per forward pass; adaptive denoising steps).

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 58/100.** Native function calling plus Tau2 56.2% — usable agent plumbing but clearly below its AR twin (68.2%) and untested on Terminal-Bench/MCP suites.
- **Reasoning: 58/100.** GPQA 73.2 / AIME 69.1 are decent for 3.8B active; HLE ~11% and BBH-ExtraHard 47.6% show the diffusion quality tax on hard reasoning.
- **Context window: 55/100.** 256K claimed on paper, but MRCR 8-needle 128k at 32.0% is weak — retrieval quality drops inside the window; the encoder-prefill design also caps effective multiturn reuse.
- **Multimodal: 72/100.** Real image+video intake (MMMU-Pro 54.3, MathVision 70.5, OCR/document tooling) with configurable visual budgets; trails its Gemma 4 sibling and top VLMs; text-only output.
- **Coding: 60/100.** LCB v6 69.1% and Codeforces 1429 are serviceable mid-tier coding; 8+ points behind the AR version of itself.
- **Cost efficiency: 92/100.** Apache 2.0, single-GPU small-batch design, >1100 tok/s decode — near-cheapest path per token at this capability.
- **Overall Score: 61/100.** Mean of 58/58/55/72/60 = 60.6 → 60.6. Best fit: latency-critical interactive products (real-time assistants, live UI generation) that can trade ~10 points of benchmark quality for 5–10x decode speed on open weights.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (official HF model card with benchmark table, Google DeepMind/ai.google.dev docs, The Keyword launch post, NVIDIA NIM listing, llmdb architecture notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
