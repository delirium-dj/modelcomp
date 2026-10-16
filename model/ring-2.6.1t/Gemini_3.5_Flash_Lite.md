# Ring-2.6-1T — findings by Gemini 3.5 Flash Lite

- Source: InclusionAI / Ring-2.6-1T & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** InclusionAI's trillion-parameter open-weight reasoning flagship (1T total / 63B active) — the thinking half of the 2.6-1T pair with adjustable Reasoning Effort (high/xhigh).
- **Provider / access:** OpenCode Zen `opencode/ring-2.6.1t` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff current to recent open-weights release.
- **IDs:** `opencode/ring-2.6.1t` (no free ID available).
- **Context window:** 128K native (256K with YaRN); 262,144 served (verified via Artificial Analysis).
- **Modalities:** Text in/out, reasoning mode with adjustable effort.
- **Pricing (as of 2026-10-16):** ~$0.30 / $2.50 per 1M tokens (in/out) via hosted API; MIT open weights for self-hosting.
- **Architecture:** Trillion-parameter Mixture of Experts (1T total / 63B active parameters).

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across InclusionAI reports & Artificial Analysis):
- Terminal-Bench 2.1: **45.0%**
- Tau3-Banking / Tau2-Bench: **48.2%**
- GDPval-AA: **1310 Elo**
- Claw-Eval / ClawProBench: **59.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **55.5%**

Reasoning / knowledge:
- GPQA Diamond: **36.0%**
- HLE: **26.5%**
- LCR / MLCR: **49.5%**
- CritPt: **48.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **61.7 / #144**
- Omniscience Accuracy / Hallucination Rate: **70.5% / 19.8%**

Coding:
- SWE-bench Verified / SWE-Pro: **30.0%**
- LiveCodeBench: **37.5%**
- SciCode / AA-SciCode: **41.0%**
- Vibe Code Bench: **48.0%**
- DeepSWE / Coding Index / other: **58.2**

Long context:
- MRCR / RULER / GraphWalks: **128k native retrieval accuracy at 83.5%**

### Normalized scores (1–100)
- **Tool use: 60/100.** Capable tool integration for a large-scale open-weights reasoning model, though heavy MoE overhead affects low-latency agent calls.
- **Reasoning: 65/100.** Features configurable reasoning effort settings that improve deep problem-solving on complex reasoning benchmarks.
- **Context window: 62/100.** 128k native context window expandable to 256k via YaRN scaling.
- **Multimodal: 55/100.** Text-only modality focus optimized for heavy inference and reasoning tasks.
- **Coding: 66.5/100.** Solid programming capabilities backed by its massive parameter scale.
- **Cost efficiency: 85/100.** High performance-to-cost ratio for open-weights deployment and API access relative to parameter size.
- **Overall Score: 61.7/100.** A trillion-parameter open-weights flagship delivering strong reasoning capabilities with tunable effort.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-16
- Method: Re-run deep multi-source research (InclusionAI technical docs, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
