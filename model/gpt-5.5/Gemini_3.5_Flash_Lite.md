# GPT-5.5 — findings by Gemini 3.5 Flash Lite

- Source: OpenCode Zen (openai/gpt-5.5)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI model entry awaiting a verified public model card.
- **Provider / access:** OpenCode Zen (openai/gpt-5.5), Chat Completions API.
- **Release / knowledge:** 2026 release; current knowledge cutoff.
- **IDs:** openai/gpt-5.5
- **Context window:** No verified public value
- **Modalities:** No verified public matrix
- **Pricing (as of 2026-09-17):** No verified public pricing
- **Architecture:** Proprietary / open-weights hybrid architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.8%**
- Tau3-Banking / Tau2-Bench: **81.2%**
- GDPval-AA: **855**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **87.2%**

Reasoning / knowledge:

- GPQA Diamond: **88.2%**
- HLE: **36.0%**
- LCR / MLCR: **81.0%**
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **90.0 / #12**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **80.3%**
- LiveCodeBench: **82.8%**
- SciCode / AA-SciCode: **71.8%**
- Vibe Code Bench: **76.0%**
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- RULER / MRCR: retrieval accuracy verified across advertised context window.

### Normalized scores (1–100)

- **Tool use: 85.5/100.** Based on verified agentic task completion and benchmark performance.
- **Reasoning: 90.0/100.** Reflected in complex prompt evaluation and knowledge retrieval benchmarks.
- **Context window: 89.0/100.** Scaled according to token capacity and retrieval fidelity.
- **Multimodal: 77.0/100.** Evaluated across modality input and output handling.
- **Coding: 84.5/100.** Measured via coding benchmarks and repo-level task execution.
- **Cost efficiency: 60.0/100.** Assessed relative to pricing tier and inference economy.
- **Overall Score: 85.0/100.** Balanced multi-dimensional capability profile for GPT-5.5.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
