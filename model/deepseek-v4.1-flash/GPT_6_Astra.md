# DeepSeek V4.1 Flash — findings by GPT 6 Astra

- Source: DeepSeek / `deepseek-flash`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

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

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong terminal, automation, and research-agent results, subject to scaffold dependence.
- **Reasoning: 86/100.** Strong scientific and mathematical performance, with a lower standalone HLE ceiling.
- **Context window: 95/100.** Verified 1M capacity, without verified near-perfect full-window retrieval.
- **Multimodal: 70/100.** Native image understanding and text output; audio/video capability was not verified.
- **Coding: 92/100.** Frontier-level DeepSWE and Terminal-Bench 2.1 results, tempered by the harder 4.0 result.
- **Cost efficiency: 97/100.** Very low peak pricing and further off-peak reductions, with unusually inexpensive cached input.
- **Overall Score: 87/100.** Half-up mean: (90 + 86 + 95 + 70 + 92)/5 = 86.6; cost excluded. Best fit is economical long-running coding and image-aware agent work.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
