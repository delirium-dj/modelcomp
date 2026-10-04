# Claude Sonnet 5.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-sonnet-5.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class everyday foundation model succeeding Claude Sonnet 5, featuring continuous thinking with granular effort control, a 1M token context window, and state-of-the-art software engineering and agentic tool use.
- **Provider / access:** Anthropic API (`claude-sonnet-5.5-20260928`), Claude Console, Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2026-09-28 release; knowledge cutoff mid-2026.
- **IDs:** `anthropic/claude-sonnet-5.5`. No Zen Free ID exists; standard paid API.
- **Context window:** 1,000,000 tokens total (1M context window); max output 65,536 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output; extended reasoning with configurable budget.
- **Pricing (as of 2026-09):** $2.00 / 1M input tokens, $10.00 / 1M output tokens ($0.20 / 1M prompt cache read); commercial API.
- **Architecture:** Proprietary transformer architecture optimized for hybrid fast-inference and extended deliberate reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.5%** (Anthropic Technical Evaluation, Sep 2026)
- Tau2-Bench: **96.2%**
- GDPval-AA: **1,310** Elo (Artificial Analysis, 2026)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **57.4%**

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Anthropic benchmarks, extended reasoning)
- HLE: **39.2%** (Humanity's Last Exam without tools)
- LCR / MLCR: **85.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58.6**
- Omniscience Accuracy / Hallucination Rate: **58% / 79%**

Coding:

- SWE-bench Verified / SWE-Pro: **82.4%** (SWE-bench Verified) / **56.8%** (SWE-bench Pro)
- LiveCodeBench: **86.2%** pass@1
- SciCode / AA-SciCode: **54.6%**
- Vibe Code Bench: **71.2%**

Long context:

- 1,000,000 tokens context window verified with MRCR needle-in-a-haystack retrieval (>99% accuracy across 1M span); AA-LCR achieved 85.0% retention.

### Normalized scores (1–100)

- **Tool use: 84/100.** Exemplary agentic tool invocation evidenced by 78.5% on Terminal-Bench 2.1 and 1,310 Elo on GDPval-AA, tailored for Model Context Protocol (MCP) integrations.
- **Reasoning: 91/100.** Powerful extended reasoning with 92.4% on GPQA Diamond, 39.2% on HLE, and 58.6 on the Artificial Analysis Intelligence Index.
- **Context window: 96/100.** 1M token context window with reliable needle retrieval and high coherence over extended documents.
- **Multimodal: 80/100.** High-fidelity visual reasoning across diagrams, UI mockups, and charts; lacks native audio/video ingestion.
- **Coding: 89/100.** Industry-leading coding capabilities demonstrated by 82.4% on SWE-bench Verified and 86.2% on LiveCodeBench.
- **Cost efficiency: 70/100.** Reasonably priced for a near-frontier workhorse at $2.00 / $10.00 per 1M tokens with strong prompt caching discounts.
- **Overall Score: 88/100.** Premier balanced agentic workhorse delivering frontier-grade coding, reasoning, and tool use with an expansive 1M context window.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Anthropic technical releases, Model Context Protocol specifications, and independent benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
