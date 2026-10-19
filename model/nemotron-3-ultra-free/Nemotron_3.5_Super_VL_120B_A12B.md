# Nemotron 3 Ultra 550B A55B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: build.nvidia.com endpoint `nemotron-3-ultra-550b-a55b` model card (NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4), research.nvidia.com Nemotron 3 Ultra technical overview, Hugging Face `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-{BF16,FP8,NVFP4}`, benchlm.ai, BenchmarkList, vLLM blog, Ollama blog, Lambda
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra 550B A55B
- **Short description:** NVIDIA's frontier-scale open reasoning and orchestration LLM (550B total / 55B active LatentMoE hybrid Mamba-Transformer MoE) for complex multi-step agents, long-context analysis, and high-accuracy reasoning over code, math, and science; 1M-token context; OpenMDW-1.1; released 2026-06-04.
- **Provider / access:** NVIDIA NIM endpoint on build.nvidia.com (`nemotron-3-ultra-550b-a55b`, OpenAI-compatible and Anthropic-compatible Chat Completions via vLLM); Hugging Face checkpoints BF16 / FP8 / NVFP4.
- **Release / knowledge:** Released 2026-06-04 via build.nvidia.com and Hugging Face; pretraining ~20T tokens crawled/synthetic code, math, science, general knowledge.
- **IDs:** `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16` (BF16), `...-FP8`, `...-NVFP4` (quantized); build.nvidia.com `nemotron-3-ultra-550b-a55b`. OpenRouter DeepInfra FP4 endpoint.
- **Context window:** Up to 1M tokens (verified via research.nvidia.com RULER @1M and build.nvidia.com; outperforms SOTA open LLMs on RULER at 1M).
- **Modalities:** Text in, text out; reasoning yes (reasoning trace then final response; inference-time reasoning budget control; `enable_thinking`); tool calls yes (auto/required/function tool_choice); structured output/JSON mode yes.
- **Pricing (as of 2026-10-16):** OpenRouter DeepInfra FP4 ≈ $0.50/M input, $2.20/M output; BenchmarkList $0.50 in / $2.20 out per 1M. NVFP4 KV cache not recommended by NVIDIA for quality (can degrade multi-turn/reasoning).
- **Architecture:** 550B total / 55B active parameters per token, LatentMixture-of-Experts (LatentMoE) hybrid Mamba-2/Transformer/Attention, native Multi-Token Prediction (MTP) speculative decoding, pretrained in NVFP4, post-trained with SFT + RL + Multi-Teacher On-Policy Distillation (MOPD).

### Raw benchmarks found

All measured numbers below come from NVIDIA's own model card / technical overview (evaluated via NeMo Gym / NeMo Evaluator) and matching third-party aggregators. NVFP4 column = quantized variant where reported; BF16 = full precision.

Agent / tool use:

- Terminal-Bench 2.1: **56.4%** (BF16) / **53.9%** (NVFP4) (build.nvidia.com modelcard, NeMo Gym)
- GDPVal: **46.7%** (BF16) / **47.9%** (NVFP4)
- SWE-Bench Verified: **71.9%** (BF16) / **69.7%** (NVFP4)
- SWE-Bench Multilingual: **67.7%** (BF16) / **65.8%** (NVFP4)
- ProfBench (Search): **56%** (BF16) / **56.4%** (NVFP4)
- PinchBench: **90%** (BF16) / **89.8%** (NVFP4)
- TauBench V3 — Airline: **81.5%** / **80.0%**; Retail: **86.4%** / **88.4%**
- τ³-bench: **70.9%**; τ²-bench: **83.3%** (benchlm.ai, NVIDIA card)

Reasoning / knowledge:

- GPQA / GPQA-D: **87%** / **87.0%** (benchlm.ai; NVIDIA card)
- HLE text-only: **26.7%** (benchlm.ai; NVIDIA card)
- MMLU-Pro: **86.8%** (benchlm.ai)
- MMLU-ProX: **83%** (benchlm.ai)
- AA-Omniscience accuracy: **21.6%** (benchlm.ai)
- RULER @ 1M: **95%** (research.nvidia.com technical overview)
- CritPt: **3.1%** (benchlm.ai)

Coding:

- SWE-Bench Verified: **71.9%** (BF16) / **69.7%** (NVFP4)
- SWE-Bench Multilingual: **67.7%** (BF16) / **65.8%** (NVFP4)
- LiveCodeBench v6: reported via NVIDIA card/reproducibility (agentic Gym)

Long context:

- RULER @ 1M: **95%** (research.nvidia.com); long-context analysis use case; 262,144 max model length in Dynamo recipes.
- AA-LCR: **67.0%** (benchlm.ai)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. model-queue curated Overall: **71.6**.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Strong on PinchBench (90), SWE-Bench Verified (71.9), Terminal-Bench 2.1 (56.4), TauBench Retail (86.4); capped by moderate GDPVal (46.7) and NVFP4 quality regression on Terminal-Bench (53.9 vs 56.4 BF16). Frontier agentic/orchestration profile.
- **Reasoning: 76/100.** Strong on GPQA-D (87.0), MMLU-Pro (86.8), RULER @1M (95); capped by weak HLE text-only (26.7), CritPt (3.1), AA-Omniscience accuracy (21.6). Spiky — excellent knowledge retrieval, weak on hard open-ended reasoning.
- **Context window: 90/100.** Declared and verified 1M tokens with RULER @1M 95%; capped because public retrieval curves beyond the 1M point are not published.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal (no image/audio input); multimodal dim reflects text-only reality.
- **Coding: 70/100.** SWE-Bench Verified 71.9 and Multilingual 67.7 are solid; capped by SWE-Bench Pro not published for Ultra and no public Codeforces/LiveCodeBench headline. Competitive but not the top open coder.
- **Cost efficiency: 55/100.** Frontier 550B/55B model with NVFP4 efficiency and MTP speculative decoding; high absolute cost ($2.20/M output) and 4× Blackwell minimum deployment; not counted toward Overall.
- **Overall Score: 72/100.** Half-up mean of (72 + 76 + 90 + 50 + 70) / 5 = 71.6 → 72. Best-fit recommendation: frontier open reasoning/orchestration model for complex agents and long-context work; verify HLE-class and agentic-coding fit before production reliance.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official NVIDIA model card/build.nvidia.com + research.nvidia.com technical overview + benchlm.ai + BenchmarkList + vLLM/Ollama/Lambda independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
