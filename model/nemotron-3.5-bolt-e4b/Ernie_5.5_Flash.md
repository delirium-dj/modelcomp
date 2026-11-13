# Nemotron 3.5 Bolt E4B — findings by Ernie 5.5 Flash

- Source: NVIDIA/Nemotron 3.5 Bolt E4B (`nemotron-3.5-bolt-e4b`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt E4B (8B params, 4B effective; 4GB Q4_K_M release)
- **Short description:** NVIDIA's small language model post-trained from Gemma-4-E4B-it (released 2026-10-23) for fast local voice/device assistants, interactive personas and embedded interfaces — multi-turn tool use, instruction following and input grounding in a 4GB footprint.
- **Provider / access:** Open weights `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` (GGUF Q4_K_M, OpenMDW-1.1) and the BF16 sibling; llama.cpp / Ollama / LM Studio / vLLM / SGLang local serving; NVIDIA Build (`nemotron-3.5-bolt-e4b`).
- **Release / knowledge:** 2026-10-23; post-training data cutoff May 2026.
- **IDs:** `nemotron-3.5-bolt-e4b` (dataset), `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` (HF), `nemotron-bolt` (served name).
- **Context window:** 65,536 tokens (64K in / 64K out).
- **Modalities:** text in / text out; reasoning (chat-template thinking toggle + runtime budget); tool calls (gemma4 parser); conversational mode; structured output.
- **Pricing (as of 2026-11-13):** $0 per token — open weights (OpenMDW-1.1); free local inference, 6.18 GB Q4_K_M.
- **Architecture:** Gemma-4-E4B (8B total / 4B effective), Q4_K_M 4-bit GGUF + BF16 reference; GRPO multi-environment RL post-training (NeMo RL / NeMo Gym).

### Raw benchmarks found

> NVIDIA's own evaluation table (NeMo Gym harness), Bolt-E4B-4GB Q4_K_M column — the 4-bit release's own numbers, which is what this folder tracks.

Agent / tool use:

- BFCL v3: **67.31%** (BF16 68.51; Qwen3.5-4B 70.56)
- Tau2-Bench (core): **52.32%** (BF16 55.10; Qwen3.5-4B 61.74)
- ToolSandbox: **74.13%**; When2Call Multi-Turn: **60.50%**; RelyToolBench: **69.29%**
- IHEval: **82.40%**; AgentIF: **22.95%**; SysBench: **67.22%**

Reasoning / knowledge:

- RULER (64K): **85.76%** (BF16 86.99)
- LongMemEval: **69.92%**; LongBench v2 (48K): **48.67%**
- GaRAGe: **40.73%**; RAGTruth: **77.88%**
- GPQA / HLE / MMLU-Pro: no verified public score found

Instruction following:

- MultiChallenge: **55.60%**; IFBench: **64.00%** (AA row 61.1%); InverseIFEval: **45.26%**; StructEval-T: **79.99%**; Brevity: **82.84%**; RoleBench: **71.21%**; RoleMRC: **79.12%**; EQ-Bench 3: **38.15%**

Coding:

- No coding benchmark row published (positioned for voice/device assistants, not coding)

Long context:

- RULER 64K 85.76% and LongBench v2 48.67% at 64K — solid for the window.

### Normalized scores (1–100)

- **Tool use: 80/100.** BFCL 67.3%, tau2 52.3%, ToolSandbox 74.1%, When2Call 60.5%, RelyToolBench 69.3% — a coherent mid-tier tool-use profile that leads the Qwen3.5-4B/Gemma-4-E4B peer set on several rows. Capped by the missing terminal/agentic harness rows.
- **Reasoning: 65/100.** RULER 85.76% and LongMemEval 69.92% are strong for a 4B-effective SLM, but no GPQA/HLE row exists and the model is not a reasoning-first design. Mid-band.
- **Context window: 60/100.** 64K — tier <100K band (50–64); RULER 85.76% at 64K is good, but the window itself caps the score.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 35/100.** No coding benchmark row; positioned for voice/device assistants. Score reflects absence of evidence for a non-coding model.
- **Cost efficiency: 100/100.** $0 — open 4GB GGUF runnable on edge/CPU-class hardware.
- **Overall Score: 51/100.** Best fit for on-device voice assistants, persona agents and embedded interfaces that need multi-turn tool use and instruction following in a 4GB budget; the 64K window, text-only modality and missing coding rows keep it mid-band.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (NVIDIA-Nemotron-3.5-Bolt-E4B-4GB Hugging Face model card and its NeMo Gym benchmark table, BenchLM evidence rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB — Hugging Face model card (benchmark table)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)
  - [Nemotron 3.5 Bolt E4B — BenchLM (21 evidence rows)](https://benchlm.ai/models/nemotron-3-5-bolt-e4b)
  - [Nemotron 3.5 Bolt E4B 4GB technical report (PDF)](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-Technical-Report.pdf)
  - [Nemotron 3.5 Bolt E4B — NVIDIA Build](https://build.nvidia.com/nvidia/nemotron-3.5-bolt-e4b)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.