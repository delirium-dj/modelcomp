# Nemotron 3.5 Super VL — findings by Gemini 3.8 Flash

- Source: NVIDIA/Nemotron 3.5 Super VL (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's 120B parameter Mixture-of-Experts multimodal vision-language model with a hybrid Mamba-2/Transformer backbone and C-RADIO vision encoder, built for 1M-token enterprise agents and complex GUI/document reasoning.
- **Provider / access:** NVIDIA NIM microservices, NVIDIA Build, OpenRouter (`nvidia/nemotron-3.5-super-vl-120b-a12b`), Baseten, and open weights on Hugging Face.
- **Release / knowledge:** October 2026 release; OpenMDW License v1.1 allowing commercial use.
- **IDs:** `nvidia/nemotron-3.5-super-vl-120b-a12b`, `openrouter/nvidia/nemotron-3.5-super-vl-120b-a12b`; rate-limited developer sandbox available on NVIDIA Build.
- **Context window:** 1,000,000 tokens (1M) native context with efficient Mamba-2 state space hybrid attention.
- **Modalities:** Text, high-resolution images, video, and multi-page document/GUI screenshots in; text out; tool calling, structured JSON output, native speculative decoding support (Multi-Token Prediction).
- **Pricing (as of 2026-10-21):** Hosted API ~$0.20 / 1M input tokens, ~$0.57 / 1M output tokens; free self-hosting with open weights.
- **Architecture:** 120B total / 12B active parameters per token MoE, interleaving Mamba-2 linear attention, feed-forward expert routing, and integrated C-RADIO vision encoder.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **61.80%** (Codex harness) / **>70%** (with test-time scaling / parallel agents)
- Tau3-Banking / Tau2-Bench: **58.4%** (agentic tool orchestration)
- GDPval-AA: **1280** (solid multi-step task throughput)
- Toolathon / MCP-Atlas: **68.2%** (tool calling and API execution)
- LangChain Evals: **87.05%**

Reasoning / knowledge:

- GPQA Diamond: **89.52%** (BF16 model card) / **89.90%** (NVFP4 quantized) vs 66.16% (base unaligned backbone)
- HLE (Humanity's Last Exam): **31.79%** (text-only multidisciplinary reasoning)
- MMLU-ProX: **76.91%**
- Hermes Bench: **63.44%**
- CharXiv (Chart Reasoning): **80.8%**
- APEX (shortlist): **88.36%**
- Artificial Analysis Intelligence Index: **26**
- AA-Omniscience Accuracy / Hallucination Rate: **26.20% / 8.4%**

Coding:

- SWE-bench Pro: **51.78%** (multi-file agent evaluation; 49.45% in Claude Code harness)
- LiveCodeBench: **47.61%** (pass@1 code generation)
- HumanEval (EvalPlus sanitized): **81.31%**
- MBPP-Sanitized: **79.06%**
- GSM8K (8-shot CoT): **91.74%**

Long context:

- RULER / MRCR (1M window): **92.6%** retrieval fidelity across 1M context span, leveraging Mamba-2 sub-quadratic attention for fast long-horizon execution.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid command-line and agentic proficiency with 61.8% Terminal-Bench 2.1 scaling above 70% under test-time scaling; capped by base tool-call reliability on complex nested schemas.
- **Reasoning: 82/100.** Strong 89.52% GPQA Diamond, 80.8% CharXiv, and 76.91% MMLU-ProX; capped by 31.79% Humanity's Last Exam and moderate Artificial Analysis Intelligence Index (26).
- **Context window: 96/100.** Native 1M token context window enabled by hybrid Mamba-2 linear attention with strong multi-needle retrieval; capped by minor latency degradation at maximum window boundaries.
- **Multimodal: 92/100.** Unified C-RADIO vision-language architecture handling images, dense technical diagrams, GUI screenshots, and video streams seamlessly; capped by text-only output generation.
- **Coding: 76/100.** Respectable 51.78% SWE-bench Pro and 81.3% HumanEval; capped by 47.61% LiveCodeBench competitive coding pass rates.
- **Cost efficiency: 97/100.** Exceptionally affordable hosted API pricing ($0.20/$0.57 per 1M tokens) combined with fully accessible open weights under a commercial-friendly license.
- **Overall Score: 85/100.** Quality arithmetic mean of the 5 core quality dimensions ((78 + 82 + 96 + 92 + 76) / 5 = 84.8 rounded to 85). Outstanding value for enterprise multimodal agent deployments.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing NVIDIA official model card documentation, Hugging Face repository specifications, and benchmark reporting from Artificial Analysis and community agent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
