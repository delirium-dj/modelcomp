# Nemotron 3.5 Bolt 74B A9B — findings by Iceman

- Source: NVIDIA/Nemotron-3.5-Bolt-74B-A9B-24GB
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt 74B A9B 24GB
- **Short description:** NVIDIA Nemotron 3.5 Bolt is an open-weight 74B/9B-active hybrid Mamba-2/Transformer vision-language MoE optimized to run locally on 24GB GPUs (IQ2 build), targeting coding and agentic workflows.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`, OpenMDW-1.1 license) and NVIDIA NIM/self-host. Local metadata lists `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`, `Nemotron 3.5 Bolt 74B A9B`.
- **Context window:** 262,144 tokens (256K) per local metadata/card.
- **Modalities:** Text, image, and video input; text output.
- **Pricing (as of 2026-11-10):** Open weights (OpenMDW-1.1); runs locally in 24GB, no per-token list price (self-host/NIM).
- **Architecture:** Hybrid Mamba-2 + Transformer sparse MoE, 74B total / 9B active parameters, vision-language model with IQ2 quantized 24GB variant (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` unless noted. The card reports BF16 and IQ2 (24GB) results; IQ2 trails BF16 on quality.

Agent / tool use:

- Terminal-Bench 2.1: **50.98%** (reported; variant not always disambiguated in text)
- Agentic/coding assistant positioning emphasized; no SWE-bench/LiveCodeBench/DeepSWE figures published in reviewed text.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (text-extracted)
- AIME / MMLU-Pro / HLE: **no verified public score found** (text-extracted)

Coding:

- Terminal-Bench 2.1: **50.98%**
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- 256K context supported; no standalone long-context retrieval benchmark numeric extracted.

Multimodal:

- Vision-language (text/image/video input) supported; multimodal benchmark numerics not clearly extracted from reviewed text.

### Normalized scores (1–100)

> Derived from limited verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Conservative due to sparse published benchmark numerics.

- **Tool use: 74/100.** Moderate agentic coding signal from Terminal-Bench 2.1 (50.98%) but limited broader tool-use benchmark coverage.
- **Reasoning: 72/100.** Positioned as a capable local reasoning/coding model, but standardized reasoning benchmark numerics were not clearly extracted in this pass.
- **Context window: 86/100.** 256K context is strong for local/agentic workflows.
- **Multimodal: 78/100.** Vision-language (image/video input) capability is a key differentiator for local use; benchmark evidence limited.
- **Coding: 76/100.** Terminal-Bench 2.1 50.98% indicates useful coding-agent capability, but absence of SWE-bench/LiveCodeBench figures limits confidence.
- **Cost efficiency: 92/100.** Open weights with efficient local deployment on a single 24GB GPU (IQ2 build) provide high cost efficiency for on-device use.
- **Overall Score: 77/100.** Mean of the five non-cost dims (74, 72, 86, 78, 76) = 77.2 → 77. Best fit for local multimodal coding/agent assistance on consumer GPUs, with scoring limited by sparse published benchmarks.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are conservative normalized 1–100 interpretations from limited verified figures, not official vendor scores.
- Reference URLs:
  - [NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB model card (Hugging Face)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)
  - Local repository metadata consulted: `model/nemotron-3.5-bolt-74b-a9b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
