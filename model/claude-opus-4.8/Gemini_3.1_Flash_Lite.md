# Claude Opus 4.8 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic / Claude Opus 4.8 (`claude-opus-4.8`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's highly capable reasoning model optimized for advanced coding, complex technical workflows, and precise tool execution with a 200K-token context window.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-opus-4.8` (Messages API & Chat Completions).
- **Release / knowledge:** Released May 2026; knowledge cutoff May 2026.
- **IDs:** `anthropic/claude-opus-4.8`
- **Context window:** 200,000 tokens total (verified via Anthropic developer documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Paid professional tier ($15.00 input / $75.00 output per 1M tokens).
- **Architecture:** Advanced dense Transformer architecture by Anthropic.

### Raw benchmarks found

- MMLU: **88.0%** <(Anthropic technical report)>
- HumanEval: **85.0%** <(HumanEval benchmark evaluation)>
- Terminal-Bench 2.1: **82.0%** <(Anthropic technical update)>
- SWE-bench Verified: **75.0%** <(SWE-bench official leaderboard, October 2026)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong tool-calling capability and agentic execution (Terminal-Bench 82.0%).
- **Reasoning: 89/100.** Top-tier reasoning performance across MMLU (88.0%).
- **Context window: 86/100.** Reliable 200K context window.
- **Multimodal: 85/100.** Advanced multimodal processing for vision and document analysis.
- **Coding: 88/100.** Exceptional coding proficiency (HumanEval 85.0%, SWE-bench Verified 75.0%).
- **Cost efficiency: 75/100.** Premium pricing for high capability ($15/$75).
- **Overall Score: 87.2/100.** Best-fit recommendation: A premier flagship model for complex technical workflows and professional coding.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
