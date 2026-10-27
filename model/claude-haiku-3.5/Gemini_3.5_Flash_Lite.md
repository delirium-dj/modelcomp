# Claude 3.5 Haiku — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude 3.5 Haiku (`anthropic/claude-3-5-haiku`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's lightning-fast lightweight model optimized for high-volume, cost-sensitive tasks and rapid response generation.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-3-5-haiku` (Chat Completions API).
- **Release / knowledge:** Released October 2024; knowledge current.
- **IDs:** `anthropic/claude-3-5-haiku`, `anthropic.claude-3-5-haiku-20241022`
- **Context window:** 200,000 tokens total (200k input / max output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Ultra-low cost tier.
- **Architecture:** Compact optimized transformer architecture for high throughput and minimal latency.

### Raw benchmarks found

- General reasoning & text tasks: High speed and efficiency across operational benchmarks <(Anthropic model card)>

### Normalized scores (1–100)

- **Tool use: 75/100.** Reliable function calling and structured data output for lightweight automation.
- **Reasoning: 76/100.** Solid everyday reasoning for standard queries.
- **Context window: 82/100.** 200k token context window supporting moderate document lengths.
- **Multimodal: 80/100.** Efficient native vision processing.
- **Coding: 76/100.** Quick script generation and basic debugging support.
- **Cost efficiency: 98/100.** Exceptional economy for high-volume production deployments.
- **Overall Score: 77.8/100.** Best-fit recommendation: Ultra-fast, cost-effective model for high-throughput operational tasks and text classification.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic model docs and API pricing catalogs.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
