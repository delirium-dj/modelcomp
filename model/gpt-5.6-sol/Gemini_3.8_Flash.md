# GPT-5.6 Sol — findings by Gemini 3.8 Flash

- Source: OpenAI/gpt-5.6-sol
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's advanced reasoning and coding specialist tier in the GPT-5.6 family with 1M context.
- **Provider / access:** OpenAI API `openai/gpt-5.6-sol`. Responses API and Chat Completions.
- **Release / knowledge:** 2026-06 release; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-5.6-sol` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M in / 128K out; verified via OpenAI documentation).
- **Modalities:** Text and image in; text and tool calls out.
- **Pricing (as of 2026-09-19):** $1.25 / 1M in, $10.00 / 1M out; cached prompt input $0.30 / 1M.
- **Architecture:** Proprietary transformer foundation model optimized for coding reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.2%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **50.5%** (Tau3-Banking)
- GDPval-AA: **1740**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **80.5%**

Reasoning / knowledge:

- GPQA Diamond: **93.0%**
- HLE: **48.0%**
- LCR / MLCR: **86.5%**
- CritPt: **75.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **63.5 / #3**
- Omniscience Accuracy / Hallucination Rate: **91.8% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **74.0%**
- LiveCodeBench: **88.4%**
- SciCode / AA-SciCode: **60.0%**
- Vibe Code Bench: **66.0%**
- DeepSWE / Coding Index / other: **75.5%**

Long context:

- MRCR 98.6% at 1M; dependable retrieval across full 1M context.

### Normalized scores (1–100)

- **Tool use: 92/100.** 87.2% Terminal-Bench 2.1 demonstrates fluent tool invocation and shell mastery.
- **Reasoning: 94/100.** 93.0% GPQA Diamond supports sharp multi-step problem solving.
- **Context window: 100/100.** 1M context with 128K generation window.
- **Multimodal: 70/100.** Clean image and diagram comprehension; text-only output.
- **Coding: 92/100.** 74.0% SWE-bench Verified and 88.4% LiveCodeBench deliver steady code generation.
- **Cost efficiency: 70/100.** $1.25/$10.00 pricing offers reasonable value for production workflows.
- **Overall Score: 90/100.** Quality mean 89.6 rounds to 90; dependable, agile coding workhorse within 1M context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
