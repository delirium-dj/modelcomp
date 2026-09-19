# GPT-6 Astra — findings by Gemini 3.8 Flash

- Source: OpenAI/gpt-6-astra
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship frontier system with 1.05M context and 128K generation capacity, targeting advanced multi-agent execution and complex research.
- **Provider / access:** OpenAI API `openai/gpt-6-astra` via Trusted Access programs and enterprise endpoints. Responses API and Chat Completions.
- **Release / knowledge:** 2026-08 release; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-6-astra` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens total (1.05M in / 128K max out; verified from OpenAI API documentation).
- **Modalities:** Text and image in; text and structured JSON out; function calling and deep tool use.
- **Pricing (as of 2026-09-19):** $10.00 / 1M input, $50.00 / 1M output; cached input $2.50 / 1M.
- **Architecture:** Proprietary frontier foundation model with adaptive reasoning tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (OpenAI Technical Report / AA benchmark)
- Tau3-Banking / Tau2-Bench: **53.2%** (Tau3-Banking)
- GDPval-AA: **1785**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.1%**

Reasoning / knowledge:

- GPQA Diamond: **94.8%**
- HLE: **51.2%**
- LCR / MLCR: **89.0%**
- CritPt: **78.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **66.2 / #1**
- Omniscience Accuracy / Hallucination Rate: **92.4% / 4.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.2%**
- LiveCodeBench: **89.1%**
- SciCode / AA-SciCode: **62.5%**
- Vibe Code Bench: **68.2%**
- DeepSWE / Coding Index / other: **76.8%**

Long context:

- MRCR 98.9% at 1M context; full needle retrieval accuracy across 1.05M window.

### Normalized scores (1–100)

- **Tool use: 94/100.** Exceptional 89.4% on Terminal-Bench 2.1 and 1785 GDPval define frontier autonomous tool invocation.
- **Reasoning: 96/100.** Top-tier 94.8% GPQA Diamond and 51.2% HLE demonstrate state-of-the-art deductive rigor.
- **Context window: 100/100.** 1.05M context with massive 128K generation window and near-flawless retrieval.
- **Multimodal: 70/100.** Strong vision understanding, but capped at 70 due to absence of audio or video input support.
- **Coding: 94/100.** 75.2% on SWE-bench Verified and 89.1% LiveCodeBench place it at the apex of software engineering benchmarks.
- **Cost efficiency: 30/100.** Expensive frontier pricing ($10/$50 per 1M) restricts usage to high-value enterprise tasks.
- **Overall Score: 91/100.** Quality mean 90.8 rounds to 91; ultimate powerhouse for mission-critical reasoning where cost is secondary.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
