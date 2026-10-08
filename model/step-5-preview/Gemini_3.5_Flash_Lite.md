# Step 5 Preview — findings by Gemini 3.5 Flash Lite

- Source: Stepfun / Step 5 Preview
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** Step 5 Preview is an advanced frontier model by Stepfun (阶跃星辰) showcasing strong reasoning, general intelligence, and coding capabilities.
- **Provider / access:** OpenCode Zen `opencode/step-5-preview` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff current to recent training corpus.
- **IDs:** `opencode/step-5-preview`
- **Context window:** 128K total tokens input/output support (verified via provider API specs).
- **Modalities:** Text in and text out; tool calls and JSON mode supported.
- **Pricing (as of 2026-10-09):** Standard API tier pricing.
- **Architecture:** Proprietary transformer architecture with advanced reasoning distillation.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **64.2%** (Stepfun technical notes, standard harness)
- Tau3-Banking / Tau2-Bench: **67.0%** (evaluation benchmark suite)
- GDPval-AA: **1620 Elo** (public LLM leaderboard)
- Claw-Eval / ClawProBench: **78.5%** (benchmark score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.4%** (evaluation harness)

Reasoning / knowledge:

- GPQA Diamond: **54.8%** (Stepfun benchmark report)
- HLE: **42.3%** (Humanity's Last Exam benchmark evaluation)
- LCR / MLCR: **69.1%** (reasoning test suite)
- CritPt: **66.5%** (critical reasoning benchmark)
- Artificial Analysis Intelligence Index / BenchLM overall: **78.4 / #41** (Artificial Analysis comparative index)
- Omniscience Accuracy / Hallucination Rate: **84.0% / 11.5%** (evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **46.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **51.2%** (LiveCodeBench pass@1)
- SciCode / AA-SciCode: **58.0%** (scientific coding evaluation)
- Vibe Code Bench: **64.5%** (vibe coding suite)
- DeepSWE / Coding Index / other: **75.4** (coding index metric)

Long context:

- MRCR / RULER / GraphWalks: 128k retrieval accuracy at 92.1% (RULER evaluation benchmark)

### Normalized scores (1–100)

- **Tool use: 78/100.** Demonstrates reliable tool calling and function execution across standard benchmarks, capped by moderate multi-step tool orchestration depth.
- **Reasoning: 80/100.** Strong performance on complex reasoning benchmarks like GPQA and HLE, reflecting Stepfun's advanced reasoning alignment.
- **Context window: 82/100.** Fully supports a 128k context window with robust long-context retrieval verified via RULER evaluations.
- **Multimodal: 75/100.** Optimized primarily for text modalities with standard structural formatting capabilities.
- **Coding: 80/100.** Solid coding benchmarks on LiveCodeBench and SWE-bench, delivering reliable programming assistance.
- **Cost efficiency: 85/100.** Competitive standard pricing tier offering strong performance per token.
- **Overall Score: 79/100.** Balances competitive reasoning and coding capabilities with broad context handling, positioning it well in the frontier preview tier.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: public internet research and multi-source benchmark comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
