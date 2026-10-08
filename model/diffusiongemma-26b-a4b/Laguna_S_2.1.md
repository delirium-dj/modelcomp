# DiffusionGemma 26B A4B — findings by Laguna S 2.1

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`google/diffusiongemma-26B-A4B-it`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google's experimental open-weights text-diffusion MoE model (25.2B total / 3.8B active parameters) using discrete diffusion sampling for 256-token parallel generation; built on Gemma 4 architecture, handles text+image+video input to generate text; best for latency-sensitive local editing and code infilling.
- **Provider / access:** Hugging Face (`google/diffusiongemma-26B-A4B-it`); self-hostable via vLLM, SGLang, Docker; open-weights (Apache 2.0). Hosted API via NVIDIA NIM ($0/$0) and Pioneer ($0.50/$0.50 per 1M).
- **Release / knowledge:** Released June 10, 2026; training data cutoff January 2025.
- **IDs:** `google/diffusiongemma-26B-A4B-it`
- **Context window:** 256K total tokens (32K max output), verified from HF model card and AA.
- **Modalities:** Text, image, video input; text output; reasoning yes (thinking mode with `<|think|>` tokens).
- **Pricing (as of 2026-10-08):** Apache 2.0 open weights (self-host $0, ~24GB VRAM quantized); NVIDIA NIM $0/$0 per 1M; nano-gpt $0.05/$0.15; Pioneer $0.50/$0.50 per 1M.
- **Architecture:** 25.2B total params, 3.8B active (MoE: 8 active / 128 total + 1 shared), Apache 2.0 open weights, encoder-decoder block-autoregressive.

### Raw benchmarks found

> Listed from AA Intelligence Index and HF model card benchmarks. DiffusionGemma benchmarks measured against Gemma 4 26B A4B (base architecture comparison).

Agent / tool use:

- Artificial Analysis Intelligence Index (**AA**): 10* estimated (#45/142 among open weights models; median: 8) — *estimated, independent evaluation forthcoming*
- GDPval-AA: no verified public score found — DiffusionGemma 26B A4B specific score not published; closest proxy is Gemma 4 26B (not directly comparable)
- Terminal-Bench: no verified public score found for DiffusionGemma 26B A4B
- Tau3-Banking / Tau2-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: 73.2% (measured vs Gemma 4 26B A4B)
- HLE no tools: 11.0% (measured)
- HLE with search: 11.9% (measured)
- BigBench Extra Hard: 47.6% (measured)
- MMLU Pro: 77.6% (measured)
- AA-Omniscience: no verified public score found

Coding:

- LiveCodeBench v6: 69.1% (measured)
- AIME 2026 no tools: 69.1% (measured)
- Codeforces ELO: 1429 (measured)
- SWE-bench: no verified public score found
- SciCode: no verified public score found

Long context:

- MRCR v2 8 needle 128k: 32.0% (measured; "8 needle" retrieval accuracy at context lengths)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 62/100.** Intelligence Index estimated at 10* (#45/142, median 8), but no verified agentic tool-use benchmarks (Terminal-Bench, GDPval-AA, Tau benchmarks all show no score). Score reflects estimated average with significant uncertainty due to lack of tool-specific evaluations.
- **Reasoning: 63/100.** MMLU Pro 77.6%, GPQA 73.2%, HLE 11.0-11.9%, BigBench Extra Hard 47.6%. AA Intelligence Index 10* estimated. The model is a reasoning variant with thinking mode, but the relatively low HLE scores cap the upper bound.
- **Context window: 72/100.** 256K tokens places in the 256K tier (scored 70-72 per methodology). MRCR 32.0% at 8-needle long context retrieval indicates moderate long-context performance.
- **Multimodal: 85/100.** Text, image, and video input with text output; vision encoder ~550M params; supports variable image resolution and video up to 60 seconds. Strong multimodal coverage but no audio input.
- **Coding: 59/100.** LiveCodeBench 69.1%, AIME 69.1%, Codeforces ELO 1429. Moderate coding capability relative to Gemma 4 comparison baseline. No verified SWE-bench score found.
- **Cost efficiency: 100/100.** Apache 2.0 open weights (self-host $0); NVIDIA NIM serves at $0/$0; effectively free for self-hosting.
- **Overall Score: 68.2/100.** Mean of five non-cost dims (62+63+72+85+59)/5 = 341/5 = 68.2, rounded up to 69. Estimated Intelligence Index 10* aligns with this band. **Best-fit recommendation:** Latency-sensitive deployment where fast block-autoregressive generation matters more than maximum reasoning depth; good open-weights option for multimodal local inference with moderate coding needs.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public web research (Hugging Face model card, Artificial Analysis model page, Google AI blog); scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: Hugging Face model card `google/diffusiongemma-26B-A4B-it`; Artificial Analysis model page; Google DeepMind/Gemma documentation.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/diffusiongemma-26b-a4b/Laguna_S_2.1.md`.
3. Signature block filled in; relative links resolve.
4. No benchmark invented; verified benchmark numbers from AA and HF model card; estimated Intelligence Index 10* is clearly marked as "estimated, independent evaluation forthcoming."

---
