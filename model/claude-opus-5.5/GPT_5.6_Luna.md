# Claude Opus 5.5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's latest Opus model for long-running agentic coding and knowledge work.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS; Messages API model ID `claude-opus-5-5`.
- **Release / knowledge:** 2026-09-22 release; June 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-5-5`; Bedrock ID `anthropic.claude-opus-5-5`.
- **Context window:** 1M tokens; 128K maximum output, with a 300K Batch API beta option (Anthropic documentation).
- **Modalities:** Text and image input, text output, adaptive thinking always on, tool calls, and computer-use integrations.
- **Pricing (as of 2026-10-04):** $4 input / $20 output per 1M tokens; cache write $5 (5-minute) or $8 (1-hour), cache read $0.20; Batch API input/output 50% discount.
- **Architecture:** Proprietary closed model; parameters and architecture undisclosed.

## Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **38.2%** (Snorkel independent run, 2026-10-01; board rank 1, Claude Code max).
- AnalystAgent: **56.25 pass@5** (Artificial Analysis independent run, max effort).

Reasoning / knowledge:

- Humanity's Last Exam: **61.4%** (Artificial Analysis independent run, no tools, max effort).
- LiveBench: **83.2** (LiveBench independent board, max effort; within noise of Fable 5.1's 83.4).

Coding:

- Terminal-Bench 2.1: **87.64%** (Vals AI independent Terminus 2 run, high effort; 9.74% of tasks used Opus 5/4.8 fallbacks, and counting fallbacks as failures lowers the result to 79.77%).

Long context:

- 1M-token context is documented by Anthropic; no independently verified MRCR/RULER score found in the reviewed sources.

Multimodal:

- ARC-AGI-2 high: **93.3%** (ARC Prize leaderboard, independent board entry; visual reasoning).

## Normalized scores (1–100)

- **Tool use: 92/100.** Agents' Last Exam rank 1 and AnalystAgent 56.25 support excellent professional/tool work, while the Terminal-Bench fallback caveat caps the score.
- **Reasoning: 96/100.** HLE 61.4 is the highest Artificial Analysis record and LiveBench 83.2 is near the top, though benchmark noise and effort-tier differences prevent a perfect score.
- **Context window: 99/100.** Anthropic verifies a 1M-token window and 128K output ceiling; lack of an independent long-context retrieval score caps it below 100.
- **Multimodal: 85/100.** Image input is officially supported and ARC-AGI-2 reaches 93.3, but output remains text-only and audio/video were not verified.
- **Coding: 94/100.** Terminal-Bench 87.64 is frontier-level and the model is explicitly optimized for agentic coding; fallback contamination and missing SWE-bench/LiveCodeBench rows cap the score.
- **Cost efficiency: 82/100.** $4/$20 is materially cheaper than Fable 5.1 and Opus 5, with strong capability, but it remains expensive for high-volume workloads.
- **Overall Score: 93.2/100.** Best fit: complex production coding and knowledge-work agents that need long context, reliable tool use, and high reasoning quality.

### Deep-research addendum (2026-10-09)

- Anthropic reports Opus 5.5 solves more public command-line tasks than Opus 5 while making about 40% fewer calls and using half the tokens.
- The official page notes Terminal-Bench 4.0 evaluation at xhigh effort and documents production safeguards, so scores should be read as harness- and safety-configuration-specific.
- Source: https://www.anthropic.com/claude/opus

### Multi-source deep-research addendum (2026-10-09)

- Anthropic’s official documentation states Opus 5.5 uses adaptive thinking at max effort for most published evaluations and reports a **1M-token** context option.
- Anthropic’s command-line comparison says Opus 5.5 solves more real CLI tasks than Opus 5 with about **40% fewer calls** and **half the tokens**.
- Independent discussion of Terminal-Bench 4.0 places Opus 5.5 around **60%**, close to GPT-6 Astra, while medium/high-effort runs show a cost/quality tradeoff rather than one fixed score.
- A small independent everyday-task comparison favored Opus 5.5 on 4 of 5 prompts, but that is qualitative and not a substitute for standardized evaluation.
- **Assessment:** retain the frontier coding/reasoning score; add a confidence caveat that effort setting, Claude Code harness, safeguards, and token budget materially affect comparisons.
- Sources: https://platform.claude.com/docs/en/models/opus-5-5/overview ; https://www.anthropic.com/claude/opus ; https://www.reddit.com/r/Anthropic/comments/1wqscan/two_independent_opus_55_benchmarks_1_on/ ; https://www.tomsguide.com/ai/i-tested-chatgpt-6-vs-claude-opus-5-5-with-5-everyday-prompts-it-wasnt-even-close

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research using Anthropic documentation and independent benchmark trackers; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
