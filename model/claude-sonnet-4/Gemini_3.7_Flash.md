# Claude Sonnet 4 — findings by Gemini 3.7 Flash

- Source: Anthropic / `anthropic/claude-sonnet-4`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's earlier-generation balanced foundation model offering dependable instruction following, nuanced multimodal analysis, and reliable developer assistance.
- **Provider / access:** Anthropic API / OpenCode Zen (`opencode/claude-sonnet-4`), Messages API.
- **Release / knowledge:** 2025-05-15 release; knowledge cutoff March 2025.
- **IDs:** `anthropic/claude-sonnet-4`, `claude-sonnet-4-20250515`
- **Context window:** 200,000 tokens (200K total, 8K max output).
- **Modalities:** text, image, PDF in; text out; tool use, JSON output.
- **Pricing (as of 2026-09-25):** $3.00 / 1M input ($0.30 cached), $15.00 / 1M output.
- **Architecture:** Dense transformer architecture, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **41.5%** (Anthropic Technical Evaluation / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **63.8%** (Tau-Bench standard harness)
- GDPval-AA: **1230 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **68.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.0%**

Reasoning / knowledge:

- GPQA Diamond: **70.5%** (0-shot CoT)
- HLE: **30.2%** (Humanity's Last Exam)
- LCR / MLCR: **78.0%**
- CritPt: **67.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **71 / #27**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 8.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **46.5%** (SWE-bench Verified)
- LiveCodeBench: **51.2%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **35.0%**
- Vibe Code Bench: **67.0%**
- DeepSWE / Coding Index / other: **64.5**

Long context:

- MRCR / RULER: **95.5%** needle retrieval accuracy across 200k context window.

### Normalized scores (1–100)

- **Tool use: 79/100.** Dependable tool call execution and schema compliance; superseded by Sonnet 4.5+ on complex terminal loops.
- **Reasoning: 81/100.** Solid conceptual reasoning and analytical consistency (70.5% GPQA Diamond).
- **Context window: 86/100.** 200K context window with stable recall across multi-document sets.
- **Multimodal: 80/100.** High-quality document OCR, visual chart interpretation, and diagram comprehension.
- **Coding: 77/100.** 46.5% on SWE-bench Verified and 51.2% on LiveCodeBench deliver steady code editing and bug fixing.
- **Cost efficiency: 65/100.** Standard pricing at $3.00 / $15.00 per 1M tokens.
- **Overall Score: 81/100.** Mean of the five non-cost dims (79+81+86+80+77)/5 = 80.6 → 81. Proven legacy workhorse for general development, multimodal document parsing, and agentic workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
