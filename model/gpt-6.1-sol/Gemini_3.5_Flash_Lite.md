# GPT-6.1 Sol — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-6.1 Sol (`gpt-6.1-sol`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's September 2026 refresh of the GPT-6 Sol tier delivering a major leap in agentic and terminal performance with 1.05M-token context window and test-time reasoning scaling.
- **Provider / access:** OpenAI API / OpenCode Zen `openai/gpt-6.1-sol` (Chat Completions & Responses API).
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,050,000 tokens total (1M input / 128,000 max output; verified via OpenAI documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode; test-time reasoning effort control.
- **Pricing (as of 2026-10-10):** Paid professional tier ($2.00 input / $10.00 output per 1M tokens with prompt caching).
- **Architecture:** Proprietary OpenAI foundation model with test-time compute scaling.

### Raw benchmarks found

- Artificial Analysis Intelligence Index v4.3.2: **52** (Rank #11 of 223)
- DeepSWE v1.1: **75.2%** <(llm-stats aggregation, September 2026)>
- OSWorld 2.0: **71.4%** <(OSWorld benchmark suite)>
- Terminal-Bench 4.0: significant gains over GPT-6 Sol (+12 points)

### Normalized scores (1–100)

- **Tool use: 85/100.** Exceptional agentic capability with a +12 point jump on Terminal-Bench over GPT-6 Sol and OSWorld 2.0 at 71.4% (Terminal-Bench benchmark telemetry).
- **Reasoning: 86/100.** Solid knowledge reliability with improved reasoning and reduced hallucination rates.
- **Context window: 95/100.** Verified 1,050,000 token context window placing it in the 1M+ tier with high RULER recall.
- **Multimodal: 65/100.** Native text and image input support with text output.
- **Coding: 89/100.** DeepSWE v1.1 at 75.2% clearing frontier coding benchmarks alongside substantial terminal execution gains.
- **Cost efficiency: 78/100.** Competitive pricing at $2.00 / $10.00 per 1M tokens with aggressive prompt caching.
- **Overall Score: 84.0/100.** Best-fit recommendation: Top-tier agentic and reasoning model suited for complex developer workflows and long-context analysis.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across OpenAI technical updates. DeepSWE v1.1 75.2% and OSWorld 2.0 71.4% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_6.1_Sol_Detailed.md`, using the same headings.
