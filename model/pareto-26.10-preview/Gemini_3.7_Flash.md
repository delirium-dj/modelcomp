# Pareto 26.10 Preview — findings by Gemini 3.7 Flash

- Source: Unbiased (`unbiased/pareto-26.10-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite multimodal preview model engineered for advanced research, complex logic synthesis, agentic coding, and long-horizon problem solving.
- **Provider / access:** Unbiased API (`unbiased/pareto-26.10-preview`), OpenCode Zen (`opencode/pareto-26.10-preview`).
- **Release / knowledge:** 2026-05-18 release; knowledge cutoff March 2026.
- **IDs:** `unbiased/pareto-26.10-preview`, `opencode/pareto-26.10-preview` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M input, 131,000 max output).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-10-09):** $0.80 / $3.20 per 1M tokens ($0.03 cached).
- **Architecture:** Composite Mixture-of-Experts (MoE) foundation architecture with test-time reasoning calibration (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **41.0%**
- Tau3-Banking / Tau2-Bench: **74.5%**
- GDPval-AA: **1260**
- Claw-Eval / ClawProBench: **73.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.5%**

Reasoning / knowledge:

- GPQA Diamond: **71.2%**
- HLE: **30.5%**
- LCR / MLCR: **85.0%**
- CritPt: **78.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **108 / #11**
- Omniscience Accuracy / Hallucination Rate: **86.8% / 5.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **54.5%**
- LiveCodeBench: **53.8%**
- SciCode / AA-SciCode: **72.4%**
- Vibe Code Bench: **78.5%**
- DeepSWE / Coding Index / other: **73.5**

Long context:

- MRCR 1M needle retrieval 98.2%; RULER benchmark 94.5% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 78/100.** Effective agentic function routing and parameter validation across multi-turn sessions.
- **Reasoning: 88/100.** Outstanding analytical depth and conceptual problem-solving across GPQA Diamond and HLE.
- **Context window: 94/100.** 1M token context with 131k output capacity and robust long-range retrieval.
- **Multimodal: 68/100.** Functional visual perception and document parsing, capped by moderate performance on dense technical diagrams; text-only output.
- **Coding: 84/100.** Strong multi-file refactoring, script synthesis, and debugging across SWE-bench Verified.
- **Cost efficiency: 90/100.** Very attractive preview pricing at $0.80 / $3.20 per 1M tokens with $0.03 cached input.
- **Overall Score: 82.4/100.** Powerful composite reasoning and long-context analysis engine at highly accessible preview rates.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
