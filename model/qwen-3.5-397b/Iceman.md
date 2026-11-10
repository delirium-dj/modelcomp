# Qwen 3.5 397B — findings by Iceman

- Source: Alibaba Qwen/Qwen3.5-397B-A17B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B (Qwen 3.5 397B)
- **Short description:** Alibaba’s Qwen3.5 open-weight multimodal Mixture-of-Experts model (397B total / 17B active) for reasoning, coding, vision-language, and agentic tasks.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-397B-A17B`, Apache 2.0) and hosted APIs/providers. Local metadata lists `opencode/qwen-3.5-397b` and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10 (Qwen3.5 series). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `Qwen3.5-397B-A17B`, `Qwen/Qwen3.5-397B-A17B`.
- **Context window:** 262,144 native tokens, extensible to ~1,010,000 (1M hosted in some deployments) per local metadata/card context.
- **Modalities:** Text, image, video input; text output (multimodal vision-language model).
- **Pricing (as of 2026-11-10):** Open weights free to self-host (Apache 2.0). Hosted pricing varies by provider (local metadata cites AA $0.60/$3.60 per 1M in/out as reference).
- **Architecture:** Sparse MoE, 397B total parameters / 17B active parameters (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `Qwen/Qwen3.5-397B-A17B` (Qwen3.5-397B-A17B column) unless noted.

Agent / tool use:

- BFCL-V4: **72.9**
- TAU2-Bench: **86.7**
- VITA-Bench: **49.6**
- DeepPlanning: **34.3**
- Tool Decathlon: **38.0**
- BrowseComp (agentic search, w/ context/fail): **69.0** / **78.6**
- HLE (text-only, w/ tools): **28.6**

Reasoning / knowledge:

- MMLU-Pro: **87.8**
- MMLU-Redux: **94.9**
- SuperGPQA: **70.4**
- GPQA Diamond: **88.4**
- HLE (text-only, w/o tools): **18.7**
- AIME26: **91.3**
- HMMT Feb 25: **94.8**
- HMMT Nov 25: **92.7**
- IMOAnswerBench: **84.0**
- C-Eval: **93.7**

Coding:

- LiveCodeBench v6: **83.6**
- SWE-bench Verified: **76.4**
- SWE-bench Multilingual: **69.3**
- SecCodeBench: **68.3**
- Terminal-Bench 2 (terminus-2): **52.5**
- CodeForces (Elo): **2056**
- FullStackBench: **68.8**

Multimodal / vision:

- MMMU: **81.2**
- MMMU-Pro: **68.9**
- MathVista: **90.3**
- MathVision: **88.6**
- MathVerse: **85.1**
- OmniDocBench1.5: **90.8**
- OCRBench: **93.1**
- RealWorldQA: **80.0**
- VideoMME (w/ sub): **87.5**
- MLVU: **86.2**

Long context:

- Native 262K context (extensible) documented; no standalone MRCR/RULER/GraphWalks numeric score extracted from reviewed card text.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 85/100.** Strong verified tool/agent results (BFCL-V4 72.9, TAU2-Bench 86.7, HLE w/ tools 28.6, BrowseComp 69.0/78.6) indicate capable function-calling and agentic behavior, though some harder planning benchmarks are moderate.
- **Reasoning: 89/100.** Excellent reasoning/knowledge performance (MMLU-Pro 87.8, GPQA Diamond 88.4, AIME26 91.3, HMMT 92.7–94.8, SuperGPQA 70.4) with solid but not top-tier HLE.
- **Context window: 90/100.** 262K native context with extension capability (~1M in some deployments) is strong for long workflows, though native window is below 1M-class leaders.
- **Multimodal: 92/100.** Strong verified multimodal/vision results (MMMU 81.2, MathVista 90.3, MathVision 88.6, OCRBench 93.1, VideoMME 87.5, OmniDocBench 90.8) show broad image/video/document understanding.
- **Coding: 87/100.** Very strong coding results (LiveCodeBench v6 83.6, SWE-bench Verified 76.4, SWE-bench Multilingual 69.3, CodeForces 2056, Terminal-Bench 2 52.5) for an open-weight generalist MoE.
- **Cost efficiency: 92/100.** Apache 2.0 open weights enable free self-hosting and competitive hosted pricing options relative to capability.
- **Overall Score: 89/100.** Mean of the five non-cost dims (85, 89, 90, 92, 87) = 88.6 → 89. Best fit for open-weight multimodal reasoning, coding, and agentic workflows where strong vision/math/coding balance is needed.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-397B-A17B model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - Local repository metadata consulted: `model/qwen-3.5-397b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
