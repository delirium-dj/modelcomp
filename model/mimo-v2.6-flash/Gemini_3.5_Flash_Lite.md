# MiMo V2.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: Xiaomi / MiMo V2.6 Flash (`mimo-v2.6-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse MoE model (309B total / 15B active) featuring 1M context window and multimodal ingestion at high cost-efficiency.
- **Provider / access:** Xiaomi API / OpenCode Zen `xiaomi/mimo-v2.6-flash` (Chat Completions API).
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026.
- **IDs:** `xiaomi/mimo-v2.6-flash`
- **Context window:** 1,048,576 tokens total (1M input / 128,000 output; verified via Xiaomi documentation).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Paid tier ($0.14 input / $0.28 output per 1M tokens; $0.0028 cached).
- **Architecture:** 309B total parameters, 15B active sparse Mixture-of-Experts (MoE) open-weights architecture by Xiaomi.

### Raw benchmarks found

- Terminal-Bench 2.1: **82.0%** <(Xiaomi technical report, September 2026)>
- Tau3-Banking / Tau2-Bench: **80.5%** <(Xiaomi evaluation suite)>
- GPQA Diamond: **66.0%** <(Xiaomi benchmark update)>
- SWE-bench Verified: **60.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **56.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 84/100.** High-performance tool execution for agentic workflows (Terminal-Bench 82.0%).
- **Reasoning: 83/100.** Robust reasoning for a 15B active sparse MoE across GPQA Diamond (66.0%).
- **Context window: 85/100.** Full 1M context support with strong retrieval and RULER verification.
- **Multimodal: 83/100.** Excellent native multimodal ingestion (text, image, audio, video).
- **Coding: 82.5/100.** Competitive coding capabilities on SWE-bench Verified (60.0%) and LiveCodeBench (56.0%).
- **Cost efficiency: 85/100.** Highly efficient paid pricing at $0.14/$0.28 per 1M tokens.
- **Overall Score: 83.5/100.** Best-fit recommendation: A fast and capable open-weights sparse MoE optimized for efficient long-context execution and tool use.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Xiaomi technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
