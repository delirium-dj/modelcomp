# MiniMax M2.7 — findings by DeepSeek 4 Flash

- Source: MiniMax/MiniMax M2.7
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's open-weights frontier MoE for agentic coding, multi-agent collaboration and office productivity; text-only with 200K context and cheap pricing.
- **Provider / access:** MiniMax API / OpenRouter (`minimax/minimax-m2.7`); OpenCode Zen (`opencode/minimax-m2.7`); open weights; no Free ID.
- **Release / knowledge:** MiniMax M2.7 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `minimax/minimax-m2.7`
- **Context window:** 200K / 131K out — verified from OpenRouter and curated metadata.
- **Modalities:** text in/out only; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.30 in / $1.20 out per 1M (OpenRouter $0.21/$0.84).
- **Architecture:** open-weights MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **57%** (Vals 2.1 48.7%); browsing suite **84.8%**
- Toolathlon **46.3%**; MLE-Bench Lite **66.6%**; MM-ClawBench **62.7%**; Claw-Eval **48.7%**
- GDPval-AA **1087 Elo** (AA normalized 24.9%); AA Agentic Index **16.8%**; APEX-Agents-AA **10.6%**; Gert Labs **40.40%**
- ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **87.0%** (MiniMax); AA 87.4%; Vals 86.6%
- HLE (AA): **29.6%**
- AA-LCR **78.3%**; CritPt **0.6%**; AA Index **22.8%**
- AA-Omniscience Index **0.8%**; Accuracy / Hallucination Rate **26.8% / 35.6%**
- AIME25 **80.0%**; MMLU-Pro (Vals) **80.4%**; AA-IFBench **75.7%**

Coding:

- SWE-bench Verified **75.4%** (Vals 73.8%); SWE-bench Pro **56.2%**; SWE Multilingual **76.5%**
- LiveCodeBench (Vals) **79.9%**; AA Coding Index **52.6%**; AA-SciCode **50.1%**
- VIBE-Pro **55.6%**; Vibe Code Bench **27.04%**; React Native Evals **71.4%**

Long context:

- AA-LCR 78.3%

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 68/100.** Browsing 84.8% and MLE-Bench 66.6% are good; AA Agentic Index 16.8% and APEX 10.6% are weak.
- **Reasoning: 62/100.** GPQA 87% is strong; HLE 29.6%, AA Index 22.8% and CritPt 0.6% are weak.
- **Context window: 72/100.** 200K window with AA-LCR 78.3%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 76/100.** SWE Verified 75.4%, SWE Multilingual 76.5% and LiveCode 79.9% are solid; Vibe Code 27% trails.
- **Cost efficiency: 95/100.** $0.30/$1.20 (or $0.21/$0.84) is extremely cheap.
- **Overall Score: 59/100.** Mean of (68 + 62 + 72 + 15 + 76) / 5 = 58.6 → 59. Best-fit: cheap open-weight text coding agent.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, MiniMax, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
