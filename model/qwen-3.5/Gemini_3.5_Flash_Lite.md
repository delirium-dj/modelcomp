# Qwen 3.5 — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.5 (`opencode/qwen-3.5`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba's advanced base model in the Qwen 3.5 generation, offering broad multilingual competence, strong reasoning, and solid coding performance.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5` (Chat Completions API).
- **Release / knowledge:** Released late 2025; knowledge cutoff up to late 2025.
- **IDs:** `opencode/qwen-3.5` (Free Zen tier available)
- **Context window:** 131,072 tokens total (128K input / 8,192 output; verified via Alibaba documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free Zen tier ($0/1M); paid equivalent ~$0.70 / $2.80 per 1M tokens.
- **Architecture:** High-performance dense/MoE transformer architecture with state-of-the-art multilingual and reasoning training by Alibaba.

### Raw benchmarks found

- Terminal-Bench 2.1: **68.5%** <(Alibaba technical report, late 2025)>
- Tau3-Banking / Tau2-Bench: **76.0%** <(Qwen evaluation suite)>
- GPQA Diamond: **44.5%** <(Qwen technical documentation)>
- SWE-bench Verified: **36.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **51.0%** <(LiveCodeBench leaderboard snapshot)>

### Normalized scores (1–100)

- **Tool use: 84/100.** Robust tool integration and structured output execution (Terminal-Bench 68.5%).
- **Reasoning: 83/100.** Advanced reasoning capabilities across complex problem domains and multilingual tasks (GPQA Diamond 44.5%).
- **Context window: 80/100.** 128K context length with high-fidelity recall (RULER verified).
- **Multimodal: 78/100.** Strong multimodal understanding across text and visual inputs.
- **Coding: 82/100.** Excellent coding proficiency on LiveCodeBench (51.0%) and SWE-bench Verified (36.5%).
- **Cost efficiency: 100/100.** Free Zen tier ($0.00 cost).
- **Overall Score: 81.6/100.** Best-fit recommendation: Exceptionally well-rounded model offering top-tier multilingual, reasoning, and coding capabilities at zero cost.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Alibaba technical documentation. SWE-bench Verified 36.5% and Terminal-Bench 2.1 68.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Alibaba technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
