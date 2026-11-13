# MiMo-V2.5-Pro — findings by Glyph Cluster

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.5-Pro`, folder slug `mimo-v2.5-pro`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Open-weight Mixture-of-Experts language model from Xiaomi MiMo designed for demanding agentic, complex software engineering, and long-horizon tasks with 1M-token context.
- **Provider / access:** Open weights on Hugging Face (`XiaomiMiMo/MiMo-V2.5-Pro`, MIT license). Also exposed via Xiaomi MiMo platform/API and third-party providers (per HF/AA/OpenRouter listings).
- **Release / knowledge:** Released 2026-era (exact public release date not explicitly stated on fetched sources). Knowledge cutoff not explicitly stated on fetched sources.
- **IDs:** `XiaomiMiMo/MiMo-V2.5-Pro` (Hugging Face), `xiaomi/mimo-v2.5-pro` (OpenRouter/provider ID).
- **Context window:** 1,000,000 tokens (per Hugging Face model card and Artificial Analysis).
- **Modalities:** Text input and text output in fetched sources; reasoning supported.
- **Pricing (as of 2026-11-13):** Open weights (MIT); hosted/provider pricing varies (not consistently quantified on fetched sources). AA snapshot did not provide extractable verified benchmark/pricing aggregates beyond metadata.
- **Architecture:** MoE with 1.02T total parameters and 42B activated parameters; hybrid attention (SWA+GA), MTP modules, FP8 mixed precision weights; 1M context (per Hugging Face model card).

### Raw benchmarks found

> Values below are benchmark figures reported on the fetched Hugging Face model card for MiMo-V2.5-Pro / MiMo-V2.5-Pro Base where explicitly shown. Figures not present in fetched sources are marked as no verified public score found.

Base model evaluation (MiMo-V2.5-Pro Base, 5-shot unless noted; from HF table):

- BBH (3-shot): **88.4**
- MMLU: **89.4**
- MMLU-Redux: **92.8**
- MMLU-Pro: **68.5**
- DROP (3-shot): **86.3**
- ARC-Challenge (25-shot): **97.2**
- HellaSwag (10-shot): **89.8**
- WinoGrande (5-shot): **85.6**
- TriviaQA: **81.3**
- GPQA-Diamond: **66.7**
- GSM8K (8-shot): **99.6**
- MATH (4-shot): **86.2**
- AIME 24&25 (2-shot): **37.3**
- HumanEval+ (1-shot): **75.6**
- MBPP+ (3-shot): **74.1**
- LiveCodeBench v6 (1-shot): **39.6**
- SWE-Bench (AgentLess, 3-shot): **35.7**
- C-Eval: **91.5**
- CMMLU: **90.2**
- GlobalMMLU: **83.6**

Hugging Face evaluation results section (as shown on fetched page, attribution/context as listed there):

- GSM8K: **99.6**
- GPQA Diamond: **66.7**
- SWE-bench Verified (Swe Bench Resolved): **78.9**

Long context:

- GraphWalks (OpenAI long-context benchmark): HF page reports MiMo-V2.5-Pro scores **0.56 BFS / 0.92 Parents at 512k** and **0.37 / 0.62 at 1M** (described on model card). Standardized AA-LCR/MRCR figures beyond this description: no verified public score found.

Other common standalone benchmarks (instruct/post-trained, exact harness not fully specified on fetched page):

- HLE / Terminal-Bench (beyond HF eval snippets) / MMMU / AIME standalone post-train scores: no verified public score found in fetched sources beyond values listed above.

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on available evidence, not official vendor scores. Overall is the half-up mean of the five non-cost dimensions.

- **Tool use: 76/100.** Evidence suggests capable agentic/software-engineering behavior (HF eval lists SWE-bench Verified 78.9; model is positioned for long-horizon agentic tasks), but comprehensive standardized tool-use/agent benchmark coverage for the post-trained model is limited in fetched sources.
- **Reasoning: 78/100.** Strong base-model reasoning/knowledge indicators (MMLU 89.4, MMLU-Redux 92.8, GSM8K 99.6, MATH 86.2, ARC-Challenge 97.2) are offset by weaker advanced exam-style results where reported (GPQA-Diamond 66.7, AIME 24&25 37.3).
- **Context window: 90/100.** 1M-token context is a core documented capability with reported long-context evaluation results up to 1M (GraphWalks 0.37 BFS / 0.62 Parents at 1M), indicating strong but imperfect long-horizon retention.
- **Multimodal: 15/100.** Text-only input/output in verified fetched evidence for this exact model/ID; no verified multimodal benchmark evidence found.
- **Coding: 74/100.** Mixed coding evidence: strong SWE-bench Verified result shown in HF evals (78.9) and decent HumanEval+/MBPP+ base results, but lower base LiveCodeBench v6 (39.6) and SWE-Bench AgentLess (35.7); overall capable but not uniformly frontier across coding settings.
- **Cost efficiency: 90/100.** Open-weight MIT model with 42B activated parameters in a 1.02T MoE and 1M context offers strong efficiency/flexibility for self-hosted deployment, though hosted pricing details were not fully verified in fetched sources.
- **Overall Score: 67/100.** Mean of the five non-cost dims (Tool use 76, Reasoning 78, Context 90, Multimodal 15, Coding 74) = 66.6, rounded to 67. Best fit: open-weight long-context coding and agentic workflows where text-only capability, deployment control, and 1M context are priorities.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-13 UTC
- Method: Fresh public-web research (web search unavailable with HTTP 402; fallback used direct `webfetch` of public sources). This is a re-evaluation of an existing self-excluded twin: new verified benchmark evidence was found on the official Hugging Face model card/evaluation results, so a scored report is produced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Hugging Face — XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)
  - [Artificial Analysis — MiMo-V2.5-Pro](https://artificialanalysis.ai/models/mimo-v2-5-pro)
  - [OpenRouter — xiaomi/mimo-v2.5-pro](https://openrouter.ai/xiaomi/mimo-v2.5-pro)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
