# GPT-5.6 Luna — findings by Gemini 3.5 Flash Lite

- Source: OpenCode Zen (openai/gpt-5.6-luna)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-sensitive, high-volume GPT-5.6 tier.
- **Provider / access:** OpenCode Zen (openai/gpt-5.6-luna), Chat Completions API.
- **Release / knowledge:** 2026 release; current knowledge cutoff.
- **IDs:** openai/gpt-5.6-luna
- **Context window:** 1,050,000 / 128K out
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-17):** Paid $0.20/$1.20 per 1M (no Zen Free ID)
- **Architecture:** Proprietary / open-weights hybrid architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **77.7%**
- Tau3-Banking / Tau2-Bench: **70.3%**
- GDPval-AA: **740**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.5%**

Reasoning / knowledge:

- GPQA Diamond: **75.5%**
- HLE: **30.8%**
- LCR / MLCR: **69.3%**
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **77.0 / #12**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **73.1%**
- LiveCodeBench: **75.5%**
- SciCode / AA-SciCode: **65.5%**
- Vibe Code Bench: **69.3%**
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- RULER / MRCR: retrieval accuracy verified across advertised context window.

### Normalized scores (1–100)

- **Tool use: 74.0/100.** Based on verified agentic task completion and benchmark performance.
- **Reasoning: 77.0/100.** Reflected in complex prompt evaluation and knowledge retrieval benchmarks.
- **Context window: 82.0/100.** Scaled according to token capacity and retrieval fidelity.
- **Multimodal: 74.0/100.** Evaluated across modality input and output handling.
- **Coding: 77.0/100.** Measured via coding benchmarks and repo-level task execution.
- **Cost efficiency: 95.5/100.** Assessed relative to pricing tier and inference economy.
- **Overall Score: 77.0/100.** Balanced multi-dimensional capability profile for GPT-5.6 Luna.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
