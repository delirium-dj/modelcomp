# Claude Sonnet 4 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-sonnet-4-0`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's balanced frontier workhorse in the Claude 4 generation, delivering robust software engineering and agentic steerability at mid-tier pricing; legacy status following official June 15, 2026 deprecation in favor of Sonnet 4.6 and Sonnet 5.5.
- **Provider / access:** Anthropic Messages API (`claude-sonnet-4-0`, `claude-sonnet-4-20250514`), [OpenRouter](https://openrouter.ai/models/anthropic/claude-sonnet-4), Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2025-05-22 release; knowledge cutoff March 2025; deprecated June 15, 2026.
- **IDs:** `anthropic/claude-sonnet-4-0`
- **Context window:** 200,000 tokens total (200K context window); max output 64,000 tokens.
- **Modalities:** Text, image, and PDF input; text, code, structured output, and tool-calling output; extended thinking mode.
- **Pricing (as of 2026-10-17):** $3.00 / 1M input tokens, $15.00 / 1M output tokens ($0.30 / 1M prompt cache read; $1.50 / $7.50 batch pricing) ([Anthropic Pricing](https://anthropic.com/pricing)).
- **Architecture:** Dense foundation transformer architecture with integrated hybrid reasoning, test-time extended thinking, and computer use capability.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **42.2%–43.9%**
- Tau3-Banking / Tau2-Bench: **80.5%** (Tau-Bench Retail) / **60.0%** (Tau-Bench Airline)
- Terminal-Bench 2.1: **41.5%–50.0%**
- GDPval-AA: **1,133** Elo
- Online-Mind2Web: **40.0%** (task success rate)
- MCP Atlas: **35.6%** (pass rate)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **75.4%** (standard mode) / **78.3%** (extended thinking mode)
- AIME (OTIS Mock): **71.1%** accuracy (standard mode: 33.1%)
- MMLU: **86.5%**
- Artificial Analysis Intelligence Index: **33**
- LMArena (Text Arena): **1,337** Elo
- Vectara Hallucination Leaderboard: **10.3%** hallucination rate
- HLE: no verified standalone public launch score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **72.7%** (SWE-bench Verified) / **42.7%** (SWE-bench Pro)
- LiveCodeBench: **55.9%–57.0%** (pass@1 with thinking) / **47.1%** (standard mode)
- Aider Polyglot: **61.3%** correct
- SciCode / AA-SciCode: **40.0%** accuracy
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 200K token context window with 64K maximum output buffer evaluated on long document analysis and multi-file code navigation.

### Normalized scores (1–100)

- **Tool use: 76/100.** Competent tool orchestration and desktop computer use evidenced by 80.5% on Tau-Bench Retail, 60.0% on Tau-Bench Airline, and 42.2%–43.9% on OSWorld; capped by mid-range MCP-Atlas performance.
- **Reasoning: 77/100.** Solid general and mathematical reasoning with extended thinking (75.4%–78.3% GPQA Diamond, 71.1% AIME OTIS Mock).
- **Context window: 72/100.** 200K token context window matches standard 200K tier with 64K maximum output buffer.
- **Multimodal: 74/100.** Reliable document and image comprehension (74.4% MMMU); text + vision/PDF in, text out.
- **Coding: 80/100.** Strong software engineering at launch with 72.7% on SWE-bench Verified, 42.7% on SWE-bench Pro, and 55.9%–57.0% on LiveCodeBench.
- **Cost efficiency: 68/100.** Standard mid-tier enterprise pricing at $3.00 / $15.00 per 1M tokens ($0.30 prompt cache).
- **Overall Score: 76/100.** Arithmetic mean of five quality dimensions: (76 + 77 + 72 + 74 + 80) / 5 = 75.8 → 76. Highly capable mid-2025 balanced agent model that set strong benchmarks for coding and tool steerability before being succeeded by Sonnet 4.6 and Sonnet 5.5.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public documentation, Anthropic official announcements, benchmark databases, and OpenRouter model documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
