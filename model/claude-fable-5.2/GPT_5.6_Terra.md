# Claude Fable 5.2 — findings by GPT-5.6 Terra

- Source: Anthropic (`claude-fable-5-2`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's latest general-access model for demanding reasoning and long-horizon agentic work, including multistep research and finished documents, spreadsheets, or decks.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, and paid Claude plans.
- **Release / knowledge:** Released 2026-11-09; reliable/training cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-2`, `anthropic.claude-fable-5-2` on Bedrock.
- **Context window:** 1M tokens; maximum output 128K tokens.
- **Modalities:** Text and image input; text output; adaptive thinking is always on with selectable effort levels.
- **Pricing (as of 2026-11-11):** $8/M input, $40/M output, $10/M five-minute cache write, $16/M one-hour cache write, and $0.20/M cache read; Batch API halves input/output prices.
- **Architecture:** Proprietary. Its restricted Mythos 5.2 counterpart shares its specifications and pricing.

### Raw benchmarks found

Agent / tool use:

- Remote Labor Index: **41.3%** (Anthropic-reported; cited by an independent release review).
- AutomationBench: **51.4%** (Anthropic-reported; Gemini 4 Carbon's 53.9% is higher in the same vendor comparison).
- Terminal-Bench 4.0: **67.6%** (Anthropic self-reported with Claude Code `--bare`, max thinking).

Reasoning / knowledge:

- HLE with tools: **74.2%** (Anthropic-reported, cited by independent review).
- Artificial Analysis Intelligence Index: **65** at maximum effort (third-party tracker result reported by Spring Prompt; 98 tokens/s, $26.54/index task).
- SurveyBench: **1,683** / first of 17 and ROASBench: **61.3** / first of 28 (independent Spring Prompt run, API default setting).

Coding:

- SWE-bench Pro: **93.0%** (BenchLM leaderboard).
- FrontierSWE v2: **69.9%** (BenchLM measured leaderboard; the earlier snapshot visible in another catalogue predates the launch, so it is not used).
- FrontierCode 2.0: **49.1%** at extra-high effort (Anthropic-reported, cited by independent review).
- SWE-bench Multimodal: **62.29%** on Vals AI's leaderboard; a conflicting 74.10% listing uses Anthropic's max-effort self-report, so the independent figure is retained as the more conservative comparison.

Long context:

- 1M-token context window and 128K-token output limit are vendor-documented. No exact-model public retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 at 67.6% and a 41.3% Remote Labor Index support advanced agents, but AutomationBench at 51.4% and provider-controlled harnesses cap the score.
- **Reasoning: 96/100.** HLE with tools at 74.2%, AA Intelligence Index 65, and first-place independent SurveyBench/ROASBench results support top-tier reasoning; the business evaluations are fresh and limited in breadth.
- **Context window: 99/100.** The documented 1M-token window and 128K output ceiling are frontier-class; the lack of a public exact-model long-context retrieval score prevents 100.
- **Multimodal: 85/100.** The model accepts images and performs well enough to place second on the independent SWE-bench Multimodal leaderboard, but it does not document audio/video input or non-text output.
- **Coding: 99/100.** SWE-bench Pro at 93.0%, measured FrontierSWE v2 at 69.9%, and FrontierCode 2.0 at 49.1% are exceptional; conflicting self-reported versus independent multimodal scores are resolved conservatively.
- **Cost efficiency: 45/100.** The $8/$40 list price is lower than Fable 5.1 but remains expensive; independent testing reported high per-task cost and slow completion for some workloads.
- **Overall Score: 94/100.** Half-up mean of the five quality dimensions: (92 + 96 + 99 + 85 + 99) / 5 = 94.2. Best for ambitious, high-value agentic work where its cost and latency are justified.

---

## Signature

- Provided by: **GPT-5.6 Terra (OpenAI/gpt-5.6-terra)** — 2026-11-11 UTC
- Method: Public web research across Anthropic documentation, independent benchmark leaderboards, and a third-party API evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Fable 5.2 documentation](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Spring Prompt independent evaluation](https://springprompt.com/blog/claude-fable-5-2-review)
  - [Vals AI SWE-bench Multimodal leaderboard](https://www.vals.ai/benchmarks/swebench-multimodal)
  - [FrontierSWE v2 leaderboard](https://benchgap.net/b/frontierswev2/current)
  - [BenchLM SWE-bench Pro leaderboard](https://benchlm.ai/benchmarks/swe-bench-pro)
