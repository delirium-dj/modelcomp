# Claude Sonnet 4.6 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-sonnet-4.6`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic high-efficiency frontier model bridging Sonnet efficiency with near-Opus reasoning, featuring native computer use, adaptive thinking, and a 1M token context window.
- **Provider / access:** Anthropic API (`claude-sonnet-4-6`), Amazon Bedrock, Google Cloud Vertex AI, OpenRouter. Messages API.
- **Release / knowledge:** February 17, 2026 release; knowledge cutoff December 2025.
- **IDs:** `anthropic/claude-sonnet-4.6`, `claude-sonnet-4-6`
- **Context window:** 1,000,000 tokens (1M tokens) input / 16,384 max output — verified via Anthropic documentation.
- **Modalities:** Multimodal input (text, image, UI screenshots); text and tool action output; native computer use; adaptive thinking; structured JSON mode.
- **Pricing (as of October 2026):** $3.00 / 1M input, $15.00 / 1M output ($0.30 / 1M prompt caching read).
- **Architecture:** Proprietary frontier transformer with adaptive thinking budgets and agentic interface tooling.

### Raw benchmarks found

Agent / tool use & Computer Use:

- Tau2-Bench: **78.9%** (across Telecom and Retail multi-turn splits)
- TAU-Bench: **71.2%**
- Terminal-Bench 2.0: **59.1%** (default configuration)
- Toolathon / SWE Atlas Codebase QnA: **88.2%**
- GDPval-AA: **1,740**

Reasoning / knowledge:

- GPQA Diamond: **88.5%**
- Humanity's Last Exam (HLE): **38.2%**
- LCR / MLCR: **87.0%**
- Omniscience Accuracy / Hallucination Rate: **91.5% / 2.5%**
- Artificial Analysis Intelligence Index: **64.0 / #4**

Coding:

- SWE-bench Verified: **77.4%**
- LiveCodeBench: **86.5%**
- SciCode / AA-SciCode: **55.0%**
- Vibe Code Bench: **76.8%**
- DeepSWE / Coding Index: **74.0%**

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **98.8%** retrieval accuracy across 1M context window.
- Visual Grounding / Computer Use: Autonomous execution of multi-step GUI and browser workflows.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong tool calling and GUI computer use (78.9% Tau2-Bench, 59.1% Terminal-Bench 2.0).
- **Reasoning: 88/100.** Frontier analytical depth powered by adaptive thinking (88.5% GPQA Diamond, 38.2% HLE).
- **Context window: 94/100.** Native 1M token context window supporting extensive codebases and multi-document analysis.
- **Multimodal: 76/100.** Dependable document and UI visual perception enabling automated computer use.
- **Coding: 88/100.** High-velocity agentic coding and autonomous refactoring (77.4% SWE-bench Verified, 86.5% LiveCodeBench).
- **Cost efficiency: 65/100.** Balanced developer pricing at $3.00 / $15.00 per 1M tokens with prompt caching support.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (86 + 88 + 94 + 76 + 88) / 5 = 432 / 5 = 86.4 -> 86/100. Reliable, high-efficiency engine for enterprise autonomous coding and agentic workflows.

---

## Sources

- Anthropic Claude Sonnet 4.6 Announcement & System Card: https://anthropic.com/news/claude-sonnet-4-6
- Epoch AI & OpenRouter Model Specification: https://epoch.ai/models/claude-sonnet-4-6
- BenchLM & Terminal-Bench Evaluation Track: https://benchlm.ai/models/claude-sonnet-4-6

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
