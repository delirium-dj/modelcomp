# Claude Fable 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Fable 5 (`anthropic/claude-fable-5`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's initial Mythos-class public model, introducing advanced long-context reasoning, adaptive thinking, and agentic capabilities.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-fable-5` (Chat Completions API).
- **Release / knowledge:** Released June 9, 2026; knowledge current.
- **IDs:** `anthropic/claude-fable-5`, `anthropic.claude-fable-5`
- **Context window:** 1,000,000 tokens total (1M input / 128,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode; adaptive thinking.
- **Pricing (as of 2026-10-27):** Premium tier pricing.
- **Architecture:** Mythos-class transformer architecture with adaptive reasoning and long-context optimization.

### Raw benchmarks found

- Terminal-Bench-Science 0.1: **24.7%** <(Anthropic technical evaluation)>
- Terminal-Bench 4.0: **42.0%** <(Terminal-Bench evaluation suite)>
- SWE-bench Pro: **76.5%** <(Software engineering benchmark)>

### Normalized scores (1–100)

- **Tool use: 92/100.** High-performance agentic tool integration and multi-step execution.
- **Reasoning: 93/100.** Advanced reasoning and multi-domain problem solving.
- **Context window: 95/100.** Full 1-million-token context window with stable long-range memory.
- **Multimodal: 90/100.** Robust native vision and document comprehension.
- **Coding: 94/100.** Advanced code generation and debugging for complex architectures (SWE-bench Pro 76.5%).
- **Cost efficiency: 75/100.** Premium pricing for high-end frontier intelligence.
- **Overall Score: 92.8/100.** Best-fit recommendation: Powerful Mythos-class precursor model for complex reasoning and agentic workflows.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic release announcements and Caylent evaluation notes.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
