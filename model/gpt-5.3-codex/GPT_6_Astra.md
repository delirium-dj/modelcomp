# GPT-5.3-Codex — findings by GPT 6 Astra

- Source: OpenAI / `gpt-5.3-codex`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

GPT-5.3-Codex is a proprietary coding and computer-work model released February 5, 2026. Parameter counts are not disclosed. The original release made it available across paid Codex surfaces. [Launch](https://openai.com/index/introducing-gpt-5-3-codex/).

The current API card labels it **deprecated**. It lists **400,000 context tokens**, **128,000 maximum output tokens**, an **August 31, 2025** knowledge cutoff, text/image input and text output. Reasoning efforts are low, medium, high, and xhigh. Standard rates per million tokens are **$1.75 input, $0.175 cached input, and $14 output**; actual reasoning consumption affects task cost. Historical availability is not a guarantee of continued access. [Model documentation](https://developers.openai.com/api/docs/models/gpt-5.3-codex).

### Raw benchmarks found

Agent / tool use:

- Launch xhigh results: **OSWorld-Verified 64.7%**, **GDPval wins or ties 70.9%**. [Launch evaluation](https://openai.com/index/introducing-gpt-5-3-codex/).
- Later comparison: **BrowseComp 77.3%**, **Toolathlon 51.9%**, **FinanceAgent v1.1 54.0%**, **OfficeQA 65.1%**, and **OSWorld-Verified 74.0%**. The later OSWorld result is kept separate from the launch figure; harness and evaluation conditions affect comparability. [GPT-5.4 comparison](https://openai.com/index/introducing-gpt-5-4/).

Reasoning / knowledge:

- **GPQA Diamond 92.6%**, xhigh, in the [later official comparison](https://openai.com/index/introducing-gpt-5-4/).
- Exact-model HLE, AIME, and ARC-AGI: no verified public score found in the sources used here. No GPT-5.2 or GPT-5.4 scores are substituted.

Coding:

- **SWE-Bench Pro Public 56.8%**, **Terminal-Bench 2.0 77.3%**, **SWE-Lancer IC Diamond 81.4%**, all xhigh. These are vendor evaluations, with agent scaffolding; Terminal-Bench 2.0 is not 2.1 or 4.0. [Launch appendix](https://openai.com/index/introducing-gpt-5-3-codex/).

Long context / multimodal:

- Exact-model MRCR, RULER, MMMU-Pro, and measured maximum-context retrieval: no verified public score found. The later comparison leaves these cells blank for GPT-5.3-Codex; adjacent models' results do not fill them.

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong terminal and browser agents with substantial professional-work evidence.
- **Reasoning: 88/100.** Excellent GPQA result, tempered by narrower verified coverage of other reasoning suites.
- **Context window: 82/100.** Verified 400K capacity; maximum-context retrieval reliability remains unverified.
- **Multimodal: 70/100.** Text and image input with text output; native audio and video were not verified.
- **Coding: 85/100.** Strong terminal execution and repository work, below later frontier results on harder suites.
- **Cost efficiency: 67/100.** Moderate input pricing, but $14 output and extended reasoning increase task cost.
- **Overall Score: 82/100.** Half-up mean: (83 + 88 + 82 + 70 + 85)/5 = 81.6; cost excluded. Best suited to established coding-agent workflows where the deprecated model remains available.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
