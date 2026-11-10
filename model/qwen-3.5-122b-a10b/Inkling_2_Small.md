# Qwen 3.5 122B-A10B — findings by Inkling 2 Small

- Source: Alibaba (`qwen-3.5-122b-a10b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** Alibaba's mid-size open-weight MoE in the Qwen3.5 family — 122B total / 10B active, hybrid linear+full attention with a vision tower, Apache 2.0. Released 2026-02-24/25, sitting between Qwen3.5-35B-A3B and the 397B-A17B flagship.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-122B-A10B`); OpenRouter (`qwen/qwen3.5-122b-a10b`); DashScope/Model Studio; vLLM/SGLang.
- **Release / knowledge:** 2026-02-24; knowledge cutoff not publicly stated.
- **IDs:** `Qwen/Qwen3.5-122B-A10B` (HF); `qwen/qwen3.5-122b-a10b` (OpenRouter)
- **Context window:** 262,144 tokens (262K); max output undisclosed.
- **Modalities:** text, image, and video in; text out; reasoning yes; tool calls yes; IFEval 93.4%.
- **Pricing (as of 2026-11-10):** from ~$0.29 / 1M input, ~$2.40 / 1M output (llm-stats); open weights (Apache 2.0) — self-host free.
- **Architecture:** hybrid linear-attention/full-attention sparse MoE (`qwen3_5_moe`), 122B total / 10B active, 48 layers (3 linear : 1 full attention), 256 experts (8 active), vision tower.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **93.6%** (Artificial Analysis)
- BrowseComp: **63.8%** (HF model card)
- OSWorld-Verified: **58%** (HF model card)
- Terminal-Bench 2.0: **49.4%** (HF model card)
- GDPval-AA: **925** (15.7% normalized, Artificial Analysis); AA Agentic Index **9.6%**
- IFEval: **93.4%**; AA-IFBench **75.7%**

Reasoning / knowledge:

- GPQA: **86.6%** (85.7% AA-GPQA Diamond) (HF card / AA)
- MMLU-Pro: **86.7%**; MMLU-ProX **82.2%**; Global-MMLU-Lite **89.1%**
- SuperGPQA: **67.1%**
- LongBench v2: **60.2%**; AA-LCR: **76.3%**
- AA-HLE: **25.2%**; CritPt: **0.6%**
- BenchLM overall: **52.7/100** (#91/1020)

Coding:

- LiveCodeBench v6: **78.9%** (HF model card)
- SWE-bench Verified: **72%** (HF model card)
- AA-SciCode: **39.7%**; AA Coding Index: **45.7%** (Artificial Analysis)
- Terminal-Bench 2.0: **49.4%**

Long context:

- AA-LCR: **76.3%** at 262K; LongBench v2: **60.2%**.

Multimodal:

- V*: **93.2%**; MathVision: **86.2%**; MMMU: **83.9%**; MMVU: **74.7%**
- MMMU-Pro: **76.9%**; AA-MMMU-Pro **75.0%**; CharXiv **77.2%**

### Normalized scores (1–100)

- **Tool use: 66/100.** τ²-bench 93.6% is excellent, but OSWorld 58%, BrowseComp 63.8%, TB2.0 49.4% and GDPval-AA 15.7% (AA) pull down — good structured tool use, mid agentic autonomy.
- **Reasoning: 68/100.** GPQA 86.6%, MMLU-Pro 86.7%, LCR 76.3%; capped by HLE 25.2% and CritPt 0.6%.
- **Context window: 78/100.** 262K tokens — solid but below the 1M tier; AA-LCR 76.3% verifies it.
- **Multimodal: 80/100.** Text/image/video in; V* 93.2%, MathVision 86.2%, MMMU 83.9%; no audio/video generation.
- **Coding: 73/100.** LCB v6 78.9%, SWE-bench Verified 72%; capped by AA Coding Index 45.7% and TB2.0 49.4%.
- **Cost efficiency: 82/100.** ~$0.29/$2.40 per 1M and Apache 2.0 open weights — strong value.
- **Overall Score: 73/100.** (66 + 68 + 78 + 80 + 73) / 5 = 73.0 → 73. Best fit: open-weight multimodal MoE for balanced cost/performance at 262K context; weak for hardest frontier reasoning.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (HF model card, Qwen blog, Artificial Analysis, BenchLM, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-122B-A10B — Hugging Face model card](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
  - [Qwen3.5-122B-A10B — BenchLM](https://benchlm.ai/models/qwen3-5-122b-a10b)
  - [Qwen3.5-122B-A10B — llm-stats](https://llm-stats.com/models/qwen3.5-122b-a10b)
  - [Qwen3.5 — Qwen blog](https://qwen.ai/blog?id=qwen3.5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
