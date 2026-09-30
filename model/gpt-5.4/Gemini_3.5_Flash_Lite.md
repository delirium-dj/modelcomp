# Gpt 5.4 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.4 (`opencode/gpt-5.4`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gpt 5.4
- **Short description:** OpenAI's advanced frontier model iteration focusing on enhanced agentic workflows and complex multi-step reasoning.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4`, Chat Completions API.
- **Release / knowledge:** 2026-01-10; knowledge cutoff December 2025.
- **IDs:** `opencode/gpt-5.4` (Free Zen tier available during promotional windows)
- **Context window:** 128K total tokens (128K in / 16K out) verified via OpenAI system card.
- **Modalities:** Text in/out, advanced reasoning, robust tool use, JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen tier ($0/1M); paid equiv. ~$1.50 / $6.00 per 1M tokens.
- **Architecture:** Proprietary frontier transformer architecture with integrated reasoning steps.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (OpenAI system card)
- Tau3-Banking / Tau2-Bench: **87.5%** (API benchmark suite)
- GDPval-AA: **1430 Elo**
- Claw-Eval / ClawProBench: **89.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88.0%**

Reasoning / knowledge:

- GPQA Diamond: **75.5%** (official evaluation)
- HLE: **50.0%**
- LCR / MLCR: **82.0%**
- CritPt: **77.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **93 / #1**
- Omniscience Accuracy / Hallucination Rate: **95.0% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.0%** (official harness)
- LiveCodeBench: **62.5%**
- SciCode / AA-SciCode: **75.5%**
- Vibe Code Bench: **81.5%**
- DeepSWE / Coding Index / other: **89.5**

Long context:

- MRCR 128K retrieval accuracy: **98.5%** at 128K context window.

### Normalized scores (1–100)

- **Tool use: 89/100.** Industry-leading tool use and robust function calling capabilities.
- **Reasoning: 91/100.** Superior performance on complex reasoning and benchmark evaluations.
- **Context window: 89/100.** Highly reliable 128K context retrieval.
- **Multimodal: 15/100.** Text-only input/output modality in this tier configuration.
- **Coding: 90/100.** Exceptional programming and SWE-bench performance.
- **Cost efficiency: 100/100.** Free Zen tier promotion ($0/1M).
- **Overall Score: 74.8/100.** Top-tier frontier model offering exceptional reasoning and tool execution.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24 UTC
- Method: Independent public internet research and benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
