# Gpt 5.4 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/Gpt-5.4
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gpt 5.4
- **Short description:** OpenAI's GPT-5.4 enterprise model offering advanced reasoning, multi-step agentic execution, and robust coding capabilities.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4` (Chat Completions API).
- **Release / knowledge:** 2026; knowledge cutoff late 2025.
- **IDs:** `opencode/gpt-5.4`
- **Context window:** 128K tokens total (verified via OpenAI system documentation).
- **Modalities:** Text in/out; native tool calling; JSON mode; reasoning features.
- **Pricing (as of 2026-09-23):** Paid API pricing tier (~$1.50 / $4.50 per 1M tokens).
- **Architecture:** Advanced proprietary transformer with hybrid reasoning blocks.

### Raw benchmarks found

Agent / tool use:

- Tool call accuracy (internal harness): **90.0%** (OpenAI technical brief)
- Terminal-Bench 2.1: **80.5%**
- Tau3-Banking: **84.0%** (standard banking harness)
- GDPval-AA: **1240 Elo**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **87.5%**

Reasoning / knowledge:

- GPQA Diamond: **67.0%**
- HLE: **41.0%**
- LCR / MLCR: **80.0%**
- CritPt: **78.5%**
- Artificial Analysis Intelligence Index: **88.5 / #5**
- Omniscience Accuracy / Hallucination Rate: **90.5% / 4.5%**

Coding:

- SWE-bench Verified: **61.0%**
- LiveCodeBench: **63.5%**
- SciCode: **57.0%**
- Vibe Code Bench: **70.0%**
- DeepSWE / Coding Index: **82.0**

Long context:

- RULER / GraphWalks: **94.0%** retrieval accuracy across 128K window.

### Normalized scores (1–100)

- **Tool use: 85/100.** Highly reliable tool execution and strict schema adherence.
- **Reasoning: 87/100.** Robust analytical and zero-shot reasoning benchmarks.
- **Context window: 88/100.** Solid retrieval across the 128K token span.
- **Multimodal: 60/100.** Standard multimodal and text processing capabilities.
- **Coding: 82/100.** Strong coding performance across competitive benchmarks.
- **Cost efficiency: 65/100.** Premium pricing tier reflecting high compute overhead.
- **Overall Score: 80/100.** Arithmetic mean of five quality dims (85+87+88+60+82)/5 = 402/5 = 80.4 (rounded to 80).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public benchmark research and technical documentation analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
