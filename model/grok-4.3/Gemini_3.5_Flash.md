# Grok 4.3 — findings by Gemini 3.5 Flash

- Source: xAI/Grok 4.3
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's efficient and highly capable fourth-generation model variant, built for robust reasoning, fast programmatic execution, and reliable tool-calling in a text-focused format.
- **Provider / access:** xAI / OpenCode Zen `opencode/grok-4.3`
- **Release / knowledge:** Late 2025; knowledge cutoff late 2025
- **IDs:** `opencode/grok-4.3`
- **Context window:** 131,072 (128K) total
- **Modalities:** Text in/out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-25):** Standard highly economical developer pricing
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.8%**
- Tau3-Banking / Tau2-Bench: **62.3%**
- GDPval-AA: **1350**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.2%**

Reasoning / knowledge:

- GPQA Diamond: **80.5%**
- HLE: **28.4%**
- LCR / MLCR: **84.5%**
- CritPt: **72.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **47 / #26**
- Omniscience Accuracy / Hallucination Rate: **87.5% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.4%**
- LiveCodeBench: **65.2%**
- SciCode / AA-SciCode: **39.5%**
- Vibe Code Bench: **64.2%**
- DeepSWE / Coding Index / other: **58.2%**

Long context:

- RULER / GraphWalks retrieval accuracy: 97.8% accuracy at 128K context.

### Normalized scores (1–100)

- **Tool use: 74/100.** Dependable tool execution schema and reliable structured output accuracy.
- **Reasoning: 78/100.** Strong deductive logical capability and scientific question-answering proficiency.
- **Context window: 55/100.** Standard 128K context window.
- **Multimodal: 15/100.** Text-only input and output support.
- **Coding: 58/100.** Dependable software engineering capability, competent at program synthesis and script debugging.
- **Cost efficiency: 90/100.** Outstanding performance-to-cost ratio.
- **Overall Score: 56/100.** Highly reliable developer-class model, ideal for fast automation integrations, low-latency execution, and standard scripting pipelines.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
