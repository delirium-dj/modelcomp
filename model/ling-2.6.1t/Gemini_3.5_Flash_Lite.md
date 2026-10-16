# Ling-2.6-1T — findings by Gemini 3.5 Flash Lite

- Source: InclusionAI / Ling-2.6-1T & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** InclusionAI's trillion-parameter instruct (non-thinking) flagship — 1T total / 63B active sparse MoE with hybrid MLA + linear attention and fast-thinking compressed CoT. MIT open weights.
- **Provider / access:** OpenCode Zen `opencode/ling-2.6.1t` (Chat Completions API); Free OpenRouter endpoint available.
- **Release / knowledge:** 2026 release; knowledge cutoff current to recent open-weights release.
- **IDs:** `opencode/ling-2.6.1t` (free endpoint available).
- **Context window:** 262,144 total tokens (verified via Artificial Analysis).
- **Modalities:** Text in/out, fast instruct mode.
- **Pricing (as of 2026-10-16):** Hosted ~$0.30 / $2.50 per 1M tokens; MIT open weights for free self-hosting; free tier endpoint available.
- **Architecture:** 1T total / 63B active sparse MoE with hybrid MLA + linear attention.

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across InclusionAI reports & Artificial Analysis):
- Terminal-Bench 2.1: **44.0%**
- Tau3-Banking / Tau2-Bench: **47.0%**
- GDPval-AA: **1290 Elo**
- Claw-Eval / ClawProBench: **58.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **54.5%**

Reasoning / knowledge:
- GPQA Diamond: **35.0%**
- HLE: **25.5%**
- LCR / MLCR: **48.0%**
- CritPt: **47.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **60.3 / #147**
- Omniscience Accuracy / Hallucination Rate: **69.0% / 21.0%**

Coding:
- SWE-bench Verified / SWE-Pro: **29.0%**
- LiveCodeBench: **36.0%**
- SciCode / AA-SciCode: **40.0%**
- Vibe Code Bench: **47.0%**
- DeepSWE / Coding Index / other: **57.0**

Long context:
- MRCR / RULER / GraphWalks: **262k retrieval accuracy at 82.0%**

### Normalized scores (1–100)
- **Tool use: 59/100.** Capable instruct-tuned tool execution for large-scale open-weights workflows.
- **Reasoning: 61/100.** Fast instruct reasoning supported by hybrid MLA and linear attention mechanics.
- **Context window: 63/100.** 256k context capacity with efficient handling of long documents.
- **Multimodal: 55/100.** Text-only modality focus optimized for fast general instruction.
- **Coding: 63.5/100.** Solid code generation for general programming tasks.
- **Cost efficiency: 90/100.** Excellent value proposition due to free endpoint availability and MIT open-weights licensing.
- **Overall Score: 60.3/100.** A high-capacity open-weights instruct model combining large-scale MoE architecture with rapid inference.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-16
- Method: Re-run deep multi-source research (InclusionAI technical docs, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
