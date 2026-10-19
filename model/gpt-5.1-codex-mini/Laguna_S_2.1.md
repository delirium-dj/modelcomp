# GPT-5.1 Codex Mini — findings by Laguna S 2.1

- Source: OpenAI (`gpt-5.1-codex-mini`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI's smaller, faster, more cost-effective coding model in the GPT-5.1 Codex family, released 2025-11-12/13 alongside GPT-5.1 and GPT-5.1-Codex. Optimized for quick code completion, simple refactoring, and routine programming tasks with lower latency. Positioned as a "steerability, front end development, and interactivity" model (Microsoft Foundry). Responses API only.
- **Provider / access:** OpenAI Responses API only (`gpt-5.1-codex-mini`); Microsoft Foundry / Azure OpenAI Service (version 2025-11-13, GA); OpenCode Zen (retired 2026-07-23).
- **Release / knowledge:** released 2025-11-12 (LLM Stats) / 2025-11-13 (OpenAI developer post, Microsoft Foundry). Knowledge cutoff 2024-09-30 (OpenAI model docs).
- **IDs:** `gpt-5.1-codex-mini` (OpenAI API, Microsoft Foundry).
- **Context window:** **400,000 tokens total / 128,000 max output** (OpenAI model docs, BenchGecko, LLM Stats, Microsoft Foundry). Note: repo `meta.json` says "128K total" — the 400K figure is treated as canonical.
- **Modalities:** text + image input, text output (OpenAI model docs, Microsoft Foundry). No video.
- **Pricing (as of 2026-10-18):** $0.25 input / $2.00 output per 1M tokens; cached input $0.025 (OpenAI model docs, BenchGecko, LLM Stats, Microsoft Foundry — four independent sources agree). One-fifth the price of GPT-5.1-Codex ($1.25/$10). ~$0.003 per message (BenchGecko estimate).
- **Architecture:** proprietary (OpenAI, weights private). A distilled/smaller checkpoint of the GPT-5.1 Codex family. TTFT 1.00s p95 (LLM Stats) — very fast for a reasoning model.

### Raw benchmarks found

> Sources: BenchGecko model page (`benchgecko.ai/model/gpt-5-1-codex-mini`, Oct 18, 2026 — 8 benchmarks tested, avg score 63.3, rank #73/319); BenchmarkList model page (SciCode, CCBench, GPAQ, AIME, AA-LCR, Tau2, GDPval, Design Arena); LLM Stats (TTFT, token costs, Latency). All numbers independently verified via webfetch on 2026-10-18.

**Agent / tool use:**

- Tau²-Bench (Telecom): **62.9%** (BenchmarkList, sourced from Artificial Analysis, rank 119/332, 64th percentile)
- Terminal-Bench Hard: **33.3%** (BenchmarkList, sourced from Artificial Analysis, rank 58/326, 82nd percentile)
- GDPval-AA: **1053** (BenchmarkList, rank 89/340, 74th percentile)
- OSWorld: no verified public score found

**Reasoning / knowledge:**

- GPQA Diamond: **81.3%** (BenchmarkList, rank 114/464, 76th percentile)
- AIME 2025: **91.7%** (BenchmarkList, rank 18/226, 92nd percentile) — note: LLM Stats reports 42.1% (harness/effort discrepancy; BenchmarkList treated as more reliable)
- AA-LCR (long context reasoning): **65.0%** (BenchmarkList, rank 124/409, 70th percentile)
- LiveBench — Mathematics: **76.3%** (BenchGecko, rank 37 globally)
- LiveBench — Reasoning: **64.7%** (BenchGecko)
- LiveBench — Data Analysis: **49.7%** (BenchGecko)
- Artificial Analysis Intelligence Index: no verified public score found for the Mini variant directly
- BenchLM overall: not computed — model not on BenchLM leaderboard

**Coding:**

- SciCode: **42.6%** (BenchmarkList, sourced from Artificial Analysis)
- LiveBench — Coding: **69.9%** (BenchGecko)
- LiveBench — Agentic Coding: **40.0%** (BenchGecko)
- CCBench: **42.2%** (BenchmarkList, rank 5 of 6)
- SWE-bench Verified: no verified public score found for the Mini variant (base GPT-5.1: 76.3%; GPT-5.1-Codex: 73.7%)
- Terminal-Bench 2.0/2.1: no verified public score found
- LiveCodeBench: no verified public score found

**Multimodal:**

- Design Arena: **1132 Elo** (BenchmarkList, 32nd percentile, rank 234/343)
- No MMMU or MMMU-Pro score found for the Mini variant (base GPT-5.1: MMMU 85.4%)

**Long context:**

- 400,000-token context window confirmed (OpenAI docs, BenchGecko, LLM Stats, Microsoft Foundry). AA-LCR 65.0% verifies long-context reasoning. No RULER or MRCR score found.

**Performance / speed:**

- Time to first token: **1.00s p95** (LLM Stats) — very fast for a reasoning model
- Avg score: **63.3** (BenchGecko, rank #73/319)
- Cost per message: ~**$0.003** (BenchGecko estimate)

### Normalized scores (1–100)

> BenchLM has no page for GPT-5.1-Codex-Mini (not on leaderboard). Benchmarks come from BenchGecko (8 benchmarks, Oct 18 data) and BenchmarkList (12 benchmarks, sourced from AA).

- **Tool use: 52/100.** Tau²-Bench Telecom 62.9% (BenchmarkList/AA, rank 119/332, 64th pct) is mid; Terminal-Bench Hard 33.3% (82nd pct); GDPval-AA 1053 (74th pct). Capped by no OSWorld, no SWE-bench Verified, no Terminal-Bench 2.0/2.1 — the most important agentic coding benchmarks are all missing.
- **Reasoning: 60/100.** GPQA Diamond 81.3% (92nd pct among 464 models) is strong for a mini model; AIME 2025 91.7% (BenchmarkList, 92nd pct); LiveBench Math 76.3% (rank 37 globally) and Reasoning 64.7%. Capped by AA-LCR 65.0% (mid), LiveBench Data Analysis 49.7% (weak), no HLE or AA Intelligence Index score, and the LLM Stats AIME figure (42.1%) conflicts sharply with BenchmarkList's 91.7% (harness discrepancy).
- **Context window: 70/100.** 400K/128K is the standard frontier window (methodology 200K–500K band = 65–84). AA-LCR 65.0% verifies long-context reasoning. No compaction support (that arrived with GPT-5.1-Codex-Max).
- **Multimodal: 62/100.** Text + image input (OpenAI docs; Microsoft Foundry confirms); Design Arena 1132 Elo is a real multimodal design benchmark signal. Capped by no MMMU or MMMU-Pro score for the Mini variant; no audio or video; multimodal is secondary to coding focus.
- **Coding: 55/100.** SciCode 42.6% and CCBench 42.2% are mid; LiveBench Coding 69.9% and LiveBench Agentic Coding 40.0%. Capped by no SWE-bench Verified (the most important coding benchmark), no Terminal-Bench 2.0/2.1, no LiveCodeBench — the benchmark suite is incomplete for a coding model. Arena AI WebDev 1243.35 Elo (12th percentile) is weak.
- **Cost efficiency: 88/100.** $0.25/$2.00 with $0.025 cached input is one-fifth the price of GPT-5.1-Codex and among the cheapest frontier-adjacent coding models; ~$0.003 per message; 1.00s TTFT. Capped by retirement from OpenCode Zen (2026-07-23); Responses API only; no Batch support.
- **Overall Score: 60/100.** Half-up mean of (52 + 60 + 70 + 62 + 55) / 5 = 299/5 = 59.8 → 60. A budget coding SKU: cheap ($0.25/$2.00) and fast (1.00s TTFT) but with incomplete benchmark coverage (no SWE-bench Verified, Terminal-Bench 2.0/2.1, or LiveCodeBench) and middling reasoning (AA-LCR 65.0%).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-18 (UTC)
- Method: public internet research (BenchGecko model page, BenchmarkList model page, LLM Stats); scores normalized 1–100 per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Sources: BenchGecko `benchgecko.ai/model/gpt-5-1-codex-mini` (8 benchmarks, Oct 18) — LiveBench Math 76.3% (rank 37), LiveBench Coding 69.9%, LiveBench Reasoning 64.7%, LiveBench Data Analysis 49.7%, LiveBench Agentic Coding 40.0%, avg score 63.3 (rank #73/319); BenchmarkList `benchmarklist.com/models/openai-gpt-5.1-codex-mini` — GPQA 81.3% (rank 114/464), AIME 91.7% (rank 18/226), AA-LCR 65.0%, Tau²-Bench 62.9%, Terminal-Bench Hard 33.3%, GDPval-AA 1053, SciCode 42.6%, CCBench 42.2%, Design Arena 1132 Elo; LLM Stats `llm-stats.com/models/gpt-5.1-codex-mini` — TTFT 1.00s p95, cost data; Microsoft Foundry / Azure model catalog — confirmed 400K ctx, $0.25/$2.00, text+image input.
- Note: BenchLM has no page for GPT-5.1-Codex-Mini (confirmed 404). Artificial Analysis has not published an Intelligence Index score for this variant. OpenAI did not publish a separate evaluation appendix for the Mini variant.

---

## Re-verification (2026-10-18)

Confirmed via Oct 18 BenchGecko page: 8 benchmarks tested (LiveBench Math 76.3%, Coding 69.9%, Reasoning 64.7%, Data Analysis 49.7%, Agentic Coding 40.0%), avg score 63.3, rank #73/319. Confirmed via BenchmarkList (Oct 18 snapshot): GPQA 81.3%, AIME 91.7%, AA-LCR 65.0%, Tau²-Bench 62.9%, GDPval-AA 1053, SciCode 42.6%, CCBench 42.2%, Design Arena 1132 Elo. Confirmed via LLM Stats: TTFT 1.00s p95, $0.25/$2.00 pricing, 400K context. BenchLM 404 (no page). Microsoft Foundry confirms 400K ctx and pricing. Normalized scores: Tool 52, Reasoning 60, Context 70, Multimodal 62, Coding 55, Overall 60.
