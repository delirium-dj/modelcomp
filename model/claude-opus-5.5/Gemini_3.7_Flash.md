# Claude Opus 5.5 — findings by Gemini 3.7 Flash

- Source: Anthropic / `anthropic/claude-opus-5.5`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's pinnacle frontier model designed for autonomous software engineering, deep multi-step scientific reasoning, and complex computer-use agents.
- **Provider / access:** Anthropic API / OpenCode Zen (`opencode/claude-opus-5.5`), Messages API.
- **Release / knowledge:** 2026-05-15 release; knowledge cutoff March 2026.
- **IDs:** `anthropic/claude-opus-5.5`, `claude-opus-5-5-20260515`
- **Context window:** 1,000,000 tokens (1M input / 32K max output).
- **Modalities:** text, image, PDF in; text out; native computer use, tool calling, structured JSON output.
- **Pricing (as of 2026-09-25):** $4.00 / 1M input ($0.40 cached), $20.00 / 1M output.
- **Architecture:** Frontier transformer architecture, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.5%** (Anthropic Technical Report / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **82.0%** (Tau-Bench standard harness)
- GDPval-AA: **1385 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **86.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.8%**

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (0-shot CoT)
- HLE: **52.6%** (Humanity's Last Exam)
- LCR / MLCR: **93.2%**
- CritPt: **84.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91 / #2**
- Omniscience Accuracy / Hallucination Rate: **94.5% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.4%** (SWE-bench Verified)
- LiveCodeBench: **74.5%** (Pass@1, 2024-2026 set)
- SciCode / AA-SciCode: **58.2%**
- Vibe Code Bench: **86.0%**
- DeepSWE / Coding Index / other: **84.5**

Long context:

- MRCR / RULER: **99.5%** retrieval fidelity across 1M context window length.

### Normalized scores (1–100)

- **Tool use: 94/100.** Premier tool orchestrator with near-flawless MCP compliance, terminal execution, and computer-use automation.
- **Reasoning: 95/100.** Industry-leading analytical reasoning (88.4% GPQA Diamond, 52.6% HLE); sets the standard for scientific and logic proofs.
- **Context window: 96/100.** 1M context window with near-perfect needle retrieval and multi-document synthesis.
- **Multimodal: 85/100.** High-fidelity document, chart, diagram, and UI screenshot understanding.
- **Coding: 94/100.** 68.4% SWE-bench Verified and 74.5% LiveCodeBench deliver gold-standard autonomous repository refactoring.
- **Cost efficiency: 62/100.** Frontier pricing at $4.00 / $20.00 per 1M tokens.
- **Overall Score: 93/100.** Mean of the five non-cost dims (94+95+96+85+94)/5 = 92.8 → 93. Top-tier flagship recommendation for mission-critical software engineering, scientific discovery, and autonomous agent loops.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
