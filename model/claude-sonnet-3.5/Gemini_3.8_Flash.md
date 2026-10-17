# Claude Sonnet 3.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-3.5-sonnet`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's landmark 2024 foundation model (Claude 3.5 Sonnet) that established early standards for programming, visual understanding, and tool execution; legacy foundation model decommissioned on direct first-party endpoints and succeeded by Sonnet 4, Sonnet 4.5, and the Claude 5.5 generation.
- **Provider / access:** Legacy Anthropic API (`claude-3-5-sonnet-20241022`), [OpenRouter](https://openrouter.ai/models/anthropic/claude-3.5-sonnet) (`anthropic/claude-3.5-sonnet`), Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** June 20, 2024 (upgraded October 22, 2024); knowledge cutoff mid-2024.
- **Lifecycle status:** Decommissioned on official Anthropic direct API in late 2025; available through select aggregator routing archives (succeeded by Claude Sonnet 5.5).
- **IDs:** `anthropic/claude-3.5-sonnet`, `anthropic/claude-3-5-sonnet-20241022`
- **Context window:** 200,000 tokens total (200K context window); max output 8,192 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-10-17):** $3.00 / 1M input tokens, $15.00 / 1M output tokens ($0.30 / 1M cached input); archival pricing structure.
- **Architecture:** Dense transformer architecture with native vision projection layers and pioneer Computer Use capability.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **14.9%** (initial release) / **22.0%** (with scaffolding)
- Terminal-Bench 2.1: **48.2%**
- Tau3-Banking / Tau2-Bench: **69.2%** ($\tau$-Bench Retail) / **46.0%** ($\tau$-Bench Airline)
- GDPval-AA: **1,150** Elo
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **35.0%** (SWE Atlas)

Reasoning / knowledge:

- GPQA Diamond: **59.3%** (0-shot CoT) / **65.0%** (standardized test harness)
- HLE: **14.2%**
- LCR / MLCR: **68.5%**
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **28.5**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **49.0%** (SWE-bench Verified) / **28.5%** (SWE-bench Pro)
- LiveCodeBench: **36.4%–38.1%** (pass@1 contamination-free subset; 58.4% on unconstrained harnesses)
- SciCode / AA-SciCode: **26.0%–31.6%** (subproblem pass@1) / **4.6%** (main-problem pass@1)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 200K token context window evaluated with early multi-needle retrieval benchmarks; effective retrieval within 200K bounds with 8K output limit.

### Normalized scores (1–100)

- **Tool use: 62/100.** Pioneer in computer use and tool integration, achieving 69.2% on Tau-Bench Retail, 46.0% on Tau-Bench Airline, and 48.2% on Terminal-Bench 2.1, surpassed by modern agentic architectures.
- **Reasoning: 66/100.** Solid general reasoning for its era with 59.3%–65.0% on GPQA Diamond and 14.2% on HLE, trailing current frontier models.
- **Context window: 70/100.** 200K context window offers standard document-level comprehension, capped by 8,192 maximum output tokens.
- **Multimodal: 66/100.** Dependable image analysis and UI element recognition, lacking audio or video processing; text + vision in, text out.
- **Coding: 61/100.** Historical coding leader with 49.0% on SWE-bench Verified and 36.4%–38.1% on LiveCodeBench, now sitting in the mid-tier compared to subsequent Sonnet iterations.
- **Cost efficiency: 60/100.** Legacy pricing at $3.00 / $15.00 per 1M tokens represents lower value compared to contemporary options.
- **Overall Score: 65/100.** Arithmetic mean of five quality dimensions: (62 + 66 + 70 + 66 + 61) / 5 = 65.0 → 65. Groundbreaking 2024 foundation model that defined agentic coding and computer use, now serving primarily as a benchmark reference point.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public documentation, historical Anthropic announcements, developer documentation, and OpenRouter archive listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
