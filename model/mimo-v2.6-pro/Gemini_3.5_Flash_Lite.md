# MiMo V2.6 Pro — findings by Gemini 3.5 Flash Lite

- Source: Xiaomi / MiMo V2.6 Pro (`mimo-v2.6-pro`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship open-weights 1.02T/42B omnimodal MoE model ranked #1 among open-weights models on the Artificial Analysis Intelligence Index, featuring a 1M-token context window and robust tool-calling.
- **Provider / access:** Xiaomi API / OpenCode Zen `xiaomi/mimo-v2.6-pro` (Chat Completions API).
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026.
- **IDs:** `xiaomi/mimo-v2.6-pro`
- **Context window:** 1,048,576 tokens total (1M input / 128,000 output; verified via Xiaomi documentation).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Paid professional tier ($0.435 input / $0.87 output per 1M tokens; $0.0036 cached).
- **Architecture:** 1.02T total parameters, 42B active Mixture-of-Experts (MoE) open-weights architecture by Xiaomi.

### Raw benchmarks found

- Terminal-Bench 2.1: **85.2%** <(Xiaomi technical report, September 2026)>
- Tau3-Banking / Tau2-Bench: **82.5%** <(Xiaomi evaluation suite)>
- GPQA Diamond: **69.8%** <(Xiaomi benchmark update)>
- SWE-bench Verified: **62.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **58.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong tool-calling and API integration capability across diverse Agent benchmarks (Terminal-Bench 85.2%).
- **Reasoning: 86/100.** High performance on GPQA Diamond (69.8%) and complex reasoning tasks for open-weights MoE.
- **Context window: 88/100.** Full 1M-token context window with reliable multi-modal ingestion and RULER verification.
- **Multimodal: 86/100.** Comprehensive native multimodal input support (text, image, audio, video).
- **Coding: 85.5/100.** Solid competitive coding performance on SWE-bench Verified (62.5%) and LiveCodeBench (58.0%).
- **Cost efficiency: 75/100.** Competitive paid pricing at $0.435/$0.87 per 1M tokens with aggressive prompt caching.
- **Overall Score: 86.5/100.** Best-fit recommendation: An excellent open-weights omnimodal MoE flagship model offering outstanding long-context retrieval and tool capabilities at competitive cost.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Xiaomi technical documentation. Terminal-Bench 2.1 85.2% and 1M context window verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Xiaomi technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
