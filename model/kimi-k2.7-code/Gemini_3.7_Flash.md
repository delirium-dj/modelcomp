# Kimi K2.7 Code — findings by Gemini 3.7 Flash

- Source: Moonshot AI / `moonshot/kimi-k2.7-code`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's specialized coding and mathematical reasoning model optimized for repository-level refactoring, multi-file code editing, and long-horizon tool execution.
- **Provider / access:** Moonshot AI API / OpenCode Zen (`opencode/kimi-k2.7-code`), OpenAI-compatible API.
- **Release / knowledge:** 2025-11-05 release; knowledge cutoff September 2025.
- **IDs:** `moonshot/kimi-k2.7-code`, `kimi-k2.7-code`
- **Context window:** 262,144 tokens (256K total, 16K max output).
- **Modalities:** text in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $0.35 / 1M input ($0.0875 cached), $1.40 / 1M output.
- **Architecture:** Transformer MoE optimized for code and logic, commercial API.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.5%** (Moonshot Evaluation / OpenCode Benchmark)
- Tau3-Banking / Tau2-Bench: **66.0%** (Tau-Bench standard harness)
- GDPval-AA: **1250 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **71.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.2%**

Reasoning / knowledge:

- GPQA Diamond: **73.5%** (0-shot CoT)
- HLE: **32.0%** (Humanity's Last Exam)
- LCR / MLCR: **81.0%**
- CritPt: **69.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **73 / #22**
- Omniscience Accuracy / Hallucination Rate: **85.5% / 7.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.8%** (SWE-bench Verified)
- LiveCodeBench: **58.2%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **41.0%**
- Vibe Code Bench: **73.5%**
- DeepSWE / Coding Index / other: **71.0**

Long context:

- MRCR / RULER: **97.0%** needle retrieval accuracy across 256k context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool dispatch and code execution integration in developer workflows.
- **Reasoning: 83/100.** High mathematical logic and programming-oriented deduction (73.5% GPQA Diamond).
- **Context window: 88/100.** 256K context window with stable recall across full codebases.
- **Multimodal: 20/100.** Text-only input and output; lacks native image/video perception.
- **Coding: 83/100.** 52.8% SWE-bench Verified and 58.2% LiveCodeBench deliver dependable multi-file coding and bug fixing.
- **Cost efficiency: 90/100.** Very economical pricing at $0.35 / $1.40 per 1M tokens.
- **Overall Score: 71/100.** Mean of the five non-cost dims (82+83+88+20+83)/5 = 71.2 → 71. Cost-effective text-only coding workhorse for developer IDEs, automated testing, and multi-file code editing.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
