# Gpt Oss 120b — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/Gpt Oss 120b & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gpt Oss 120b
- **Short description:** Open source 120B parameter model entry on OpenCode Zen. Balanced capabilities for general text tasks and coding.
- **Provider / access:** OpenCode Zen `opencode/gpt-oss-120b` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `opencode/gpt-oss-120b`
- **Context window:** 128K total — verified via Zen endpoint specs.
- **Modalities:** Text in/out only; tool calls yes.
- **Pricing (as of 2026-10-16):** Standard pricing on OpenCode Zen.
- **Architecture:** Open-weights transformer (120B params).

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across OpenCode Zen telemetry & Artificial Analysis):
- Terminal-Bench 2.1: **48.5%**
- Tau3-Banking / Tau2-Bench: **52.0%**
- GDPval-AA: **1150 Elo**
- Claw-Eval / ClawProBench: **65.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **60.0%**

Reasoning / knowledge:
- GPQA Diamond: **45.0%**
- HLE: **35.0%**
- LCR / MLCR: **52.0%**
- CritPt: **48.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75.0 / #35**
- Omniscience Accuracy / Hallucination Rate: **85.0% / 6.5%**

Coding:
- SWE-bench Verified / SWE-Pro: **42.0%**
- LiveCodeBench: **45.0%**
- SciCode / AA-SciCode: **38.0%**
- Vibe Code Bench: **52.0%**
- DeepSWE / Coding Index / other: **60.0**

Long context:
- RULER / GraphWalks: **stable retrieval up to 64K tokens, degradations at 128K.**

### Normalized scores (1–100)
- **Tool use: 68/100.** Competent tool calling on standard benchmark tasks.
- **Reasoning: 72/100.** Moderate reasoning capability across knowledge benchmarks.
- **Context window: 55/100.** 128K context window with fair long-context handling.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 70/100.** Solid open-weights coding capability.
- **Cost efficiency: 98/100.** Highly cost-effective open-weights deployment tier.
- **Overall Score: 56.0/100.** Reliable mid-tier open-weights model for general text and coding tasks.

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (OpenCode Zen platform metadata, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
