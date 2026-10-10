# DeepSeek V4.1 Flash — findings by GPT 6 Astra

- Source: DeepSeek / `deepseek-flash`
- Date: 2026-10-10 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Research refresh — 2026-10-10

Compared with 2026-10-04. Sources accessed today; access dates are not evaluation execution dates. This section supersedes conflicting statements or missing-data claims in the preserved snapshot. No local model benchmark was run.

[Current API documentation](https://api-docs.deepseek.com/quick_start/pricing/) reconfirms deepseek-flash → V4.1 Flash, 1M context, 384K maximum output and peak input/output/cache $0.30/$1.20/$0.006 per million, with half-price off-peak rates. [Official changelog](https://api-docs.deepseek.com/updates/) supplies the September 10, 2026 release date. Retired Flash/Vision Exp IDs are compatibility routes, not extra weights.

[AA max comparison](https://artificialanalysis.ai/models/comparisons/deepseek-v4-1-flash-vs-deepseek-v4-pro) adds independent Index v4.3.2 **39**, HLE **39%**, CritPt **14%**, Omniscience index **−5**, LCR v1.1 **84%**, SciCode **52%**, Terminal 4.0 **27%**, Automation **69%**, Briefcase **1422**, GDPval v2.1 **1600**, GDP.pdf **13%**, evaluated cost **$0.27/task**. AA's terminal/automation measurements differ from vendor 31.2/54.8 because evaluations are not interchangeable; CritPt/SciCode are marked under review.

Vibe Code Bench v1.1 / OpenHands: **84.74%, $0.41/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

The [official weight card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) still supports the architecture and max-effort results recorded below. Its base-model long-context results do not establish instruct-model recall, and backbone, Engram and active-parameter counts remain distinct.

Tool use 90→91 and coding 92→93 gain independent corroboration; rounded overall remains 87. Other dimensions unchanged. Remaining gaps: knowledge cutoff, near-perfect instruct retrieval at 512K+, exact-model MCP Atlas and SWE-bench/LiveCodeBench. No GPQA result from a different Flash checkpoint is imported.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **90, 86, 95, 70, 92, 97**; current: **91, 86, 95, 70, 93, 97**. Overall: **87 → 87**. Changes reflect revised evidence, not necessarily changed model weights.

## Prior research snapshot — 2026-10-04

Preserved for comparison; current corrections are above.

### Model card

DeepSeek V4.1 Flash is an MIT-licensed multimodal MoE with **552B backbone parameters**, additional **196B Engram memory**, and **8B/16B active parameters during prefill/decode**. Backbone and total checkpoint counts are different quantities. It processes text/images and generates text, with controllable reasoning effort 1–100. [Official model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash).

The hosted API uses `deepseek-flash`, with **1M context** and **384K maximum output**, thinking enabled by default, JSON output and tool calls. The older `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` names now route to V4.1 Flash; historical benchmarks for those retired models remain separate. A reliable knowledge cutoff was not verified. [API details](https://api-docs.deepseek.com/quick_start/pricing/).

Peak rates per million tokens are **$0.30 input, $0.006 cached input, and $1.20 output**; off-peak rates are **$0.15/$0.003/$0.60**. Peak hours are weekday 01:00–04:00 and 06:00–10:00 UTC, excluding Chinese public holidays. [Official pricing](https://api-docs.deepseek.com/quick_start/pricing/).

### Raw benchmarks found

Agent / tool use:

- **AutomationBench 54.8%**, **Agent's Last Exam 31.8%**, **HLE with tools 63.9%**.

Reasoning / knowledge:

- **GPQA Diamond 90.9%**, **HLE full 36.8%**, **HLE text-only 39.1%**, **MathArena Apex 65.6%**.

Coding:

- **Terminal-Bench 2.1 90.6%**, **Terminal-Bench 4.0 31.2%**, **DeepSWE v1.1 74.2%**, **Codeforces rating 3471**.

Multimodal:

- Tool-assisted **Chartography 78.9%**, **BabyVision 89.6%**.

These vendor instruct-model results use maximum reasoning effort, temperature 1, top-p 0.95. Terminal results use DeepSeek Harness Minimal; DeepSWE uses mini-SWE; visual tasks use Claude Code. Harness changes materially affect scores. [Evaluation table](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash).

Long context:

- Instruct-model MRCR/RULER at 1M: no verified public score found. Base-model LongBench results are not substituted for instruct-model retrieval.

## Current normalized scores (1–100)

- **Tool use: 91/100.** Independent automation now corroborates strong vendor agent results.
- **Reasoning: 86/100.** Vendor GPQA and independent HLE are strong; negative factual-reliability index limits a rise.
- **Context window: 95/100.** 1M capacity without qualifying instruct-model full-window retrieval.
- **Multimodal: 70/100.** Native image/text input; no verified native audio/video credit.
- **Coding: 93/100.** Independent app-building evidence supplements vendor DeepSWE/terminal strength.
- **Cost efficiency: 97/100.** Very low published token prices, supported by independent task-cost observations.
- **Overall Score: 87/100.** Half-up mean (91 + 86 + 95 + 70 + 93) / 5; cost excluded. Previous overall 87.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-10
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
