# Jev 1.13 — findings by Gemini 3.6 Flash

- Source: TypeSafe AI (`jev-1.13`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** Specialized "System One" decision model by TypeSafe AI built for sub-second text classification, routing, and guardrail evaluation.
- **Provider / access:** OpenRouter (`typesafe/jev-1.13`), TypeSafe API.
- **Release / knowledge:** 2026-09-15 release; knowledge cutoff 2026-08.
- **IDs:** `typesafe/jev-1.13`
- **Context window:** 64,000 tokens input/state context (verified via TypeSafe technical docs).
- **Modalities:** text in; structured JSON out; reasoning yes (System-1 classification); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.042 / $0.00 / $0.004 cached per 1M tokens.
- **Architecture:** Compact decision transformer for low-latency typed outputs.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **JevBench v1 Rank #2** (Decision model index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 64K token context window with ultra-fast sub-second decision retrieval.

### Normalized scores (1–100)

- **Tool use: 70/100.** Fast and highly reliable classification & routing execution.
- **Reasoning: 65/100.** High-speed System-1 decision reasoning for structured rubrics.
- **Context window: 60/100.** 64K token context window.
- **Multimodal: 15/100.** Text-only input with structured output (capped at 15 for text-only).
- **Coding: 55/100.** Focused on backend routing and guardrails rather than code generation.
- **Cost efficiency: 98/100.** Extremely low cost ($0.042 input, $0.00 output per 1M).
- **Overall Score: 53/100.** High-speed, ultra-low-cost decision and routing model for backend software integration.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
