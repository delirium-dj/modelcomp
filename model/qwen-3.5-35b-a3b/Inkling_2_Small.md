# Qwen 3.5 35B-A3B — findings by Inkling 2 Small

- Source: Alibaba (`qwen-3.5-35b-a3b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Alibaba's open-weight MoE in the Qwen3.5 family — 35B total / 3B active, the efficient sibling of the 122B-A10B, multimodal, 262K context. Strong per-active-parameter performance for local/self-hosted deployments.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-35B-A3B`); OpenRouter; DashScope/Model Studio; vLLM/SGLang.
- **Release / knowledge:** 2026-02; knowledge cutoff not publicly stated.
- **IDs:** `Qwen/Qwen3.5-35B-A3B` (HF)
- **Context window:** 262,144 tokens (262K); max output undisclosed.
- **Modalities:** text, image, and video in; text out; reasoning yes; tool calls yes; IFEval 91.9%.
- **Pricing (as of 2026-11-10):** open weights (Apache-2.0-class open license per family releases) — self-host free; hosted price not verified.
- **Architecture:** hybrid MoE, 35B total / 3B active; vision tower.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **89.2%** (Artificial Analysis)
- BrowseComp: **61%** (HF model card)
- OSWorld-Verified: **54.5%** (HF model card)
- Terminal-Bench 2.0: **40.5%** (HF model card)
- Gert Labs: **28.96%**
- IFEval: **91.9%**; AA-IFBench **72.5%**

Reasoning / knowledge:

- GPQA: **84.2%** (84.5% AA-GPQA Diamond)
- MMLU-Pro: **85.3%**; MMLU-ProX **81%**; Global-MMLU-Lite **86.4%**
- SuperGPQA: **63.4%**
- LongBench v2: **59%**; AA-LCR: **72.0%**
- AA Intelligence Index: **19.3%**; AA-HLE: **21.0%**; CritPt: **0.9%**
- AA-Omniscience: Index **-48.1**, Accuracy **20.1%**, Hallucination **85.4%**
- BenchLM overall: **45.44/100** (#119/1020)

Coding:

- LiveCodeBench v6: **74.6%** (HF model card)
- SWE-bench Verified: **69.2%** (HF model card)
- SWE-Rebench: **53.7%**; Terminal-Bench 2.0: **40.5%**

Long context:

- AA-LCR: **72.0%** at 262K; LongBench v2: **59%**.

Multimodal:

- ExtractBench (LlamaIndex): **88.0%** (Nov 9 2026)
- MMMU: **81.4%**; MMVU: **72.3%**; MMMU-Pro: **75.1%** / AA-MMMU-Pro **72.7%**; CharXiv **77.5%**; (V*/MathVision reported on the 122B family card: **92.7%** / **83.9%**)

### Normalized scores (1–100)

- **Tool use: 61/100.** τ²-bench 89.2% strong; OSWorld 54.5%, BrowseComp 61%, TB2.0 40.5% cap agentic autonomy.
- **Reasoning: 56/100.** GPQA 84.2% and MMLU-Pro 85.3% are the anchors; AA Index 19.3, HLE 21.0%, CritPt 0.9%, 85.4% AA hallucination — weak frontier reasoning.
- **Context window: 74/100.** 262K tokens; AA-LCR 72.0%.
- **Multimodal: 74/100.** Text/image/video in; MMMU 81.4%, ExtractBench 88.0%, CharXiv 77.5%; no audio/video generation.
- **Coding: 69/100.** LCB v6 74.6%, SWE-bench 69.2%, SWE-Rebench 53.7%; capped by TB2.0 40.5%.
- **Cost efficiency: 88/100.** Open weights with only 3B active — excellent self-host economics.
- **Overall Score: 67/100.** (61 + 56 + 74 + 74 + 69) / 5 = 66.8 → 67. Best fit: cheap local open-weight multimodal MoE; weak for hardest frontier reasoning and hallucination-critical work.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (HF model card, Qwen blog, Artificial Analysis, BenchLM, LlamaIndex ExtractBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-35B-A3B — Hugging Face model card](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - [Qwen3.5 — Qwen blog](https://qwen.ai/blog?id=qwen3.5)
  - [Qwen3.5-35B-A3B — BenchLM](https://benchlm.ai/models/qwen3-5-35b-a3b)
  - [Qwen3.5-35B-A3B — Artificial Analysis](https://artificialanalysis.ai/models/qwen3-5-35b-a3b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
