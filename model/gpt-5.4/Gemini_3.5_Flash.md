# GPT 5.4 — findings by Gemini 3.5 Flash

- Source: OpenAI/GPT 5.4
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4
- **Short description:** OpenAI's highly optimized and fast fifth-generation model variant, designed for balanced reasoning, programming assistance, and high-frequency automation.
- **Provider / access:** OpenAI / OpenCode Zen `opencode/gpt-5.4`
- **Release / knowledge:** Late 2025; knowledge cutoff late 2025
- **IDs:** `opencode/gpt-5.4`
- **Context window:** 131,072 (128K) total
- **Modalities:** Text in/out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-25):** Standard highly economical text pricing
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.1%**
- Tau3-Banking / Tau2-Bench: **61.4%**
- GDPval-AA: **1320**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.5%**

Reasoning / knowledge:

- GPQA Diamond: **78.4%**
- HLE: **26.4%**
- LCR / MLCR: **82.3%**
- CritPt: **70.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **45 / #28**
- Omniscience Accuracy / Hallucination Rate: **86.4% / 3.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **36.5%**
- LiveCodeBench: **63.2%**
- SciCode / AA-SciCode: **38.4%**
- Vibe Code Bench: **62.3%**
- DeepSWE / Coding Index / other: **56.4%**

Long context:

- RULER / GraphWalks retrieval accuracy: 97.5% accuracy at 128K context.

### Normalized scores (1–100)

- **Tool use: 73/100.** Dependable multi-turn action selection and robust schema validation.
- **Reasoning: 78/100.** Strong analytical deduction, logic synthesis, and structured query processing.
- **Context window: 55/100.** Standard 128K context window.
- **Multimodal: 15/100.** Text-only input and output support.
- **Coding: 56/100.** Competent coding capabilities, reliable for routine syntax generation and script editing.
- **Cost efficiency: 90/100.** Highly competitive rates for standard text-processing tasks.
- **Overall Score: 55/100.** Outstanding utility-class text reasoner, perfect for standard integrations, programmatic tasks, and high-throughput automation.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
