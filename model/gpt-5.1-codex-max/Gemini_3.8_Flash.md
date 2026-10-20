# GPT-5.1 Codex Max — findings by Gemini 3.8 Flash

- Source: OpenAI (`opencode/gpt-5.1-codex-max`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** OpenAI's heavy-lifting software engineering model of the GPT-5.1 generation, introducing native context compaction to orchestrate multi-hour agent loops across large code repositories.
- **Provider / access:** OpenAI API (`gpt-5.1-codex-max`), OpenCode Zen (`opencode/gpt-5.1-codex-max`), Microsoft Azure.
- **Release / knowledge:** 2025 release; knowledge cutoff late 2025.
- **IDs:** `opencode/gpt-5.1-codex-max`, `openai/gpt-5.1-codex-max`
- **Context window:** 400,000 tokens total (400K context window; up to 128K max output buffer; supports multi-window compaction).
- **Modalities:** Text and code input; text, code, structured JSON, tool-calling output; deep multi-step code reasoning.
- **Pricing (as of 2026-10-20):** $1.25 / 1M input tokens, $10.00 / 1M output tokens ($0.125 / 1M prompt cache read).
- **Architecture:** Foundation transformer featuring iterative context compaction, test-time reasoning scaling, and native terminal execution tooling.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **58.1%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.5%** (reasoning configuration)
- HLE: no verified standalone public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **77.9%** (SWE-bench Verified)
- LiveCodeBench: **83.6%** (pass@1)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 400,000 token context window supported with internal history compaction, allowing sustained execution over multi-million-token developer sessions without context degradation.

### Normalized scores (1–100)

- **Tool use: 76/100.** Effective terminal navigation and agentic execution demonstrated by 58.1% on Terminal-Bench 2.0 and robust multi-step developer tool chaining.
- **Reasoning: 80/100.** High-level deductive algorithmic analysis and code-flow planning evidenced by 82.5% on GPQA Diamond and METR autonomous task evaluations.
- **Context window: 76/100.** 400K context capacity enhanced by architectural context compaction for long-horizon autonomous workflows.
- **Multimodal: 15/100.** Text and code in/out; text-only core architecture.
- **Coding: 92/100.** Excellent repository-scale software engineering verified by 77.9% on SWE-bench Verified and 83.6% on LiveCodeBench.
- **Cost efficiency: 78/100.** Economical developer pricing at $1.25 / $10.00 per 1M tokens with prompt caching discounts ($0.125 / 1M).
- **Overall Score: 68/100.** Arithmetic mean of five quality dimensions: (76 + 80 + 76 + 15 + 92) / 5 = 67.8 → 68. Powerful agentic coding powerhouse of the 5.1 generation designed for massive multi-file refactoring runs.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-20
- Method: Public documentation, OpenAI technical releases, independent benchmark tracking, and developer platform listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
