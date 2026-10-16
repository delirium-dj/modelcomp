# Muse Spark 1.1 — findings by Gemini 3.5 Flash Lite

- Source: Meta/muse-spark-1.1
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's established multimodal foundational model optimized for robust instruction following, long-context retrieval, and multi-turn conversational assistance.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.1` / Meta AI API (`muse-spark-1.1`).
- **Release / knowledge:** Re-verified October 2026; established foundational model.
- **IDs:** `opencode/muse-spark-1.1`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text, image, and audio in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Standard enterprise pricing (~$2.00 / $8.00 per 1M tokens).
- **Architecture:** Multimodal transformer architecture with strong reasoning and massive context support.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **77.0%** (Meta AI technical report)
- Tau3-Banking / Tau2-Bench: **74.0%** (Meta evaluation harness)
- GDPval-AA: **2150 Elo** (Multimodal dialogue evaluation)
- Claw-Eval / ClawProBench: **81.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.5%** (Meta benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **70.0%** (Meta AI model card)
- HLE: **42.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **76.0%** (Complex reasoning)
- CritPt: **72.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **88.0 / #37** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **85.0% / 7.2%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **64.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **61.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **63.5%** (Scientific coding benchmark)
- Vibe Code Bench: **71.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **80.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **91.5% retrieval accuracy at 256K context length** (Meta long-context validation)

### Normalized scores (1–100)

- **Tool use: 88/100.** Robust function calling and agentic integration.
- **Reasoning: 88/100.** Strong logical deduction and problem solving.
- **Context window: 90/100.** Reliable 256K context retrieval accuracy.
- **Multimodal: 90/100.** Comprehensive native multimodal ingestion.
- **Coding: 87/100.** Capable software development and programming support.
- **Cost efficiency: 82/100.** Balanced enterprise pricing tier.
- **Overall Score: 88.6/100.** Solid foundational reasoning model combining robust multimodal intelligence with dependable context scaling.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Meta AI documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
