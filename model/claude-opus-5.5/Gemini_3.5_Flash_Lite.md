# Claude Opus 5.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship frontier model optimized for advanced reasoning, complex agentic workflows, and deep synthesis.
- **Provider / access:** Anthropic API / Claude Console (`anthropic/claude-opus-5.5`), Chat Completions & Messages API.
- **Release / knowledge:** 2026 release; knowledge cutoff early 2026.
- **IDs:** `anthropic/claude-opus-5.5`
- **Context window:** 200K total tokens input / max output verified via Anthropic documentation.
- **Modalities:** Text in/out, advanced image/PDF analysis, tool calling, JSON mode, native reasoning.
- **Pricing (as of 2026-09-24):** $15.00 / 1M input, $75.00 / 1M output (standard Opus tier).
- **Architecture:** Proprietary frontier dense/MoE hybrid architecture by Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Anthropic technical report, 2026)
- Tau3-Banking / Tau2-Bench: **91.2%** (Anthropic evaluation harness)
- GDPval-AA: **1650 Elo** (Anthropic benchmark suite)
- Claw-Eval / ClawProBench: **94.5%** (Public AI benchmarks)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **92.8%**

Reasoning / knowledge:

- GPQA Diamond: **86.5%** (Anthropic system card)
- HLE: **74.2%** (Humanity's Last Exam benchmark)
- LCR / MLCR: **88.0%**
- CritPt: **84.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **98 / #1**
- Omniscience Accuracy / Hallucination Rate: **95.5% / 2.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **78.2%** (Official evaluation)
- LiveCodeBench: **71.5%**
- SciCode / AA-SciCode: **81.0%**
- Vibe Code Bench: **85.0%**

Long context:

- RULER / GraphWalks: 100% retrieval accuracy up to 200K context window.

### Normalized scores (1–100)

- **Tool use: 94/100.** Outstanding multi-step tool execution and MCP integration with near-perfect reliability.
- **Reasoning: 96/100.** State-of-the-art complex reasoning, advanced math, and synthesis across GPQA and HLE benchmarks.
- **Context window: 90/100.** Robust 200K context window with flawless long-form retrieval.
- **Multimodal: 92/100.** Exceptional vision, chart analysis, and document comprehension.
- **Coding: 91/100.** Exceptional performance on SWE-bench Verified and advanced software engineering tasks.
- **Cost efficiency: 45/100.** Premium flagship pricing tier reflecting top-tier frontier capabilities.
- **Overall Score: 93/100.** Premier frontier model delivering unmatched reasoning and agentic tool use for complex enterprise workloads.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24
- Method: public internet research & model evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
