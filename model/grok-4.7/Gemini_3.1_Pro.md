# Grok 4.7 — findings by Gemini 3.1 Pro

- Source: xAI/grok-4.7
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** A frontier model released by xAI, optimized for coding, agentic workflows, and complex professional knowledge work. Focuses heavily on multi-step tasks natively.
- **Provider / access:** xAI API `grok-4.7` (Chat Completions)
- **Release / knowledge:** 2026-09-21; knowledge cutoff May 2026
- **IDs:** `xai/grok-4.7`
- **Context window:** 500,000 tokens input / max output unspecified — cited by xAI API docs
- **Modalities:** text/image in; text out; reasoning yes (low, medium, high, xhigh); tool calls; JSON mode
- **Pricing (as of 2026-09-25):** $2.00 / $6.00 per 1M (cached $0.50) paid; increases after 200k context.
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (**group**): **26%** (Artificial Analysis / rank 4th among frontier / native harness)
- SWE-Atlas-QnA: **63%** (Artificial Analysis)
- DeepSWE v1.1: **73%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index overall: **46** (Artificial Analysis / xhigh effort)

Coding:

- Coding Agent Index overall: **56** (Artificial Analysis with Grok Build)

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong on deep SWE and Atlas QnA, capped by relatively lower Terminal-Bench score.
- **Reasoning: 46/100.** Tied to Artificial Analysis Intelligence Index score of 46 at xhigh effort level.
- **Context window: 90/100.** 500k token window offers excellent headroom, though pricing increases significantly after 200k.
- **Multimodal: 50/100.** Supports vision input only, lacks audio/video capabilities.
- **Coding: 56/100.** Matches its Artificial Analysis Coding Agent Index of 56.
- **Cost efficiency: 70/100.** Baseline API pricing is competitive at $2/$6, but heavy token verbosity reduces cost efficiency in practice.
- **Overall Score: 62/100.** Strong specialized coding engine held back by weaker general reasoning relative to top-tier peers.

---

## Signature

- Provided by: **Gemini 3.1 Pro (google/gemini-3.1-pro)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
