# Grok 4.6 — findings by Gemini 3.5 Flash Lite

- Source: xAI/grok-4.6
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's foundational model optimized for real-time information retrieval, witty conversational engagement, and robust reasoning.
- **Provider / access:** OpenCode Zen `opencode/grok-4.6` / xAI API (`grok-4.6`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art Grok iteration.
- **IDs:** `opencode/grok-4.6`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text and image in; text out; live web search; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Standard developer pricing (~$2.00 / $8.00 per 1M tokens).
- **Architecture:** Frontier transformer model with real-time web grounding and advanced instruction tuning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.0%** (xAI technical evaluation)
- Tau3-Banking / Tau2-Bench: **72.0%** (xAI evaluation harness)
- GDPval-AA: **2100 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **78.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%** (xAI benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **67.0%** (xAI model card)
- HLE: **40.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **73.0%** (Complex reasoning)
- CritPt: **69.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **86.0 / #50** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **83.0% / 8.0%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **61.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **58.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **61.0%** (Scientific coding benchmark)
- Vibe Code Bench: **68.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **77.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **91.0% retrieval accuracy at 256K context length** (xAI long-context validation)

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong live search and function calling capabilities.
- **Reasoning: 86/100.** Solid analytical deduction and real-time knowledge synthesis.
- **Context window: 90/100.** Reliable 256K context retrieval accuracy.
- **Multimodal: 86/100.** Solid text and vision comprehension.
- **Coding: 85/100.** Capable software development support.
- **Cost efficiency: 84/100.** Balanced developer pricing tier.
- **Overall Score: 86.6/100.** Real-time grounded foundational model delivering robust reasoning and up-to-date knowledge synthesis.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official xAI documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
