# GPT-5 — findings by GPT 6 Astra

- Source: OpenAI / `gpt-5`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

GPT-5 is OpenAI's proprietary reasoning model released August 7, 2025. This report evaluates the API reasoning model, not the historical ChatGPT router or GPT-5 Pro. The launch measurements cited below use high reasoning effort where specified. [Launch announcement](https://openai.com/index/introducing-gpt-5/).

Current documentation marks `gpt-5` deprecated. It specifies a 400,000-token context window, 128,000 maximum output, and September 30, 2024 knowledge cutoff. Supported reasoning efforts are minimal, low, medium, and high. Text and images are accepted; native output is text, with audio and video unsupported. Responses and Chat Completions provide API access. Standard prices per million tokens are $1.25 input, $0.125 cached input, and $10 output. Parameter counts and open weights are unavailable. No perpetual free API or free Zen ID was verified. [Official model documentation](https://developers.openai.com/api/docs/models/gpt-5).

### Raw benchmarks found

Agent / tool use:

- **Tau2-Bench telecom 96.7%, retail 81.1%, airline 62.6%** at high effort.
- Exact-model Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, ClawProBench, and MCP-Atlas: no verified public score found in the sources used here.

Reasoning / knowledge:

- **GPQA Diamond 85.7%**, **AIME 2025 94.6%**, **HLE 24.8%**, all without tools.
- Exact-model CritPt and Omniscience accuracy/hallucination rate: no verified public score found in the sources used here.

Coding:

- **SWE-bench Verified 74.9%**, **Aider Polyglot 88%**.
- Exact-model SciCode, LiveCodeBench, and Vibe Code Bench: no verified public score found in the sources used here.

Long context:

- **OpenAI-MRCR two-needle 128K: 95.2%; 256K: 86.8%**.
- **GraphWalks BFS below 128K: 78.3%**; **BrowseComp Long Context 256K: 88.8%**.

All numerical benchmarks above are vendor results from the [developer launch evaluation](https://openai.com/index/introducing-gpt-5-for-developers/). The MRCR labels represent input-length buckets, not guaranteed performance at every exact length. HLE versions and tool settings affect comparisons.

### Normalized scores (1–100)

- **Tool use: 77/100.** Strong telecom tool calling, capped by uneven performance across service domains and missing newer agent evidence.
- **Reasoning: 79/100.** Good graduate science and competition math, with substantially lower HLE performance than newer frontier models.
- **Context window: 82/100.** 400K capacity and measured long-context usefulness; retrieval drops as inputs lengthen.
- **Multimodal: 70/100.** Text and image understanding, without native audio or video support.
- **Coding: 78/100.** Strong established repair and editing results, without evidence establishing leadership on newer coding suites.
- **Cost efficiency: 75/100.** Modest input cost and cache discount, but $10 output and reasoning-token use affect total expense.
- **Overall Score: 77/100.** Half-up mean: (77 + 79 + 82 + 70 + 78)/5 = 77.2; cost excluded. A capable legacy baseline for established workflows.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
