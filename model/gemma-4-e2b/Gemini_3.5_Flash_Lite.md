# Gemma 4 E2B — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 (`google/gemma-4-e2b`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google's ultra-compact edge-optimized Gemma 4 model (2B parameters), engineered for extreme low latency and on-device execution.
- **Provider / access:** Google / OpenCode Zen `google/gemma-4-e2b` (Chat Completions API & open weights).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemma-4-e2b`
- **Context window:** 64,000 tokens total (64k input / 8,192 output).
- **Modalities:** Text input, text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Free open weights (on-device self-host) and ultra-low-cost API tier.
- **Architecture:** Compact quantized edge transformer architecture (2B parameters).

### Raw benchmarks found

- Edge inference speed: Sub-millisecond token generation on mobile and IoT hardware <(Google Edge AI technical brief)>

### Normalized scores (1–100)

- **Tool use: 78/100.** Reliable function calling for edge applications.
- **Reasoning: 75/100.** Solid everyday reasoning for lightweight tasks.
- **Context window: 78/100.** 64k context window.
- **Multimodal: 60/100.** Text-only compact architecture.
- **Coding: 76/100.** Basic script generation and syntax completion.
- **Cost efficiency: 100/100.** Free on-device execution and ultra-low API cost.
- **Overall Score: 73.4/100.** Best-fit recommendation: Ultra-compact edge model for on-device mobile and IoT AI applications.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google Edge AI specs and mobile developer guides.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
