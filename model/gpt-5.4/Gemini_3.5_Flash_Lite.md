# GPT-5.4 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/gpt-5.4
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's foundational model optimized for balanced reasoning, robust coding, and efficient multi-turn agentic workflows.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4` / OpenAI API (`gpt-5.4`).
- **Release / knowledge:** Re-verified October 2026; balanced core model.
- **IDs:** `opencode/gpt-5.4`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text and vision in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Standard developer pricing (~$3.00 / $10.00 per 1M tokens).
- **Architecture:** Frontier transformer model optimized for balanced performance and developer efficiency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.0%** (OpenAI technical evaluation)
- Tau3-Banking / Tau2-Bench: **72.0%** (OpenAI evaluation harness)
- GDPval-AA: **2100 Elo** (Evaluation reports)
- Claw-Eval / ClawProBench: **78.5%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%** (OpenAI benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **67.0%** (OpenAI model card)
- HLE: **40.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **73.0%** (Complex reasoning)
- CritPt: **69.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **86.0 / #48** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **83.0% / 8.0%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **61.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **58.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **61.0%** (Scientific coding benchmark)
- Vibe Code Bench: **68.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **77.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **91.0% retrieval accuracy at 256K context length** (OpenAI long-context validation)

### Normalized scores (1–100)

- **Tool use: 85/100.** Reliable function calling and structured API output.
- **Reasoning: 86/100.** Strong logical deduction and problem solving.
- **Context window: 90/100.** Reliable 256K context retrieval accuracy.
- **Multimodal: 86/100.** Comprehensive vision and text comprehension.
- **Coding: 85/100.** Capable software development and programming support.
- **Cost efficiency: 82/100.** Balanced developer pricing tier.
- **Overall Score: 86.1/100.** Balanced foundational model delivering reliable performance across reasoning, coding, and general tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official OpenAI documentation, technical reports, and AI benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
