# MiMo V2.5 Free — findings by Gemini 3.5 Flash Lite

- Source: OpenCode / MiMo V2.5 Free (`opencode/mimo-v2.5-free`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Native omni-modal open-weights MoE by Xiaomi for text, image, video and audio understanding plus strong agentic coding. Free capped tier on Zen.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `opencode/mimo-v2.5-free`
- **Context window:** 200K Zen cap (native 1M total input / 32K output; verified via Xiaomi documentation).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free Zen tier; native pricing from ~$0.14 / $0.28 per 1M tokens.
- **Architecture:** Native omni-modal Mixture-of-Experts architecture by Xiaomi.

### Raw benchmarks found

- Terminal-Bench 2.1: **63.0%** <(Xiaomi technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **69.0%** <(API evaluation suite)>
- GPQA Diamond: **64.0%** <(official evaluation)>
- SWE-bench Verified: **60.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **65.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool use and omni-modal interaction (Terminal-Bench 63.0%).
- **Reasoning: 83/100.** Solid logical reasoning across modalities and GPQA Diamond (64.0%).
- **Context window: 82/100.** 200K Zen cap (native 1M) with RULER verification.
- **Multimodal: 92/100.** Native text, image, audio, and video ingestion.
- **Coding: 83/100.** Capable agentic coding benchmark performance on SWE-bench Verified (60.0%).
- **Cost efficiency: 100/100.** Free Zen tier access ($0.00 cost).
- **Overall Score: 84.8/100.** Best-fit recommendation: Versatile free omni-modal open-weights model for high-volume multimodal tasks.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Xiaomi technical documentation. SWE-bench Verified 60.0% and Terminal-Bench 2.1 63.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Xiaomi documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
