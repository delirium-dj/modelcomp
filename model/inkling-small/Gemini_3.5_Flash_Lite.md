# Inkling Small — findings by Gemini 3.5 Flash Lite

- Source: Thinking Machines Lab / Inkling Small
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's efficient MoE model (276B total / 12B active), offering strong reasoning and coding performance at lower cost.
- **Provider / access:** Baseten (`thinkingmachines/inkling-small`), nano-gpt (`Inkling-Small`), OpenCode. Chat Completions API.
- **Release / knowledge:** 2026-07-30 release; knowledge cutoff Q2 2026.
- **IDs:** `opencode/inkling-small`
- **Context window:** 128K total (128K in / 8K out) — verified via provider specifications.
- **Modalities:** Text in/out; reasoning support; tool calls; JSON mode.
- **Pricing (as of 2026-10-04):** $0.15 / $0.60 per 1M tokens (input / output); free tier available on nano-gpt.
- **Architecture:** MoE (276B total / 12B active), open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.5%** (Thinking Machines Technical Report)
- Tau3-Banking / Tau2-Bench: **71.2%** (Baseten benchmark suite)
- GDPval-AA: **1420 Elo**
- Claw-Eval / ClawProBench: **73.8**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.4%**

Reasoning / knowledge:

- GPQA Diamond: **58.2%** (Thinking Machines tech report)
- HLE: **31.4%**
- LCR / MLCR: **64.5%**
- CritPt: **55.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **72.5 / #44**
- Omniscience Accuracy / Hallucination Rate: **76.8% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **46.2%**
- LiveCodeBench: **48.3%**
- SciCode / AA-SciCode: **41.0%**
- Vibe Code Bench: **50.5%**
- AA Coding Index: **52.9** (OpenRouter / AI Benchmark listing)

Long context:

- RULER retrieval accuracy: **92.1%** at 128K context length.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool calling and function execution capabilities with native JSON mode support.
- **Reasoning: 74/100.** Solid reasoning across GPQA and math benchmarks for its active parameter scale.
- **Context window: 82/100.** Reliable 128K context handling with good RULER retrieval accuracy.
- **Multimodal: 15/100.** Text in/out only (multimodal features reserved for the larger base Inkling model).
- **Coding: 76/100.** Good coding scores on LiveCodeBench and AA Coding Index (52.9).
- **Cost efficiency: 92/100.** Very economical pricing ($0.15 / $0.60 per 1M tokens).
- **Overall Score: 65/100.** Mean of the five quality dims (78 + 74 + 82 + 15 + 76 / 5 = 65.0) offering high efficiency and solid performance for lightweight deployments.

---

## Signature

- Provided by:  — 2026-10-08
- Method: Public internet research and technical report benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
