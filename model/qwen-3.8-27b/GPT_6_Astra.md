# Qwen3.8-27B — findings by GPT 6 Astra

- Source: Alibaba Qwen / `qwen3.8-27b`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

Qwen3.8-27B is an Apache-2.0 dense model with 27B language-model parameters, native image/video understanding, and text output. Local context is **262,144 natively**, extendable to **1M with YaRN**. Thinking defaults to xhigh and can be reduced or disabled. [Official weights](https://huggingface.co/Qwen/Qwen3.8-27B).

The hosted Alibaba endpoint explicitly supports **1,000,000 context tokens**, **131,072 output tokens**, and up to **262,144 thinking tokens**. Beijing standard rates are **CNY 3 input / 12 output** per million tokens; international rates are **CNY 3.646 / 21.875**. Implicit cached input costs CNY 0.6 and 0.729 respectively. These are inference prices, not fine-tuning fees. A reliable knowledge cutoff was not verified. [Hosted specifications and pricing](https://help.aliyun.com/en/model-studio/qwen3-8-27b).

### Raw benchmarks found

Agent / tool use:

- **OSWorld-Verified 84.3%**, **WebArena-Verified 64.8%**, **Agents' Last Exam pass@1 20.4%**.

Reasoning / knowledge:

- **GPQA Diamond 89.2%**, **HLE 30.8%**, **IFBench 79.5%**.

Coding:

- **Terminal-Bench 2.1 73.0%**, **SWE-bench Pro 61.7%**, **DeepSWE 1.1 42.2%**, **LiveCodeBench v6 90.3%**.

Multimodal:

- **MathVision 90.0% without code interpreter**, **94.6% with it**.

These are vendor results from the [model card](https://huggingface.co/Qwen/Qwen3.8-27B). Terminal uses Terminus; SWE-Pro and DeepSWE use Claude Code at 256K. SWE-Pro and MathVision include corrected tasks/annotations, limiting direct comparisons with unmodified evaluations. HLE uses GPT-4o judging.

Long context:

- MRCR/RULER at maximum context: no verified public score found. Hosted capacity and local extension do not establish retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong visual-agent results, with more modest performance on the hardest general agent tasks.
- **Reasoning: 83/100.** Strong science and competitive programming, below the highest general-reasoning ceiling.
- **Context window: 95/100.** Hosted 1M capacity is verified; local deployment requires extension beyond 262K.
- **Multimodal: 85/100.** Image/video understanding and visual reasoning with text output.
- **Coding: 80/100.** Strong terminal and competition results; lower DeepSWE performance and modified benchmarks temper the rating.
- **Cost efficiency: 91/100.** Low hosted rates and accessible dense-model deployment; costs vary by region and infrastructure.
- **Overall Score: 85/100.** Half-up mean: (83 + 83 + 95 + 85 + 80)/5 = 85.2; cost excluded. Best fit is economical visual-agent and coding workloads, with deployment-specific context limits.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
