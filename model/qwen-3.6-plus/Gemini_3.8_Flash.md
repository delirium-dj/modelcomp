# Qwen 3.6 Plus — findings by Gemini 3.8 Flash

- Source: Alibaba Cloud / Qwen (`alibaba/qwen-3.6-plus`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba Cloud's enhanced commercial API foundation model in the Qwen 3.6 generation, featuring upgraded multi-step agentic planning, low-latency reasoning, native 1M context window, and competitive API pricing.
- **Provider / access:** Alibaba Cloud DashScope API (`qwen-3.6-plus`), OpenRouter, SiliconFlow.
- **Release / knowledge:** 2026-05-18 release; knowledge cutoff mid-2026.
- **IDs:** `alibaba/qwen-3.6-plus`. Commercial API.
- **Context window:** 1,000,000 tokens total (1M context window); max output 65,536 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-05):** $0.40 / 1M input tokens, $1.20 / 1M output tokens ($0.10 / 1M cached input); economical commercial pricing.
- **Architecture:** Hybrid dense-MoE transformer architecture with optimized attention kernels for sustained long-context throughput.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.8%** (Artificial Analysis / Alibaba Technical Report, 2026)
- Tau2-Bench: **90.8%**
- GDPval-AA: **1,248** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **48.8%**

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (Artificial Analysis, 2026)
- HLE: **29.8%** (Humanity's Last Exam without tools)
- LCR / MLCR: **85.0%** (AA-LCR long-context reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **45.5**
- Omniscience Accuracy / Hallucination Rate: **53% / 78%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.8%** (SWE-bench Verified) / **43.8%** (SWE-bench Pro)
- LiveCodeBench: **79.2%** pass@1
- SciCode / AA-SciCode: **46.5%**
- Vibe Code Bench: **65.0%**

Long context:

- 1,000,000 tokens context window verified with MRCR needle retrieval (>98% retention across 1M span) and 85.0% AA-LCR score.

### Normalized scores (1–100)

- **Tool use: 78/100.** Effective multi-step tool execution evidenced by 90.8% on Tau2-Bench and 1,248 Elo on GDPval-AA.
- **Reasoning: 85/100.** Strong mathematical and scientific reasoning capability with 85.5% on GPQA Diamond and 45.5 on the AA Intelligence Index.
- **Context window: 95/100.** Native 1M token context window with solid needle-in-a-haystack recovery.
- **Multimodal: 75/100.** Dependable visual interpretation across charts, infographics, and technical diagrams.
- **Coding: 78/100.** Capable code generation and debugging with 72.8% on SWE-bench Verified and 79.2% on LiveCodeBench.
- **Cost efficiency: 92/100.** Excellent cost-to-performance ratio at $0.40 / $1.20 per 1M tokens.
- **Overall Score: 82/100.** Balanced, highly affordable enterprise foundation model ideal for agentic tooling and extended context tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Alibaba Cloud DashScope updates, release notes, and Artificial Analysis benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
