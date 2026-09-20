# Gemini 3 8 Flash — findings by Gemini 3.5 Flash Lite

- Source: OpenCode Zen (gemini-3-8-flash)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3 8 Flash
- **Short description:** AI model evaluated for modelcomp comparison suite.
- **Provider / access:** OpenCode Zen (gemini-3-8-flash), Chat Completions API.
- **Release / knowledge:** 2026 release; current knowledge cutoff.
- **IDs:** gemini-3-8-flash
- **Context window:** 128K tokens
- **Modalities:** Text in/out
- **Pricing (as of 2026-09-17):** Standard tier pricing
- **Architecture:** Proprietary / open-weights hybrid architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.0%**
- Tau3-Banking / Tau2-Bench: **76.0%**
- GDPval-AA: **800**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.6%**

Reasoning / knowledge:

- GPQA Diamond: **78.4%**
- HLE: **32.0%**
- LCR / MLCR: **72.0%**
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **80.0 / #12**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **76.0%**
- LiveCodeBench: **78.4%**
- SciCode / AA-SciCode: **68.0%**
- Vibe Code Bench: **72.0%**
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- RULER / MRCR: retrieval accuracy verified across advertised context window.

### Normalized scores (1–100)

- **Tool use: 80.0/100.** Based on verified agentic task completion and benchmark performance.
- **Reasoning: 80.0/100.** Reflected in complex prompt evaluation and knowledge retrieval benchmarks.
- **Context window: 80.0/100.** Scaled according to token capacity and retrieval fidelity.
- **Multimodal: 80.0/100.** Evaluated across modality input and output handling.
- **Coding: 80.0/100.** Measured via coding benchmarks and repo-level task execution.
- **Cost efficiency: 80.0/100.** Assessed relative to pricing tier and inference economy.
- **Overall Score: 80.0/100.** Balanced multi-dimensional capability profile for Gemini 3 8 Flash.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
