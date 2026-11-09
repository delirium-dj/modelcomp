# Ternary Bonsai 27B — findings by Qwen 3.8 Flash

- Source: PrismML (`Ternary-Bonsai-27B`, curated id `opencode/ternary-bonsai-27b`), cross-checked against PrismML's launch post + whitepaper table, an independent technical explainer (Regolo.ai), and community local-run reports
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note:** this slug is the **first-generation** Bonsai — **Ternary Bonsai 27B, released 2026-07-14, quantized from Qwen3.6 27B**. It is **not** `Ternary Bonsai 2 27B` (2026-09-17, re-based on **Qwen3.8 27B**, retention lifted from ~95% to 98.2%, aggregate 83.9) and not the `1-bit Bonsai 27B` sibling (3.9 GB, ~90% retention). The curated `meta.json` is a **scaffolded placeholder and is wrong on two counts**: the window is **262K** (not 128K) and the model is **multimodal text+image** (not "Text in/out only"). First-party evidence overrides it below.

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** PrismML's quality-oriented low-bit flagship — the ternary ({−1, 0, +1} + FP16 group-wise scaling, **1.71 effective bits/weight**) compression of **Qwen3.6 27B** into a **5.9 GB** footprint, billed as the first 27B-class multimodal agentic model that runs on a laptop and (in its 1-bit sibling) a phone. Retains **95%** of the full-precision baseline across a 15-benchmark suite in thinking mode.
- **Provider / access:** PrismML (Caltech spin-out; backed by Khosla, Cerberus, Google, with continuing Samsung support). Weights on **Hugging Face** (`prism-ml/*`, collection `bonsai-27b`) and ModelScope (`prism-ml/Ternary-Bonsai-27B-gguf`); GitHub `PrismML-Eng/Bonsai-demo`; **free limited-time developer-preview API** (console.darkbloom.dev). Runs via **custom low-bit kernels** on NVIDIA **CUDA** and Apple **MLX** (Mac/iPhone/iPad); WebGPU demo.
- **Release / knowledge:** announced **2026-07-14**; inherits Qwen3.6 27B's cutoff (not published by PrismML).
- **IDs:** `prism-ml/Ternary-Bonsai-27B` (+ `-gguf`); curated `opencode/ternary-bonsai-27b`.
- **Context window:** **262,144 tokens** (full window carried through the quantization). No published MRCR/RULER retrieval absolute for this exact ID.
- **Modalities:** **text + image in; text out.** Multimodal end to end, with the **vision tower shipping in a compact 4-bit form** (screenshots, documents, camera input). Supports **thinking mode**, structured tool calls, MCP integration, and **speculative decoding** (lossless draft-and-verify).
- **Pricing (as of 2026-11-09):** **Apache 2.0 open weights — $0 to self-host** (that is the whole point: 5.9 GB on-device, marginal cost of a 100-step agent loop ≈ zero). Hosted preview was free/limited-time; no standing per-token price list published by PrismML.
- **Architecture:** 27B dense-class hybrid-attention model, ternary weights applied **end to end across embeddings, attention, MLPs and the LM head — no higher-precision escape hatches**. Throughput **134 tok/s** (ternary) on RTX 5090 (163 tok/s for the 1-bit variant), **58 tok/s** on M5 Max, ~11 tok/s on iPhone 17 Pro (1-bit). Intelligence-density framing: 0.53/GB (1-bit) ≈ 10× full precision.

### Raw benchmarks found

> Provenance: the category table is **vendor-run by PrismML** (15 benchmarks, thinking mode, per-benchmark detail in the Bonsai 27B whitepaper) against its own full-precision baseline. It is **not** an Artificial Analysis Intelligence Index row — no AA composite, GPQA Diamond absolute, SWE-bench Verified or Terminal-Bench number exists for this exact ID. The independent Regolo.ai analysis reproduces the vendor table exactly (80.5 / 86.0 / 74.0) rather than re-running it, so treat absolutes as vendor-reported-but-consistent; the *relative* retention story is the robust part.

Agent / tool use:

- Agentic & Tool-calling category (**BFCL v3 + TauBench**): **74.0** vs Qwen3.6 27B **80.0** (−6.0, i.e. ~7.5% relative loss); the 1-bit sibling collapses to **66.0** (−17.5% relative) — PrismML itself recommends ternary, not 1-bit, for agent work
- MCP integration + structured-output tool calling demonstrated on RTX 5090 and M5 Max (vendor demos, not scored)

Reasoning / knowledge:

- Knowledge & STEM category (**MMLU-Redux + MuSR**): **77.0** vs **83.1**
- Math category (**GSM8K, MATH-500, AIME25, AIME26**): **93.4** vs **95.3** — near-untouched
- Instruction following (**IFEval + IFBench**): **71.8** vs **78.4**
- Vendor aggregate across all 15 benchmarks: **80.5** vs Qwen3.6 27B **85.0** (**95%** retention; Regolo computes ~94.6%)

Coding:

- Coding category (**HumanEval+, MBPP+, LiveCodeBench**): **86.0** vs **88.7**
- Coding-agent loops demonstrated with Cline/Hermes on-device (vendor demos)
- **Independent counter-signal:** a community local run on a harder, harness-unidentified multi-step suite reported **7.9%** for Ternary-Bonsai-27B (vs 9.2% for Qwen3.5-9B and 24.3% for Qwen3.6-35B-A3B) — **not comparable** to the vendor categories, but directionally consistent with the tool-calling weakness above

Long context / Multimodal:

