# GPT-5.1 Codex Mini — findings by Big Pickle

- Source: OpenAI (`gpt-5.1-codex-mini`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI's smaller, faster, more cost-effective coding model in the GPT-5.1 Codex family, released 2025-11-12/13 alongside GPT-5.1 and GPT-5.1-Codex. Optimized for quick code completion, simple refactoring, and routine programming tasks with lower latency. Positioned as a "steerability, front end development, and interactivity" model (Microsoft Foundry). Responses API only. Deprecated alongside the rest of the GPT-5.1 Codex family (OpenCode Zen retirement 2026-07-23; OpenAI docs mark GPT-5.1-Codex as deprecated). Not an alias of any other entry. `meta.json` marks this entry as `scaffolded: true`.
- **Provider / access:** OpenAI Responses API only (`gpt-5.1-codex-mini`); Microsoft Foundry / Azure OpenAI Service (version 2025-11-13, GA); OpenCode Zen (retired 2026-07-23). Batch not supported. Fine-tuning not supported.
- **Release / knowledge:** released 2025-11-12 (LLM Stats) / 2025-11-13 (OpenAI developer post, Microsoft Foundry, BenchGecko). Knowledge cutoff **2024-09-30** (OpenAI model docs).
- **IDs:** `gpt-5.1-codex-mini` (OpenAI API, Microsoft Foundry).
- **Context window:** **400,000 tokens total / 128,000 max output** (OpenAI model docs, LLM Stats, BenchGecko, Microsoft Foundry — four independent sources agree). Note: repo `meta.json` says "128K total" — the 400K figure from OpenAI's own docs is treated as canonical (same discrepancy pattern as the other Codex entries in this repo).
- **Modalities:** text, image in; text out (OpenAI model docs, Microsoft Foundry). No video. Reasoning token support; function calling, web search, structured outputs, prompt caching, evals, stored completions. Responses API only — no Chat Completions, Assistants, Realtime, or Batch.
- **Pricing:** **$0.25 in / $2.00 out per 1M tokens; cached input $0.025** (OpenAI model docs, LLM Stats, Microsoft Foundry, BenchGecko — four independent sources agree). One-fifth the price of GPT-5.1-Codex ($1.25/$10). ~$0.003 per message (BenchGecko estimate). Paid only; retired from OpenCode Zen 2026-07-23.
- **Architecture:** proprietary (OpenAI, weights private). A distilled/smaller checkpoint of the GPT-5.1 Codex family. TTFT **1.00s p95** (LLM Stats) — notably fast for a reasoning model. Adaptive reasoning inherited from GPT-5.1 (dynamic thinking based on task complexity; "no reasoning" mode available on the base GPT-5.1, though Codex Mini's reasoning effort levels are not separately documented).

### Raw benchmarks found

> Vendor-reported figures come from OpenAI's GPT-5.1 developer post (2025-11-13) and model docs. Independent numbers (BenchmarkList/Artificial Analysis, BenchGecko, LLM Stats) are marked as such. OpenAI did not publish a separate evaluation appendix for the Mini variant — the launch post covers GPT-5.1 and GPT-5.1-Codex only.

Coding:

- SciCode: **42.6%** (BenchmarkList, sourced from Artificial Analysis)
- CCBench: **42.2%** (BenchmarkList) — rank 5 of 6 on this niche benchmark
- Arena AI WebDev Arena: **1243.35 Elo** (BenchmarkList) — 12th percentile, rank 93 of 105
- LiveBench — Coding: **69.9%** (BenchGecko)
- SWE-bench Verified: **no verified public score found** for the Mini variant specifically. The base GPT-5.1 scored 76.3% (OpenAI); GPT-5.1-Codex scored 73.7% (OpenAI). The Mini variant's SWE-V score has not been published.
- Terminal-Bench 2.0 / 2.1: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Agent / tool use:

- Tau2-Bench Telecom: **62.9%** (BenchmarkList, sourced from Artificial Analysis) — rank 119 of 332, 64th percentile
- Terminal-Bench Hard: **33.3%** (BenchmarkList, sourced from Artificial Analysis) — rank 58 of 326, 82nd percentile
- GDPval-AA: **1053** (BenchmarkList) — rank 89 of 340, 74th percentile
- OSWorld: **no verified public score found**
- BrowseComp: **no verified public score found** for the Mini variant (base GPT-5.1: 90.0% Long Context 128k)

Reasoning / knowledge:

- GPQA Diamond: **81.3%** (BenchmarkList) — rank 114 of 464, 76th percentile
- AIME 2025: **91.7%** (BenchmarkList) / **42.1%** (LLM Stats) — large discrepancy; the BenchmarkList figure (91.7%, 92nd percentile, rank 18 of 226) likely uses a different harness or reasoning effort than LLM Stats (42.1%). The BenchmarkList figure is treated as more reliable given its higher source quality and percentile context.
- AA-LCR (long context reasoning): **65.0%** (BenchmarkList) — rank 124 of 409, 70th percentile
- LiveBench — Mathematics: **76.3%** (BenchGecko) — rank 29 globally on this benchmark
- LiveBench — Reasoning: **64.7%** (BenchGecko)
- Design Arena: **1132 Elo** (BenchmarkList) — 32nd percentile, rank 234 of 343
- Artificial Analysis Intelligence Index: **no verified public score found** for the Mini variant directly (AA has evaluated individual benchmarks via BenchmarkList but has not published an overall index score for this model).
- BenchLM overall: **not computed** — model not on BenchLM leaderboard.
- BenchGecko overall: **60.4 average** across 8 benchmarks, rank #71 of 274 (BenchGecko); "better than 74% of all models."
- LLM Stats Score: **-2.8**, rank #357 (LLM Stats) — very low, but based on only 1 eval (likely the 42.1% AIME figure), so the score is not meaningful.
- BenchmarkList ECI: **126.74**, rank #106 of 398 (BenchmarkList).

Multimodal:

- Design Arena: **1132 Elo** (BenchmarkList) — 32nd percentile
- No MMMU or MMMU-Pro score found for the Mini variant. The base GPT-5.1 scored MMMU 85.4% (OpenAI).

Long context:

- AA-LCR: **65.0%** (BenchmarkList) — verifies reasoning over the 400K window
- No RULER or MRCR score found.

Performance / speed:

- Time to first token: **1.00s p95** (LLM Stats) — very fast for a reasoning model
- Cost per message: **~$0.003** (BenchGecko estimate)

### Scores

- **Tool use: 52/100.** Tau2-Bench Telecom 62.9% (BenchmarkList/AA) is mid; Terminal-Bench Hard 33.3% is decent for a mini model (82nd percentile); GDPval-AA 1053 is solid (74th percentile). Offsets: no OSWorld, BrowseComp, or Terminal-Bench 2.0/2.1 score; no SWE-bench Verified score for the Mini variant; the model is two Codex generations behind GPT-5.3 Codex and has been retired from OpenCode Zen.
- **Reasoning: 60/100.** GPQA Diamond 81.3% is strong for a mini model; AIME 2025 91.7% (BenchmarkList) is excellent; LiveBench Math 76.3% and Reasoning 64.7% are solid. Offsets: AA-LCR 65.0% is mid; the LLM Stats AIME figure (42.1%) conflicts sharply with BenchmarkList's 91.7% — the true score likely depends on reasoning effort; no HLE or AA Intelligence Index score; BenchGecko overall 60.4 is mid-pack.
- **Context window: 70/100.** 400K/128K is solid and matches the full GPT-5.1-Codex. Offsets: by October 2026, 1M+ is standard among frontier models; AA-LCR 65.0% verifies long-context reasoning but is not exceptional; no compaction support (that arrived with GPT-5.1-Codex-Max); retired from OpenCode Zen.
- **Multimodal: 62/100.** Text + image input (OpenAI docs, Microsoft Foundry); Design Arena 1132 Elo is a real multimodal design benchmark signal. Offsets: no MMMU or MMMU-Pro score for the Mini variant; no audio or video; multimodal capability is secondary to the coding focus.
- **Coding: 55/100.** SciCode 42.6% and CCBench 42.2% are mid; LiveBench Coding 69.9% is solid; Arena AI WebDev Arena 1243.35 is weak (12th percentile). Offsets: no SWE-bench Verified, Terminal-Bench 2.0/2.1, or LiveCodeBench score for the Mini variant — the most important coding benchmarks are all missing; the model is explicitly positioned for "quick code completion, simple refactoring, and routine programming tasks," not complex agentic coding; retired from OpenCode Zen; superseded by GPT-5.2-Codex and GPT-5.3 Codex.
- **Cost efficiency: 88/100.** $0.25/$2.00 with $0.025 cached input is one-fifth the price of GPT-5.1-Codex and among the cheapest frontier-adjacent coding models; ~$0.003 per message; 1.00s TTFT. Offsets: the model is retired from OpenCode Zen (2026-07-23); Responses API only; no Batch support; output pricing ($2.00) is still 3× GLM-5's $1.60 equivalent and 10× Nemotron 3.5 Bolt's $0.15 tier.
- **Overall Score: 60/100.** Half-up mean of Tool use (52), Reasoning (60), Context window (70), Multimodal (62), Coding (55) = 299/5 = 59.8 → 60. Cost efficiency (88) is excluded per `model-comparison.md` methodology.

### Caveats and conflicts

- **Context window discrepancy:** repo `meta.json` says "128K total"; OpenAI's own model docs, LLM Stats, BenchGecko, and Microsoft Foundry all say 400K/128K. The 400K figure is treated as canonical (same discrepancy pattern as the GPT-5 Codex and GPT-5.1 Codex Max entries in this repo).
- **AIME 2025 discrepancy:** BenchmarkList reports 91.7% (92nd percentile, rank 18 of 226); LLM Stats reports 42.1%. The gap likely reflects different reasoning effort settings or harnesses. The BenchmarkList figure is treated as more reliable given its higher source quality and percentile context, but both figures are noted.
- **No vendor SWE-V or Terminal-Bench score:** OpenAI did not publish a separate evaluation appendix for GPT-5.1-Codex-Mini. The launch post covers GPT-5.1 and GPT-5.1-Codex only. The Mini variant's most important coding benchmark scores (SWE-bench Verified, Terminal-Bench 2.0/2.1, LiveCodeBench) are all missing.
- **Retired model:** GPT-5.1-Codex-Mini was retired from OpenCode Zen on 2026-07-23 (alongside the rest of the GPT-5.1 Codex family). OpenAI's model docs mark GPT-5.1-Codex as deprecated; the Mini variant is presumably also deprecated. It remains available via the OpenAI API and Microsoft Foundry as of 2026-10.
- **Thin LLM Stats coverage:** LLM Stats Score of -2.8 (rank #357) is based on only 1 eval (likely the 42.1% AIME figure) and is not a meaningful overall assessment.
- **BenchGecko vs BenchmarkList divergence:** BenchGecko's overall 60.4 (8 benchmarks, rank #71) and BenchmarkList's ECI 126.74 (rank #106) use different methodologies and benchmark sets. Neither is directly comparable to the other.
- **Scaffolded entry:** `meta.json` marks this entry as `scaffolded: true`. The model was accessed through OpenAI's Codex scaffold (CLI/IDE/GitHub), which adds its own tooling and context management on top of the raw model.
- **Superseded:** GPT-5.1-Codex-Mini has been superseded by GPT-5.2-Codex and GPT-5.3 Codex in the Codex lineup. The "Mini" tier may return in future generations but no GPT-5.2/5.3 Codex Mini has been announced as of 2026-10-18.

### Sources

- OpenAI GPT-5.1 for developers (2025-11-13): https://openai.com/index/gpt-5-1-for-developers
- OpenAI model docs: https://developers.openai.com/api/docs/models/gpt-5.1-codex-mini
- Microsoft Foundry / Azure model catalog: https://ai.azure.com/catalog/models/gpt-5.1-codex-mini
- BenchmarkList model page: https://benchmarklist.com/models/openai-gpt-5.1-codex-mini
- BenchGecko model page: https://benchgecko.ai/model/gpt-5-1-codex-mini
- LLM Stats model page: https://llm-stats.com/models/gpt-5.1-codex-mini
- OpenAI GPT-5.1-Codex model docs (deprecated status): https://developers.openai.com/api/docs/models/gpt-5.1-codex
- BenchGecko GPT-5.1-Codex family comparison: https://benchgecko.ai/model/gpt-5-1-codex

**Big Pickle (opencode/big-pickle)** — 2026-10-18
