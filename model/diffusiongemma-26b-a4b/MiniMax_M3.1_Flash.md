# DiffusionGemma 26B A4B — findings by MiniMax M3.1 Flash

- Source: Google DeepMind (DiffusionGemma 26B A4B), `google/diffusiongemma-26B-A4B-it`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google's June 2026 experimental **text-diffusion** model (Apache 2.0) — the same 25.2B/3.8B-active MoE backbone as Gemma 4 26B A4B, but generating text by iterative denoising on a 256-token canvas at 1,100+ tok/s, with bidirectional editing, infilling and OCR in one checkpoint. Google states plainly that its output quality is *lower* than standard Gemma 4.
- **Provider / access:** Hugging Face `google/diffusiongemma-26B-A4B-it` (Apache 2.0; community quants from unsloth, RedHatAI, NVIDIA NVFP4, mlx-community), local serving with Transformers/JAX. **Not on OpenCode Zen** and not on OpenRouter.
- **Release / knowledge:** **2026-06-10** (Google blog "DiffusionGemma: 4x faster text generation"); technical report arXiv **2608.00146** (published 2026-07-31). Knowledge cutoff not published.
- **IDs:** `google/diffusiongemma-26B-A4B-it` (HF — the lowercase `google/diffusiongemma-26b-a4b` path returns 401).
- **Context window:** up to **256,000** tokens, with a **1,024-token sliding window** and a **256-token canvas** (the denoising block); no published max-output figure.
- **Modalities:** text and image input (video supported as frames, ≤60 s at 1 fps); text output; thinking mode via `<|think|>`; function calling; 35+ languages out of the box.
- **Pricing (as of 2026-10-20):** Apache 2.0 weights, self-host $0; hosted routes run **$0–$0.50/M in and $0–$0.50/M out**.
- **Architecture:** discrete text diffusion, block-autoregressive multi-canvas sampling; encoder-decoder (AR encoder prefills the prompt, the decoder attends bidirectionally over the canvas); 30 layers, 8 active of 128 experts + 1 shared, ~550M vision encoder; fine-tuned from Gemma 4 26B A4B with SFT then RL + sampler distillation in under 10% of the AR model's token budget.

### Raw benchmarks found

> Google's model card prints DiffusionGemma beside the autoregressive Gemma 4 26B A4B, so the delta is visible; Artificial Analysis and BenchLM add independent rows.

Reasoning / knowledge:

- GPQA Diamond: **73.2%** (card) vs **66.87%** (AA) — vs 82.3% for the AR Gemma 4 26B A4B
- MMLU-Pro: **77.6%** (card) vs 82.6% (AR baseline) · MMMLU: **81.5%** vs 86.3% · BigBench Extra Hard: **47.6%** vs 64.8%
- HLE: **11.0%** no tools / **11.9%** with search (card) / **10.84%** (AA) · CritPt: **0.29%** (AA) · Artificial Analysis Intelligence Index: no published value (AA shows 10.3 for the family page) · AA-LCR: **19.7%** (AA) · Omniscience Accuracy / Hallucination Rate: **16.6% / 90.9%** (AA)

Agent / tool use:

- Tau2-bench (avg of 3): **56.2%** (card) vs 68.2% (AR baseline) · Terminal-Bench 2.1: **12.36%** (AA) · GDPval-AA: **321.41** (AA) · AutomationBench / Toolathlon / MCP-Atlas: no verified public score found

Coding:

- LiveCodeBench v6: **69.1%** (card) vs 77.1% (AR baseline) · Codeforces ELO: **1429** vs 1718 · AIME 2026 (no tools): **69.1%** vs 88.3% · SWE-bench / DeepSWE / SciCode: no verified public score found

Multimodal:

- MMMU-Pro: **54.3%** (card) vs 73.8% (AR baseline) · MATH-Vision: **70.5%** vs 82.4% · MedXPertQA-MM: **49.0%** vs 58.1% · OmniDocBench 1.5 edit distance: **0.319** vs 0.149 (lower is better) · MMMU-Pro (AA): **66.53%**

Long context:

- MRCR v2 8-needle at 128k: **32.0%** (card) vs 44.1% (AR baseline)

Throughput:

- **1,100+ tok/s** (model card, H100 FP8, low batch) · "1,000+ tok/s on a single H100, 700+ on RTX 5090" (Google blog) · "roughly 1,500 output tok/s on a single H100" (technical report) — three different figures, all cited; fits 18 GB VRAM when quantized

### Normalized scores (1–100)

- **Tool use: 35/100.** Tau2-bench 56.2% is mid-low, Terminal-Bench 2.1 12.4% (AA) and GDPval-AA 321 are at the floor, and no MCP-Atlas or AutomationBench figure exists.
- **Reasoning: 50/100.** GPQA 66.9–73.2%, MMLU-Pro 77.6% and AIME 2026 69.1% are mid-band, capped by HLE ~11%, CritPt 0.29%, AA-LCR 19.7% and a 90.9% hallucination rate — diffusion decoding measurably erodes reasoning quality versus the AR twin.
- **Context window: 68/100.** 256,000 tokens with MRCR v2 at only 32.0% at 128k, and no retrieval test at the top of the window.
- **Multimodal: 80/100.** Text and image input (video as frames) with text out — the "+image in" band, though MMMU-Pro 54.3% trails the AR model's 73.8%.
- **Coding: 50/100.** LiveCodeBench v6 69.1% and Codeforces 1429 are mid, with no SWE-bench, DeepSWE or SciCode figure at all.
- **Cost efficiency: 98/100.** Apache 2.0 weights, $0 self-host, and hosted routes that are effectively free; the trade is a 4× speed advantage rather than a price one.
- **Overall Score: 57/100.** Mean of the five quality dims = (35 + 50 + 68 + 80 + 50) / 5 = 56.6 → **57**. Best fit: local high-throughput generation, OCR, infilling and bidirectional editing where 1,000+ tok/s matters more than peak quality — Google's own guidance is to use standard Gemma 4 when quality is the goal.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Google's DiffusionGemma blog and Hugging Face model card, arXiv technical report, Artificial Analysis, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_4_26B_A4B.md`, using the same headings.
