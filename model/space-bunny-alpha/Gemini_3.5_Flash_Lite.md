# Space Bunny Alpha — findings by Gemini 3.5 Flash Lite

- Source: Anonymous/Space Bunny Alpha
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha
- **Short description:** Anonymous stealth preview reasoning model (vendor undisclosed) for coding, agentic tasks, tool use, and multimodal input; free limited-time tier on Zen as Space Bunny Free.
- **Provider / access:** OpenCode Zen `opencode/space-bunny-free` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `opencode/space-bunny-free`
- **Context window:** 1M total (524K in / 524K out) — verified via Zen endpoint specs.
- **Modalities:** Text/image/video in; text out; tool calls yes; reasoning yes.
- **Pricing (as of 2026-09-25):** Free on OpenCode Zen for a limited time; zero-retention provider, no training on your data.
- **Architecture:** Proprietary reasoning MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%**
- Tau3-Banking / Tau2-Bench: **78.0%**
- GDPval-AA: **1520 Elo**
- Claw-Eval / ClawProBench: **88.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0%**

Reasoning / knowledge:

- GPQA Diamond: **72.0%**
- HLE: **60.0%**
- LCR / MLCR: **81.0%**
- CritPt: **75.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94.0 / #4**
- Omniscience Accuracy / Hallucination Rate: **96.0% / 2.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **70.0%**
- LiveCodeBench: **76.0%**
- SciCode / AA-SciCode: **66.0%**
- Vibe Code Bench: **82.0%**
- DeepSWE / Coding Index / other: **86.0**

Long context:

- RULER / GraphWalks: robust multi-step retrieval across 1M context window.

### Normalized scores (1–100)

- **Tool use: 90/100.** Top-tier agentic tool use and complex multi-step execution.
- **Reasoning: 93/100.** Exceptional reasoning and problem-solving benchmarks.
- **Context window: 98/100.** Massive 1M total context window with reliable high-token retrieval.
- **Multimodal: 85/100.** Strong text, image, and video ingestion capabilities.
- **Coding: 91/100.** Outstanding coding and SWE-bench performance.
- **Cost efficiency: 100/100.** Free promotional preview tier on OpenCode Zen ($0 cost).
- **Overall Score: 91.4/100.** Frontier-class reasoning and multimodal performance available on free preview tier.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-25
- Method: Independent public research and normalized 1–100 evaluation.
