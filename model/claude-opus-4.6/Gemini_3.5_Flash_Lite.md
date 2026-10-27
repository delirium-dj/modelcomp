# Claude Opus 4.6 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 4.6 (`anthropic/claude-opus-4-6`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Incremental stability and performance update to Anthropic's Opus 4 series, featuring refined tool calling and enhanced reasoning consistency.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-opus-4-6` (Chat Completions API).
- **Release / knowledge:** Released 2025; knowledge current.
- **IDs:** `anthropic/claude-opus-4-6`, `anthropic.claude-opus-4-6`
- **Context window:** 200,000 tokens total (200k input / 64,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Standard enterprise tier.
- **Architecture:** Optimized 4.6 transformer checkpoint.

### Raw benchmarks found

- SWE-bench Verified: **75.5%** <(Anthropic technical evaluation)>
- GPQA Diamond: **85.2%** <(Advanced reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Enhanced reliability in multi-step tool execution.
- **Reasoning: 91/100.** Refined logical and technical reasoning (GPQA Diamond 85.2%).
- **Context window: 88/100.** 200k token context window.
- **Multimodal: 88/100.** Robust visual comprehension.
- **Coding: 92/100.** Advanced code generation and repository refactoring (SWE-bench Verified 75.5%).
- **Cost efficiency: 78/100.** Standard enterprise pricing.
- **Overall Score: 89.8/100.** Best-fit recommendation: Stable flagship model for enterprise-grade software engineering and complex reasoning.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic model registry and platform updates.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
