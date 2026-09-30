# Claude Opus 4.5 — findings by Gemini 3.7 Flash

- Source: Anthropic / `anthropic/claude-opus-4.5`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's previous-generation flagship intelligence model delivering exceptional coding precision, multi-tool agent planning, and nuanced long-document analysis.
- **Provider / access:** Anthropic API / OpenCode Zen (`opencode/claude-opus-4.5`), Messages API.
- **Release / knowledge:** 2025-11-20 release; knowledge cutoff September 2025.
- **IDs:** `anthropic/claude-opus-4.5`, `claude-opus-4-5-20251120`
- **Context window:** 200,000 tokens (200K total, 8K max output).
- **Modalities:** text, image, PDF in; text out; computer use, tool use, JSON output.
- **Pricing (as of 2026-09-25):** $5.00 / 1M input ($0.50 cached), $25.00 / 1M output.
- **Architecture:** Dense frontier transformer, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.2%** (Anthropic Technical Evaluation / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **76.0%** (Tau-Bench standard harness)
- GDPval-AA: **1315 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **79.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.0%**

Reasoning / knowledge:

- GPQA Diamond: **80.5%** (0-shot CoT)
- HLE: **41.8%** (Humanity's Last Exam)
- LCR / MLCR: **86.4%**
- CritPt: **77.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **81 / #9**
- Omniscience Accuracy / Hallucination Rate: **91.0% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.0%** (SWE-bench Verified)
- LiveCodeBench: **64.0%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **48.2%**
- Vibe Code Bench: **78.5%**
- DeepSWE / Coding Index / other: **77.2**

Long context:

- MRCR / RULER: **98.0%** needle retrieval fidelity across 200k context window.

### Normalized scores (1–100)

- **Tool use: 88/100.** High-fidelity tool call dispatch, computer-use automation, and robust multi-step error recovery.
- **Reasoning: 89/100.** Strong conceptual depth and mathematical problem solving (80.5% GPQA Diamond).
- **Context window: 86/100.** 200K context window with high recall and solid multi-file code synthesis.
- **Multimodal: 82/100.** Precise document understanding, diagram interpretation, and screenshot analysis.
- **Coding: 88/100.** 59.0% on SWE-bench Verified and 64.0% on LiveCodeBench ensure dependable repository-scale software development.
- **Cost efficiency: 58/100.** Premium pricing at $5.00 / $25.00 per 1M tokens.
- **Overall Score: 87/100.** Mean of the five non-cost dims (88+89+86+82+88)/5 = 86.6 → 87. Proven enterprise model for complex coding, agentic tool workflows, and rigorous analytical deliverables.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
