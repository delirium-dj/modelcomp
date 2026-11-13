# Ternary Bonsai 27B — findings by Ernie 5.5 Flash

- Source: PrismML/Ternary Bonsai 27B (`ternary-bonsai-27b`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B (the quality-oriented ternary variant of the Bonsai 27B release; the later Bonsai 2 27B on Qwen3.8-27B is a separate model tracked in `model/ternary-bonsai-2-27b/`)
- **Short description:** PrismML's on-device 27B-class model (released 2026-07-14), a ternary-weight ({−1, 0, +1}, ~1.71 bpw) quantization of Qwen3.6 27B that runs reasoning, tool calling, vision and agentic loops on a laptop or phone. Apache 2.0 weights.
- **Provider / access:** Open weights on Hugging Face (`prism-ml/Bonsai-27B` collection) and MLX/CUDA runtimes; limited-time free developer-preview API via PrismML's Darkbloom console. No per-token public pricing.
- **Release / knowledge:** 2026-07-14 (Bonsai 27B launch); knowledge cutoff not published.
- **IDs:** `ternary-bonsai-27b` (dataset slug), `prism-ml/Ternary-Bonsai-27B` (weights, unverified exact casing), plus a 1-bit sibling variant.
- **Context window:** 262,144 tokens (native, inherited from the Qwen3.6 27B base).
- **Modalities:** text + image in, text out; thinking-mode reasoning (xhigh default effort on the successor; thinking exercised for the published benchmarks); native tool calls / function calling; JSON via structured output in the serving stack.
- **Pricing (as of 2026-11-13):** $0 per token — open weights (Apache 2.0); local inference is free, hosted preview is free during the limited-time window.
- **Architecture:** ternary {−1,0,+1} weights with FP16 group-wise scaling (g128) over the full network incl. embeddings/attention/MLP/LM head; 27B total params (Qwen3.6 27B base); 5.9 GB ternary footprint; hybrid-attention base with 4-bit vision tower.

### Raw benchmarks found

> PrismML's own 15-benchmark thinking-mode suite (vendor launch table), Ternary Bonsai 27B column. Category means, not individual rows.

Agent / tool use:

- BFCL v3 + TauBench (category mean): **74.0** vs 80.0 for the Qwen3.6 27B FP16 baseline
- Terminal-Bench / Claw-Eval / Toolathon: no verified public score found
- Computer-use agentic loops: demonstrated (Hermes demo on RTX 5090), no score published

Reasoning / knowledge:

- Knowledge/STEM (MMLU-Redux + MuSR, category mean): **77.0** (baseline 83.1)
- GPQA / HLE / CritPt: no verified public score found

Coding:

- HumanEval+ + MBPP+ + LiveCodeBench (category mean): **86.0** (baseline 88.7 — "coding level with the baseline" per vendor)
- SWE-bench / DeepSWE: no verified public score found

Long context:

- 262,144-token context; no MRCR / RULER / GraphWalks retrieval figure published.

### Normalized scores (1–100)

- **Tool use: 74/100.** BFCL v3 + TauBench at 74.0 (vs 80.0 baseline) is the vendor's own "stays within a few points of full precision" claim; no independent agentic rows. Capped by the absence of TB2.1/Claw evidence.
- **Reasoning: 70/100.** MMLU-Redux+MuSR 77.0 and math category 93.4 are respectable for a 27B local model, but the STEM/knowledge mean sits below mid-tier cloud models and no GPQA row exists. Capped by the generation gap to Qwen3.8-class baselines.
- **Context window: 88/100.** 262,144 native — tier 200K–500K high band; no retrieval score at 256K, so it stays below 1M-class models.
- **Multimodal: 65/100.** Text + image in with a compact 4-bit vision tower (MMMU Pro + OCRBench category 65.2 vs 72.6 baseline); real but reduced vision, and no audio/video.
- **Coding: 74/100.** Coding category 86.0 (near-baseline) is the vendor's strongest claim; the lack of any SWE-bench-class or LiveCodeBench-v6 individual row caps it.
- **Cost efficiency: 100/100.** $0 — open Apache 2.0 weights that run on a laptop (5.9 GB) at up to 134 tok/s on an RTX 5090.
- **Overall Score: 74.6/100.** Best fit for private on-device agents, offline coding assistants and hybrid cloud/local routing where a 27B-class local model must keep tool-calling quality; the quantization and missing independent rows keep it out of the top band.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (PrismML Bonsai 27B launch post and its 15-benchmark vendor table, PrismML docs, LLM Stats catalog check); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Announcing Bonsai 27B: The First 27B-Class Model to Run on a Phone — PrismML](https://prismml.com/news/bonsai-27b)
  - [Bonsai 27B whitepaper (PDF)](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-27b-whitepaper.pdf)
  - [PrismML docs — models](https://docs.prismml.com/)
  - [PrismML Bonsai collection — Hugging Face](https://huggingface.co/collections/prism-ml/bonsai-27b)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.