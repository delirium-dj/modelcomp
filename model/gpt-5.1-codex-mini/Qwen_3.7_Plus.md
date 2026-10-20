# GPT-5.1 Codex Mini — findings by Qwen 3.7 Plus

- Source: OpenAI (`gpt-5.1-codex-mini`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI's compact, cost-effective coding model from the GPT-5.1 generation. A smaller variant of GPT-5.1-Codex optimized for budget-conscious agentic coding workflows. Superseded by GPT-5.2-Codex; deprecated. Released November 2025.
- **Provider / access:** OpenAI API (Responses API only); OpenRouter `openai/gpt-5.1-codex-mini`. OpenCode Zen `opencode/gpt-5.1-codex-mini`.
- **Release / knowledge:** November 2025; knowledge cutoff September 30, 2024.
- **IDs:** `opencode/gpt-5.1-codex-mini` (OpenCode Zen), `openai/gpt-5.1-codex-mini` (OpenRouter).
- **Context window:** 400,000 tokens (400K); 128K max output (per OpenAI docs).
- **Modalities:** Text and image in; text out; reasoning mode enabled; function calling; web search tool supported.
- **Pricing (as of 2026-10-20):** $0.25/1M input, $0.025/1M cached input, $2.00/1M output (per OpenAI API pricing).
- **Architecture:** Proprietary; smaller variant of GPT-5.1-Codex; exact parameter count not disclosed.

### Raw benchmarks found

> Sources: OpenAI developer docs, Artificial Analysis (artificialanalysis.ai, estimated), OpenRouter benchmarks, SWE-bench leaderboard, tbench.ai. Coverage note: Very limited independent benchmark coverage. AA Intelligence Index is estimated (independent evaluation forthcoming).

Agent / tool use:

- Terminal-Bench 2.1 (tbench.ai): **61.6% ± 1.9%** (tbench.ai — moderate agentic coding)
- Function calling and web search supported (OpenAI docs)

Reasoning / knowledge:

- AA Intelligence Index: **~20** (Artificial Analysis — estimated, #53/173 in class — above average for price range)
- No individual reasoning benchmark scores found (GPQA, HLE, CritPt not reported)

Coding:

- LiveCodeBench: **83.6%** (Artificial Analysis via OpenRouter — excellent competitive programming)
- Terminal-Bench Hard: **33.3%** (Artificial Analysis — weak on hard terminal tasks)
- SWE-bench Verified (medium, mini-SWE-agent): **~66.0%** (SWE-bench leaderboard — moderate)
- Terminal-Bench 2.1: **61.6%** (tbench.ai)

Multimodal & Grounded:

- No multimodal benchmark scores found. Model supports image input per specification.

Long context:

- No long-context retrieval benchmarks found. 400K context per specification.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Note: Very sparse benchmark coverage means scores carry high uncertainty.

- **Tool use: 62/100.** Terminal-Bench 2.1 61.6% shows moderate agentic capability. Function calling and web search are supported. However, Terminal-Bench Hard 33.3% is weak. No τ-bench or MCP Atlas scores. Capped by weak hard terminal performance and limited tool-use benchmark coverage.
- **Reasoning: 50/100.** AA Intelligence Index ~20 is above average for its price class (#53/173) but low in absolute terms. No individual reasoning benchmarks found (GPQA, HLE, CritPt not reported). As a "mini" model, reasoning capability is expectedly limited. Capped by low Intelligence Index and absence of reasoning benchmark evidence.
- **Context window: 85/100.** 400K tokens with 128K max output — solid. Same window as GPT-5.1-Codex-Max. No long-context retrieval benchmarks to verify effectiveness. Docked 15 for no LCR/MRCR/RULER evidence.
- **Multimodal: 25/100.** Supports text and image input per specification. However, no multimodal benchmark scores found. Score reflects claimed capability with high uncertainty. Capped by complete absence of multimodal benchmark evidence.
- **Coding: 65/100.** LiveCodeBench 83.6% is excellent — matches GPT-5.1-Codex-Max. SWE-bench Verified ~66.0% is moderate. Terminal-Bench 2.1 61.6% is moderate. Terminal-Bench Hard 33.3% is weak. Capped by moderate SWE-bench and weak hard terminal performance.
- **Cost efficiency: 85/100.** $0.25/$2.00 per 1M is budget-friendly. Cached input at $0.025 is very cheap. 5x cheaper input than GPT-5.1-Codex-Max. Good value for coding tasks where mini suffices.
- **Overall Score: 57/100.** Mean of five non-cost dims: (62 + 50 + 85 + 25 + 65) / 5 = 57.4, half-up = 57. Budget coding model with excellent LiveCodeBench (83.6%) and 400K context at $0.25/$2.00 per 1M, but limited by weak reasoning (Intelligence Index ~20), moderate SWE-bench (~66%), poor Terminal-Bench Hard (33.3%), and no multimodal verification. Deprecated in favor of GPT-5.2-Codex. Best fit for: cost-sensitive competitive programming, lightweight agentic coding, and budget-conscious development workflows.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across OpenAI developer docs, Artificial Analysis, OpenRouter, SWE-bench leaderboard, tbench.ai, and llmapi.ai; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
