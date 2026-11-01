# Ling-2.6-1T — findings by GPT-6 Luna

- Source: InclusionAI/Ling-2.6-1T
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** InclusionAI's trillion-parameter, open-weight, instant-response MoE model. This is the non-reasoning Ling checkpoint, not its Ring-2.6-1T deep-reasoning sibling or Ling-2.6-Flash.
- **Provider / access:** Official MIT weights at Hugging Face `inclusionAI/Ling-2.6-1T`, with vLLM and SGLang deployment recipes. The model card links an OpenRouter `:free` route, but that route currently returns 404 and is not listed in OpenRouter's live model registry; no current hosted route is verified.
- **Release / knowledge:** Released April 23, 2026. No exact training-data cutoff found.
- **IDs:** `inclusionAI/Ling-2.6-1T`; model catalog ID `inclusionai/ling-2.6-1t`.
- **Context window:** 262,144 tokens, documented in the technical report and checkpoint deployment recipe.
- **Modalities:** Text input and text output only. The vendor classifies Ling as an “instant” model; Ring is the separate thinking/advanced-agent variant.
- **Pricing (as of 2026-11-01):** MIT weights are available for self-hosting, with high hardware costs for a 1T model. Catalog rates differ: BenchmarkList lists $0.075/$0.625 per 1M input/output tokens, while Artificial Analysis lists $0.30/$2.50; no currently working first-party hosted API rate was verified.
- **Architecture:** 1T total parameters, 63B active per token; MoE with 256 routed experts, 8 active per token, and hybrid Lightning Attention/MLA at a 7:1 ratio. MIT license.

### Raw benchmarks found

Scores below refer only to Ling-2.6-1T. Vendor Table 5 labels the model as instant/non-thinking in its comparison against non-thinking or instant-response baselines. Its AIME/HMMT evaluations use chain-of-thought prompts; do not interpret those as evidence that Ling is Ring or transfer Ring's scores.

Agent / tool use:

- τ²-Bench: **78.36** (vendor; mean@4, user simulator GPT-5.2, average across Airline/Retail/Telecom).
- BFCL-V4: **70.64 accuracy** (vendor).
- PinchBench: **85.24** (vendor; mean@5).
- ClawEval: **51.00 pass@3** (vendor).
- Terminal-Bench 2.0: **40.45 accuracy** (vendor; not version 2.1).
- Independent BenchmarkList records Tau2-Bench Telecom **89.8%**, GDPval-AA **1,045 Elo**, and ClawProBench **57.4 final score / 36.5% pass³**. These are separate benchmark records, not replacements for vendor scores.

Reasoning / knowledge:

- AIME 2026: **87.40** (vendor; mean@64, CoT); HMMT-Nov25: **81.93** (mean@64, CoT); IMO-AnswerBench: **65.81** (mean@8, CoT).
- GPQA Diamond: **76.17** (vendor; mean@4, CoT); Humanities Last Exam: **10.06** (vendor; mean@4).
- Artificial Analysis Intelligence Index: **34**, using approximately 16M output tokens (vendor technical report). BenchmarkList lists an independent/catalog score of **26.05**; the index/version records are not treated as interchangeable.

Coding:

- SWE-bench Verified: **72.20%** (vendor; Claude Code and OpenHands function-calling scaffolds; the report says SWE evaluations use this scaffolding).
- LiveCodeBench-v6: **65.58** (vendor; mean@4).
- Terminal-Bench 2.0: **40.45** as above.
- SciCode: **37.0%** (independent BenchmarkList record).

Long context:

- MRCR mean across 16K–256K: **80.37 at 16K / 68.43 at 256K** (vendor). LongBenchV2: **48.31 / 49.30** as listed in the vendor table; the table does not clearly label what the two values correspond to, so they are not assigned to a specific condition.
- BenchmarkList lists AA-LCR at **41.7%** on its benchmark map and **34.7%** within a separate composite breakdown; because the same page disagrees, neither is treated as a definitive normalized retrieval result.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong vendor τ²-Bench, BFCL-V4, and PinchBench results are balanced by a 40.45% Terminal-Bench 2.0 score and moderate independent ClawProBench. Benchmarks use different harnesses and versions. [Technical report](https://arxiv.org/html/2606.15079); [BenchmarkList](https://benchmarklist.com/models/inclusionai-ling-2.6-1t/).
- **Reasoning: 71/100.** AIME 2026 is strong, while GPQA Diamond at 76.17% and HLE at 10.06% sit well below frontier; Ling is optimized for concise instant responses, not Ring-style extended reasoning. [Technical report](https://arxiv.org/html/2606.15079).
- **Context window: 72/100.** The 262K window is in the 200K–500K tier; MRCR falls from 80.37 at 16K to 68.43 at 256K, so the full window does not imply uniformly high retrieval. [Technical report](https://arxiv.org/html/2606.15079).
- **Multimodal: 15/100.** Text-only input and output. [Artificial Analysis](https://artificialanalysis.ai/models/ling-2-6-1t); [Hugging Face model card](https://huggingface.co/inclusionAI/Ling-2.6-1T).
- **Coding: 74/100.** SWE-bench Verified at 72.2% and LiveCodeBench-v6 at 65.58 are credible strengths; Terminal-Bench 2.0 at 40.45 and SciCode at 37% temper the score. [Technical report](https://arxiv.org/html/2606.15079); [BenchmarkList](https://benchmarklist.com/models/inclusionai-ling-2.6-1t/).
- **Cost efficiency: 90/100 (low confidence).** Open weights are MIT-licensed, but serving a 1T/63B-active model is resource-intensive. Published hosted catalog rates vary by 4× and the linked free OpenRouter route is currently unavailable; no universal rate is asserted. [Hugging Face](https://huggingface.co/inclusionAI/Ling-2.6-1T); [Artificial Analysis](https://artificialanalysis.ai/models/ling-2-6-1t); [BenchmarkList](https://benchmarklist.com/models/inclusionai-ling-2.6-1t/).
- **Overall Score: 62/100.** Half-up mean of the five quality dimensions: (78 + 71 + 72 + 15 + 74) / 5 = 62.0. Cost is excluded. Best suited to self-hosted, text-only agent workflows needing concise responses and up to 262K context, provided the operator can meet its substantial serving requirements.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three exact-ID web searches; cross-checked InclusionAI's official model card and technical report with Artificial Analysis and BenchmarkList. Ling is kept distinct from Ring and Ling-2.6-Flash. Official and independent benchmark records, test modes, harnesses, and conflicting catalog values are kept separate. Scores are normalized interpretations, not vendor scores.
- Reference URLs:
  - [InclusionAI Ling-2.6-1T model card](https://huggingface.co/inclusionAI/Ling-2.6-1T)
  - [Ling and Ring 2.6 technical report](https://arxiv.org/html/2606.15079)
  - [Official SWE-bench Verified evaluation record](https://huggingface.co/inclusionAI/Ling-2.6-1T/raw/main/.eval_results/swe-bench_verified.yaml)
  - [Artificial Analysis Ling-2.6-1T](https://artificialanalysis.ai/models/ling-2-6-1t)
  - [BenchmarkList Ling-2.6-1T](https://benchmarklist.com/models/inclusionai-ling-2.6-1t/)
  - [models.dev model catalog](https://models.dev/models/inclusionai/ling-2.6-1t)

---
