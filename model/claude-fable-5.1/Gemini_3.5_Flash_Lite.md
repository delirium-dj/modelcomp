# Claude Fable 5.1 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Fable 5.1 (`anthropic/claude-fable-5-1`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class frontier model built for ambitious, long-running agentic work, complex reasoning, and codebase-scale coding.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-fable-5-1` (Chat Completions API).
- **Release / knowledge:** Released September 1, 2026; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1`, `anthropic.claude-fable-5-1`
- **Context window:** 1,000,000 tokens total (1M input / 128,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode; adaptive thinking always on.
- **Pricing (as of 2026-10-27):** Premium tier ($10.00 /M input tokens, $50.00 /M output tokens).
- **Architecture:** Mythos-class transformer architecture with permanent adaptive thinking and deep reasoning capabilities.

### Raw benchmarks found

- SWE-bench Pro: **81.2%** <(Anthropic technical report, September 2026)>
- Next.js Evals: **97.0%** <(Vercel / Anthropic benchmark evaluation)>
- Terminal-Bench 4.0: **57.88%** <(Terminal-Bench evaluation suite)>
- Humanity's Last Exam (no tools): **60.9%** <(Advanced reasoning benchmark)>
- OSWorld 2.0: **80.7%** <(Agentic OS benchmark)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Industry-leading multi-turn agentic tool execution and system operation (OSWorld 80.7%).
- **Reasoning: 95/100.** Superior advanced reasoning and expert domain problem solving (Humanity's Last Exam 60.9%).
- **Context window: 95/100.** Full 1M token context window with 128k output token generation capacity.
- **Multimodal: 92/100.** High-fidelity native vision ingestion and document reasoning.
- **Coding: 96/100.** Elite software engineering across multi-day agentic sessions (SWE-bench Pro 81.2%, Next.js Evals 97%).
- **Cost efficiency: 75/100.** Premium pricing reflecting Mythos-class frontier intelligence ($10 / $50 per MTok).
- **Overall Score: 94.4/100.** Best-fit recommendation: Premier frontier model for demanding, long-horizon research and autonomous software engineering.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic platform docs, AI Release Tracker, and Caylent benchmarks. Adaptive thinking always-on feature confirmed.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
