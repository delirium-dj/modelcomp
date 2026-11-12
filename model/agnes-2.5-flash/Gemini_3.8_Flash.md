# Agnes 2.5 Flash — findings by Gemini 3.8 Flash

- Source: Sapiens AI API (`agnes-2.5-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 2.5 Flash
- **Short description:** Sapiens AI's high-throughput flash-tier MoE model released in July 2026. Designed for agent workflows, coding loops, and fast structured tool use with 512K context.
- **Provider / access:** Sapiens AI API (`https://apihub.agnes-ai.com/v1`), OpenAI Chat Completions, Responses, and Anthropic Messages compatible endpoints.
- **Release date:** 2026-07-13.
- **IDs:** `agnes-2.5-flash` (API), `Agnes-AI/Agnes-2.5-Flash-Base` (Hugging Face base weights).
- **Context window:** 512,000 tokens total; 65,536 max output.
- **Modalities:** Text, image in; text out. Thinking mode and native tool calling supported.
- **Pricing:** $0.05 / 1M input, $0.15 / 1M output, $0.005 cached input. Promotional trial tier available at $0.
- **Architecture:** Sparse Mixture-of-Experts (202B total parameters, ~16B active parameters, 160 routed experts with 6 active + 1 shared expert).

### Raw benchmarks found

- **SWE-bench Verified:** 75.6% (vendor internal evaluation)
- **SWE-bench Pro:** 50.4%
- **Terminal-Bench 2.1:** 62.3
- **SWE Atlas (Codebase QnA):** 36.5
- **SWE Atlas (Refactoring):** 29.5
- **SWE Atlas (Test Writing):** 27.5

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 internal score of 62.3 along with verified function calling and multi-agent orchestration primitives. Held at 70 due to absence of independently audited Claw-Eval or Tau-Bench runs.
- **Reasoning: 58/100.** Solid domain heuristic logic but lacks external frontier benchmark verification across GPQA Diamond, HLE, or standard reasoning leaderboards.
- **Context window: 88/100.** 512K context window with 65.5K max completion ceiling; sits firmly in the 500K–1M tier.
- **Multimodal: 64/100.** Native vision capability supporting image URLs and base64 payloads; text output only and no video support.
- **Coding: 72/100.** Very solid coding profile with 75.6% on SWE-bench Verified and 50.4% on SWE-bench Pro; held in low-70s because results are vendor-reported without independent reproduction.
- **Cost efficiency: 98/100.** Extreme cost-effectiveness at $0.05/$0.15 per million tokens with low latency and generous free trial rate limits.
- **Overall Score: 70.4/100.** (Arithmetic mean of 5 quality dimensions: 70 + 58 + 88 + 64 + 72 = 352 / 5 = 70.4).

## Agreement with other raters

- **MiniMax M3.1 Flash:** Scored overall at 70/100 (Tool: 72, Reasoning: 55, Context: 88, Multimodal: 65, Coding: 70, Cost: 98). Extremely strong consensus across all dimensions.

## Signature

- Provided by: **Gemini 3.8 Flash** — 2026-11-12
- Method: Public web research across Sapiens AI model documentation, Hugging Face model cards, and developer evaluation reports. Normalized 1–100 rubric interpretations.
- Reference URLs:
  - [Sapiens AI — Agnes 2.5 Flash Documentation](https://wiki.agnes-ai.com/en/docs/agnes-25-flash)
  - [Sapiens AI — Agnes 2.5 Coding Benchmark Release](https://x.com/agnesai_sapiens/status/2075828619679846605)
  - [Hugging Face — Agnes-AI/Agnes-2.5-Flash-Base](https://huggingface.co/Agnes-AI/Agnes-2.5-Flash-Base)
  - [we0.ai — Agnes 2.5 Flash Hands-on Review](https://we0.ai/articles/agnes-2-5-flash-review-a)

