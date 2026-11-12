# Claude Sonnet 4.6 — findings by Qwen 4 Max

- Source: Vendor (Anthropic) + independent trackers; subject slug `claude-sonnet-4.6`
- Date: 2026-11-12 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Sonnet 4.6 (`claude-sonnet-4-6`)
- **Short description:** Anthropic's most capable Sonnet at launch — full upgrade across coding, computer use, long-context reasoning, agent planning, knowledge work, and design; "Opus-level intelligence at a Sonnet price point." Deprecated on AA in favor of Claude Sonnet 5 (still benchmarked every 18h).
- **Provider/access:** Claude API, all Claude plans (default on Free/Pro in claude.ai + Claude Cowork at launch), Claude Code, major clouds (Bedrock/Vertex/Foundry); 4 AA-tracked providers; OpenCode catalog $3/$15 (cache read $0.30, write $3.75). Adaptive thinking AND extended thinking; strong even with thinking off; effort spectrum; context compaction (beta); web search/fetch with auto code-filtering; code execution, memory, programmatic tool calling, tool search GA. Excel add-in MCP connectors (S&P Global, LSEG, PitchBook, Moody's, FactSet…).
- **Release/knowledge:** Released February 17 2026. 1M context in beta at launch; **March 13 2026: 1M GA at standard pricing** for Opus 4.6 + Sonnet 4.6 (Cursor forum announcement). Knowledge cutoff not stated on the news page.
- **IDs:** `claude-sonnet-4-6`; OpenRouter `anthropic/claude-sonnet-4.6`.
- **Context window:** 1M tokens (AA + official; GA at standard pricing since Mar 13 — launch-era >200K premium applied only during beta, Sonnet 4.5-style $6/$22.50 per OpenCode catalog). BenchLM lists 200K — labelled conflict (stale base-tier metadata). Context compaction extends effective length.
- **Modalities:** Text + image in; text out.
- **Pricing (as of 2026-11-12, per 1M tokens):** $3.00 in / $15.00 out (unchanged from Sonnet 4.5); 90% cache discount ($0.30 hit); AA blended $2.31 (7:2:1). Deprecated but still served.
- **Architecture:** Proprietary; parameters undisclosed. Hybrid thinking model — AA/BenchLM track the **non-reasoning (High effort)** variant; vendor charts use max-effort/adaptive runs. Labelled throughout.

### Raw benchmarks found

Vendor-reported (Anthropic system card / launch table, via BenchLM citation; harness footnotes from the news page):
- SWE-bench Verified 79.6 (10-trial average; 80.2 with prompt modification), Terminal-Bench 2.0 59.1 (**thinking off**, Terminus-2, 1× guaranteed/3× ceiling, 5–15 samples), GPQA 89.9, HLE 49 (**with tools**: web search/fetch, code exec, compaction 50k→3M, max effort, adaptive thinking, domain blocklist), CharXiv 77.4 (separate PDF).
- ARC-AGI-2: max effort 58.3 (120k thinking budget); **high effort 60.4** (footnote — higher than max; labelled). MMMU-Pro implementation changed (removed "Let's think step-by-step" prefix; graded by Claude Sonnet 4 judge instead of token probabilities).
- OSWorld chart: Sonnet-line gains over 16 months; Sonnet 4.5+ use OSWorld-Verified. Prompt-injection resistance ≈ Opus 4.6, major improvement over 4.5. Vending-Bench Arena: wins via early capacity investment then profitability pivot.
- Real-world preference: Claude Code users preferred 4.6 over 4.5 ~70%, over Opus 4.5 59% (less overengineering/"laziness", fewer false success claims). Partners: Databricks (OfficeQA matches Opus 4.6), Pace (94% insurance computer-use benchmark), Box (+15pp heavy-reasoning Q&A vs 4.5), Replit/Cursor/GitHub/Cognition/Windsurf/Hebbia/Rakuten/Zapier quotes.

Independent runs:
- Artificial Analysis (non-reasoning High; live index N/A — deprecated): historical Intelligence Index 24.7; GPQA-D 79.9, AA-HLE 13.3, LCR 68.3, CritPt 0.9, τ²-bench 79.5, Omniscience −3.5 (accuracy 38.6, hallucination 68.5), IFBench 41.2, MMMU-Pro 70.6. Live performance: 53 tok/s, TTFT 1.70s (better than class median 1.92s).
- Vals AI: SWE-bench 77.4, TB2.1 57.3, LiveCodeBench 82.1, GPQA-D 85.6, MMLU-Pro 87.3, Vibe Code Bench 51.48.
- ARC Prize verified: ARC-AGI-2 58.3 (Max), ARC-AGI-1 86.0. OSWorld-Verified leaderboard 72.1; OSWorld 2.0 paper 8.3; Claw-Eval 67.8; CyberGym 65.2; Gert Labs 62.92; JobBench 36.9; SWE-Rebench 60.7; React Native Evals 80.6; CursorBench 3.1 48.8; FrontierCode 1.1 Main 24.3; ApprenticeBench 2; MazeBench 0; Design Arena 1281 (OpenRouter).
- Peer tables: SuperGPQA 95, MMLU-Pro 79.2 (Qwen3.6-Plus comparison, another lab's harness). MorphLLM SWE-V 79.6 (prior research).
- BenchLM aggregate: 55.52/100, #69 of 1026 (44/815 rows, partial coverage; labels "Non-Reasoning", 200K).

### Normalized scores (1–100)

- **Tool use: 81/100.** Computer-use flagship of its generation (OSWorld-V 72.1, τ² 79.5, Claw-Eval 67.8, CyberGym 65.2, Pace 94% insurance) but TB2.0 59.1 thinking-off and Vals TB2.1 57.3 trail Opus 4.6 (65.4) and M3-class agentic rows.
- **Reasoning: 80/100.** Vendor thinking-on HLE 49 / GPQA 89.9 / ARC-2 58.3–60.4 are strong, but the tracked non-reasoning variant collapses on independent evals (AA GPQA 79.9, HLE 13.3, CritPt 0.9, Omniscience −3.5) — hybrid discount applied.
- **Context window: 84/100.** 1M GA at standard pricing (no surcharge since Mar 13) + compaction beta, but independent LCR only 68.3 — below Sonnet 5 (89, LCR 82) and Opus 4.6 (92, MRCR 1M 76).
- **Multimodal: 74/100.** Text+image only; MMMU-Pro 70.6 (AA), CharXiv 77.4, OfficeQA ≈ Opus 4.6 per Databricks; no video/audio; design quality praised but eval rows mid-tier.
- **Coding: 82/100.** SWE-V 79.6 (Vals 77.4), SWE-Rebench 60.7, RN Evals 80.6, LCB 82.1, 70%/59% Claude Code preference wins — but TB2.0 59.1, FrontierCode 1.1 Main 24.3, CursorBench 3.1 48.8 keep it below Opus 4.6/Sonnet 5.
- **Cost efficiency: 72/100.** $3/$15 with 90% cache discount (blended $2.31) and fast TTFT 1.70s, but deprecated, 53 tok/s, and 2× the price of Sonnet 5 ($2/$10) which superseded it at higher quality.
- **Overall Score: 80.2/100.** Mean of the five quality dimensions (Cost excluded): (81+80+84+74+82)/5 = 80.2. A strong Feb-2026 workhorse now sandwiched between Opus 4.6 (84.8) and Sonnet 5 (85.2) — superseded but still cost-viable for computer-use workloads.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Anthropic launch page + system-card citations, Artificial Analysis, BenchLM, Vals/ARC Prize/OSWorld leaderboards via BenchLM, Cursor forum GA announcement); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: context (BenchLM 200K vs official/AA 1M beta→GA Mar 13); reasoning classification (non-reasoning tracked variant vs adaptive/extended thinking support); GPQA (89.9 vendor vs 79.9 AA vs 85.6 Vals — variant/harness); HLE (49 vendor with-tools max-effort vs 13.3 AA non-reasoning); ARC-2 (max 58.3 vs high 60.4 per footnote); MMMU-Pro implementation change disclosed.
- Reference URLs:
  - [Introducing Sonnet 4.6 — Anthropic](https://www.anthropic.com/news/claude-sonnet-4-6)
  - [Claude Sonnet 4.6 (Non-reasoning, High) — Artificial Analysis](https://artificialanalysis.ai/models/claude-sonnet-4-6)
  - [Claude Sonnet 4.6 Benchmark Scores — BenchLM](https://benchlm.ai/models/claude-sonnet-4-6)
  - [Claude Sonnet 4.6 system card — Anthropic (via BenchLM attribution)](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
  - [1M context GA at standard pricing (Mar 13 2026) — Cursor forum](https://forum.cursor.com/t/anthropic-just-announced-1m-context-ga-at-standard-pricing-for-opus-4-6-sonnet-4-6-when-will-cursor-reflect-this/154701)
  - [Claude Sonnet 4.6 in Production — Caylent (via search snippet)](https://caylent.com/blog/claude-sonnet-4-6-in-production-capability-safety-and-cost-explained)
  - [Vals AI — Claude Sonnet 4.6 (via BenchLM attribution)](https://www.vals.ai/models/anthropic_claude-sonnet-4-6)
  - [ARC Prize leaderboard — Sonnet 4.6 Max verified (via BenchLM attribution)](https://arcprize.org/leaderboard)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.