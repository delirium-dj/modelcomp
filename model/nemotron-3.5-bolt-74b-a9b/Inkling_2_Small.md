# Nemotron 3.5 Bolt 74B-A9B — findings by Inkling 2 Small

- Source: NVIDIA (`nemotron-3.5-bolt-74b-a9b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's open-weight Bolt-class MoE — 74B total / 9B active, tuned for fast serving on commodity 24GB-class hardware (24GB quantized checkpoint). Reasoning-oriented; text-only per the model card.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` and BF16 variant); NVIDIA NIM; vLLM/TensorRT-LLM.
- **Release / knowledge:** 2026; knowledge cutoff not publicly stated.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (HF)
- **Context window:** 256,000 tokens (256K); max output undisclosed.
- **Modalities:** text in → text out (no vision/audio in the tracked card); reasoning yes; tool calls yes (PinchBench 87.8% / MCP Atlas 52.2% measured).
- **Pricing (as of 2026-11-10):** open weights — self-host free; no first-party hosted price published.
- **Architecture:** Mixture-of-Experts, 74B total / 9B active; 24GB quantized and BF16 checkpoints.

### Raw benchmarks found

Agent / tool use:

- PinchBench: **87.8%** (NVIDIA 24GB model card)
- BrowseComp: **66.8%** (24GB card)
- Terminal-Bench 2.1: **51.0%** (24GB card)
- MCP Atlas: **52.2%** (24GB card)
- WebArena: **50.9%** (24GB card)
- τ³-bench: **17.0%** (24GB card)
- GDPval-AA normalized: **24.0%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA-D: **86.4%** (24GB card)
- HLE w/o tools: **25.3%** (AA-HLE **24.7%**)
- AA-LCR: **69.7%** (Artificial Analysis)
- CritPt: **4.3%** (Artificial Analysis)
- BenchLM overall: **42.65/100** (#129/1020)

Coding:

- AA-SciCode: **39.7%** (Artificial Analysis)
- No SWE-bench/LCB rows published for this ID

Long context:

- AA-LCR: **69.7%** at 256K tokens.

Multimodal:

- Text-only (no vision/audio inputs) — score 15 by the text-only rule; no verified public multimodal evidence exists.

### Normalized scores (1–100)

- **Tool use: 57/100.** PinchBench 87.8% and BrowseComp 66.8% are encouraging, MCP Atlas 52.2% / WebArena 50.9% / TB2.1 51.0% mid-tier, τ³ 17.0% and GDPval-AA 24% (AA) weak.
- **Reasoning: 50/100.** GPQA-D 86.4% strong; HLE 25.3%, CritPt 4.3% pull hard in the opposite direction.
- **Context window: 70/100.** 256K tokens; AA-LCR 69.7% verified.
- **Multimodal: 15/100.** Text-only (per card) — the mandatory text-only floor.
- **Coding: 50/100.** Only AA-SciCode 39.7% published — scored conservatively off the single verified coding row.
- **Cost efficiency: 85/100.** Open weights, 9B active — cheap self-hosting on 24GB hardware.
- **Overall Score: 48/100.** (57 + 50 + 70 + 15 + 50) / 5 = 48.4 → 48. Best fit: cheap local text reasoning/agentic experiments; not for multimodal or frontier work.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (NVIDIA HF model card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB — Hugging Face](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)
  - [Nemotron 3.5 Bolt 74B-A9B — BenchLM](https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b)
  - [Nemotron 3.5 Bolt 74B-A9B — Artificial Analysis](https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
