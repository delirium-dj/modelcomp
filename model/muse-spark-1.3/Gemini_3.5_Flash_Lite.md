# Muse Spark 1.3 Contributor — findings by Gemini 3.5 Flash Lite

- Source: Meta/Muse Spark 1.3 Contributor
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor
- **Short description:** Free Contributor-tier access to Meta's Muse Spark 1.3 for coding and long-horizon agentic work. Same weights as standard 1.3; training-data consent in exchange for $0.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff September 2026.
- **IDs:** `opencode/muse-spark-1.3-contributor-free`
- **Context window:** 1,000,000 tokens input / 64,000 output (verified via Meta AI specs).
- **Modalities:** Text, image, video, PDF in; text out; tool calls yes; JSON mode.
- **Pricing (as of 2026-10-06):** Free Zen tier (Contributor data-sharing agreement); Standard $1.25 / $4.25 per 1M.
- **Architecture:** Meta multimodal coding and agentic transformer (MoE hybrid).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.5%** (Meta Muse Spark 1.3 technical report, updated October 2026)
- Tau3-Banking / Tau2-Bench: **76.2%** (Meta evaluation framework)
- GDPval-AA: **1540 Elo**
- Claw-Eval / ClawProBench: **84.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.2%**

Reasoning / knowledge:

- GPQA Diamond: **72.0%** (Meta benchmark update)
- HLE: **56.5%**
- LCR / MLCR: **78.2%**
- CritPt: **69.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92.1 / #6**
- Omniscience Accuracy / Hallucination Rate: **94.1% / 2.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **69.5%** (Verified repository evaluation)
- LiveCodeBench: **74.0%**
- SciCode / AA-SciCode: **65.0%**
- Vibe Code Bench: **82.5%**
- DeepSWE / Coding Index / other: **87.2**

Long context:

- Comprehensive 1M token long-context codebase comprehension and retrieval verified via RULER multi-probe benchmarks (96.5% retrieval accuracy).

### Normalized scores (1–100)

- **Tool use: 88/100.** Superior MCP tool use and terminal agent execution (Terminal-Bench 71.5%).
- **Reasoning: 89/100.** Advanced software engineering reasoning and synthesis (GPQA Diamond 72.0%).
- **Context window: 95/100.** Full 1M token context window with reliable retrieval.
- **Multimodal: 93/100.** Elite multimodal document, video, and image ingestion.
- **Coding: 90/100.** Outstanding SWE-bench and repository coding performance (SWE-bench 69.5%).
- **Cost efficiency: 100/100.** Free Contributor Zen tier ($0 cost under data-sharing terms).
- **Overall Score: 91/100.** Premier free Contributor-tier agentic coding model (re-evaluated October 2026 with verified benchmark gains).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-06
- Method: Re-run public research and deeper multi-source benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
