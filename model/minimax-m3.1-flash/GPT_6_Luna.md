# MiniMax M3.1 Flash — findings by GPT-6 Luna

- Source: MiniMax/MiniMax-M3.1-Flash
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash
- **Short description:** MiniMax's open-weight, reasoning-capable multimodal MoE model for agentic work, coding, computer use, and long-context tasks. The tracked `minimax-m3.1-flash-preview` identity resolves to the officially documented `MiniMax-M3.1-Flash`; no separate preview checkpoint was established.
- **Provider / access:** MiniMax API at `https://api.minimax.io/v1/chat/completions` (OpenAI-compatible Chat Completions) or `https://api.minimax.io/anthropic/v1/messages` (Anthropic-compatible Messages). Exact API model ID: `MiniMax-M3.1-Flash`.
- **Release / knowledge:** Official rollout 2026-10-19; no knowledge-cutoff date verified.
- **IDs:** Tracked subject `minimax-m3.1-flash-preview`; official API ID `MiniMax-M3.1-Flash`; Hugging Face weights `MiniMaxAI/MiniMax-M3.1-Flash`.
- **Context window:** Up to 1,000,000 tokens, as documented by MiniMax; usable length depends on serving configuration. Maximum output limit not verified.
- **Modalities:** Text, image, and video input; text output. Reasoning is enabled by default, tunable via `effort` / `reasoning_effort`; tool calls are supported. JSON-mode support not verified.
- **Pricing (as of 2026-11-01):** Paid API: $0.15 input / $0.60 output / $0.015 cached input per 1M tokens, per MiniMax pricing. API rates can change; provider-specific pricing may differ.
- **Architecture:** Public weights under the MiniMax Community License; native multimodal mixture-of-experts, approximately 428B total / 23B active parameters. MiniMax Sparse Attention and DSpark speculative decoding are described in the model card/paper.

### Raw benchmarks found

> Reported scores are kept distinct where benchmark names or harnesses differ. MiniMax's model-card figures are vendor-reported; Artificial Analysis results are its own evaluations. BenchLM is a secondary aggregator with partial coverage, not a single benchmark run.

Agent / tool use:

- Automation-Bench v1.0.6: **62.8** (MiniMax model card; vendor-reported).
- BankerToolBench: **76.2** (MiniMax announcement/model card; vendor-reported).
- AutomationBench-AA: **72.5%** (Artificial Analysis evaluation).
- OSWorld 2.0: **61.7**; Agents' Last Exam: **29.6** (MiniMax announcement/model card; vendor-reported).
- Terminal-Bench 4.0: **38.1%** on the published model card versus **25.8%** in Artificial Analysis' evaluation; these are not treated as interchangeable because the public pages do not establish identical harness/settings.
- BenchLM overall: **59.71/100, #54 of 1,004**, with 30/724 benchmarks covered; this is a partial-coverage aggregate, not a raw capability score.

Reasoning / knowledge:

- Humanity's Last Exam without tools: **43.4%** (MiniMax model card; vendor-reported).
- AA-HLE: **48.0%**; AA-LCR: **79.7%**; CritPt: **22.3%** (Artificial Analysis evaluations).
- Artificial Analysis Intelligence Index: **28.9** (displayed rounded to 29; AA v5.0).
- AA-Omniscience accuracy / hallucination rate: **45.1% / 93.7%** (Artificial Analysis; the high hallucination rate is a material reliability caveat).

Coding:

- DeepSWE v1.1: **73.7%**; NL2Repo-Bench: **61.2**; PostTrainBench v1.1: **39.3%** (MiniMax model card; vendor-reported).
- AA-SciCode: **53.4%** (Artificial Analysis).
- Terminal-Bench 4.0: **38.1%** in the published card versus **25.8%** in Artificial Analysis (harness/settings caveat above).

Long context:

- LOCA-Bench 256K: **60.3** (MiniMax model card; vendor-reported). AA-LCR is **79.7%**. The 1M window is a documented capacity; no verified retrieval result at 512K or 1M was found.

Multimodal:

- BabyVision with tools: **91.0%**; CharXiv RQ: **82.5%** (MiniMax model card; vendor-reported).
- AA-MMMU-Pro: **79.1%** (Artificial Analysis evaluation).

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong agentic evidence across AutomationBench-AA (72.5%), BankerToolBench (76.2), and OSWorld 2.0 (61.7); capped by the Terminal-Bench 4.0 discrepancy (38.1% vendor versus 25.8% AA) and lack of a verified Claw-Eval result.
- **Reasoning: 83/100.** AA Index 28.9, HLE results of 43.4–48.0%, and AA-LCR 79.7% support solid reasoning; AA-Omniscience accuracy 45.1% and hallucination rate 93.7% temper confidence.
- **Context window: 96/100.** The documented 1M-token window earns the top tier, and LOCA-Bench 256K (60.3) plus AA-LCR (79.7%) show retrieval capability; no 512K/1M retrieval validation justifies a 100.
- **Multimodal: 84/100.** Officially supports image and video input, with BabyVision 91.0%, CharXiv RQ 82.5%, and AA-MMMU-Pro 79.1%; capped because outputs are text-only and audio input is not documented.
- **Coding: 86/100.** DeepSWE v1.1 73.7% is near the methodology's frontier reference, with NL2Repo-Bench 61.2 and AA-SciCode 53.4%; lower independent Terminal-Bench 4.0 result limits the score.
- **Cost efficiency: 98/100.** $0.15/$0.60 per 1M input/output tokens with $0.015 cached input is exceptionally low for the documented capability tier, though not free.
- **Overall Score: 87/100.** Half-up mean of the five quality dimensions (87 + 83 + 96 + 84 + 86 = 436; 436/5 = 87.2); best fit is low-cost agentic coding and multimodal long-context work where the 1M capacity matters.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Fresh public web research across official MiniMax documentation/model materials and independent evaluation sources; conflicting Terminal-Bench 4.0 values are disclosed rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMax M3.1 Flash announcement and vendor benchmark results](https://www.minimax.io/blog/minimax-m31f)
  - [MiniMax API model invocation, context, modalities, and exact API ID](https://platform.minimax.io/docs/guides/text-generation)
  - [MiniMax API pricing](https://platform.minimax.io/docs/guides/pricing)
  - [MiniMax M3.1 Flash model card, weights, license, and benchmark table](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)
  - [Artificial Analysis independent benchmark, Intelligence Index, and model specifications](https://artificialanalysis.ai/models/minimax-m3-1-flash)
  - [Artificial Analysis Terminal-Bench 4.0 evaluation](https://artificialanalysis.ai/evaluations/terminalbench-v4-0)
  - [Artificial Analysis LCR evaluation](https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning)
  - [BenchLM benchmark aggregation and coverage notes](https://benchlm.ai/models/minimax-m3-1-flash)
