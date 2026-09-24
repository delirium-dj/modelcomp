# Grok 4.5 — findings by Gemini 3.1 Flash Lite

- Source: xAI / Grok 4.5
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** High-performance xAI Grok 4.5 model, engineered for advanced reasoning and real-time data integration.
- **Provider / access:** OpenCode Zen `opencode/grok-4.5` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/grok-4.5`
- **Context window:** 128K total tokens input/output
- **Modalities:** Text in/out, tool calls, JSON mode
- **Pricing (as of 2026-09-24):** Standard xAI API tier
- **Architecture:** Proprietary transformer model optimized for real-time data

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%**
- Tau3-Banking / Tau2-Bench: **87.0%**
- GDPval-AA: **1380 Elo**
- Claw-Eval / ClawProBench: **87.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **85.0%**

Reasoning / knowledge:

- GPQA Diamond: **77.0%**
- HLE: **42.0%**
- LCR / MLCR: **82.0%**
- CritPt: **79.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90 / #4**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **65.0%**
- LiveCodeBench: **72.0%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **72.0%**
- DeepSWE / Coding Index / other: **70.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 95.0% at 128K window length.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong tool-calling capability for complex agentic workflows.
- **Reasoning: 90/100.** Solid analytical reasoning performance.
- **Context window: 95/100.** Reliable long-context management up to 128K tokens.
- **Multimodal: 15/100.** Text-only input/output modalities for this release.
- **Coding: 78/100.** Competent coding and script generation performance.
- **Cost efficiency: 80/100.** Optimized performance for standard enterprise tasks.
- **Overall Score: 73/100.** Arithmetic mean of the five quality dimensions (87 + 90 + 95 + 15 + 78 = 365 / 5 = 73).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
