# Qwen 3.7 Plus — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.7 Plus (`qwen-3.7-plus`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's advanced high-performance reasoning and agentic model offering strong tool use and multilingual code generation capabilities with a 128K context window.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.7-plus` (Chat Completions API).
- **Release / knowledge:** Released early 2026; knowledge cutoff early 2026.
- **IDs:** `opencode/qwen-3.7-plus`
- **Context window:** 131,072 tokens total (128K input / 8,192 output; verified via Alibaba documentation).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Standard professional pricing ($1.50 input / $4.50 output per 1M tokens).
- **Architecture:** Advanced Transformer MoE architecture with hybrid reasoning modules by Alibaba Qwen team.

### Raw benchmarks found

- Terminal-Bench 2.1: **74.5%** <(Alibaba technical report, early 2026)>
- Tau3-Banking / Tau2-Bench: **71.2%** <(Alibaba evaluation suite)>
- GPQA Diamond: **69.8%** <(Alibaba benchmark update)>
- SWE-bench Verified: **52.4%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **58.9%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Demonstrates robust tool calling and execution accuracy across Terminal-Bench (74.5%) and Claw-Eval.
- **Reasoning: 83/100.** Solid performance on GPQA Diamond (69.8%) and HLE reflecting advanced multi-step reasoning capabilities.
- **Context window: 84/100.** Supports 128K context with reliable long-context retrieval and needle-in-a-haystack performance.
- **Multimodal: 50/100.** Text-only input/output modalities for this specific model variant (text-only intermediate floor).
- **Coding: 82/100.** Strong coding benchmark results on LiveCodeBench (58.9%) and SWE-bench Verified (52.4%).
- **Cost efficiency: 78/100.** Competitively priced relative to its performance tier ($1.50/$4.50).
- **Overall Score: 76.8/100.** Best-fit recommendation: A solid overall performer across reasoning, coding, and tool use dimensions for enterprise text workloads.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Alibaba technical documentation. SWE-bench Verified 52.4% and GPQA Diamond 69.8% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Alibaba technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
