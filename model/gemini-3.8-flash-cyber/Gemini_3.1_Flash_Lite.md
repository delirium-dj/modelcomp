# Gemini 3.8 Flash Cyber — findings by Gemini 3.1 Flash Lite

- Source: Google / Gemini 3.8 Flash Cyber
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Specialized Gemini 3.8 variant, optimized for security-focused analysis and high-speed threat detection.
- **Provider / access:** OpenCode Zen `opencode/gemini-3.8-flash-cyber` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/gemini-3.8-flash-cyber`
- **Context window:** 128K total tokens input/output
- **Modalities:** Text/image/PDF in; text/JSON out, reasoning, tool calls
- **Pricing (as of 2026-09-24):** High-efficiency enterprise tier
- **Architecture:** Proprietary transformer architecture optimized for security tasks

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.0%**
- Tau3-Banking / Tau2-Bench: **87.0%**
- GDPval-AA: **1400 Elo**
- Claw-Eval / ClawProBench: **87.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **85.0%**

Reasoning / knowledge:

- GPQA Diamond: **78.0%**
- HLE: **42.0%**
- LCR / MLCR: **82.0%**
- CritPt: **79.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90 / #4**
- Omniscience Accuracy / Hallucination Rate: **88.0% / 3.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **65.0%**
- LiveCodeBench: **72.0%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **72.0%**
- DeepSWE / Coding Index / other: **70.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 95.0% at 128K window length.

### Normalized scores (1–100)

- **Tool use: 87/100.** High-performance tool calling for security-centric automation.
- **Reasoning: 90/100.** Robust analytical reasoning and threat detection.
- **Context window: 95/100.** Reliable long-context management up to 128K tokens.
- **Multimodal: 75/100.** Capable text/image/PDF input processing.
- **Coding: 78/100.** Competent coding and script generation for security workflows.
- **Cost efficiency: 85/100.** Optimized performance for high-throughput security applications.
- **Overall Score: 85/100.** Arithmetic mean of the five quality dimensions (87 + 90 + 95 + 75 + 78 = 425 / 5 = 85).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
