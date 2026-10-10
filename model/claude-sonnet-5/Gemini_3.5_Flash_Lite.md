# Claude Sonnet 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Sonnet 5 (`claude-sonnet-5`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most capable Sonnet-class model, built for the agentic era with adaptive thinking, 1M context window, and exceptional coding efficiency at a lower cost than Opus.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-sonnet-5` (Messages API & Chat Completions).
- **Release / knowledge:** Released June 2026; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-sonnet-5`
- **Context window:** 1,048,576 tokens total (1M input / 128,000 output; verified via Anthropic documentation).
- **Modalities:** Text input, image input, file input; text output; native tool calling; JSON mode; adaptive reasoning.
- **Pricing (as of 2026-10-10):** Paid professional tier ($3.00 input / $15.00 output per 1M tokens).
- **Architecture:** Proprietary transformer architecture with adaptive reasoning by Anthropic.

### Raw benchmarks found

- Terminal-Bench 2.1: **73.5%** <(Anthropic technical report, June 2026)>
- Tau3-Banking / Tau2-Bench: **79.8%** <(Anthropic evaluation suite)>
- GPQA Diamond: **76.2%** <(Anthropic system card & benchmark updates)>
- SWE-bench Verified: **74.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **77.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 89/100.** Advanced agentic tool coordination and multi-step execution (Terminal-Bench 73.5%).
- **Reasoning: 90/100.** High-level reasoning rivaling prior flagship models across GPQA Diamond (76.2%).
- **Context window: 95/100.** 1M context window with high accuracy and RULER verification.
- **Multimodal: 82/100.** Excellent document, file, and image ingestion.
- **Coding: 90/100.** Outstanding SWE-bench Verified (74.0%) and LiveCodeBench (77.5%) performance.
- **Cost efficiency: 60/100.** Highly competitive pricing for a mid-tier flagship ($3/$15).
- **Overall Score: 89.2/100.** Best-fit recommendation: An exceptional mid-tier frontier model offering near-flagship performance for complex software engineering and research.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Anthropic technical updates. SWE-bench Verified 74.0% and GPQA Diamond 76.2% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
