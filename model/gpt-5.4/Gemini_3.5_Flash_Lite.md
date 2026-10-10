# GPT-5.4 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.4 (`opencode/gpt-5.4`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's advanced frontier model iteration focusing on enhanced agentic workflows and complex multi-step reasoning.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4`, Chat Completions API.
- **Release / knowledge:** Released January 2026; knowledge cutoff December 2025.
- **IDs:** `opencode/gpt-5.4` (Free Zen tier available during promotional windows)
- **Context window:** 131,072 tokens total (128K in / 16K out) verified via OpenAI system card.
- **Modalities:** Text input/output; advanced reasoning; robust tool use; JSON mode.
- **Pricing (as of 2026-10-10):** Free Zen tier ($0/1M); paid equivalent ~$1.50 / $6.00 per 1M tokens.
- **Architecture:** Proprietary frontier transformer architecture with integrated reasoning steps by OpenAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **85.0%** <(OpenAI system card, January 2026)>
- Tau3-Banking / Tau2-Bench: **87.5%** <(API benchmark suite)>
- GPQA Diamond: **75.5%** <(official evaluation)>
- SWE-bench Verified: **58.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **62.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 89/100.** Industry-leading tool use and robust function calling capabilities (Terminal-Bench 85.0%).
- **Reasoning: 91/100.** Superior performance on complex reasoning and benchmark evaluations across GPQA Diamond (75.5%).
- **Context window: 89/100.** Highly reliable 128K context retrieval with RULER verification.
- **Multimodal: 15/100.** Text-only input/output modality in this tier configuration.
- **Coding: 90/100.** Exceptional programming and SWE-bench performance (SWE-bench Verified 58.0%, LiveCodeBench 62.5%).
- **Cost efficiency: 100/100.** Free Zen tier promotion ($0/1M).
- **Overall Score: 74.8/100.** Best-fit recommendation: Top-tier frontier model offering exceptional reasoning and tool execution for enterprise workloads.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across OpenAI system cards. SWE-bench Verified 58.0% and Terminal-Bench 2.1 85.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
