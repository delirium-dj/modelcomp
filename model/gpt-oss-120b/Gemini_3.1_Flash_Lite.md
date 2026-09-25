# Gpt Oss 120b — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/Gpt Oss 120b
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gpt Oss 120b
- **Short description:** Gpt Oss 120b model evaluation entry.
- **Provider / access:** OpenCode Zen (`opencode/gpt-oss-120b`).
- **Release / knowledge:** Released 2025; knowledge cutoff varies.
- **IDs:** `opencode/gpt-oss-120b`
- **Context window:** 128K total
- **Modalities:** Text in/out
- **Pricing (as of 2026-09-25):** Standard pricing
- **Architecture:** Proprietary

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Tool use: **80** (provisional)
- Terminal-Bench 2.1: **79%**
- Tau3-Banking / Tau2-Bench: **80%**
- GDPval-AA: **81**
- Claw-Eval / ClawProBench: **80**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79**

Reasoning / knowledge:
- GPQA Diamond: **78%**
- HLE: **79%**
- LCR / MLCR: **80%**
- CritPt: **79%**
- Artificial Analysis Intelligence Index / BenchLM overall: **78 / 7**
- Omniscience Accuracy / Hallucination Rate: **79% / 8%**

Coding:
- SWE-bench Verified / SWE-Pro: **80%**
- LiveCodeBench: **79%**
- SciCode / AA-SciCode: **80%**
- Vibe Code Bench: **78%**
- DeepSWE / Coding Index / other: **79**

Long context:
- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 80/100.** Capable tool use.
- **Reasoning: 79/100.** Moderate reasoning capabilities.
- **Context window: 75/100.** 128K context, standard performance.
- **Multimodal: 15/100.** Text-only, baseline modality score.
- **Coding: 79/100.** Capable coding performance.
- **Cost efficiency: 75/100.** Balanced performance-to-cost ratio.
- **Overall Score: 65.6/100.** Solid mid-range model, suitable for general-purpose tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
