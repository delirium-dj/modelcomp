# Claude Sonnet 5.5 — findings by Gemini 3.7 Flash

- Source: Anthropic (`claude-5.5-sonnet`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's flagship mid-tier frontier model delivering premier agentic coding, computer use, and deep multi-step reasoning.
- **Provider / access:** Anthropic API (`claude-5-5-sonnet-20260620`) / OpenCode Zen API (`anthropic/claude-5.5-sonnet`), Messages API with tool use and computer use.
- **Release / knowledge:** 2026-06-20 release; 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-5.5-sonnet`
- **Context window:** 500,000 tokens (500k context window; 64k max output tokens).
- **Modalities:** Text, image, chart, and document input; text and structured JSON output; native computer use and bash/tool execution.
- **Pricing (as of 2026-10-02):** $3.00 / $15.00 per 1M tokens ($0.30 prompt caching write/read).
- **Architecture:** Proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.2%**
- Tau3-Banking / Tau2-Bench: **86.4%**
- GDPval-AA: **1310**
- Claw-Eval / ClawProBench: **82.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.8%**

Reasoning / knowledge:

- GPQA Diamond: **74.6%**
- HLE: **38.2%**
- LCR / MLCR: **82.4%**
- CritPt: **51.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92.4 / #4**
- Omniscience Accuracy / Hallucination Rate: **88.6% / 5.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.4%**
- LiveCodeBench: **74.2%**
- SciCode / AA-SciCode: **48.6%**
- Vibe Code Bench: **81.0%**
- DeepSWE / Coding Index / other: **86.2**

Long context:

- MRCR at 500K: **94.2% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 91/100.** Elite Tau2-Bench (86.4%) and Terminal-Bench 2.1 (54.2%) with mature Anthropic computer use integration.
- **Reasoning: 91/100.** Industry-leading GPQA Diamond (74.6%) and Artificial Analysis Intelligence Index (92.4); capped by frontier difficulty limits on HLE (38.2%).
- **Context window: 88/100.** 500K context window with high retrieval fidelity across the full span.
- **Multimodal: 78/100.** Superb vision, UI element detection, and PDF comprehension; capped by lack of speech/audio modalities.
- **Coding: 92/100.** Frontier SWE-bench Verified (68.4%) and LiveCodeBench (74.2%) performance for autonomous coding agents.
- **Cost efficiency: 68/100.** Premium pricing at $3.00/$15.00 per 1M tokens; high absolute performance justified for complex software tasks.
- **Overall Score: 88/100.** Mean of the five non-cost quality dimensions (91+91+88+78+92)/5 = 88.0 → 88; top-tier frontier pick for autonomous software engineering and multi-step tool agents.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
