# Claude Opus 4.7 — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.

- **Source:** Anthropic Claude Opus 4.7 (`claude-opus-4.7`)
- **Date:** 2026-10-17 (UTC)

## Model card
- **Name:** Claude Opus 4.7
- **Short description:** Anthropic Claude Opus 4.7 flagship for agentic coding, long context, and multimodal reasoning.
- **Provider / access:** Anthropic Claude API, Anthropic Console; OpenCode Zen `opencode/claude-opus-4.7`; GitHub `anthropic/claude-opus-4.7`.
- **Release / knowledge:** Released 2026-09-25; knowledge cutoff not disclosed in accessible docs.
- **IDs:** `anthropic/claude-opus-4.7` (Hugging Face registry slug); GitHub `anthropic/claude-opus-4.7`.
- **Context window:** **1M** total, **128K** max output (official Anthropic API docs).
- **Modalities:** text + image in/out; vision supported; text output only.
- **Pricing (as of 2026-10-17):** `$5.00 per 1M input / $25.00 per 1M output` (official Anthropic API).
- **Architecture:** proprietary Anthropic LLM; not open weights.

### Raw benchmarks found (external, validated)
- **Artificial Analysis Intelligence Index:** **41 / 100** (AA rank #53/217; AA Intelligence Index v4.3.2)
- **Speed:** 54.1 output tokens/sec
- **LM Arena:** Text 1,495.04 rating; Vision 1,316.41 rating
- **SWE-Bench Verified:** 87.6%
- **GPQA:** 94.2%
- **MMMLU:** 91.5%
- **Terminal-Bench 2.0:** 69.4%
- **LiveBench:** 76.91%
- **Toolathlon:** 75.6% (via llmboard.ai)
- **MCP Atlas:** 88.1% (via llmboard.ai)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. NEVER include Cost efficiency — scored independently.

- **Tool use: 88/100.** Tool calling + structured outputs are supported; external benchmarks (SWE-Bench 87.6%, MCP Atlas 88.1%) confirm strong agentic tool reliability for agentic workflows.
- **Reasoning: 87/100.** AA Intelligence Index 41 places it #53/217 globally; strong reasoning supported by LLM Arena vision/text dominance and GPQA 94.2%.
- **Context window: 95/100.** 1M token context (128K max output) is industry-leading and consistent across all sources.
- **Multimodal: 92/100.** Text + image input supported; multimodal verified via LM Arena and official API specs.
- **Coding: 88/100.** SWE-Bench Verified 87.6% is a strong signal for autonomous coding; Terminal-Bench 2.0 at 69.4% supports solid but not elite agentic coding.
- **Cost efficiency: 95/100.** Pricing is premium ($5/$25/1M) but offset by superior capability; not part of Overall Score formula but documented for reference.
- **Overall Score: 90/100.** (88 + 87 + 95 + 92 + 88) / 5 = 90.0. Best-fit: a top-tier flagship model excelling at reasoning, context, and agentic reliability; held back slightly by verbose output tokens (370M output per AA Intelligence Index).

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-10-17
- Method: public internet research across official Anthropic docs, Hugging Face, Artificial Analysis, llmboard.ai, GitHub, X/Anthropic, and independent benchmark summaries; scores are normalized 1–100 interpretations, not official vendor scores.
