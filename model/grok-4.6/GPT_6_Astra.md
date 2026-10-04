# Grok 4.6 — findings by GPT 6 Astra

- Source: SpaceXAI / `grok-4.6`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

Grok 4.6 is SpaceXAI's proprietary model for coding, agents, and knowledge work, released in August 2026. It is a distinct model from Grok 4.5 and the later 4.7. Parameter counts and a reliable knowledge cutoff were not verified. [Launch announcement](https://x.ai/news/grok-4-6).

The API identifier is `grok-4.6`. It accepts text and images and returns text, supports function calling and structured outputs, and has a **500,000-token context window**. Reasoning effort supports low, medium, high, and xhigh; high is the default. A separate maximum output limit was not verified on the model page. Batch processing is listed as unsupported. [Official model documentation](https://docs.x.ai/developers/models/grok-4.6).

Standard prices per million tokens are **$2 input, $0.50 cached input, and $6 output**. At the 200K long-context threshold, the full request uses $4/$1/$12 respectively. Tool calls can incur additional charges. These are paid API rates; no perpetual free Zen ID was verified. [Official pricing](https://docs.x.ai/developers/pricing).

### Raw benchmarks found

Agent / tool use:

- At **high effort**, Artificial Analysis reports **AA-Briefcase v1.1 1540**, **GDPval-AA v2.1 1609**, and **AutomationBench-AA 67%**.
- Exact-model Terminal-Bench 2.1, Tau3-Banking, ClawProBench, and MCP-Atlas: no verified public score found in the sources used here.

Reasoning / knowledge:

- High effort: **Intelligence Index v4.3.2 44**, **Humanity's Last Exam 43%**, **CritPt 17%**, **AA-Omniscience 30 index points**.
- Exact-model GPQA Diamond and AIME: no verified public score found in the sources used here. Omniscience is not an accuracy percentage.

Coding:

- High effort: **SciCode 56%**, **Terminal-Bench 4.0 21%**.
- Exact-model SWE-bench Verified, LiveCodeBench, and Vibe Code Bench: no verified public score found in the sources used here. Terminal-Bench versions must be kept separate.

Long context:

- High effort: **AA-LCR v1.1 80%**, **GDP.pdf 17%**. No verified public MRCR or RULER retrieval score found.

All benchmark values above are taken from one [Artificial Analysis high-effort comparison](https://artificialanalysis.ai/models/comparisons/grok-4-6-vs-gpt-5-6-sol-low). Other cached comparison pages give slightly different live Elo values; this report preserves one coherent table rather than combining maxima. The launch-era Intelligence Index used a different version and cannot be compared numerically with v4.3.2.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong automation and professional-work results; newer terminal performance limits breadth.
- **Reasoning: 87/100.** Strong HLE and scientific reasoning, without demonstrating the highest frontier ceiling.
- **Context window: 88/100.** Verified 500K capacity and useful long-context reasoning; no near-perfect retrieval claim.
- **Multimodal: 70/100.** Image and text input, with text-only native output.
- **Coding: 84/100.** Strong SciCode, tempered by a lower result on the newer terminal suite.
- **Cost efficiency: 80/100.** Competitive $2/$6 rates, reduced by the long-context multiplier and reasoning usage.
- **Overall Score: 83/100.** Half-up mean: (88 + 87 + 88 + 70 + 84)/5 = 83.4; cost excluded. Best fit is tool-assisted knowledge work at moderate prompt sizes.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
