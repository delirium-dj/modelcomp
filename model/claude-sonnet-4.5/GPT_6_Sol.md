# Claude Sonnet 4.5 — findings by GPT 6 Sol

- Source: Anthropic (`claude-sonnet-4-5-20250929`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's September 2025 hybrid-thinking model for coding, agents and computer use. Formerly a leading Sonnet, it is now [deprecated and scheduled for Claude API retirement November 30, 2026](https://platform.claude.com/docs/en/models/sonnet-4-5/overview), though cloud-platform schedules can differ.
- **Provider / access:** Pinned Claude Messages API ID `claude-sonnet-4-5-20250929`; shorter `claude-sonnet-4-5` is an alias. Also distributed through Bedrock, Google Cloud and Microsoft Foundry under platform-specific IDs ([Anthropic model reference](https://platform.claude.com/docs/en/models/sonnet-4-5/overview)). No verified Zen Free route; prefer a supported successor for new integrations.
- **Release / knowledge:** September 29, 2025; reliable knowledge cutoff **January 2025** and training-data cutoff **July 2025** ([Anthropic](https://platform.claude.com/docs/en/models/sonnet-4-5/overview)).
- **Context window:** **200K standard, 64K maximum output** on Claude API ([Anthropic reference](https://platform.claude.com/docs/en/models/sonnet-4-5/overview)). The separately documented `context-1m-2025-08-07` beta header enabled **1M** in some evaluations ([Vals](https://www.vals.ai/models/anthropic_claude-sonnet-4-5-20250929-thinking)); do not confuse a beta test's 1M setting with the default production limit.
- **Modalities:** Text and image inputs; text output, extended thinking and tool calls, including external computer-use workflows. No native audio/video I/O ([Anthropic reference](https://platform.claude.com/docs/en/models/sonnet-4-5/overview)).
- **Pricing (2026-10-31):** **$3 input / $15 output / $0.30 cached read per million tokens**; 5-minute and 1-hour cache writes $3.75 and $6; batch input/output 50% off ([Anthropic](https://platform.claude.com/docs/en/models/sonnet-4-5/overview)). Deprecation and the beta long-context configuration constrain forward-looking cost assumptions.
- **Architecture:** Proprietary hybrid reasoning; weights and parameter count undisclosed ([Anthropic system card](https://www.anthropic.com/claude-sonnet-4-5-system-card)).

### Raw benchmarks found

- **Agent/tool use:** [Anthropic's launch](https://www.anthropic.com/news/claude-sonnet-4-5) reports **OSWorld-Verified 61.4%** (100-step, four-run setup). [Independent Vals thinking-mode run](https://www.vals.ai/models/anthropic_claude-sonnet-4-5-20250929-thinking) measured **Terminal-Bench 2.0 41.57% ±5.25**; Princeton's [HAL leaderboard](https://hal.cs.princeton.edu/model/Claude%20Sonnet%204.5%20%28September%202025%29) reports **GAIA 74.55%** with HAL Generalist Agent but **AssistantBench 7.09%** with Browser-Use. These harnesses/tasks are not comparable percentages; a good OSWorld result does not imply reliable browsing on AssistantBench.
- **Reasoning/knowledge:** [Vals](https://www.vals.ai/models/anthropic_claude-sonnet-4-5-20250929-thinking) independently reports **GPQA Diamond 81.63% ±2.25**, **MMLU Pro 87.36% ±0.39** and **LegalBench 84.08% ±0.45** (thinking). The launch's claim of stronger math/reasoning is vendor-reported; no common-protocol current-generation HLE score was verified in these primary sources.
- **Coding:** [Anthropic](https://www.anthropic.com/news/claude-sonnet-4-5) reports **SWE-bench Verified 77.2%**, 10-trial mean over 500 tasks with its bash/file-edit scaffold, 200K thinking budget and no test-time candidate selection; the **82.0%** high-compute result uses parallel attempts and patch selection and is not a like-for-like replacement. [Vals](https://www.vals.ai/models/anthropic_claude-sonnet-4-5-20250929-thinking) independently finds **SWE-bench 70.00% ±2.05**, **LiveCodeBench 73.00% ±1.13** and **Vibe Code Bench v1.1 22.62% ±3.73**. [HAL](https://hal.cs.princeton.edu/model/Claude%20Sonnet%204.5%20%28September%202025%29) records SWE-bench Verified *Mini* **68%** with SWE-Agent versus **34%** with its generalist agent: scaffold and subset change the outcome.
- **Long context/multimodal:** [Vals](https://www.vals.ai/models/anthropic_claude-sonnet-4-5-20250929-thinking) gives **MMMU Pro 79.31% ±0.97** with thinking. Anthropic's 1M-beta SWE-bench result **78.2%** versus standard-200K **77.2%** ([methodology](https://www.anthropic.com/news/claude-sonnet-4-5)) is a coding test, **not** a near-1M retrieval evaluation. No independently verified full-window recall result found.

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld 61.4 and Vals Terminal-Bench 41.57 are useful, but HAL browser 7.09 illustrates harness-dependent failure.
- **Reasoning: 81/100.** Independent GPQA 81.63/MMLU Pro 87.36; older snapshot and sparse current hard-reasoning evidence limit confidence.
- **Context window: 77/100.** 200K standard/1M beta, with no verified near-window retrieval and imminent Claude API retirement.
- **Multimodal: 78/100.** Independent MMMU Pro 79.31 and useful image-guided computer use; text-only output and no native audio/video.
- **Coding: 77/100.** Vendor SWE-bench 77.2 versus independent Vals 70 and weak application-level Vibe Code 22.62.
- **Cost efficiency: 60/100.** $3/$15 plus thinking tokens is costly relative to newer supported Sonnet releases; caching/batch help repeated prompts.
- **Overall Score: 78/100.** Half-up mean (78 + 81 + 77 + 78 + 77) / 5 = 78.2; a historical high-performing coding agent, not a recommended new API default.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Three independent web searches followed by primary vendor documentation and independent Vals and Princeton HAL measurements. Kept thinking/beta context, agent scaffold and benchmark subsets distinct; scores are normalized interpretations.
- Reference URLs:
  - [Anthropic pinned model ID, lifecycle, limits and pricing](https://platform.claude.com/docs/en/models/sonnet-4-5/overview)
  - [Anthropic launch and SWE-bench/OSWorld methodology](https://www.anthropic.com/news/claude-sonnet-4-5)
  - [Vals AI independent thinking-mode results](https://www.vals.ai/models/anthropic_claude-sonnet-4-5-20250929-thinking)
  - [Princeton HAL independent multi-agent benchmark](https://hal.cs.princeton.edu/model/Claude%20Sonnet%204.5%20%28September%202025%29)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
