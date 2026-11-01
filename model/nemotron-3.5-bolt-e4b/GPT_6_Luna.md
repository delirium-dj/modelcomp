# Nemotron 3.5 Bolt E4B — findings by GPT-6 Luna

- Source: NVIDIA/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B 4GB
- **Short description:** NVIDIA's compact, quantized, Gemma-4-E4B-based text model, post-trained for concise conversation, instruction following, and multi-turn tool use on local/edge devices. This report evaluates the exact Q4_K_M 4GB GGUF checkpoint, not the separate BF16 checkpoint, 74B-A9B Bolt, or other Nemotron models.
- **Provider / access:** NVIDIA Hugging Face repository `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`; download and self-host with llama.cpp (the card includes an OpenAI-compatible local Chat Completions server). The public NVIDIA NIM model card is for the distinct BF16 checkpoint and its results are not used here.
- **Release / knowledge:** NVIDIA published the model on October 23, 2026. The card gives model dates December 2025–May 2026 and says post-training data has a May 2026 cutoff.
- **IDs:** Exact Q4_K_M checkpoint `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`; companion draft model `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-DFlash` is for speculative decoding, not a separate target score. BF16 weights use `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16` and are kept separate.
- **Context window:** 64K context. The GGUF card's local llama.cpp command sets `-c 65536`; its summary separately says input/output can each be up to 64K, which should not be read as proof that 64K input and 64K output fit simultaneously. Example API calls use up to 16K generation tokens.
- **Modalities:** Text input and text output. Supports reasoning on/off, conversational mode, and tool calls; these are text-model features. NVIDIA describes voice/device assistant applications, but speech/audio and vision processing are supplied by other system components, not this checkpoint.
- **Pricing (as of 2026-11-01):** Public weights are downloadable without an inference-token fee; self-hosting still requires hardware and operating cost. The model is governed by OpenMDW-1.1 (the base Gemma 4 weights also carry Apache-2.0 terms); review both terms. No stable paid hosted API price for this exact Q4 checkpoint was verified.
- **Architecture:** 8B total / 4B effective parameters; Gemma-4-E4B base, post-trained by NVIDIA; Q4_K_M precision. Model card says commercial and non-commercial use is permitted subject to OpenMDW-1.1.

### Raw benchmarks found

All quality values below are the **Q4_K_M** column for the exact 4GB model in NVIDIA's Hugging Face model card. They are not the nearby BF16 column. NVIDIA says evaluations use a consistent NeMo Gym harness and may differ from other vendors' self-reported results. The card says all evaluations use reasoning mode except RoleBench, EQ-Bench v3, and RULER.

Agent / tool use:

- BFCL-v3: **67.31**; ToolSandbox: **74.13**; Tau2-Bench: **52.32**; When2Call Multi-Turn: **60.50** (overall accuracy); RelyToolBench: **69.29** (native/real pass rate). These are NVIDIA's Q4_K_M results.
- When2Call Multi-Turn is noted by NVIDIA as not yet released as of the model-card publication, so its result is vendor-reported and not independently reproducible from a public benchmark release.
- No verified exact-checkpoint Terminal-Bench, GDPval-AA, or coding-agent repository score found.

Reasoning / knowledge and instruction control:

