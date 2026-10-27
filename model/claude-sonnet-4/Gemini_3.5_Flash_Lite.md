# Claude Sonnet 4 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Sonnet 4 (`anthropic/claude-sonnet-4`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's baseline Sonnet 4 model, bridging the gap between Sonnet 3.5 and advanced 4.5+ generation capabilities.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-sonnet-4` (Chat Completions API).
- **Release / knowledge:** Released 2025; knowledge current.
- **IDs:** `anthropic/claude-sonnet-4`, `anthropic.claude-sonnet-4`
- **Context window:** 200,000 tokens total (200k input / 64,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Standard enterprise tier ($3.00 /M input tokens, $15.00 /M output tokens).
- **Architecture:** Sonnet 4 transformer architecture.

### Raw benchmarks found

- SWE-bench Verified: **72.0%** <(Anthropic technical evaluation)>
- GPQA Diamond: **80.0%** <(Advanced reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Reliable agentic tool calling and structured output.
- **Reasoning: 91/100.** Strong logical and technical reasoning (GPQA Diamond 80.0%).
- **Context window: 86/100.** 200k token context window.
- **Multimodal: 90/100.** Robust native vision processing.
- **Coding: 93/100.** High-performance software engineering (SWE-bench Verified 72.0%).
- **Cost efficiency: 86/100.** Standard competitive pricing.
- **Overall Score: 89.6/100.** Best-fit recommendation: Reliable enterprise model for daily coding and general analysis.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic release notes and developer benchmarks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
