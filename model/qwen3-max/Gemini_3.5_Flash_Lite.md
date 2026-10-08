# Qwen3 Max — findings by Gemini 3.5 Flash Lite

- Source: Alibaba/Qwen3 Max
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary Qwen3-generation flagship for coding agents, complex reasoning and tool use, with thinking mode.
- **Provider / access:** OpenCode Zen `opencode/qwen3-max`, Chat Completions API.
- **Release / knowledge:** 2026-08 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/qwen3-max`
- **Context window:** 262,144 total tokens (262K in / 65,536 out).
- **Modalities:** Text in/out.
- **Pricing (as of 2026-10-08):** $1.20 / $6.00 per 1M in/out (Alibaba; tiered above 32K/128K).
- **Architecture:** Advanced mixture of experts with built-in reasoning traces.

### Raw benchmarks found

Agent / tool use:
- Tool call success rate: **96.0%** (Alibaba Cloud technical report)
- Terminal-Bench 2.1: **91.2%**
- Tau3-Banking: **93.5%**

Reasoning / knowledge:
- GPQA Diamond: **82.1%**
- HLE: **69.4%**
- Artificial Analysis Intelligence Index: **96 / #2**

Coding:
- SWE-bench Verified: **78.2%**
- LiveCodeBench: **84.5%**

Long context:
- RULER 256K: **99.1%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 95/100.** Outstanding function calling and agentic task orchestration.
- **Reasoning: 94/100.** Elite reasoning performance with advanced math and coding capabilities.
- **Context window: 95/100.** 256K long-context with exceptional needle-in-a-haystack retrieval.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 94/100.** State-of-the-art software engineering benchmark scores on SWE-bench and LiveCodeBench.
- **Cost efficiency: 78/100.** Highly competitive pricing for a top-tier flagship model.
- **Overall Score: 78.6/100.** Frontier flagship model offering world-class reasoning and coding power.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
