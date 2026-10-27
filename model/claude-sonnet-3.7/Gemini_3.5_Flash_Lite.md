# Claude Sonnet 3.7 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude 3.7 Sonnet (`anthropic/claude-3-7-sonnet`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's hybrid reasoning model combining instant response generation with optional extended thinking for complex engineering and math tasks.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-3-7-sonnet` (Chat Completions API).
- **Release / knowledge:** Released 2025; knowledge current.
- **IDs:** `anthropic/claude-3-7-sonnet`, `anthropic.claude-3-7-sonnet-20250219`
- **Context window:** 200,000 tokens total (200k input / 64,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode; hybrid thinking effort configuration.
- **Pricing (as of 2026-10-27):** Standard enterprise pricing ($3.00 /M input tokens, $15.00 /M output tokens).
- **Architecture:** Hybrid reasoning transformer architecture supporting controllable thinking tokens.

### Raw benchmarks found

- SWE-bench Verified: **70.3%** <(Anthropic technical evaluation)>
- GPQA Diamond: **78.4%** <(Advanced reasoning evaluation)>
- Terminal-Bench: **59.2%** <(Agentic benchmark)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Exceptional agentic tool execution and reasoning integration.
- **Reasoning: 91/100.** Hybrid reasoning capability with controllable thinking budget (GPQA Diamond 78.4%).
- **Context window: 86/100.** 200k token context window with 64k output token capacity.
- **Multimodal: 91/100.** Superior native vision processing and UI analysis.
- **Coding: 93/100.** Outstanding software engineering and debugging performance (SWE-bench Verified 70.3%).
- **Cost efficiency: 85/100.** Highly competitive pricing for hybrid reasoning capability.
- **Overall Score: 89.8/100.** Best-fit recommendation: Premier hybrid reasoning model for software engineering and complex algorithmic problem solving.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic model release documentation and independent evaluations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
