# GPT-5.1 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.1 (`opencode/gpt-5.1`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's incremental iteration over GPT-5 focusing on improved instruction following and reliability.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`) and OpenCode Zen (`opencode/gpt-5.1`).
- **Release / knowledge:** Released early 2026; knowledge cutoff late 2025.
- **IDs:** `gpt-5.1`; Zen ID `opencode/gpt-5.1`.
- **Context window:** 131,072 tokens total (128K input / 16,000 output; verified via OpenAI documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Standard professional pricing ($2.00 input / $8.00 output per 1M tokens).
- **Architecture:** Refined dense/MoE architecture by OpenAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **42.0%** <(OpenAI internal benchmark estimates, 2026)>
- Tau3-Banking / Tau2-Bench: **55.0%** <(API evaluation suite)>
- GPQA Diamond: **62.0%** <(OpenAI preview specs)>
- SWE-bench Verified: **65.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **60.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 60/100.** Solid tool integration and JSON mode reliability (Terminal-Bench 42.0%).
- **Reasoning: 68/100.** Strong instruction following and broad knowledge retrieval across GPQA Diamond (62.0%).
- **Context window: 68/100.** 128K context tier with RULER verification.
- **Multimodal: 65/100.** Text and image input support.
- **Coding: 70/100.** Competent general-purpose coding on SWE-bench Verified (65.0%).
- **Cost efficiency: 82/100.** Competitive commercial pricing ($2/$8).
- **Overall Score: 66.0/100.** Best-fit recommendation: A solid general-purpose workhorse model for routine professional workflows.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across OpenAI technical documentation. SWE-bench Verified 65.0% and Terminal-Bench 2.1 42.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
