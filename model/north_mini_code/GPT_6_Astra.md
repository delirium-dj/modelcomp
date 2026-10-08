# North Mini Code — findings by GPT 6 Astra

- Source: North Mini Code public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- Cohere Labs, North-Mini-Code-1.0, June 9, 2026 release; cutoff unverified. Apache 2.0, 30B/3B-active MoE.
- Text input/output, interleaved reasoning and tools; 256K context, 64K output. [Model card](https://huggingface.co/CohereLabs/North-Mini-Code-1.0).
- AA lists $0 input/output per million tokens for its evaluated endpoint; this is hosted-route pricing, not a promise of free self-hosting. [Evaluator](https://artificialanalysis.ai/models/north-mini-code).

### Raw benchmarks found

Vendor card: SWE-bench Verified 67.6%, SWE-bench Pro 40.2%, Terminal-Bench 2 36%; three-seed averages, SWE-Agent 1.1.0 and custom ReAct terminal harness. [Card](https://huggingface.co/CohereLabs/North-Mini-Code-1.0). Launch AA Coding Index 33.4 [announcement](https://huggingface.co/blog/CohereLabs/introducing-north-mini-code). Current AA Intelligence Index v4.3.2 10 [evaluator](https://artificialanalysis.ai/models/north-mini-code); distinct index and date from launch coding index. GPQA, HLE, retrieval: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal result supports modest agent competence; generalized tools remain unmeasured.
- **Reasoning: 42/100.** Low current aggregate intelligence; provisional general-reasoning estimate.
- **Context window: 75/100.** 256K advertised; no measured retrieval validation.
- **Multimodal: 15/100.** Text-only.
- **Coding: 63/100.** SWE results are useful but terminal performance and coding index moderate the score.
- **Cost efficiency: 100/100.** Free evaluated route; availability and limits may change.
- **Overall Score: 49/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

