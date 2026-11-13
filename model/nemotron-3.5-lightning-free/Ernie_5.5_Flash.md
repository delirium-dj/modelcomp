# Nemotron 3.5 Lightning Free — findings by Ernie 5.5 Flash

- Source: NVIDIA (`nemotron-3.5-lightning`, free access tier)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning (Free) — `Free` is an access tier, not a separate model
- **Short description:** NVIDIA's 30B-total / 3B-active MoE built as a fast "execution layer" for long-running agents — cheap, high-throughput task execution rather than deep reasoning. The free tier covers the same weights as paid NIM/OpenRouter routes.
- **Provider / access:** OpenCode Zen free route (`opencode/nemotron-3.5-lightning-free`), NVIDIA NIM / build.nvidia.com, OpenRouter `:free` suffix; OpenAI-compatible endpoints.
- **Release / knowledge:** 2026 (Nemotron 3.5 generation, announced with the "execution layer" positioning); knowledge cutoff not published.
- **IDs:** `nvidia/nemotron-3.5-lightning-30b-a3b` (build.nvidia.com), `nemotron-3.5-lightning` (NIM), free routes `opencode/nemotron-3.5-lightning-free` / OpenRouter `:free`
- **Context window:** 262,144 tokens (NIM docs), text-only.
- **Modalities:** text in / text out; no image, audio or video input. Tool calling supported.
- **Pricing (as of 2026-11-12):** $0 on the free routes (Zen free tier, NVIDIA free endpoint); paid NIM/OpenRouter routes serve the same weights at NVIDIA's published rate.
- **Architecture:** 30B total / 3B active MoE, open weights on Hugging Face (`nvidia/Nemotron-3.5-Lightning-30B-A3B`), optimized for throughput/latency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **24.58%** (build.nvidia model card)
- Tau3-Banking: **9.28%** (build.nvidia model card)
- GDPval-AA: **832** (build.nvidia model card)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **75.44%** (build.nvidia model card)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **not published for this SKU** (the 550B-A55B Ultra is the indexed sibling)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **51.56%** (build.nvidia model card)
- LiveCodeBench / SciCode / DeepSWE / SWE-Pro: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks figures for this SKU; the 262,144-token window comes from the NIM docs.

### Normalized scores (1–100)

- **Tool use: 45/100.** Terminal-Bench 2.1 24.58% and Tau3-Banking 9.28% are low, and GDPval-AA 832 is mid — consistent with a small fast "execution" model rather than an agent planner.
- **Reasoning: 68/100.** GPQA Diamond 75.44% is respectable for a 3B-active model, but there is no HLE or Index figure and the model is explicitly tuned for execution speed, not depth.
- **Context window: 74/100.** 262,144 tokens, inside the 200K–500K band; no retrieval measurement published.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 55/100.** SWE-bench Verified 51.56% — mid-pack; no other coding benchmark is published for this SKU.
- **Cost efficiency: 100/100.** Free on Zen/NVIDIA free endpoints (same weights as paid routes); not counted toward Overall.
- **Overall Score: 51/100.** Mean of tool use 45, reasoning 68, context 74, multimodal 15, coding 55. Best fit: high-volume, latency-sensitive subtask execution inside a larger agent scaffold (tool calls, formatting, extraction); not a planner or a deep-reasoning model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (NVIDIA Nemotron 3.5 Lightning announcement and build.nvidia model card, NIM docs, OpenCode Zen free-tier listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA — Nemotron 3.5 Lightning: specialized task execution for long-running agents](https://developer.nvidia.com/blog/nvidia-nemotron-3-5-lightning-delivers-fast-accurate-specialized-task-execution-for-long-running-agents)
  - [build.nvidia.com — nemotron-3.5-lightning-30b-a3b (SWE 51.56, TB 24.58, Tau3 9.28, GDPval 832, GPQA 75.44)](https://build.nvidia.com/nvidia/nemotron-3.5-lightning-30b-a3b)
  - [NVIDIA NIM docs — Nemotron 3.5 Lightning (262,144 ctx, text-only)](https://docs.nvidia.com/nim/large-language-models/2.0.10/get-started/advanced/get-started-nemotron-3.5-lightning.html)
  - [OpenCode Zen docs (free-tier routes)](https://opencode.ai/docs/zen)