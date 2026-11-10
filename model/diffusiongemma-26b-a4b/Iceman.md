# DiffusionGemma 26B A4B — findings by Iceman

- Source: Google/DiffusionGemma-26B-A4B-it
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B (IT)
- **Short description:** Google’s DiffusionGemma 26B A4B is an experimental open-weights multimodal text-diffusion MoE model (25.2B/3.8B active, Apache 2.0) optimized for fast local generation, OCR, and infilling, with lower quality than standard Gemma 4 on many tasks.
- **Provider / access:** Open weights on Hugging Face (`google/diffusiongemma-26B-A4B-it`, Apache 2.0) and hosted endpoints (e.g. NVIDIA NIM $0, other hosts). Local metadata lists `google/diffusiongemma-26B-A4B-it` and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `DiffusionGemma 26B A4B`, `google/diffusiongemma-26B-A4B-it`.
- **Context window:** Up to 256K tokens (1,024-token sliding window, 256-token canvas; no max-output figure published per local metadata).
- **Modalities:** Text and image input; text output (video supported as sampled frames per card).
- **Pricing (as of 2026-11-10):** Apache 2.0 open weights (self-host $0). Hosted $0–$0.50 per 1M in/out depending on provider (local metadata).
- **Architecture:** Discrete text-diffusion MoE (encoder-decoder, block-autoregressive multi-canvas sampling), 25.2B total / 3.8B active parameters (8 active / 128 experts + shared), ~550M vision encoder, 256K context (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table for `DiffusionGemma 26B A4B` (recommended EB sampler) unless noted. Card notes quality is below standard Gemma 4 on many rows.

Agent / tool use:

- Function calling listed as core capability; standardized agent/tool benchmark numerics not provided in reviewed table.
- Terminal-Bench 2.1 / Tau2 / Tau3 / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- MMLU Pro: **77.6%**
- GPQA Diamond: **73.2%**
- AIME 2026 (no tools): **69.1%**
- HLE (no tools): **11.0%**
- HLE (with search): **11.9%**
- BigBench Extra Hard: **47.6%**
- MMMLU: **81.5%**

Coding:

- LiveCodeBench v6: **69.1%**
- Codeforces ELO: **1429**
- SWE-bench Verified / SWE-Pro / Terminal-Bench: **no verified public score found**

Long context:

- MRCR v2 8 needle 128k (average): **32.0%**
- 256K context supported (with sliding-window/canvas constraints).

Multimodal / vision:

- MMMU Pro: **54.3%**
- OmniDocBench 1.5 (average edit distance, lower is better): **0.319**
- MATH-Vision: **70.5%**
- MedXPertQA MM: **49.0%**

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 68/100.** Function-calling capability is present, but no standardized agent/tool-use benchmark numerics were published in the reviewed table.
- **Reasoning: 74/100.** Decent but below frontier/strong Gemma-4-class levels (MMLU Pro 77.6%, GPQA 73.2%, AIME 2026 69.1%, HLE 11.0–11.9%, BigBench Extra Hard 47.6%).
- **Context window: 78/100.** Up to 256K context supported, but long-context retrieval is weak in reported results (MRCR v2 32.0%) and architecture uses sliding-window/canvas constraints.
- **Multimodal: 76/100.** Capable multimodal understanding for an experimental diffusion model (MMMU Pro 54.3%, OmniDocBench 0.319, MATH-Vision 70.5%, MedXPertQA MM 49.0%) but below standard Gemma 4 quality per card.
- **Coding: 74/100.** Moderate coding/reasoning-coding performance (LiveCodeBench v6 69.1%, Codeforces ELO 1429) without published SWE-bench/terminal-agent results.
- **Cost efficiency: 95/100.** Apache 2.0 open weights, $0 self-host/NIM options, and fast local diffusion generation provide strong cost/speed efficiency despite quality tradeoffs.
- **Overall Score: 74/100.** Mean of the five non-cost dims (68, 74, 78, 76, 74) = 74.0 → 74. Best fit for fast local generation, OCR/infilling, and experimental multimodal workflows where speed and editability matter more than peak benchmark quality.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [DiffusionGemma 26B A4B IT model card (Hugging Face)](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
  - Local repository metadata consulted: `model/diffusiongemma-26b-a4b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
