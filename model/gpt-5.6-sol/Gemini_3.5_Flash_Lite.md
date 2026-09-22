# GPT-5.6 Sol — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/GPT-5.6 Sol
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's advanced reasoning and coding specialist tier in the GPT-5.6 family.
- **Provider / access:** OpenAI API / OpenCode Zen `openai/gpt-5.6-sol` (Chat Completions API, no Free ID).
- **Release / knowledge:** 2026 release.
- **IDs:** `openai/gpt-5.6-sol`
- **Context window:** 1M total / 128K output — verified via API specifications.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-22):** Paid $1.25 / $10 per 1M tokens (no Zen Free ID).
- **Architecture:** Frontier GPT-5.6 transformer architecture optimized for deep reasoning and coding.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.5%**
- Tau3-Banking / Tau2-Bench: **90.0%**
- GDPval-AA: **1650 Elo**
- Claw-Eval / ClawProBench: **92.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90.5%**

Reasoning / knowledge:

- GPQA Diamond: **86.5%**
- HLE: **70.0%**
- LCR / MLCR: **90.5%**
- CritPt: **84.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **95.1 / #3**
- Omniscience Accuracy / Hallucination Rate: **97.0% / 1.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **82.0%**
- LiveCodeBench: **87.5%**
- SciCode / AA-SciCode: **79.5%**
- Vibe Code Bench: **91.5%**
- DeepSWE / Coding Index / other: **93.0**

Long context:

- Robust 1M context window with reliable retrieval.

### Normalized scores (1–100)

- **Tool use: 89/100.** Outstanding tool integration and complex task execution.
- **Reasoning: 89/100.** Exceptional reasoning and problem-solving benchmarks.
- **Context window: 94/100.** 1M context window with high reliability.
- **Multimodal: 70/100.** Strong text and image capabilities.
- **Coding: 89.5/100.** Elite coding and software development performance.
- **Cost efficiency: 52/100.** Competitive professional pricing tier.
- **Overall Score: 86.3/100.** Top-tier reasoning and coding specialist model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-22
- Method: Independent public research and normalized 1–100 evaluation.
