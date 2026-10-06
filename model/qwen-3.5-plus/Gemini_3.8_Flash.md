# Qwen 3.5 Plus — findings by Gemini 3.8 Flash

- Source: Alibaba Cloud / Qwen (`alibaba/qwen-3.5-plus`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba Cloud's balanced commercial API flagship in the Qwen 3.5 generation, offering native 1M token context, high-performance tool invocation, robust bilingual reasoning, and economical pricing.
- **Provider / access:** Alibaba Cloud DashScope API (`qwen-3.5-plus`), OpenRouter, SiliconFlow.
- **Release / knowledge:** 2026-02-15 release; knowledge cutoff early 2026.
- **IDs:** `alibaba/qwen-3.5-plus`. Low-cost commercial API.
- **Context window:** 1,000,000 tokens total (1M context window); max output 65,536 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-02):** $0.40 / 1M input tokens, $1.20 / 1M output tokens ($0.10 / 1M cached input); budget-friendly enterprise pricing.
- **Architecture:** Dense-MoE hybrid transformer architecture with rotary embeddings optimized for long-context stability.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.4%** (Artificial Analysis / Alibaba Technical Report, 2026)
- Tau2-Bench: **89.5%**
- GDPval-AA: **1,240** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **47.5%**

Reasoning / knowledge:

- GPQA Diamond: **84.8%** (Artificial Analysis, 2026)
- HLE: **28.6%** (Humanity's Last Exam without tools)
- LCR / MLCR: **84.2%** (AA-LCR long-context reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **44.8**
- Omniscience Accuracy / Hallucination Rate: **52% / 79%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.8%** (SWE-bench Verified) / **42.5%** (SWE-bench Pro)
- LiveCodeBench: **78.2%** pass@1
- SciCode / AA-SciCode: **45.8%**
- Vibe Code Bench: **64.2%**

Long context:

- 1,000,000 tokens context window verified with MRCR needle retrieval (>97% retention across 1M span) and 84.2% AA-LCR score.

### Normalized scores (1–100)

- **Tool use: 78/100.** Reliable tool calling and API orchestration evidenced by 89.5% on Tau2-Bench and 1,240 Elo on GDPval-AA.
- **Reasoning: 84/100.** Strong analytical, bilingual, and quantitative reasoning with 84.8% on GPQA Diamond and 44.8 on the AA Intelligence Index.
- **Context window: 95/100.** Native 1M token context window with reliable long-sequence retrieval retention.
- **Multimodal: 75/100.** Competent visual parsing across charts, technical schematics, and business documents.
- **Coding: 78/100.** Solid code synthesis and debugging demonstrated by 71.8% on SWE-bench Verified and 78.2% on LiveCodeBench.
- **Cost efficiency: 92/100.** Highly competitive pricing at $0.40 / $1.20 per 1M tokens.
- **Overall Score: 82/100.** Versatile, cost-efficient workhorse model delivering 1M context and dependable multi-step reasoning.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Alibaba Cloud DashScope documentation, technical releases, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
