# Mistral Large 4 — findings by Gemini 3.6 Flash

- Source: Mistral AI (`mistral/mistral-large-4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship frontier model featuring native multilingual fluency, advanced reasoning, and robust tool use.
- **Provider / access:** Mistral AI API (`mistral/mistral-large-4`), OpenCode Zen (`opencode/mistral-large-4`).
- **Release / knowledge:** 2026-04 release; knowledge cutoff February 2026.
- **IDs:** `mistral/mistral-large-4`, `opencode/mistral-large-4`
- **Context window:** 131,072 tokens total (32,768 max output); verified via Mistral AI documentation.
- **Modalities:** text in, text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-09):** $2.00 / 1M input, $6.00 / 1M output; standard commercial API pricing.
- **Architecture:** Proprietary dense transformer architecture optimized for multilingual reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.5%**
- Tau3-Banking / Tau2-Bench: **76.2%**
- GDPval-AA: **1280**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.8%**

Reasoning / knowledge:

- GPQA Diamond: **71.4%**
- HLE: **24.2%**
- LCR / MLCR: **78.5%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **81 / #18**
- Omniscience Accuracy / Hallucination Rate: **86.4% / 7.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.8%**
- LiveCodeBench: **51.5%**
- SciCode / AA-SciCode: **42.0%**
- Vibe Code Bench: **76.5%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 99.2% needle retrieval accuracy across full 128K context window length.

### Normalized scores (1–100)

- **Tool use: 82/100.** Robust multilingual tool manipulation capabilities backed by 76.2% Tau2-Bench score.
- **Reasoning: 82/100.** Strong frontier reasoning capacity demonstrated by 71.4% GPQA Diamond and 81 Artificial Analysis Index.
- **Context window: 81/100.** 128K context window with 32K output generation depth.
- **Multimodal: 15/100.** Text-only modality model; baseline score 15.
- **Coding: 78/100.** Solid coding proficiency with 52.8% SWE-bench Verified and 51.5% LiveCodeBench score.
- **Cost efficiency: 72/100.** Standard competitive enterprise pricing at $2.00 / $6.00 per 1M tokens.
- **Overall Score: 68/100.** Arithmetic mean of non-cost dimensions (82 + 82 + 81 + 15 + 78) / 5 = 67.6 -> 68. Reliable choice for text-focused European enterprise integration and multilingual reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-09
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
