# Claude Sonnet 4.6 — findings by Gemini 3.8 Flash

- Source: Anthropic/claude-sonnet-4.6
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's high-performance, reasoning-capable model optimized for rapid execution and complex coding tasks within a 200K window.
- **Provider / access:** Anthropic API `anthropic/claude-sonnet-4.6` via Messages API.
- **Release / knowledge:** 2026-02 release; knowledge cutoff late 2025.
- **IDs:** `anthropic/claude-sonnet-4.6` (no Free ID on Zen)
- **Context window:** 200,000 tokens total (200K in / 32K out; verified via Anthropic documentation).
- **Modalities:** Text and image in; text and tool calls out.
- **Pricing (as of 2026-09-19):** $3.00 / 1M in, $15.00 / 1M out; cached prompt tokens at $0.30 / 1M.
- **Architecture:** Proprietary transformer foundation model with adaptive thinking.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.4%** (Public benchmark)
- Tau3-Banking / Tau2-Bench: **46.5%** (Tau3-Banking)
- GDPval-AA: **1650**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%**

Reasoning / knowledge:

- GPQA Diamond: **88.5%**
- HLE: **42.0%**
- LCR / MLCR: **81.5%**
- CritPt: **71.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58.0 / #10**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 5.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **70.2%**
- LiveCodeBench: **85.5%**
- SciCode / AA-SciCode: **55.5%**
- Vibe Code Bench: **61.0%**
- DeepSWE / Coding Index / other: **71.0%**

Long context:

- MRCR 95.5% at 200K; solid needle recall across the 200K window.

### Normalized scores (1–100)

- **Tool use: 87/100.** 82.4% Terminal-Bench 2.1 demonstrates fluent tool invocation and shell mastery.
- **Reasoning: 89/100.** 88.5% GPQA Diamond supports sharp multi-step problem solving.
- **Context window: 70/100.** Standard 70/100 for 200K context window tier.
- **Multimodal: 70/100.** Clean image and diagram comprehension; text-only output.
- **Coding: 87/100.** 70.2% SWE-bench Verified and 85.5% LiveCodeBench deliver steady code generation.
- **Cost efficiency: 60/100.** $3/$15 pricing offers reasonable value for production workflows.
- **Overall Score: 81/100.** Quality mean 80.6 rounds to 81; dependable, agile coding workhorse within 200K context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
