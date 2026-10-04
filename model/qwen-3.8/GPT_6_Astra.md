# Qwen3.8 — findings by GPT 6 Astra

- Source: Alibaba Qwen / `Qwen3.8-2.4T-A95B`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

The broad Qwen3.8 slug is assessed here as the open **2.4T-A95B** flagship, separately from hosted Qwen3.8-Max and the 27B model. It has 2.4T total parameters and 95B active, hybrid attention, and a custom Qwen3.8-Max license. The released model is **text-only**, with 262,144 native context extendable to 1,010,000. The model card distinguishes Max's added vision features, so those are not credited to these weights. [Official card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B).

Alibaba's exact `qwen3.8-2.4t-a95b` endpoint confirms text-only input/output, **1M hosted context**, **131,072 output**, and **131,072 thinking tokens**. Function calling, structured outputs, and web search are supported. International rates per million tokens are **CNY 14.988 input / 44.965 output**, with CNY 1.874 implicit cached input; Beijing rates are CNY 12/36 and 1.5 cached. Knowledge cutoff was not verified. [Hosted model documentation](https://help.aliyun.com/en/model-studio/qwen3-8-2-4t-a95b).

### Raw benchmarks found

Agent / tool use:

- **AA-Briefcase v1.1 1436**, **GDPval-AA v2.1 1613**, **AutomationBench-AA 57%**.

Reasoning / knowledge:

- **Intelligence Index v4.3.2 40**, **Humanity's Last Exam 42%**, **CritPt 20%**, **AA-Omniscience 4 index points**.

Coding:

- **SciCode 54%**, **Terminal-Bench 4.0 11%**.

Long context:

- **AA-LCR v1.1 80%**, **GDP.pdf 15%**.

These exact-open-model results come from one [Artificial Analysis comparison](https://artificialanalysis.ai/models/comparisons/qwen3-8-27b-vs-qwen3-8-2-4t-a95b). The vendor repository's main benchmark column is labeled Qwen3.8-Max; its software-engineering, visual, and MRCR values are not silently reassigned to the open checkpoint. Exact-open-model SWE-bench, LiveCodeBench, and maximum-context retrieval: no verified public score found with unambiguous attribution in the sources used here.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong professional work and useful automation, with more limited newer terminal success.
- **Reasoning: 85/100.** Strong HLE and physics, tempered by lower factuality-index performance.
- **Context window: 95/100.** Verified hosted 1M capacity; local weights require context extension beyond 262K.
- **Multimodal: 15/100.** Text-only released model and exact hosted endpoint; Max vision is a separate capability.
- **Coding: 80/100.** Good scientific coding, but weaker newer terminal performance and uncertain vendor checkpoint attribution.
- **Cost efficiency: 81/100.** Competitive hosted rates, with substantial self-hosting requirements for the large checkpoint.
- **Overall Score: 72/100.** Half-up mean: (84 + 85 + 95 + 15 + 80)/5 = 71.8; cost excluded. Best fit is text-based professional and coding work requiring open weights and long context.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
