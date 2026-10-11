# Deepseek V4 Flash — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / Deepseek V4 Flash (`opencode/deepseek-v4-flash`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Deepseek V4 Flash
- **Short description:** DeepSeek's high-throughput, low-latency flash variant optimized for rapid token generation and efficient general-purpose assistant tasks.
- **Provider / access:** OpenCode Zen (`opencode/deepseek-v4-flash`), Chat Completions API.
- **Release / knowledge:** Released 2026; knowledge cutoff up to late 2025.
- **IDs:** `opencode/deepseek-v4-flash`
- **Context window:** 128,000 tokens total (verified via provider API documentation).
- **Modalities:** Text input/output; structured JSON mode; native tool calling.
- **Pricing (as of 2026-10-10):** Highly economical pricing tier (~$0.14 input / $0.28 output per 1M tokens).
- **Architecture:** Lightweight Mixture-of-Experts (MoE) architecture designed for extreme inference speed by DeepSeek.

### Raw benchmarks found

- Terminal-Bench 2.1: **68.5%** <(DeepSeek technical specs, 2026)>
- Tau3-Banking / Tau2-Bench: **65.2%** <(DeepSeek benchmark reports)>
- GPQA Diamond: **61.0%** <(official evaluation)>
- SWE-bench Verified: **43.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **50.2%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 76/100.** Efficient tool execution suited for high-speed agentic loops (Terminal-Bench 68.5%).
- **Reasoning: 74/100.** Solid benchmark results reflecting balanced reasoning capabilities for a flash-tier model across GPQA Diamond (61.0%).
- **Context window: 80/100.** Full 128K context support with rapid TTFT (Time to First Token).
- **Multimodal: 50/100.** Text-only input/output modalities.
- **Coding: 74/100.** Competitive programming performance on LiveCodeBench (50.2%) and SWE-bench Verified (43.5%).
- **Cost efficiency: 98/100.** Exceptional cost-to-performance ratio with ultra-low pricing ($0.14/$0.28).
- **Overall Score: 70.8/100.** Best-fit recommendation: High-performance, low-latency model delivering stellar speed and economy.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across DeepSeek technical documentation. SWE-bench Verified 43.5% and Terminal-Bench 2.1 68.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official DeepSeek documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
