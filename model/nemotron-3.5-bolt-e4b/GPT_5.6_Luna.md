# Nemotron 3.5 Bolt E4B — findings by GPT 5.6 Luna

- Source: NVIDIA / Nemotron 3.5 Bolt E4B
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's small open-weight Gemma-4-derived model for fast local conversation, multi-turn tool use, instruction following, input grounding, and embedded/device assistants. The tracked family has both an exact BF16 checkpoint and a 4GB Q4 quantized deployment; benchmark values below identify the precision explicitly.
- **Provider / access:** Local deployment from NVIDIA's Hugging Face checkpoints through vLLM or llama.cpp; NVIDIA also documents an OpenAI-compatible local server and an NVIDIA NIM listing. No exact paid hosted price was verified.
- **Release / knowledge:** GA release 2026-10-23; post-training data cutoff May 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16` (full-precision checkpoint) and `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` (exact Q4_K_M deployment). No separate model weights are implied by the precision suffix.
- **Context window:** Up to 64K input and 64K output tokens, documented for both the BF16 and 4GB releases.
- **Modalities:** Text in/text out; configurable reasoning and conversational modes; tool calling and structured output supported. No image, audio, or video input was verified for this E4B release.
- **Pricing (as of 2026-10-30):** OpenMDW-1.1 open weights with no per-token charge; local hardware and serving costs apply. No exact hosted price was verified.
- **Architecture:** 8B total / 4B effective parameters, based on Gemma-4-E4B and further post-trained with multi-environment reinforcement learning. OpenMDW-1.1 license.

### Raw benchmarks found

> Scores below use the official BF16 column for the normalized interpretation. The exact 4GB Q4_K_M checkpoint is reported separately where useful; Q4 values are not silently mixed into the BF16 score.

Agent / tool use (official BF16 column):

- BFCL-v3: **68.51**
- When2Call Multi-Turn: **63.36**
- ToolSandbox: **68.77**
- Tau2-Bench: **55.10**
- IHEval: **84.79**
- RelyToolBench: **63.16**
- Q4_K_M comparison: ToolSandbox **74.13**, Tau2-Bench **52.32**, and RelyToolBench **69.29** (NVIDIA benchmark table)

Reasoning / knowledge:

- MultiChallenge: **53.10** (BF16)
- RoleBench Custom: **67.05** (BF16)
- RoleMRC: **80.63** (BF16)
- EQ-Bench v3: **39.40** (BF16)
- LongMemEval: **72.10** (BF16)
- GPQA Diamond / HLE / Artificial Analysis Intelligence Index: **no verified public score found** for this exact E4B release

Coding:

- IFBench: **63.79** (BF16)
- InverseIFEval: **46.84** (BF16)
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode, DeepSWE, and Vibe Code Bench: **no verified public score found** for this exact model

Long context:

- RULER at 64K: **86.99** (BF16); Q4_K_M **85.76** (NVIDIA benchmark table)
- LongBench v2 at 48K: **50.50** (BF16); the documented maximum remains 64K.

### Normalized scores (1–100)

- **Tool use: 70/100.** BFCL-v3 68.51, When2Call 63.36, ToolSandbox 68.77, Tau2 55.10, and RelyToolBench 63.16 show useful structured tool behavior, but the evidence is one vendor harness family and lacks a broad autonomous coding-agent result.
- **Reasoning: 65/100.** MultiChallenge 53.10, RoleBench Custom 67.05, RoleMRC 80.63, and LongMemEval 72.10 show competent small-model reasoning, while EQ-Bench 39.40 and the absence of exact GPQA/HLE/composite scores cap the result.
- **Context window: 48/100.** The exact model is limited to 64K, below the methodology's 100K threshold, although RULER reaches 86.99% at the stated limit.
- **Multimodal: 15/100.** NVIDIA documents text input and text output only for the E4B release.
- **Coding: 55/100.** IFBench 63.79 and InverseIFEval 46.84 provide instruction/coding-adjacent evidence, but no exact-model SWE-bench, LiveCodeBench, SciCode, or terminal-agent score was verified.
- **Cost efficiency: 100/100.** Open weights carry no per-token fee; hardware and energy costs are separate.
- **Overall Score: 51/100.** Half-up mean of the five non-cost dimensions: `(70 + 65 + 48 + 15 + 55) / 5 = 50.6`, rounded to 51. Best fit is a low-memory local text/tool assistant, not a long-context or multimodal coding specialist.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-30
- Method: three-plus independent fresh web searches, followed by exact-release checks against NVIDIA's Hugging Face cards, the NVIDIA technical report/API documentation, and the independent Unsloth reproduction of the benchmark table. BF16 and Q4_K_M results were kept labelled and were not treated as interchangeable. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

## Sources

- NVIDIA BF16 model card: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16
- NVIDIA 4GB Q4 model card: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB
- NVIDIA technical report: https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-Technical-Report.pdf
- NVIDIA NIM/API listing: https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-bolt-e4b
- Independent benchmark-card reproduction: https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF
