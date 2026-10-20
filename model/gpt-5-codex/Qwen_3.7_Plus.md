# GPT-5 Codex — findings by Qwen 3.7 Plus

- Source: OpenAI (`gpt-5-codex`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI's first-generation GPT-5 coding specialist, optimized for repo-scale agentic coding within the Codex offering. Achieved 1st place on Terminal-Bench and SWE-bench Verified at launch. Superseded by GPT-5.1-Codex and GPT-5.2-Codex.
- **Provider / access:** OpenAI API (Responses API); OpenRouter `openai/gpt-5-codex`. OpenCode Zen `opencode/gpt-5-codex`.
- **Release / knowledge:** September 2025; knowledge cutoff not publicly stated.
- **IDs:** `opencode/gpt-5-codex` (OpenCode Zen), `openai/gpt-5-codex` (OpenRouter).
- **Context window:** 128K per meta.json (scaffolded — likely outdated; GPT-5.1-Codex has 400K, GPT-5 Codex may be similar).
- **Modalities:** Text in/out; reasoning mode supported; tool calling; function calling.
- **Pricing (as of 2026-10-20):** $1.25/1M input, $10.00/1M output (per OpenAI API pricing — same tier as GPT-5.1-Codex-Max).
- **Architecture:** Proprietary; coding-optimized variant of GPT-5; exact parameter count not disclosed.

### Raw benchmarks found

> Sources: Vals AI (vals.ai/models/openai_gpt-5-codex, 2025-09-24), SWE-bench leaderboard, tbench.ai. Coverage note: Limited independent benchmark coverage. Vals AI evaluation from launch period.

Agent / tool use:

- Terminal-Bench: **58.8%** (Vals AI — 1st place at launch, 10% improvement over GPT-5)

Reasoning / knowledge:

- No individual reasoning benchmark scores found (GPQA, HLE, CritPt not reported for this specific model)

Coding:

- Terminal-Bench: **58.8%** (Vals AI — 1st place at launch)
- SWE-bench Verified: **~72-74%** estimated (Vals AI — 1st place, narrowly beating GPT-5 by <1 percentage point)
- IOI v1: **9.8%** overall (Vals AI — first model to receive full credit on a single question)
- LiveCodeBench: 2nd place (Vals AI — behind GPT-5 Mini)

Multimodal & Grounded:

- No multimodal benchmark scores found.

Long context:

- No long-context retrieval benchmarks found.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Note: Sparse benchmark coverage from launch period (September 2025).

- **Tool use: 65/100.** Terminal-Bench 58.8% was 1st place at launch. Strong agentic coding in terminal environments. However, no τ-bench, MCP Atlas, or BrowseComp scores. Capped by limited tool-use benchmark coverage.
- **Reasoning: 50/100.** No individual reasoning benchmarks found. As a coding specialist, reasoning capability is expectedly narrower than general-purpose models. IOI v1 9.8% shows limited competition math. Capped by absence of reasoning benchmark evidence.
- **Context window: 75/100.** Meta.json says 128K (scaffolded, may be outdated). If 128K: adequate but below frontier. No long-context retrieval benchmarks. Docked 25 for limited context and no verification.
- **Multimodal: 15/100.** Text-only model. No multimodal benchmark scores found.
- **Coding: 75/100.** Terminal-Bench 58.8% (1st at launch). SWE-bench Verified ~72-74% (1st at launch, narrowly beating GPT-5). IOI v1 9.8% shows some competition coding ability. LiveCodeBench 2nd place. However, model is now superseded by GPT-5.1/5.2-Codex. Capped by superseded status and moderate IOI score.
- **Cost efficiency: 55/100.** $1.25/$10.00 per 1M is expensive for a superseded model. Same pricing as GPT-5.1-Codex-Max which is significantly more capable.
- **Overall Score: 56/100.** Mean of five non-cost dims: (65 + 50 + 75 + 15 + 75) / 5 = 56. First-generation GPT-5 coding specialist that achieved 1st place on Terminal-Bench (58.8%) and SWE-bench Verified (~72-74%) at launch, but now superseded by GPT-5.1/5.2-Codex generations. Text-only, limited reasoning evidence, expensive pricing for current capabilities. Best fit for: legacy Codex workflows and historical baseline comparison.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across Vals AI, SWE-bench leaderboard, tbench.ai, OpenAI developer docs, and OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
