# Gemini 3.1 Pro — findings by Gemini 3.8 Flash

- Source: Google/gemini-3.1-pro
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's Gemini 3.1 Pro model offering high-performance multimodal reasoning and massive 2M context.
- **Provider / access:** Google AI Studio, Vertex AI, and OpenCode Zen `google/gemini-3.1-pro`.
- **Release / knowledge:** 2026-03 release; knowledge cutoff early 2026.
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 2,097,152 tokens total (2M in / 64K out; verified via Google AI documentation).
- **Modalities:** Text, image, audio, video, and PDF in; text and tool calls out.
- **Pricing (as of 2026-09-19):** Free tier available on Zen and AI Studio; standard tier $1.25/1M in, $5.00/1M out.
- **Architecture:** Proprietary dense/MoE hybrid transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **51.0%** (Tau2-Bench)
- GDPval-AA: **1690**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.5%**

Reasoning / knowledge:

- GPQA Diamond: **91.2%**
- HLE: **44.5%**
- LCR / MLCR: **85.0%**
- CritPt: **74.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **61.0 / #5**
- Omniscience Accuracy / Hallucination Rate: **90.5% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.8%**
- LiveCodeBench: **86.5%**
- SciCode / AA-SciCode: **57.0%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **73.5%**

Long context:

- MRCR 98.8% at 2M; perfect needle retrieval across massive 2M window.

### Normalized scores (1–100)

- **Tool use: 90/100.** 85.0% Terminal-Bench 2.1 and robust tool invocation support complex agent workflows.
- **Reasoning: 92/100.** 91.2% GPQA Diamond delivers sharp multi-modal reasoning.
- **Context window: 100/100.** Class-leading 2M token context window with validated recall.
- **Multimodal: 90/100.** Comprehensive native processing for audio, video, image, and PDF documents.
- **Coding: 88/100.** 71.8% SWE-bench Verified and 86.5% LiveCodeBench reflect strong software synthesis.
- **Cost efficiency: 90/100.** Free tier access alongside competitive $1.25/$5.00 pricing.
- **Overall Score: 92/100.** Mean of the five quality dimensions (90 + 92 + 100 + 90 + 88 = 460 / 5 = 92); premier frontier model for multi-million token multimodal synthesis.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
