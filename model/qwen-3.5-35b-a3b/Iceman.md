# Qwen 3.5 35B A3B — findings by Iceman

- Source: Alibaba Qwen/Qwen3.5-35B-A3B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Alibaba’s Qwen3.5 open-weight multimodal Mixture-of-Experts model (35B total / 3B active) for efficient reasoning, coding, vision-language, and agentic tasks.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-35B-A3B`, Apache 2.0) and hosted APIs/providers. Local metadata lists `qwen/qwen3.5-35b-a3b` and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10 (Qwen3.5 series). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `Qwen3.5-35B-A3B`, `Qwen/Qwen3.5-35B-A3B`.
- **Context window:** 262,144 native tokens, extensible up to 1,010,000 tokens (HF card). Local metadata notes 262K native (extensible to ~1,010,000), 65,536 max output.
- **Modalities:** Text, image, and video input; text output (multimodal vision-language model).
- **Pricing (as of 2026-11-10):** Open weights free to self-host (Apache 2.0). Hosted pricing varies (local metadata cites $0.14/$1.00 per 1M in/out on OpenRouter, $0.25/$2.00 on Model Studio).
- **Architecture:** Sparse MoE, 35B total / 3B active parameters, 40 layers, hybrid Gated DeltaNet + Gated Attention + MoE layout (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `Qwen/Qwen3.5-35B-A3B` (Qwen3.5-35B-A3B column) unless noted.

Agent / tool use:

- BFCL-V4: **67.3**
- TAU2-Bench: **81.2**
- VITA-Bench: **31.9**
- DeepPlanning: **22.8**
- HLE w/ tool (search agent): **47.4**
- BrowseComp: **61.0**
- BrowseComp-zh: **69.5**
- WideSearch: **57.1**
- Seal-0: **41.4**
- OSWorld-Verified (visual agent): **54.5**
- AndroidWorld: **71.1**

Reasoning / knowledge:

- MMLU-Pro: **85.3**
- MMLU-Redux: **93.3**
- SuperGPQA: **63.4**
- GPQA Diamond: **84.2**
- HLE w/ CoT: **22.4**
- HMMT Feb 25: **89.0**
- HMMT Nov 25: **89.2**
- C-Eval: **90.2**

Coding:

- SWE-bench Verified: **69.2**
- Terminal Bench 2: **40.5**
- LiveCodeBench v6: **74.6**
- CodeForces (Elo): **2028**
- OJBench: **36.0**
- FullStackBench en: **58.1**
- FullStackBench zh: **55.0**

Multimodal / vision:

- MMMU: **81.4**
- MMMU-Pro: **75.1**
- MathVision: **83.9**
- MathVista (mini): **86.2**
- DynaMath: **85.0**
- OmniDocBench1.5: **89.3**
- RealWorldQA: **84.1**
- MMBenchEN-DEV-v1.1: **91.5**
- OCRBench: **91.0**
- VideoMME (w/ sub): **86.6**
- MLVU: **85.6**
- MMVU: **72.3**
- ScreenSpot Pro (visual agent): **68.6**

Long context:

- AA-LCR: **58.5**
- LongBench v2: **59.0**
- Native 262K context (extensible to ~1M) documented.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 84/100.** Strong agent/tool/search and visual-agent performance for a 3B-active model (BFCL-V4 67.3, TAU2-Bench 81.2, BrowseComp 61.0, HLE w/ tool 47.4, OSWorld-Verified 54.5, AndroidWorld 71.1).
- **Reasoning: 86/100.** Very strong reasoning/knowledge results (MMLU-Pro 85.3, GPQA Diamond 84.2, SuperGPQA 63.4, HMMT 89.0–89.2, HLE w/ CoT 22.4) relative to active parameter size.
- **Context window: 88/100.** 262K native context with extension capability to ~1M and decent long-context evals (AA-LCR 58.5, LongBench v2 59.0).
- **Multimodal: 89/100.** Strong vision-language performance (MMMU 81.4, MMMU-Pro 75.1, MathVision 83.9, OmniDocBench 89.3, OCRBench 91.0, VideoMME 86.6, ScreenSpot Pro 68.6).
- **Coding: 84/100.** Good coding/agentic coding performance for efficiency class (LiveCodeBench v6 74.6, SWE-bench Verified 69.2, Terminal Bench 2 40.5, CodeForces 2028).
- **Cost efficiency: 96/100.** Apache 2.0 open weights and very low hosted pricing with 3B active parameters make it exceptionally cost-efficient.
- **Overall Score: 86/100.** Mean of the five non-cost dims (84, 86, 88, 89, 84) = 86.2 → 86. Best fit for efficient open-weight multimodal agents, coding assistants, and high-volume workloads where low active compute matters.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-35B-A3B model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - Local repository metadata consulted: `model/qwen-3.5-35b-a3b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
