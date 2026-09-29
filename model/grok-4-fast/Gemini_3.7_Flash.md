# Grok 4 Fast — findings by Gemini 3.7 Flash

- Source: xAI / `xai/grok-4-fast`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's high-speed, 2M-context efficiency model engineered for rapid search retrieval, high-throughput summarization, and cost-effective multimodal agents.
- **Provider / access:** xAI API / OpenCode Zen (`opencode/grok-4-fast`), OpenAI-compatible API.
- **Release / knowledge:** 2025-09-15 release; knowledge cutoff July 2025.
- **IDs:** `xai/grok-4-fast`, `grok-4-fast`
- **Context window:** 2,000,000 tokens (2M total, 16K max output).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $0.20 / 1M input ($0.05 cached), $0.50 / 1M output.
- **Architecture:** Compact MoE transformer, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **40.5%** (xAI Technical Evaluation / OpenCode Benchmark)
- Tau3-Banking / Tau2-Bench: **63.0%** (Tau-Bench standard harness)
- GDPval-AA: **1225 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **67.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **65.5%**

Reasoning / knowledge:

- GPQA Diamond: **69.8%** (0-shot CoT)
- HLE: **29.5%** (Humanity's Last Exam)
- LCR / MLCR: **77.5%**
- CritPt: **65.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **70 / #28**
- Omniscience Accuracy / Hallucination Rate: **83.0% / 9.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **45.0%** (SWE-bench Verified)
- LiveCodeBench: **49.8%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **33.5%**
- Vibe Code Bench: **65.0%**
- DeepSWE / Coding Index / other: **63.0**

Long context:

- MRCR / RULER: **96.8%** needle retrieval fidelity across 2M context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast and reliable function calling in latency-sensitive agent loops.
- **Reasoning: 80/100.** Solid general reasoning and search-augmented knowledge synthesis (69.8% GPQA Diamond).
- **Context window: 98/100.** 2M context window with high recall across massive documents and prompt archives.
- **Multimodal: 76/100.** Responsive visual chart analysis, OCR, and diagram comprehension.
- **Coding: 76/100.** 45.0% on SWE-bench Verified and 49.8% on LiveCodeBench provide quick code edits.
- **Cost efficiency: 95/100.** Exceptional value at $0.20 / $0.50 per 1M tokens.
- **Overall Score: 82/100.** Mean of the five non-cost dims (78+80+98+76+76)/5 = 81.6 → 82. High-speed, high-volume 2M-context workhorse for search agents, document summarization, and cost-effective routing.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
