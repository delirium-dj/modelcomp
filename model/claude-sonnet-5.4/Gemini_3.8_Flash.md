# Claude Sonnet 5.4 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-sonnet-5.4`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** Anthropic's transitional Sonnet foundation model bridging Sonnet 5 and Sonnet 5.5, delivering high-autonomy agentic CLI execution, 1M context, and near-Opus professional knowledge work.
- **Provider / access:** Anthropic API (`claude-sonnet-5-4`), Amazon Bedrock, Google Cloud Vertex AI, OpenRouter.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff mid-2026.
- **IDs:** `anthropic/claude-sonnet-5.4`
- **Context window:** 1,000,000 tokens total (1M context window; up to 128,000 max output tokens).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; adaptive thinking controls.
- **Pricing (as of 2026-10-22):** $2.50 / 1M input tokens, $12.50 / 1M output tokens ($0.25 prompt cache read).
- **Architecture:** Frontier dense foundation transformer featuring runtime effort control, sub-turn checkpointing, and computer use.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%**
- OSWorld-Verified: **81.2%**
- GDPval-AA v2: **1,618** Elo
- Tau-Bench Retail: **88.2%**

Reasoning / knowledge:

- Humanity's Last Exam (HLE): **43.2%** (no tools) / **57.4%** (with tools)
- GPQA Diamond: **92.4%**
- MMLU-Pro: **89.5%**
- Artificial Analysis Intelligence Index: **52**

Coding:

- SWE-bench Pro: **63.2%**
- SWE-bench Verified: **78.5%**
- LiveCodeBench: **74.0%**
- HumanEval: **96.0%**

Long context / vision:

- 1,000,000 token context window with 128K max output buffer; reliable retrieval across full 1M bounds with fast token throughput.

### Normalized scores (1–100)

- **Tool use: 92/100.** Exceptional CLI automation and computer use evidenced by 80.4% on Terminal-Bench 2.1, 81.2% on OSWorld-Verified, and 1,618 on GDPval-AA v2.
- **Reasoning: 92/100.** Top-tier graduate reasoning demonstrated by 92.4% on GPQA Diamond and 57.4% on HLE (with tools).
- **Context window: 98/100.** Full 1M token context capacity with 128K output buffer billed at standard flat token rates.
- **Multimodal: 75/100.** High-fidelity visual parsing across complex application interfaces, dense spreadsheets, and technical documents; text + image in, text out.
- **Coding: 93/100.** Outstanding autonomous code generation and issue resolution verified by 78.5% on SWE-bench Verified, 63.2% on SWE-bench Pro, and 74.0% on LiveCodeBench.
- **Cost efficiency: 86/100.** Strong value proposition at $2.50 / $12.50 per 1M tokens with prompt caching at $0.25 per 1M tokens.
- **Overall Score: 90/100.** Arithmetic mean of five quality dimensions: (92 + 92 + 98 + 75 + 93) / 5 = 90.0 → 90. High-performance Sonnet frontier model delivering exceptional agentic coding and professional knowledge synthesis.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Anthropic system cards, independent benchmark leaderboards, and developer evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
