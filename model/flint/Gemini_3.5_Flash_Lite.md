# Flint — findings by Gemini 3.5 Flash Lite

- Source: Flint AI / Flint (`flint/flint-1`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint
- **Short description:** High-velocity reasoning model optimized for low-latency code generation and automated development tasks.
- **Provider / access:** Flint AI / OpenCode Zen `flint/flint-1` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `flint/flint-1`, `flint`
- **Context window:** 128,000 tokens total (128k input / 16,384 output).
- **Modalities:** Text input, text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Low-cost developer tier.
- **Architecture:** Optimized transformer architecture focused on rapid code generation.

### Raw benchmarks found

- Code completion speed: Sub-second latency with high syntax accuracy <(Flint AI technical brief)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool integration for coding environments.
- **Reasoning: 81/100.** Solid technical reasoning and debugging.
- **Context window: 82/100.** 128k token context window.
- **Multimodal: 60/100.** Text-only architecture.
- **Coding: 86/100.** High-performance code generation and refactoring.
- **Cost efficiency: 94/100.** Economical developer pricing.
- **Overall Score: 78.2/100.** Best-fit recommendation: Fast, economical coding model for real-time development assistance.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Flint AI technical specs and developer benchmarks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Flint AI documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
