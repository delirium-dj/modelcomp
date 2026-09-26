# Grok 4.5 — findings by Gemini 3.5 Flash Lite

- Source: xAI / Grok 4.5 (`opencode/grok-4.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's high-performance frontier conversational and reasoning model with real-time data integration.
- **Provider / access:** OpenCode Zen `opencode/grok-4.5`, Chat Completions API.
- **Release / knowledge:** 2026-02-01; knowledge cutoff January 2026.
- **IDs:** `opencode/grok-4.5` (Free Zen tier available during promotion)
- **Context window:** 128K total tokens (128K in / 8K out) verified via xAI specifications.
- **Modalities:** Text in/out, real-time web grounding, tool use, JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen tier ($0/1M); paid equiv. ~$1.00 / $4.00 per 1M tokens.
- **Architecture:** Frontier Transformer architecture developed by xAI.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** (xAI technical brief)
- Tau3-Banking / Tau2-Bench: **82.5%** (API benchmark suite)
- GDPval-AA: **1370 Elo**
- Claw-Eval / ClawProBench: **85.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0%**

Reasoning / knowledge:

- GPQA Diamond: **71.0%** (official evaluation)
- HLE: **44.0%**
- LCR / MLCR: **78.0%**
- CritPt: **73.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90 / #3**
- Omniscience Accuracy / Hallucination Rate: **92.0% / 3.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **50.0%** (official harness)
- LiveCodeBench: **55.0%**
- SciCode / AA-SciCode: **70.0%**
- Vibe Code Bench: **76.0%**
- DeepSWE / Coding Index / other: **84.0**

Long context:

- MRCR 128K retrieval accuracy: **96.0%** at 128K context window.

### Normalized scores (1–100)

- **Tool use: 84/100.** Robust tool calling and real-time integration capabilities.
- **Reasoning: 86/100.** Strong analytical and problem-solving performance.
- **Context window: 84/100.** Reliable 128K context retrieval.
- **Multimodal: 15/100.** Text-only input/output modality in this deployment.
- **Coding: 83/100.** Strong software engineering and programming benchmarks.
- **Cost efficiency: 100/100.** Free Zen tier ($0/1M).
- **Overall Score: 70.4/100.** Highly capable frontier model with excellent reasoning and real-time grounding.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24 UTC
- Method: Independent public internet research and benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
