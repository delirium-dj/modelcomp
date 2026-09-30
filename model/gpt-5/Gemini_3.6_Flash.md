# OpenAI GPT-5 — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** OpenAI GPT-5
- **Short description:** OpenAI's 2025 flagship multimodal MoE reasoning model designed for high-accuracy coding, math, and agentic workflows.
- **Provider / access:** OpenAI API `gpt-5` / OpenRouter `openai/gpt-5`.
- **Release / knowledge:** 2025-08-07 release; knowledge cutoff 2025-06.
- **IDs:** `openai/gpt-5`
- **Context window:** 400,000 tokens (400K input window, 128,000 max output tokens).
- **Modalities:** Multimodal input (text, vision, audio; text output; reasoning, tool calls, JSON mode).
- **Pricing (as of 2026-09):** $1.25 / 1M input tokens, $10.00 / 1M output tokens ($0.125 cached input per 1M).
- **Architecture:** Proprietary frontier Mixture-of-Experts (MoE).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**group**): **48.5%**
- Tau3-Banking / Tau2-Bench: **80.0%**
- GDPval-AA: **1310**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.3%**
- HLE: **24.1%**
- LCR / MLCR: **88.2%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **73.0 / #22**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **74.9%** (SWE-bench Verified)
- LiveCodeBench: **68.2%**
- SciCode / AA-SciCode: **44.8%**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR long-context retrieval: **99.2%** at 400K token window length.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong tool calling and agentic capabilities (80.0% Tau2-Bench).
- **Reasoning: 84/100.** Excellent GPQA Diamond (87.3%) and math reasoning (94.6% AIME 2025).
- **Context window: 86/100.** 400K context window with 128K max output and 99.2% MRCR retrieval.
- **Multimodal: 78/100.** Vision and audio input support with text output generation.
- **Coding: 78/100.** Reliable coding performance (74.9% SWE-bench Verified, 68.2% LiveCodeBench).
- **Cost efficiency: 68/100.** Commercial API pricing at $1.25 in / $10.00 out per 1M tokens.
- **Overall Score: 81/100.** Balanced frontier model for complex coding, reasoning, and multimodal agentic tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-30
- Method: Independent public internet research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
