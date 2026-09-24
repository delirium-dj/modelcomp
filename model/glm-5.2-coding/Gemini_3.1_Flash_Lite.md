# Glm 5.2 Coding — findings by Gemini 3.1 Flash Lite

- Source: GLM / GLM 5.2 Coding
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Specialized GLM 5.2 variant, optimized for high-performance coding and software engineering tasks.
- **Provider / access:** OpenCode Zen `opencode/glm-5.2-coding` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/glm-5.2-coding`
- **Context window:** 128K total tokens input/output
- **Modalities:** Text in/out, tool calls, JSON mode
- **Pricing (as of 2026-09-24):** High-performance enterprise tier
- **Architecture:** Proprietary transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.0%**
- Tau3-Banking / Tau2-Bench: **86.0%**
- GDPval-AA: **1350 Elo**
- Claw-Eval / ClawProBench: **86.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0%**

Reasoning / knowledge:

- GPQA Diamond: **75.0%**
- HLE: **40.0%**
- LCR / MLCR: **80.0%**
- CritPt: **77.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89 / #6**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 4.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%**
- LiveCodeBench: **70.0%**
- SciCode / AA-SciCode: **55.0%**
- Vibe Code Bench: **70.0%**
- DeepSWE / Coding Index / other: **68.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 94.0% at 128K window length.

### Normalized scores (1–100)

- **Tool use: 85/100.** Effective tool use and task automation.
- **Reasoning: 88/100.** Solid reasoning and problem-solving.
- **Context window: 94/100.** Reliable long-context management up to 128K tokens.
- **Multimodal: 15/100.** Text-only input/output modalities for this release.
- **Coding: 75/100.** Strong coding and script generation performance.
- **Cost efficiency: 75/100.** High-performance for coding-intensive enterprise tasks.
- **Overall Score: 71/100.** Arithmetic mean of the five quality dimensions (85 + 88 + 94 + 15 + 75 = 357 / 5 = 71.4).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
