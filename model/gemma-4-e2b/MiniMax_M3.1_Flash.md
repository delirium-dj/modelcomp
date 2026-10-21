# Gemma 4 E2B — findings by MiniMax M3.1 Flash

- Source: Google DeepMind (Gemma 4 E2B), `google/gemma-4-E2B`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google's April 2026 Apache-2.0 ultra-edge model — **2.3B effective parameters** (5.1B with embeddings), 128K context, native text + image + **audio** input plus video-as-frames, and a **3.3 GB** Q4_0 build that runs on a Raspberry Pi. It is the smallest member of the Gemma 4 line, priced like a commodity API call.
- **Provider / access:** Hugging Face `google/gemma-4-E2B` (base) and `google/gemma-4-E2B-it` (instruct); GGUF/ONNX/LiteRT/MLX quants from `ggml-org`, `unsloth`, `litert-community`, `onnx-community`, `mlx-community`; hosted at roughly **$0.04/M in, $0.08/M out** on the cheap routes. **Not on OpenCode Zen**, and no OpenRouter listing for the 2B.
- **Release / knowledge:** **2026-04-02** (HF blog "Welcome Gemma 4"; AA "released on April 2, 2026") — the HF repos existed from 2026-03-02 with early weights. Knowledge cutoff not published.
- **IDs:** `google/gemma-4-E2B`, `google/gemma-4-E2B-it` (HF).
- **Context window:** **128,000** tokens (`max_position_embeddings` 131,072).
- **Modalities:** text, image and **audio** input (audio ≤30 s); video via frame sequences (≤60 s at 1 fps); text out; image token budgets 70/140/280/560/1120.
- **Pricing (as of 2026-10-20):** hosted **~$0.04/M in, $0.08/M out**; self-host $0 (Apache 2.0) — Q4_0 GGUF ≈3.30 GB with the vision projector, Q8_0 ≈5.36 GB, BF16 ≈9.98 GB.
- **Architecture:** 2.3B effective / 5.1B with embeddings, 35 layers, 512-token sliding window, vocab 262,144, ~150M vision encoder, ~300M audio encoder, Per-Layer Embeddings, shared KV cache, dual RoPE, hybrid local/global attention.

### Raw benchmarks found

> Google's model card for the instruction-tuned build, with Artificial Analysis and
> BenchLM readings added.

Reasoning / knowledge:

- MMLU-Pro: **60.0%** (card) · GPQA Diamond: **43.4%** (card) / **43.33%** (AA) · MMMLU: **67.4%** (card) · BigBench Extra Hard: **21.9%** (card) · AIME 2026 (no tools): **37.5%** (card)
- HLE: **4.77%** (AA) — the card publishes no HLE row for E2B/E4B · CritPt: **0%** (AA) · AA-LCR: **16.33%** (AA) · MLCR: **18.33%** (AA)
- Artificial Analysis Intelligence Index: **7.8** (headline 8, estimated; #64/141) · Omniscience Index / Accuracy / Hallucination Rate: **−23.6 / 6.6% / 32.4%** (AA) · IFBench: **38.03%** (AA) · BenchLM composite **29.9/100, #185 of 972**

Agent / tool use:

- Tau2-bench: **20.76%** (AA) · GDPval-AA: **−187.7** i.e. ~0% normalized (AA) · Terminal-Bench 2.1: **0.37%** (AA) · Terminal-Bench Hard: **3.03%** (AA) · AutomationBench: **50.96%** (AA) · ExtractBench (LlamaIndex): **51.85%** (AA)

Coding:

- LiveCodeBench v6: **44.0%** (card) · Codeforces ELO: **633** (card) · SWE-bench / DeepSWE / SciCode: no verified public score found

Multimodal:

- MMMU-Pro: **44.2%** (card) / **44.57%** (AA) · MATH-Vision: **52.4%** (card) · MedXPertQA-MM: **23.5%** (card) · OmniDocBench 1.5: **0.290** edit distance (card) · CoVoST **33.47**, FLEURS **0.09** (card)

Long context:

- MRCR v2 8-needle at 128k: **19.1%** (card) — weak retrieval at the window's edge.

### Normalized scores (1–100)

- **Tool use: 28/100.** τ²-bench 20.8%, Terminal-Bench 2.1 0.37% and GDPval-AA ~0% are the floor of the band, with AutomationBench 50.96% the only bright spot.
- **Reasoning: 38/100.** MMLU-Pro 60.0%, GPQA 43.4% and AIME 2026 37.5% are modest, capped by HLE 4.8%, AA-LCR 16.3%, CritPt 0% and an Intelligence Index of 7.8.
- **Context window: 58/100.** 128,000 tokens with MRCR measured at only 19.1% at 128k — the window is short and the retrieval is poor.
- **Multimodal: 90/100.** Text, image **and audio** input with video-as-frames — the top multimodal band by construction, measured on MMMU-Pro 44.2%, OmniDocBench 0.290 and CoVoST 33.47.
- **Coding: 38/100.** LiveCodeBench v6 44.0% and Codeforces 633 are low, with no SWE-bench figure at all.
- **Cost efficiency: 99/100.** Hosted at ~$0.04/$0.08 per 1M, and Apache 2.0 weights at a 3.3 GB Q4_0 footprint you can run on a Pi-class device.
- **Overall Score: 50/100.** Mean of the five quality dims = (28 + 38 + 58 + 90 + 38) / 5 = 50.4 → **50**. Best fit: on-device perception — image and audio understanding on a phone or Raspberry Pi — where the 3.3 GB footprint matters more than reasoning depth.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Google Gemma 4 E2B Hugging Face model card and config, ggml-org GGUF blob listings, HF blog, Artificial Analysis, BenchLM, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_4_E4B.md`, using the same headings.
