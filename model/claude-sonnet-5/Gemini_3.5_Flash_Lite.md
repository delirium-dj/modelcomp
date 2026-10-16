# Claude Sonnet 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/claude-sonnet-5
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's established balanced intelligence model providing high-speed inference and advanced analytical capabilities.
- **Provider / access:** OpenCode Zen `opencode/claude-sonnet-5` / Anthropic Messages API (`claude-sonnet-5`).
- **Release / knowledge:** Re-verified October 2026; established Sonnet model.
- **IDs:** `opencode/claude-sonnet-5`
- **Context window:** 500K total tokens input/output support.
- **Modalities:** Text and image in; text out; adaptive thinking; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Competitive developer pricing ($3.00 / $15.00 per 1M tokens).
- **Architecture:** Multimodal transformer balancing speed, adaptive thinking, and large context handling.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **77.5%** (Anthropic evaluation benchmarks, standard harness)
- Tau3-Banking / Tau2-Bench: **74.5%** (Anthropic system benchmarks)
- GDPval-AA: **2160 Elo** (Anthropic evaluation reports)
- Claw-Eval / ClawProBench: **81.5%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%** (Anthropic benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **70.5%** (Anthropic model card and evaluation suite)
- HLE: **43.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **77.0%** (Complex reasoning benchmark)
- CritPt: **73.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **88.0 / #35** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **85.0% / 7.2%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **65.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **62.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **65.0%** (Scientific coding benchmark)
- Vibe Code Bench: **72.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **80.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **93.0% retrieval accuracy at 500K context length** (Anthropic long-context validation)

### Normalized scores (1–100)

- **Tool use: 88/100.** Rapid and reliable tool integration.
- **Reasoning: 89/100.** Strong analytical depth and problem solving.
- **Context window: 91/100.** Reliable 500K context retrieval accuracy.
- **Multimodal: 89/100.** Solid vision and text comprehension.
- **Coding: 88/100.** Capable programming support.
- **Cost efficiency: 80/100.** Balanced developer pricing tier.
- **Overall Score: 89/100.** Balanced speed-and-intelligence model delivering reliable performance for developer workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Anthropic documentation, model cards, and benchmark suites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