- MultiChallenge: **55.60**; IHEval: **82.40**; AgentIF: **22.95**; IFBench: **64.00**; InverseIFEval: **45.26**; StructEval-T: **79.99**; SysBench: **67.22** (Q4_K_M values in NVIDIA's card).
- No exact-checkpoint GPQA Diamond, HLE, AIME, or MMLU score was found in the model card.

Conversation / grounding:

- Brevity Benchmark: **82.84**; EQ-Bench v3: **38.15**; RoleBench: **71.21**; RoleMRC: **79.12** (Q4_K_M values; RoleBench and EQ-Bench are non-reasoning evaluations).
- GaRAGe: **40.73**; RAGTruth: **77.88** (Q4_K_M values).

Coding:

- No verified exact-checkpoint SWE-bench, SWE-Pro, LiveCodeBench, SciCode, or other code-generation score found. Tool use and instruction-following benchmarks are not coding benchmarks and are not substituted for one.

Long context:

- RULER at 64K: **85.76**; LongMemEval: **69.92**; LongBench v2 at 48K: **48.67** (Q4_K_M values). SysBench at **67.22** also tests maintaining rules in long prompts.

Inference performance (Q4_K_M, batch size 1, llama.cpp CUDA, NVIDIA AIPerf; hardware/configuration-specific):

- RTX 5070, 3K input/50 output: **3.5 GB**, **548 ms** TTFT, **133.4 tokens/s**; 32K cached + 2K new input/256 output: **4.3 GB**, **1,238 ms**, **106.2 tokens/s**.
- Jetson Orin Nano 8GB, 3K input/50 output: **4.2 GB**, **5,785 ms** TTFT, **15.5 tokens/s**; 32K cached + 2K new input/256 output: **4.9 GB**, **6,259 ms**, **13.0 tokens/s**. NVIDIA notes results vary by hardware, software, and configuration.

### Normalized scores (1–100)

- **Tool use: 68/100.** Q4_K_M BFCL-v3 67.31, ToolSandbox 74.13, Tau2-Bench 52.32, and RelyToolBench 69.29 show strong small-model function use; the narrower edge-agent target and unreleased When2Call result cap confidence. [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB).
- **Reasoning: 60/100.** MultiChallenge 55.60, IHEval 82.40, IFBench 64.00, and InverseIFEval 45.26 indicate capable instruction and multi-turn reasoning, but there are no verified GPQA, HLE, or math-reasoning scores. [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB).
- **Context window: 49/100.** The model is below 100K at 64K, which caps it in the project's lower context tier; RULER 85.76 at 64K is strong, while LongBench v2 48.67 shows less robust performance on a separate long-context task. [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB).
- **Multimodal: 15/100.** The exact checkpoint accepts and returns text only; voice/physical-agent examples combine it with external speech or vision components. [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB); [NVIDIA announcement](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/).
- **Coding: 44/100.** No direct coding benchmark was verified for this Q4 checkpoint, and NVIDIA positions it for conversation and embedded agents rather than coding; this is a conservative, low-confidence estimate, not a measured coding result. [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB); [NVIDIA release page](https://research.nvidia.com/labs/nemotron/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB/).
- **Cost efficiency: 100/100.** The Q4_K_M weights are available to download without a token fee under OpenMDW-1.1; hardware and runtime costs remain, and no stable hosted price for this exact quantized checkpoint was verified. [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB); [OpenMDW-1.1 terms](https://openmdw.ai/license/1-1/).
- **Overall Score: 47/100.** Half-up mean of the five quality dimensions: (68 + 60 + 49 + 15 + 44) / 5 = 47.2 → 47. Cost is excluded. Best suited to local, text-based conversational and multi-turn tool agents on constrained NVIDIA hardware; not an evidence-backed pick for multimodal input, long-context research beyond 64K, or code repair.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Four independent exact-name searches plus direct checks of NVIDIA's release page, official announcement, technical-report listing, Hugging Face card and checkpoint metadata, and NVIDIA's model-serving card. Every reported quality metric uses the exact 4GB Q4_K_M column; BF16 figures and metrics for other Nemotron/Gemma/Qwen models were not transferred. NVIDIA's benchmark caveats, reasoning-mode exceptions, and the unreleased When2Call result are identified. Normalized scores are independent interpretations, not NVIDIA scores.
- Reference URLs:
  - [NVIDIA Nemotron 3.5 Bolt E4B 4GB model card and Q4_K_M benchmarks](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)
  - [NVIDIA Bolt E4B 4GB technical release page](https://research.nvidia.com/labs/nemotron/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB/)
  - [NVIDIA Bolt and Super VL announcement](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
  - [NVIDIA technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-Technical-Report.pdf)
  - [NVIDIA Build model card (BF16 checkpoint; variant reference only)](https://build.nvidia.com/nvidia/nemotron-3.5-bolt-e4b/modelcard)
  - [OpenMDW-1.1 license](https://openmdw.ai/license/1-1/)

---
