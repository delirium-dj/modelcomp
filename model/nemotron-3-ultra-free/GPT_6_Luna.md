# Nemotron 3 Ultra Free — findings by GPT-6 Luna

- Source: OpenCode Zen / NVIDIA (`nemotron-3-ultra-free`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's open-weight, 550B-parameter hybrid Mamba/Transformer mixture-of-experts model, served through a temporary free OpenCode Zen tier. “Free” identifies access/pricing, not a separate checkpoint; the corresponding paid NVIDIA and OpenRouter routes use the same Nemotron 3 Ultra weights.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3-ultra-free`, OpenAI-compatible Chat Completions at `https://opencode.ai/inference/openai/v1/chat/completions`. OpenCode lists the tier as free for a limited time. NVIDIA's free trial endpoint is also subject to NVIDIA API Trial Terms; the exact backend quantization and Zen route's own context/output caps are not publicly specified.
- **Release / knowledge:** Released June 4, 2026. NVIDIA lists pre-training data through September 2025 and post-training data through May 2026.
- **IDs:** `opencode/nemotron-3-ultra-free` (OpenCode Zen Free ID); upstream checkpoint `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4`. The “Free” suffix is the access tier; it is not a distinct model.
- **Context window:** NVIDIA advertises up to 1,048,576 tokens. NIM uses 262,144 tokens by default; 1M requires explicit long-context serving configuration. NVIDIA reports RULER 1M results. OpenCode Zen does not publish the free route's specific cap. Maximum output is provider/configuration-dependent: NVIDIA's serving example sets 32,768, while Vals AI lists 128K; neither establishes the Zen route's cap.
- **Modalities:** Text input and text output only. Reasoning can be enabled/disabled in the chat template; tool calling is supported by compatible serving configurations. No image/audio/video input or non-text output is documented.
- **Pricing (as of 2026-11-01):** OpenCode Zen lists input, output, and cached reads as Free ($0) for a limited-time feedback period. OpenCode warns that the NVIDIA free endpoint is trial-only: do not submit personal or confidential data; usage may be logged to improve NVIDIA products and services.
- **Architecture:** Open weights under OpenMDW-1.1. 550B total / 55B active parameters; hybrid Mamba-2 + attention + LatentMoE architecture with Multi-Token Prediction. NVIDIA publishes BF16 and NVFP4 checkpoints; the quantization used by Zen is not identified.

### Raw benchmarks found

> Vendor-reported BF16 and NVFP4 results are kept separate; third-party Vals results are independently measured and not merged into NVIDIA's figures.

Agent / tool use:

- Terminal-Bench 2.1: **56.4% BF16 / 53.9% NVFP4** (NVIDIA model card; NVIDIA-reported evaluation).
- GDPVal: **46.7 BF16 / 47.9 NVFP4** (NVIDIA model card; NVIDIA-reported evaluation; metric as shown by source).
- TauBench V3 (NVIDIA model card): Airline **81.5% / 80.0%**, Retail **86.4% / 88.4%**, Telecom **92.9% / 93.6%**, Banking **22.6% / 19.2%** (BF16 / NVFP4; per-domain results vary substantially).
- PinchBench: **90.0% BF16 / 89.8% NVFP4** (NVIDIA model card).
- Vals AI Terminal-Bench 2.1: **50.94% ±2.92**, rank **57/75** in its displayed comparison (Vals evaluation; default provider NVIDIA; evaluation settings listed on its model page).

Reasoning / knowledge:

- GPQA Diamond: **86.11% ±1.74**, rank **44/138** (Vals AI evaluation).
- MMLU Pro: **85.76% ±0.34**, rank **55/138** (Vals AI evaluation).
- Vals Index: **47.78%** (Vals AI; composite suite score, not a standalone reasoning accuracy).
- Artificial Analysis Intelligence Index: **12**, listed at **#20/21** among comparable open-weight models on the page checked (Artificial Analysis; its composite uses a different suite/version and should not be equated with the vendor benchmarks).

Coding:

- SWE-bench Verified: **70.7% BF16 / 69.5% NVFP4** (NVIDIA model card).
- SWE-bench Multilingual: **67.7% BF16 / 69.1% NVFP4** (NVIDIA model card).
- LiveCodeBench: **85.98% ±0.99**, rank **24/143** (Vals AI evaluation).
- Vibe Code Bench v1.1: **7.64% ±2.78**, rank **106/123** (Vals AI evaluation).
- Terminal-Bench 2.1: see separately reported vendor and Vals measurements above; results differ by harness/provider setup.

Long context:

- RULER 1M: **94.7% BF16 / 94.0% NVFP4** (NVIDIA model card; 1M-context configuration).
- AA-LCR: **65.4% BF16 / 65.5% NVFP4** (NVIDIA model card).

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 is in the mid-50s, while PinchBench and most TauBench V3 domains are strong; the much weaker Banking result and harness-sensitive Terminal-Bench results cap the score.
- **Reasoning: 77/100.** GPQA Diamond 86.11% and MMLU Pro 85.76% are strong, but the Artificial Analysis composite score is comparatively low and the reported evaluations use different suites.
- **Context window: 95/100.** The model has demonstrated RULER performance at 1M tokens, but the native NIM default is 262K and the OpenCode Zen route's actual limit is unpublished; 94.7% RULER retrieval is below the methodology's 98% threshold for a 100.
- **Multimodal: 15/100.** NVIDIA documents text-only input and output; no non-text modality is verified.
- **Coding: 76/100.** SWE-bench Verified 70.7% and LiveCodeBench 85.98% are solid, but Terminal-Bench 2.1 is around 51–56% and Vibe Code Bench v1.1 is 7.64%.
- **Cost efficiency: 100/100.** OpenCode lists the evaluated Zen tier at $0 per token during its limited-time free period; this may end and has an explicit trial/data-use caveat.
- **Overall Score: 68/100.** Half-up mean of the five quality dimensions: (76 + 77 + 95 + 15 + 76) / 5 = 67.8 → 68; best suited to text-only long-context analysis and agent workflows when the free route's serving limits and privacy terms fit the task.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Independent public-web research across NVIDIA's model card and technical report, OpenCode Zen documentation, and separate Vals AI / Artificial Analysis evaluations. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA Nemotron 3 Ultra model card](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b/modelcard)
  - [NVIDIA Nemotron 3 Ultra technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Ultra-Technical-Report.pdf)
  - [NVIDIA's Hugging Face checkpoint and benchmark card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)
  - [OpenCode Zen model IDs, endpoints, pricing, and free-tier terms](https://opencode.ai/docs/zen)
  - [NVIDIA NIM deployment and long-context / tool-calling documentation](https://docs.nvidia.com/nim/large-language-models/2.0.7/day-0/get-started-nemotron-3-ultra.html)
  - [Vals AI model benchmarks](https://www.vals.ai/models/nvidia_nemotron-3-ultra-550b-a55b)
  - [Artificial Analysis model evaluation](https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b)
