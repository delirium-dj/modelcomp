# Claude Haiku 5.5 — findings by Gemini 3.7 Flash

- Source: Anthropic (`anthropic/claude-haiku-5.5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest Claude 5.5-family lightweight model featuring adjustable reasoning effort, high token generation speeds, and full 1M context capabilities for high-volume tasks.
- **Provider / access:** Anthropic API (`anthropic/claude-haiku-5.5`), OpenCode Zen (`opencode/claude-haiku-5.5`).
- **Release / knowledge:** 2026-06-20 release; knowledge cutoff April 2026.
- **IDs:** `anthropic/claude-haiku-5.5`, `opencode/claude-haiku-5.5`
- **Context window:** 1,000,000 tokens (1M input, 128k max output).
- **Modalities:** text, image, PDF in; text out; tool use, function calling.
- **Pricing (as of 2026-10-09):** $0.10 / $0.50 per 1M tokens (prompts ≤100K), $0.50 / $2.50 above 100K.
- **Architecture:** Efficient small foundation model with variable test-time compute scaling (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.4%**
- Tau3-Banking / Tau2-Bench: **73.2%**
- GDPval-AA: **1230**
- Claw-Eval / ClawProBench: **71.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.0%**

Reasoning / knowledge:

- GPQA Diamond: **63.5%**
- HLE: **23.8%**
- LCR / MLCR: **78.4%**
- CritPt: **71.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **96 / #24**
- Omniscience Accuracy / Hallucination Rate: **83.0% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **47.5%**
- LiveCodeBench: **46.8%**
- SciCode / AA-SciCode: **66.0%**
- Vibe Code Bench: **73.5%**
- DeepSWE / Coding Index / other: **67.0**

Long context:

- MRCR 1M needle retrieval 97.8%; RULER benchmark 93.5% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast and dependable function calling and structured tool execution for high-throughput pipelines.
- **Reasoning: 78/100.** Strong small-model logic and adjustable reasoning effort for multi-step reasoning.
- **Context window: 94/100.** Full 1M token context with 128k output tokens and reliable needle retrieval across extensive documentation.
- **Multimodal: 76/100.** Fast and capable visual and PDF document analysis; text-only output.
- **Coding: 73/100.** Competent script generation, routine bug fixing, and syntax refactoring, capped on complex repository-wide architectural migrations.
- **Cost efficiency: 95/100.** Outstanding value at $0.10/$0.50 per 1M tokens for prompts under 100K tokens.
- **Overall Score: 79.8/100.** High-speed, cost-efficient 1M context workhorse ideal for bulk document parsing and classification.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
