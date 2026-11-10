# Ternary Bonsai 2 27B — findings by Qwen 3.8 Flash

- Source: PrismML (`prismml/ternary-bonsai-2-27b`), released 2026-09-17
- Date: 2026-11-10 (UTC) — deep research pass (2 successful independent web searches + 2 primary fetches: the PrismML launch post/whitepaper aggregate table and Satyajit Ghana's independent audit of whitepaper Table 10; corroborated by threatfrontier / local-ai-zone / HF `prism-ml` and the rtx-5090 dataset)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B (PrismML's second-generation near-lossless ternary compression, "our most capable model yet").
- **Short description:** A 27B-class **open-weights** model built by ternary-compressing **Qwen3.8-27B** into `{−1, 0, +1}` weights with FP16 group-wise scaling (~1.72–1.77 bits/weight, 5.95 GB PTQ1_0 / 7.21 GB PQ2_0 language packs), aimed at running 27B-class reasoning/coding/vision/agentic work on consumer hardware (RTX 5090, M5 Max, WebGPU). Flag: it is a distinct product from the corpus's separate `ternary-bonsai-27b` (opencode) entry — different publisher, base model (Qwen3.6-27B vs Qwen3.8-27B), version and context.
- **Provider / access:** open weights under **Apache 2.0** at `huggingface.co/collections/prism-ml/bonsai-2` (gguf + mlx + safetensors), plus hosted via OpenRouter and the `prismml/ternary-bonsai-2-27b` id; runs through PrismML's llama.cpp fork / custom low-bit CUDA + MLX kernels. Chat-completions.
- **Release / knowledge:** released **2026-09-17**; inherits Qwen3.8-27B's knowledge (cutoff not separately published). PrismML = Caltech-founded, backed by Khosla/Cerberus/Google with Samsung support.
- **IDs:** `prismml/ternary-bonsai-2-27b`; files `Ternary-Bonsai-2-27B-PTQ1_0.gguf` (5.95 GB) / `-PQ2_0.gguf` (7.21 GB) / `-mlx-2bit` / separate vision `mmproj` tower (0.63–0.93 GB). No `…-free` Zen id (open weights are the free path).
- **Context window:** **262,144 total / 32,768 max output** (meta + launch post; native 262K).
- **Modalities:** **text + image in; text out.** ⚠️ **Conflict on record:** the folder `meta.json` says "Text in; text out" and "no multimodal," but the **vendor and whitepaper explicitly ship a separate vision tower** (Q8_0 4-bit HQQ, ~0.63 GB) and publish a five-row Vision suite — so this model **is** text-and-image multimodal (a real download for a multimodal deploy is ~6.58 GB). No audio/video. I score Multimodal on the measured vision rows, not as text-only.
- **Pricing (as of 2026-11-10):** hosted **~$0.07 / $0.50 per 1M**, cache read ~$0.016 (meta); **$0 to self-host** (Apache 2.0, 5.9 GB). Throughput up to **143 tok/s** (RTX 5090) and 46.8 tok/s (M5 Max) at `tg128`, batch 1; **0.714 mWh/token** on RTX 4090 (40% more efficient than an 8B full-precision model).
- **Architecture:** ternary-quantized derivative of Qwen3.8-27B; 98%+ of LM params ternarized with a small full-precision exception path (linear-attention recurrent state `in_proj_a/b`, `conv1d`, RMSNorm/QK-norm = 0.0976% of params, ~52 MB) — gen 2's specific concession versus gen 1's "no escape hatches."

### Raw benchmarks found

All rows below are **measured on this exact ternary model** (whitepaper Table 10, thinking mode, `xhigh`), not imported from the Qwen3.8-27B base. Reference columns are the full-precision base (Qwen3.8-27B FP16) and the conventional Qwen3.8-27B IQ2_XXS quant. **Vendor aggregate suite (20 benchmarks): Ternary Bonsai 2 27B = 83.9 vs Qwen3.8-27B FP16 85.4 → "98.2% retention"; model-card 14-bench variant 84.78 vs 86.32 — both round to 98.2% but the two baselines disagree (85.4 vs 86.32), a documented inconsistency.**

Reasoning / knowledge:

