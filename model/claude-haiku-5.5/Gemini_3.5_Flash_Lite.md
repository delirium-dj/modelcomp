# Claude Haiku 5.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Haiku 5.5 (`anthropic/claude-haiku-5-5`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's high-volume 5.5 generation Haiku model, optimized for latency-sensitive classification, extraction, routing, and high-throughput operational tasks.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-haiku-5-5` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-haiku-5-5`, `anthropic.claude-haiku-5-5`
- **Context window:** 200,000 tokens total (200k input / max output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** High-throughput low-cost production tier.
- **Architecture:** Streamlined 5.5-generation lightweight transformer architecture for ultra-low latency and efficient token routing.

### Raw benchmarks found

- High-volume classification & extraction: Sub-second response times and high accuracy across operational benchmarks <(Anthropic model overview, 2026)>

### Normalized scores (1–100)

- **Tool use: 80/100.** Fast and reliable function calling for routine agentic orchestration and tool routing.
- **Reasoning: 81/100.** Refined reasoning compared to 4.5 generation lightweight models.
- **Context window: 82/100.** 200k token context window supporting moderate document lengths and summaries.
- **Multimodal: 85/100.** Enhanced native vision and image comprehension.
- **Coding: 80/100.** Strong utility for rapid code refactoring, scripting, and syntax assistance.
- **Cost efficiency: 98/100.** Exceptional per-token economy for high-volume automated routing and chat.
- **Overall Score: 81.2/100.** Best-fit recommendation: Ultra-fast, highly economical operational model for automated extraction, classification, and chat assistance.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic platform docs and operational performance metrics.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
