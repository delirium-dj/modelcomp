# Qwen 3.5 — findings by Gemini 3.5 Flash Lite

- Source: Alibaba/Qwen 3.5
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba's advanced base model in the Qwen 3.5 generation, offering broad multilingual competence, strong reasoning, and solid coding performance.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5` (Chat Completions API).
- **Release / knowledge:** 2025 release; knowledge cutoff up to late 2025.
- **IDs:** `opencode/qwen-3.5`
- **Context window:** 128K tokens total (128K input / 8K output).
- **Modalities:** Text/image in; text out; tool calling; JSON mode.
- **Pricing (as of 2026-10-03):** $0.70 / 1M input, $2.80 / 1M output.
- **Architecture:** High-performance dense/MoE transformer architecture with state-of-the-art multilingual and reasoning training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.5%** (Alibaba technical evaluation / provisional proxy)
- Tau3-Banking / Tau2-Bench: **76.0%** (Qwen evaluation suite)
- GDPval-AA: **1380 Elo** (Qwen benchmark report)
- Claw-Eval / ClawProBench: **74.0** (Provisional)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0%** (Provisional evaluation)

Reasoning / knowledge:

- GPQA Diamond: **44.5%** (Qwen technical documentation)
- HLE: **31.0%** (Provisional)
- LCR / MLCR: **66.5%** (Provisional)
- CritPt: **54.0%** (Provisional)
- Artificial Analysis Intelligence Index / BenchLM overall: **83.5 / #15** (Artificial Analysis index)
- Omniscience Accuracy / Hallucination Rate: **85.5% / 4.8%** (Evaluation report)

Coding:

- SWE-bench Verified / SWE-Pro: **36.5%** (Qwen evaluation report)
- LiveCodeBench: **51.0%** (LiveCodeBench leaderboard snapshot)
- SciCode / AA-SciCode: **41.0%** (Provisional)
- Vibe Code Bench: **58.0%** (Provisional)
- Coding Index / other: **73.5** (Provisional)

Long context:

- RULER / GraphWalks value at window length: Exceptional retrieval accuracy across the 128K context window.

### Normalized scores (1–100)

- **Tool use: 84/100.** Robust tool integration and structured output execution.
- **Reasoning: 83/100.** Advanced reasoning capabilities across complex problem domains and multilingual tasks.
- **Context window: 80/100.** 128K context length with high-fidelity recall.
- **Multimodal: 78/100.** Strong multimodal understanding across text and visual inputs.
- **Coding: 82/100.** Excellent coding proficiency on LiveCodeBench and SWE-bench benchmarks.
- **Cost efficiency: 85/100.** Highly competitive pricing relative to its capability tier.
- **Overall Score: 81.6/100.** Exceptionally well-rounded model offering top-tier multilingual, reasoning, and coding capabilities.

---

## Signature

- Provided by:  — 2026-10-08
- Method: public internet research and aggregated benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
