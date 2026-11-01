# Claude 3.5 Haiku — findings by GPT-6 Luna

- Source: Anthropic (`claude-3-5-haiku-20241022`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's proprietary, latency-oriented Claude 3-series model, released as a smaller and faster alternative for customer-facing work, extraction, and specialist sub-agent tasks. It is distinct from Claude 3 Haiku and Claude Haiku 4.5.
- **Provider / access:** Anthropic Messages API (`https://api.anthropic.com/v1/messages`) under snapshot ID `claude-3-5-haiku-20241022`; Anthropic retired this direct API route on 2026-02-19. As of this report date, Anthropic says the model remains available on partner-operated Amazon Bedrock and Google Cloud (Google-managed), which set their own lifecycle and billing. Bedrock model ID: `anthropic.claude-3-5-haiku-20241022-v1:0`; Google Cloud model ID: `claude-3-5-haiku@20241022`. These are not OpenAI Chat Completions IDs.
- **Release / knowledge:** Announced 2024-10-22 and made available in November 2024. Anthropic's model card lists a July 2024 knowledge cutoff.
- **IDs:** Anthropic `claude-3-5-haiku-20241022` (alias `claude-3-5-haiku-latest` before retirement); Amazon Bedrock `anthropic.claude-3-5-haiku-20241022-v1:0`; Google Cloud `claude-3-5-haiku@20241022`.
- **Context window:** 200,000 tokens; maximum output 8,192 tokens, per Anthropic's model reference. Context length is the published limit, not a measured retrieval-quality score.
- **Modalities:** Text and image input, text output; no verified audio/video input or non-text output. Image support followed the initial text-only release. Standard tool/function calls are supported; Claude 3.5 Haiku does not support extended thinking or the Claude 3.5 Sonnet computer-use feature.
- **Pricing (as of 2026-11-01):** Published standard partner rates are $0.80/MTok input and $4.00/MTok output; 5-minute cache writes $1.00, 1-hour cache writes $1.60, and cache reads $0.08/MTok on the Anthropic price schedule. Batch rates on Bedrock are $0.40/$2.00. Anthropic's first-party API is retired; partner billing and availability can vary. No OpenCode Zen Free ID was found.
- **Architecture:** Proprietary closed-weight model; parameter count and detailed architecture are not publicly disclosed.

### Raw benchmarks found

> Vendor-reported benchmarks below are kept distinct from later third-party evaluations and from the Anthropic model's API lifecycle. TAU-bench uses an agent/tool-calling setup; SWE-bench measures a model-plus-agent setup, not an isolated completion.

Agent / tool use:

- TAU-bench pass@1 Retail: **51.0%**; Airline: **22.8%** (Anthropic model card; same model-card evaluation; lower airline performance shows a large domain gap).
- Function/tool use is supported, but **no verified public score found** for Terminal-Bench, GDPval, Claw-Eval, Toolathon, or a standalone tool-call accuracy benchmark for this exact snapshot.

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (Anthropic model card, 0-shot CoT).
- MMLU: **80.9%** (Anthropic model card, 5-shot CoT; the separate 0-shot CoT result is 80.3%).
- MMLU-Pro: **65.0%** (Anthropic model card, 0-shot CoT).
- BIG-Bench Hard: **86.6%** (Anthropic model card, 3-shot CoT); MATH: **69.2%** (0-shot CoT); DROP: **83.1 F1** (3-shot).
- Artificial Analysis Intelligence Index, HLE, and CritPt: **no verified public score found** in the sources checked for this exact model ID.

Coding:

- SWE-bench Verified: **40.6%** (Anthropic-reported agentic evaluation; results depend on the provided agent scaffold).
- HumanEval: **88.1%** (Anthropic model card, 0-shot).
- Anthropic's separate internal agentic coding evaluation: **74% of problems solved**; this is a vendor-defined evaluation and is not directly interchangeable with SWE-bench.
- LiveCodeBench, SciCode, Vibe Code Bench, and SWE-Pro: **no verified public score found** for this exact model ID.

Long context:

- Published context limit: **200K tokens**. MRCR, RULER, GraphWalks, and other long-context retrieval quality: **no verified public score found** for this exact model ID.

Multimodal:

- Anthropic confirms image input support after launch, but its October 2024 model card explicitly says it did not report multimodal evaluation results for Haiku 3.5. MMMU / image-understanding benchmark: **no verified public score found** in the primary source.

### Normalized scores (1–100)

- **Tool use: 60/100.** TAU-bench reaches 51.0% in retail but only 22.8% in airline; the score is capped by the pronounced domain gap and lack of current independent tool-agent evaluations.
- **Reasoning: 54/100.** GPQA Diamond is 41.6%, while MMLU is 80.9% and MMLU-Pro is 65.0%; the score is capped by the relatively low graduate-science result and absent HLE / Intelligence Index / long-context evidence.
- **Context window: 70/100.** The published 200K window maps to the methodology's 70-point baseline for 200K; the 8,192-token output ceiling and absence of retrieval-quality measurements are caveats, not demonstrated long-context performance.
- **Multimodal: 65/100.** Image input is supported, placing it in the image-input tier; no model-specific visual benchmark was reported in Anthropic's model card, and there is no verified audio, video, or non-text output capability.
- **Coding: 60/100.** SWE-bench Verified is 40.6% and HumanEval is 88.1%, with a 74% result on Anthropic's distinct internal agentic-coding evaluation; the score is capped by the lower SWE-bench result and missing independent contemporary coding tests.
- **Cost efficiency: 90/100.** Published $0.80/$4.00 per MTok pricing is relatively low but paid; it is not a free tier and the first-party Anthropic API is retired.
- **Overall Score: 62/100.** Half-up mean of the five quality dimensions: (60 + 54 + 70 + 65 + 60) / 5 = 61.8 → 62; a low-latency, lower-cost choice for routine coding, extraction, and sub-agent tasks where its 200K context and partner availability suffice.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Independent public-web research emphasizing Anthropic's launch announcement, model-card addendum, platform documentation, and separate partner/platform references; benchmark results remain tied to their stated model, setup, and prompt regime. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude 3.5 Haiku launch announcement](https://www.anthropic.com/news/3-5-models-and-computer-use)
  - [Anthropic Claude 3.5 Haiku / upgraded Sonnet model-card addendum](https://www-cdn.anthropic.com/c7822cdc35ad788ec87e14b3a9d45010f1f86c38.pdf)
  - [Anthropic model deprecations and partner availability](https://platform.claude.com/docs/en/about-claude/model-deprecations)
  - [Anthropic pricing, including retired Haiku 3.5 partner rates](https://platform.claude.com/docs/en/about-claude/pricing)
  - [Amazon Bedrock Claude 3.5 Haiku model card and ID](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-3-5-haiku.html)
  - [Google Cloud Claude models and partner IDs](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude)
  - [BenchLM Claude 3.5 Haiku sourced benchmark index](https://benchlm.ai/models/claude-3-5-haiku)
