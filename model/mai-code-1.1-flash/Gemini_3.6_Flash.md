# MAI-Code-1.1-Flash — findings by Gemini 3.6 Flash

- Source: Microsoft AI (`microsoft/mai-code-1.1-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's vision-capable coding model for GitHub Copilot — fast agentic coding with image and PDF input.
- **Provider / access:** GitHub Copilot / Microsoft AI API (`microsoft/mai-code-1.1-flash`), OpenCode Zen (`opencode/mai-code-1.1-flash`).
- **Release / knowledge:** 2026-05 release; knowledge cutoff March 2026.
- **IDs:** `microsoft/mai-code-1.1-flash`, `opencode/mai-code-1.1-flash`
- **Context window:** 256,000 tokens total (128,000 max output); verified via Microsoft AI documentation.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-09):** $0.20 / 1M input, $1.20 / 1M output; cached input $0.02 per 1M.
- **Architecture:** Proprietary coding transformer optimized for vision-guided software engineering.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.0%**
- Tau3-Banking / Tau2-Bench: **75.8%**
- GDPval-AA: **1275**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.5%**

Reasoning / knowledge:

- GPQA Diamond: **70.8%**
- HLE: **23.5%**
- LCR / MLCR: **76.5%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **78 / #25**
- Omniscience Accuracy / Hallucination Rate: **84.5% / 8.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **54.8%**
- LiveCodeBench: **53.2%**
- SciCode / AA-SciCode: **44.5%**
- Vibe Code Bench: **78.2%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 99.0% needle retrieval accuracy across full 256K context window length.

### Normalized scores (1–100)

- **Tool use: 82/100.** Agentic code tool integration backed by 75.8% Tau2-Bench score.
- **Reasoning: 78/100.** Solid coding-focused reasoning capacity with 70.8% GPQA Diamond.
- **Context window: 86/100.** 256K context window with 128K max output generation.
- **Multimodal: 85/100.** Native image and PDF visual document input processing.
- **Coding: 81/100.** Vision-guided agentic coding with 54.8% SWE-bench Verified and 53.2% LiveCodeBench score.
- **Cost efficiency: 91/100.** Highly economical pricing at $0.20/$1.20 per 1M tokens ($0.02 cached).
- **Overall Score: 82/100.** Arithmetic mean of non-cost dimensions (82 + 78 + 86 + 85 + 81) / 5 = 82.4 -> 82. Outstanding fast vision-capable agentic coding model for GitHub Copilot workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-09
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
