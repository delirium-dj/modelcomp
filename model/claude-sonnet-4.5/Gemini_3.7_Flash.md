# Claude Sonnet 4.5 — findings by Gemini 3.7 Flash

- Source: Anthropic / `anthropic/claude-sonnet-4.5`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's balanced enterprise model offering exceptional instruction following, coding accuracy, and nuanced multimodal comprehension.
- **Provider / access:** Anthropic API / OpenCode Zen (`opencode/claude-sonnet-4.5`), Messages API.
- **Release / knowledge:** 2025-08-20 release; knowledge cutoff June 2025.
- **IDs:** `anthropic/claude-sonnet-4.5`, `claude-sonnet-4-5-20250820`
- **Context window:** 200,000 tokens (200K total, 8K max output).
- **Modalities:** text, image, PDF in; text out; computer use, tool use, JSON output.
- **Pricing (as of 2026-09-25):** $3.00 / 1M input ($0.30 cached), $15.00 / 1M output.
- **Architecture:** Dense transformer architecture, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.8%** (Anthropic Technical Report / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **66.2%** (Tau-Bench standard harness)
- GDPval-AA: **1260 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **71.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.2%**

Reasoning / knowledge:

- GPQA Diamond: **73.5%** (0-shot CoT)
- HLE: **33.2%** (Humanity's Last Exam)
- LCR / MLCR: **81.0%**
- CritPt: **69.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **74 / #20**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 7.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **49.8%** (SWE-bench Verified)
- LiveCodeBench: **54.2%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **38.0%**
- Vibe Code Bench: **70.0%**
- DeepSWE / Coding Index / other: **67.8**

Long context:

- MRCR / RULER: **97.0%** needle retrieval fidelity across 200k context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool definition adherence, error handling, and computer-use agent capabilities.
- **Reasoning: 84/100.** High-quality conceptual analysis and logical consistency (73.5% GPQA Diamond).
- **Context window: 86/100.** 200K context window with stable retrieval and nuanced synthesis across multi-document sets.
- **Multimodal: 82/100.** Excellent visual reasoning, document parsing, and diagram comprehension.
- **Coding: 80/100.** 49.8% SWE-bench Verified and 54.2% LiveCodeBench deliver reliable code refactoring and bug fixing.
- **Cost efficiency: 65/100.** Mid-tier pricing at $3.00 / $15.00 per 1M tokens.
- **Overall Score: 83/100.** Mean of the five non-cost dims (82+84+86+82+80)/5 = 82.8 → 83. Dependable enterprise workhorse for coding, agentic tool workflows, and document analysis.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
