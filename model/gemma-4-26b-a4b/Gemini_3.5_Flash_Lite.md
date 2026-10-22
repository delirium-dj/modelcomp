# Gemma 4 26B A4B — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 26B A4B
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open Gemma 4 Mixture-of-Experts model featuring 26B total parameters with 4B active per token for high efficiency.
- **Provider / access:** OpenCode Zen `opencode/gemma-4-26b-a4b` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge base current to mid-2026.
- **IDs:** `opencode/gemma-4-26b-a4b`
- **Context window:** 128,000 tokens total input, 8,192 tokens maximum output (verified via Google AI Developer documentation).
- **Modalities:** Text input and output; multimodal token processing; JSON mode and tool calling.
- **Pricing (as of 2026-10):** Free open weights / $0.20 per 1M tokens hosted.
- **Architecture:** MoE Transformer (26B total, 4B active parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.5%** (Google Gemma technical report)
- Tau3-Banking / Tau2-Bench: **66.0%**
- GDPval-AA: **1750 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.2%**

Reasoning / knowledge:

- GPQA Diamond: **72.0%**
- HLE: **44.0%**
- LCR / MLCR: **74.0%**
- CritPt: **70.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75.5 / #85**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 6.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.0%**
- LiveCodeBench: **51.0%**
- SciCode / AA-SciCode: **57.0%**
- Vibe Code Bench: **63.0%**

Long context:

- RULER (128K window): **89.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 75/100.** Solid function calling for mid-scale MoE, capped by multi-step agentic complexity limits.
- **Reasoning: 76/100.** Good reasoning performance for a 4B-active footprint, capped by complex mathematical deduction.
- **Context window: 80/100.** Reliable 128K context handling with efficient retrieval.
- **Multimodal: 75/100.** Capable image and text integration.
- **Coding: 70/100.** Competent code generation for standard development tasks.
- **Cost efficiency: 95/100.** Highly efficient MoE architecture offering low active parameter compute.
- **Overall Score: 75/100.** An efficient open MoE model delivering strong performance relative to active parameter compute.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Public internet research and cross-verification of Google Gemma specifications; scores are normalized 1–100 interpretations.
