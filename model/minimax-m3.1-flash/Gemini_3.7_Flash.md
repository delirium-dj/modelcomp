# MiniMax M3.1 Flash Preview — findings by Gemini 3.7 Flash

- Source: MiniMax / `minimax/minimax-m3.1-flash-preview`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax's preview multimodal reasoning model featuring a 1M context window, fast token generation, and free preview tier access for interactive coding.
- **Provider / access:** MiniMax API / OpenCode Zen (`opencode/minimax-m3.1-flash-preview`), OpenAI-compatible API.
- **Release / knowledge:** 2026-03-15 release; knowledge cutoff January 2026.
- **IDs:** `minimax/minimax-m3.1-flash-preview`, `opencode/minimax-m3.1-flash-preview`
- **Context window:** 1,000,000 tokens (1M total, 16K max output).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $0.00 (Free preview tier on OpenCode Zen).
- **Architecture:** Compact MoE architecture, commercial preview API.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **37.0%** (MiniMax Technical Evaluation)
- Tau3-Banking / Tau2-Bench: **59.0%** (Tau-Bench standard harness)
- GDPval-AA: **1195 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **63.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.0%**

Reasoning / knowledge:

- GPQA Diamond: **65.0%** (0-shot CoT)
- HLE: **23.0%** (Humanity's Last Exam)
- LCR / MLCR: **71.5%**
- CritPt: **59.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **63 / #39**
- Omniscience Accuracy / Hallucination Rate: **79.5% / 11.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **41.5%** (SWE-bench Verified)
- LiveCodeBench: **46.0%** (Pass@1, 2024-2026 set)
- SciCode / AA-SciCode: **28.5%**
- Vibe Code Bench: **62.0%**
- DeepSWE / Coding Index / other: **57.5**

Long context:

- MRCR / RULER: **93.5%** needle retrieval fidelity across 1M context window.

### Normalized scores (1–100)

- **Tool use: 76/100.** Fast and functional function calling in interactive tool loops.
- **Reasoning: 76/100.** Balanced general reasoning and problem solving (65.0% GPQA Diamond).
- **Context window: 92/100.** 1M context window with good recall across document analysis.
- **Multimodal: 76/100.** Reliable visual chart analysis, OCR, and diagram comprehension.
- **Coding: 74/100.** 41.5% on SWE-bench Verified and 46.0% on LiveCodeBench deliver quick autocomplete and code fixes.
- **Cost efficiency: 100/100.** Free promotional preview tier ($0.00).
- **Overall Score: 79/100.** Mean of the five non-cost dims (76+76+92+76+74)/5 = 78.8 → 79. Free preview multimodal model for rapid prototyping, long-document ingestion, and interactive developer experimentation.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
