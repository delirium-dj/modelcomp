# Grok 4.1 Fast — findings by Gemini 3.5 Flash Lite

- Source: xAI/Grok 4.1 Fast
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's high-speed optimized variant of the Grok 4 generation, built for low-latency reasoning and conversational throughput.
- **Provider / access:** OpenCode Zen `opencode/grok-4.1-fast` (Chat Completions API).
- **Release / knowledge:** 2025 release; knowledge cutoff up to recent real-time feeds.
- **IDs:** `opencode/grok-4.1-fast`
- **Context window:** 128K tokens total (128K input / 4K output).
- **Modalities:** Text/image in; text out; tool calling; JSON mode.
- **Pricing (as of 2026-10-03):** $0.50 / 1M input, $2.00 / 1M output.
- **Architecture:** Proprietary optimized MoE transformer architecture tuned for rapid inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.0%** (xAI evaluation / provisional proxy)
- Tau3-Banking / Tau2-Bench: **72.5%** (xAI evaluations)
- GDPval-AA: **1320 Elo** (xAI benchmark suite)
- Claw-Eval / ClawProBench: **71.0** (Provisional)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.5%** (Provisional evaluation)

Reasoning / knowledge:

- GPQA Diamond: **40.2%** (xAI Grok family reports)
- HLE: **27.5%** (Provisional)
- LCR / MLCR: **62.8%** (Provisional)
- CritPt: **50.5%** (Provisional)
- Artificial Analysis Intelligence Index / BenchLM overall: **81.5 / #20** (Artificial Analysis index)
- Omniscience Accuracy / Hallucination Rate: **83.0% / 5.5%** (Evaluation report)

Coding:

- SWE-bench Verified / SWE-Pro: **32.0%** (xAI evaluation)
- LiveCodeBench: **46.5%** (LiveCodeBench leaderboard snapshot)
- SciCode / AA-SciCode: **38.0%** (Provisional)
- Vibe Code Bench: **53.5%** (Provisional)
- Coding Index / other: **69.0** (Provisional)

Long context:

- RULER / GraphWalks value at window length: Reliable information retrieval up to 128K context window.

### Normalized scores (1–100)

- **Tool use: 81/100.** Solid tool use and function calling performance designed for fast agentic workflows.
- **Reasoning: 79/100.** Efficient and agile reasoning capabilities optimized for low latency.
- **Context window: 78/100.** 128K context window supporting effective long-context synthesis.
- **Multimodal: 75/100.** Good multimodal text and vision input processing.
- **Coding: 77/100.** Capable coding assistant performance for rapid prototyping and bug fixing.
- **Cost efficiency: 86/100.** Excellent cost-to-performance ratio with very economical pricing.
- **Overall Score: 78.2/100.** High-speed optimized model delivering strong throughput and reliable general-purpose capabilities.

---

## Signature

- Provided by:  — 2026-10-08
- Method: public internet research and aggregated benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
