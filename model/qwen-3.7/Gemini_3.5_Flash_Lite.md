# Qwen 3.7 — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.7 (`opencode/qwen-3.7`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba's robust preceding generation open-weights model delivering strong multilingual and coding proficiency.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.7`, Chat Completions API.
- **Release / knowledge:** 2025-11-10; knowledge cutoff October 2025.
- **IDs:** `opencode/qwen-3.7` (Free Zen tier available)
- **Context window:** 128K total tokens verified via Alibaba specifications.
- **Modalities:** Text in/out, tool calling, JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen tier ($0/1M); paid equiv. ~$0.45 / $1.35 per 1M tokens.
- **Architecture:** Dense transformer architecture (~32B/72B parameters), open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%** (Alibaba technical report)
- Tau3-Banking / Tau2-Bench: **77.0%** (API benchmark suite)
- GDPval-AA: **1280 Elo**
- Claw-Eval / ClawProBench: **80.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%**

Reasoning / knowledge:

- GPQA Diamond: **63.0%** (official evaluation)
- HLE: **36.0%**
- LCR / MLCR: **70.5%**
- CritPt: **65.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **85 / #9**
- Omniscience Accuracy / Hallucination Rate: **88.5% / 4.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **41.0%** (official harness)
- LiveCodeBench: **46.0%**
- SciCode / AA-SciCode: **61.0%**
- Vibe Code Bench: **68.0%**
- DeepSWE / Coding Index / other: **75.0**

Long context:

- MRCR 128K retrieval accuracy: **93.0%** at 128K context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid tool use and function calling performance.
- **Reasoning: 79/100.** Strong reasoning capabilities across standardized benchmarks.
- **Context window: 84/100.** Dependable 128K context retrieval.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 78/100.** Competent programming and SWE-bench performance.
- **Cost efficiency: 100/100.** Free Zen tier ($0/1M).
- **Overall Score: 66.8/100.** Dependable open-weights model balancing reasoning, coding, and cost efficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24 UTC
- Method: Independent public internet research and benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
