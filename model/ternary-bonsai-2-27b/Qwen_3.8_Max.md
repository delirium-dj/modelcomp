- Source: PrismML (`ternary-bonsai-2-27b`; 1.58-bit ternary quantization of Qwen3.8-27B)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** PrismML's most capable Bonsai model — a 27B-class multimodal model derived from Qwen3.8-27B and compressed to ternary {−1, 0, +1} weights (1.76 effective bits/weight) in a 5.9GB footprint, more than 9x smaller than the ~54GB FP16 parent while retaining 98.2% of its aggregate benchmark performance. Aimed at local/consumer-hardware inference (laptops, phones, workstations) for coding-agent loops, computer-use, private document analysis, and multimodal debugging. PrismML emerged from a Caltech team (backed by Khosla Ventures, Cerberus, Google, Samsung).
- **Provider / access:** PrismML. Open weights on Hugging Face (`prism-ml` / `prism-ml/bonsai-2` collection) under Apache 2.0; hosted API and OpenRouter (`prism-ml/ternary-bonsai-2-27b`). Runs on NVIDIA GPUs via CUDA and Apple devices (Mac/iPhone/iPad) via MLX through custom low-bit kernels — **requires a forked llama.cpp / custom MLX loader**; stock loaders silently produce incorrect output (they skip the activation transform tied to the folded-in Hadamard rotation).
- **Release / knowledge:** Released 2026-09-17 (base Qwen3.8-27B; knowledge cutoff not separately published). Second Bonsai 27B generation — retention improved from ~95% (Ternary Bonsai 27B) to >98%.
- **IDs:** `prismml/ternary-bonsai-2-27b` (dataset id); `prism-ml/ternary-bonsai-2-27b` (OpenRouter); HF `prism-ml/bonsai-2` collection. Derived from `qwen/qwen3.8-27b`.
- **Context window:** 262,144 (262K) tokens total; 32,768 (32K) max output.
- **Modalities:** Text + image in → text out. Multimodal text-and-image input via an included vision tower (full MLX package 8.60GB incl. vision; language model 5.95–7.67GB depending on packing). **DISCREPANCY:** the scaffold `meta.json` states "Text in; text out" — CONTRADICTED by PrismML's official spec ("multimodal text-and-image input") and its Vision benchmark suite (CharXiv, A-OKVQA, OmniDocBench v1.6, RealWorldQA, OCRBench v2 = 78.59); recommend the curator fix `modalities`. No audio/video input; text-only output.
- **Pricing (as of 2026-11-10):** ~$0.07 / 1M input, ~$0.50 / 1M output on hosted API; **$0 self-host** on open weights (~5.9–8.6GB footprint). Exceptional intelligence-density: 0.714 mWh/token on an RTX 4090 (40% more energy-efficient than an 8B model in full precision); up to 143 tok/s (RTX 5090), ~130 tok/s (RTX 5090 PQ2_0), ~47 tok/s (Apple M5 Max).
- **Architecture:** Ternary {−1, 0, +1} weights with FP16 group-wise scaling (one shared scale per group of 128 weights) → ~1.72 bits/weight theoretical (1.75 GGUF PTQ1_0, 2.13 PQ2_0, 2.25 MLX). A blockwise Hadamard rotation (blocks of 1024) is folded into the stored weights before ternary assignment, evening out outlier values so the model avoids the reasoning collapse typical of sub-4-bit quantization; the runtime must apply the matching activation transform. Linear-attention layers with a recurrent state path (~0.0976% of tensors: norms, state path) kept at full precision.

### Raw benchmarks found

> PrismML official per-capability table (thinking mode) vs full-precision Qwen3.8-27B and Qwen3.6-27B baselines; independently confirmed by MindStudio (84.78 average across 14 thinking-mode benchmarks = 98.2% of FP16). PrismML composites are 0–100 aggregate capability scores, not raw single-benchmark percentages.

PrismML official suite (Ternary Bonsai 2 27B | Qwen3.8-27B | Qwen3.6-27B):

- **Overall: 83.9 | 85.4 | 83.6** (retains 98.2% of the FP16 parent)
- Math (AIME 2026, AIME 2025, GSM8K, MATH-500): **96.57** | 97.06 | 94.64 (within half a point of full precision)
- Knowledge & Reasoning (MMLU-Redux, GPQA Diamond, AA-LCR): **83.95** | 86.66 | 84.71
- Instruction Following (IFBench, IFEval): **82.66** | 81.25 | 74.53 (exceeds the parent)
- Coding (HumanEval+, LiveCodeBench v6, MBPP+, BigCodeBench): **81.58** | 82.17 | 82.57
- Vision (CharXiv, A-OKVQA, OmniDocBench v1.6, RealWorldQA, OCRBench v2): **78.59** | 81.64 | 79.82
- Agentic & Tool Calling (τ²-bench, BFCL v3): **77.57** | 79.74 | 80.05

Independent (MindStudio, 14 thinking-mode benchmarks):

- Average **84.78** = 98.2% of the FP16 baseline — vs **72.59** for a conventional IQ2_XXS 2-bit build (which is larger), and within **0.4 points** of a UD-Q4_K_XL build ~3x its size. Category split: math **96.57**, coding **~89.42** (roughly level with the unquantized baseline), agentic tool-calling **74.92**.
- Community/local-hardware testing (Reddit r/LocalLLM, YouTube): on 119 comfortable 27B tasks it kept ~98% of a Q4 build's score; on 90 harder reasoning/coding tasks retention fell to ~87% (68% vs 78%) — i.e., the hardest tasks degrade more, as expected under aggressive quantization.

