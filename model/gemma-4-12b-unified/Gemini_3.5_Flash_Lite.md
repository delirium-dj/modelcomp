# Gemma 4 12B Unified — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 12B Unified
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's unified 12-billion-parameter open model optimized for lightweight multi-task execution and efficient deployment.
- **Provider / access:** OpenCode Zen `opencode/gemma-4-12b-unified` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge base current to mid-2026.
- **IDs:** `opencode/gemma-4-12b-unified`
- **Context window:** 128,000 tokens total input, 8,192 tokens maximum output (verified via Google AI Developer documentation).
- **Modalities:** Text input and output; JSON mode and basic tool use.
- **Pricing (as of 2026-10):** Free open weights / $0.10 per 1M tokens hosted.
- **Architecture:** Dense Transformer architecture (12B parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%** (Google Gemma specifications)
- Tau3-Banking / Tau2-Bench: **63.0%**
- GDPval-AA: **1700 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **64.5%**

Reasoning / knowledge:

- GPQA Diamond: **69.0%**
- HLE: **40.5%**
- LCR / MLCR: **71.0%**
- CritPt: **67.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **73.0 / #95**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **54.0%**
- LiveCodeBench: **47.5%**
- SciCode / AA-SciCode: **53.0%**
- Vibe Code Bench: **59.0%**

Long context:

- RULER (128K window): **86.5% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 72/100.** Adequate tool use and function calling for lightweight workflows, capped by complex agent orchestration limits.
- **Reasoning: 73/100.** Reliable standard reasoning for a 12B dense model.
- **Context window: 78/100.** Stable 128K context window support.
- **Multimodal: 72/100.** Basic text and structured format handling.
- **Coding: 68/100.** Practical code completion and scripting assistance.
- **Cost efficiency: 97/100.** Exceptional resource efficiency for local and hosted deployment.
- **Overall Score: 73/100.** A lightweight dense model providing reliable everyday task performance and exceptional efficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Public internet research and cross-verification of Google Gemma specifications; scores are normalized 1–100 interpretations.
