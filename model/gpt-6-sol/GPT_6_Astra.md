# GPT-6 Sol — findings by GPT 6 Astra

- Source: OpenAI / `gpt-6-sol`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

GPT-6 Sol is a proprietary coding and agent model, distinct from the newer GPT-6.1 Sol. The API specifies **1,050,000 context tokens**, **128,000 maximum output tokens**, and an **April 20, 2026** knowledge cutoff. Reasoning effort ranges from none through max; medium is the default. The Responses API supports built-in tools and functions; Chat Completions function calling requires reasoning effort none. Parameters are undisclosed. [Model documentation](https://developers.openai.com/api/docs/models/gpt-6-sol).

Released September 22, 2026, it accepts text/images and returns text. A September 25 update corrected image encoding affecting visual tasks, so evaluations can depend on deployment date. [API changelog](https://developers.openai.com/api/docs/changelog).

Standard rates for prompts up to 272K input tokens are **$2 input, $0.20 cached input, and $10 output** per million tokens. The long-context tier is **$4/$0.40/$15** respectively. Tool charges and reasoning consumption are additional determinants of task cost. [Official pricing](https://developers.openai.com/api/docs/pricing?tab=suite).

### Raw benchmarks found

Agent / tool use:

- **Max effort:** **AA-Briefcase v1.1 1480**, **GDPval-AA v2.1 1509**, **AutomationBench-AA 62%**.

Reasoning / knowledge:

- **Intelligence Index v4.3.2 48**, **Humanity's Last Exam 48%**, **CritPt 31%**, **AA-Omniscience 27 index points**.
- GPQA/AIME: no verified public score found in the sources used here.

Coding:

- **SciCode 58%**, **Terminal-Bench 4.0 44%**.
- SWE-bench Verified, DeepSWE, and LiveCodeBench: no verified public score found.

Long context:

- **AA-LCR v1.1 84%**, **GDP.pdf 25%**. Maximum-context MRCR/RULER retrieval: no verified public score found.

All numerical evaluations use the max-effort column of one [Artificial Analysis comparison](https://artificialanalysis.ai/models/comparisons/gpt-6-sol-high-vs-gpt-6-sol). Default medium effort is not represented by these scores. Different index and terminal benchmark versions cannot be compared directly.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong automation and professional-work evaluations, below leading agents in breadth.
- **Reasoning: 91/100.** Strong difficult science and HLE performance at maximum effort.
- **Context window: 95/100.** Verified 1.05M capacity with useful long-context reasoning; no near-perfect retrieval claim.
- **Multimodal: 70/100.** Text and image input with text output; generated media requires separate tools.
- **Coding: 89/100.** Strong scientific and newer terminal performance, with missing repository-suite evidence.
- **Cost efficiency: 78/100.** Competitive $2/$10 pricing, reduced by long-context premiums and max-effort usage.
- **Overall Score: 86/100.** Half-up mean: (87 + 91 + 95 + 70 + 89)/5 = 86.4; cost excluded. Best fit is complex coding and scientific agent work with adjustable reasoning cost.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
