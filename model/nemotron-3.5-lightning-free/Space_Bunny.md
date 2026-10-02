# Nemotron 3.5 Lightning Free — findings by Space Bunny Alpha

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`; OpenCode Zen free route)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's open 30B/3B-active hybrid MoE execution model for high-volume, low-latency agent steps, tool calls, result validation, and subagent delegation.
- **Provider / access:** NVIDIA weights and NIM; OpenCode Zen `opencode/nemotron-3.5-lightning-free`; local serving through vLLM, SGLang, and TensorRT-LLM. The underlying model card documents a `qwen3_coder` tool-call parser.
- **Release / knowledge:** NVIDIA and the model card list 2026-08-11. No reliable knowledge cutoff was shown.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`; `opencode/nemotron-3.5-lightning-free`.
- **Context window:** The official NVFP4 checkpoint is validated for up to 1M tokens. The free Zen route is a hosted serving configuration; its deployed limit should be checked before sending a full 1M prompt.
- **Modalities:** Text input/output; reasoning toggleable; function/tool calling supported. The official card describes English and coding use with some multilingual support; no image input is claimed.
- **Pricing (as of 2026-09-24):** OpenCode Zen free route is $0 during its trial/promotion. OpenCode warns that NVIDIA trial sessions are logged and should not receive personal or confidential data.
- **Architecture:** Open-weight hybrid Mixture of Experts using Mamba and Transformer layers, 30B total / 3B active parameters, with speculative-decoding components; OpenMDW License 1.1.

### Raw benchmarks found

The following values are the official NVFP4 column from NVIDIA's model card, measured with NVIDIA's NeMo Gym / NeMo Evaluator harnesses:

Agent / tool use:

- Terminal-Bench 2.1: **23.46%**
- PinchBench: **83.43%**
- BrowseComp: **36.81%**
- τ³-Bench Banking: **9.48%**
- GDPval-AA-V2: **865** (published as an Elo-style value)
- Toolathlon, Claw-Eval, and MCP-Atlas: **no verified public exact score found**

Reasoning / knowledge:

- GPQA Diamond (no tools): **75.57%**
- HLE (text-only, no tools): **10.47%**
- MMLU-Pro: **81.62%**
- AA-Omniscience: **16.63%**
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact score found**

Coding:

- SWE-bench Verified: **52.80%**
- SWE-bench Multilingual: **36.47%**
- SciCode: **31.38%**
- LiveCodeBench, Vibe Code Bench, and DeepSWE: **no verified public exact score found**

Long context:

- AA-LCR: **49.19%** at the model's long-context evaluation (official NVFP4 model-card table)
- Native/validated context: up to 1M tokens; no independent retrieval-at-length score was found.

Sources consulted: [official NVIDIA Hugging Face model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4), [NVIDIA technical blog](https://developer.nvidia.com/blog/nvidia-nemotron-3-5-lightning-delivers-fast-accurate-specialized-task-execution-for-long-running-agents/), [BenchLM Nemotron 3.5 Lightning profile](https://benchlm.ai/models/nemotron-3-5-lightning-30b-a3b-nvfp4), and [OpenCode Zen documentation](https://opencode.ai/docs/zen/), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 48/100.** PinchBench 83.43% is strong for high-volume execution, but Terminal-Bench 23.46%, BrowseComp 36.81%, and Banking 9.48% show limited deep agent reliability.
- **Reasoning: 58/100.** MMLU-Pro 81.62% and GPQA 75.57% are solid for a 3B-active model, while HLE 10.47% and AA-Omniscience 16.63% cap general reasoning.
- **Context window: 82/100.** The underlying checkpoint supports 1M context and AA-LCR 49.19%; the free hosted route may expose a smaller deployment limit.
- **Multimodal: 15/100.** The evaluated model is text-only.
- **Coding: 55/100.** SWE-bench Verified 52.80% and multilingual 36.47% provide usable coding evidence, but SciCode 31.38% is modest.
- **Cost efficiency: 100/100.** The free Zen/NVIDIA trial is free, with explicit logging and no-confidential-data restrictions.
- **Overall Score: 51.6/100.** (48 + 58 + 82 + 15 + 55) / 5 = 51.6. Best fit: a low-cost execution layer paired with a stronger planner, not a frontier primary reasoner.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of NVIDIA's official model card and blog, independent BenchLM evidence, and OpenCode's free-route documentation; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
