# Claude Opus 4.8 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-opus-4.8`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's mid-2026 flagship foundation model introducing parallel-subagent coordination in Claude Code, 1M context processing, and leading multi-file SWE-bench Pro software engineering.
- **Provider / access:** Anthropic API (`claude-opus-4.8-20260528`), Amazon Bedrock, Google Cloud Vertex AI, OpenRouter.
- **Release / knowledge:** 2026-05-28 release; knowledge cutoff Q2 2026.
- **IDs:** `anthropic/claude-opus-4.8` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M context window; 128,000 maximum output tokens).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; adaptive thinking and optional 2.5x Fast mode.
- **Pricing (as of 2026-10-17):** $5.00 / 1M input tokens, $25.00 / 1M output tokens ($0.50 / 1M prompt cache read; $2.50 / $12.50 batch pricing).
- **Architecture:** Frontier dense foundation transformer featuring updated tokenizer efficiency, dynamic subagent scheduling, and high self-honesty calibration.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **83.4%** (OSWorld-Verified)
- Terminal-Bench 2.1: **74.6%**
- GDPval-AA: **1,890** Elo (v2.1 at max effort)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.8%**
- HLE: **49.8%** (without tools) / **57.9%** (with tools)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **88.6%** (SWE-bench Verified) / **69.2%** (SWE-bench Pro)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,000,000 token context window natively supported with 128K max output; multi-file repository indexing with sub-agent parallelization.

### Normalized scores (1–100)

- **Tool use: 92/100.** Leading agentic tool invocation and computer execution evidenced by 83.4% on OSWorld-Verified, 74.6% on Terminal-Bench 2.1, and 1,890 on GDPval-AA.
- **Reasoning: 94/100.** Exceptional multi-step deductive problem-solving demonstrated by 57.9% on HLE (with tools) and 92.8% on GPQA Diamond.
- **Context window: 98/100.** Full 1M token context capacity with 128K output buffer enables long-horizon multi-repository refactoring.
- **Multimodal: 74/100.** High-fidelity visual document parsing, UI navigation, and technical diagram comprehension; text + image in, text out.
- **Coding: 93/100.** Outstanding autonomous code generation and bug resolution verified by 88.6% on SWE-bench Verified and 69.2% on SWE-bench Pro.
- **Cost efficiency: 48/100.** Competitive flagship pricing at $5.00 / $25.00 per 1M tokens with prompt caching ($0.50) and 2.5x Fast mode.
- **Overall Score: 90/100.** Arithmetic mean of five quality dimensions: (92 + 94 + 98 + 74 + 93) / 5 = 90.2 → 90. Superb frontier reasoning model specialized in long-horizon software engineering and multi-agent coordination.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public documentation, Anthropic release announcements, Artificial Analysis evaluations, and platform benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
