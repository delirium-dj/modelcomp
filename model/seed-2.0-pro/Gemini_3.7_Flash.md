# Seed 2.0 Pro — findings by Gemini 3.7 Flash

- Source: ByteDance / `bytedance/seed-2.0-pro`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's omni-modal foundation model engineered for high-accuracy video comprehension, complex mathematical problem solving, and competitive coding agents.
- **Provider / access:** ByteDance Volcano Engine / OpenCode Zen (`opencode/seed-2.0-pro`), Chat Completions API.
- **Release / knowledge:** 2026-01-25 release; knowledge cutoff November 2025.
- **IDs:** `bytedance/seed-2.0-pro`, `seed-2.0-pro`
- **Context window:** 262,144 tokens (256K total, 16K max output).
- **Modalities:** text, image, video, audio in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $0.47 / 1M input ($0.12 cached), $2.37 / 1M output.
- **Architecture:** Omni-modal MoE architecture, commercial API.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.0%** (ByteDance Technical Evaluation)
- Tau3-Banking / Tau2-Bench: **68.5%** (Tau-Bench standard harness)
- GDPval-AA: **1265 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **73.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.8%**

Reasoning / knowledge:

- GPQA Diamond: **78.0%** (0-shot CoT)
- HLE: **36.5%** (Humanity's Last Exam)
- LCR / MLCR: **83.5%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **76 / #17**
- Omniscience Accuracy / Hallucination Rate: **87.5% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.5%** (SWE-bench Verified)
- LiveCodeBench: **57.8%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **41.0%**
- Vibe Code Bench: **73.0%**
- DeepSWE / Coding Index / other: **70.5**

Long context:

- MRCR / RULER: **97.0%** retrieval accuracy across 256k context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid function calling and multi-tool orchestration; robust handling of structured API responses.
- **Reasoning: 87/100.** Strong mathematical deduction and competitive scientific reasoning (78.0% GPQA Diamond).
- **Context window: 88/100.** 256K context window with high recall across long documents and multi-minute video streams.
- **Multimodal: 88/100.** Comprehensive native perception of video, audio, complex infographics, and OCR documents.
- **Coding: 82/100.** 52.5% on SWE-bench Verified and 57.8% on LiveCodeBench provide steady developer assistance.
- **Cost efficiency: 86/100.** Very competitive pricing at $0.47 / $2.37 per 1M tokens.
- **Overall Score: 85/100.** Mean of the five non-cost dims (82+87+88+88+82)/5 = 85.4 → 85. Cost-effective omni-modal model for video analysis, math reasoning, and general agentic workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
