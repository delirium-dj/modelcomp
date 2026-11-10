# Qwen 3.5 27B — findings by Iceman

- Source: Alibaba Qwen/Qwen3.5-27B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Alibaba’s Qwen3.5 open-weight dense multimodal model (27B class) for reasoning, coding, vision-language, and agentic tasks.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-27B`, Apache 2.0) and hosted APIs/providers. Local metadata lists `qwen/qwen3.5-27b` and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10 (Qwen3.5 series). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `Qwen3.5-27B`, `Qwen/Qwen3.5-27B`.
- **Context window:** 262,144 native tokens, extensible up to 1,010,000 tokens (HF card). Local metadata notes 262K native (extensible to 1,010,000), 65,536 max output.
- **Modalities:** Text, image, and video input; text output (multimodal vision-language model).
- **Pricing (as of 2026-11-10):** Open weights free to self-host (Apache 2.0). Hosted pricing varies (local metadata cites $0.27/$2.16 per 1M in/out on OpenRouter, $0.30/$2.40 on Model Studio).
- **Architecture:** Dense transformer with hybrid Gated DeltaNet + Gated Attention layout, 27B parameters, 64 layers, 5120 hidden dimension (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `Qwen/Qwen3.5-27B` (Qwen3.5-27B column) unless noted.

Agent / tool use:

- BFCL-V4: **68.5**
- TAU2-Bench: **79.0**
- VITA-Bench: **41.9**
- DeepPlanning: **22.6**
- HLE w/ tool (search agent): **48.5**
- BrowseComp: **61.0**
- BrowseComp-zh: **62.1**
- WideSearch: **61.1**
- Seal-0: **47.2**
- OSWorld-Verified (visual agent): **56.2**
- AndroidWorld: **64.2**

Reasoning / knowledge:

- MMLU-Pro: **86.1**
- MMLU-Redux: **93.2**
- SuperGPQA: **65.6**
- GPQA Diamond: **85.5**
- HLE w/ CoT: **24.3**
- HMMT Feb 25: **92.0**
- HMMT Nov 25: **89.8**
- C-Eval: **90.5**

Coding:

- SWE-bench Verified: **72.4**
- Terminal Bench 2: **41.6**
- LiveCodeBench v6: **80.7**
- CodeForces (Elo): **1899**
- OJBench: **40.1**
- FullStackBench en: **60.1**
- FullStackBench zh: **57.4**

Multimodal / vision:

- MMMU: **82.3**
- MMMU-Pro: **75.0**
- MathVision: **86.0**
- MathVista (mini): **87.8**
- DynaMath: **87.7**
- OmniDocBench1.5: **88.9**
- RealWorldQA: **83.7**
- MMBenchEN-DEV-v1.1: **92.6**
- OCRBench: **89.4**
- VideoMME (w/ sub): **87.0**
- MLVU: **85.9**
- MMVU: **73.3**
- ScreenSpot Pro (visual agent): **70.3**

Long context:

- AA-LCR: **66.1**
- LongBench v2: **60.6**
- Native 262K context (extensible to ~1M) documented.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 85/100.** Strong agent/tool/search and visual-agent performance (BFCL-V4 68.5, TAU2-Bench 79.0, BrowseComp 61.0, HLE w/ tool 48.5, OSWorld-Verified 56.2, AndroidWorld 64.2) indicates capable tool-using workflows.
- **Reasoning: 88/100.** Excellent reasoning/knowledge results (MMLU-Pro 86.1, GPQA Diamond 85.5, SuperGPQA 65.6, HMMT 89.8–92.0, HLE w/ CoT 24.3).
- **Context window: 90/100.** 262K native context with extension capability to ~1M and solid long-context evals (AA-LCR 66.1, LongBench v2 60.6).
- **Multimodal: 90/100.** Strong vision-language results across understanding, math, OCR/document, and video (MMMU 82.3, MMMU-Pro 75.0, MathVision 86.0, OmniDocBench 88.9, OCRBench 89.4, VideoMME 87.0, ScreenSpot Pro 70.3).
- **Coding: 86/100.** Strong coding/agentic coding performance (LiveCodeBench v6 80.7, SWE-bench Verified 72.4, Terminal Bench 2 41.6, FullStackBench 57.4–60.1).
- **Cost efficiency: 92/100.** Apache 2.0 open weights and competitive hosted pricing make it highly cost-efficient for its capability class.
- **Overall Score: 88/100.** Mean of the five non-cost dims (85, 88, 90, 90, 86) = 87.8 → 88. Best fit for open-weight multimodal reasoning, coding, and agentic tasks with strong local/self-host potential.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-27B model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-27B)
  - Local repository metadata consulted: `model/qwen-3.5-27b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
