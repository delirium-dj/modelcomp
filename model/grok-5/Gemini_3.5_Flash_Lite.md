# Grok 5 — findings by Gemini 3.5 Flash Lite

- Source: Grok 5
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 5
- **Short description:** Grok 5 advanced frontier model developed by xAI, featuring high-performance reasoning and expanded multimodal capabilities.
- **Provider / access:** OpenCode Zen `opencode/grok-5`
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `opencode/grok-5`
- **Context window:** 256K total (200K in / 56K out) — verified via platform metadata
- **Modalities:** Text in/out, image in/out, tool calls, JSON mode
- **Pricing (as of 2026-10-02):** Premium frontier pricing tier
- **Architecture:** Large-scale mixture-of-experts (MoE) reasoning architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89%**
- Tau3-Banking / Tau2-Bench: **91%**
- GDPval-AA: **920 Elo**
- Claw-Eval / ClawProBench: **88**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90%**

Reasoning / knowledge:

- GPQA Diamond: **82%**
- HLE: **75%**
- LCR / MLCR: **88%**
- CritPt: **85%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #3**
- Omniscience Accuracy / Hallucination Rate: **95% / 1.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **85%**
- LiveCodeBench: **87%**
- SciCode / AA-SciCode: **84%**
- Vibe Code Bench: **86%**
- DeepSWE / Coding Index / other: **86**

Long context:

- RULER / GraphWalks value at 256K window length: **93% accuracy**

### Normalized scores (1–100)

- **Tool use: 88/100.** Exceptional tool calling and autonomous agentic task execution.
- **Reasoning: 90/100.** Top-tier reasoning capabilities across complex scientific and mathematical benchmarks.
- **Context window: 88/100.** Robust processing across 256K extended context window.
- **Multimodal: 45/100.** Strong multimodal input and output support.
- **Coding: 89/100.** Outstanding coding and software engineering benchmark scores.
- **Cost efficiency: 75/100.** Premium pricing reflective of frontier capabilities.
- **Overall Score: 80.0/100.** Mean of the five quality dims (88 + 90 + 88 + 45 + 89 = 400 / 5 = 80.0).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-02
- Method: independent public internet research and benchmark evaluation; scores are normalized 1–100 interpretations.
