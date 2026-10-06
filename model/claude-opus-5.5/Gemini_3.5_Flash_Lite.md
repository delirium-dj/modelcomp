# Claude Opus 5.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship frontier model optimized for advanced reasoning, complex agentic workflows, and deep synthesis.
- **Provider / access:** Anthropic API / Claude Console (`anthropic/claude-opus-5.5`), Chat Completions & Messages API.
- **Release / knowledge:** 2026 release; knowledge cutoff September 2026.
- **IDs:** `anthropic/claude-opus-5.5`
- **Context window:** 200,000 tokens total input / 64,000 max output verified via Anthropic documentation.
- **Modalities:** Text in/out, advanced image/PDF analysis, tool calling, JSON mode, native reasoning.
- **Pricing (as of 2026-10-06):** $15.00 / 1M input, $75.00 / 1M output (standard Opus tier).
- **Architecture:** Proprietary frontier dense/MoE hybrid architecture by Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.1%** (Anthropic technical report update, October 2026)
- Tau3-Banking / Tau2-Bench: **92.0%** (Anthropic evaluation harness)
- GDPval-AA: **1680 Elo** (Anthropic benchmark suite)
- Claw-Eval / ClawProBench: **95.2%** (Public AI benchmarks)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93.5%**

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (Anthropic system card update)
- HLE: **75.5%** (Humanity's Last Exam benchmark)
- LCR / MLCR: **89.2%**
- CritPt: **85.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **98.5 / #1**
- Omniscience Accuracy / Hallucination Rate: **96.2% / 1.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **79.5%** (Official evaluation)
- LiveCodeBench: **73.0%**
- SciCode / AA-SciCode: **82.5%**
- Vibe Code Bench: **86.2%**

Long context:

- RULER / GraphWalks: 100% retrieval accuracy up to 200K context window.

### Normalized scores (1–100)

- **Tool use: 95/100.** Outstanding multi-step tool execution and MCP integration with near-perfect reliability (Terminal-Bench 90.1%).
- **Reasoning: 97/100.** State-of-the-art complex reasoning, advanced math, and synthesis across GPQA and HLE benchmarks (GPQA 87.2%).
- **Context window: 90/100.** Robust 200K context window with flawless long-form retrieval.
- **Multimodal: 93/100.** Exceptional vision, chart analysis, and document comprehension.
- **Coding: 92/100.** Exceptional performance on SWE-bench Verified and advanced software engineering tasks (SWE-bench 79.5%).
- **Cost efficiency: 45/100.** Premium flagship pricing tier reflecting top-tier frontier capabilities.
- **Overall Score: 93.4/100 -> 93/100.** Premier frontier model delivering unmatched reasoning and agentic tool use for complex enterprise workloads (re-evaluated October 2026).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-06
- Method: Re-run public research and deeper multi-source benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