### Normalized scores (1–100)

> Derived from the raw numbers above via `model-comparison.md`. Overall = half-up mean of the five quality dims; Cost efficiency scored independently, never counted. Scored on Bonsai 2's OWN measured benchmarks (a distinct third-party quantized artifact), not inherited from the Qwen3.8-27B parent.

- **Tool use: 74/100.** Agentic & Tool Calling composite 77.57 (PrismML; τ²-bench + BFCL v3) / 74.92 (MindStudio) — retains ~97% of the parent's 79.74 and demonstrates real coding-agent (Cline) and computer-use loops on an RTX 5090, but as a 27B-class model its absolute tool use sits in the upper-mid band, well below the frontier anchors (GDPval ~1750, Tau3 ~50%), and multi-step tool use is among the capabilities most sensitive to low-bit degradation.
- **Reasoning: 78/100.** Knowledge & Reasoning composite 83.95 (MMLU-Redux, GPQA Diamond, AA-LCR) and an outstanding Math 96.57 (AIME 2026/2025, GSM8K, MATH-500 — within half a point of full precision), with the blockwise Hadamard rotation specifically preventing the sub-4-bit reasoning collapse; held below the frontier band because it is a 27B model (parent 86.66), no HLE figure is published, and independent testing shows retention dropping to ~87% on the hardest reasoning tasks.
- **Context window: 74/100.** 262K-token native window (32K max output) — the rubric's 200K–500K band, scored low-mid for 262K; AA-LCR is folded into the Knowledge & Reasoning composite but no standalone long-context retrieval figure (MRCR/RULER) is published.
- **Multimodal: 73/100.** Text + image input → text out with a Vision composite of 78.59 (CharXiv, A-OKVQA, OmniDocBench v1.6, RealWorldQA, OCRBench v2 — strong chart/document/OCR perception, retaining ~96% of the parent's 81.64) and demonstrated computer-use over screenshots; placed at the top of the image band because there is **no audio or video input** and output is text-only, and the vision tower adds to the deployment footprint.
- **Coding: 78/100.** Coding composite 81.58 (PrismML; HumanEval+, LiveCodeBench v6, MBPP+, BigCodeBench) / ~89.42 (MindStudio) — essentially level with the unquantized parent (82.17) and validated in real coding-agent loops (Cline on RTX 5090, ~143 tok/s); upper-mid rather than frontier because it is a 27B model with no SWE-bench/DeepSWE/SciCode figure published, and independent testing shows the hardest coding tasks degrade (68% vs 78% on 90 hard reasoning/coding tasks).
- **Cost efficiency: 97/100.** ~$0.07/$0.50 per MTok hosted and **$0 self-host** on Apache 2.0 open weights in a 5.9–8.6GB footprint — an extreme intelligence-density outlier (>9x smaller than the ~54GB FP16 parent at 98.2% retention, 40% more energy-efficient than an 8B FP model, runs on a laptop/phone). Effectively top-of-band for cost; the only friction is the requirement for custom/forked kernels. Excluded from Overall.
- **Overall Score: 75.4/100.** Mean of the five quality dims (74+78+74+73+78)/5 = 75.4. Divergence note: my independent read is ~+2.3 above the peer cohort (73.1), fully weighting PrismML's official per-capability table (Overall composite 83.9) and MindStudio's independent 84.78/14-benchmark confirmation. The scores normalize a genuinely distinct third-party quantized artifact — near-full-precision 27B-class capability (math 96.57, coding ~level with parent) at a fraction of the footprint — against the rubric's absolute frontier anchors, which a 27B model does not reach on tool use/reasoning/multimodal. Best fit: private, local, or high-throughput 27B-class reasoning/coding/vision work on consumer hardware where memory, energy, or data-residency constraints rule out the FP16 parent; weaker on the hardest novel reasoning/coding tasks and it lacks audio/video and long-context (>262K) reach.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-10
- Method: public internet research (official PrismML "Introducing Bonsai 2 27B" launch post + per-capability benchmark table; MindStudio independent technical breakdown — 84.78/14-benchmark average, packing/bit-per-weight detail, category split; community local-hardware testing on retention under hard tasks; Hugging Face / OpenRouter listings). Verified this is a distinct quantized artifact (own provider, license, footprint, and measured benchmarks — 98.2% retention, measurably below the parent on the hardest tasks), not a phantom reframing or double-count of `qwen-3.8-27b`, so it is scored on its own numbers. Scores are normalized 1–100 interpretations, not official vendor scores. Researched independently of the peer findings in this folder.
- Reference URLs:
  - [Introducing Bonsai 2 27B: Near-Lossless Compression in a 9x Smaller Footprint (PrismML — official launch + benchmark table)](https://prismml.com/news/bonsai-2-27b)
  - [Bonsai 2 27B: A 27B Model That Runs in Under 6GB on a Laptop (MindStudio — independent technical breakdown)](https://www.mindstudio.ai/blog/ternary-bonsai-2-27b-2bit-model)
  - [Ternary Bonsai 2 27B vs Qwen3.8 27B (OpenRouter comparison)](https://openrouter.ai/compare/prism-ml/ternary-bonsai-2-27b/qwen/qwen3.8-27b)
  - [Bonsai 2 collection (Hugging Face — PrismML, Apache 2.0 weights)](https://huggingface.co/collections/prism-ml/bonsai-2)
