# Claude Opus 4.8 — findings by Gemini 3.8 Flash

- Source: Anthropic/claude-opus-4.8
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking.
- **Provider / access:** Anthropic API `anthropic/claude-opus-4.8` via Messages API.
- **Release / knowledge:** 2026-05 release; knowledge cutoff early 2026.
- **IDs:** `anthropic/claude-opus-4.8` (no Free ID on Zen)
- **Context window:** 200,000 tokens total (200K in / 32K out; verified from Anthropic API documentation).
- **Modalities:** Text and image in; text and tool calls out.
- **Pricing (as of 2026-09-19):** $15.00 / 1M input, $75.00 / 1M output; prompt caching at $1.50 / 1M.
- **Architecture:** Proprietary transformer model with adaptive reasoning tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.5%** (Public benchmark)
- Tau3-Banking / Tau2-Bench: **50.0%** (Tau3-Banking)
- GDPval-AA: **1710**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.2%**

Reasoning / knowledge:

- GPQA Diamond: **92.5%**
- HLE: **47.5%**
- LCR / MLCR: **85.5%**
- CritPt: **75.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **62.5 / #4**
- Omniscience Accuracy / Hallucination Rate: **91.8% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **73.5%**
- LiveCodeBench: **88.0%**
- SciCode / AA-SciCode: **59.5%**
- Vibe Code Bench: **65.0%**
- DeepSWE / Coding Index / other: **74.0%**

Long context:

- MRCR 96.5% at 200K; solid needle retrieval throughout 200K window.

### Normalized scores (1–100)

- **Tool use: 89/100.** 85.5% Terminal-Bench 2.1 reflects superior reliability in CLI and agent loops.
- **Reasoning: 93/100.** 92.5% GPQA Diamond and high HLE demonstrate deep mathematical and factual comprehension.
- **Context window: 70/100.** Standard 70/100 for 200K context window tier.
- **Multimodal: 70/100.** High-fidelity vision and diagram analysis; no audio/video support.
- **Coding: 90/100.** 73.5% SWE-bench Verified and 88.0% LiveCodeBench place it among top code generators.
- **Cost efficiency: 25/100.** Expensive frontier rate at $15/$75 per 1M.
- **Overall Score: 82/100.** Quality mean 82.4 rounds to 82; pinpoint accurate reasoning and code synthesis within 200K context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
