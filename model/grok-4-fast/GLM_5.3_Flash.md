# Grok 4 Fast — findings by GLM 5.3 Flash

- Source: xAI (`grok-4-fast-reasoning` / `grok-4-fast-non-reasoning`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's cost-efficient reasoning model delivering frontier-level performance at ~98% lower cost than Grok 4, with a 2M-token context window, unified reasoning/non-reasoning architecture, and native web/X search.
- **Provider / access:** xAI API (`grok-4-fast-reasoning`, `grok-4-fast-non-reasoning`), also on OpenRouter and Vercel AI Gateway; free for all users on grok.com in Fast/Auto modes. Chat Completions API.
- **Release / knowledge:** 2025-09-19 release (model card: 2025-09-19); knowledge cutoff not stated in fetched sources.
- **IDs:** `xai/grok-4-fast-reasoning`, `xai/grok-4-fast-non-reasoning` (no Free ID exists on Zen)
- **Context window:** 2,000,000 tokens (xAI announcement; both variants).
- **Modalities:** text input; text output; reasoning yes (unified — long chain-of-thought steered via system prompt / API parameter); tool calls yes (end-to-end tool-use RL: code execution, web/X browsing, image/video ingestion via search); JSON mode supported. Enhanced multimodal was listed as future work at launch.
- **Pricing (as of 2026-09-27):** $0.20 in / $0.50 out per 1M (<128K prompt); $0.40 in / $1.00 out (≥128K); cached input $0.05 per 1M (xAI announcement pricing table). Free tier on grok.com (consumer data-usage caveats apply).
- **Architecture:** proprietary; single unified weight set for reasoning and non-reasoning modes, trained with large-scale RL for intelligence density (40% fewer thinking tokens than Grok 4 at comparable performance).

### Raw benchmarks found

> Numbers below come from xAI's Sep 19, 2025 announcement (fetched 2026-09-27) and the Vals AI SWE-bench Verified leaderboard (updated 9/1/2026, bash-only mini-swe-agent harness).

Agent / tool use:

- BrowseComp: **44.9%** (SOTA at release; Grok 4: 43.0%) (xAI announcement)
- SimpleQA: **95.0%** (Grok 4: 94.0%) (xAI announcement)
- Reka Research Eval: **66.0%** (Grok 4: 58.0%) (xAI announcement)
- BrowseComp (zh): **51.2%**; X Bench Deepsearch (zh): **74.0%**; X Browse (internal multihop search): **58.0%** (xAI announcement)
- LMArena Search Arena: **#1** — `grok-4-fast-search` (`menlo`) at **1163 Elo**, +17 over `o3-search` (xAI announcement)
- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (xAI announcement, pass@1)
- AIME 2025 (no tools): **92.0%**; HMMT 2025 (no tools): **93.3%** (xAI announcement)
- HLE (no tools): **20.0%** (Grok 4: 25.4%) (xAI announcement)
- LMArena Text Arena: **#8** — `grok-4-fast` (`tahoe`), on par with `grok-4-0709` (xAI announcement)
- Artificial Analysis: independent review verified a SOTA price-to-intelligence ratio on the AA Intelligence Index (xAI announcement, Sep 2025)

Coding:

- LiveCodeBench (Jan–May 2025): **80.0%** (Grok 4: 79.0%, GPT-5 High: 86.8%) (xAI announcement)
- SWE-bench Verified (Vals AI bash-only harness, 9/1/2026): **66 / 37 / 7 / 0%** by difficulty band (<15 min / 15m–1h / 1–4h / >4h) — weak on long tasks
- SWE-bench Verified (official): no verified public score found in fetched sources

Long context:

- "no long-context retrieval reported" — 2M window spec only; no MRCR/RULER/GraphWalks value found in fetched sources.

### Normalized scores (1–100)

- **Tool use: 82/100.** Native tool-use RL with SOTA agentic search (BrowseComp 44.9%, SimpleQA 95%, LMArena Search #1); capped by absent Terminal/Tau2 agent scores and weak long-task SWE-bench.
- **Reasoning: 84/100.** GPQA Diamond 85.7%, AIME 2025 92.0%, HMMT 93.3%; capped by HLE 20.0% and LMArena Text #8 rather than top-5.
- **Context window: 92/100.** 2M tokens — top-tier at release and still among the largest; capped only by lack of measured long-context retrieval results.
- **Multimodal: 45/100.** Text-first with image/video ingestion through search tooling; native multimodal input was explicitly future work at launch.
- **Coding: 78/100.** LiveCodeBench 80.0% is strong; capped by weak bash-only SWE-bench Verified long-task results (37/7% in the two hardest bands).
- **Cost efficiency: 92/100.** $0.20/$0.50 per 1M tokens with $0.05 cached — SOTA price-to-intelligence per Artificial Analysis (Sep 2025); extremely cheap for frontier-level quality.
- **Overall Score: 76/100.** Mean of the five quality dims (82+84+92+45+78)/5 = 76.2 → 76. Best fit: cost-sensitive agentic search and information-seeking with huge context needs.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-27
- Method: public internet research (xAI announcement + Vals AI leaderboard, fetched 2026-09-27); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
