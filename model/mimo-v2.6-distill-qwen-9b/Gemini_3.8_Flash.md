# MiMo V2.6 Distill Qwen 9B — findings by Gemini 3.8 Flash

- Source: Xiaomi/MiMo V2.6 Distill Qwen 9B (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B
- **Short description:** Xiaomi MiMo's open-weights 9.4B parameter dense model developed via supervised fine-tuning and reinforcement learning on Qwen3.5-9B, featuring native visual coding, cybersecurity skills, and agentic tool workflows.
- **Provider / access:** Hugging Face open weights (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`), self-hosted vLLM (`vllm serve XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`), and Ollama.
- **Release / knowledge:** September 2026 release; permissive MIT License.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, `opencode/mimo-v2.6-distill-qwen-9b`.
- **Context window:** 262,144 tokens total (262K native context window), supporting up to 16,384 maximum output tokens.
- **Modalities:** Interleaved text and image input; text and code output; native step-by-step thinking paths, tool execution, and structured outputs.
- **Pricing (as of 2026-10-21):** Free ($0.00) under permissive MIT license; self-hosted with low GPU operational requirements (single 24GB VRAM GPU).
- **Architecture:** 9.4B dense distilled autoregressive transformer fine-tuned on Xiaomi MiMo synthetic data with verl/uni-agent reinforcement learning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **37.1%** (SFT baseline) / **52.8%** (SFT + RL checkpoint)
- Tau2-Bench: **68.2%** (multi-turn tool execution)
- MiMo Cyber Bench: **31.3%** (SFT) / **47.0%** (RL cybersecurity tasks)
- GDPval-AA: **1,090** Elo
- Toolathon / AutomationBench: **38.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **52.0%** (zero-shot CoT reasoning)
- MMLU: **70.5%** (general domain knowledge)
- Humanity's Last Exam (HLE): **8.5%** (text-only, no tools)
- LCR / MLCR: **58.0%**
- Artificial Analysis Intelligence Index: **22.0**

Coding:

- SWE-bench Verified: **61.1%** (SFT baseline) / **66.2%** (SFT + RL checkpoint)
- SWE-bench Pro: **44.6% - 47.6%** (multi-file repository resolution)
- MiMo Visual Coding: **64.0%** (SFT) / **72.4%** (RL visual interface code generation)
- LiveCodeBench: **55.0%** pass@1

Long context:

- MRCR / RULER (262K window): **92.8%** retrieval fidelity across 262,144 tokens with reliable single-GPU KV-cache scaling.

### Normalized scores (1–100)

- **Tool use: 58/100.** Solid agentic command execution with 37.1%-52.8% Terminal-Bench 2.1 and 68.2% Tau2-Bench; capped on complex nested API chains.
- **Reasoning: 54/100.** Moderate analytical ability with ~52% GPQA Diamond and 70.5% MMLU; supported by native step-by-step reasoning tokens.
- **Context window: 74/100.** Full 262,144-token context capacity accommodating large codebases and visual document assets on local single-GPU systems.
- **Multimodal: 65/100.** Solid visual perception supporting image inputs and visual coding (72.4% on MiMo Visual Coding); capped by lack of video/audio streams.
- **Coding: 66/100.** Impressive 61.1%-66.2% SWE-bench Verified and 44.6%-47.6% SWE-bench Pro for a 9B parameter dense open model.
- **Cost efficiency: 100/100.** Completely free under MIT license, deployable locally without API dependencies.
- **Overall Score: 63/100.** Quality arithmetic mean of the 5 core quality dimensions ((58 + 54 + 74 + 65 + 66) / 5 = 63.4 rounded to 63). Outstanding 9B open-weights agent and coding model.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing Xiaomi MiMo official technical documentation, Hugging Face repository releases, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
