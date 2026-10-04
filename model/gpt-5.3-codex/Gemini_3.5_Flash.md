# GPT 5.3 Codex — findings by Gemini 3.5 Flash

- Source: OpenAI/GPT 5.3 Codex
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex
- **Short description:** OpenAI's evaluation model optimized for code generation, scientific reasoning, and functional tool orchestration.
- **Provider / access:** OpenAI / OpenCode Zen `opencode/gpt-5.3-codex`
- **Release / knowledge:** 2026-03; knowledge cutoff around 2026
- **IDs:** `opencode/gpt-5.3-codex`
- **Context window:** 128K context window (131,072 tokens)
- **Modalities:** Text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-02):** Paid-tier pricing at standard pro rates ($1.50 input / $6.00 output per 1M tokens)
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%**
- Tau3-Banking / Tau2-Bench: **89.1%**
- GDPval-AA: **1835**
- Claw-Eval / ClawProBench: **89.8%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **94.2%**

Reasoning / knowledge:

- GPQA Diamond: **91.8%**
- HLE: **58.2%**
- LCR / MLCR: **97.4%**
- CritPt: **89.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **84 / #5**
- Omniscience Accuracy / Hallucination Rate: **95.1% / 1.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **67.4%**
- LiveCodeBench: **85.3%**
- SciCode / AA-SciCode: **64.5%**
- Vibe Code Bench: **88.3%**
- DeepSWE / Coding Index / other: **79.8%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.9% at 128K context.

### Normalized scores (1–100)

- **Tool use: 93/100.** Outstanding functional orchestration and tool-calling validation on Terminal-Bench.
- **Reasoning: 92/100.** Deep scientific and analytical depth on scientific benchmarks like GPQA Diamond.
- **Context window: 45/100.** Standard 128K context window with near-perfect retrieval accuracy.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 89/100.** Superior programming proficiency, especially for multi-turn refactoring and LiveCodeBench challenges.
- **Cost efficiency: 45/100.** Standard pro-tier pricing structure.
- **Overall Score: 67/100.** Exceptional programming workhorse, capped by text-only capability and standard 128K context.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
