# GLM 5.3 Flash — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI / GLM 5.3 Flash (`glm-5.3-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Zhipu AI's lightweight Flash-class MoE model engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency with a 204K-token context window.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash` (Chat Completions API).
- **Release / knowledge:** Released February 2026; knowledge cutoff February 2026.
- **IDs:** `opencode/glm-5.3-flash`
- **Context window:** 204,800 tokens total (verified via Zhipu AI documentation).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Free Zen tier ($0.00/1M); paid equivalent ~$0.20 / $0.60 per 1M tokens.
- **Architecture:** Lightweight Mixture-of-Experts (MoE) transformer architecture by Zhipu AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **76.0%** <(Zhipu AI technical report, February 2026)>
- Tau3-Banking / Tau2-Bench: **79.0%** <(Zhipu evaluation suite)>
- GPQA Diamond: **63.5%** <(Zhipu AI benchmark update)>
- SWE-bench Verified: **42.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **47.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 80/100.** Fast and efficient tool invocation tailored for agentic tasks (Terminal-Bench 76.0%).
- **Reasoning: 79/100.** Solid reasoning capabilities for a Flash tier model across GPQA Diamond (63.5%).
- **Context window: 92/100.** Generous 204K context window with reliable retrieval.
- **Multimodal: 15/100.** Text-only input/output modality (text-only floor).
- **Coding: 78/100.** Efficient coding performance and swift execution (SWE-bench Verified 42.5%).
- **Cost efficiency: 100/100.** Free Zen tier ($0.00 cost).
- **Overall Score: 68.8/100.** Best-fit recommendation: An ultra-fast Flash-class MoE model offering great context length and low latency at zero cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Zhipu AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
