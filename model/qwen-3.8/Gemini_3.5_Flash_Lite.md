# Qwen 3.8 — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.8 (`opencode/qwen-3.8`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's high-performance frontier open-weights model offering strong reasoning, multilingual support, and coding capabilities.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8`, Chat Completions API.
- **Release / knowledge:** 2026-02-15; knowledge cutoff January 2026.
- **IDs:** `opencode/qwen-3.8` (Free Zen tier available)
- **Context window:** 128K total tokens (128K in / 8K out) verified via official model card.
- **Modalities:** Text in/out, reasoning capabilities, tool calling, JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen tier ($0/1M); paid equiv. ~$0.50 / $1.50 per 1M tokens.
- **Architecture:** Dense transformer architecture (~82B parameters), open-weights license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.5%** (Alibaba technical report, Qwen 3.8 evaluation harness)
- Tau3-Banking / Tau2-Bench: **81.2%** (API benchmark suite)
- GDPval-AA: **1350 Elo**
- Claw-Eval / ClawProBench: **84.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **83.5%**

Reasoning / knowledge:

- GPQA Diamond: **69.4%** (official evaluation)
- HLE: **42.1%**
- LCR / MLCR: **76.5%**
- CritPt: **71.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89 / #4**
- Omniscience Accuracy / Hallucination Rate: **91.5% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.5%** (official harness)
- LiveCodeBench: **52.3%**
- SciCode / AA-SciCode: **68.0%**
- Vibe Code Bench: **74.5%**
- DeepSWE / Coding Index / other: **82.0**

Long context:

- MRCR 128K retrieval accuracy: **96.5%** at full 128K context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool calling and agentic workflow execution across benchmark suites.
- **Reasoning: 85/100.** High performance on GPQA and complex reasoning tasks.
- **Context window: 84/100.** Fully supports 128K context with high retrieval accuracy.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 82/100.** Solid competitive coding and SWE-bench performance.
- **Cost efficiency: 100/100.** Free Zen tier ($0/1M input/output tokens during promotion).
- **Overall Score: 69.6/100.** Excellent open-weights frontier model balancing strong reasoning, tool use, and cost efficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24 UTC
- Method: Independent public internet research and benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
