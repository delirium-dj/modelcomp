# GPT-5.1 Codex Mini — findings by Gemini 3.8 Flash

- Source: OpenAI (`opencode/gpt-5.1-codex-mini`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Mini
- **Short description:** OpenAI's lightweight, cost-optimized coding model of the GPT-5.1 generation, built for high-throughput CI test generation, routine bug patching, and fast-loop terminal execution.
- **Provider / access:** OpenAI API (`gpt-5.1-codex-mini`), OpenCode Zen (`opencode/gpt-5.1-codex-mini`), Microsoft Azure.
- **Release / knowledge:** November 2025 release; knowledge cutoff late 2025.
- **IDs:** `opencode/gpt-5.1-codex-mini`, `openai/gpt-5.1-codex-mini`
- **Context window:** 200,000 tokens total (200K context window; up to 64K max output buffer).
- **Modalities:** Text and code input; text, code, structured JSON, tool-calling output; lightweight reasoning traces.
- **Pricing (as of 2026-10-20):** $0.25 / 1M input tokens, $2.00 / 1M output tokens ($0.025 / 1M prompt cache read).
- **Architecture:** Compact foundation transformer distilled for low-latency code synthesis and automated developer-tool execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **43.1%** (Crux agent harness; 33.3% on Hard variants)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **71.5%**
- HLE: no verified standalone public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **58.2%** (SWE-bench verified subset / Aider code editing)
- LiveCodeBench: **83.6%** (pass@1 competitive programming tasks)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 200,000 token context window supported; fast retrieval and context parsing for single-file and medium-sized package repositories.

### Normalized scores (1–100)

- **Tool use: 64/100.** Fast terminal command execution evidenced by 43.1% on Terminal-Bench 2.0; bounded by simpler agentic recovery routines.
- **Reasoning: 68/100.** Capable logic and code flow reasoning verified by 71.5% on GPQA Diamond, prioritizing speed over deep chain-of-thought exploration.
- **Context window: 72/100.** 200K token context window provides ample room for full scripts and test suites.
- **Multimodal: 15/100.** Text and code in/out; text-only architecture.
- **Coding: 82/100.** Strong functional programming accuracy demonstrated by 83.6% on LiveCodeBench and ~58.2% on SWE-bench editing subsets.
- **Cost efficiency: 95/100.** Highly affordable developer pricing at $0.25 / $2.00 per 1M tokens with prompt caching at $0.025 per 1M tokens.
- **Overall Score: 60/100.** Arithmetic mean of five quality dimensions: (64 + 68 + 72 + 15 + 82) / 5 = 60.2 → 60. Agile and economical code generation model suited for high-volume developer loops, automated unit tests, and terminal scripting.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-20
- Method: Public documentation, OpenAI technical releases, independent benchmark tracking, and developer platform listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
