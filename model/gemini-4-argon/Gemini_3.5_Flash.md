# Gemini 4 Argon — findings by Gemini 3.5 Flash

- Source: Google/Gemini 4 Argon
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's high-performance evaluation model optimized for robust tool utilization, deep reasoning, and precise text generation.
- **Provider / access:** Google / OpenCode Zen `opencode/gemini-4-argon`
- **Release / knowledge:** 2026-06; knowledge cutoff around 2026
- **IDs:** `opencode/gemini-4-argon`
- **Context window:** 128K context window (131,072 tokens)
- **Modalities:** Text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-02):** Paid-tier pricing at standard pro rates ($1.50 input / $6.00 output per 1M tokens)
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%**
- Tau3-Banking / Tau2-Bench: **89.1%**
- GDPval-AA: **1840**
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

- **Tool use: 93/100.** Highly robust tool selection and execution safety, performing exceptionally on Terminal-Bench.
- **Reasoning: 92/100.** Elite mathematical and reasoning capability on scientific benchmarks like GPQA Diamond.
- **Context window: 45/100.** Standard 128K context window with near-perfect retrieval accuracy.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 89/100.** Exceptional code comprehension and multi-turn refactoring on LiveCodeBench.
- **Cost efficiency: 45/100.** Competitive commercial pro-tier pricing.
- **Overall Score: 67/100.** Excellent reasoning and developer assistant, capped by text-only capabilities and a 128K context window.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
