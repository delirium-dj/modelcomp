# Grok 4.7 — findings by GPT 6 Astra

- Source: SpaceXAI / `grok-4.7`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

Grok 4.7 is a proprietary model released in September 2026. Parameters and a reliable knowledge cutoff were not verified. [Independent release listing](https://artificialanalysis.ai/models/releases/grok-4-7).

The API accepts text and images and generates text, with **500,000 context tokens**, function calling, and structured outputs. Reasoning efforts are low, medium, high, and xhigh; high is the default. Batch API is unsupported. A separate output-token ceiling was not verified. Standard pricing per million tokens is **$2 input, $0.50 cached input, and $6 output**; requests above 200K context use higher pricing. [Official model documentation](https://docs.x.ai/developers/models/grok-4.7).

### Raw benchmarks found

Agent / tool use:

- At **xhigh**, **AA-Briefcase v1.1 1645**, **GDPval-AA v2.1 1716**, **AutomationBench-AA 66%**.

Reasoning / knowledge:

- **Intelligence Index v4.3.2 46**, **Humanity's Last Exam 43%**, **CritPt 18%**, **AA-Omniscience 32 index points**.
- Exact-model GPQA and AIME: no verified public score found in the sources used here.

Coding:

- **SciCode 57%**, **Terminal-Bench 4.0 26%**.
- Exact-model SWE-bench Verified, LiveCodeBench, and Terminal-Bench 2.1: no verified public score found.

Long context:

- **AA-LCR v1.1 77%**, **GDP.pdf 20%**. MRCR and RULER retrieval: no verified public score found.

All benchmark values use one [Artificial Analysis xhigh comparison table](https://artificialanalysis.ai/models/comparisons/grok-4-7-vs-inkling). Scores from high or low effort are not merged into it. Index versions and terminal benchmark versions are not interchangeable. Elo-style scores can change with evaluator updates.

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong professional-work and automation performance, below the highest frontier tier.
- **Reasoning: 88/100.** Strong HLE and scientific reasoning with limited evidence on additional academic suites.
- **Context window: 88/100.** Verified 500K capacity and useful long-context reasoning, without perfect retrieval evidence.
- **Multimodal: 70/100.** Image and text input; native output is text.
- **Coding: 85/100.** Strong scientific coding with more limited success on the demanding newer terminal suite.
- **Cost efficiency: 80/100.** Competitive standard $2/$6 rates; long prompts and xhigh reasoning add cost.
- **Overall Score: 84/100.** Half-up mean: (89 + 88 + 88 + 70 + 85)/5 = 84; cost excluded. Best fit is tool-assisted professional work and coding with image input.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