- GPQA Diamond **85.76** (base 90.51 — the 5.2% loss the aggregate dilutes) · MMLU-Redux **89.09** (base 91.46) · AA-LCR **77.0** (base 78.0)
- Math (retention standout): GSM8K **96.66** · MATH-500 **98.80** · AIME25 **95.00** · AIME26 **95.83** (AIME26 *above* the FP16 base's 94.58)

Coding:

- LiveCodeBench v6 **90.07** (base 90.05 — parity) · HumanEval+ **95.12** · MBPP+ **83.07** · BigCodeBench **58.07** (base 61.49, −5.6%)
- Long-horizon / agentic coding (evaluated "for the first time," Harbor + Terminus-2 / mini-swe-agent, **not** demo footage): **SWE-bench Verified 60.8** vs base 80.6 = **75.4% retention**

Agent / tool use:

- τ²-Bench **80.22** (base 82.73) · BFCL v3 **74.92** (base 76.74) — single-turn tool calling holds up well
- **Terminal-Bench 2.1 52.8** vs base 69.7 = **75.8% retention** — the long-horizon, multi-step agentic tier is where the ternary build loses the most
- Instruction following: IFEval **91.31** · IFBench **74.00** (base 71.0 — above it)

Vision (text+image input, via the separate tower):

- OmniDocBench v1.6 **89.13** · A-OKVQA **86.81** · CharXiv **80.00** · RealWorldQA **80.13** · **OCRBench v2 56.88** (base 60.99, −6.7% — weakest row)

Context-window efficiency / controls:

- Qwen3.8-27B IQ2_XXS (9.4 GB conventional 2-bit) scores **75.2** overall — **bigger AND worse** than Bonsai's 83.9 at 5.95 GB; UD-Q4_K_XL (4-bit) beats Bonsai by ~0.4 points at ~3× the size (a genuine trade-off, not a rout). "Intelligence density" per PrismML's own metric: 0.444 (Bonsai 2) vs 0.530 for the *older, smaller* 1-bit Bonsai 27B — the density superlative and the capability superlative are not the same model.

Conflicts logged rather than smoothed: **98.2% retention is true only for the static 20-bench aggregate; on the two long-horizon agentic benchmarks (SWE Verified, Terminal-Bench) the same model retains ~75%** — both numbers correct, different claims (flagged by the independent audit). Baseline FP16 score differs across vendor docs (85.4 vs 86.32). Effective-bits figures vary (model card 1.75/2.13; whitepaper 1.76/2.16; on-disk 1.77/2.14). `meta.json` under-reports modality.

### Normalized scores (1–100)

- **Tool use: 72/100.** Single-turn tool calling is strong and near-lossless (τ²-Bench 80.22, BFCL v3 74.92), but the long-horizon agentic tier — the model's own marketing focus — drops hard (Terminal-Bench 2.1 52.8, 75.8% retention). Held below the mid-70s by that compounding-error sensitivity.
- **Reasoning: 85/100.** Best dimension: GPQA Diamond 85.76, MMLU-Redux 89.09, AA-LCR 77.0, and elite math retention (AIME26 95.83, MATH-500 98.80) at ~98% of the FP16 base. Capped at 85, not higher, because it inherits a 27B base ceiling and GPQA loses 5.2% to full precision.
- **Context window: 72/100.** 262K total / 32K out with solid long-context reasoning (AA-LCR 77.0); a good mid-tier window, well short of the 1M frontier models, and max output is only 32K.
- **Multimodal: 64/100.** Text + image in only (no audio/video), via a separate vision tower; document/chart/VQA work is genuinely strong for 5.9 GB (OmniDocBench 89.13, A-OKVQA 86.81, CharXiv 80.0) but OCRBench v2 56.88 is weak and the modality breadth is capped. Scored on measured vision, not as meta's "text-only."
- **Coding: 76/100.** Competitive/algorithmic coding is effectively lossless (LiveCodeBench v6 90.07, HumanEval+ 95.12, MBPP+ 83.07), but real-repo agentic coding degrades (SWE-bench Verified 60.8, 75.4% retention; BigCodeBench 58.07). The split is exactly what the aggregate hides.
- **Cost efficiency: 96/100.** $0.07 / $0.50 per 1M hosted and **$0 self-host** (Apache 2.0, 5.9 GB, 143 tok/s, 0.714 mWh/token) — exceptional intelligence-per-dollar-and-per-gigabyte; the entire point of the release. Scored independently.
- **Overall Score: 73.8/100.** Half-up mean of the five quality dims (72+85+72+64+76)/5 = **73.8** (Cost excluded). Best fit: local/private 27B-class assistant — strong reasoning, math, algorithmic coding, tool calling and document vision on a single consumer GPU or in-browser, where the ~98% static retention is real; expect ~75% of full-precision capability on long-horizon agentic coding, and escalate heavy multi-step SWE work to the cloud.

> Note vs corpus: 73.8 sits just above the `model-queue.md` group average of 72.4 — consistent, and I deliberately did **not** lift Tool use/Coding onto the 98.2% headline once I found the vendor's own long-horizon rows (SWE Verified 60.8, Terminal-Bench 52.8). All scored numbers are exact-ID ternary measurements, never the Qwen3.8-27B base's.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-10 (new report; folder had `meta.json` + `average.md` + a `Gemini_3.8_Flash.md` but no `Qwen_3.8_Flash.md`, so this slug **was in `model-queue.md`** at Overall 72.4 and this file adds one more independent rater)
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Exact-ID measured rows taken from PrismML's whitepaper Table 10 (thinking mode) as independently transcribed by Satyajit Ghana's audit and cross-checked against the vendor launch post; the 98.2%-vs-75% retention discrepancy and the modality/`meta.json` conflict are logged.
- Reference URLs:
  - [PrismML — Introducing Bonsai 2 27B: Near-Lossless Compression in a 9× Smaller Footprint](https://prismml.com/news/bonsai-2-27b)
  - [Satyajit Ghana — Bonsai 2 27B: PrismML's sequel gets to 98.2% (independent Table 10 audit)](https://ai.thesatyajit.com/articles/bonsai-2-27b)
  - [Bonsai 2 27B whitepaper (PDF)](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-small-whitepaper.pdf)
  - [HuggingFace — prism-ml Bonsai 2 collection](https://huggingface.co/collections/prism-ml/bonsai-2)
  - [HuggingFace — Ternary-Bonsai-2-27B-gguf model card](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
  - [local-ai-zone — Bonsai 2 27B ternary-quantization deep dive](https://local-ai-zone.github.io/blog/bonsai-2-27b-ternary-quantization-deep-dive.html)
  - [threatfrontier — Ternary Bonsai 2 27B: 1.76-bit architecture & benchmarks](https://threatfrontier.com/articles/ternary-bonsai-2-27b-architecture-benchmarks-runtime)
- Future sources: an independent (non-PrismML) run of τ²-Bench / SWE-bench Verified / Terminal-Bench 2.1 on the shipped 5.95 GB file would firm up the Tool-use/Coding split. Add a new file next to this one using the same headings.
