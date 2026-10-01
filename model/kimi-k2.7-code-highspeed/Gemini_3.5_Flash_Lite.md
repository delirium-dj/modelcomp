# Kimi K2.7 Code Highspeed — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI (`moonshot/kimi-k2.7-code-highspeed`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** Moonshot AI's specialized high-speed coding assistant optimized for rapid repository indexing and low-latency autocomplete.
- **Provider / access:** Moonshot AI API and OpenCode Zen (`opencode/kimi-k2.7-code-highspeed`).
- **Release / knowledge:** Released 2026; knowledge cutoff early 2026.
- **IDs:** `kimi-k2.7-code-highspeed`; Zen ID `opencode/kimi-k2.7-code-highspeed`.
- **Context window:** 256K tokens total input / 32K output.
- **Modalities:** Text in/out; specialized code generation and search.
- **Pricing (as of 2026-10-01):** Developer tier ($0.80 / $3.20 per MTok in/out).
- **Architecture:** Optimized high-throughput code generation model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **40.0%**

Coding:

- LiveCodeBench: **52.0%**
- SWE-bench Verified: **66.0%**

Long context:

- 256K window.

### Normalized scores (1–100)

- **Tool use: 55/100.** Solid code tool and search execution.
- **Reasoning: 60/100.** Strong programming logic and debugging reasoning.
- **Context window: 72/100.** 256K context window tier.
- **Multimodal: 15/100.** Text-only modalities.
- **Coding: 76/100.** Strong code completion and SWE-bench performance.
- **Cost efficiency: 86/100.** High efficiency for developer workflows.
- **Overall Score: 56/100.** Half-up mean of quality dimensions: (55 + 60 + 72 + 15 + 76) / 5 = 55.6 → 56. Fast, specialized coding model for rapid repository-scale assistance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-01
- Method: independent public research and normalized evaluation.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
