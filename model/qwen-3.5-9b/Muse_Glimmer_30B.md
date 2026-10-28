# Qwen 3.5 9B — findings by Muse Glimmer 30B

- Source: Qwen/Qwen3.5-9B
- Date: 2026-10-28
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba Qwen family multimodal foundation model released February 2026. Dense 9B-parameter hybrid Gated DeltaNet + Gated Attention architecture with unified vision-language training, 262K native context extensible to 1M, multi-token prediction, and 201-language coverage. Positioned as efficient small dense model with strong reasoning, coding, agent, and multimodal performance.
- **Provider / access:** Alibaba Qwen, Hugging Face repo Qwen/Qwen3.5-9B Apache 2.0. Available via Together AI, vLLM, SGLang, KTransformers, Ollama, ModelScope, Azure Foundry. Open weights.
- **Release / knowledge:** Release date 24 Feb 2026 per APXML. Knowledge cutoff not published; training data up to early 2026 implied.
- **IDs:** Hugging Face `Qwen/Qwen3.5-9B`. Together AI endpoint `Qwen/Qwen3.5-9B`. No Free/OpenCode Zen ID.
- **Context window:** 262,144 tokens natively, extensible up to 1,010,000 tokens with YaRN RoPE scaling. Verified on Hugging Face model card and Together AI.
- **Modalities:** Text + image + video in; text out. Reasoning yes with thinking mode default. Native tool calling supported, JSON mode supported.
- **Pricing (as of 2026-10-28):** Open weights self-hostable. API pricing varies by provider; Together AI lists $0.17/1M input, $0.25/1M output. APXML reports API pricing $0.14 input / $0.20 output per 1M.
- **Architecture:** Causal language model with vision encoder. 9B parameters, hidden dim 4096, 32 layers. Hybrid layout 8 × (3 × Gated DeltaNet→FFN → 1 × Gated Attention→FFN). Gated DeltaNet: 32 V heads, 16 QK heads, head dim 128. Gated Attention: 16 Q heads, 4 KV heads, head dim 256, RoPE dim 64. FFN intermediate 12288. MTP trained with multi-steps.

### Raw benchmarks found

Official model card benchmarks from Hugging Face Qwen/Qwen3.5-9B:

Language:
- MMLU-Pro 82.5
- MMLU-Redux 91.1
- C-Eval 88.2
- SuperGPQA 58.2
- GPQA Diamond 81.7
- IFEval 91.5
- IFBench 64.5
- MultiChallenge 54.5
- AA-LCR 63.0
- LongBench v2 55.2
- HMMT Feb 25 83.2
- HMMT Nov 25 82.9
- LiveCodeBench v6 65.6
- OJBench 29.2
- BFCL-V4 66.1
- TAU2-Bench 79.1
- VITA-Bench 29.8
- DeepPlanning 18.0
- MMMLU 81.2
- MMLU-ProX 76.3
- NOVA-63 55.9
- INCLUDE 75.6
- Global PIQA 83.2
- PolyMATH 57.3
- WMT24++ 72.6
- MAXIFE 83.4

Vision Language:
- MMMU 78.4
- MMMU-Pro 70.1
- MathVision 78.9
- Mathvista mini 85.7
- We-Math 75.2
- DynaMath 83.6
- ZEROBench 3.0
- ZEROBench sub 31.1
- VlmsAreBlind 93.7
- BabyVision 28.6/25.8
- RealWorldQA 80.3
- MMStar 79.7
- MMBenchEN-DEV-v1.1 90.1
- SimpleVQA 51.2
- HallusionBench 69.3
- OmniDocBench1.5 87.7
- CharXiv RQ 73.0
- MMLongBench-Doc 57.7
- CC-OCR 79.3
- AI2D TEST 90.2
- OCRBench 89.2
- ERQA 55.5
- CountBench 97.2
- RefCOCO avg 89.7
- EmbSpatialBench 83.0
- RefSpatialBench 58.5
- LingoQA 80.4
- VideoMME w sub 84.5
- VideoMME w/o sub 78.4
- VideoMMMU 78.9
- MLVU 84.4
- MVBench 74.4
- LVBench 70.0
- MMVU 67.8
- ScreenSpot Pro 65.2
- OSWorld-Verified 41.8
- AndroidWorld 57.8
- TIR-Bench 45.6/31.9
- V* 90.1/88.5
- SLAKE 79.0
- PMC-VQA 57.9
- MedXpertQA-MM 49.9

Independent provider / review:

- Together AI model page confirms 262K native context extensible to 1M+, 66.1% BFCL-V4, 79.1% TAU2-Bench, 78.9% MathVision, 70.1% MMMU-Pro, 65.6% LiveCodeBench v6, 84.5% VideoMME, 89.2% OCRBench, 81.2% MMMLU across 201 languages.
- APXML independent benchmark summary reports Professional Knowledge MMLU Pro 0.825 rank 21, Graduate-Level QA GPQA 0.817 rank 59, Agentic Index 0.01 rank 111, Coding Index 0.23 rank 126, Intelligence Index auto 0.11 standard 0.13. About text claims strong scores on MMLU-Pro 82.5%, GPQA Diamond 81.7%, HMMT 90%/90% and LiveCodeBench v6 82.7% which differs slightly from model card LiveCodeBench 65.6%.

Conflicting / missing:

- LiveCodeBench v6 score discrepancy: official model card lists 65.6; APXML about text claims 82.7%. APXML evaluation table does not list LiveCodeBench numeric, only Coding Index 0.23. Likely claim refers to different variant or evaluation setting.
- No independent third-party replication beyond provider summaries; APXML ranks derived from LLM-stats/Artificial Analysis aggregators.

### Normalized scores (1–100)

- **Tool use: 70/100.** BFCL-V4 66.1% and TAU2-Bench 79.1% reported; native tool calling supported. Mid-high for 9B class.
- **Reasoning: 78/100.** MMLU-Pro 82.5, GPQA Diamond 81.7, MMMU-Pro 70.1. Strong graduate-level reasoning for dense 9B.
- **Context window: 80/100.** 262K native extensible to ~1M; strong but behind 1M-native models.
- **Multimodal: 82/100.** Unified vision-language with 89.2% OCRBench, 84.5% VideoMME, 78.4% MMMU, 78.9% MathVision.
- **Coding: 68/100.** LiveCodeBench v6 65.6% official, conflicting 82.7% claim. Moderate coding for 9B dense; behind larger coding specialists.
- **Cost efficiency: 92/100.** Open weights Apache 2.0, self-hostable on 1×A100 for 262K context, API pricing ~$0.14-$0.17 per 1M input.
- **Overall Score: 75.6/100.** Mean of Tool 70, Reasoning 78, Context 80, Multimodal 82, Coding 68, Cost 92 = 78.3. Best fit: efficient multimodal 9B dense with strong reasoning/vision and excellent cost efficiency; coding is good but not top-tier.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-28
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
