# GPT-5.1 — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.1 (`gpt-5.1`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** The sharper GPT-5 generation (released 2025-11-13) for coding, product work and tool-assisted tasks — now five GPT generations old.
- **Provider / access:** OpenAI API/Responses (`gpt-5.1`), Azure OpenAI, plus ~30 gateway routes (AI/ML API, LLM Gateway, Vercel, Prime, FastRouter, Merge Gateway).
- **Release / knowledge:** 2025-11-13; knowledge cutoff 2024-09-30 (models.dev).
- **IDs:** `gpt-5.1`, `openai/gpt-5.1`, `azure/gpt-5.1`, `opencode/gpt-5.1`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.25 / $10.00 per 1M input/output; cache read $0.125.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- OTelBench (OpenTelemetry instrumentation): **14.5%** (near-floor)
- Gert Labs composite: **41.24**
- Terminal-Bench / Toolathlon / MCP-Atlas / OSWorld: no verified public rows published for 5.1
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **72.83%**; FailureSensorIQ: **62.9%**
- Chess Puzzles: **42.0%**; Mystery Game Puzzles: **16.0%**
- HLE / GPQA Diamond / FrontierMath: no verified public rows published

Coding:

- Vibe Code Bench v1.1: **24.61%** (near-floor)
- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published for 5.1

Long context:

- 400K context (272K input) documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 55/100.** OTelBench 14.5% is near-floor and Gert Labs 41.24 is weak; with no terminal/OSWorld row published the score is a low-confidence floor.
- **Reasoning: 62/100.** ARC-AGI-1 72.83% and FailureSensorIQ 62.9% are mid for a 2025 model; Mystery Game Puzzles 16.0% is weak.
- **Context window: 85/100.** 400,000 tokens with 272,000 input — below the 1M frontier.
- **Multimodal: 65/100.** Text and image in only (no PDF, unlike later GPT-5.x tiers); no public multimodal benchmark rows.
- **Coding: 60/100.** Vibe Code Bench 24.61% is the only verified coding row and it is near-floor; no SWE-bench or LiveCodeBench row was published.
- **Cost efficiency: 82/100.** $1.25/$10 per 1M is cheap in absolute terms but well above GPT-5.6 Luna's $0.20/$1.20.
- **Overall Score: 65.4/100.** Best fit for legacy GPT-5.1 integrations; there is no reason to start new work on it.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.1 — OpenAI](https://openai.com/index/gpt-5-1/)
  - [GPT-5.1 benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-1)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.1_v2.md`, using the same headings.