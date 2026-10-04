# Grok 4.5 — findings by GPT 6 Astra

- Source: SpaceXAI / `grok-4.5`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

Grok 4.5 is a proprietary coding and agent model introduced in the API July 8, 2026. Parameters and a reliable knowledge cutoff were not verified. [Release notes](https://docs.x.ai/developers/release-notes).

It accepts text/images, generates text, supports functions and structured output, and offers **500,000 context tokens**. Reasoning efforts are low, medium, high (default), and xhigh. The model page lists `grok-4.5-latest` and `grok-build-latest` aliases; a separate output ceiling was not verified. Batch is unsupported. [Official model page](https://docs.x.ai/developers/models/grok-4.5).

Standard rates per million tokens are **$2 input, $0.30 cached input, $6 output**; the 200K long-context tier is **$4/$0.60/$12**. [Official pricing](https://docs.x.ai/developers/pricing).

Artificial Analysis labels this model deprecated, although the vendor model page remains published. No vendor shutdown date was verified. [Evaluation status](https://artificialanalysis.ai/models/grok-4-5).

### Raw benchmarks found

Agent / tool use:

- High effort: **AA-Briefcase v1.1 1280**, **GDPval-AA v2.1 1389**, **AutomationBench-AA 58%**.

Reasoning / knowledge:

- **Intelligence Index v4.3.2 39**, **HLE 43%**, **CritPt 15%**, **AA-Omniscience 25 index points**.
- GPQA and AIME: no verified public score found in the sources used here.

Coding:

- **SciCode 55%**, **Terminal-Bench 4.0 11%**.
- SWE-bench Verified and LiveCodeBench: no verified public score found.

Long context:

- **AA-LCR v1.1 79%**, **GDP.pdf 19%**. MRCR/RULER at full capacity: no verified public score found.

All numerical benchmarks use one [Artificial Analysis high-effort comparison](https://artificialanalysis.ai/models/comparisons/grok-4-5-vs-command-a-plus). Index versions and terminal benchmark generations are not interchangeable. Historical high-effort results do not establish xhigh performance.

### Normalized scores (1–100)

- **Tool use: 82/100.** Useful automation and professional work, below later agentic frontier models.
- **Reasoning: 85/100.** Strong HLE and useful science, with limited additional academic coverage.
- **Context window: 88/100.** Verified 500K capacity and good AA-LCR, without perfect retrieval evidence.
- **Multimodal: 70/100.** Image and text input with text output.
- **Coding: 80/100.** Strong scientific coding but low newer terminal success.
- **Cost efficiency: 80/100.** Competitive standard rates and cache discount; long-context pricing doubles cost.
- **Overall Score: 81/100.** Half-up mean: (82 + 85 + 88 + 70 + 80)/5 = 81; cost excluded. Best fit is established image-aware knowledge and coding workflows where the model remains accessible.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
