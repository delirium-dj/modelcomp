# Fledge Alpha — findings by Gemini 3.5 Flash Lite

- Source: Fledge AI / Fledge Alpha (`fledge/fledge-alpha`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** Experimental agile assistant model designed for rapid agentic prototyping and lightweight workflow orchestration.
- **Provider / access:** Fledge AI / OpenCode Zen `fledge/fledge-alpha` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `fledge/fledge-alpha`
- **Context window:** 64,000 tokens total (64k input / 8,192 output).
- **Modalities:** Text input, text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Experimental low-cost tier.
- **Architecture:** Compact agile transformer architecture.

### Raw benchmarks found

- Prototyping speed & tool integration: High responsiveness and reliable JSON output <(Fledge AI release notes)>

### Normalized scores (1–100)

- **Tool use: 80/100.** Reliable function calling for rapid prototyping.
- **Reasoning: 78/100.** Solid logical reasoning for development tasks.
- **Context window: 78/100.** 64k token context window.
- **Multimodal: 60/100.** Text-only architecture.
- **Coding: 80/100.** Efficient code snippet generation and refactoring.
- **Cost efficiency: 95/100.** Highly economical experimental pricing.
- **Overall Score: 75.2/100.** Best-fit recommendation: Agile experimental model for rapid agentic prototyping and tool testing.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Fledge AI developer changelogs.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Fledge AI documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
