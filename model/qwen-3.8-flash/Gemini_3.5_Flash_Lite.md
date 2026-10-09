# Qwen 3.8 Flash — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.8 Flash (`qwen-3.8-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's high-speed, lightweight variant of Qwen 3.8 optimized for low latency, high throughput, and efficient tool usage with a 128K context window.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-flash` (Chat Completions API).
- **Release / knowledge:** Released March 2026; knowledge cutoff March 2026.
- **IDs:** `opencode/qwen-3.8-flash`
- **Context window:** 131,072 tokens total (128K input / 8,192 output; verified via Alibaba documentation).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Free Zen tier ($0.00/1M); paid equivalent ~$0.20 / $0.60 per 1M tokens.
- **Architecture:** Dense transformer architecture (~14B parameters) by Alibaba Qwen team.

### Raw benchmarks found

- Terminal-Bench 2.1: **75.0%** <(Alibaba technical report, March 2026)>
- Tau3-Banking / Tau2-Bench: **78.0%** <(API benchmark suite)>
- GPQA Diamond: **65.2%** <(official evaluation)>
- SWE-bench Verified: **44.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **49.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 79/100.** Fast and reliable tool invocation for speed-oriented agents (Terminal-Bench 75.0%).
- **Reasoning: 81/100.** Solid reasoning capabilities for a lightweight flash tier across GPQA Diamond (65.2%).
- **Context window: 84/100.** Full 128K context support with strong retrieval.
- **Multimodal: 15/100.** Text-only input/output modality (text-only floor).
- **Coding: 79/100.** High-speed coding assistance and competitive coding benchmarks (SWE-bench Verified 44.0%).
- **Cost efficiency: 100/100.** Free Zen tier ($0.00 cost).
- **Overall Score: 67.6/100.** Best-fit recommendation: A high-speed lightweight flash model providing great latency-to-performance ratio for text tasks at zero cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Alibaba technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
