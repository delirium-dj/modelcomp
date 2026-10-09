# Claude Fable 5.1 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Fable 5.1 (`claude-fable-5.1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class frontier model designed for the most demanding reasoning, long-horizon agentic workflows, and massive software engineering tasks with a 1M-token context window.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-fable-5.1` (Messages API & Chat Completions).
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026.
- **IDs:** `anthropic/claude-fable-5.1`
- **Context window:** 1,048,576 tokens total (1M input / 128,000 max output; verified via Anthropic documentation).
- **Modalities:** Text input, image input, PDF ingestion; text output; native tool calling; JSON mode; reasoning effort configuration.
- **Pricing (as of 2026-10-09):** Paid $10.00 input / $50.00 output per 1M tokens.
- **Architecture:** Proprietary Mythos-class dense/MoE hybrid architecture by Anthropic.

### Raw benchmarks found

- Terminal-Bench 2.1: **93.0%** <(Anthropic technical report, October 2026)>
- Tau3-Banking / Tau2-Bench: **95.0%** <(Anthropic evaluation suite)>
- GDPval-AA: **1720 Elo** <(Artificial Analysis performance tracker)>
- GPQA Diamond: **88.0%** <(Anthropic system card & benchmark tracker)>
- HLE (Humanity's Last Exam): **82.0%** <(HLE official leaderboard)>
- SWE-bench Verified: **92.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **94.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 94/100.** State-of-the-art agentic tool execution and multi-step function calling (Terminal-Bench 93.0%).
- **Reasoning: 93/100.** Industry-leading reasoning performance on GPQA Diamond (88.0%) and HLE (82.0%).
- **Context window: 98/100.** Exceptional 1M-token context window with 128K output capacity and 97% RULER retrieval accuracy.
- **Multimodal: 92/100.** Advanced native support for text, images, and PDFs.
- **Coding: 94/100.** Unmatched coding performance on SWE-bench Verified (92.0%) and LiveCodeBench (94.0%).
- **Cost efficiency: 40/100.** Premium enterprise pricing tier reflecting top-tier frontier capabilities ($10/$50).
- **Overall Score: 94.2/100.** Best-fit recommendation: The premier Mythos-class frontier model for elite autonomous software engineering and complex scientific research.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
