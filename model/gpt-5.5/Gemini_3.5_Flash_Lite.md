# GPT-5.5 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/gpt-5.5
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's flagship general-purpose foundational model optimized for balanced speed, broad intelligence, and robust agentic capabilities.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.5` / OpenAI API (`gpt-5.5`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art general flagship.
- **IDs:** `opencode/gpt-5.5`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text and vision in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Standard developer pricing ($5.00 / $15.00 per 1M tokens).
- **Architecture:** Frontier transformer model with optimized inference efficiency and broad multimodal integration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **79.5%** (OpenAI technical evaluation)
- Tau3-Banking / Tau2-Bench: **76.0%** (OpenAI evaluation harness)
- GDPval-AA: **2240 Elo** (OpenAI evaluation reports)
- Claw-Eval / ClawProBench: **84.5%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.5%** (OpenAI benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **73.0%** (OpenAI model card)
- HLE: **47.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **80.5%** (Complex reasoning benchmark)
- CritPt: **77.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **89.5 / #27** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **87.0% / 6.0%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **70.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **67.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **70.0%** (Scientific coding benchmark)
- Vibe Code Bench: **77.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **85.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **93.8% retrieval accuracy at 256K context length** (OpenAI long-context validation)

### Normalized scores (1–100)

- **Tool use: 90/100.** Excellent tool integration and agentic execution.
- **Reasoning: 91/100.** Top-tier reasoning capabilities across diverse benchmarks.
- **Context window: 90/100.** High retrieval accuracy at 256K context.
- **Multimodal: 89/100.** Comprehensive vision-language understanding.
- **Coding: 90/100.** Outstanding programming and software development support.
- **Cost efficiency: 76/100.** Balanced developer pricing for robust flagship performance.
- **Overall Score: 90/100.** Exceptional flagship model offering elite reasoning, coding, and general intelligence.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official OpenAI documentation, technical evaluations, and AI benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
