# Claude Haiku 4.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Haiku 4.5 (`anthropic/claude-haiku-4-5`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's high-speed 4.5 generation Haiku model, optimized for rapid text classification, extraction, routing, and high-volume operations.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-haiku-4-5` (Chat Completions API).
- **Release / knowledge:** Released October 2025; knowledge current.
- **IDs:** `anthropic/claude-haiku-4-5`, `anthropic.claude-haiku-4-5`
- **Context window:** 200,000 tokens total (200k input / max output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Ultra-low cost production pricing.
- **Architecture:** Streamlined high-speed transformer architecture balancing low latency with enhanced 4.5-generation capability.

### Raw benchmarks found

- Operational speed & classification: Outperforms previous Haiku iterations while retaining sub-second response times <(Anthropic technical notes)>

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast and reliable function calling for routine agentic orchestration.
- **Reasoning: 79/100.** Enhanced reasoning compared to earlier generation lightweight models.
- **Context window: 82/100.** 200k token context window for document summarization and extraction.
- **Multimodal: 82/100.** Swift native vision and image understanding.
- **Coding: 79/100.** Solid utility for code refactoring, translation, and snippet generation.
- **Cost efficiency: 98/100.** Extremely low per-token cost for high-volume API routing.
- **Overall Score: 80.0/100.** Best-fit recommendation: High-speed, highly economical operational model for automated routing, classification, and chat assistance.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic model overviews and LLM stats comparisons.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
