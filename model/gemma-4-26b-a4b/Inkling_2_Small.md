# Gemma 4 26B-A4B — findings by Inkling 2 Small

- Source: Google (`gemma-4-26b-a4b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B-A4B
- **Short description:** Google's open-weight MoE in the Gemma 4 family — 26B total / 4B active, multimodal (vision), 256K context. The efficient Gemma-class option between the dense 12B/31B and the E2B/E4B edge variants.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-26B-A4B-it`); Google AI Studio / Gemini API endpoints; vLLM/SGLang.
- **Release / knowledge:** 2026 (Gemma 4 generation); knowledge cutoff not publicly stated.
- **IDs:** `google/gemma-4-26B-A4B-it` (HF)
- **Context window:** 262,144 tokens (256K); max output undisclosed.
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; IFBench 72.4%.
- **Pricing (as of 2026-11-10):** open weights (Gemma license) — self-host free; no first-party hosted price published.
- **Architecture:** MoE, 26B total / 4B active.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **43.6%** (Artificial Analysis)
- GDPval-AA: **713** (3.2% normalized, Artificial Analysis)
- AA-IFBench: **72.4%**

Reasoning / knowledge:

- GPQA: **82.3%** (79.2% AA-GPQA Diamond)
- MMLU-Pro: **82.6%**
- HLE: **17.2%** (8.7% w/o tools; AA-HLE **19.3%**)
- MRCRv2: **44.1%**; AA-LCR: **65.7%**
- CritPt: **0.0%**
- BenchLM overall: **42.14/100** (#132/1020)

Coding:

- LiveCodeBench v6: **77.1%** (HF model card)
- AA-SciCode: **40.0%**; AA Coding Index: **39.3%** (Artificial Analysis)
- ScarfBench: **24.4%** (IBM Research/Kaggle)

Long context:

- AA-LCR: **65.7%** at 256K; MRCRv2: **44.1%**.

Multimodal:

- MMMU-Pro: **73.8%** (HF card) / **69.2%** (AA)
- ExtractBench (LlamaIndex): **70.27%**; ParseBench: **58.50%**

### Normalized scores (1–100)

- **Tool use: 38/100.** τ²-bench 43.6% and GDPval-AA 3.2% (AA) — weak end-to-end agentic capability despite decent IFBench 72.4%.
- **Reasoning: 55/100.** GPQA 82.3% and MMLU-Pro 82.6% anchor strong domain knowledge; HLE 17.2%, CritPt 0.0% and MRCR 44.1% cap it.
- **Context window: 68/100.** 256K tokens; AA-LCR 65.7% verified; below the 1M class.
- **Multimodal: 70/100.** Text+image in; MMMU-Pro 73.8%, ExtractBench 70.3%; no audio/video output.
- **Coding: 62/100.** LCB v6 77.1% is the bright spot; capped by AA Coding Index 39.3%, AA-SciCode 40.0% and ScarfBench 24.4%.
- **Cost efficiency: 88/100.** Open weights, only 4B active — excellent self-host economics.
- **Overall Score: 59/100.** (38 + 55 + 68 + 70 + 62) / 5 = 58.6 → 59. Best fit: open local multimodal assistants at low cost and 256K context; weak for agentic autonomy.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (HF model card, Artificial Analysis, BenchLM, LlamaIndex benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemma 4 26B A4B — Hugging Face model card](https://huggingface.co/google/gemma-4-26B-A4B-it)
  - [Gemma 4 26B A4B — BenchLM](https://benchlm.ai/models/gemma-4-26b-a4b)
  - [Gemma 4 26B A4B — Artificial Analysis](https://artificialanalysis.ai/models/gemma-4-26b-a4b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
