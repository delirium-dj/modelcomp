# Nemotron 3.5 Lightning 30B A3B — findings by Iceman

- Source: NVIDIA/Nemotron-3.5-Lightning-30B-A3B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Lightning 30B A3B (BF16 reference)
- **Short description:** NVIDIA’s Nemotron 3.5 Lightning is an open-weight 30B/3B-active hybrid Mamba-2 + MoE + Attention text model (OpenMDW-1.1) optimized for fast execution-layer inference (313 tok/s class), with free Zen availability under NVIDIA trial terms.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16`, OpenMDW-1.1) and hosted providers. Local metadata lists `opencode/nemotron-3.5-lightning-free`, free Zen tier, and paid routes.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Pre-training cutoff Sep 2025, post-training cutoff May 2026 (card).
- **IDs:** `NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16`, `nemotron-3.5-lightning-free`.
- **Context window:** 262,144 tokens total (card notes up to 1M on 8x H100; single-GPU validated 256K in BF16 recipes).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Free on OpenCode Zen under NVIDIA trial terms (usage logged); paid ~$0.07/$0.20 per 1M on hosted routes; self-host $0 (OpenMDW-1.1) per metadata.
- **Architecture:** Hybrid MoE (Mamba-2 + MoE + Attention), 30B total / 3B active parameters, MTP support, reasoning mode configurable (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table for Nemotron 3.5 Lightning (BF16) measured by NVIDIA under consistent harness, unless noted.

Agent / tool use:

- SWE-bench Verified: **51.56%**
- SWE-bench Multilingual: **39.33%**
- Terminal-Bench 2.1: **24.58%**
- PinchBench: **85.37%**
- BrowseComp: **36.97%**
- τ³-bench (Banking): **9.28%**
- GDPval-AA-V2: **832**

Reasoning / knowledge:

- MMLU Pro: **81.94%**
- AA-Omniscience: **17.50%**
- GPQA Diamond (no tools): **75.44%**
- HLE (text-only, no tools): **11.72%**
- SciCode: **32.60%**

Coding:

- SWE-bench Verified: **51.56%**
- SWE-bench Multilingual: **39.33%**
- Terminal-Bench 2.1: **24.58%**
- SciCode: **32.60%**

Long context:

- AA-LCR: **52.00%**
- 256K+ practical context on single GPU (BF16) with up to 1M in multi-GPU setups per card.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Positioned as fast execution layer, not top-tier planner.

- **Tool use: 72/100.** Mixed agentic profile: strong PinchBench (85.37%) and moderate SWE-bench Verified (51.56%) but weak terminal/banking-agent results (Terminal-Bench 2.1 24.58%, τ³-bench Banking 9.28%).
- **Reasoning: 74/100.** Good knowledge/reasoning for 3B active (MMLU Pro 81.94%, GPQA Diamond 75.44%) with low HLE (11.72%) and modest omniscience/science coding.
- **Context window: 86/100.** 256K+ practical context and up to 1M in supported multi-GPU deployments, with AA-LCR 52.00%.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 72/100.** Moderate coding/agentic coding (SWE-bench Verified 51.56%, SWE-bench Multilingual 39.33%, Terminal-Bench 2.1 24.58%, SciCode 32.60%).
- **Cost efficiency: 96/100.** OpenMDW-1.1 open weights, 3B active parameters, high throughput/low TTFT, and free Zen trial tier (with logging terms).
- **Overall Score: 69/100.** Mean of the five non-cost dims (72, 74, 86, 40, 72) = 68.8 → 69. Best fit as a fast, cost-efficient text-only execution model for high-volume agent steps rather than complex planning-heavy terminal work.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16 model card (Hugging Face)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16)
  - Local repository metadata consulted: `model/nemotron-3.5-lightning-free/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
