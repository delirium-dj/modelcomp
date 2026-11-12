# Grok 4.7 — findings by Qwen 4 Max

- Source: Vendor (xAI / SpaceXSI) + independent trackers; subject slug `grok-4.7`
- Date: 2026-11-12 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Grok 4.7 (`grok-4.7`)
- **Short description:** xAI's (SpaceXSI-branded) frontier model for coding, agentic tasks, and knowledge work — "twice as fast, at half the price of comparable models"; new larger base model vs Grok 4.6 with a longer RL run on harder multi-hour tasks, better self-verification, long-context management, and native Grok Bot harness understanding; entirely new safeguard stack.
- **Provider/access:** xAI API (`grok-4.7`, Responses API; encrypted reasoning always returned), US regional endpoint `us.api.x.ai` (+10%), Grok Build (default coding-agent model), Cursor (all plans), gateways OpenRouter/Vercel/Cloudflare (3 AA-tracked providers). **Fast variant**: same model, 2× output speed at 2× token price (1.5× for long-context), Cursor/Grok Build only, not on public API, not in free tier.
- **Release/knowledge:** Released **September 21 2026** (launch post; AA FAQ). Knowledge cutoff **May 2026** (docs). Current flagship — not deprecated; succeeds Grok 4.6 (deprecated Sept 21).
- **IDs:** `grok-4.7`; distinct from Grok 4.6/4.5/4.3/4.20/4.1-Fast/4-Fast and Grok Build 0.1.
- **Context window:** **500,000 tokens**; **no text output limit** (docs). Long-context tier: prompts >200K billed at $4/$12 (cache $1.00). Context compaction supported for long agent loops; `prompt_cache_key` recommended for cache affinity.
- **Modalities:** Text + image in; text out (docs/AA). No audio/video.
- **Pricing (as of 2026-11-12, per 1M tokens):** **$2.00 in / $6.00 out, cached input $0.50 (75% discount)** ≤200K; **$4.00 / $12.00, cache $1.00** >200K (docs/BenchLM/OpenCode). AA blended $1.35 (7:2:1); **$7.77 per Intelligence Index task** (4/4 cost rating — very expensive per task).
- **Architecture:** Proprietary; parameter count undisclosed ("new, larger base model" vs 4.6). Reasoning effort **low / medium / high (default) / xhigh**; AA tracks xhigh. Tools: function calling, web search, X search, code execution.

### Raw benchmarks found

Vendor-reported (launch post; Grok 4.7 xhigh vs Grok 4.6 High / GPT-5.6 Sol Max / Fable 5.1 Max; * = high effort):
- CursorBench 4.0 **46.3%** (40.4 / 41.7 / 51.8) — "frontier price-performance"; DeepSWE v1.1 **71.0%*** (65.2 / 72.7 / 70.0); EEBench **64.0%** (53.0 / 39.4 / 56.4).
- AA Briefcase v1.1 **1,657** (1,546 / 1,487 / 1,678); Terminal-Bench 4.0 **37.6%** (20.3 / 37.3 / 57.9); Harvey Legal Agent Benchmark **19.6%** (15.8 / 2.5 / 6.7); HealthBench Professional **56.7%** (48.5 / 60.5 / 62.1).
- GDPval Elo **1,695** (xhigh) vs Fable 5.1 max 1,735, Grok 4.6 high 1,605, GPT-6 Astra max 1,542.
- Safety: LatchBio biosafety **62.4%** (top); HackerBench v0.3 only **3.3%** risky dual-use prompts allowed (highest safety, low over-refusal); invite-only red-team access for cyber-defense partners.

