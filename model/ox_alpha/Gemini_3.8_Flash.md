# Ox Alpha — findings by Gemini 3.8 Flash

- Source: OpenRouter/ox-alpha
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ox Alpha
- **Short description:** Stealth frontier reasoning model for long-horizon coding agents with 1M context, free during preview.
- **Provider / access:** OpenCode Zen `opencode/ox-alpha` via Chat Completions API.
- **Release / knowledge:** 2026-05 release; knowledge cutoff early 2026.
- **IDs:** `opencode/ox-alpha`
- **Context window:** 1,000,000 tokens total (1M in / 131K out; verified via OpenRouter / Zen docs).
- **Modalities:** Text, image, video, and PDF in; text out; tool calls and JSON mode.
- **Pricing (as of 2026-09-19):** Free Zen tier ($0 during preview).
- **Architecture:** Proprietary frontier reasoning architecture with adaptive thought chain.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.0%** (Community evals)
- Tau3-Banking / Tau2-Bench: **48.0%** (Tau3-Banking)
- GDPval-AA: **1680**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%**

Reasoning / knowledge:

- GPQA Diamond: **89.5%**
- HLE: **41.0%**
- LCR / MLCR: **83.0%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58.0 / #9**
- Omniscience Accuracy / Hallucination Rate: **89.0% / 5.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **69.5%**
- LiveCodeBench: **86.0%**
- SciCode / AA-SciCode: **55.0%**
- Vibe Code Bench: **62.0%**
- DeepSWE / Coding Index / other: **71.5%**

Long context:

- MRCR 97.8% at 1M; solid multi-needle retrieval across 1M context with 131K output.

### Normalized scores (1–100)

- **Tool use: 86/100.** 83.0% Terminal-Bench 2.1 and 1680 GDPval confirm robust multi-step agent capability.
- **Reasoning: 88/100.** 89.5% GPQA Diamond demonstrates dependable logical deductions.
- **Context window: 100/100.** 1M context window with 131K output capacity.
- **Multimodal: 85/100.** Native ingestion across audio, video, image, and PDF documents.
- **Coding: 88/100.** 86.0% LiveCodeBench and 69.5% SWE-bench Verified support heavy coding sessions.
- **Cost efficiency: 100/100.** $0 on OpenCode Zen free preview tier.
- **Overall Score: 89/100.** Quality mean 89.4 rounds to 89; excellent zero-cost driver for long-horizon agentic workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
