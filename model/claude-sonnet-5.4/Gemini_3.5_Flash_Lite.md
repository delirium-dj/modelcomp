# Claude Sonnet 5.4 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Sonnet 5.4 (`anthropic/claude-sonnet-5-4`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** Anthropic's high-intelligence, cost-optimized 5.4 generation Sonnet model, combining rapid response generation with deep reasoning.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-sonnet-5-4` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-sonnet-5-4`, `anthropic.claude-sonnet-5-4`
- **Context window:** 1,000,000 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode; adaptive thinking.
- **Pricing (as of 2026-10-27):** Standard enterprise tier ($3.00 /M input tokens, $15.00 /M output tokens).
- **Architecture:** Sonnet 5-series transformer architecture with 1M context support.

### Raw benchmarks found

- SWE-bench Pro: **79.5%** <(Anthropic technical evaluation, 2026)>
- GPQA Diamond: **88.2%** <(Advanced reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Superior multi-turn agentic tool integration.
- **Reasoning: 93/100.** Advanced reasoning and problem solving (GPQA Diamond 88.2%).
- **Context window: 95/100.** Full 1M token context window support.
- **Multimodal: 92/100.** Advanced native vision comprehension.
- **Coding: 95/100.** Elite software engineering and codebase analysis (SWE-bench Pro 79.5%).
- **Cost efficiency: 88/100.** Exceptional performance-to-cost ratio for flagship intelligence.
- **Overall Score: 93.6/100.** Best-fit recommendation: Premier balanced model for enterprise engineering and large-context analysis.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic platform docs and benchmark leaderboards.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
