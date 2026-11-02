# GPT-5-Codex — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5-codex`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex
- **Short description:** OpenAI's agentic software-engineering model designed for Codex environments.
- **Provider / access:** OpenAI Responses API `gpt-5-codex`; check current availability.
- **Release / knowledge:** OpenAI system-card addendum dated 2025-09-15; knowledge cutoff not verified here.
- **Context window:** 400K cataloged; output limit and exact route should be checked.
- **Modalities:** Text and image input; text output, reasoning and tools.
- **Pricing:** OpenAI documentation historically lists $1.25 input / $10 output per million; current availability varies.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

- Terminal-Bench 2.0 official leaderboard reports **44.3% ± 2.7** with Codex CLI and **43.4% ± 2.9** with Terminus 2; uncertainty is 95% confidence interval.
- DataLearner indexes exact-model high-effort GPQA Diamond **83.7%**, HLE **27.8%**, LiveCodeBench **84.0%**, SWE-bench Verified **74.5%** and TAU2 Telecom **86.8%**; these are separately indexed runs and settings.
- No verified full-window retrieval result found.

### Normalized scores (1–100)

- **Tool use: 74/100.** Official TB 2.0 and indexed TAU2 support agentic capability, with harness variation.
- **Reasoning: 81/100.** Indexed GPQA and HLE support capable reasoning at high effort.
- **Context window: 80/100.** 400K listed; no full-window retrieval result verified.
- **Multimodal: 65/100.** Text and image input with text output.
- **Coding: 78/100.** Indexed SWE and LiveCodeBench are tempered by official terminal results.
- **Cost efficiency: 70/100.** Historical $1.25/$10 per million, route permitting.
- **Overall Score: 76/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Official terminal leaderboard, OpenAI system card and separately indexed high-effort results.
- Reference URLs:
  - [Terminal-Bench 2.0 leaderboard](https://www.tbench.ai/?version=2.0)
  - [OpenAI system-card addendum](https://cdn.openai.com/pdf/97cc5669-7a25-4e63-b15f-5fd5bdc4d149/gpt-5-codex-system-card.pdf)
  - [DataLearner model index](https://www.datalearner.com/en/ai-models/pretrained-models/gpt-5-codex)
