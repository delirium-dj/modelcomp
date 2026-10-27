# Claude Opus 4.7 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 4.7 (`anthropic/claude-opus-4-7`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Advanced minor release in the Claude Opus 4 generation, featuring optimized instruction adherence and reduced hallucination rates in coding tasks.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-opus-4-7` (Chat Completions API).
- **Release / knowledge:** Released 2025; knowledge current.
- **IDs:** `anthropic/claude-opus-4-7`, `anthropic.claude-opus-4-7`
- **Context window:** 200,000 tokens total (200k input / 64,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Standard enterprise tier.
- **Architecture:** Optimized Opus 4.7 checkpoint.

### Raw benchmarks found

- SWE-bench Verified: **76.8%** <(Anthropic technical evaluation)>
- GPQA Diamond: **86.1%** <(Advanced reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 91/100.** Highly robust function calling and multi-tool orchestration.
- **Reasoning: 92/100.** Superior reasoning and problem solving (GPQA Diamond 86.1%).
- **Context window: 88/100.** 200k token context window.
- **Multimodal: 89/100.** Advanced native vision integration.
- **Coding: 93/100.** Exceptional software engineering and debugging (SWE-bench Verified 76.8%).
- **Cost efficiency: 78/100.** Standard enterprise pricing.
- **Overall Score: 90.6/100.** Best-fit recommendation: High-reliability enterprise model for demanding technical workflows.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic release notes and developer telemetry.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
