# Claude Opus 4.6 — findings by GPT 6 Astra

- Source: Anthropic / `claude-opus-4-6`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

Claude Opus 4.6 is Anthropic's proprietary reasoning model released February 5, 2026, for coding, analysis, and computer-assisted work. Its API ID is `claude-opus-4-6`. Current documentation lists a 1M-token context, 128K output, adaptive thinking with high default effort, text/image input, and text output. The reliable knowledge cutoff is May 2025; the training-data cutoff is August 2025. These are different claims. Parameter counts and downloadable weights are not disclosed. [Official model documentation](https://platform.claude.com/docs/en/models/opus-4-6/overview).

Standard API prices are $5 input/$25 output per million tokens. The full 1M window is now generally available at standard pricing; launch-era beta and long-context surcharges are outdated for the Claude Platform. Hosted access and Claude subscriptions have separate billing and limits. No perpetual free API or free Zen ID was verified. [Context availability and pricing update](https://claude.com/blog/1m-context-ga).

### Raw benchmarks found

Agent / tool use:

- Anthropic reports **OSWorld 72.7%** and **BrowseComp 83.7%**, with benchmark-specific agent tools and harnesses.
- **Terminal-Bench 2.0: 65.4%**, evaluated with adaptive thinking at max effort. This must not be relabeled Terminal-Bench 2.1 or 4.0.
- Exact-model Tau3-Banking, ClawProBench, and SWE Atlas Codebase QnA: no verified public score found in the sources used here.

Reasoning / knowledge:

- Anthropic's comparison reports **GPQA Diamond 91.3%**, **HLE without tools 40.0%**, and **HLE with tools 53.3%**. Tool-assisted and unassisted HLE are separate operating conditions.
- Exact-model CritPt, Omniscience accuracy/hallucination rate, and a fully measured current AA index: no verified public score found in the sources used here.

Coding:

- **SWE-bench Verified 80.8%**, **SWE-bench Pro 53.4%**, and **SWE-bench Multilingual 77.8%** are reported in Anthropic's later comparison table for Opus 4.6.
- Exact-model LiveCodeBench, SciCode, and Vibe Code Bench: no verified public score found in the sources used here.

These results are vendor measurements, sourced from the [Opus 4.6 system card](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf) and its explicitly labeled column in the [Opus 4.7 system card](https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf). Later comparison tables can reflect evaluation updates; they do not establish a controlled improvement over launch results.

Long context:

- **MRCR v2, eight needles at 1M tokens: 76%**, according to the [launch report](https://www.anthropic.com/news/claude-opus-4-6). This supports useful long-context retrieval but falls well below a near-perfect retrieval claim. No exact-model RULER score was verified here.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong computer use and browsing, with harness-dependent vendor evidence.
- **Reasoning: 89/100.** Strong GPQA and unassisted HLE; tool-assisted gains are kept distinct.
- **Context window: 95/100.** Verified 1M window, capped below 100 by imperfect measured retrieval.
- **Multimodal: 70/100.** Image and text understanding, without native audio or visual output.
- **Coding: 84/100.** Strong repository repair, with lower performance on harder Pro tasks.
- **Cost efficiency: 50/100.** $5/$25 is costly relative to newer alternatives despite removal of the long-context premium.
- **Overall Score: 84/100.** Half-up mean: (82 + 89 + 95 + 70 + 84)/5 = 84; cost excluded. Suited to complex coding and document analysis when its behavior fits the workflow.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
