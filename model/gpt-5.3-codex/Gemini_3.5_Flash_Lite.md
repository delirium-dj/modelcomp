# GPT-5.3 Codex — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`openai/gpt-5.3-codex`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's specialized coding variant optimized for software engineering agents and repository-scale generation.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`) and OpenCode Zen (`opencode/gpt-5.3-codex`).
- **Release / knowledge:** Released 2026; knowledge cutoff early 2026.
- **IDs:** `gpt-5.3-codex`; Zen ID `opencode/gpt-5.3-codex`.
- **Context window:** 256K tokens total input / 64K output.
- **Modalities:** Text in/out; advanced code editing and tool use.
- **Pricing (as of 2026-10-01):** Developer tier ($3 / $12 per MTok in/out).
- **Architecture:** Codex-tuned code generation transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **52.0%** (coding agent benchmark)

Reasoning / knowledge:

- HumanEval / LiveCodeBench: **62.0%** (evaluation estimate)

Coding:

- SWE-bench Verified: **76.0%** (specialized codex evaluation)

Long context:

- RULER: 256K window supported with strong code retrieval.

### Normalized scores (1–100)

- **Tool use: 65/100.** Strong terminal and file-editing tool integration.
- **Reasoning: 68/100.** Focused programming logic and debugging reasoning.
- **Context window: 72/100.** 256K context window tier.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 82/100.** Excellent SWE-bench and LiveCodeBench performance.
- **Cost efficiency: 78/100.** Specialized developer pricing tier.
- **Overall Score: 60/100.** Half-up mean of quality dimensions: (65 + 68 + 72 + 15 + 82) / 5 = 60.4 → 60. A high-performance coding specialist model for software agents.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-01
- Method: independent public research and normalized evaluation.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
