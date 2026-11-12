# Ternary Bonsai 2 27B — findings by MiniMax M3.1 Flash

- Source: Prism ML (`prism-ml/Ternary-Bonsai-2-27B-gguf`, `prism-ml/Ternary-Bonsai-2-27B-mlx-2bit`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** Prism ML's ternary-quantized build of Qwen3.8-27B, released 2026-09-17. Every language-model weight is one of minus one, zero or plus one with FP16 group scales, so a 27B-class multimodal reasoning model fits in about 6 GB and still keeps 98.2% of the full-precision model's benchmark average. Top use case: private, laptop-local agents and coding loops (Cline, Hermes) that need 262K context without a cloud bill.
- **Provider / access:** Open weights under Apache 2.0 on Hugging Face — `prism-ml/Ternary-Bonsai-2-27B-gguf` (PTQ1_0 5.95 GB, PQ2_0 7.21 GB, Q2_0 7.63 GB) and `prism-ml/Ternary-Bonsai-2-27B-mlx-2bit` (8.60 GB, Apple Silicon). Hosted at OpenRouter as `prism-ml/ternary-bonsai-2-27b` (OpenAI-compatible chat completions, text and image input); Together AI lists the model as `Prism-ML/Ternary-Bonsai-2-27B` but marks it "coming soon". Local serving needs the PrismML llama.cpp fork for the PTQ1_0 and PQ2_0 packings; the Q2_0 packing runs on stock llama.cpp from release b11556 onward. The repository entry ID `prismml/ternary-bonsai-2-27b` matches the OpenRouter route.
- **Release / knowledge:** Announced 2026-09-17 by Prism ML (launch post "Introducing Bonsai 2 27B"); the models.dev registry records a release date of 2026-09-18; base-model knowledge cutoff not published by Prism ML for the quantized build.
- **IDs:** `prism-ml/Ternary-Bonsai-2-27B-gguf` (HF GGUF), `prism-ml/Ternary-Bonsai-2-27B-mlx-2bit` (HF MLX), `prism-ml/ternary-bonsai-2-27b` (OpenRouter), `Prism-ML/Ternary-Bonsai-2-27B` (Together AI, pending).
- **Context window:** 262,144 tokens, inherited unchanged from the Qwen3.8-27B base; the docs note it is kept practical on-device by the predominantly linear-attention backbone, and model hosts expose up to 32,768 tokens of output (models.dev registry).
- **Modalities:** text and image in, text out; reasoning on by default with configurable effort (xhigh default, medium supported, low not supported) and a `thinking_budget_tokens` control; native tool calling through the OpenAI-style `tools` array; image input needs the separate `mmproj` projector pack.
- **Pricing (as of 2026-11-12):** OpenRouter `prism-ml/ternary-bonsai-2-27b` $0.075 in / $0.50 out per 1M with cached reads at $0.0375; the same price appears for the Kilo gateway route in the models.dev registry; Together AI has not opened the endpoint yet; the Apache 2.0 weights are a $0 software-cost self-host option (hardware cost applies).
- **Architecture:** 27.36B total parameters — 24.35B language backbone across 64 blocks, 2.54B embedding and LM head, 0.46B vision tower across 27 blocks — derived from Qwen3.8-27B with the architecture unchanged (hybrid attention of roughly 75% linear and 25% full, SwiGLU MLP, RoPE, RMSNorm). End-to-end ternary coverage across embeddings, attention projections, MLP projections and the LM head, with a blockwise Hadamard rotation (block 1024) folded into the stored weights; effective 1.72 bits per weight (1.75 bpw as shipped in PTQ1_0).

### Raw benchmarks found

Agent / tool use:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| Terminal-Bench 2.1 | **52.8%** | Prism ML (vendor) | Bonsai 2 27B whitepaper, via BenchLM |
| tau2-bench | **80.2%** | Prism ML (vendor) | Bonsai 2 27B whitepaper, via BenchLM |
| BFCL v3 | **74.92%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| Agentic and tool calling category (tau2-bench, BFCL v3) | **77.57** versus 79.74 for Qwen3.8-27B FP16 | Prism ML (vendor) | Prism ML launch post, 20-benchmark table |
| GDPval-AA, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas | no verified public score found | — | not published by Prism ML or a third party |

Reasoning / knowledge:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| GPQA Diamond | **85.8%** | Prism ML (vendor) | Bonsai 2 27B whitepaper, via BenchLM |
| MMLU-Redux | **89.09%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| MuSR | **70.63%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| AA-LCR | **77.0%** | Prism ML (vendor) | Bonsai 2 27B whitepaper, via BenchLM |
| GSM8K | **96.66%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| MATH-500 | **98.80%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| AIME 2025 / AIME 2026 | **95.00% / 95.83%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| Knowledge and reasoning category (MMLU-Redux, GPQA Diamond, AA-LCR) | **83.95** versus 86.66 for Qwen3.8-27B FP16 | Prism ML (vendor) | Prism ML launch post, 20-benchmark table |
| IFEval / IFBench (prompt-loose) | **91.31% / 74.00%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| Overall thinking-mode average (14 benchmarks) | **84.78** versus 86.32 for Qwen3.8-27B FP16 (98.2% retained) | Prism ML (vendor) | Prism ML model card |
| Artificial Analysis Intelligence Index / BenchLM composite | **not published** / 53.53 (BenchLM, #83 of 1026, partial coverage of 22 of 815 benchmarks) | BenchLM aggregator | benchlm.ai/models/ternary-bonsai-2-27b |

Coding:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| LiveCodeBench v6 | **90.07%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| LiveCodeBench v6 (whitepaper) | **90.1%** | Prism ML (vendor) | Bonsai 2 27B whitepaper, via BenchLM |
| HumanEval+ | **95.12%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| MBPP+ | **83.07%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| BigCodeBench | **58.1%** | Prism ML (vendor) | Bonsai 2 27B whitepaper, via BenchLM |
| SWE-bench Verified | **60.8%** | Prism ML (vendor) | Bonsai 2 27B whitepaper, via BenchLM |
| Coding category (HumanEval+, LiveCodeBench v6, MBPP+, BigCodeBench) | **81.58** versus 82.17 for Qwen3.8-27B FP16 | Prism ML (vendor) | Prism ML launch post, 20-benchmark table |
| Vibe Code Bench / DeepSWE | no verified public score found | — | not published for this model |

Long context:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| Context length (architectural) | **262,144 tokens** | Prism ML (vendor) | Prism ML docs, Ternary Bonsai 2 27B page |
| Full-window memory with 4-bit KV cache | **about 12.8 GB peak** | Prism ML (vendor) | Ternary Bonsai 27B model card memory table (same packaging family) |
| MRCR / RULER / GraphWalks retrieval at any length | no long-context retrieval reported | — | no needle-retrieval run published for Bonsai 2 27B |

Multimodal:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| MMMU-Pro | **75.49%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| OCR Bench v2 | **56.88%** | Prism ML (vendor) | Prism ML model card, full per-benchmark table |
| CharXiv overall | **80.0%** | Prism ML (vendor) | Bonsai 2 27B whitepaper, via BenchLM |
| A-OKVQA | **86.8%** | Prism ML (vendor) | Bonsai 2 27B whitepaper, via BenchLM |
| OmniDocBench 1.6 | **89.1%** | Prism ML (vendor) | Bonsai 2 27B whitepaper, via BenchLM |
| RealWorldQA | **80.1%** | Prism ML (vendor) | Bonsai 2 27B whitepaper, via BenchLM |
| Vision category (CharXiv, A-OKVQA, OmniDocBench 1.6, RealWorldQA, OCRBench v2) | **78.59** versus 81.64 for Qwen3.8-27B FP16 | Prism ML (vendor) | Prism ML launch post, 20-benchmark table |

Efficiency (deployment evidence, not a capability benchmark):

| Measurement | Value | Who ran it | Source |
| --- | --- | --- | --- |
| Effective bits per weight | **1.72 bpw true, 1.75 bpw as shipped** | Prism ML (vendor) | Prism ML model card |
| Language model footprint | **5.95 GB (PTQ1_0), 7.21 GB (PQ2_0), 7.63 GB (Q2_0)** | Prism ML (vendor) | Prism ML model card |
| Decode speed, RTX 5090 | **129.9 tok/s (PQ2_0), 120.5 tok/s (PTQ1_0)** | Prism ML (vendor) | Prism ML model card throughput table |
| Decode speed, H100 and Apple M5 Pro | **113.9 tok/s (H100 PQ2_0), 28.1 tok/s (M5 Pro)** | Prism ML (vendor) | Prism ML model card throughput table |
| Energy per token, RTX 4090 | **0.714 mWh/token in the first-generation release** | Prism ML (vendor) | Prism ML launch post for Bonsai 2 27B |

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 at 52.8%, tau2-bench at 80.2% and BFCL v3 at 74.9% are strong agentic-tool numbers for a local 27B model and native tool calling is shipped, but the mid-range Terminal-Bench score, the missing GDPval-AA and the absence of any independent rerun keep it below the frontier band.
- **Reasoning: 76/100.** GPQA Diamond 85.8%, MMLU-Redux 89.09%, MATH-500 98.8%, AIME 2026 95.83% and AA-LCR 77.0% (vendor-measured, thinking mode) put it above the mid band, and the model retains 98.2% of the Qwen3.8-27B FP16 average; the score is held below 80 because every number is vendor-reported, no HLE or CritPt figure exists, and the FP16 base itself sits below the frontier.
- **Context window: 71/100.** The 262,144-token window lands in the 200K-500K tier (200K = 70) and the hybrid linear-attention backbone keeps a full window practical on a laptop, but no MRCR, RULER or GraphWalks retrieval run is published at any length, so no measured evidence supports a higher tier placement.
- **Multimodal: 68/100.** Text plus image input with text output places it in the 60-70 image-in band, and the vision numbers are good (MMMU-Pro 75.49%, A-OKVQA 86.8%, OmniDocBench 1.6 89.1%), but there is no audio or video path and OCR Bench v2 at 56.88% shows the vision tower is the component that loses the most in quantization.
- **Coding: 79/100.** LiveCodeBench v6 at 90.07%, HumanEval+ at 95.12%, MBPP+ at 83.07% and SWE-bench Verified at 60.8% are strong for a local model and are level with the FP16 base on the coding category, but BigCodeBench at 58.1% and the absence of DeepSWE or Vibe Code Bench results prevent a frontier-level coding score.
- **Cost efficiency: 95/100.** The evaluated hosted tier is $0.075 in / $0.50 out per 1M on OpenRouter, and the Apache 2.0 weights can be self-hosted at $0 software cost in about 6 GB of RAM; the score sits just below the ~$0.10/$0.20 band because the hosted output rate is four to seven times the input rate and the self-host path needs the PrismML kernels.
- **Overall Score: 73.2/100.** Mean of Tool use 72, Reasoning 76, Context window 71, Multimodal 68 and Coding 79 — arithmetic: 72 + 76 + 71 + 68 + 79 = 366, divided by 5 = 73.2; best fit is a private local agent that must keep 27B-class reasoning and coding in about 6 GB, not a cloud-hosted benchmark leader.

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Coding level:** the model card's 14-benchmark suite reports a coding category of 89.42 (LiveCodeBench 90.07, HumanEval+ 95.12), while the launch post's 20-benchmark suite reports 81.58 for a category that adds BigCodeBench and LiveCodeBench v6. Resolution: the suites are different, so the per-benchmark values are used rather than either category aggregate, and the coding score is anchored on the individual numbers plus SWE-bench Verified 60.8%.
- **Bits per weight and footprint:** 1.72 bpw true (model card), 1.75 bpw as shipped in PTQ1_0 (model card) and 1.76 bpw (launch post); footprint quoted as 5.95 GB in the model card and 5.9 GB in the launch post, with 7.21 GB and 7.63 GB for the two larger packings. Resolution: the representational figure (1.72 bpw) and the on-disk sizes per packing are reported separately, and the smallest published packing is used for the memory claim.
- **Aggregate score:** the vendor thinking-mode average is 84.78 over 14 benchmarks (83.9 over the launch post's 20), while BenchLM's composite is 53.53 (rank #83 of 1026) and Artificial Analysis publishes no Intelligence Index for this model. Resolution: the vendor average is an average over its own hand-picked suite and is not comparable to an aggregator composite; scoring uses per-benchmark evidence, and the absence of any independent rerun is treated as a risk, so the reasoning and tool scores are discounted.
- **Hosted availability:** Together AI lists the model as "coming soon" while OpenRouter already serves it at $0.075/$0.50. Resolution: the OpenRouter listing is used for pricing and the Together page is cited only for the pending status; no free hosted tier exists.
- **Long-context claim:** 262K is stated as inherited from the base model and as practical on-device, but no needle-retrieval benchmark at any length is published. Resolution: the window is credited from the architectural specification only, and the context score stays near the bottom of its tier.

### Notes on identity

- `ternary-bonsai-2-27b` is the second-generation Prism ML release, "Ternary Bonsai 2 27B": a ternary build of **Qwen3.8-27B** launched 2026-09-17, with 98.2% capability retention, a blockwise Hadamard-rotated weight basis, 1.72 bpw true and 1.75 bpw as shipped.
- `ternary-bonsai-27b` is the first-generation release, "Ternary Bonsai 27B": a ternary build of **Qwen3.6-27B** launched 2026-07-14, with 95% retention, 1.71 bpw true, 5.9 GB ideal and about 7.2 GB deployed. They are different base checkpoints with different capability levels, not the same weights under two names.
- The "2" in the slug is the upstream product generation in the Bonsai 2 family (which also has 9B, 4B and 2B members); it does not denote a parameter count or a re-quantization of the first-generation 27B.
- A sibling 1-bit Bonsai 27B at 1.125 bpw and 3.9 GB exists for phone-class deployments; it is a different model and is not covered by this report.

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Fresh public web research only — Prism ML documentation, launch posts and Hugging Face model cards for the 14-benchmark thinking-mode table, the Bonsai 2 27B whitepaper per-benchmark figures via the BenchLM mirror, OpenRouter and models.dev pricing registries, and the Together AI model listing; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ternary Bonsai 2 27B — Prism ML docs](https://docs.prismml.com/models/bonsai-2-27b)
  - [prism-ml/Ternary-Bonsai-2-27B-gguf model card — Hugging Face](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
  - [Introducing Bonsai 2 27B — Prism ML, 2026-09-17](https://prismml.com/news/bonsai-2-27b)
  - [Bonsai 2 27B whitepaper — GitHub](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf)
  - [Ternary Bonsai 2 27B benchmark profile — BenchLM](https://benchlm.ai/models/ternary-bonsai-2-27b)
  - [prism-ml/ternary-bonsai-2-27b — OpenRouter](https://openrouter.ai/prism-ml/ternary-bonsai-2-27b)
