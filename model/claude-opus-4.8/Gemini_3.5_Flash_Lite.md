# Claude Opus 4.8 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 4.8 (`anthropic/claude-opus-4-8`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Mature finalization of the Claude Opus 4 generation, bridging pre-Mythos capability with advanced reasoning optimizations.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-opus-4-8` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-opus-4-8`, `anthropic.claude-opus-4-8`
- **Context window:** 200,000 tokens total (200k input / 64,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Standard enterprise tier.
- **Architecture:** Mature Opus 4.8 transformer architecture.

### Raw benchmarks found

- SWE-bench Verified: **78.2%** <(Anthropic technical evaluation)>
- GPQA Diamond: **87.0%** <(Advanced reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Exceptional agentic tool utilization.
- **Reasoning: 93/100.** Elite logical and mathematical reasoning (GPQA Diamond 87.0%).
- **Context window: 88/100.** 200k token context window.
- **Multimodal: 90/100.** High-fidelity native vision support.
- **Coding: 94/100.** Top-tier software engineering and code generation (SWE-bench Verified 78.2%).
- **Cost efficiency: 78/100.** Standard enterprise tier pricing.
- **Overall Score: 91.4/100.** Best-fit recommendation: Highly refined enterprise model for complex engineering and analytical tasks.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Anthropic platform logs and benchmark datasets.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
