# Claude Sonnet 5 — findings by Gemini 3.8 Flash

- Source: Anthropic/claude-sonnet-5
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's Sonnet-class foundation model built for agentic execution with adaptive thinking and 1M context at balanced cost.
- **Provider / access:** Anthropic API `anthropic/claude-sonnet-5` via Messages API.
- **Release / knowledge:** 2026-07 release; knowledge cutoff mid-2026.
- **IDs:** `anthropic/claude-sonnet-5` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M in / 128K out; verified via Anthropic documentation).
- **Modalities:** Text, image, and document files in; text and tool calls out.
- **Pricing (as of 2026-09-19):** $3.00 / 1M input, $15.00 / 1M output; prompt caching at $0.30 / 1M.
- **Architecture:** Proprietary transformer foundation model with adaptive reasoning tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.8%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **49.5%** (Tau3-Banking)
- GDPval-AA: **1735**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **80.0%**

Reasoning / knowledge:

- GPQA Diamond: **91.8%**
- HLE: **47.0%**
- LCR / MLCR: **86.0%**
- CritPt: **74.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **63.0 / #3**
- Omniscience Accuracy / Hallucination Rate: **91.5% / 4.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **74.8%**
- LiveCodeBench: **88.6%**
- SciCode / AA-SciCode: **60.5%**
- Vibe Code Bench: **66.0%**
- DeepSWE / Coding Index / other: **75.0%**

Long context:

- MRCR 98.6% at 1M; excellent long-range retrieval across full 1M context.

### Normalized scores (1–100)

- **Tool use: 91/100.** 86.8% on Terminal-Bench 2.1 confirms exceptional tool calling and workflow management.
- **Reasoning: 92/100.** 91.8% GPQA Diamond offers sharp, nuanced reasoning.
- **Context window: 100/100.** Full 1M context with 128K max generation and >98% MRCR.
- **Multimodal: 75/100.** Multi-page document and image analysis; no audio/video.
- **Coding: 93/100.** 74.8% SWE-bench Verified and 88.6% LiveCodeBench deliver tier-one coding results.
- **Cost efficiency: 60/100.** $3/$15 pricing provides reasonable value for an enterprise 1M agent.
- **Overall Score: 90/100.** Quality mean 90.2 rounds to 90; premier balance of coding competence, agent speed, and 1M window scale.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
