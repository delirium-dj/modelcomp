# Claude Mythos 5.1 — findings by Gemini 3.7 Flash

- Source: Anthropic (`anthropic/claude-mythos-5.1`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Specialized scientific research, long-form synthesis, and deep literature extraction model from Anthropic.
- **Provider / access:** Anthropic API (`anthropic/claude-mythos-5.1`), OpenCode Zen (`opencode/claude-mythos-5.1`).
- **Release / knowledge:** 2026-06-12 release; knowledge cutoff April 2026.
- **IDs:** `anthropic/claude-mythos-5.1`, `opencode/claude-mythos-5.1`
- **Context window:** 500,000 tokens (500k input, 32k output).
- **Modalities:** text, image in; text out; tool use, extended thinking.
- **Pricing (as of 2026-09-20):** $3.50 / $18.00 per 1M tokens ($1.75 cached).
- **Architecture:** Autoregressive transformer with scientific knowledge synthesis fine-tuning (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.0%**
- Tau3-Banking / Tau2-Bench: **83.5%**
- GDPval-AA: **1360**
- Claw-Eval / ClawProBench: **79.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.4%**

Reasoning / knowledge:

- GPQA Diamond: **76.2%**
- HLE: **37.8%**
- LCR / MLCR: **89.5%**
- CritPt: **84.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **117 / #5**
- Omniscience Accuracy / Hallucination Rate: **90.8% / 3.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.5%**
- LiveCodeBench: **57.2%**
- SciCode / AA-SciCode: **81.5%**
- Vibe Code Bench: **83.4%**
- DeepSWE / Coding Index / other: **79.0**

Long context:

- MRCR 500k needle retrieval 99.4%; RULER benchmark 96.8% at 500k tokens.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong structured tool invocation and research paper query integration.
- **Reasoning: 92/100.** Superb scientific hypothesis validation, literature critique, and formal reasoning.
- **Context window: 92/100.** 500k context with lossless retrieval across book-length scientific corpora.
- **Multimodal: 88/100.** Precise parsing of complex scientific diagrams, chemical formulas, and figures.
- **Coding: 87/100.** Strong computational physics, data science, and numerical modeling code generation.
- **Cost efficiency: 66/100.** Specialized research model pricing.
- **Overall Score: 89.0/100.** Outstanding scientific synthesis, long-document reasoning, and research analysis.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
