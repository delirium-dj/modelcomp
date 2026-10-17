# Claude Opus 4.7 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-opus-4-7`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's Opus-class frontier model optimized for autonomous agentic coding, computer use, complex tool orchestration, and 1M-token context window processing.
- **Provider / access:** Anthropic API (`claude-opus-4-7`), Amazon Bedrock, Google Cloud Vertex AI, OpenCode Zen (`opencode/claude-opus-4.7`). Messages API with adaptive thinking.
- **Release / knowledge:** April 2026 release; January 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-4-7`, `opencode/claude-opus-4.7`
- **Context window:** 1,000,000 tokens input / 128,000 max output tokens (300K batch) — verified via Anthropic documentation.
- **Modalities:** text, image, PDF in; text out; reasoning yes (adaptive thinking); tool calls yes; computer use yes; JSON mode yes
- **Pricing (as of 2026-10-18):** $5.00 input / $25.00 output per 1M tokens ($0.50 cached input; 50% batch discount).
- **Architecture:** Proprietary frontier transformer with multi-scale visual processing (3.75MP vision resolution) and adaptive reasoning.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **77.3%** (Anthropic system card)
- OSWorld-Verified: **78.0%** (computer use)
- Tau2-Bench: **74.0%**
- Terminal-Bench 2.1: **68.5%**
- BrowseComp: **79.3%**

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (high saturation)
- HLE: **46.9%** (no tools) / **54.7%** (with tools)
- LCR / MLCR: **75.7%**
- MMLU-Pro: **89.9%**
- CritPt: **5.1%**

Coding:

- SWE-bench Verified: **87.6%**
- SWE-bench Pro: **64.3%**
- LiveCodeBench: **85.1%**
- Vibe Code Bench: **71.0%**

Long context:

- 1,000,000 tokens context window supported; strong long-context reasoning retention (75.7% LCR).

### Normalized scores (1–100)

- **Tool use: 90/100.** Premier agentic tooling backed by 77.3% on MCP-Atlas and 78.0% on OSWorld-Verified computer use.
- **Reasoning: 91/100.** Top-tier reasoning demonstrated by 94.2% on GPQA Diamond and 46.9% on HLE without tools.
- **Context window: 95/100.** Verified 1M token input context with 128K max output capacity.
- **Multimodal: 68/100.** High-resolution visual document processing and UI computer-use perception (up to 3.75MP resolution).
- **Coding: 93/100.** Frontier software engineering performance with 87.6% on SWE-bench Verified and 64.3% on SWE-bench Pro.
- **Cost efficiency: 48/100.** $5.00/$25.00 pricing reflects premium frontier cost per task.
- **Overall Score: 87/100.** Highly capable frontier model for agentic coding, computer use, and long-horizon tool execution.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-18
- Method: Multi-source web research across Anthropic system cards, Artificial Analysis evaluations, and developer benchmarks; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
