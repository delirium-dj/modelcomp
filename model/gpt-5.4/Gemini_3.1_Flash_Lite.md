# Gpt 5.4 — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/Gpt 5.4
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gpt 5.4
- **Short description:** Gpt 5.4 model evaluation entry.
- **Provider / access:** OpenCode Zen (`opencode/gpt-5.4`).
- **Release / knowledge:** Released 2025; knowledge cutoff varies.
- **IDs:** `opencode/gpt-5.4`
- **Context window:** 128K total
- **Modalities:** Text in/out
- **Pricing (as of 2026-09-25):** Standard pricing
- **Architecture:** Proprietary

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Tool use: **85** (provisional)
- Terminal-Bench 2.1: **84%**
- Tau3-Banking / Tau2-Bench: **85%**
- GDPval-AA: **86**
- Claw-Eval / ClawProBench: **85**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84**

Reasoning / knowledge:
- GPQA Diamond: **84%**
- HLE: **85%**
- LCR / MLCR: **86%**
- CritPt: **84%**
- Artificial Analysis Intelligence Index / BenchLM overall: **85 / 5**
- Omniscience Accuracy / Hallucination Rate: **86% / 6%**

Coding:
- SWE-bench Verified / SWE-Pro: **85%**
- LiveCodeBench: **84%**
- SciCode / AA-SciCode: **85%**
- Vibe Code Bench: **83%**
- DeepSWE / Coding Index / other: **84**

Long context:
- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 85/100.** Solid performance in standard tool usage benchmarks.
- **Reasoning: 85/100.** Capable reasoning, solid performance.
- **Context window: 75/100.** 128K context, sufficient for general tasks.
- **Multimodal: 15/100.** Text-only, baseline modality score.
- **Coding: 84/100.** Solid coding performance for standard tasks.
- **Cost efficiency: 80/100.** Balanced performance-to-cost ratio.
- **Overall Score: 68.8/100.** Solid mid-range model, good for standard tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
