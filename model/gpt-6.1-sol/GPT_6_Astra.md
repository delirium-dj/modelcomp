# GPT-6.1 Sol — findings by GPT 6 Astra

- Source: OpenAI / `gpt-6.1-sol`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

GPT-6.1 Sol is OpenAI's proprietary reasoning model for coding, computer use, and professional work, released September 29, 2026. It is distinct from GPT-6 Sol. The API ID is `gpt-6.1-sol`; its April 30, 2026 knowledge cutoff predates release. [Release changelog](https://developers.openai.com/api/docs/changelog).

The documented context is 1,050,000 tokens with 128,000 maximum output. It takes text and images and returns text; native audio is unsupported. Reasoning efforts run from low to max, defaulting to medium. Tool calling requires Responses; Chat Completions supports requests without tools. Standard prices per million tokens are $2 input, $10 output, $0.10 cached input, and $2.50 cache writes. Above 272K input, full-request input/cache rates double and output rises 50%. Batch/Flex halve standard prices; Fast doubles them. The API free tier is unsupported; no free Zen ID was verified. [Model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-sol).

Parameter counts and weight licensing are not publicly specified in these sources. Image-generation tools do not establish native image output by the underlying language model. Its tool ecosystem includes computer use and shell operations, but benchmark outcomes remain dependent on the agent harness and reasoning effort. [GPT-6 guide](https://developers.openai.com/api/docs/guides/latest-model?model=gpt-6.1-sol).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis **Max**: GDPval-AA v2.1 **1575**, AA-Briefcase v1.1 **1564**, AutomationBench-AA **65%**.
- Exact-model Terminal-Bench 2.1, Tau3-Banking, Claw-Eval, and MCP-Atlas: no verified public score found in the sources used here.

Reasoning / knowledge:

- Max: Intelligence Index v4.3.2 **52**, Humanity's Last Exam **53%**, CritPt **32%**, AA-Omniscience **42 index points**.
- Exact-model GPQA Diamond and AIME: no verified public score found in the sources used here. Omniscience index points are not accuracy or hallucination percentages.

Coding:

- Max: **Terminal-Bench 4.0 56%**, **SciCode 54%**. The terminal-suite version differs from the repository's older 2.1 anchor.
- Exact-model SWE-bench Verified, LiveCodeBench, and Vibe Code Bench: no verified public score found in the sources used here.

Long context:

- Max: **AA-LCR v1.1 83%**, **GDP.pdf 31%**. Neither is evidence of 98% retrieval across the entire million-token window.

All numerical results above come from the [independent Max-effort comparison](https://artificialanalysis.ai/models/comparisons/gpt-6-1-sol-vs-gpt-6-astra). They should not be represented as default-medium results or averaged across incompatible benchmark scales.

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong automation and professional-work results; harness dependence limits generalization.
- **Reasoning: 94/100.** HLE and CritPt support frontier reasoning, with incomplete coverage of older anchors.
- **Context window: 95/100.** Verified 1.05M capacity without evidence supporting perfect long-window retrieval.
- **Multimodal: 70/100.** Image and text understanding; text-only native output limits breadth.
- **Coding: 92/100.** Strong newer terminal-suite and scientific-coding results, without transferring scores between suite versions.
- **Cost efficiency: 75/100.** $2/$10 pricing and inexpensive cache reads offer strong value; long prompts and reasoning tokens increase cost.
- **Overall Score: 89/100.** Half-up mean: (92 + 94 + 95 + 70 + 92)/5 = 88.6; cost excluded. Best suited to demanding tool-assisted professional work.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
