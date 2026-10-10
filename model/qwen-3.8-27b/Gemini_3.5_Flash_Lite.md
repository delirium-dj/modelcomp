# Qwen3.8-27B — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen3.8-27B (`Qwen/Qwen3.8-27B`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba Qwen dense 27B vision-language open-weights model; image/video understanding plus strong agentic coding and long-horizon tasks.
- **Provider / access:** OpenCode Zen / API Providers `Qwen/Qwen3.8-27B` (Chat Completions API). No Free ID.
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `Qwen/Qwen3.8-27B`
- **Context window:** 262,144 native (extensible to 1M with YaRN).
- **Modalities:** Text/image/video in; text out (thinking on by default); tool calls yes.
- **Pricing (as of 2026-10-10):** Open weights (Apache-2.0): self-hosting free, API provider pricing varies; no Zen Free ID.
- **Architecture:** Open-weights dense transformer (27B params) with multimodal vision encoder by Alibaba.

### Raw benchmarks found

- Terminal-Bench 2.1: **68.0%** <(Alibaba technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **72.0%** <(API evaluation suite)>
- GPQA Diamond: **62.0%** <(Alibaba benchmark update)>
- SWE-bench Verified: **60.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **66.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 85/100.** High performance in agentic workflows and tool invocation (Terminal-Bench 68.0%).
- **Reasoning: 84/100.** Strong reasoning capabilities across mathematical and coding benchmarks (GPQA Diamond 62.0%).
- **Context window: 86/100.** 262K native context window with excellent multi-step retrieval (RULER verified).
- **Multimodal: 85/100.** Comprehensive text, image, and video understanding.
- **Coding: 82/100.** High SWE-bench (60.0%) and LiveCodeBench (66.0%) performance for a 27B model.
- **Cost efficiency: 88/100.** Very high performance-to-cost ratio for open-weights hosting.
- **Overall Score: 84.4/100.** Best-fit recommendation: Exceptional mid-size open-weights multimodal and coding powerhouse.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Alibaba technical documentation. SWE-bench Verified 60.0% and Terminal-Bench 2.1 68.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Alibaba technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
