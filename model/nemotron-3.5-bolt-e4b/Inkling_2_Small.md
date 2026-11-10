# Nemotron 3.5 Bolt E4B — findings by Inkling 2 Small

- Source: NVIDIA (`nemotron-3.5-bolt-e4b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's smallest Bolt-class open model — ~4GB footprint for edge/on-device deployment ("E" = effective parameters), reasoning-capable, 64K context, strong structured tool-calling and instruction-following at tiny scale.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`); NVIDIA NIM; build.nvidia.com; vLLM.
- **Release / knowledge:** 2026; knowledge cutoff not publicly stated.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` (HF)
- **Context window:** 65,536 tokens (64K); max output undisclosed.
- **Modalities:** text in → text out; reasoning yes; tool calls yes (BFCL v3 67.3% measured).
- **Pricing (as of 2026-11-10):** open weights — free self-host; runs on edge/consumer hardware.
- **Architecture:** dense small transformer (~4GB quantized; effective 4B-class).

### Raw benchmarks found

Agent / tool use:

- ToolSandbox: **74.13%** (NVIDIA 4GB model card)
- BFCL v3: **67.3%** (card)
- When2Call Multi-Turn: **60.50%** (card)
- τ²-bench: **52.3%** (card)
- RelyToolBench: **69.29%** (card)
- AgentIF: **22.95%** (card)

Reasoning / knowledge:

- GaRAGe (grounded RAG): **40.73%** (card)
- RAGTruth (provider-reported): **77.88%** (card)
- EQ-Bench 3: **38.15%**; RoleBench **71.21%**; RoleMRC **79.12%** (card)

Coding:

- no verified public coding score found

Long context:

- RULER (64K): **85.76%**; LongMemEval: **69.92%**; LongBench v2: **48.7%** (card)

Multimodal:

- Text-only — no verified public multimodal evidence exists.

Instruction following:

- IHEval: **82.40%**; StructEval-T: **79.99%**; MultiChallenge (provider-reported): **55.60%**; AA-IFBench: **61.1%** (Artificial Analysis); Brevity **82.84%**; SysBench **67.22%**

### Normalized scores (1–100)

- **Tool use: 62/100.** ToolSandbox 74.13%, BFCL v3 67.3%, RelyToolBench 69.29% — remarkable tool-calling for ~4GB class; τ²-bench 52.3% and AgentIF 22.95% cap it.
- **Reasoning: 52/100.** RAGTruth 77.88% grounded-faithfulness is strong; GaRAGe 40.73% and EQ-Bench 38.15% less so; no GPQA/HLE rows published.
- **Context window: 66/100.** 64K tokens; RULER@64K 85.76% verified — best-in-class at this size; LongBench v2 48.7% shows limits.
- **Multimodal: 15/100.** Text-only — the mandatory text-only floor.
- **Coding: 40/100.** Provisional — no verified public coding rows.
- **Cost efficiency: 95/100.** ~4GB quantized open weights for edge/consumer GPUs — near-zero marginal cost.
- **Overall Score: 47/100.** (62 + 52 + 66 + 15 + 40) / 5 = 47.0 → 47. Best fit: on-device tool-calling agents and RAG assistants; not for hard reasoning or code generation.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (NVIDIA HF model card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA-Nemotron-3.5-Bolt-E4B-4GB — Hugging Face model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)
  - [Nemotron 3.5 Bolt E4B — BenchLM](https://benchlm.ai/models/nemotron-3-5-bolt-e4b)
  - [Nemotron 3.5 Bolt E4B — Artificial Analysis](https://artificialanalysis.ai/models/nemotron-3-5-bolt-e4b-4gb)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
