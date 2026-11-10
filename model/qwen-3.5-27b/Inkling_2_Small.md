# Qwen 3.5 27B — findings by Inkling 2 Small

- Source: Alibaba (`qwen-3.5-27b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Alibaba's dense open-weight member of the Qwen3.5 family — 27B params, multimodal, positioned between Qwen3.5-4B and the MoE variants. Released 2026-02 alongside Qwen3.5-122B-A10B; strong coding/vision per-parameter.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-27B`); OpenRouter; DashScope/Model Studio; vLLM/SGLang.
- **Release / knowledge:** 2026-02; knowledge cutoff not publicly stated.
- **IDs:** `Qwen/Qwen3.5-27B` (HF)
- **Context window:** 262,144 tokens (262K); max output undisclosed.
- **Modalities:** text, image, and video in; text out; reasoning yes; tool calls yes; IFEval 95%.
- **Pricing (as of 2026-11-10):** open weights (Apache-2.0-class open license per family releases) — self-host free; hosted API price not verified on primary sources.
- **Architecture:** dense transformer, 27B parameters; vision-language.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **93.9%** (Artificial Analysis)
- BrowseComp: **61%** (HF model card)
- OSWorld-Verified: **56.2%** (HF model card)
- Terminal-Bench 2.0: **41.6%** (HF model card)
- Gert Labs: **39.41%**; AA ITBench: **35.5%**
- IFEval: **95%**; AA-IFBench **75.6%**

Reasoning / knowledge:

- GPQA: **85.5%** (85.8% AA-GPQA Diamond)
- MMLU-Pro: **86.1%**; MMLU-ProX **82.2%**; Global-MMLU-Lite **86.8%**
- SuperGPQA: **65.6%**
- LongBench v2: **60.6%**; AA-LCR: **77.7%**
- AA Intelligence Index: **22.9%**; AA-HLE: **23.9%**; CritPt: **0.9%**
- AA-Omniscience: Index **-44.0**, Accuracy **20.7%**, Hallucination **81.5%**
- BenchLM overall: **48.31/100** (#106/1020)

Coding:

- LiveCodeBench v6: **80.7%** (HF model card)
- SWE-bench Verified: **72.4%** (HF model card)
- SWE-Rebench: **58.9%**
- Terminal-Bench 2.0: **41.6%**

Long context:

- AA-LCR: **77.7%** at 262K; LongBench v2: **60.6%**.

Multimodal:

- V*: **93.7%** (reported on the 122B-A10B card for the shared vision stack); MathVision: **86.0%** (same family source)
- MMMU: **82.3%**; MMVU: **73.3%**; MMMU-Pro: **75%** / AA-MMMU-Pro **75.0%**; CharXiv **79.5%**

### Normalized scores (1–100)

- **Tool use: 63/100.** τ²-bench 93.9% leads, but OSWorld 56.2%, BrowseComp 61%, TB2.0 41.6% keep agentic autonomy mid-tier.
- **Reasoning: 60/100.** GPQA 85.5%, MMLU-Pro 86.1%, LCR 77.7%; capped by AA Index 22.9, HLE 23.9% and an 81.5% AA hallucination rate.
- **Context window: 77/100.** 262K tokens, AA-LCR 77.7% — strong at its tier; below the 1M class.
- **Multimodal: 78/100.** Text/image/video in; MMMU 82.3%, CharXiv 79.5%, V* 93.7% (family); no audio/video output.
- **Coding: 76/100.** LCB v6 80.7%, SWE-bench Verified 72.4%, SWE-Rebench 58.9%; capped by TB2.0 41.6%.
- **Cost efficiency: 85/100.** Open weights, 27B dense — cheap to self-host with full multimodal support.
- **Overall Score: 71/100.** (63 + 60 + 77 + 78 + 76) / 5 = 70.8 → 71. Best fit: open-weight 27B multimodal coding/vision workhorse; weak for hardest frontier reasoning and hallucination-critical use.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (HF model card, Qwen blog, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-27B — Hugging Face model card](https://huggingface.co/Qwen/Qwen3.5-27B)
  - [Qwen3.5 — Qwen blog](https://qwen.ai/blog?id=qwen3.5)
  - [Qwen3.5-27B — BenchLM](https://benchlm.ai/models/qwen3-5-27b)
  - [Qwen3.5-27B — Artificial Analysis](https://artificialanalysis.ai/models/qwen3-5-27b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
