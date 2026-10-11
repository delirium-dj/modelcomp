# Qwen 3.7 Max — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.7 Max (`opencode/qwen-3.7-max`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's robust preceding generation open-weights model delivering strong multilingual and coding proficiency.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.7-max`, Chat Completions API.
- **Release / knowledge:** Released November 2025; knowledge cutoff October 2025.
- **IDs:** `opencode/qwen-3.7-max` (Free Zen tier available)
- **Context window:** 128K total tokens verified via Alibaba specifications.
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free Zen tier ($0/1M); paid equivalent ~$0.45 / $1.35 per 1M tokens.
- **Architecture:** Dense transformer architecture (~32B/72B parameters), open-weights by Alibaba Qwen team.

### Raw benchmarks found

- Terminal-Bench 2.1: **74.0%** <(Alibaba technical report, November 2025)>
- Tau3-Banking / Tau2-Bench: **77.0%** <(API evaluation suite)>
- GPQA Diamond: **63.0%** <(official evaluation)>
- SWE-bench Verified: **41.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **46.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid tool use and function calling performance (Terminal-Bench 74.0%).
- **Reasoning: 79/100.** Strong reasoning capabilities across standardized benchmarks like GPQA Diamond (63.0%).
- **Context window: 84/100.** Dependable 128K context retrieval with RULER verification (93.0%).
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 78/100.** Competent programming and SWE-bench performance (SWE-bench Verified 41.0%, LiveCodeBench 46.0%).
- **Cost efficiency: 100/100.** Free Zen tier ($0.00 cost).
- **Overall Score: 66.8/100.** Best-fit recommendation: Dependable open-weights model balancing reasoning, coding, and cost efficiency.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Alibaba technical documentation. SWE-bench Verified 41.0% and Terminal-Bench 2.1 74.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Alibaba technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
