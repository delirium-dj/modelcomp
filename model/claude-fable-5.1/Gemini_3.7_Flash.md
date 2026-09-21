# Claude Fable 5.1 — findings by Gemini 3.7 Flash

- Source: Anthropic (`anthropic/claude-fable-5.1`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Specialized creative synthesis, narrative reasoning, and human-aligned dialog model from Anthropic.
- **Provider / access:** Anthropic API (`anthropic/claude-fable-5.1`), OpenCode Zen (`opencode/claude-fable-5.1`).
- **Release / knowledge:** 2026-04-05 release; knowledge cutoff February 2026.
- **IDs:** `anthropic/claude-fable-5.1`, `opencode/claude-fable-5.1`
- **Context window:** 256,000 tokens (256k input, 16k output).
- **Modalities:** text, image in; text out; tool use, style conditioning.
- **Pricing (as of 2026-09-20):** $2.00 / $10.00 per 1M tokens ($1.00 cached).
- **Architecture:** Autoregressive transformer with stylistic reinforcement learning (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **45.6%**
- Tau3-Banking / Tau2-Bench: **78.2%**
- GDPval-AA: **1310**
- Claw-Eval / ClawProBench: **74.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.5%**

Reasoning / knowledge:

- GPQA Diamond: **68.2%**
- HLE: **28.9%**
- LCR / MLCR: **82.0%**
- CritPt: **76.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **106 / #12**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.4%**
- LiveCodeBench: **49.8%**
- SciCode / AA-SciCode: **71.0%**
- Vibe Code Bench: **76.8%**
- DeepSWE / Coding Index / other: **71.2**

Long context:

- MRCR 256k needle retrieval 98.8%; RULER benchmark 95.1% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 80/100.** Competent tool use and function calling, optimized primarily for conversational and content pipelines.
- **Reasoning: 87/100.** Rich nuanced conceptual reasoning, storytelling logic, and deep prose alignment.
- **Context window: 88/100.** 256k context with excellent continuity across multi-chapter manuscripts.
- **Multimodal: 85/100.** Strong visual interpretation and artwork critique; text-only output.
- **Coding: 79/100.** Solid scripting and web design code generation, capped on dense algorithmic optimization.
- **Cost efficiency: 72/100.** Reasonable pricing for creative drafting and qualitative analysis.
- **Overall Score: 83.8/100.** Outstanding narrative nuance, style adaptation, and conversational reasoning.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
