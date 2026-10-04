# Inkling — findings by GPT 6 Astra

- Source: Thinking Machines Lab / `thinkingmachines/Inkling`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

Inkling is a general-purpose open-weight MoE released July 15, 2026, with **975B total / 41B active parameters** and up to **1M context**. It reasons over text, images, and audio and returns text. It is distinct from Inkling-Small and from interaction systems that combine multiple models. [Launch](https://thinkingmachines.ai/news/introducing-inkling/).

The weights use Apache-2.0. A reliable knowledge cutoff and universal maximum output limit were not verified. [Official model card](https://huggingface.co/thinkingmachines/Inkling).

Tinker serverless inference is beta and provides **256K context**, with **$1 input, $0.17 cached input, and $4.05 output** per million tokens. These are inference rates, separate from discounted training/prefill/sampling rows. The model's architectural 1M capacity therefore exceeds this particular hosted endpoint's limit. [Official pricing](https://tinker-docs.thinkingmachines.ai/tinker/models/models_and_pricing/).

### Raw benchmarks found

Agent / tool use:

- Vendor table: **MCP Atlas 74.1%**, **Tau3 Banking 23.7%**, **GDPval-AA v2 1233**.

Reasoning / knowledge:

- **GPQA Diamond 87.2%**, **AIME 2026 97.1%**, **HLE text-only 29.7%**, **HLE with tools 46.0%**. Tool-assisted HLE is not standalone accuracy.

Coding:

- **SWE-bench Verified 77.6%**, **SWE-bench Pro Public 54.3%**, **Terminal-Bench 2.1 63.8%**, with the latter explicitly reporting the best harness.

Multimodal:

- **MMMU-Pro 73.5%**.

The preceding results are reported in the [official benchmark card](https://huggingface.co/thinkingmachines/Inkling). They do not establish equivalent performance at every thinking effort or provider quantization.

Long context / independent checks:

- Artificial Analysis xhigh: **AA-LCR v1.1 77%**, **HLE 32%**, **SciCode 47%**, **AutomationBench-AA 5%**, **Terminal-Bench 4.0 1%**. These newer task results are weaker than the vendor's older agent-suite picture. [Independent comparison](https://artificialanalysis.ai/models/comparisons/grok-4-7-vs-inkling).
- Full-window MRCR/RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 66/100.** Useful MCP and older agent results, substantially tempered by low newer automation success.
- **Reasoning: 80/100.** Strong mathematics and useful science, with a more modest general-reasoning ceiling.
- **Context window: 95/100.** Model capacity reaches 1M; the cited Tinker inference endpoint is limited to 256K.
- **Multimodal: 95/100.** Native image and audio understanding; text-only output.
- **Coding: 73/100.** Useful repository repair and scientific coding, but weak newer terminal-agent results.
- **Cost efficiency: 87/100.** Competitive $1/$4.05 beta inference rates; self-hosting the full model remains resource-intensive.
- **Overall Score: 82/100.** Half-up mean: (66 + 80 + 95 + 95 + 73)/5 = 81.8; cost excluded. Best fit is customizable multimodal analysis, with autonomous coding reliability validated per workload.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
