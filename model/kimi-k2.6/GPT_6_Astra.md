# Kimi K2.6 — findings by GPT 6 Astra

- Source: Moonshot AI / `kimi-k2.6`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

Kimi K2.6 is an open-weight mixture-of-experts model with 1T total and 32B active parameters, distributed under a modified MIT license. Its context capacity is 262,144 tokens. [Official model card](https://huggingface.co/moonshotai/Kimi-K2.6).

The API accepts text, images, and video and produces text. Thinking is enabled by default and can be disabled; tool calls and multimodal tool results are supported. The documented default output allowance is 32,768 tokens, not a verified maximum. Video processing uses key frames; native audio understanding or nontext generation was not verified. A reliable knowledge cutoff was not found. [API guide](https://platform.kimi.com/docs/guide/kimi-k2-6-quickstart).

Official published rates per million tokens are **$0.95 uncached input, $0.16 cached input, and $4 output**. These are API token rates, separate from membership quotas or temporary hosting promotions. [Kimi pricing article](https://www.kimi.ai/es-419/resources/kimi-k2-6-pricing).

### Raw benchmarks found

Agent / tool use:

- BrowseComp **83.2%**, Toolathlon **50.0%**, MCPMark **55.9%**, OSWorld-Verified **73.1%**.
- ClawEval v1.1: **62.3% pass^3**, versus **80.9% pass@3**; these measure different aggregation criteria.

Reasoning / knowledge:

- GPQA Diamond **90.5%**, AIME 2026 **96.4%**, Humanity's Last Exam full **34.7% without tools**, **54.0% with tools**.

Coding:

- SWE-bench Verified **80.2%**, SWE-bench Pro **58.6%**, Terminal-Bench 2.0 **66.7%**, SciCode **52.2%**, LiveCodeBench v6 **89.6%**.

Multimodal:

- MMMU-Pro **79.4% without tools**, **80.1% with Python**.

These are vendor-reported thinking-mode results from the [official benchmark table](https://huggingface.co/moonshotai/Kimi-K2.6). Coding results average ten runs; Terminal-Bench uses Terminus 2. Agent Swarm results are excluded from the single-model assessment. Different harnesses and tool budgets are not interchangeable.

Long context:

- MRCR, RULER, and independent retrieval accuracy at maximum context: no verified public score found in the sources used here. Capacity alone does not establish retrieval reliability.

### Normalized scores (1–100)

- **Tool use: 83/100.** Broad browser, tool, and computer-use evidence, with substantial harness dependence.
- **Reasoning: 86/100.** Strong science and mathematics; tool-assisted HLE is kept distinct from standalone reasoning.
- **Context window: 78/100.** Verified 262K capacity within the methodology's 200–500K band; retrieval remains unverified.
- **Multimodal: 85/100.** Image and video understanding with strong visual reasoning, but text-only output.
- **Coding: 85/100.** Strong repository and scientific coding results, with room below the terminal frontier.
- **Cost efficiency: 87/100.** Competitive sub-dollar input and $4 output, subject to thinking-token and tool consumption.
- **Overall Score: 83/100.** Half-up mean: (83 + 86 + 78 + 85 + 85)/5 = 83.4; cost excluded. Suitable for visual agent workflows and software engineering within a 256K context budget.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
