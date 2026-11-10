# Qwen 3.5 122B A10B — findings by Iceman

- Source: Alibaba Qwen/Qwen3.5-122B-A10B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B (Qwen 3.5 122B)
- **Short description:** Alibaba’s Qwen3.5 open-weight multimodal Mixture-of-Experts model (122B total / 10B active) for reasoning, coding, vision-language, and agentic tasks.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-122B-A10B`, Apache 2.0) and hosted APIs/providers. Local metadata lists `qwen/qwen3.5-122b-a10b` and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10 (Qwen3.5 series). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `Qwen3.5-122B-A10B`, `Qwen/Qwen3.5-122B-A10B`.
- **Context window:** 262,144 native tokens, extensible up to 1,010,000 tokens (HF card). Local metadata notes 262K native (extensible to 1,010,000), 65,536 max output.
- **Modalities:** Text, image, and video input; text output (multimodal vision-language model).
- **Pricing (as of 2026-11-10):** Open weights free to self-host (Apache 2.0). Hosted pricing varies (local metadata cites $0.26/$2.08 per 1M in/out on OpenRouter/SiliconFlow, $0.40/$3.20 on Model Studio).
- **Architecture:** Sparse MoE, 122B total / 10B active parameters, 48 layers, hybrid Gated DeltaNet + Gated Attention + MoE layout (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `Qwen/Qwen3.5-122B-A10B` (Qwen3.5-122B-A10B column) unless noted.

Agent / tool use:

- BFCL-V4: **72.2**
- TAU2-Bench: **79.5**
- VITA-Bench: **33.6**
- DeepPlanning: **24.1**
- HLE w/ tool (search agent): **47.5**
- BrowseComp: **63.8**
- BrowseComp-zh: **69.9**
- WideSearch: **60.5**
- Seal-0: **44.1**

Reasoning / knowledge:

- MMLU-Pro: **86.7**
- MMLU-Redux: **94.0**
- SuperGPQA: **67.1**
- GPQA Diamond: **86.6**
- HLE w/ CoT: **25.3**
- HMMT Feb 25: **91.4**
- HMMT Nov 25: **90.3**
- C-Eval: **91.9**

Coding:

- SWE-bench Verified: **72.0**
- Terminal Bench 2: **49.4**
- LiveCodeBench v6: **78.9**
- CodeForces (Elo): **2100**
- OJBench: **39.5**
- FullStackBench en: **62.6**
- FullStackBench zh: **58.7**

Multimodal / vision:

- MMMU: **83.9**
- MMMU-Pro: **76.9**
- MathVision: **86.2**
- MathVista (mini): **87.4**
- DynaMath: **85.9**
- OmniDocBench1.5: **89.8**
- RealWorldQA: **85.1**
- MMBenchEN-DEV-v1.1: **92.8**
- OCRBench: **92.1**
- VideoMME (w/ sub): **87.3**
- MLVU: **87.3**
- MMVU: **74.7**

Long context:

- AA-LCR: **66.9**
- LongBench v2: **60.2**
- Native 262K context (extensible to ~1M) documented.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 86/100.** Strong agent/tool/search performance (BFCL-V4 72.2, TAU2-Bench 79.5, BrowseComp 63.8, HLE w/ tool 47.5, WideSearch 60.5) indicates capable function-calling and agentic workflows.
- **Reasoning: 88/100.** Excellent reasoning/knowledge results (MMLU-Pro 86.7, GPQA Diamond 86.6, SuperGPQA 67.1, HMMT 90.3–91.4, HLE w/ CoT 25.3).
- **Context window: 90/100.** 262K native context with extension capability to ~1M and solid long-context evals (AA-LCR 66.9, LongBench v2 60.2).
- **Multimodal: 91/100.** Strong vision-language results across understanding, math, OCR/document, and video (MMMU 83.9, MMMU-Pro 76.9, MathVision 86.2, OmniDocBench 89.8, OCRBench 92.1, VideoMME 87.3).
- **Coding: 86/100.** Strong coding/agentic coding performance (LiveCodeBench v6 78.9, SWE-bench Verified 72.0, Terminal Bench 2 49.4, CodeForces 2100, FullStackBench 58.7–62.6).
- **Cost efficiency: 93/100.** Apache 2.0 open weights and low hosted pricing for capability make it highly cost-efficient.
- **Overall Score: 88/100.** Mean of the five non-cost dims (86, 88, 90, 91, 86) = 88.2 → 88. Best fit for open-weight multimodal reasoning, coding, and agentic tasks with strong price/performance.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-122B-A10B model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
  - Local repository metadata consulted: `model/qwen-3.5-122b-a10b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
