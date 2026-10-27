# GPT-5.2-Codex — findings by GPT 6 Astra

- Source: OpenAI / `gpt-5.2-codex`
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

[OpenAI introduced GPT-5.2-Codex](https://openai.com/index/introducing-gpt-5-2-codex/) on **December 18, 2025**, initially in paid Codex surfaces, with later API availability. January 2026 gateway dates are not its original release date. It is a proprietary coding-specialized model with undisclosed parameter count, improved Windows operation and context compaction.

[Current official API documentation](https://developers.openai.com/api/docs/models/gpt-5.2-codex) marks it **Shut down**. This report evaluates historical capabilities, not current official availability. Recorded specs: **400K total context, 272K maximum input, 128K output**, August 31, 2025 knowledge cutoff, text/image input and text output; low/medium/high/xhigh reasoning, functions, structured outputs, web search and hosted shell. Historical API was Responses, not Chat Completions. No Zen Free ID verified.

Historical listed price: **$1.75 input/$0.175 cached input/$14 output per million tokens**, per that official page. Subscription allowances and third-party availability are separate; the price listing does not establish a live official route today.

### Raw benchmarks found

[BenchmarkList's exact-model evidence](https://benchmarklist.com/models/openai-gpt-5.2-codex/) includes the following independent results, with distinct harnesses/snapshots retained:

- Agentic: AA Terminal-Bench **Hard 37.1%**, Tau2 **Telecom 92.1%**, historical GDPval-AA **1290 Elo**; APEX-Agents **42.2% rubric mean / 27.6% pass@1** in ReAct, versus **42.5% / 27.2%** in Loop. JobBench **26.0%** highlights difficult occupational workflows.
- Reasoning: AA GPQA Diamond **89.9%**; July composite HLE **33.5%**, LCR **75.7%**, CritPt **8.7%**, Omniscience **−2.48**, index **40.14**. October standalone HLE **35.7%** and LCR **82.3%** are later snapshots. LiveBench **74.3%** is a separate aggregate. Do not blend index generations or infer these are ordinary GPT-5.2 results.
- Coding: SciCode **54.6%**; independently aggregated LiveCodeBench **88.0%** (high, standard error **0.94 points**, **$0.12/test**); Vibe Code Bench **v1.1 37.9%** (high, standard error **4.58 points**, **$4.15/test**). SWE-bench Verified **72.4%** in one harness versus **72.8%** in another; OpenHands reports its own **73.8%** SWE component, **35.9%** multimodal bug fixing and **58.3%** composite. These are not duplicate replications of one result.
- SWE-rebench **56.8%**, SEM **1.5 points**, pass@5 **64.3%**, **$0.42/problem**; SWE-bench Multilingual **66.3%**; APEX-SWE **40.3% pass@1 / 51.0% pass@3**.

The official announcement claims strong SWE-Pro and Terminal-Bench 2.0 performance but its numeric charts were not recovered as text; no fabricated values inserted. Terminal Hard is not TB2.0 or TB2.1. No verified exact-model Tau3-Banking, Claw-Eval, Toolathon or full-400K MRCR retrieval result found. Compaction extends workflow duration, not the physical token window. Design Arena evaluates generated designs, not native image comprehension; image support is instead verified by API documentation and the OpenHands multimodal task component.

### Normalized scores (1–100)

- **Tool use: 74/100.** GDPval 1290 and Tau2 Telecom 92.1% are useful, but Terminal Hard 37.1% and APEX/JobBench show substantial long-horizon failure.
- **Reasoning: 86/100.** GPQA 89.9%, HLE 33.5–35.7% and LCR 75.7–82.3% support strong reasoning below newer frontier references.
- **Context window: 80/100.** 400K total tier with explicitly separate 272K input cap; no full-window near-perfect retrieval claim.
- **Multimodal: 67/100.** Image input and measured multimodal bug fixing, but text-only output and no native audio/video interface verified.
- **Coding: 82/100.** SciCode 54.6%, LCB 88% and multiple repository tests support strong coding; Vibe v1.1 37.9% caps end-to-end application reliability.
- **Cost efficiency: 65/100.** Historical $1.75/$14 pricing with cached-input discount; current official route is shut down.
- **Overall Score: 78/100.** Half-up mean of (74 + 86 + 80 + 67 + 82)/5 = 77.8; a historical coding-agent reference.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Three fresh web searches, publisher/API documentation and independently aggregated exact-model measurements. Scores are normalized interpretations.
