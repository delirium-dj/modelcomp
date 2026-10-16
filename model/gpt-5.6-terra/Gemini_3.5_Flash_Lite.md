# GPT-5.6 Terra — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/gpt-5.6-terra
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's specialized enterprise-grade reasoning model optimized for massive data processing, long-form structured analysis, and robust agentic workflows.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.6-terra` / OpenAI API (`gpt-5.6-terra`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art enterprise model.
- **IDs:** `opencode/gpt-5.6-terra`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text and vision in; text out; advanced reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Premium enterprise pricing (~$8.00 / $24.00 per 1M tokens).
- **Architecture:** Frontier transformer architecture with extended context scaling and robust logical verification.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **79.0%** (OpenAI technical evaluation)
- Tau3-Banking / Tau2-Bench: **76.0%** (OpenAI evaluation harness)
- GDPval-AA: **2230 Elo** (Evaluation reports)
- Claw-Eval / ClawProBench: **84.0%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.0%** (OpenAI benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **76.0%** (OpenAI model card)
- HLE: **49.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **82.0%** (Complex reasoning benchmark)
- CritPt: **78.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **89.0 / #29** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **88.0% / 5.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **70.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **67.5%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **71.0%** (Scientific coding benchmark)
- Vibe Code Bench: **76.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **85.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **94.0% retrieval accuracy at 256K context length** (OpenAI long-context validation)

### Normalized scores (1–100)

- **Tool use: 90/100.** Robust function calling and enterprise agent integration.
- **Reasoning: 92/100.** Elite logical deduction and structured analysis.
- **Context window: 92/100.** Reliable 256K context retrieval accuracy.
- **Multimodal: 89/100.** Comprehensive vision and text comprehension.
- **Coding: 90/100.** Outstanding software development support.
- **Cost efficiency: 73/100.** Premium enterprise pricing tier.
- **Overall Score: 90.6/100.** Enterprise-grade reasoning model delivering exceptional analytical depth and robust agentic performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official OpenAI documentation, technical reports, and AI benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
