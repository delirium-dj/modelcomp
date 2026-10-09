# Claude Haiku 4.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-haiku-4.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's compact high-throughput foundation model released in October 2025, offering extended thinking and computer use capabilities designed for sub-agent orchestration and large-scale automated pipelines.
- **Provider / access:** Anthropic API (`claude-haiku-4.5-20251015`), Claude Console, Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2025-10-15 release; knowledge cutoff mid-2025.
- **IDs:** `anthropic/claude-haiku-4.5`. Commercial pay-as-you-go API.
- **Context window:** 200,000 tokens total (200K context window); max output 64,000 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output; extended thinking with budget controls.
- **Pricing (as of 2025-10):** $1.00 / 1M input tokens, $5.00 / 1M output tokens ($0.10 / 1M cached input); accessible high-volume pricing.
- **Architecture:** Compact high-efficiency transformer tuned for low-latency generation and structured tool execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.5%** (evals.report / Anthropic, 2025)
- Tau2-Bench: **84.0%**
- GDPval-AA: **1,185** Elo (Artificial Analysis, 2025)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **39.5%**

Reasoning / knowledge:

- GPQA Diamond: **78.4%** (Artificial Analysis / Anthropic, 2025)
- HLE: **20.5%** (Humanity's Last Exam without tools)
- LCR / MLCR: **73.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **34.8**
- Omniscience Accuracy / Hallucination Rate: **47% / 82%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.2%** (SWE-bench Verified) / **36.5%** (SWE-bench Pro)
- LiveCodeBench: **71.5%** pass@1
- SciCode / AA-SciCode: **37.8%**
- Vibe Code Bench: **59.2%**

Long context:

- 200K token context window with 64K max output buffer evaluated across multi-document and code-navigation benchmarks.

### Normalized scores (1–100)

- **Tool use: 70/100.** Fast and reliable function calling and computer use evidenced by 84.0% on Tau2-Bench and 58.5% on Terminal-Bench 2.1.
- **Reasoning: 73/100.** Capable problem-solving and thinking trace execution with 78.4% on GPQA Diamond and 34.8 on the AA Intelligence Index.
- **Context window: 72/100.** 200K context window with 64K maximum output buffer covers typical subagent tasks.
- **Multimodal: 70/100.** Solid visual processing across user interfaces, document layouts, and diagnostic diagrams.
- **Coding: 72/100.** Reliable coding output demonstrated by 66.2% on SWE-bench Verified and 71.5% on LiveCodeBench.
- **Cost efficiency: 84/100.** Highly economical at $1.00 / $5.00 per 1M tokens with prompt caching discounts.
- **Overall Score: 71/100.** Agile, cost-efficient workhorse ideally matched for sub-agents, automated classification, and rapid code review loops.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Anthropic product announcements, developer documentation, and Artificial Analysis benchmark listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
