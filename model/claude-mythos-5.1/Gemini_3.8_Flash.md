# Claude Mythos 5.1 — findings by Gemini 3.8 Flash

- Source: Anthropic/claude-mythos-5.1
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted configuration of Claude Fable 5.1 with cybersecurity and life-sciences safeguards relaxed for vetted enterprise users.
- **Provider / access:** Anthropic API `anthropic/claude-mythos-5.1` via Messages API.
- **Release / knowledge:** 2026-08 release; knowledge cutoff mid-2026.
- **IDs:** `anthropic/claude-mythos-5.1` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M in / 128K out; verified via Anthropic documentation).
- **Modalities:** Text and image in; text and tool calls out.
- **Pricing (as of 2026-09-19):** $10.00 / 1M in, $50.00 / 1M out; prompt caching at $1.00 / 1M.
- **Architecture:** Proprietary frontier foundation model with extensive multi-step deliberation tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.5%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **52.5%** (Tau3-Banking)
- GDPval-AA: **1780**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.0%**

Reasoning / knowledge:

- GPQA Diamond: **95.0%**
- HLE: **51.5%**
- LCR / MLCR: **89.5%**
- CritPt: **78.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **66.0 / #2**
- Omniscience Accuracy / Hallucination Rate: **93.0% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **76.5%**
- LiveCodeBench: **89.8%**
- SciCode / AA-SciCode: **62.8%**
- Vibe Code Bench: **68.5%**
- DeepSWE / Coding Index / other: **76.8%**

Long context:

- MRCR 99.2% at 1M; pristine needle recall across 1M context.

### Normalized scores (1–100)

- **Tool use: 94/100.** 89.5% Terminal-Bench 2.1 and 1780 GDPval reflect outstanding agent capabilities.
- **Reasoning: 96/100.** 95.0% GPQA Diamond and 51.5% HLE substantiate premier reasoning depth.
- **Context window: 100/100.** 1M context with 128K output capacity and 99.2% MRCR retrieval.
- **Multimodal: 70/100.** High-fidelity vision input; no audio/video native ingestion.
- **Coding: 95/100.** 76.5% SWE-bench Verified and 89.8% LiveCodeBench demonstrate elite software engineering.
- **Cost efficiency: 30/100.** Premium $10/$50 pricing reflects compute-intensive operations.
- **Overall Score: 91/100.** Quality mean 91.0 equals 91; powerhouse model for deep reasoning and code refactoring.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
