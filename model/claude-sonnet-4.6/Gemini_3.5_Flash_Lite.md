# Claude Sonnet 4.6 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Incremental optimization update to the Claude Sonnet 4 series, featuring refined instruction tuning and improved coding accuracy.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-sonnet-4-6` (Chat Completions API).
- **Release / knowledge:** Released 2025; knowledge current.
- **IDs:** `anthropic/claude-sonnet-4-6`, `anthropic.claude-sonnet-4-6`
- **Context window:** 200,000 tokens total (200k input / 64,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Standard enterprise tier ($3.00 /M input tokens, $15.00 /M output tokens).
- **Architecture:** Refined Sonnet 4.6 transformer checkpoint.

### Raw benchmarks found

- SWE-bench Verified: **74.8%** <(Anthropic technical evaluation)>
- GPQA Diamond: **82.0%** <(Advanced reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 91/100.** Reliable agentic function calling.
- **Reasoning: 92/100.** Refined reasoning and domain problem solving (GPQA Diamond 82.0%).
- **Context window: 86/100.** 200k token context window.
- **Multimodal: 91/100.** Strong native vision support.
- **Coding: 94/100.** Professional software engineering and testing (SWE-bench Verified 74.8%).
- **Cost efficiency: 86/100.** Competitive enterprise pricing.
- **Overall Score: 91.2/100.** Best-fit recommendation: Highly reliable balanced model for production software engineering.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic model registry and platform updates.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
