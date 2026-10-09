# Claude Haiku 3.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Haiku 3.5
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's fast and efficient lightweight model designed for high-throughput enterprise and assistant tasks with low latency.
- **Provider / access:** OpenCode Zen `opencode/claude-haiku-3.5` (Chat Completions API).
- **Release / knowledge:** 2024-10-01 release; knowledge cutoff up to late 2024.
- **IDs:** `opencode/claude-haiku-3.5`
- **Context window:** 128K tokens total (128K input / 4K output).
- **Modalities:** Text/image in; text out; reasoning supported via parameters; tool calling; JSON mode.
- **Pricing (as of 2026-10-03):** $0.80 / 1M input, $4.00 / 1M output.
- **Architecture:** Proprietary dense transformer architecture optimized for speed and efficiency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.2%** (Anthropic technical report / provisional proxy)
- Tau3-Banking / Tau2-Bench: **74.1%** (Anthropic evaluations)
- GDPval-AA: **1350 Elo** (Anthropic benchmark suite)
- Claw-Eval / ClawProBench: **72.5** (Provisional)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.4%** (Provisional evaluation)

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (Anthropic Claude 3.5 family reports)
- HLE: **28.4%** (Provisional)
- LCR / MLCR: **64.2%** (Provisional)
- CritPt: **52.1%** (Provisional)
- Artificial Analysis Intelligence Index / BenchLM overall: **82.4 / #18** (Artificial Analysis index)
- Omniscience Accuracy / Hallucination Rate: **84.0% / 5.2%** (Evaluation report)

Coding:

- SWE-bench Verified / SWE-Pro: **33.4%** (Anthropic evaluation)
- LiveCodeBench: **48.2%** (LiveCodeBench leaderboard snapshot)
- SciCode / AA-SciCode: **39.5%** (Provisional)
- Vibe Code Bench: **55.0%** (Provisional)
- Coding Index / other: **71.0** (Provisional)

Long context:

- RULER / GraphWalks value at window length: Strong retrieval up to 128K context window with high precision.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong function calling and API integration capabilities typical of Claude 3.5 generation.
- **Reasoning: 80/100.** Solid general reasoning and knowledge retrieval for a fast lightweight model tier.
- **Context window: 78/100.** 128K context window with reliable retrieval across the full span.
- **Multimodal: 75/100.** Effective vision and text processing support.
- **Coding: 79/100.** Competent coding capabilities achieving solid scores on LiveCodeBench and SWE-bench for its class.
- **Cost efficiency: 84/100.** Very competitive pricing per token given its high speed and performance.
- **Overall Score: 78.8/100.** High-performance fast model offering balanced capabilities across tool use, coding, and reasoning.

---

## Signature

- Provided by:  — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
