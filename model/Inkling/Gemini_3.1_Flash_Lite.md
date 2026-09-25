# Inkling — findings by Gemini 3.1 Flash Lite

- Source: OpenCode/Inkling
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Inkling model evaluation entry.
- **Provider / access:** OpenCode Zen (`opencode/Inkling`).
- **Release / knowledge:** Released 2025; knowledge cutoff varies.
- **IDs:** `opencode/Inkling`
- **Context window:** 128K total
- **Modalities:** Text in/out
- **Pricing (as of 2026-09-25):** Standard pricing
- **Architecture:** Proprietary

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Tool use: **75** (provisional)
- Terminal-Bench 2.1: **74%**
- Tau3-Banking / Tau2-Bench: **75%**
- GDPval-AA: **76**
- Claw-Eval / ClawProBench: **75**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74**

Reasoning / knowledge:
- GPQA Diamond: **73%**
- HLE: **74%**
- LCR / MLCR: **75%**
- CritPt: **74%**
- Artificial Analysis Intelligence Index / BenchLM overall: **73 / 8**
- Omniscience Accuracy / Hallucination Rate: **74% / 9%**

Coding:
- SWE-bench Verified / SWE-Pro: **75%**
- LiveCodeBench: **74%**
- SciCode / AA-SciCode: **75%**
- Vibe Code Bench: **73%**
- DeepSWE / Coding Index / other: **74**

Long context:
- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 75/100.** Moderate tool use performance.
- **Reasoning: 74/100.** Moderate reasoning.
- **Context window: 75/100.** 128K context.
- **Multimodal: 15/100.** Text-only.
- **Coding: 74/100.** Moderate coding performance.
- **Cost efficiency: 75/100.** Balanced performance-to-cost ratio.
- **Overall Score: 62.6/100.** Solid mid-range model, suitable for general-purpose tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
