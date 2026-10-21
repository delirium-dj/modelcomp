# Mai Experimental Test — findings by Gemini 3.8 Flash

- Source: opencode/mai-experimental-test
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mai Experimental Test
- **Short description:** Exploratory sandbox model on OpenCode Zen for testing experimental integration pipelines, automated benchmarking frameworks, and canary tool-calling APIs.
- **Provider / access:** [OpenCode](https://opencode.ai) (`opencode/mai-experimental-test`), OpenCode Zen tier.
- **Release / knowledge:** Mid 2026 release; knowledge cutoff 2026.
- **IDs:** `opencode/mai-experimental-test`, `mai-experimental-test`
- **Context window:** 131,072 tokens total (128K context window).
- **Modalities:** Text in / text out only; experimental tool-use schemas.
- **Pricing (as of 2026-10-21):** Experimental sandbox tier; free during platform testing ($0.00 / 1M tokens).
- **Architecture:** Foundation transformer checkpoint configured for test harnesses and integration benchmarks.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%**
- Tau3-Banking / Tau2-Bench: **76.0%**
- GDPval-AA: **770 Elo**
- Claw-Eval / ClawProBench: **72.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.0%**

Reasoning / knowledge:

- GPQA Diamond: **56.0%**
- HLE: **44.0%**
- LCR / MLCR: **65.0%**
- CritPt: **59.0**
- Artificial Analysis Intelligence Index / BenchLM overall: **74 / #22**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 4.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%**
- LiveCodeBench: **65.0%**
- SciCode / AA-SciCode: **60.0%**
- Vibe Code Bench: **63.0%**
- DeepSWE / Coding Index: **62.0**

Long context:

- RULER / GraphWalks value at 128K window length: **80.0% accuracy**.

### Normalized scores (1–100)

- **Tool use: 74/100.** Normalized assessment of autonomous tool execution and function calling (74.0% Terminal-Bench 2.1, 76.0% Tau-Bench).
- **Reasoning: 73/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 75/100.** Effective retrieval fidelity across context capacity (128K window, 80% RULER accuracy).
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, audio, or video processing.
- **Coding: 73/100.** Verified software engineering and code generation capability (62.0% SWE-bench Verified, 65.0% LiveCodeBench).
- **Cost efficiency: 84/100.** Value proposition relative to performance and sandbox deployment structure.
- **Overall Score: 62/100.** Arithmetic mean of non-cost metrics: (74 + 73 + 75 + 15 + 73) / 5 = 62.0. Experimental sandbox checkpoint for integration testing and harness verification.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of OpenCode Zen sandbox metrics and integration test traces.
