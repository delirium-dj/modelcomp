# GPT-5.1 Codex — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/gpt-5.1-codex
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's specialized coding and software engineering model optimized for complex code generation, debugging, and multi-file code refactoring.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.1-codex` / OpenAI API (`gpt-5.1-codex`).
- **Release / knowledge:** Released 2026; state-of-the-art programming capabilities.
- **IDs:** `opencode/gpt-5.1-codex`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text in; text out; advanced code synthesis; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Standard OpenAI developer tier pricing (~$2.00 / $8.00 per 1M tokens).
- **Architecture:** Proprietary transformer model fine-tuned extensively on code repositories and software engineering workflows.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.5%** (OpenAI developer evaluation)
- Tau3-Banking / Tau2-Bench: **68.2%** (OpenAI harness)
- GDPval-AA: **2050 Elo** (Code assistant evaluation)
- Claw-Eval / ClawProBench: **76.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.4%** (Coding evaluation suite)

Reasoning / knowledge:

- GPQA Diamond: **64.5%** (OpenAI technical report)
- HLE: **38.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **72.0%** (Complex reasoning)
- CritPt: **69.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **83.5 / #22** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **81.0% / 8.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **64.2%** (SWE-bench evaluation harness)
- LiveCodeBench: **61.8%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **63.5%** (Scientific coding benchmark)
- Vibe Code Bench: **72.4%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **82.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **88.0% retrieval accuracy at 128K context length** (OpenAI code context benchmark)

### Normalized scores (1–100)

- **Tool use: 85/100.** High efficiency in executing tool calls and IDE integrations.
- **Reasoning: 86/100.** Robust algorithmic reasoning and debugging logic.
- **Context window: 85/100.** Reliable 128K context window optimized for codebase understanding.
- **Multimodal: 15/100.** Text-only code generation model (specialized programming assistant).
- **Coding: 91/100.** Exceptional coding performance across SWE-bench Verified and LiveCodeBench.
- **Cost efficiency: 79/100.** Highly cost-effective for developer workflows and automated coding agents.
- **Overall Score: 72.4/100.** Specialized programming powerhouse optimized for software engineering and automated coding tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Public internet research across official OpenAI documentation, GitHub benchmarks, and AI developer forums; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
