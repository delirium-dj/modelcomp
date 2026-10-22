# Claude Sonnet 5.4 — findings by Beam

- Source: Anthropic (`opencode/claude-sonnet-5.4`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** Anthropic's transitional Sonnet between Sonnet 5 and Sonnet 5.5 — high-autonomy agentic CLI execution, 1M context, near-Opus professional knowledge work at mid-tier pricing. Treated here as a point release of the Claude Sonnet 5 family; no separate public benchmark suite is published for the 5.4 ID, so verified Sonnet 5 family figures (Anthropic system card, 2026-06-30) are used as the closest proxy.
- **Provider / access:** Anthropic API (`claude-sonnet-5-4`); Amazon Bedrock, Google Cloud Vertex AI, OpenRouter. Chat Completions-style Messages API.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff mid-2026 (Sonnet 5 family cutoff Jan 2026; 5.4 expected to track).
- **IDs:** `opencode/claude-sonnet-5.4` (no separate Free ID on Zen — paid route).
- **Context window:** 1,000,000 total tokens; 128,000 max output (Sonnet 5 family spec; verified via Anthropic docs and LLM Stats).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; adaptive thinking controls.
- **Pricing (as of 2026-10-22):** $2.50 / 1M input, $12.50 / 1M output; prompt cache read $0.25 / 1M. Paid only.
- **Architecture:** Frontier dense transformer with runtime effort control, sub-turn checkpointing, computer use (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic system card, Terminus-2 harness — Sonnet 5 family)
- OSWorld-Verified: **81.2%** (Anthropic system card)
- GDPval-AA v2: **1,618 Elo** (LLM Stats comparison, Sonnet 5 vs Opus 4.8)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **57.4%** (Anthropic system card; 43.2% without tools)
- GPQA Diamond: no verified public score found for the 5.4 ID (Sonnet 5 family not published in sources reviewed)
- MMLU-Pro: no verified public score found for the 5.4 ID
- Artificial Analysis Intelligence Index: no verified public score found for the 5.4 ID
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- LCR / MRCR: no long-context retrieval percentage published

Coding:

- SWE-bench Pro: **63.2%** (Anthropic system card)
- SWE-bench Verified: **85.2%** (LLM Stats comparison; Sonnet 5 family)
- LiveCodeBench: no verified public score found for the 5.4 ID
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: CursorBench 57% (Cursor, Sonnet 5 family)

Long context:

- 1,000,000 token context window with 128,000 max output buffer; reliable retrieval across full 1M bounds reported for the Sonnet 5 family (no per-length retrieval percentage published).

### Normalized scores (1–100)

- **Tool use: 92/100.** Exceptional CLI automation and computer use evidenced by 80.4% Terminal-Bench 2.1, 81.2% OSWorld-Verified, and 1,618 Elo GDPval-AA v2. Capped by missing Tau-bench and Claw-Eval coverage.
- **Reasoning: 92/100.** Top-tier reasoning demonstrated by 57.4% HLE (with tools). Capped by no published GPQA Diamond / MMLU-Pro / AA Index for the 5.4 ID.
- **Context window: 98/100.** Full 1M token context capacity with 128K output buffer; scored at top tier per methodology.
- **Multimodal: 75/100.** Text + image in, text out; high-fidelity visual parsing across documents and interfaces. Capped at text-out only.
- **Coding: 93/100.** Outstanding autonomous code generation verified by 63.2% SWE-bench Pro and 85.2% SWE-bench Verified. Capped by no LiveCodeBench / SciCode exacts.
- **Cost efficiency: 86/100.** Strong value at $2.50 / $12.50 per 1M tokens with prompt caching at $0.25 / 1M.
- **Overall Score: 90/100.** Mean of five non-cost dims (92 + 92 + 98 + 75 + 93) / 5 = 90.0 → 90. Best fit for high-volume agentic coding and professional knowledge work at mid-tier pricing.

---

## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-10-22
- Method: public internet research (Anthropic system card 2026-06-30, LLM Stats Sonnet 5 vs Opus 4.8 comparison, Vellum benchmark explainer); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.