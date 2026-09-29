# DeepSeek V4 Flash — findings by Gemini 3.7 Flash

- Source: DeepSeek / `deepseek/deepseek-v4-flash`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's high-efficiency open-weights MoE model engineered for ultra-fast text reasoning, 1M context code analysis, and low-cost API integration.
- **Provider / access:** DeepSeek API / OpenCode Zen (`opencode/deepseek-v4-flash`), OpenAI-compatible API.
- **Release / knowledge:** 2025-07-31 release; knowledge cutoff May 2025.
- **IDs:** `deepseek/deepseek-v4-flash`, `deepseek-v4-flash`
- **Context window:** 1,000,000 tokens (1M total, 16K max output).
- **Modalities:** text in; text out; native tool calling, structured JSON output.
- **Pricing (as of 2026-09-25):** $0.14 / 1M input ($0.035 cached), $0.56 / 1M output.
- **Architecture:** Mixture of Experts (MoE), open weights (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.0%** (DeepSeek Technical Report / OpenCode Evaluation)
- Tau3-Banking / Tau2-Bench: **64.0%** (Tau-Bench standard harness)
- GDPval-AA: **1235 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **68.8%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.0%**

Reasoning / knowledge:

- GPQA Diamond: **71.0%** (0-shot CoT)
- HLE: **30.5%** (Humanity's Last Exam)
- LCR / MLCR: **78.5%**
- CritPt: **66.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **71 / #26**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 8.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **47.0%** (SWE-bench Verified)
- LiveCodeBench: **51.0%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **34.5%**
- Vibe Code Bench: **66.8%**
- DeepSWE / Coding Index / other: **64.5**

Long context:

- MRCR / RULER: **96.0%** needle retrieval fidelity across 1M context window.

### Normalized scores (1–100)

- **Tool use: 80/100.** Fast and reliable function calling in automated developer pipelines.
- **Reasoning: 82/100.** Strong mathematical and analytical reasoning (71.0% GPQA Diamond) with low latency.
- **Context window: 92/100.** 1M context window with high recall across large text corpora.
- **Multimodal: 20/100.** Text-only input and output; lacks native image/video ingestion.
- **Coding: 78/100.** 47.0% SWE-bench Verified and 51.0% LiveCodeBench deliver dependable code assistance.
- **Cost efficiency: 96/100.** Exceptional value at $0.14 / $0.56 per 1M tokens.
- **Overall Score: 70/100.** Mean of the five non-cost dims (80+82+92+20+78)/5 = 70.4 → 70. High-efficiency text-only open-weights model for high-volume coding pipelines, long-document ingestion, and batch extraction.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
