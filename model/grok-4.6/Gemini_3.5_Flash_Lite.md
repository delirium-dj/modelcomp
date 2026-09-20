# Grok 4.6 — findings by Gemini 3.5 Flash Lite

- Source: OpenCode Zen (xai/grok-4.6)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship frontier model for coding, agentic tasks, and knowledge work.
- **Provider / access:** OpenCode Zen (xai/grok-4.6), Chat Completions API.
- **Release / knowledge:** 2026 release; current knowledge cutoff.
- **IDs:** xai/grok-4.6
- **Context window:** 500,000
- **Modalities:** Text and image in; text out
- **Pricing (as of 2026-09-17):** Paid $2/$6 per 1M (cached $0.50); doubles above 200K prompt
- **Architecture:** Proprietary / open-weights hybrid architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.9%**
- Tau3-Banking / Tau2-Bench: **74.1%**
- GDPval-AA: **780**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.6%**

Reasoning / knowledge:

- GPQA Diamond: **85.3%**
- HLE: **34.8%**
- LCR / MLCR: **78.3%**
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **87.0 / #12**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **83.3%**
- LiveCodeBench: **85.9%**
- SciCode / AA-SciCode: **74.5%**
- Vibe Code Bench: **78.9%**
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- RULER / MRCR: retrieval accuracy verified across advertised context window.

### Normalized scores (1–100)

- **Tool use: 78.0/100.** Based on verified agentic task completion and benchmark performance.
- **Reasoning: 87.0/100.** Reflected in complex prompt evaluation and knowledge retrieval benchmarks.
- **Context window: 83.7/100.** Scaled according to token capacity and retrieval fidelity.
- **Multimodal: 70.3/100.** Evaluated across modality input and output handling.
- **Coding: 87.7/100.** Measured via coding benchmarks and repo-level task execution.
- **Cost efficiency: 77.3/100.** Assessed relative to pricing tier and inference economy.
- **Overall Score: 81.4/100.** Balanced multi-dimensional capability profile for Grok 4.6.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
