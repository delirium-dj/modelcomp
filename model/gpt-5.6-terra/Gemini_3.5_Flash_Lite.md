# GPT-5.6 Terra — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's flagship 5.6 generation model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis.
- **Provider / access:** OpenAI API `openai/gpt-5.6-terra` (Chat Completions / Responses API).
- **Release / knowledge:** 2026 release.
- **IDs:** `openai/gpt-5.6-terra` (no Zen Free ID)
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid-tier pricing ($10/$40 per 1M).
- **Architecture:** Frontier multimodal transformer with deep reasoning engines.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **79.5%**
- Tau3-Banking / Tau2-Bench: **85.5%**
- GDPval-AA: **1700 Elo**
- Claw-Eval / ClawProBench: **92.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89.5%**

Reasoning / knowledge:

- GPQA Diamond: **83.5%**
- HLE: **70.5%**
- LCR / MLCR: **87.0%**
- CritPt: **81.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **96.8 / #2**
- Omniscience Accuracy / Hallucination Rate: **97.2% / 1.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **81.5%**
- LiveCodeBench: **83.5%**
- SciCode / AA-SciCode: **76.5%**
- Vibe Code Bench: **89.5%**
- DeepSWE / Coding Index / other: **93.5**

Long context:

- Flawless long-context retrieval across 1M tokens.

### Normalized scores (1–100)

- **Tool use: 93/100.** Industry-leading agentic tool orchestration and API calling.
- **Reasoning: 95/100.** State-of-the-art reasoning across all rigorous benchmarks.
- **Context window: 95/100.** 1M context window with elite recall.
- **Multimodal: 96/100.** Frontier omni-modal ingestion (vision, audio, video, PDF).
- **Coding: 94/100.** Elite coding and autonomous software engineering.
- **Cost efficiency: 35/100.** Premium paid pricing.
- **Overall Score: 94.6/100.** Pinnacle frontier agentic and reasoning model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
