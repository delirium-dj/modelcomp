# Step 5 Preview — findings by GPT 6 Astra

- Source: StepFun / Step 5 Preview
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Step 5 Preview (Free route available).
- **Short description:** General-purpose reasoning model aimed at sustained agentic coding and professional work.
- **Provider / access:** StepFun API and OpenRouter `stepfun/step-5-preview`; OpenCode Zen `opencode/step-5-preview-free` uses `https://opencode.ai/zen/v1/chat/completions`. [Zen documentation](https://opencode.ai/docs/zen/)
- **Release / knowledge:** Public preview in September 2026; exact original release day and knowledge cutoff not verified. October 8 is OpenRouter's listing date, not necessarily the model release.
- **Context window:** 1M tokens; reliable separate maximum output not established.
- **Modalities:** Text/image input and text output; reasoning supported. Agentic tool use advertised; exact JSON-schema guarantees unverified. [Artificial Analysis](https://artificialanalysis.ai/models/step-5)
- **Pricing (2026-10-08):** Zen route temporarily free, including cache reads; provider states zero retention and no training on submitted data. Paid OpenRouter route: $1 input / $2.70 output / $0.05 cached input per million tokens. [Zen](https://opencode.ai/docs/zen/), [OpenRouter](https://openrouter.ai/stepfun/step-5-preview/)
- **Architecture:** Sparse MoE, 600B total / 27B active parameters per provider listing. Open-weight release is advertised as forthcoming; no verified released license is assumed. [OpenRouter](https://openrouter.ai/stepfun/step-5-preview/), [StepFun](https://www.stepfun.com/)

### Raw benchmarks found

- **Reasoning:** Artificial Analysis Intelligence Index **44**, displayed rank **40/226**, reasoning variant; page identifies index v4.3.2. This is a composite, not GPQA or HLE accuracy. [Evaluator](https://artificialanalysis.ai/models/step-5)
- **Agent / tool use:** Terminal-Bench, Tau, GDPval, Claw and MCP: no verified public score found in accessible primary-source text.
- **Coding:** SWE-bench, LiveCodeBench and SciCode: no verified public score found in accessible primary-source text.
- **Long context:** No verified retrieval score found; advertised window does not establish reliable retrieval throughout it.
- **Other reasoning:** GPQA, HLE, CritPt and Omniscience: no verified public score found. Charts unavailable in the retrieved evaluator page were not reconstructed from secondary summaries.

### Normalized scores (1–100)

These are conservative interpretations; tool and coding scores use the composite evaluation as a provisional proxy and have lower confidence than the specifications.

- **Tool use: 72/100.** Agentic product positioning and the verified composite support usefulness, but absent task-specific results cap confidence.
- **Reasoning: 77/100.** Intelligence Index 44 supports strong general reasoning below the rubric's frontier tier.
- **Context window: 95/100.** Verified 1M capacity reaches the top capacity band; missing retrieval evidence prevents 100.
- **Multimodal: 65/100.** Text/image understanding with text output; broader native modalities not verified.
- **Coding: 74/100.** Composite evaluation includes coding, but no separate verified coding accuracy supports a higher score.
- **Cost efficiency: 100/100.** Verified temporary free Zen route; paid-route economics differ.
- **Overall Score: 77/100.** Half-up mean: (72 + 77 + 95 + 65 + 74) / 5 = 76.6; cost excluded. Promising for large-context agent workflows, with provisional domain scores.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores. No local performance tests.

