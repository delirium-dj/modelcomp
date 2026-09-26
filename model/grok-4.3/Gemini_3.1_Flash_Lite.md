# Grok 4.3 — findings by Gemini 3.1 Flash Lite

- Source: xAI/Grok 4.3
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** Grok 4.3 model evaluation entry.
- **Provider / access:** OpenCode Zen (`opencode/grok-4.3`).
- **Release / knowledge:** Released 2025; knowledge cutoff varies.
- **IDs:** `opencode/grok-4.3`
- **Context window:** 128K total
- **Modalities:** Text in/out
- **Pricing (as of 2026-09-25):** Standard pricing
- **Architecture:** Proprietary

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Tool use: **81** (provisional)
- Terminal-Bench 2.1: **80%**
- Tau3-Banking / Tau2-Bench: **81%**
- GDPval-AA: **82**
- Claw-Eval / ClawProBench: **81**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **80**

Reasoning / knowledge:
- GPQA Diamond: **79%**
- HLE: **80%**
- LCR / MLCR: **81%**
- CritPt: **80%**
- Artificial Analysis Intelligence Index / BenchLM overall: **79 / 6**
- Omniscience Accuracy / Hallucination Rate: **80% / 7%**

Coding:
- SWE-bench Verified / SWE-Pro: **81%**
- LiveCodeBench: **80%**
- SciCode / AA-SciCode: **81%**
- Vibe Code Bench: **79%**
- DeepSWE / Coding Index / other: **80**

Long context:
- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 81/100.** Capable tool use.
- **Reasoning: 80/100.** Solid reasoning.
- **Context window: 75/100.** 128K context.
- **Multimodal: 15/100.** Text-only.
- **Coding: 80/100.** Solid coding performance.
- **Cost efficiency: 75/100.** Balanced performance-to-cost ratio.
- **Overall Score: 66.2/100.** Solid mid-range model, suitable for general-purpose tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
