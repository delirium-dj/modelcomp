# Grok 4 Fast — findings by Gemini 3.8 Flash

- Source: xAI / Grok (`xai/grok-4-fast`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's high-speed cost-efficient reasoning model with a 2M-token context window, unified reasoning/non-reasoning modes, and integrated real-time search on the web and X.
- **Provider / access:** xAI API (`grok-4-fast-reasoning`, `grok-4-fast-non-reasoning`), grok.com, and OpenRouter.
- **Release / knowledge:** 2025-09-19 release; knowledge cutoff mid-2025.
- **IDs:** `xai/grok-4-fast`. Free tier available on grok.com.
- **Context window:** 2,000,000 tokens total (2M context window).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; deep web and social search.
- **Pricing (as of 2025-09):** $0.20 / 1M input tokens (<128K) or $0.40 (≥128K); $0.50 / 1M output tokens (<128K) or $1.00 (≥128K); $0.05 / 1M cached input.
- **Architecture:** Unified transformer architecture with RL-driven token efficiency and dynamic test-time compute scaling.

### Raw benchmarks found

Agent / tool use:

- LMArena Search Arena: **#1** with **1163** Elo (xAI blog, Sep 2025)
- BrowseComp: **44.9%** (xAI blog, Sep 2025)
- Reka Research Eval: **66.0%** (xAI blog, Sep 2025)
- SimpleQA: **95.0%** (xAI blog, Sep 2025)
- Terminal-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (xAI blog, Sep 2025)
- AIME 2025 (no tools): **92.0%** (xAI blog, Sep 2025)
- HMMT 2025 (no tools): **93.3%** (xAI blog, Sep 2025)
- Humanity's Last Exam (HLE, no tools): **20.0%** (xAI blog, Sep 2025)

Coding:

- LiveCodeBench (Jan–May): **80.0%** (xAI blog, Sep 2025)
- SWE-bench Verified: no verified public score found

Long context:

- 2,000,000 token context window evaluated with long-range reasoning and multihop search over extensive document corpuses.

### Normalized scores (1–100)

- **Tool use: 84/100.** Exceptional search agent proficiency (#1 on LMArena Search Arena with 1163 Elo, 95% SimpleQA, 44.9% BrowseComp), capped by lack of dedicated coding OS environments like Terminal-Bench.
- **Reasoning: 86/100.** High-level mathematical and scientific problem solving (92.0% AIME 2025, 85.7% GPQA Diamond, 93.3% HMMT), balanced by 20.0% on HLE.
- **Context window: 95/100.** Massive 2M token context tier with high token density and low cost.
- **Multimodal: 75/100.** Multimodal image understanding and media search ingestion on X and web, without native audio/video generation.
- **Coding: 82/100.** Strong competitive programming capability reflected by 80.0% on LiveCodeBench.
- **Cost efficiency: 96/100.** Outstanding value at $0.20 / $0.50 per 1M tokens ($0.05 cached) alongside free consumer access on grok.com.
- **Overall Score: 84/100.** Ultra-fast 2M-context agent and reasoning model with best-in-class real-time web search and mathematical reasoning.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into xAI official announcements, system card metrics, and independent evaluation leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
