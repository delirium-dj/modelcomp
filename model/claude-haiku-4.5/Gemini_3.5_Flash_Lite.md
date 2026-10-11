# Claude Haiku 4.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Haiku 4.5 (`anthropic/claude-haiku-4-5`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fast and lightweight near-frontier model optimized for low-latency chat, agentic sub-tasks, and efficient pair programming.
- **Provider / access:** Anthropic Messages API (`https://api.anthropic.com`), Amazon Bedrock, Google Vertex, and OpenCode Zen (`opencode/claude-haiku-4-5`).
- **Release / knowledge:** Released October 2025; knowledge cutoff February 2025.
- **IDs:** `claude-haiku-4-5-20251001`; Zen ID `opencode/claude-haiku-4-5` (no Free tier ID on Zen).
- **Context window:** 200,000 tokens total input / 64,000 max output (verified via official Anthropic documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode; extended thinking budget; multilingual.
- **Pricing (as of 2026-10-10):** $1.00 input / $5.00 output per 1M tokens; prompt caching and batch discounts available; no free tier.
- **Architecture:** Proprietary Anthropic transformer architecture with extended thinking support.

### Raw benchmarks found

- Terminal-Bench 2.1: **43.8%** <(Vals / BenchLM evaluation, 2025/2026)>
- GPQA Diamond: **72.2%** <(Vals / BenchLM benchmark update)>
- MMLU-Pro: **78.7%** <(official evaluation suite)>
- SWE-bench Verified: **73.3%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **41.2%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.1 at 43.8% reflects solid sub-agent capabilities, tempered by advanced task suites.
- **Reasoning: 62/100.** GPQA Diamond at 72.2% and MMLU-Pro at 78.7% demonstrate strong middle-tier reasoning.
- **Context window: 70/100.** Standard 200K token context window with 64K output support mapping to the 200K reference tier.
- **Multimodal: 65/100.** Native text and image input support with text output.
- **Coding: 75/100.** Official SWE-bench Verified score of 73.3% indicates robust coding performance, tempered by LiveCodeBench at 41.2%.
- **Cost efficiency: 88/100.** Priced at $1/$5 per 1M tokens with prompt caching discounts.
- **Overall Score: 65.0/100.** Best-fit recommendation: Efficient, low-latency model well-suited for high-throughput coding and agent tasks.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Anthropic technical documentation. SWE-bench Verified 73.3% and Terminal-Bench 2.1 43.8% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
