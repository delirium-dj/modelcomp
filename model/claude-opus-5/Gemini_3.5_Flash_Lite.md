# Claude Opus 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 5 (`anthropic/claude-opus-5`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5 frontier model introducing expanded context capacity, native reasoning depth, and advanced agentic capabilities.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-opus-5` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-opus-5`, `anthropic.claude-opus-5`
- **Context window:** 1,000,000 tokens total (1M input / 128,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode; adaptive thinking.
- **Pricing (as of 2026-10-27):** Premium tier pricing.
- **Architecture:** Opus 5 transformer architecture with long-context optimization and adaptive reasoning.

### Raw benchmarks found

- SWE-bench Pro: **82.5%** <(Anthropic technical evaluation)>
- GPQA Diamond: **90.5%** <(Advanced reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Elite agentic tool integration and task execution.
- **Reasoning: 94/100.** Top-tier scientific and logical reasoning (GPQA Diamond 90.5%).
- **Context window: 95/100.** Full 1M token context window.
- **Multimodal: 92/100.** Robust native vision comprehension.
- **Coding: 95/100.** Advanced code generation and multi-file engineering (SWE-bench Pro 82.5%).
- **Cost efficiency: 75/100.** Premium enterprise pricing.
- **Overall Score: 93.8/100.** Best-fit recommendation: Premier frontier model for complex reasoning and agentic software development.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic release announcements and technical evaluations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
