# Claude Sonnet 3.7 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-3.7-sonnet`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's first hybrid-reasoning model released in February 2025, combining standard high-speed generation with an optional, configurable extended thinking mode and launch-time leadership on SWE-bench Verified. Deprecated, superseded by Sonnet 4.6 and Sonnet 5.5.
- **Provider / access:** Anthropic API (`claude-3-7-sonnet-20250219`), OpenCode Zen (`opencode/claude-sonnet-3.7`), OpenRouter, Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2025-02-24 release; knowledge cutoff late 2024.
- **IDs:** `anthropic/claude-3.7-sonnet`, `opencode/claude-sonnet-3.7`
- **Context window:** 200,000 tokens total (200K context window; 64,000 max output tokens with extended thinking).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; user-visible extended thinking budget.
- **Pricing (as of 2026-10-17):** $3.00 / 1M input tokens, $15.00 / 1M output tokens ($0.30 / 1M prompt cache read; $1.50 / $7.50 batch pricing).
- **Architecture:** Dense transformer architecture with hybrid reasoning pathways, configurable thinking budgets, and computer use capability.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **28.0%**
- TAU-bench Retail: **81.2%**
- TAU-bench Airline: **58.4%**
- GAIA: **64.24%** (HAL agent harness)
- SHADE-Arena: **26.2%** (overall success)
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.8%** (extended thinking mode) / **68.0%** (standard mode)
- AIME 2024: **80.0%** (extended thinking mode) / **23.3%** (standard mode)
- MATH 500: **96.2%** (extended thinking mode) / **82.2%** (standard mode)
- MMLU: **88.8%**
- GSM8K: **96.4%**
- HLE: no verified standalone public launch score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **62.3%** (standard pass@1) / **70.3%** (custom bash + file-edit scaffold on solvable subset)
- LiveCodeBench: **52.6%–60.4%** (pass@1 with extended thinking)
- HumanEval: **94.0%**
- BigCodeBench: **35.8%**
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context / vision:

- ChartQA: **91.2%**
- DocVQA: **93.5%**
- 200K window with 64K maximum output buffer; reliable retrieval across standard documentation and single-repository tasks.

### Normalized scores (1–100)

- **Tool use: 70/100.** Pioneer hybrid reasoning agent achieving 81.2% on TAU-bench Retail, 58.4% on TAU-bench Airline, and 64.24% on GAIA; capped by ~28% on OSWorld compared to later 70%+ generations.
- **Reasoning: 72/100.** Strong mathematical and scientific reasoning demonstrated by 84.8% on GPQA Diamond, 80.0% on AIME 2024, and 96.2% on MATH 500 when extended thinking is engaged.
- **Context window: 70/100.** 200K context capacity with 64K maximum output buffer covers extensive reasoning traces and multi-turn workflows.
- **Multimodal: 68/100.** High chart and document comprehension verified by 91.2% on ChartQA and 93.5% on DocVQA; text + image in, text out.
- **Coding: 75/100.** Landmark code generation and debugging capability evidenced by 62.3%–70.3% on SWE-bench Verified and 52.6%–60.4% on LiveCodeBench.
- **Cost efficiency: 60/100.** Standard mid-tier pricing at $3.00 / $15.00 per 1M tokens with prompt caching at $0.30 per 1M tokens.
- **Overall Score: 71/100.** Arithmetic mean of five quality dimensions: (70 + 72 + 70 + 68 + 75) / 5 = 71.0 → 71. Groundbreaking first hybrid-reasoning model that introduced visible extended thinking and elevated agentic coding benchmarks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public documentation, official Anthropic release announcements, independent benchmarks, and platform listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
