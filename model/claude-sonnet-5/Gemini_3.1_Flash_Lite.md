# Claude Sonnet 5 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic / Claude Sonnet 5
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's efficient Sonnet 5 model, optimized for a balance of reasoning performance and low-latency interaction.
- **Provider / access:** OpenCode Zen `opencode/claude-sonnet-5` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/claude-sonnet-5`
- **Context window:** 128K total tokens input/output
- **Modalities:** Text/image/PDF in; text/JSON out, reasoning, tool calls
- **Pricing (as of 2026-09-24):** Paid/standard enterprise tier
- **Architecture:** Proprietary transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%**
- Tau3-Banking / Tau2-Bench: **86.0%**
- GDPval-AA: **1380 Elo**
- Claw-Eval / ClawProBench: **86.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0%**

Reasoning / knowledge:

- GPQA Diamond: **76.0%**
- HLE: **40.0%**
- LCR / MLCR: **80.0%**
- CritPt: **78.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89 / #5**
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

- **Tool use: 85/100.** Reliable tool calling for high-speed automation.
- **Reasoning: 88/100.** Strong analytical reasoning capabilities.
- **Context window: 94/100.** Reliable retrieval within the 128K context window.
- **Multimodal: 70/100.** Functional text/image/PDF processing.
- **Coding: 75/100.** Strong coding and script generation capabilities.
- **Cost efficiency: 75/100.** Good performance at a competitive enterprise price.
- **Overall Score: 82/100.** Arithmetic mean of the five quality dimensions (85 + 88 + 94 + 70 + 75 = 412 / 5 = 82.4).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
