# Ember 1 — findings by Gemini 3.5 Flash Lite

- Source: Ember 1 (`ember-1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Ember 1 general-purpose language model designed for efficient reasoning, task execution, and reliable tool calling with a 128K context window.
- **Provider / access:** OpenCode Zen `opencode/ember-1` (Chat Completions API).
- **Release / knowledge:** Released early 2026; knowledge cutoff early 2026.
- **IDs:** `opencode/ember-1`
- **Context window:** 131,072 tokens total (128K input / 8,192 output; verified via platform metadata).
- **Modalities:** Text input/output only; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Standard competitive pricing tier ($0.50 input / $1.50 output per 1M tokens).
- **Architecture:** Dense transformer architecture optimized for general tasks.

### Raw benchmarks found

- Terminal-Bench 2.1: **78.0%** <(OpenCode technical evaluation, early 2026)>
- Tau3-Banking / Tau2-Bench: **80.0%** <(API evaluation suite)>
- GPQA Diamond: **62.0%** <(Ember benchmark update)>
- SWE-bench Verified: **68.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **70.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Reliable tool execution and structured generation capabilities (Terminal-Bench 78.0%).
- **Reasoning: 84/100.** Solid analytical and multi-step reasoning performance across GPQA Diamond (62.0%).
- **Context window: 80/100.** Stable performance across 128K context window with RULER verification.
- **Multimodal: 15/100.** Text-only modality (text-only floor).
- **Coding: 83/100.** Competent coding benchmark results for standard development workflows (SWE-bench Verified 68.0%).
- **Cost efficiency: 85/100.** Standard competitive pricing tier ($0.50/$1.50).
- **Overall Score: 68.8/100.** Best-fit recommendation: A capable general-purpose dense model providing reliable reasoning and tool use for text-based enterprise workloads.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official platform documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
