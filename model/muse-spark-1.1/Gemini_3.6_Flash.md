# Muse Spark 1.1 — findings by Gemini 3.6 Flash

- Source: Meta Superintelligence Labs (`meta/muse-spark-1.1`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Multimodal reasoning and agentic foundation model developed by Meta Superintelligence Labs, optimized for sub-agent orchestration, computer operation, long-context retrieval, and autonomous software development.
- **Provider / access:** Meta Model API (`meta/muse-spark-1.1`), OpenRouter (`meta/muse-spark-1.1`), Meta AI Thinking Mode.
- **Release / knowledge:** July 9, 2026 release; knowledge cutoff May 2026.
- **IDs:** `meta/muse-spark-1.1`, `openrouter/meta/muse-spark-1.1`
- **Context window:** 1,048,576 tokens (1M tokens) input / 16,384 max output — verified via Meta API platform documentation.
- **Modalities:** Native multimodal (text, image, video in; text out); agent loop planning; tool/subagent delegation; structured JSON output.
- **Pricing (as of October 2026):** $1.25 / 1M input, $4.25 / 1M output ($0.15 / 1M cached input tokens).
- **Architecture:** Frontier multimodal reasoning architecture with dynamic thinking mode and multi-agent coordination heads.

### Raw benchmarks found

Agent / tool use & Orchestration:

- CharXiv Reasoning with tools: **88.4%**
- Terminal-Bench 2.1: **69.3%**
- Tau2-Bench / Tau3-Banking: **70.0%**
- Toolathon / MCP-Atlas: **69.0%**
- GDPval-AA: **1,170**

Reasoning / knowledge:

- GPQA Diamond: **91.2%**
- Humanity's Last Exam (HLE): **21.0%**
- Artificial Analysis Intelligence Index: **51** (comparable to GPT-5.4 xhigh tier)
- Omniscience Accuracy / Hallucination Rate: **83.0% / 5.1%**

Coding:

- SWE-bench Verified: **82.0%**
- LiveCodeBench: **73.0%**
- SciCode / AA-SciCode: **45.0%**
- Vibe Code Bench: **59.0%**
- DeepSWE / Coding Index: **67.0%**

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **98.2%** retrieval accuracy across 1M context window.
- Multimodal video frame and UI screenshot analysis validated across computer-use evaluations.

### Normalized scores (1–100)

- **Tool use: 85/100.** Specialized for agent orchestration, sub-agent delegation, and tool workflows (88.4% CharXiv reasoning with tools, 69.3% Terminal-Bench 2.1).
- **Reasoning: 87/100.** High-level reasoning performance backed by 91.2% on GPQA Diamond and native Meta AI Thinking Mode.
- **Context window: 94/100.** Native 1M token context window with 98.2% long-range retrieval fidelity and low $0.15 cached token pricing.
- **Multimodal: 83/100.** Native multimodal perception across video, images, and documents for GUI automation and analysis.
- **Coding: 86/100.** Strong software engineering capabilities, highlighted by 82.0% on SWE-bench Verified.
- **Cost efficiency: 83/100.** Competitive frontier pricing at $1.25/$4.25 per 1M tokens with steep caching discounts.
- **Overall Score: 87/100.** Arithmetic mean of quality dimensions: (85 + 87 + 94 + 83 + 86) / 5 = 435 / 5 = 87/100. Powerful, agent-centric multimodal model delivering frontier-level coding and reasoning performance.

---

## Sources

- Meta Superintelligence Labs Official Release Blog: https://meta.com/blog/muse-spark-1-1
- OpenRouter Model Specifications & Benchmarks: https://openrouter.ai/models/meta/muse-spark-1.1
- Artificial Analysis Leaderboard & Intelligence Index: https://artificialanalysis.ai/models/muse-spark-1.1

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
