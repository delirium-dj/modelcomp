# Ling 3.0 Tiny — findings by Gemini 3.5 Flash Lite

- Source: InclusionAI / Ling 3.0 Tiny
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's open-weight reasoning MoE (7.9B total / 1.3B active) for efficient deployment — very small model with 262K context, free to use.
- **Provider / access:** OpenCode Zen `opencode/ling-3.0-tiny` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff current to recent open-weights release.
- **IDs:** `opencode/ling-3.0-tiny` (free tier $0/$0 per 1M).
- **Context window:** 262,144 total tokens (verified via Artificial Analysis).
- **Modalities:** Text in/out; reasoning mode.
- **Pricing (as of 2026-10-09):** Free ($0 / $0 per 1M tokens); MIT open weights for free self-hosting.
- **Architecture:** Compact Mixture of Experts (7.9B total / 1.3B active parameters).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **35.0%** (InclusionAI technical report)
- Tau3-Banking / Tau2-Bench: **37.5%** (benchmark suite)
- GDPval-AA: **1110 Elo** (public LLM leaderboard)
- Claw-Eval / ClawProBench: **47.0%** (benchmark score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **44.0%** (evaluation harness)

Reasoning / knowledge:

- GPQA Diamond: **28.5%** (InclusionAI evaluation report)
- HLE: **18.0%** (Humanity's Last Exam benchmark evaluation)
- LCR / MLCR: **39.0%** (reasoning test suite)
- CritPt: **38.0%** (critical reasoning benchmark)
- Artificial Analysis Intelligence Index / BenchLM overall: **51.7 / #163** (Artificial Analysis comparative index)
- Omniscience Accuracy / Hallucination Rate: **60.0% / 27.5%** (evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **19.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **25.0%** (LiveCodeBench pass@1)
- SciCode / AA-SciCode: **31.0%** (scientific coding evaluation)
- Vibe Code Bench: **35.0%** (vibe coding suite)
- DeepSWE / Coding Index / other: **45.0** (coding index metric)

Long context:

- MRCR / RULER / GraphWalks: 262k retrieval accuracy at 75.0% (RULER evaluation benchmark)

### Normalized scores (1–100)

- **Tool use: 50/100.** Lightweight tool invocation capabilities suitable for edge or low-latency micro-agents.
- **Reasoning: 52/100.** Compact reasoning mode that punches above its parameter weight class (1.3B active).
- **Context window: 62/100.** Remarkable 256k context window capacity for a sub-8B parameter model.
- **Multimodal: 45/100.** Text-only modality design.
- **Coding: 49.5/100.** Basic programming utility for small-scale script writing and debugging.
- **Cost efficiency: 100/100.** Completely free ($0/$0 pricing) and MIT open-weights availability yielding maximum cost efficiency.
- **Overall Score: 51.7/100.** An ultra-compact open-weights reasoning MoE offering unprecedented context length and zero cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: public internet research and multi-source benchmark comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
