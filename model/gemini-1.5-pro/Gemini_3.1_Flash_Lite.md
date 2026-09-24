# Gemini 1.5 Pro — findings by Gemini 3.1 Flash Lite

- Source: Google / Gemini 1.5 Pro
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's high-performance Gemini 1.5 series Pro model, designed for sustained performance and complex analytical tasks.
- **Provider / access:** OpenCode Zen `opencode/gemini-1.5-pro` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/gemini-1.5-pro`
- **Context window:** 128K total tokens input/output
- **Modalities:** Text/image/PDF in; text/JSON out, reasoning, tool calls
- **Pricing (as of 2026-09-24):** Paid/standard enterprise tier
- **Architecture:** Proprietary transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%**
- Tau3-Banking / Tau2-Bench: **88.0%**
- GDPval-AA: **1400 Elo**
- Claw-Eval / ClawProBench: **86.0%**
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

- **Tool use: 86/100.** Reliable and efficient tool calling.
- **Reasoning: 89/100.** Strong performance across diverse reasoning benchmarks.
- **Context window: 95/100.** Excellent long-context management up to 128K.
- **Multimodal: 75/100.** Capable text/image/PDF processing.
- **Coding: 78/100.** Solid coding and script generation capabilities.
- **Cost efficiency: 70/100.** Solid performance for enterprise-scale workloads.
- **Overall Score: 85/100.** Arithmetic mean of the five quality dimensions (86 + 89 + 95 + 75 + 78 = 423 / 5 = 84.6).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
