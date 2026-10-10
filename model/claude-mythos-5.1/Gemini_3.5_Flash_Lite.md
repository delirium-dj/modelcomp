# Claude Mythos 5.1 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Mythos 5.1 (`claude-mythos-5.1`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's enterprise-grade variant of Claude Fable 5.1 featuring relaxed cybersecurity and technical safeguards for vetted enterprise users, with a 1M-token context window.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-mythos-5.1` (Messages API & Chat Completions).
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026.
- **IDs:** `anthropic/claude-mythos-5.1`
- **Context window:** 1,048,576 tokens total (1M input / 128,000 max output; verified via Anthropic documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode; reasoning effort configuration.
- **Pricing (as of 2026-10-10):** Paid $10.00 input / $50.00 output per 1M tokens.
- **Architecture:** Proprietary advanced MoE architecture by Anthropic with specialized enterprise tuning.

### Raw benchmarks found

- Terminal-Bench 2.1: **92.5%** <(Anthropic technical report, October 2026)>
- Tau3-Banking / Tau2-Bench: **89.1%** <(Anthropic evaluation suite)>
- GDPval-AA: **2150 Elo** <(Artificial Analysis performance tracker)>
- GPQA Diamond: **87.5%** <(Anthropic system card & benchmark updates)>
- SWE-bench Verified: **78.4%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **74.5%** <(LiveCodeBench benchmark harness)>
- RULER 1M pass rate: **98.5%** <(Anthropic long-context evaluation)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Exceptional tool orchestration and robust function calling across Terminal-Bench (92.5%) and MCP-Atlas.
- **Reasoning: 95/100.** Top-tier performance on complex reasoning tasks (GPQA Diamond 87.5%), demonstrating advanced multi-step deduction.
- **Context window: 97/100.** Supports 1M context window with 98.5% RULER retrieval accuracy across long documents.
- **Multimodal: 78/100.** Strong text and image input support, with comprehensive document and visual parsing.
- **Coding: 93/100.** Outstanding coding proficiency on SWE-bench Verified (78.4%) and LiveCodeBench (74.5%), suitable for enterprise software engineering.
- **Cost efficiency: 37/100.** Premium enterprise pricing tier ($10/$50 per 1M tokens) with strict enterprise privacy guarantees.
- **Overall Score: 91.4/100.** Best-fit recommendation: An exceptional enterprise frontier model offering top-tier reasoning and tool use with specialized technical tuning.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Anthropic technical updates. GDPval-AA 2150 Elo and RULER 98.5% pass rate verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
