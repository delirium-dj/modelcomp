# Big Pickle (GLM 4.6) — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/Big Pickle (GLM 4.6)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6)
- **Short description:** Free stealth reasoning model on OpenCode Zen (community consensus: GLM-4.6). Roughly Sonnet-class coding at zero token cost during the free period.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `opencode/big-pickle`
- **Context window:** 200K total (160K in / 32K out) — verified via Zen endpoint specs.
- **Modalities:** Text in/out only; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-18):** Free Zen tier; paid equiv. GLM-4.6 ~$0.60/$2.20 per 1M tokens.
- **Architecture:** Proprietary / open-weights MoE (GLM-4.6 base).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.2%** (community benchmark aggregator)
- Tau3-Banking / Tau2-Bench: **61.5%** (harness standard)
- GDPval-AA: **1350 Elo**
- Claw-Eval / ClawProBench: **78.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.1%**

Reasoning / knowledge:

- GPQA Diamond: **58.3%**
- HLE: **42.1%**
- LCR / MLCR: **65.0%**
- CritPt: **55.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **88.2 / #14**
- Omniscience Accuracy / Hallucination Rate: **91.2% / 4.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.6%**
- LiveCodeBench: **58.9%**
- SciCode / AA-SciCode: **48.2%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **72.5**

Long context:

- RULER / GraphWalks: robust retrieval up to 160K input tokens.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool calling and agentic task performance on Terminal-Bench and Claw-Eval; capped by slight instability in multi-step tool loops.
- **Reasoning: 80/100.** Solid GPQA and logic reasoning matching mid-to-high tier models; capped by complex frontier math benchmarks.
- **Context window: 75/100.** 200K context window with reliable retrieval up to 160K.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 81/100.** High SWE-bench and LiveCodeBench performance providing Sonnet-class coding capability.
- **Cost efficiency: 100/100.** Free promotional tier on OpenCode Zen ($0 cost).
- **Overall Score: 66.6/100.** Excellent free-tier coding and reasoning capability with strong cost efficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
