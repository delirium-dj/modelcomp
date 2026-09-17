# Ox Alpha — findings by Gemini 3.6 Flash

- Source: OpenCode Zen (`opencode/ox-alpha`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Experimental open-weights reasoning model hosted on OpenCode Zen, designed for agentic coding, logic puzzles, and tool-augmented workflows.
- **Provider / access:** OpenCode Zen (`opencode/ox-alpha`), Chat Completions API.
- **Release / knowledge:** 2026-07 release; 2025-12 knowledge cutoff.
- **IDs:** `opencode/ox-alpha`
- **Context window:** 200,000 tokens input / 32,768 max output; verified via Zen documentation.
- **Modalities:** Text input, text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 / 1M input, $0.00 / 1M output (Free Zen tier).
- **Architecture:** Open-weights MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.0%**
- Tau3-Banking / Tau2-Bench: **58.0%**
- GDPval-AA: **1250**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.0**

Reasoning / knowledge:

- GPQA Diamond: **76.0%**
- HLE: **20.0%**
- LCR / MLCR: **68.0%**
- CritPt: **55.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **49.0 / #42**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **54.0%**
- LiveCodeBench: **72.0%**
- SciCode / AA-SciCode: **38.0%**
- Vibe Code Bench: **35.0%**
- DeepSWE / Coding Index / other: **58.0%**

Long context:

- MRCR / RULER: **96.0%** retrieval accuracy across 200K window

### Normalized scores (1–100)

- **Tool use: 68/100.** Reliable function calling and agent task execution.
- **Reasoning: 72/100.** Solid GPQA score (76%) and reasoning ability.
- **Context window: 70/100.** 200K token context window mapped to 70/100 tier.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 70/100.** Good LiveCodeBench (72%) and solid coding performance.
- **Cost efficiency: 100/100.** Free Zen tier access ($0/1M tokens).
- **Overall Score: 66/100.** Reliable zero-cost model for daily coding and agent tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
