# Nemotron 3.5 Lightning — findings by GPT-6 Luna

- Source: NVIDIA/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Lightning
- **Short description:** NVIDIA's open-weight 30B-A3B hybrid model for reasoning, coding, and agent workflows. The `-free` route suffix is an access tier for the same model, not a distinct checkpoint or model variant.
- **Provider / access:** Official BF16 weights at Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16`; NVIDIA also publishes an optimized NVFP4 checkpoint. NVIDIA NIM, OpenRouter, and OpenCode Zen offer hosted access; OpenRouter currently lists both a free route (`nvidia/nemotron-3.5-lightning:free`) and a paid route (`nvidia/nemotron-3.5-lightning`).
- **Release / knowledge:** Released August 11, 2026. NVIDIA lists pretraining data through September 2025 and post-training data through May 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` (official BF16 weights); `nvidia/nemotron-3.5-lightning:free` (OpenRouter free route); `opencode/nemotron-3.5-lightning-free` (OpenCode Zen route).
- **Context window:** NVIDIA advertises up to 1M tokens; its card says a single H100 deployment uses 256K. OpenRouter's free route currently lists 1M context, while OpenCode Zen lists 262,144. NVIDIA's AA-LCR score is reported below; the hosted route's implementation/precision may differ from the BF16 evaluation checkpoint.
- **Modalities:** Text in/text out. The exact Lightning model supports configurable reasoning and tool calls. Do not transfer image/video/PDF support from Nemotron 3.5 Super VL.
- **Pricing (as of 2026-11-01):** OpenRouter and OpenCode Zen currently list a free route. OpenRouter's paid route is $0.07/M input, $0.20/M output, and $0.04/M cached input. Hosted limits may change; NVIDIA's weights use OpenMDW-1.1 and can be self-hosted with hardware cost.
- **Architecture:** 30B total / 3B active hybrid MoE with Mamba-2 and attention layers; BF16 reference checkpoint and separate NVFP4 deployment checkpoint. OpenMDW-1.1 license.

### Raw benchmarks found

The figures below are NVIDIA's release evaluation results for the **BF16 Lightning checkpoint**, as reported in its model card and reproducibility suite. They are not the NVFP4 results or results for Nemotron 3 Nano, Super, or Super VL. NVIDIA says scores were measured using NeMo Gym / NeMo Evaluator and publishes recipes. Reasoning mode can be enabled or disabled; the reported card table is not labeled with a specific thinking-mode choice for every row.

Agent / tool use:

- PinchBench: **85.37**; BrowseComp: **36.97**; τ³-Bench Banking: **9.28**; GDPval-AA-V2: **832**.
- Terminal-Bench 2.1: **24.58%**. This is a modest coding-agent result despite high PinchBench.

Reasoning / knowledge:

- MMLU-Pro: **81.94**; AA-Omniscience: **17.50**.
- GPQA Diamond (no tools): **75.44%**; Humanity's Last Exam (text-only, no tools): **11.72%**.

Coding:

- SWE-bench Verified: **51.56%**; SWE-bench Multilingual: **39.33%**; Terminal-Bench 2.1: **24.58%**; SciCode: **32.60**.

Long context:

- AA-LCR: **52.00**. NVIDIA's model card advertises up to 1M context, but states it used 256K for a single-H100 deployment; no exact retrieval score at 512K or 1M was found.

### Normalized scores (1–100)

- **Tool use: 61/100.** PinchBench at 85.37 is strong, but BrowseComp 36.97, τ³-Bench Banking 9.28, GDPval-AA-V2 832, and Terminal-Bench 2.1 24.58 show uneven agent performance. [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16).
- **Reasoning: 68/100.** MMLU-Pro 81.94 and GPQA Diamond 75.44 are solid, while HLE at 11.72 and AA-Omniscience at 17.50 cap general reasoning confidence. [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16).
- **Context window: 95/100.** NVIDIA advertises a 1M window, placing it in the methodology's ≥1M tier; however, no retrieval result at 512K–1M validates the full limit, and AA-LCR is 52.00. Hosted routes differ in context limits. [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16); [OpenRouter registry](https://openrouter.ai/api/v1/models).
- **Multimodal: 15/100.** This Lightning checkpoint is text-only; Super VL's vision capability is not transferred. [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16).
- **Coding: 60/100.** SWE-bench Verified at 51.56%, multilingual SWE-bench at 39.33%, and Terminal-Bench 2.1 at 24.58% are below stronger coding-specialist models; SciCode at 32.60 is an additional moderate result. [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16).
- **Cost efficiency: 100/100.** Current free routes and open weights provide a $0 access lane, though hosted usage limits and local compute costs still apply. [OpenRouter live registry](https://openrouter.ai/api/v1/models); [OpenCode Zen catalog](https://models.dev/api.json).
- **Overall Score: 60/100.** Half-up mean of the five quality dimensions: (61 + 68 + 95 + 15 + 60) / 5 = 59.8 → 60. Cost is excluded. Best suited to low-cost text-only agents needing a very long advertised context and customization; verify the specific route's context/precision and do not assume uniformly strong results across agent tasks.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model searches; cross-checked NVIDIA's BF16 checkpoint card, NVIDIA Build model card, and current OpenRouter/OpenCode catalogs. BF16 results are kept distinct from NVFP4 and from Nemotron sibling models; the `free` suffix is treated only as an access tier. Published context claims and hosted-route limits are separated. Normalized scores are independent interpretations, not vendor scores.
- Reference URLs:
  - [Official BF16 checkpoint card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16)
  - [NVIDIA Build model card](https://build.nvidia.com/nvidia/nemotron-3.5-lightning-30b-a3b/modelcard)
  - [NVIDIA NGC model catalog](https://catalog.ngc.nvidia.com/orgs/nim/nvidia/models/nemotron-3.5-lightning)
  - [NVIDIA NeMo Gym reproducibility recipes](https://github.com/NVIDIA-NeMo/Gym/tree/main/nemotron_recipes/lightning-3.5)
  - [OpenRouter live model registry](https://openrouter.ai/api/v1/models)
  - [OpenCode Zen provider catalog](https://models.dev/api.json)

---
