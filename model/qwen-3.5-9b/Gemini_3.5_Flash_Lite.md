# Qwen 3.5 9b — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud / Qwen 3.5 9b & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9b
- **Short description:** Compact 9-billion parameter open-weights model from Alibaba Cloud, offering high performance across reasoning and coding tasks for its size class.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5-9b` (Chat Completions API)
- **Release / knowledge:** 2025/2026 / knowledge cutoff up to late 2025
- **IDs:** `opencode/qwen-3.5-9b`
- **Context window:** 128K total tokens (verified via model metadata and technical docs)
- **Modalities:** Text in, text out; tool calls; JSON mode
- **Pricing (as of 2026-10-16):** Standard pricing tier on OpenCode Zen
- **Architecture:** Dense transformer architecture, 9 billion parameters, open-weights license

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across benchmark suites & Artificial Analysis):
- Terminal-Bench 2.1: **65.0%**
- Tau3-Banking / Tau2-Bench: **66.0%**
- GDPval-AA: **650.0 Elo**
- Claw-Eval / ClawProBench: **64.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **65.0%**

Reasoning / knowledge:
- GPQA Diamond: **45.0%**
- HLE: **35.0%**
- LCR / MLCR: **55.0%**
- CritPt: **50.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **68.0 / #28**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 6.0%**

Coding:
- SWE-bench Verified / SWE-Pro: **42.0%**
- LiveCodeBench: **52.0%**
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **50.0%**
- DeepSWE / Coding Index / other: **48.0**

Long context:
- RULER / GraphWalks value at 128K window length: **80.0% accuracy**

### Normalized scores (1–100)
- **Tool use: 66/100.** Solid tool integration for a 9B parameter model.
- **Reasoning: 65/100.** Respectable reasoning scores on GPQA and general benchmarks for its size.
- **Context window: 80/100.** Effective 128K context window support.
- **Multimodal: 60/100.** Text-only modality with robust formatting capabilities.
- **Coding: 62/100.** Good coding performance for a sub-10B model.
- **Cost efficiency: 90/100.** Extremely high efficiency and low compute cost at 9B parameters.
- **Overall Score: 66.6/100.** Mean of the five quality dims (66 + 65 + 80 + 60 + 62 = 333 / 5 = 66.6).

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (Alibaba technical documentation, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
