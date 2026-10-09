# Qwen3.5-9B — findings by Step 5 Preview

- Source: Alibaba Qwen (`Qwen3.5-9B`, weights `Qwen/Qwen3.5-9B`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B (largest of the Qwen 3.5 Small Series)
- **Short description:** Alibaba's 9.7B dense multimodal model (released 2026-03-02, Apache 2.0) — a Gated DeltaNet + Gated Attention hybrid (3:1 pattern, 32 layers, hidden 4096) trained with Multi-Token Prediction and strong-to-weak distillation, with native text/image/video input via early fusion (the vision path can be skipped for text-only inference), 262K native context (extendable to ~1M via YaRN) and a unified thinking/non-thinking toggle. Artificial Analysis called it the most intelligent model under 10B parameters on its release index (roughly double the next-closest sub-10B models), and it outscores the 3×-larger Qwen3-30B on most benchmarks — GPQA +8, IFEval +3, LongBench v2 +10 — and beats GPT-5-Nano on vision by 13–32 points. The practical story is a single 4090/3090 at 4-bit (~5 GB) running a genuinely multimodal 9B.
- **Provider / access:** Open weights on Hugging Face / ModelScope (incl. `Qwen3.5-9B-Base`), Apache 2.0; Transformers/vLLM/SGLang/KTransformers; Microsoft Foundry catalog; OpenRouter via 6 providers (Darkbloom, SiliconFlow, DeepInfra, Venice, Parasail, Together).
- **Release:** 2026-03-02 (OpenRouter 2026-03-10).
- **Context window:** 262,144 tokens native (~1M with YaRN); max output 65,536; 201 languages.
- **Modalities:** Text, image and video in → text out.
- **Pricing (as of 2026-10-09):** $0.08–0.17/M input, $0.13–0.25/M output across OpenRouter providers (Darkbloom $0.08/$0.13 with $0.04 cache; Together $0.17/$0.25); DeepInfra $0.10/$0.15; Apache-2.0 weights free (BF16 ~18 GB, 8-bit ~9 GB, 4-bit ~5 GB VRAM).
- **Architecture:** Dense 9.7B (9B active), 8 × (3 × Gated-DeltaNet + 1 × Gated-Attention) hybrid, MTP.

### Raw benchmarks found

Vendor (HF model card, reasoning variant):

- MMLU-Pro **82.5**; MMLU-Redux 91.1; C-Eval 88.2; SuperGPQA 58.2; GPQA Diamond **81.7**; MMMLU 81.2; MMLU-ProX 76.3 (29 languages)
- IFEval **91.5**; IFBench 64.5; MultiChallenge 54.5
- AA-LCR **63.0**; LongBench v2 55.2; HMMT Feb 25 83.2 / Nov 25 82.9
- LiveCodeBench v6 65.6; OJBench 29.2
- BFCL-V4 66.1; **TAU2-Bench 79.1** (with Claude Opus 4.5 airline fixes); VITA-Bench 29.8; DeepPlanning 18.0
- Vision: MMMU 78.4; **MMMU-Pro 70.1**; MathVision 78.9; MathVista 85.7; We-Math 75.2; DynaMath 83.6; VlmsAreBlind 93.7; RealWorldQA 80.3; MMStar 79.7; MMBench 90.1; OmniDocBench1.5 **87.7**; CharXiv 73.0; CC-OCR 79.3; OCRBench 89.2; CountBench 97.2; RefSpatialBench 58.5
- Video: VideoMME 84.5 (w/ subs) / 78.4; MLVU 84.4; VideoMMMU 78.9; LVBench 70.0
- Visual agent: ScreenSpot-Pro 65.2; **OSWorld-Verified 41.8**; AndroidWorld 57.8; TIR-Bench 45.6/31.9; V* 90.1/88.5
- Medical VQA: SLAKE 79.0; PMC-VQA 57.9; MedXpertQA-MM 49.9

Third-party:

- Artificial Analysis (OpenRouter, current index): Intelligence **11.2** (reasoning) / 13.3 (non-reasoning); Coding **28.7** / 23.5; Agentic **1.2**; GPQA Diamond 80.6/78.6; HLE 14.9/9.4; IFBench 66.7/37.8; τ²-Telecom 86.8/85.1; AA-LCR 70.0/46.0; τ-Banking 7.0; GDPval-AA 0.0; CritPt 0.3; SciCode 29.5; TB 2.1 29.2/21.3; TB Hard 24.2; TB 4.0 0.5; AA-Omniscience accuracy 16.4% / non-hallucination 16.4%
- AA Qwen3.5 small-models article: ~260M output tokens used to run the Intelligence Index (vs 86–98M for the 27B/397B siblings — a very verbose reasoner); 82% hallucination rate / 14.7% accuracy on AA-Omniscience
- Roboflow legacy vision evals: 71.64% pass rate, #16 of 77 models

### Normalized scores (1–100)

- **Tool use: 55/100.** TAU2-Bench 79.1% (vendor setup) and BFCL-V4 66.1% are genuinely good for 9B, and AA's τ²-Telecom rerun confirms 86.8% — but τ-Banking 7.0%, GDPval-AA 0.0%, DeepPlanning 18.0% and AA Agentic Index 1.2% show it cannot carry multi-domain agentic workflows; mid-band at best.
- **Reasoning: 55/100.** GPQA Diamond 80.6–81.7% is mid-band and the best sub-10B result available; HLE 14.9% and CritPt 0.3% cap it, and it burns ~260M output tokens to run the Intelligence Index (3× the large siblings) — an expensive reasoner for its score.
- **Context window: 66/100.** 262K native (extendable to ~1M via YaRN) sits in the 200K–500K band (65–84) with AA-LCR 70.0% and LongBench v2 55.2% — above average retrieval for its size, not frontier.
- **Multimodal: 78/100.** Text + image + video in → text out is the 75–90 band, and the numbers justify the upper half: MMMU-Pro 70.1%, MathVision 78.9%, OmniDocBench 87.7%, VideoMME 84.5%, OSWorld-Verified 41.8% — beating GPT-5-Nano and Gemini-2.5-Flash-Lite on vision by double digits.
- **Coding: 45/100.** LiveCodeBench 65.6% and MathVista-grade visual reasoning aside, the agentic-coding evidence is weak for 2026: Terminal-Bench 2.1 29.2%, SciCode 29.5%, TB Hard 24.2%, TB 4.0 0.5%, Coding Index 28.7 and OJBench 29.2% — competitive-programming-shaped coding only.
- **Cost efficiency: 99/100.** $0.08–0.10/M input and $0.13–0.15/M output with Apache-2.0 weights and a ~5 GB 4-bit footprint — near the methodology's $0.1/$0.2 ≈ 97–99 tier, on a single consumer GPU.
- **Overall Score: 60/100.** Best-fit recommendation: the best small-model pick for multimodal document/vision work at near-zero cost — GPT-5-Nano-beating vision and 262K context on one GPU; pair it with a frontier coding/agentic model for tool-heavy workflows.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Qwen Hugging Face model card + README, Artificial Analysis small-models article and OpenRouter benchmark table, Roboflow, Awesome Agents, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen4.md`, using the same headings.
