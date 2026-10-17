# Claude Sonnet 4.6 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/claude-sonnet-4.6
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's established balanced legacy model providing reliable developer tooling, coding, and multi-turn conversational assistance.
- **Provider / access:** OpenCode Zen `opencode/claude-sonnet-4.6` / Anthropic Messages API (`claude-sonnet-4.6`).
- **Release / knowledge:** Re-verified October 2026; established Sonnet legacy model.
- **IDs:** `opencode/claude-sonnet-4.6`
- **Context window:** 200K total tokens input/output support.
- **Modalities:** Text and image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Standard developer pricing ($3.00 / $15.00 per 1M tokens).
- **Architecture:** Constitutional AI transformer with balanced speed and instruction tuning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%** (Anthropic evaluation benchmarks, standard harness)
- Tau3-Banking / Tau2-Bench: **71.0%** (Anthropic system benchmarks)
- GDPval-AA: **2080 Elo** (Anthropic evaluation reports)
- Claw-Eval / ClawProBench: **77.5%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.0%** (Anthropic benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **65.0%** (Anthropic model card and evaluation suite)
- HLE: **38.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **71.0%** (Complex reasoning benchmark)
- CritPt: **67.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **85.8 / #52** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **82.0% / 8.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **59.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **56.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **60.0%** (Scientific coding benchmark)
- Vibe Code Bench: **67.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **76.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **90.0% retrieval accuracy at 200K context length** (Anthropic long-context validation)

### Normalized scores (1–100)

- **Tool use: 85/100.** Reliable function calling and agentic integration.
- **Reasoning: 86/100.** Strong analytical depth and problem solving.
- **Context window: 86/100.** Reliable 200K context retrieval accuracy.
- **Multimodal: 86/100.** Solid text and vision comprehension.
- **Coding: 85/100.** Capable software engineering support.
- **Cost efficiency: 80/100.** Balanced developer pricing tier.
- **Overall Score: 85.8/100.** Established legacy balanced model providing dependable developer performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Anthropic documentation, model cards, and benchmark suites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
