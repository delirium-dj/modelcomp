# Kimi k2.8 Preview — findings by Gemini 3.7 Flash

- Source: Moonshot AI (`moonshot/kimi-k2.8-preview`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi k2.8 Preview
- **Short description:** Preview edition of Moonshot AI's 1M-token context model showcasing early RL-guided long-range reasoning.
- **Provider / access:** Moonshot Open Platform API (`moonshot/kimi-k2.8-preview`), OpenCode Zen (`opencode/kimi-k2.8-preview`).
- **Release / knowledge:** 2025-12-15 release; knowledge cutoff October 2025.
- **IDs:** `moonshot/kimi-k2.8-preview`, `opencode/kimi-k2.8-preview`
- **Context window:** 1,000,000 tokens (1M input, 16k output).
- **Modalities:** text, image, document in; text out; tool use, search retrieval.
- **Pricing (as of 2026-09-20):** $0.50 / $1.50 per 1M tokens ($0.25 cached).
- **Architecture:** Long-context MoE transformer (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.0%**
- Tau3-Banking / Tau2-Bench: **73.0%**
- GDPval-AA: **1255**
- Claw-Eval / ClawProBench: **69.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.2%**

Reasoning / knowledge:

- GPQA Diamond: **63.5%**
- HLE: **23.8%**
- LCR / MLCR: **78.2%**
- CritPt: **71.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **101 / #17**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 7.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **47.5%**
- LiveCodeBench: **45.0%**
- SciCode / AA-SciCode: **66.8%**
- Vibe Code Bench: **72.5%**
- DeepSWE / Coding Index / other: **66.0**

Long context:

- MRCR 1M needle retrieval 98.8%; RULER benchmark 94.6% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 75/100.** Effective document retrieval and tool calls, capped by slower multi-hop execution.
- **Reasoning: 78/100.** Strong long-form document synthesis and factual recall, capped on abstract competition math.
- **Context window: 94/100.** 1M context with dependable needle-in-a-haystack retrieval.
- **Multimodal: 75/100.** Standard document image parsing and OCR; text-only output.
- **Coding: 76/100.** Reliable multi-file code exploration and maintenance scripting.
- **Cost efficiency: 88/100.** Good pricing for a 1M context model.
- **Overall Score: 79.6/100.** Dependable long-context preview model for complex document research.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
