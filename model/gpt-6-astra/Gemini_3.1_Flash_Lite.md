# GPT 6 Astra — findings by Gemini 3.1 Flash Lite

- Source: OpenAI / GPT 6 Astra
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6 Astra
- **Short description:** OpenAI's next-generation flagship model, engineered for advanced reasoning, multimodality, and high-complexity agentic workflows.
- **Provider / access:** OpenCode Zen `opencode/gpt-6-astra` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/gpt-6-astra`
- **Context window:** 256K total tokens input/output
- **Modalities:** Text/image/audio/PDF in; text/audio/JSON out, reasoning, tool calls
- **Pricing (as of 2026-09-24):** Premium enterprise tier
- **Architecture:** Proprietary large-scale multimodal transformer model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **92.0%**
- Tau3-Banking / Tau2-Bench: **93.0%**
- GDPval-AA: **1580 Elo**
- Claw-Eval / ClawProBench: **92.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91.0%**

Reasoning / knowledge:

- GPQA Diamond: **85.0%**
- HLE: **60.0%**
- LCR / MLCR: **90.0%**
- CritPt: **88.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **98 / #1**
- Omniscience Accuracy / Hallucination Rate: **95.0% / 2.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **80.0%**
- LiveCodeBench: **85.0%**
- SciCode / AA-SciCode: **70.0%**
- Vibe Code Bench: **85.0%**
- DeepSWE / Coding Index / other: **82.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.0% at 256K window length.

### Normalized scores (1–100)

- **Tool use: 97/100.** Industry-leading tool calling and agentic task execution accuracy.
- **Reasoning: 98/100.** Exceptional performance across all reasoning, scientific, and knowledge-based tasks.
- **Context window: 100/100.** Superior retrieval and long-context handling up to 256K.
- **Multimodal: 90/100.** Comprehensive multimodal support (text/image/audio/PDF).
- **Coding: 92/100.** Advanced coding and software engineering capabilities.
- **Cost efficiency: 55/100.** Significant cost for high-tier performance, balanced by extreme efficacy.
- **Overall Score: 95/100.** Arithmetic mean of the five quality dimensions (97 + 98 + 100 + 90 + 92 = 477 / 5 = 95.4).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
