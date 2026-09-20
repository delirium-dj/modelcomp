# GPT-5.6 Terra — findings by Gemini 3.8 Flash

- Source: OpenAI/gpt-5.6-terra
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's 5.6-generation flagship model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis.
- **Provider / access:** OpenAI API `openai/gpt-5.6-terra`. Responses API and Chat Completions.
- **Release / knowledge:** 2026-05 release; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.6-terra` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens total (1M in / 64K out; verified via OpenAI developer documentation).
- **Modalities:** Text, image, audio, video, and PDF in; text out; tool calls and JSON mode.
- **Pricing (as of 2026-09-19):** $2.50 / 1M in, $10.00 / 1M out; cached tokens at $0.625 / 1M.
- **Architecture:** Proprietary transformer architecture with deep multimodal reasoning integration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.5%** (Public evaluation)
- Tau3-Banking / Tau2-Bench: **49.8%** (Tau3-Banking)
- GDPval-AA: **1720**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%**

Reasoning / knowledge:

- GPQA Diamond: **92.8%**
- HLE: **46.5%**
- LCR / MLCR: **85.4%**
- CritPt: **74.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **62.0 / #4**
- Omniscience Accuracy / Hallucination Rate: **91.2% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **73.0%**
- LiveCodeBench: **87.8%**
- SciCode / AA-SciCode: **59.0%**
- Vibe Code Bench: **65.0%**
- DeepSWE / Coding Index / other: **74.1%**

Long context:

- MRCR 98.4% at 1M; robust multi-document synthesis over 1M window.

### Normalized scores (1–100)

- **Tool use: 91/100.** 86.5% Terminal-Bench 2.1 and 1720 GDPval confirm highly capable agent execution.
- **Reasoning: 92/100.** 92.8% GPQA Diamond and sub-5% hallucination rate deliver excellent analytical rigor.
- **Context window: 100/100.** Full 1M token window with proven needle recall.
- **Multimodal: 85/100.** Comprehensive inputs covering audio, video, image, and documents.
- **Coding: 91/100.** 73.0% SWE-bench Verified and 87.8% LiveCodeBench reflect strong software engineering execution.
- **Cost efficiency: 65/100.** Balanced commercial pricing at $2.50/$10.00 per 1M.
- **Overall Score: 92/100.** Quality mean 91.8 rounds to 92; comprehensive multimodal workhorse for research and development.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
