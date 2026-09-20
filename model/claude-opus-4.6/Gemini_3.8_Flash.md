# Claude Opus 4.6 — findings by Gemini 3.8 Flash

- Source: Anthropic/claude-opus-4.6
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's reasoning-capable foundation model featuring extended internal thinking for complex, multi-step execution.
- **Provider / access:** Anthropic API `anthropic/claude-opus-4.6` via Messages API.
- **Release / knowledge:** 2026-02 release; knowledge cutoff late 2025.
- **IDs:** `anthropic/claude-opus-4.6` (no Free ID on Zen)
- **Context window:** 200,000 tokens total (200K in / 32K out; verified from Anthropic API documentation).
- **Modalities:** Text and image in; text and tool calls out.
- **Pricing (as of 2026-09-19):** $15.00 / 1M input, $75.00 / 1M output; prompt caching at $1.50 / 1M.
- **Architecture:** Proprietary transformer model with adaptive reasoning tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.0%** (Public benchmark)
- Tau3-Banking / Tau2-Bench: **49.0%** (Tau3-Banking)
- GDPval-AA: **1680**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.5%**

Reasoning / knowledge:

- GPQA Diamond: **91.5%**
- HLE: **46.0%**
- LCR / MLCR: **84.0%**
- CritPt: **74.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **60.5 / #6**
- Omniscience Accuracy / Hallucination Rate: **91.0% / 4.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.5%**
- LiveCodeBench: **86.5%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **63.5%**
- DeepSWE / Coding Index / other: **72.0%**

Long context:

- MRCR 96.0% at 200K; strong needle retrieval across the native 200K window.

### Normalized scores (1–100)

- **Tool use: 88/100.** 84.0% Terminal-Bench 2.1 demonstrates refined tool and shell interactions.
- **Reasoning: 92/100.** 91.5% GPQA Diamond and deep internal thinking support difficult logic problems.
- **Context window: 70/100.** 200K native context window receives standard 70/100 per methodology mapping.
- **Multimodal: 70/100.** Text and image input support; lacks audio or video capabilities.
- **Coding: 89/100.** 71.5% SWE-bench Verified and 86.5% LiveCodeBench reflect advanced software skills.
- **Cost efficiency: 25/100.** High premium pricing at $15/$75 per 1M limits high-volume usage.
- **Overall Score: 82/100.** Quality mean 81.8 rounds to 82; elite precision solver for tasks contained within 200K tokens.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
