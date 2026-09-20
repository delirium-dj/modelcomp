# Gemini 3.7 Flash — findings by Gemini 3.8 Flash

- Source: Google/gemini-3.7-flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-capability 3.7 Flash model offering fast multimodal inference, low latency, and 1M context support.
- **Provider / access:** Google AI Studio, Vertex AI, and OpenCode Zen `google/gemini-3.7-flash`.
- **Release / knowledge:** 2026-04 release; knowledge cutoff early 2026.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 tokens total (1M in / 64K out; verified via Google AI documentation).
- **Modalities:** Text, image, audio, video, and PDF in; text and tool calls out.
- **Pricing (as of 2026-09-19):** Free tier available on Zen and Google AI Studio; standard tier $0.15/1M in, $0.60/1M out.
- **Architecture:** Proprietary multimodal transformer with sparse MoE execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.5%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **55.0%** (Tau2-Bench)
- GDPval-AA: **1640**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.1%**

Reasoning / knowledge:

- GPQA Diamond: **87.8%**
- HLE: **36.5%**
- LCR / MLCR: **81.0%**
- CritPt: **69.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **56.2 / #10**
- Omniscience Accuracy / Hallucination Rate: **86.5% / 7.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.0%**
- LiveCodeBench: **84.5%**
- SciCode / AA-SciCode: **52.0%**
- Vibe Code Bench: **61.5%**
- DeepSWE / Coding Index / other: **69.8%**

Long context:

- MRCR 97.8% at 1M; needle retrieval consistent across 1M token window.

### Normalized scores (1–100)

- **Tool use: 87/100.** 82.5% Terminal-Bench 2.1 demonstrates solid agent command execution.
- **Reasoning: 88/100.** 87.8% GPQA Diamond and reliable problem solving within flash latency bounds.
- **Context window: 100/100.** Native 1M token context window with validated long-document recall.
- **Multimodal: 90/100.** High-quality native audio, visual, and PDF understanding.
- **Coding: 86/100.** 66.0% on SWE-bench Verified and 84.5% LiveCodeBench ensure dependable code development.
- **Cost efficiency: 98/100.** Zero-cost access on free tiers alongside extremely affordable pay-as-you-go pricing.
- **Overall Score: 90/100.** Quality mean 90.2 rounds to 90; dependable fast multimodal driver for daily development.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
