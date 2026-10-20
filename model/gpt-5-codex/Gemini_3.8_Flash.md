# GPT-5 Codex — findings by Gemini 3.8 Flash

- Source: OpenAI (`opencode/gpt-5-codex`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex
- **Short description:** OpenAI's specialized coding and repository agent model of the GPT-5 generation, engineered for autonomous multi-file refactoring, debugging, and terminal CLI execution.
- **Provider / access:** OpenAI API (`gpt-5-codex`), OpenCode Zen (`opencode/gpt-5-codex`), Microsoft Azure.
- **Release / knowledge:** 2025 release; knowledge cutoff mid-2025.
- **IDs:** `opencode/gpt-5-codex`, `openai/gpt-5-codex`
- **Context window:** 400,000 tokens total (400K context window; up to 128K max output buffer).
- **Modalities:** Text and code input; text, code, structured JSON, tool-calling output; deep code reasoning traces.
- **Pricing (as of 2026-10-20):** $1.25 / 1M input tokens, $10.00 / 1M output tokens ($0.125 / 1M prompt cache read).
- **Architecture:** Foundation transformer fine-tuned with scalable reinforcement learning for multi-step repository navigation, code patch synthesis, and terminal execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **43.4%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.2%** (code reasoning configuration)
- HLE: no verified standalone public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **74.5%** (SWE-bench Verified)
- LiveCodeBench: **74.0%** (pass@1)
- HumanEval: **92.4%**
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 400,000 token context window supported; reliable multi-file repository indexing and code dependency tracking up to 400K tokens.

### Normalized scores (1–100)

- **Tool use: 68/100.** Competent terminal command execution and multi-step tool use evidenced by 43.4% on Terminal-Bench 2.0; capped by early CLI error recovery compared to newer GPT-5.3/Sol iterations.
- **Reasoning: 75/100.** Strong deductive algorithmic problem-solving and logic verified by 78.2% on GPQA Diamond and code-level dependency reasoning.
- **Context window: 76/100.** Large 400K token context window with 128K output buffer accommodates full repository contexts.
- **Multimodal: 15/100.** Text and code in/out; lacks native visual, audio, or video processing.
- **Coding: 89/100.** Outstanding autonomous code generation and issue resolution demonstrated by 74.5% on SWE-bench Verified and 74.0% on LiveCodeBench.
- **Cost efficiency: 78/100.** Practical pricing at $1.25 / $10.00 per 1M tokens with prompt caching discounts.
- **Overall Score: 65/100.** Arithmetic mean of five quality dimensions: (68 + 75 + 76 + 15 + 89) / 5 = 64.6 → 65. Capable repository coding and developer-agent baseline of the GPT-5 generation, succeeded by GPT-5.1/5.3-Codex and GPT-5.6 Sol.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-20
- Method: Public documentation, OpenAI technical releases, independent benchmark tracking, and platform listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
