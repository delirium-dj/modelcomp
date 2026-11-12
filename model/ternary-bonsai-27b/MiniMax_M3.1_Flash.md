# Ternary Bonsai 27B — findings by MiniMax M3.1 Flash

- Source: Prism ML (`prism-ml/Ternary-Bonsai-27B-gguf`, `prism-ml/Ternary-Bonsai-27B-mlx-2bit`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** Prism ML's first 27B-class multimodal model, released 2026-07-14: a ternary-quantized build of Qwen3.6-27B that keeps 95% of the full-precision model's benchmark average in about 6 GB of weights. Top use case: fully local, offline agents and private document analysis on a laptop or single consumer GPU, with a 262K context and a 1-bit companion variant that fits an iPhone.
- **Provider / access:** Open weights under Apache 2.0 on Hugging Face — `prism-ml/Ternary-Bonsai-27B-gguf` (Q2_0_g128, 7.17 GB, plus an optional 1.95 GB DSpark drafter and a 0.63 GB Q8_0 vision projector) and `prism-ml/Ternary-Bonsai-27B-mlx-2bit` for Apple Silicon. Hosted free on Together AI as `Prism-ML/Ternary-Bonsai-27B` (serverless, OpenAI-compatible chat completions, JSON mode, text and image input). Prism ML also advertises a free, limited-time developer preview API. Not listed on OpenRouter (checked 2026-11-12). The repository entry ID `opencode/ternary-bonsai-27b` does not correspond to any model in OpenCode Zen's published table or `opencode.ai/inference/v1/models` list (both checked 2026-11-12), so it should be read as a catalogue label.
- **Release / knowledge:** Announced 2026-07-14 by Prism ML; Together AI lists the release date as 2026-07-14; base-model knowledge cutoff not published by Prism ML for the quantized build.
- **IDs:** `prism-ml/Ternary-Bonsai-27B-gguf` (HF GGUF), `prism-ml/Ternary-Bonsai-27B-mlx-2bit` (HF MLX), `Prism-ML/Ternary-Bonsai-27B` (Together AI endpoint).
- **Context window:** 262,144 tokens per the Prism ML model card and the Together AI model page; the deployed footprint at that window is about 12.8 GB peak with the 4-bit KV cache enabled, and 14.7 GB at 100K context with the cache left in FP16. The repository metadata for this slug lists 128,000 tokens, which conflicts with the upstream specification — the upstream figure is used here.
- **Modalities:** text and image in, text out; reasoning/thinking mode is how all published benchmarks were run; native tool calling (OpenAI-style `tools` array) plus lossless DSpark speculative decoding that ships as a separate 1.95 GB drafter layer; image input requires the optional projector pack.
- **Pricing (as of 2026-11-12):** Free on Together AI serverless — input $0 per 1M and output $0 per 1M, with a stated 99.9% SLA — and $0 software cost for the Apache 2.0 weights when self-hosted. The free hosted tier is promotional in the sense that Prism ML describes its own developer preview API as limited-time; Together's serverless free listing carries no published per-model rate limit, and free endpoints can be throttled or deprioritized without notice.
- **Architecture:** Ternary build of Qwen3.6-27B with the architecture unchanged — roughly 27.3B ternary language weights (about 24.8B backbone across 64 blocks, about 2.5B embedding and LM head) plus a 0.46B vision tower in compact 4-bit form. Hybrid attention of roughly 75% linear and 25% full, SwiGLU MLP, RoPE, RMSNorm; weights stored as minus one, zero or plus one in 2-bit slots with one FP16 scale per group of 128 (1.71 effective bits per weight), end to end across embeddings, attention projections, MLP projections and the LM head.

### Raw benchmarks found

Agent / tool use:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| tau2-Bench | **73.61%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table; also Together AI model page |
| BFCL v3 | **74.41%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table; also Together AI model page |
| Agentic and tool-calling category (BFCL v3, TauBench) | **74.0** versus 80.0 for Qwen3.6-27B FP16 | Prism ML (vendor) | Prism ML launch post, 2026-07-14 |
| Terminal-Bench 2.1 | no verified public score found | — | no Terminal-Bench entry published for this model (checked 2026-11-12) |
| GDPval-AA, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas | no verified public score found | — | not published by Prism ML or a third party |

Reasoning / knowledge:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| MMLU-Redux | **88.05%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| MuSR | **65.87%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| GSM8K | **96.06%** | Prism ML (vendor) | Prism ML model card; HF eval leaderboard |
| MATH-500 | **99.20%** | Prism ML (vendor) | Prism ML model card; Together AI model page |
| AIME 2025 | **90.84%** | Prism ML (vendor) | Prism ML model card; Together AI model page |
| AIME 2026 | **87.50%** | Prism ML (vendor) | Prism ML model card; HF eval leaderboard |
| Knowledge and STEM category (MMLU-Redux, MuSR) | **77.0** versus 83.1 for Qwen3.6-27B FP16 | Prism ML (vendor) | Prism ML launch post, 2026-07-14 |
| Math category (GSM8K, MATH-500, AIME25, AIME26) | **93.4** versus 95.3 for Qwen3.6-27B FP16 | Prism ML (vendor) | Prism ML launch post, 2026-07-14 |
| IFEval / IFBench (prompt-loose) | **85.03% / 58.50%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| Instruction-following category (IFEval, IFBench) | **71.8** versus 78.4 for Qwen3.6-27B FP16 | Prism ML (vendor) | Prism ML launch post, 2026-07-14 |
| GPQA Diamond, HLE, Artificial Analysis Intelligence Index | no verified public score found | — | not published for this first-generation build |
| BenchLM composite | **not computed** (0 of 815 benchmarks covered) | BenchLM aggregator | benchlm.ai/models/ternary-bonsai-27b |

Coding:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| LiveCodeBench | **82.75%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table; Together AI model page |
| HumanEval+ | **93.90%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| MBPP+ | **81.22%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| Coding category (HumanEval+, MBPP+, LiveCodeBench) | **86.0** versus 88.7 for Qwen3.6-27B FP16 | Prism ML (vendor) | Prism ML launch post, 2026-07-14 |
| SWE-bench Verified, BigCodeBench, Vibe Code Bench, DeepSWE | no verified public score found | — | not published for this release |

Long context:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| Context length (architectural) | **262,144 tokens** | Prism ML (vendor) | Prism ML model card; Together AI model page |
| Peak memory at context | **8.4 GB at 4K, 8.7 GB at 10K, 14.7 GB at 100K (FP16 cache); about 10.1 GB at 100K and 12.8 GB at the full 262K with the 4-bit KV cache** | Prism ML (vendor) | Prism ML model card, peak-memory table |
| MRCR / RULER / GraphWalks retrieval at any length | no long-context retrieval reported | — | no needle-retrieval run published for this model |

Multimodal:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| MMMU-Pro | **68.96%** | Prism ML (vendor) | Prism ML model card; HF eval leaderboard |
| OCR Bench v2 | **61.42%** | Prism ML (vendor) | Prism ML model card; Together AI model page |
| Vision category (MMMU Pro, OCR Bench v2) | **65.2** versus 72.6 for Qwen3.6-27B FP16 | Prism ML (vendor) | Prism ML launch post, 2026-07-14 |

Efficiency (deployment evidence, not a capability benchmark):

| Measurement | Value | Who ran it | Source |
| --- | --- | --- | --- |
| Effective bits per weight | **1.71 bpw true** (about 9.4x smaller than FP16) | Prism ML (vendor) | Prism ML model card |
| Deployed footprint | **7.17 GB language model (5.9 GB ideal at 1.71 bpw)** | Prism ML (vendor) | Prism ML model card |
| Decode throughput | **44.0 tok/s on Apple M5 Max, 26.2 tok/s on M5 Pro, 18.0 tok/s on M4 Pro, 98.0 tok/s on H100** | Prism ML (vendor) | Prism ML model card throughput table |
| DSpark speculative decoding | **1.34x end-to-end decode speedup on H100 (98 to 131.8 tok/s), accepted length about 3.7** | Prism ML (vendor) | Prism ML model card, DSpark section |
| Published density | **0.400 intelligence units per GB, versus 0.199 for the densest conventional 2-bit build** | Prism ML (vendor) | Prism ML model card, intelligence-density table |

### Normalized scores (1–100)

- **Tool use: 68/100.** tau2-Bench at 73.61% and BFCL v3 at 74.41% (vendor-measured, thinking mode) with native tool calling and MCP support make this a credible local agent, but there is no Terminal-Bench 2.1, no GDPval-AA and no independent rerun, and the tool-calling category drops 6 points against the full-precision base.
- **Reasoning: 70/100.** MATH-500 at 99.20%, GSM8K at 96.06%, AIME 2025 at 90.84% and AIME 2026 at 87.50% are strong math results, but the knowledge and STEM category falls from 83.1 to 77.0 against the FP16 base, no GPQA Diamond or HLE figure is published, and every number comes from the vendor's own EvalScope harness.
- **Context window: 70/100.** The documented 262,144-token window sits in the 200K-500K tier (200K = 70), the hybrid backbone and 4-bit KV cache keep a full window at roughly 12.8 GB peak, but no retrieval benchmark at any length is published, so the score stays at the tier floor.
- **Multimodal: 66/100.** Text plus image input with text output belongs in the 60-70 image-in band: MMMU-Pro at 68.96% and OCR Bench v2 at 61.42% are respectable but the vision category loses 7.4 points to the full-precision base, the largest single degradation in the suite.
- **Coding: 71/100.** LiveCodeBench at 82.75%, HumanEval+ at 93.90% and MBPP+ at 81.22% put it in the mid-to-upper coding band, and the launch post states that agentic coding is not yet a strong target of this release, with no SWE-bench, BigCodeBench or Vibe Code Bench result to raise it further.
- **Cost efficiency: 100/100.** The evaluated hosted tier is $0 per 1M input and $0 per 1M output on Together AI serverless, and the Apache 2.0 weights are free to self-host, so the inverse-price score sits at the ceiling; the caveats are that the vendor's own developer preview API is explicitly limited-time, free serverless endpoints can be rate-limited, and provider data-retention terms for the free route are not documented per model.
- **Overall Score: 69/100.** Mean of Tool use 68, Reasoning 70, Context window 70, Multimodal 66 and Coding 71 — arithmetic: 68 + 70 + 70 + 66 + 71 = 345, divided by 5 = 69.0; best fit is a zero-cost, fully private local agent on consumer hardware, with the second-generation Bonsai 2 preferred when tool-calling and knowledge quality matter more.

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Retention rate:** the launch post says Ternary Bonsai 27B retains 95% of the full-precision baseline; the model card's 15-benchmark table gives 80.49 against 85.07, which is 94.6%. Resolution: the precise 94.6% figure is used and 95% is treated as the rounded headline.
- **Footprint:** 5.9 GB is the information-theoretic size at 1.71 bpw, while the shipped Q2_0_g128 file is 7.17 GB because trits sit in 2-bit slots, and the launch post's "5.9 GB" describes the ideal. Resolution: both figures are reported with their meaning, and the deployed size is used when describing what a device must hold.
- **Decode speed:** the launch post reports 134 tok/s for the ternary build on an RTX 5090 and 58 tok/s on an M5 Max, while the model card's measured table shows 44.0 tok/s on an M5 Max, 26.2 on an M5 Pro and 98.0 on an H100 for the shipped packing. Resolution: the model card's per-device measurements are preferred because the launch figures predate the current packing and build, and the DSpark drafter is excluded from the headline speed because it adds 1.95 GB.
- **Context window:** the repository metadata for this slug lists 128,000 tokens, while the Prism ML model card, the Prism ML launch post and the Together AI model page all state 262,144. Resolution: the upstream 262,144-token specification is used, and the 128K figure is treated as stale host-side metadata rather than a model limit.
- **Benchmark coverage:** BenchLM reports zero of 815 benchmarks covered for this model and no composite score, while Prism ML publishes a 15-benchmark thinking-mode table and Together AI republishes those per-benchmark numbers. Resolution: Prism ML's numbers are used, but they are labelled vendor-reported throughout, the absence of any independent rerun caps the reasoning and tool scores, and no Artificial Analysis Intelligence Index is claimed.
- **Hosted pricing:** Together AI lists the endpoint at $0 input and $0 output with a 99.9% SLA, while Prism ML describes only a limited-time free developer preview API and OpenRouter does not list the model at all. Resolution: the zero-cost hosted tier is scored on the Together listing and the limited-time caveat is recorded next to it.

### Notes on identity

- `ternary-bonsai-27b` is the **first-generation** Prism ML 27B model, "Ternary Bonsai 27B": a ternary build of **Qwen3.6-27B** launched 2026-07-14, retaining 95% of the base model's benchmark average at 1.71 effective bits per weight, with a DSpark speculative-decoding drafter and a 1-bit companion that fits an iPhone 17 Pro.
- `ternary-bonsai-2-27b` is the **second-generation** release, "Ternary Bonsai 2 27B": a ternary build of **Qwen3.8-27B** launched 2026-09-17 with a stronger base model, a blockwise Hadamard-rotated weight basis and 98.2% retention. The two folders therefore hold different upstream checkpoints derived from different Qwen generations, not re-quantizations of one another.
- The "2" in the Bonsai 2 slug is the product generation in the Bonsai 2 family (which also spans 9B, 4B and 2B); it is not a parameter count.
- A binary "1-bit Bonsai 27B" (1.125 bpw, 3.9 GB) and the phone-class MLX-Swift build exist as separate artifacts of the same generation; they are different models and are not covered by this report.

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Fresh public web research only — Prism ML documentation, the 2026-07-14 launch post and the Hugging Face model card with its full per-benchmark table, Together AI model page for endpoint, pricing and release date, Hugging Face evaluation results, and the BenchLM coverage page; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [prism-ml/Ternary-Bonsai-27B-gguf model card — Hugging Face](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)
  - [Announcing Bonsai 27B — Prism ML, 2026-07-14](https://prismml.com/news/bonsai-27b)
  - [Bonsai 27B whitepaper — GitHub](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-27b-whitepaper.pdf)
  - [Ternary Bonsai 27B API pricing and benchmarks — Together AI](https://www.together.ai/models/prism-ml-ternary-bonsai-27b)
  - [Prism ML documentation index](https://docs.prismml.com/)
  - [Ternary Bonsai 27B coverage page — BenchLM](https://benchlm.ai/models/ternary-bonsai-27b)