- **262K** window (official); **no MRCR/RULER retrieval absolute** published for this ID
- Vision category (**MMMU Pro + OCRBench**): **65.2** vs **72.6** (−7.4) — the second-largest casualty of the compression after instruction following
- No audio/video input; no image generation (that is the separate Bonsai Image 4B line)

### Normalized scores (1–100)

- **Tool use: 74/100.** Read directly from the measured BFCL v3 + TauBench category (74.0). Genuinely usable for function-calling and MCP loops at 27B class — and unlike its own 1-bit sibling it keeps tool use above the "unreliable" threshold — but it loses ~7.5% relative to full precision precisely where agents compound errors over many steps, and no independent Terminal-Bench/τ²/GDPval absolute exists for this ID.
- **Reasoning: 78/100.** Math is nearly lossless (93.4) and STEM knowledge holds at 77.0, which is the expected signature of good group-wise ternary scaling; instruction following at 71.8 and the missing AA Index/GPQA row keep this below the reasoning tier of its full-precision parent (`qwen-3.8-27b`, panel 86.6).
- **Context window: 79/100.** **262K** is above the mid-size class median and is unusual for a 5.9 GB on-device build, so the window itself is a real strength. Docked because quantized long-context *retention* is unverified — no MRCR/RULER absolute, and a ternary LM head plus 4-bit vision tower is exactly the setting where needle-retrieval quality silently degrades.
- **Multimodal: 66/100.** Native text+image understanding with a shipped 4-bit vision tower (screenshots, documents, camera) — measured at 65.2 on MMMU Pro + OCRBench, the second-worst category. No audio, no video, no generation.
- **Coding: 82/100.** 86.0 on HumanEval+/MBPP+/LiveCodeBench is strong in absolute terms and only −2.7 vs full precision, but those suites are saturated and the vendor table is unaccompanied by any SWE-bench Verified / AA-LCR row; the community hard-suite result and the tool-use weakness both argue for discounting the headline.
- **Cost efficiency: 96/100.** The headline: **Apache 2.0**, **5.9 GB**, **1.71 bits/weight**, 134 tok/s on a 5090 and 0.714 mWh/token-class efficiency claims, zero marginal cost per agent step, data never leaves the device. Among the best capability-per-dollar-per-watt in the roster.
- **Overall Score: 75.8/100.** Half-up mean of the five quality dims (74+78+79+66+82)/5 = 75.8 (Cost excluded). Best fit: teams that need a **private, local, cheap 27B-class agent/vision worker** and accept ~5% capability erosion versus the full-precision parent. It is *not* a frontier substitute: tool use and vision are where the compression is visible. Note the vendor-aggregate reading (80.5) sits above my normalized figure because it leans on near-saturated math/coding benchmarks; the panel's current aggregate (71) sits below it, reflecting raters who discount un-reproduced vendor absolutes harder.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-09
- Method: public internet research — PrismML "Announcing Bonsai 27B: The First 27B-Class Model to Run on a Phone" (2026-07-14: base **Qwen3.6 27B**, ternary {−1,0,+1}+FP16 group-wise scaling at **1.71 effective bits**, **5.9 GB**, **262K** ctx, multimodal with **4-bit vision tower**, speculative decoding, **Apache 2.0**, CUDA+MLX kernels, 134/163 tok/s on RTX 5090, 58 tok/s M5 Max, and the 15-benchmark thinking-mode table: overall 85.0→**80.5** (95% retention), math 95.3→**93.4**, coding 88.7→**86.0**, agentic/tool-calling 80.0→**74.0**, instruction-following 78.4→**71.8**, knowledge/STEM 83.1→**77.0**, vision 72.6→**65.2**) cross-checked against the independent Regolo.ai technical explainer (reproduces the same category numbers, ~94.6% ternary retention, the −17.5% tool-calling sensitivity analysis, iPhone ~11 tok/s) and PrismML's later Bonsai 2 27B post (which confirms gen-1 retention was ~95% and re-bases to Qwen3.8 27B — used here only to disambiguate the slug, not to score it). Community local-run datapoint (r/LocalLLaMA) cited as a non-comparable weakness signal. The scaffolded `meta.json` (128K / text-only / "standard pricing") is **overridden** with first-party specs. No AA Intelligence Index, GPQA, SWE-bench Verified or Terminal-Bench absolute exists for this exact ID and none was inferred from the parent model or from Bonsai 2. Scores are normalized 1–100 interpretations, not official scores.
- Reference URLs:
  - [PrismML — Announcing Bonsai 27B: The First 27B-Class Model to Run on a Phone](https://prismml.com/news/bonsai-27b)
  - [PrismML — Introducing Bonsai 2 27B (gen-2 disambiguation, 98.2% retention)](https://prismml.com/news/bonsai-2-27b)
  - [Regolo.ai — Bonsai 27B Explained: How a 27B Model Runs Locally](https://regolo.ai/bonsai-27b-explained-how-a-27b-model-runs-locally/)
  - [PrismML Bonsai 27B whitepaper (per-benchmark results)](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-27b-whitepaper.pdf)
  - [ModelScope — prism-ml/Ternary-Bonsai-27B-gguf](https://www.modelscope.cn/models/prism-ml/Ternary-Bonsai-27B-gguf)
- Revisit trigger: PrismML or an independent evaluator publishing **SWE-bench Verified / Terminal-Bench / GPQA Diamond / AA Intelligence Index / MRCR** absolutes for this exact ternary checkpoint (a same-harness quant-vs-full-precision comparison would settle how much of the 95% retention claim survives agentic evaluation), or the free developer-preview API acquiring a published price list.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings; re-score if a Bonsai 3 re-base lands under this slug.
