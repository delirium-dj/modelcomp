# Gemma 4 E4B — findings by MiniMax M3.1 Flash

- Source: Google DeepMind (Gemma 4 E4B), `google/gemma-4-E4B`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google's April 2026 Apache-2.0 edge model — **4.5B effective parameters** (8B including embeddings) with a 128K window, native image **and audio** input plus video-as-frames, a Q4_0 GGUF of just 4.59 GB for phones and Jetson, and an AA Intelligence Index of 9. Cheap and multimodal, but small: MMLU-Pro 69.4%, LiveCodeBench v6 52.0%.
- **Provider / access:** Hugging Face `google/gemma-4-E4B` (base) and `google/gemma-4-E4B-it` (instruct), GGUF quants from `ggml-org`, and hosted routes at **$0.02/M in, $0.10/M out** (AA's median; models.dev lists a $0.02/$0.10 route). **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-04-02** (HF blog "Welcome Gemma 4"; models.dev release_date) vs 2026-04-03 (AA) — conflict noted; the HF repo was created 2026-03-02 with early weights. Knowledge cutoff not published.
- **IDs:** `google/gemma-4-E4B`, `google/gemma-4-E4B-it` (HF).
- **Context window:** **128,000** tokens (the E2B/E4B edge sizes get half the 256K of the 12B/26B A4B/31B models).
- **Modalities:** text, image (variable aspect ratio, token budgets 70–1120) and **audio** (≤30 s) input; video as frames (≤60 s @1 fps); text out.
- **Pricing (as of 2026-10-20):** hosted **$0.02/M in, $0.10/M out**; self-host $0 (Apache 2.0).
- **Architecture:** 4.5B effective (8B with embeddings), 42 layers, 512-token sliding window, vocab 262K, ~150M vision encoder, ~300M audio encoder; GGUF sizes: BF16 15.05 GB, Q8_0 8.03 GB, Q4_0 4.59 GB.

### Raw benchmarks found

> Google publishes Gemma 4 E4B's numbers on the model card; Artificial Analysis and BenchLM add independent rows, and the τ² row differs by benchmark definition.

Reasoning / knowledge:

- MMLU-Pro: **69.4%** (Google card) · GPQA Diamond: **58.6%** (card) / **57.58%** (AA) · MMMLU: **76.6%** (card) · BigBench Extra Hard: **33.1%** (card)
- AIME 2026 (no tools): **42.5%** (card) · HLE: **3.75%** (AA) · Artificial Analysis Intelligence Index: **9 (estimated)**, #51/1419 · AA-LCR: **32.0%** · CritPt: **0.57%** · IFBench: **44.2%** (AA)
- Omniscience Accuracy / Hallucination Rate: **8.6% / 30.9%** (AA) · output speed **28.4 tok/s**, TTFT 0.92s

Agent / tool use:

- Tau2-bench: **42.2%** (Google card, average over 3 domains) vs **20.76%** (AA) — different benchmarks/metrics, both cited
- Terminal-Bench 2.1: **1.87%** (AA) · Terminal-Bench Hard: **8.33%** (AA) · GDPval-AA: **−36.44** i.e. ~0% normalised (AA) · AutomationBench partial: **0.46%** (AA)
- Toolathlon / MCP-Atlas / OSWorld: no verified public score found

Coding:

- LiveCodeBench v6: **52.0%** (Google card) · Codeforces ELO: **940** (card) · SWE-bench / SWE-bench Pro / DeepSWE / SciCode: no verified public score found
- AA-SciCode: **24.4%** · AA-Coding Index: **9.4** (AA) · ExtractBench **69.64%** / ParseBench **40.50%** (BenchLM rows)

Multimodal:

- MMMU-Pro: **52.6%** (card) / **51.4%** (AA) · MATH-Vision: **59.5%** (card) · MedXPertQA-MM: **28.7%** (card) · OmniDocBench 1.5: **0.181** edit distance (card)
- Audio: CoVoST **35.54**, FLEURS **0.08** (lower better) (card)

Long context:

- MRCR v2 8-needle at 128k: **25.4%** (card) — the only long-context retrieval figure, and it is weak.

### Normalized scores (1–100)

- **Tool use: 25/100.** τ²-bench 20.8–42.2%, Terminal-Bench 2.1 1.87%, GDPval-AA ~0% and AutomationBench 0.5% put it at the floor of the agentic band.
- **Reasoning: 45/100.** MMLU-Pro 69.4%, GPQA 57.6% and MMMLU 76.6% are modest for a 2026 model, capped by AIME 2026 42.5%, HLE 3.75%, BBEH 33.1%, CritPt 0.57% and an AA Intelligence Index of 9.
- **Context window: 60/100.** 128K tokens with MRCR measured at only 25.4% at 128k — the window is small and the retrieval is poor.
- **Multimodal: 88/100.** Text, image **and audio** input with video-as-frames — the top multimodal band by construction, measured on MMMU-Pro 52.6%, MATH-Vision 59.5% and OmniDocBench 0.181.
- **Coding: 45/100.** LiveCodeBench v6 52.0% and Codeforces 940 are low, with no SWE-bench, DeepSWE or SciCode figure at all.
- **Cost efficiency: 99/100.** $0.02/M in and $0.10/M out hosted, Apache 2.0 weights, and a 4.59 GB Q4_0 build that runs on a phone-class device.
- **Overall Score: 53/100.** Mean of the five quality dims = (25 + 45 + 60 + 88 + 45) / 5 = 52.6 → **53**. Best fit: on-device perception — image, audio and video understanding on a phone or Jetson — where the 4.5 GB footprint matters more than reasoning depth.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Google Gemma 4 E4B Hugging Face model card, ggml-org GGUF blob listings, HF blog, Artificial Analysis, BenchLM, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_4_E2B.md`, using the same headings.
