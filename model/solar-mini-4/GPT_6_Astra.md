# Solar Mini 4 — findings by GPT 6 Astra

- Source: Solar Mini 4 public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- Provider: Upstage; API `solar-mini4`; proprietary MoE, 35B total/3B active parameters. Training cutoff unverified.
- Text input/output; 512K context, 128K output; configurable reasoning and parallel tools. [Vendor launch](https://www.upstage.ai/blog/en/solar-mini-4).
- Standard USD/M tokens: $0.10 input, $0.01 cached, $0.40 output. Pricing page lists October 8 promotion $0.03/$0.003/$0.12; promotional terms may change. [API pricing](https://www.upstage.ai/pricing/api).

### Raw benchmarks found

Vendor reports AA Index v4.3.2 24.1, AutomationBench-AA 22.3%, separate tau3-Banking 47.2, AA-LCR 83.3%, SciCode 47.6%, HLE 25.8%. These are vendor-reported results, not local replications; banking-only tau3 is not a full multi-domain aggregate. GPQA, SWE-bench and Terminal-Bench: no verified public score found. [Benchmark announcement](https://www.upstage.ai/blog/en/solar-mini-4).

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong banking result, moderated by narrower coverage and automation result.
- **Reasoning: 68/100.** HLE is promising; aggregate intelligence remains modest.
- **Context window: 89/100.** 512K capacity and strong long-context reasoning support this tier.
- **Multimodal: 15/100.** Verified interface is text-only.
- **Coding: 81/100.** SciCode supports a strong provisional score; broader software-agent tests missing.
- **Cost efficiency: 98/100.** Very inexpensive standard pricing; temporary discount not needed for score.
- **Overall Score: 64/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

