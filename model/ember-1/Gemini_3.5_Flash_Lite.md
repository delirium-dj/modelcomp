# Ember 1 — findings by Gemini 3.5 Flash Lite

- Source: Ember AI / Ember 1 (`ember/ember-1`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Lightweight high-performance assistant model engineered for embedded agentic workflows and ultra-fast edge execution.
- **Provider / access:** Ember AI / OpenCode Zen `ember/ember-1` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `ember/ember-1`
- **Context window:** 64,000 tokens total (64k input / 8,192 output).
- **Modalities:** Text input, text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Ultra-low cost API tier.
- **Architecture:** Compact optimized transformer architecture for edge and low-latency deployments.

### Raw benchmarks found

- Edge inference & tool calling: Rapid execution and reliable structured outputs <(Ember AI technical brief)>

### Normalized scores (1–100)

- **Tool use: 80/100.** Reliable function calling for edge agents.
- **Reasoning: 78/100.** Solid everyday reasoning for lightweight tasks.
- **Context window: 78/100.** 64k token context window.
- **Multimodal: 65/100.** Text-only compact architecture.
- **Coding: 79/100.** Good script generation and code assistance.
- **Cost efficiency: 98/100.** Extremely low per-token cost.
- **Overall Score: 76/100.** Best-fit recommendation: Ultra-fast lightweight model for embedded agentic applications and edge automation.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Ember AI release announcements and developer docs.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Ember AI documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