Independent runs:
- Artificial Analysis (xhigh, live v5.0.1): **Intelligence Index 35** (#41/74, below price-class median 40; orcarouter's "46" is an older/unstated index version — labelled), AA-HLE 43.1, LCR **76.7**, CritPt 17.7, Omniscience net **+31.2** (accuracy 42.7, **hallucination 20.0** — best-tier reliability), GDPval-AA **1,717 / normalized 60.7%**, AutomationBench-AA 65.6, GDP.pdf 20.0, ITBench 42.1, AnalystAgent 52.5, SciCode 57.4, TB4.0-AA **25.8** (vendor harness 37.6/38.0 — labelled), MLCR 20.0, MKA 40.1, Cyber Index 56.4, CWE-Bench-AA 68.3, DeepsecBench 26.9, CyberGym-E2E 74.0. Performance: **63 tok/s, TTFT 54.32s, 27.5 min/task** (notably slow; class median 12.7); **148M output tokens** (very verbose; median 72.8M).
- Vals AI: TB2.1 **73.4**. Cursor (own run): CursorBench 4.0 46.3. ARC Prize (semi-private): ARC-1 **89.5**, ARC-2 **61.4**, ARC-3 1.8 (provider adapter 7.02). Epoch FM v2: T1-3 **52.982** / T4 **17.073** (below Grok 4.6's 65.965/31.707 — labelled regression).
- Terminal-Bench 4.1 leaderboard: **38.8** (4.6: 19.7). Proximal FrontierSWE v2 29.5; Cognition FrontierCode 2.0 28.6; CWE-bench v1 68.0 / v2 54.7; Bug Hunt 29.0 fixes; Hermes Index 39.3 / Hermes Bench 74.4; MazeBench 1; Design Arena Website 1,245.
- BenchLM: 55/815 rows, **no overall score computed (unranked)**.

### Normalized scores (1–100)

- **Tool use: 85/100.** GDPval-AA normalized **60.7%** (elite, up from 4.6's 55.9%), Briefcase 1,657, AutomationBench 65.6, AnalystAgent 52.5, Harvey LAB 19.6, TB4.1 38.8 (2× 4.6), CyberGym-E2E 74.0, best-in-class safeguard stack (HackerBench 3.3%); still no OSWorld/BrowseComp/Toolathlon rows, and TB4.0-AA 25.8 trails the vendor harness number.
- **Reasoning: 82/100.** Omniscience +31.2 with **20.0% hallucination** (best-tier), AA-HLE 43.1, CritPt 17.7, EEBench 64.0, ARC-1 89.5; capped by ARC-2 **61.4** (down from 4.6's 67.1), FrontierMath v2 **53.0/17.1** (sharp regression from 66.0/31.7), live AA index 35 below the price-class median 40, and no published GPQA row.
- **Context window: 76/100.** 500K with LCR **76.7** (down from 4.6's 80.3), MLCR 20.0, no output limit and compaction support; deducted for the ≥200K 2× whole-request surcharge ($4/$12) and cache-affinity fragility; half the 1M frontier class.
- **Multimodal: 72/100.** Image input confirmed (docs/AA) but **zero standard vision benchmark rows** (no MMMU-Pro/CharXiv/ScreenSpot/Video-MME); Design Arena 1,245 Elo slightly below 4.6's 1,283; no audio/video.
- **Coding: 85/100.** CursorBench 4.0 **46.3** (up from 41.4, #2 behind Fable 5.1 in the launch table), DeepSWE v1.1 **71.0** (high effort), TB4.1 38.8 / TB4.0 37.6, Vals TB2.1 73.4, FrontierSWE v2 29.5, FrontierCode 2.0 28.6, SciCode 57.4, CWE v1 68.0, Bug Hunt 29; no SWE-V/LCB rows published (4.6 had Vals 95.6/LCB 88.2) — terminal-harness generations greatly improved, IDE/agent coding strong.
- **Cost efficiency: 72/100.** $2/$6 with 75% cache is moderately priced per token, but **148M verbose tokens → $7.77/task** (worst cost quartile), 27.5 min/task and 54.32s TTFT (63 tok/s) are notably slow; ≥200K 2× surcharge; Fast variant doubles price (Cursor/Build only); US endpoint +10%.
- **Overall Score: 80.0/100.** Mean of the five quality dimensions (Cost excluded): (85+82+76+72+85)/5 = 80.0. A coding/agentic upgrade over Grok 4.6 (80.6) on GDPval, Briefcase, CursorBench and terminal benchmarks, held back by FrontierMath/ARC-2/LCR regressions, a below-median live AA index, and extreme verbosity cost — essentially parity with its predecessor overall, below the 84+ frontier tier.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (xAI launch post + official developer docs, Artificial Analysis live xhigh page, BenchLM, Vals/Cursor/ARC Prize/Epoch/tbench/Proximal/Cognition/Collinear/Nous/MazeBench via trackers, llm-stats/orcarouter snippets); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: AA index (35 live v5.0.1 vs orcarouter 46 unstated version); TB4.0 (37.6 vendor table vs 38.0 BenchLM-carried vendor vs 25.8 AA harness); GDPval (1,695 vendor Elo vs 1,717 AA); DeepSWE 71.0 high-effort vs 4.6's 65.9 (different effort/run); CursorBench 4.0 (46.3 Cursor-run vs 4.6's 40.4 vendor-table/41.4 Cursor-run); FM v2 and ARC-2 regressions vs 4.6 kept as separate runs; Harvey LAB 19.6 (v1.0 vendor) vs Muse Spark Open's 25.4 (Vals harness) not comparable.
- Reference URLs:
  - [Introducing Grok 4.7 — xAI news](https://x.ai/news/grok-4-7)
  - [Grok 4.7 Developer Guide — xAI docs](https://docs.x.ai/developers/grok-4-7)
  - [Grok 4.7 (xhigh) — Artificial Analysis](https://artificialanalysis.ai/models/grok-4-7)
  - [Grok 4.7 Benchmark Scores — BenchLM](https://benchlm.ai/models/grok-4-7)
  - [Grok 4.7 — Vals AI](https://www.vals.ai/models/grok_grok-4.7)
  - [Grok 4.7 — ARC Prize results](https://arcprize.org/results/xai-grok-4-7)
  - [Grok 4.7 — llm-stats](https://llm-stats.com/models/grok-4.7)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.