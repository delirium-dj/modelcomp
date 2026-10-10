# Claude Sonnet 3.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-3-5-sonnet`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's landmark mid-2024 foundation model (Claude 3.5 Sonnet) that established new benchmarks for programming, visual understanding, and tool execution; legacy foundation model largely superseded by Claude Sonnet 4, 4.5, and 5 series.
- **Provider / access:** Anthropic API (`claude-3-5-sonnet-20241022`), Claude Console, Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2024-06-20 (updated October 2024); knowledge cutoff mid-2024.
- **IDs:** `anthropic/claude-3-5-sonnet`. Legacy commercial API.
- **Context window:** 200,000 tokens total (200K context window); max output 8,192 tokens (expanded to 64K).
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2024-10):** $3.00 / 1M input tokens, $15.00 / 1M output tokens ($0.30 / 1M cached input); original 2024 pricing structure.
- **Architecture:** Dense transformer architecture with native vision projection layers and Computer Use capabilities.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.2%** (evals.report / Anthropic, 2024)
- Tau2-Bench: **78.4%**
- GDPval-AA: **1,150** Elo (Artificial Analysis, 2024)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **35.0%**

Reasoning / knowledge:

- GPQA Diamond: **65.0%** (Artificial Analysis / Anthropic, 2024)
- HLE: **14.2%** (Humanity's Last Exam without tools)
- LCR / MLCR: **68.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **28.5**
- Omniscience Accuracy / Hallucination Rate: **42% / 86%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.2%** (SWE-bench Verified) / **28.5%** (SWE-bench Pro)
- LiveCodeBench: **58.4%** pass@1
- SciCode / AA-SciCode: **32.0%**
- Vibe Code Bench: **52.0%**

Long context:

- 200K token context window evaluated with early multi-needle retrieval benchmarks.

### Normalized scores (1–100)

- **Tool use: 62/100.** Pioneer in computer use and tool integration, achieving 78.4% on Tau2-Bench and 48.2% on Terminal-Bench 2.1, surpassed by modern agentic architectures.
- **Reasoning: 66/100.** Solid general reasoning for its era with 65.0% on GPQA Diamond, trailing current frontier models.
- **Context window: 70/100.** 200K context window offers standard document-level comprehension.
- **Multimodal: 66/100.** Dependable image analysis and UI element recognition, lacking audio or video processing.
- **Coding: 61/100.** Historical coding leader with 51.2% on SWE-bench Verified, now sitting in the mid-tier compared to subsequent Sonnet iterations.
- **Cost efficiency: 60/100.** Legacy pricing at $3.00 / $15.00 per 1M tokens represents lower value compared to contemporary options.
- **Overall Score: 65/100.** Groundbreaking 2024 foundation model that defined agentic coding and computer use, now serving primarily as a benchmark reference point.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Anthropic historical technical documentation, archived benchmark leaderboards, and Artificial Analysis listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
