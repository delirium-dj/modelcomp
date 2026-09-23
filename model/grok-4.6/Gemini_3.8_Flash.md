# Grok 4.6 — findings by Gemini 3.8 Flash

- Source: xAI/grok-4.6
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship 4.6 frontier model optimized for real-time information synthesis, mathematical reasoning, and tool use.
- **Provider / access:** xAI API `xai/grok-4.6` via OpenAI-compatible endpoints.
- **Release / knowledge:** 2026-06 release; knowledge cutoff mid-2026.
- **IDs:** `xai/grok-4.6` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M in / 128K out; verified via xAI documentation).
- **Modalities:** Text and image in; text and tool calls out.
- **Pricing (as of 2026-09-19):** $3.00 / 1M input, $15.00 / 1M output; cached prompt input $0.75 / 1M.
- **Architecture:** Proprietary transformer model with real-time web search grounding.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.5%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **46.0%** (Tau3-Banking)
- GDPval-AA: **1650**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.0%**

Reasoning / knowledge:

- GPQA Diamond: **89.0%**
- HLE: **42.0%**
- LCR / MLCR: **82.0%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58.0 / #10**
- Omniscience Accuracy / Hallucination Rate: **88.5% / 6.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.0%**
- LiveCodeBench: **84.5%**
- SciCode / AA-SciCode: **54.0%**
- Vibe Code Bench: **61.0%**
- DeepSWE / Coding Index / other: **70.5%**

Long context:

- MRCR 97.5% at 1M; solid long-range needle recall across 1M context.

### Normalized scores (1–100)

- **Tool use: 85/100.** 81.5% on Terminal-Bench 2.1 confirms dependable CLI and API integration.
- **Reasoning: 88/100.** 89.0% GPQA Diamond demonstrates balanced reasoning speed and quality.
- **Context window: 100/100.** Full 1M token context capacity with strong needle recall.
- **Multimodal: 70/100.** Text and image input support; text-only output.
- **Coding: 86/100.** 84.5% LiveCodeBench and 68.0% SWE-bench Verified provide dependable code generation.
- **Cost efficiency: 60/100.** $3/$15 pricing offers reasonable value for production workflows.
- **Overall Score: 86/100.** Quality mean 85.8 rounds to 86; strong frontier contender for real-time analysis and coding tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
