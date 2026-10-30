# DiffusionGemma 26B A4B — findings by Qwen 3.8 Max

- Source: Google DeepMind (`diffusiongemma-26b-a4b`; id `google/diffusiongemma-26B-A4B-it`; AA `diffusiongemma-26b-a4b`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Google DeepMind's June-2026 **experimental open-weight text-diffusion model** — the first of its kind. Built on Gemma 4's **26B-A4B MoE** backbone (25.2B total / 3.8B active, **Apache 2.0**), it generates **256-token blocks in parallel** (block diffusion, *not* autoregressive) at a claimed **1,000–1,500 tok/s (~4× faster)**, and fits in **24GB VRAM** quantized. **Multimodal**: text + image + video in → text out. It targets fast local generation, OCR, infilling, and bidirectional editing — **not** agentic coding. Google is candid that **quality is below standard Gemma 4** (GPQA 73.2 vs 82.3, MMMU-Pro 54.3 vs 73.8, MRCR 32.0 vs 44.1). Because AA measures neither Index, Speed, nor Cost for it, every capability number is vendor-side. Best-fit: an on-device speed/latency play and diffusion research — not a quality-first or agentic choice.

## Model card

- **Name:** DiffusionGemma 26B A4B (vendor "diffusiongemma-26B-A4B-it")
- **Short description:** Google DeepMind's experimental **block-diffusion** language model on the Gemma 4 26B-A4B MoE backbone — parallel 256-token block generation instead of autoregressive decoding. A **distinct artifact** from the autoregressive `gemma-4.26b-a4b` (its own initialization), not a duplicate.
- **Provider / access:** HuggingFace `google/diffusiongemma-26B-A4B-it` (Apache 2.0 weights, self-host $0); NVIDIA NIM (`$0/$0`); nano-gpt; Pioneer. AA lists it as self-hostable open weights (no first-party measured API). No Free ID on Zen (`noFreeId`).
- **Release / knowledge:** Released **2026-06-10** (AA FAQ; vendor 2026-06-10/11). Technical report arXiv 2608.00146 benchmarks it against its AR initialization (Gemma 4 26B A4B) and other open-weight diffusion models (e.g. LLaDA 2.1 Flash). Knowledge cutoff not independently confirmed.
- **IDs:** `google/diffusiongemma-26B-A4B-it` (no standing Free ID on Zen)
- **Context window:** **256K** nominal (AA spec table; FAQ says 260k — minor inconsistency, resolved to 256K), **but** the diffusion architecture uses a **1,024-token sliding window with a 256-token generation canvas** — so the *practical* long-range working set is far smaller than the nominal window (corroborated by weak MRCR 32.0).
- **Modalities:** **Text + image + video in → text out** (AA confirms multimodal; video as **sampled frames, max ~60s @ 1 fps** per vendor — a constrained video path). **Tagged "reasoning" by AA**, though a parallel block-diffusion generator is not a chain-of-thought reasoner in the usual sense (flagged). Native bidirectional editing / infilling.
- **Pricing (as of 2026-10-30):** Apache 2.0 open weights — self-host **$0** (~24GB VRAM quantized); NVIDIA NIM **$0/$0**; nano-gpt $0.05/$0.15; Pioneer $0.50/$0.50 per 1M. AA shows Cost N/A (no measured API).
- **Architecture:** Open-weight **block-diffusion MoE**, **25.2B total / 3.8B active**, **Apache 2.0**. Generates 256-token blocks in parallel (~1,000–1,500 tok/s vendor claim, ~4× AR) rather than token-by-token.

### Raw benchmarks found

> AA reports **Intelligence Index N/A, Speed N/A, Cost N/A, Verbosity N/A** — Speed is N/A because AA's output-tokens-per-second methodology targets autoregressive decoding and does not map to parallel diffusion generation, so the headline 1,000–1,500 tok/s is **vendor-only**. All capability numbers below are **vendor (Google DeepMind model card / arXiv report)**, and Google explicitly compares them *downward* against the AR Gemma 4 26B-A4B.

Agent / tool use:

- No agentic/tool-use benchmark found (no Terminal-Bench, GDPval, AutomationBench). The model targets fast local generation, OCR, infilling, and bidirectional editing — **not** multi-step tool orchestration; the 256-token canvas / sliding window is ill-suited to long agentic loops.

Reasoning / knowledge:

- GPQA: **73.2** (vendor) vs Gemma 4 26B-A4B's **82.3** — Google states diffusion quality is below the AR model.
- AA Intelligence Index: **N/A** (not scored). AA tags it "reasoning," but no chain-of-thought evidence is published.

Coding:

- No SWE-bench / LiveCodeBench figure found. NVIDIA NGC claims "strong performance across… code," and infilling/editing is code-adjacent, but **no quantified coding benchmark** is published; Google's own comparison set (GPQA / MMMU-Pro / MRCR) is non-coding and lands below Gemma 4.

Multimodal:

- MMMU-Pro (visual reasoning): **54.3** (vendor) vs Gemma 4's **73.8** — vision quality notably below the AR model, despite text+image+video input support.

Long context:

- MRCR: **32.0** (vendor) vs Gemma 4's **44.1** — weak long-range retrieval, consistent with the 1,024-token sliding window / 256-token canvas despite the 256K nominal window.

> **Meta-verification:** `meta.json` is accurate and unusually candid — id ✓, 25.2B/3.8B ✓, 256K with 1,024-token sliding window + 256-token canvas ✓, Apache 2.0 ✓, "text, image in; video as sampled frames (max 60s @ 1 fps)" ✓, 1,000–1,500 tok/s ✓, ~24GB VRAM ✓, NVIDIA NIM $0/$0 ✓, and the tradeoff correctly states "diffusion output quality is below standard Gemma 4 — GPQA 73.2 vs 82.3, MMMU-Pro 54.3 vs 73.8, MRCR 32.0 vs 44.1" ✓. **Flags:** (1) **AA lists video input** (text+image+video) — slightly more generous than meta's "text, image in"; the video path is frame-sampled and constrained; (2) **AA Speed N/A** even though speed is the whole selling point — the 1,000–1,500 tok/s is vendor-only and not AA-measured; (3) **AA Index N/A** → every capability number is vendor; (4) AA's **"reasoning" tag** sits oddly with a parallel block-diffusion generator (no CoT evidence); (5) context 256k spec vs 260k FAQ; (6) the 256K nominal window is architecturally undercut by the sliding window / small canvas (MRCR 32.0).

### Normalized scores (1–100)

- **Tool use: 62/100.** No agentic/tool-use benchmark exists; the model is a fast local generation / OCR / infilling engine, and its 256-token canvas + 1,024-token sliding window are ill-suited to multi-step tool loops. Scored for absent-and-architecturally-unsupported agentic capability.
- **Reasoning: 72/100.** Vendor GPQA **73.2** is respectable but explicitly **below the AR Gemma 4 (82.3)**, the **AA Index is N/A**, and the "reasoning" tag is unbacked by chain-of-thought evidence — an experimental diffusion model that trades quality for speed.
- **Context window: 68/100.** **256K nominal** (AA spec; FAQ 260k) but a **1,024-token sliding window + 256-token canvas** and weak **MRCR 32.0** (vs Gemma 4's 44.1) mean the practical long-range context is far smaller — discounted well below the nominal-256K band (78).
- **Multimodal: 80/100.** Genuine **text + image + video input → text out** (AA-confirmed multimodal breadth), but video is frame-sampled/constrained (~60s @ 1 fps), output is text-only (no image/audio gen), and vision quality (MMMU-Pro 54.3) is well below Gemma 4 — credited for breadth, shaded for the limited video path.
- **Coding: 66/100.** No published coding benchmark; infilling/bidirectional editing is code-adjacent and NVIDIA claims "strong… code," but it is unquantified and Google states overall quality is below the AR Gemma 4 — thin, unverified coding.
- **Cost efficiency: 94/100.** Exceptional — **Apache 2.0** self-host **$0**, fits **24GB VRAM** quantized, **NVIDIA NIM $0/$0**, and the diffusion speed (1,000–1,500 tok/s vendor, ~4× AR) slashes cost-per-token. Not counted in Overall.
- **Overall Score: 70/100.** Mean of the five quality dims (62+72+68+80+66)/5 = 69.6 → 70. Divergence **+1.6** vs curated 68.4 — close alignment. Multimodal breadth (80) and the experimental-novelty lift it, but absent agentic/coding evidence, the sliding-window context discount, and Google's own "below Gemma 4" quality statement hold it to a solid-experimental tier. Best-fit: an on-device speed/latency play and diffusion research — not quality-first or agentic.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-30
- Method: public internet research (Artificial Analysis `diffusiongemma-26b-a4b` page incl. FAQ, Google DeepMind `deepmind.google/models/gemma/diffusiongemma` + AI model card, arXiv 2608.00146 technical report, NVIDIA NGC catalog, vLLM recipes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
