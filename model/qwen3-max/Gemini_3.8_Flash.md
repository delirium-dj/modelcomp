# Qwen3 Max — findings by Gemini 3.8 Flash

- Source: opencode/qwen3-max
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary Qwen3-generation flagship for coding agents, complex reasoning, and tool use, with thinking mode.
- **Provider / access:** OpenCode (`opencode/qwen3-max`), Alibaba Cloud DashScope API, [OpenRouter](https://openrouter.ai/models/qwen/qwen3-max).
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** `opencode/qwen3-max` (no Free ID on Zen)
- **Context window:** 262,144 tokens total (65,536 max output).
- **Modalities:** Text in/out; native thinking mode and tool execution.
- **Pricing (as of 2026-10-21):** $1.20 / $6.00 per 1M in/out tokens (Alibaba Cloud tiered pricing).
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **74.8%**
- τ²-Bench: **83.6%**
- Terminal-Bench Hard: **24.2%**
- Tool calling / Agent execution: Fast tool call formatting and agentic loop support.

Reasoning / knowledge:

- GPQA Diamond: **86.1%** (public leaderboard standardized) / **58.0%** (baseline non-thinking)
- Humanity's Last Exam (HLE): **28.0%**
- AIME 2025: **81.6%**
- Artificial Analysis Intelligence Index: **21**

Coding:

- SWE-bench Verified: **69.0%** (multi-harness range 46.0%–69.6%)
- Autonomous code completion and software engineering bug resolution.

Long context:

- 262,144 tokens context window with 65K max output capacity.

### Normalized scores (1–100)

- **Tool use: 74/100.** Normalized assessment of autonomous tool execution and function calling (74.8% Terminal-Bench 2.0, 83.6% τ²-Bench).
- **Reasoning: 69/100.** Normalized assessment of complex multi-step reasoning and deductive analysis (86.1% GPQA Diamond, 81.6% AIME).
- **Context window: 78/100.** Effective retrieval fidelity across 262K context capacity (65K max output).
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, video, or audio processing.
- **Coding: 72/100.** Verified software engineering capability across 69.0% SWE-bench Verified.
- **Cost efficiency: 78/100.** Value proposition relative to performance at $1.20 / $6.00 per 1M tokens.
- **Overall Score: 62/100.** Arithmetic mean of non-cost metrics: (74 + 69 + 78 + 15 + 72) / 5 = 61.6 → 62. Solid text-only reasoning and agent model from the prior Qwen3 generation, superseded by Qwen 3.7 and 3.8 flagships.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Alibaba documentation, OpenRouter metrics, and Artificial Analysis leaderboards.
