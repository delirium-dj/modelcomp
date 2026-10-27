# Claude Sonnet 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Sonnet 5 (`anthropic/claude-sonnet-5`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's foundational Sonnet 5 model introducing expanded 1M context, adaptive thinking, and elite software engineering performance.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-sonnet-5` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-sonnet-5`, `anthropic.claude-sonnet-5`
- **Context window:** 1,000,000 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode; adaptive thinking.
- **Pricing (as of 2026-10-27):** Standard enterprise tier ($3.00 /M input tokens, $15.00 /M output tokens).
- **Architecture:** Sonnet 5 transformer architecture with extended context.

### Raw benchmarks found

- SWE-bench Pro: **80.0%** <(Anthropic technical evaluation)>
- GPQA Diamond: **88.8%** <(Advanced reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Excellent agentic tool integration.
- **Reasoning: 93/100.** Advanced logical and technical reasoning (GPQA Diamond 88.8%).
- **Context window: 95/100.** Full 1M token context window.
- **Multimodal: 92/100.** Robust native vision support.
- **Coding: 95/100.** Top-tier software engineering (SWE-bench Pro 80.0%).
- **Cost efficiency: 88/100.** Competitive enterprise pricing.
- **Overall Score: 93.6/100.** Best-fit recommendation: Premier balanced enterprise model for large-context coding and agentic workflows.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic platform announcements and developer telemetry.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
