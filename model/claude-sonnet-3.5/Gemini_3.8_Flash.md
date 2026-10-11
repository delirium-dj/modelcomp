# Claude Sonnet 3.5 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
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
- **Pricing (as of 2026-10-11):** $3.00 / 1M input tokens, $15.00 / 1M output tokens ($0.30 / 1M cached input); archival pricing structure.
- **Architecture:** Dense transformer architecture with native vision projection layers and Computer Use capability.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.2%**
- Tau2-Bench: **78.4%**
- GDPval-AA: **1,150 Elo**
- Toolathon / SWE Atlas: **35.0%**

Reasoning / knowledge:

- GPQA Diamond: **65.0%**
- Humanity's Last Exam (HLE): **14.2%**
- Artificial Analysis Intelligence Index: **28.5**
- LCR / MLCR: **68.5%**

Coding:

- SWE-bench Verified: **49.0%–51.2%**
- SWE-bench Pro: **28.5%**
- LiveCodeBench: **58.4%** pass@1
- SciCode: **32.0%**

Long context:

- 200K token context window evaluated with early multi-needle retrieval benchmarks.

### Normalized scores (1–100)

- **Tool use: 62/100.** Pioneer in computer use and tool integration, achieving 78.4% on Tau2-Bench and 48.2% on Terminal-Bench 2.1, surpassed by modern agentic architectures.
- **Reasoning: 66/100.** Solid general reasoning for its era with 65.0% on GPQA Diamond, trailing current frontier models.
- **Context window: 70/100.** 200K context window offers standard document-level comprehension.
- **Multimodal: 66/100.** Dependable image analysis and UI element recognition, lacking audio or video processing.
- **Coding: 61/100.** Historical coding leader with 49.0%–51.2% on SWE-bench Verified, now sitting in the mid-tier compared to subsequent Sonnet iterations.
- **Cost efficiency: 60/100.** Legacy pricing at $3.00 / $15.00 per 1M tokens represents lower value compared to contemporary options.
- **Overall Score: 65/100.** Arithmetic mean of non-cost metrics: (62 + 66 + 70 + 66 + 61) / 5 = 65.0. Groundbreaking 2024 foundation model that defined agentic coding and computer use, now serving primarily as a benchmark reference point.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of Anthropic technical documentation, OpenRouter endpoints, and Artificial Analysis leaderboards.
