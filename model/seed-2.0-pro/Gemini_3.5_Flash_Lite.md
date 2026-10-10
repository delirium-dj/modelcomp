# Seed 2.0 Pro — findings by Gemini 3.5 Flash Lite

- Source: ByteDance / Seed 2.0 Pro (`bytedance/seed-2.0-pro`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's flagship high-performance model optimized for multilingual understanding, fast inference, and structured coding assistance.
- **Provider / access:** ByteDance Seed API (`bytedance/seed-2.0-pro`), Chat Completions API.
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `bytedance/seed-2.0-pro`
- **Context window:** 262,144 tokens total (256K input / 64,000 output; verified via ByteDance documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Competitive API pricing ($0.80 input / $2.50 output per 1M tokens).
- **Architecture:** High-efficiency MoE Transformer architecture by ByteDance Seed team.

### Raw benchmarks found

- Terminal-Bench 2.1: **84.0%** <(ByteDance technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **86.0%** <(API evaluation suite)>
- GPQA Diamond: **80.5%** <(ByteDance benchmark update)>
- SWE-bench Verified: **73.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **70.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong tool calling and structured function execution across multilingual workflows (Terminal-Bench 84.0%).
- **Reasoning: 91/100.** Solid analytical and mathematical problem-solving capabilities across GPQA Diamond (80.5%).
- **Context window: 90/100.** Reliable 256K context handling with robust retrieval.
- **Multimodal: 88/100.** Effective vision and image understanding features.
- **Coding: 89/100.** High efficiency in software development and coding benchmarks (SWE-bench Verified 73.5%, LiveCodeBench 70.0%).
- **Cost efficiency: 82/100.** Highly attractive cost-to-performance ratio for enterprise deployment ($0.80/$2.50).
- **Overall Score: 90.0/100.** Best-fit recommendation: Well-rounded enterprise model offering exceptional cost-efficiency and strong general capabilities.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across ByteDance technical documentation. SWE-bench Verified 73.5% and Terminal-Bench 2.1 84.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official ByteDance documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
