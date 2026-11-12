# DiffusionGemma 26B-A4B — findings by Ernie 5.5 Flash

- Source: Google/DiffusionGemma 26B-A4B (`diffusiongemma-26b-a4b`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B-A4B (Instruction-tuned)
- **Short description:** Google's diffusion language model — a 26B-total / 3.8B-active MoE that generates text by iterative denoising rather than autoregressive decoding, with image input and a 256K window.
- **Provider / access:** Self-hosted (Hugging Face `google/diffusiongemma-26B-A4B-it`, plus FP8/NVFP4/GGUF conversions), plus community routes.
- **Release / knowledge:** 2026 (Gemma 4 generation); knowledge cutoff not published.
- **IDs:** `diffusiongemma-26b-a4b`, `google/diffusiongemma-26B-A4B-it`.
- **Context window:** up to 256K tokens; canvas length 256; 262K vocabulary.
- **Modalities:** text and image in; text out; tool calls (Tau2 evaluated).
- **Pricing (as of 2026-11-11/12):** open weights — free to self-host.
- **Architecture:** diffusion LLM, 25.2B total / 3.8B active, 30 layers, 8 active + 1 shared expert of 128, ~550M vision encoder.

### Raw benchmarks found

> All figures are Google's own table from the `google/diffusiongemma-26B-A4B-it` model card, DiffusionGemma column (Gemma 4 26B A4B shown for reference; EB sampler).

Agent / tool use:

- Tau2 (average of 3): **56.2%** (Gemma 4 26B A4B 68.2%)

Reasoning / knowledge:

- MMLU-Pro: **77.6%** (26B A4B 82.6%); MMMLU: **81.5%**
- GPQA Diamond: **73.2%**; AIME 2026 (no tools): **69.1%**; BigBench Extra Hard: **47.6%**
- HLE: **11.0%** no tools / **11.9%** with search

Coding:

- LiveCodeBench v6: **69.1%**; Codeforces Elo: **1429**
- SWE-bench Verified / SWE-bench Pro: no verified public rows published

Long context:

- 256K window; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 60/100.** Tau2 56.2% is below the Gemma 4 26B sibling (68.2%) and below the agent baseline.
- **Reasoning: 68/100.** MMLU-Pro 77.6%, MMMLU 81.5% and AIME 69.1% are mid for the class; GPQA 73.2% and BBH 47.6% are the caps.
- **Context window: 78/100.** Up to 256K tokens with a 256-token canvas.
- **Multimodal: 72/100.** Text and image in with MMMU Pro 54.3%, MATH-Vision 70.5% and OmniDocBench 1.5 0.319 — clearly behind the Gemma 4 26B sibling (73.8% / 82.4% / 0.149).
- **Coding: 68/100.** LiveCodeBench v6 69.1% and Codeforces 1429 are mid; no SWE-bench row was published.
- **Cost efficiency: 95/100.** Open weights at a 3.8B-active footprint — the cheapest 256K-context option here.
- **Overall Score: 69.2/100.** Best fit for edge/on-device text and document work where diffusion decoding's latency profile helps; the Gemma 4 26B A4B is better at the same size.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (google/diffusiongemma-26B-A4B-it Hugging Face model card and its vendor benchmark table, Gemma 4 model card); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [google/diffusiongemma-26B-A4B-it — Hugging Face model card (benchmark table)](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
  - [Gemma 4 model card — Google AI for Developers](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `DiffusionGemma_26B_A4B_v2.md` next to this file.