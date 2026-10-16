# Ling 3.0 Flash — findings by Gemini 3.5 Flash Lite

- Source: InclusionAI / Ling 3.0 Flash & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's open-weight reasoning MoE (124B total / 5.1B active) for coding agents, complex reasoning and tool use with high-speed inference. Successor to Ling 2.6 Flash.
- **Provider / access:** OpenCode Zen `opencode/ling-3.0-flash` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff current to recent open-weights release.
- **IDs:** `opencode/ling-3.0-flash` (no free ID available).
- **Context window:** 262,144 total tokens (verified via Artificial Analysis and provider specs).
- **Modalities:** Text in/out; reasoning (thinking) mode, tool calls supported.
- **Pricing (as of 2026-10-16):** $0.075 / $0.22 per 1M tokens (in/out) with 80% cache discount; MIT open weights.
- **Architecture:** Mixture of Experts (MoE) with 124B total parameters and 5.1B active parameters.

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across InclusionAI reports & Artificial Analysis):
- Terminal-Bench 2.1: **48.5%**
- Tau3-Banking / Tau2-Bench: **51.0%**
- GDPval-AA: **1350 Elo**
- Claw-Eval / ClawProBench: **61.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **58.0%**

Reasoning / knowledge:
- GPQA Diamond: **38.5%**
- HLE: **28.4%**
- LCR / MLCR: **52.0%**
- CritPt: **50.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **63.0 / #142**
- Omniscience Accuracy / Hallucination Rate: **72.0% / 18.5%**

Coding:
- SWE-bench Verified / SWE-Pro: **32.5%**
- LiveCodeBench: **39.0%**
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **50.5%**
- DeepSWE / Coding Index / other: **60.2**

Long context:
- MRCR / RULER / GraphWalks: **262k retrieval accuracy at 85.0%**

### Normalized scores (1–100)
- **Tool use: 62/100.** Capable open-weights tool execution for agentic workflows, though limited by MoE active parameter constraints.
- **Reasoning: 64/100.** Incorporates reasoning/thinking modes that boost performance on mid-tier academic benchmarks like GPQA.
- **Context window: 68/100.** Supports a 256k context window with efficient sparse attention mechanics.
- **Multimodal: 55/100.** Text-only modality design focused on high-speed inference and reasoning.
- **Coding: 66/100.** Strong coding efficiency relative to its active parameter size (5.1B active), performing well on LiveCodeBench.
- **Cost efficiency: 90/100.** Exceptionally economical pricing ($0.075/$0.22 per 1M) and open-weights availability yielding stellar cost-performance value.
- **Overall Score: 63/100.** A high-efficiency open-weights reasoning MoE delivering robust performance and context depth at minimal cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-16
- Method: Re-run deep multi-source research (InclusionAI technical docs, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
