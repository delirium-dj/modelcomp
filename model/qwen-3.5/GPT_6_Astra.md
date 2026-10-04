# Qwen 3.5 — findings by GPT 6 Astra

- Source: Alibaba / `Qwen/Qwen3.5-397B-A17B`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

This report resolves the broad Qwen 3.5 entry to the flagship **Qwen3.5-397B-A17B**, rather than averaging its smaller siblings. It is an open-weight vision-language MoE with 397B total and 17B active parameters, under Apache 2.0. Text, image, and video inputs produce text; thinking and tool calls are supported. Native context is 262,144 tokens; an explicitly configured extension supports 1,010,000. The hosted Plus version has separate production features and its own report. [Official model card](https://huggingface.co/Qwen/Qwen3.5-397B-A17B).

The release belongs to February 2026. An exact reliable knowledge cutoff was not verified. Self-hosting can expose an OpenAI-compatible Chat Completions API; provider-specific output limits and pricing are deployment choices. Artificial Analysis lists a paid reference rate of $0.60 input/$3.60 output per million tokens. Downloadable weights do not make inference infrastructure free, and no perpetual free Zen ID was verified. [Independent provider/model comparison](https://artificialanalysis.ai/models/comparisons/qwen3-5-397b-a17b-vs-qwen3-coder-480b-a35b-instruct).

### Raw benchmarks found

Agent / tool use:

- Vendor card: **BFCL v4 72.9**, **Tau2-Bench 86.7**, **MCP-Mark 46.1**.
- Independent Artificial Analysis reasoning configuration: **GDPval-AA v2.1 796**, **AutomationBench-AA 7%**. These broader work-task results are substantially less impressive than the narrower vendor agent evaluations.
- Exact-model ClawProBench and MCP-Atlas: no verified public score found in the sources used here.

Reasoning / knowledge:

- Vendor: **GPQA Diamond 88.4%**, **HLE 28.7%**, **AIME 2026 91.3%**.
- Independent AA: **Intelligence Index v4.3.2 18**, **HLE 29%**, **CritPt 2%**, **AA-Omniscience −31 index points**. A negative Omniscience index is not a negative accuracy percentage.

Coding:

- Vendor: **SWE-bench Verified 76.4%**, **LiveCodeBench v6 83.6%**.
- Independent AA: **SciCode 45%**, **Terminal-Bench 4.0 0%**. The latter is a measured result on a newer suite, not an absence of data or a Terminal-Bench 2.1 score.

Long context:

- Vendor **AA-LCR 68.7%**; independent **AA-LCR v1.1 77%**. Different versions and harnesses preclude interpreting this as a controlled improvement.
- Exact-model MRCR retrieval result: no verified public score found in the sources used here.

Vendor measurements are from the [model card](https://huggingface.co/Qwen/Qwen3.5-397B-A17B); independent results are from [Artificial Analysis](https://artificialanalysis.ai/models/comparisons/qwen3-5-397b-a17b-vs-qwen3-coder-480b-a35b-instruct). Both are kept visible because selective use of only the stronger table would overstate broad agent reliability.

### Normalized scores (1–100)

- **Tool use: 60/100.** Useful function calling, with weaker independent automation and work-task evidence.
- **Reasoning: 78/100.** Strong GPQA and contest math, tempered by harder scientific and reliability results.
- **Context window: 95/100.** Documented million-token extension qualifies, but requires configuration beyond native 262K.
- **Multimodal: 85/100.** Text, image, and video understanding, with text-only native output.
- **Coding: 75/100.** Strong repair and competitive-programming scores, capped by poor newer terminal performance.
- **Cost efficiency: 90/100.** Affordable hosted reference rates; self-hosting still incurs compute costs.
- **Overall Score: 79/100.** Half-up mean: (60 + 78 + 95 + 85 + 75)/5 = 78.6; cost excluded. Useful for configurable multimodal deployments with task-specific validation.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
