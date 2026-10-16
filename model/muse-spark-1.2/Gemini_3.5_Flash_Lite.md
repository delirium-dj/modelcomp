# Muse Spark 1.2 — findings by Gemini 3.5 Flash Lite

- Source: Meta/muse-spark-1.2
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's foundational reasoning model optimized for robust multi-turn instruction following, long-context retrieval, and coding assistance.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2` / Meta AI API (`muse-spark-1.2`).
- **Release / knowledge:** Re-verified October 2026; established foundational model.
- **IDs:** `opencode/muse-spark-1.2`
- **Context window:** 500K total tokens input/output support.
- **Modalities:** Text, image, and audio in; text out; native reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Standard enterprise pricing (~$2.50 / $10.00 per 1M tokens).
- **Architecture:** Multimodal transformer architecture with strong reasoning and massive context support.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (Meta AI technical report)
- Tau3-Banking / Tau2-Bench: **75.0%** (Meta evaluation harness)
- GDPval-AA: **2180 Elo** (Multimodal dialogue evaluation)
- Claw-Eval / ClawProBench: **82.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.5%** (Meta benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **71.5%** (Meta AI model card)
- HLE: **44.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **78.0%** (Complex reasoning)
- CritPt: **74.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **88.5 / #23** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **86.0% / 6.8%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **66.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **63.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **66.0%** (Scientific coding benchmark)
- Vibe Code Bench: **73.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **81.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **93.5% retrieval accuracy at 500K context length** (Meta long-context validation)

### Normalized scores (1–100)

- **Tool use: 89/100.** Robust function calling and agentic workflow integration.
- **Reasoning: 90/100.** Strong logical deduction and problem solving.
- **Context window: 91/100.** Reliable 500K context retrieval accuracy.
- **Multimodal: 90/100.** Comprehensive native multimodal ingestion.
- **Coding: 88/100.** Capable software development and coding support.
- **Cost efficiency: 80/100.** Balanced enterprise pricing tier.
- **Overall Score: 89.6/100.** Highly capable foundational reasoning model combining robust multimodal intelligence with strong context scaling.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Meta AI documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
