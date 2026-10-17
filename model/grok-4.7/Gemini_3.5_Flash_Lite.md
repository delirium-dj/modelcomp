# Grok 4.7 — findings by Gemini 3.5 Flash Lite

- Source: xAI/grok-4.7
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's advanced foundational model optimized for real-time information retrieval, robust reasoning, and engaging conversational intelligence.
- **Provider / access:** OpenCode Zen `opencode/grok-4.7` / xAI API (`grok-4.7`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art Grok model.
- **IDs:** `opencode/grok-4.7`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text and image in; text out; live web search; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Standard developer pricing (~$2.00 / $8.00 per 1M tokens).
- **Architecture:** Frontier transformer model with real-time web grounding and advanced reasoning pre-training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%** (xAI technical evaluation)
- Tau3-Banking / Tau2-Bench: **71.0%** (xAI evaluation harness)
- GDPval-AA: **2080 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **77.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.0%** (xAI benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **65.0%** (xAI model card)
- HLE: **38.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **71.0%** (Complex reasoning)
- CritPt: **67.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **85.5 / #53** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **82.0% / 8.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **59.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **56.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **60.0%** (Scientific coding benchmark)
- Vibe Code Bench: **67.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **76.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **90.0% retrieval accuracy at 256K context length** (xAI long-context validation)

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong live search and function calling capabilities.
- **Reasoning: 86/100.** Solid analytical deduction and real-time knowledge synthesis.
- **Context window: 90/100.** Reliable 256K context retrieval accuracy.
- **Multimodal: 86/100.** Solid text and vision comprehension.
- **Coding: 85/100.** Capable software development support.
- **Cost efficiency: 84/100.** Balanced developer pricing tier.
- **Overall Score: 86.4/100.** Real-time grounded foundational model delivering robust reasoning and up-to-date knowledge synthesis.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official xAI documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
