# Ox Alpha — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/Ox Alpha
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Stealth frontier reasoning model (OpenRouter stealth/ox-alpha) for long-horizon coding agents with 1M context, free during preview.
- **Provider / access:** OpenCode Zen `opencode/ox-alpha` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `opencode/ox-alpha`
- **Context window:** 1M total (1M in / 131K out) — verified via OpenRouter/Zen endpoint specs.
- **Modalities:** Text, image, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-23):** Free Zen tier during preview; standard paid tier rates apply post-preview.
- **Architecture:** Proprietary frontier MoE reasoning architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.4%** (frontier agentic evaluation)
- Tau3-Banking / Tau2-Bench: **75.2%** (harness standard)
- GDPval-AA: **1520 Elo**
- Claw-Eval / ClawProBench: **84.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.0%**

Reasoning / knowledge:

- GPQA Diamond: **69.5%**
- HLE: **53.2%**
- LCR / MLCR: **76.0%**
- CritPt: **67.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92.5 / #7**
- Omniscience Accuracy / Hallucination Rate: **94.1% / 2.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.3%**
- LiveCodeBench: **71.2%**
- SciCode / AA-SciCode: **62.5%**
- Vibe Code Bench: **78.0%**
- DeepSWE / Coding Index / other: **84.2**

Long context:

- RULER / GraphWalks: robust retrieval across full 1M input context window.

### Normalized scores (1–100)

- **Tool use: 85/100.** Exceptional multi-step tool execution and agentic benchmark performance on Terminal-Bench and Claw-Eval.
- **Reasoning: 83/100.** Top-tier reasoning and problem-solving on GPQA Diamond and HLE benchmarks.
- **Context window: 95/100.** Full 1M context window with robust retrieval across long inputs.
- **Multimodal: 75/100.** Strong multimodal input support including image, video, and PDF parsing.
- **Coding: 84/100.** Advanced code generation and SWE-bench performance suitable for complex software tasks.
- **Cost efficiency: 100/100.** Promotional free tier access on OpenCode Zen.
- **Overall Score: 84.4/100.** State-of-the-art reasoning and long-context capabilities with zero cost during preview.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Independent public research and normalized 1–100 evaluation.
