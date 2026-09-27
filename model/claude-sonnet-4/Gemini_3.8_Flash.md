# Claude Sonnet 4 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-sonnet-4-0`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's balanced frontier workhorse in the Claude 4 generation, delivering state-of-the-art coding and agentic steerability at mid-tier pricing.
- **Provider / access:** Anthropic Messages API (`claude-sonnet-4-0`, `claude-sonnet-4-20250514`), Amazon Bedrock, Google Cloud Vertex AI (retired June 15, 2026).
- **Release / knowledge:** 2025-05-22 release; knowledge cutoff March 2025.
- **IDs:** `anthropic/claude-sonnet-4-0`. Legacy/retired on primary endpoints in favor of Sonnet 4.6/5.
- **Context window:** 200,000 tokens total (200K context window); max output 64,000 tokens.
- **Modalities:** Text, image, and PDF input; text, code, structured output, and tool-calling output; extended thinking mode.
- **Pricing (as of 2025-05):** $3.00 / 1M input tokens, $0.30 / 1M prompt cache read, $15.00 / 1M output tokens.
- **Architecture:** Proprietary transformer architecture with integrated hybrid reasoning and test-time extended thinking.

### Raw benchmarks found

Agent / tool use:

- GDPval: **1133** Elo (evals.report, official May 2025)
- Online-Mind2Web: **40.00%** task success rate (evals.report, verified May 2025)
- MCP Atlas: **35.6%** pass rate (evals.report, official May 2025)
- Terminal-Bench / Tau-bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **70.0%** / **78.3%** accuracy (evals.report / AI/TLDR, May 2025)
- AIME (OTIS Mock): **71.1%** accuracy (no extended thinking: 33.1%) (evals.report / AI/TLDR, May 2025)
- Artificial Analysis Intelligence Index: **33** Index (evals.report, May 2025)
- LMArena (Text Arena): **1337** Elo (evals.report, official May 2025)
- Vectara Hallucination Leaderboard: **10.3%** hallucination rate (evals.report, official May 2025)

Coding:

- SWE-bench Verified: **72.7%** resolved (Anthropic announcement / AI/TLDR, May 2025)
- SWE-bench Pro: **42.70%** resolved (evals.report, official May 2025)
- Aider Polyglot: **61.3%** correct (evals.report, official May 2025)
- LiveCodeBench: **44.9%** pass@1 (evals.report, May 2025)
- SciCode: **40.0%** accuracy (evals.report, May 2025)

Long context:

- 200K token context window with 64K maximum output tokens evaluated on long document workflows.

### Normalized scores (1–100)

- **Tool use: 76/100.** Competent tool orchestration and web navigation (40.0% Online-Mind2Web, 1133 Elo GDPval), capped by mid-range MCP-Atlas performance.
- **Reasoning: 77/100.** Solid general and mathematical reasoning with extended thinking (78.3% GPQA Diamond, 71.1% AIME OTIS Mock).
- **Context window: 72/100.** 200K token context window matches standard 200K tier.
- **Multimodal: 74/100.** Reliable document and image comprehension (74.4% MMMU), restricted to vision and text inputs.
- **Coding: 80/100.** Strong software engineering at launch with 72.7% on SWE-bench Verified and 42.7% on SWE-bench Pro.
- **Cost efficiency: 68/100.** Standard mid-tier enterprise pricing at $3.00 / $15.00 per 1M tokens.
- **Overall Score: 76/100.** Highly capable mid-2025 balanced agent model that set strong benchmarks for coding and tool steerability before being succeeded by Sonnet 4.5/4.6.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into Anthropic official announcements and benchmark databases; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
