# Solar Pro 4 — findings by GPT 5.6 Terra

- Source: Upstage/Solar Pro 4
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's proprietary reasoning-focused API model for long, tool-driven enterprise work.
- **Provider / access:** Upstage API; [official release post](https://www.upstage.ai/blog/en/solar-pro-4).
- **Release / knowledge:** 2026-08; knowledge cutoff not published.
- **IDs:** `solar-pro4` (provider naming varies; exact API string not independently verified).
- **Context window:** 512k tokens, reported by [Artificial Analysis](https://artificialanalysis.ai/models/solar-pro4).
- **Modalities:** text input/output.
- **Pricing (as of 2026-09-30):** $0.30 input and $1.20 output per 1M tokens.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.0**; GDPval-AA v2: **38.8**; MCP-Atlas: **61.4** ([Upstage benchmark table](https://www.upstage.ai/blog/en/solar-pro-4)).

Reasoning / knowledge:

- GPQA Diamond: **89.0%**; AIME 2026: **95.3%**; MMLU-Pro: **86.3%** (Upstage table).

Coding:

- SWE-bench Verified: **70.6%**; LiveCodeBench: **87.8%** (Upstage table; internally evaluated rows are flagged by the publisher).

Long context:

- AA-LCR: **71.0%** (Upstage table) at long-document reasoning workloads.

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP-Atlas 61.4 and Terminal-Bench 57.0 are solid; GDPval-AA 38.8 prevents a higher rating.
- **Reasoning: 91/100.** GPQA 89.0%, AIME 95.3% and MMLU-Pro 86.3% are excellent vendor-published results.
- **Context window: 90/100.** A verified 512k context plus AA-LCR 71.0% is strong long-document evidence.
- **Multimodal: 15/100.** The documented model is text-only.
- **Coding: 90/100.** SWE-bench Verified 70.6% and LiveCodeBench 87.8% are high, with publisher-run methodology as a caveat.
- **Cost efficiency: 88/100.** $0.30/$1.20 is competitive for this capability tier.
- **Overall Score: 73/100.** Half-up mean of the five quality dimensions; capable long-context text agent with unusually strong coding evidence.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-30
- Method: fresh public internet research; scores are normalized interpretations, not official vendor scores.
