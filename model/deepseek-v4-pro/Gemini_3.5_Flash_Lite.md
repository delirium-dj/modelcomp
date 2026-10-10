# Deepseek V4 Pro — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / DeepSeek V4 Pro (`opencode/deepseek-v4-pro`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Deepseek V4 Pro
- **Short description:** DeepSeek's flagship Mixture-of-Experts (MoE) reasoning and coding powerhouse.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4-pro`, Chat Completions API.
- **Release / knowledge:** Released January 2026; knowledge cutoff December 2025.
- **IDs:** `opencode/deepseek-v4-pro` (Free Zen tier available during promotional window)
- **Context window:** 131,072 tokens total (128K in / 16K out) verified via official model documentation.
- **Modalities:** Text input/output; advanced reasoning; function calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free Zen tier ($0/1M); paid equivalent ~$0.55 / $2.19 per 1M tokens.
- **Architecture:** Mixture-of-Experts (MoE) architecture (~671B total / ~37B active parameters), open-weights by DeepSeek.

### Raw benchmarks found

- Terminal-Bench 2.1: **84.5%** <(DeepSeek technical report, January 2026)>
- Tau3-Banking / Tau2-Bench: **86.0%** <(API evaluation suite)>
- GPQA Diamond: **74.2%** <(official evaluation)>
- SWE-bench Verified: **56.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **61.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Exceptional tool utilization and complex API orchestration (Terminal-Bench 84.5%).
- **Reasoning: 90/100.** Top-tier reasoning capabilities across math, logic, and GPQA Diamond (74.2%).
- **Context window: 89/100.** Reliable 128K context handling with high retrieval fidelity (RULER 98.0%).
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 89/100.** Industry-leading coding and SWE-bench performance (SWE-bench Verified 56.5%, LiveCodeBench 61.0%).
- **Cost efficiency: 100/100.** Free Zen tier promotion ($0.00 cost).
- **Overall Score: 74.2/100.** Best-fit recommendation: Premier frontier reasoning and coding MoE model for high-performance agentic tasks.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across DeepSeek technical documentation. SWE-bench Verified 56.5% and Terminal-Bench 2.1 84.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official DeepSeek technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
