# Claude Sonnet 4.6 — findings by GPT 6 Astra

- Source: Anthropic / `claude-sonnet-4-6`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

Claude Sonnet 4.6 is a proprietary model released February 17, 2026, now active legacy, with retirement no sooner than February 17, 2027. The dateless API ID identifies a fixed snapshot. It provides **1M context**, **128K synchronous output**, text/image input and text output. Adaptive thinking defaults to high effort; extended thinking is deprecated. Reliable knowledge cutoff is **August 2025**, while training data extends through January 2026. Parameters are undisclosed. [Official specifications](https://platform.claude.com/docs/en/models/sonnet-4-6/overview).

Standard rates per million tokens are **$3 input / $15 output**, **$0.30 cache read**, with $3.75 five-minute and $6 one-hour cache writes. Batch input/output receive a 50% discount; the 300K batch-output allowance is beta and separate from synchronous limits. [Pricing and limits](https://platform.claude.com/docs/en/models/sonnet-4-6/overview).

### Raw benchmarks found

Agent / tool use:

- **Tau2 Retail 91.7%**, **Telecom 97.9%**, **MCP-Atlas 61.3%**, **OSWorld-Verified 72.5%**, launch **GDPval-AA 1633**.

Reasoning / knowledge:

- **GPQA Diamond 89.9%**, **ARC-AGI-2 58.3%**, **HLE 33.2% without tools / 49.0% with tools**.
- **AIME 2025 95.6%**, without tools; Anthropic explicitly raises possible contamination.

Coding:

- **SWE-bench Verified 79.6%**, **Terminal-Bench 2.0 59.1%**.

Multimodal / long context:

- **MMMU-Pro 74.5% without tools / 75.6% with tools**.
- **MRCR v2 eight-needle 90.3%**, max adaptive effort, 128K–256K prompt bin.

Source: [official system card, Tables 2.1.A and 2.16.A](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf). Most evaluations use adaptive thinking/max effort, with task-specific contexts and exceptions. The terminal section describes no thinking budget. SWE trial counts differ between summary footnote and detailed prose; the common reported score is preserved. Launch GDPval is not current GDPval-AA v2.1.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong service tools and computer use, with less dominant MCP performance.
- **Reasoning: 85/100.** Strong science and abstract reasoning; potentially contaminated mathematics is not the sole basis.
- **Context window: 95/100.** Verified 1M capacity and strong 256K retrieval; not a claim of perfect full-window accuracy.
- **Multimodal: 70/100.** Image understanding and text output with verified visual reasoning.
- **Coding: 81/100.** Strong repository repair, tempered by more modest terminal success.
- **Cost efficiency: 60/100.** $3/$15 standard pricing, improved by caching and batch use.
- **Overall Score: 82/100.** Half-up mean: (80 + 85 + 95 + 70 + 81)/5 = 82.2; cost excluded. Best fit is established long-context coding and image-aware agent workflows.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
