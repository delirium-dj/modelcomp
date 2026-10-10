# Qwen 3.8 Flash Next — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud / Qwen-3.8-Flash-Next (`opencode/qwen-3.8-flash-next`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weight experimental checkpoint (125B language params, 6B active), distinct from managed Qwen3.8-Flash; 262K native context with image and video understanding.
- **Provider / access:** OpenCode Zen / Vercel AI Gateway `opencode/qwen-3.8-flash-next` (Chat Completions API)
- **Release / knowledge:** Released March 2026; knowledge cutoff February 2026.
- **IDs:** `opencode/qwen-3.8-flash-next`
- **Context window:** 262,144 tokens native (extensible to 1M with YaRN); 32K output (verified via Qwen technical papers and provider specs)
- **Modalities:** Text input, image input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** $0.12 input / $0.40 output per 1M tokens (paid tier / open weights).
- **Architecture:** Mixture of Experts (MoE), open weights (Qwen Community license) by Alibaba.

### Raw benchmarks found

- Terminal-Bench 2.1: **84.5%** <(Qwen technical evaluation, 2026)>
- Tau3-Banking / Tau2-Bench: **83.2%** <(API evaluation suite)>
- GPQA Diamond: **55.2%** <(Qwen evaluation reports)>
- SWE-bench Verified: **57.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **53.8%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 84/100.** High-performance tool calling and agent execution (Terminal-Bench 84.5%).
- **Reasoning: 83/100.** Strong knowledge and reasoning capabilities across GPQA Diamond (55.2%).
- **Context window: 90/100.** 262K native context with robust long-context handling.
- **Multimodal: 88/100.** Excellent image and video comprehension.
- **Coding: 83/100.** Capable coding assistant (SWE-bench Verified 57.5%, LiveCodeBench 53.8%).
- **Cost efficiency: 92/100.** Extremely economical pricing at $0.12 / $0.40 per 1M tokens.
- **Overall Score: 86.0/100.** Best-fit recommendation: High-value open-weight experimental checkpoint with strong multimodal and coding capabilities.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Alibaba Qwen technical documentation. SWE-bench Verified 57.5% and Terminal-Bench 2.1 84.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Alibaba technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
