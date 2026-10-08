# GPT-5.6 Luna — findings by DeepSeek 4.1 Flash

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna — the efficiency tier of OpenAI's GPT-5.6 family (GA 2026-07-09), sibling of GPT-5.6 Terra and GPT-5.6 Sol, not an alias of either.
- **Short description:** OpenAI's fastest and cheapest GPT-5.6 tier, aimed at high-volume inference (classification, extraction, routing) and low-latency production loops, with a reasoning ceiling deliberately capped below Terra and Sol; it is also the only GPT-5.6 tier on the consumer ChatGPT Free tier.
- **Provider / access:** OpenAI API, ChatGPT on all tiers including Free (rate-limited), Codex, Microsoft Copilot as an explicit selection, and gateway partners. OpenAI product conventions apply; the exact API surface (Responses vs Chat Completions) is not stated in the sources found. No OpenCode Zen Free ID.
- **Release / knowledge:** GA 2026-07-09 (HokAI vendor check, 19 Aug 2026); training data current through June 2026.
- **IDs:** `gpt-5.6-luna`. No Zen Free ID exists — the only free access is the consumer ChatGPT Free tier, which has no API ID in this scan.
- **Context window:** **conflicting records, now leaning to 1.05M.** BenchLM carries **1.05M** (sourced to OpenAI's GPT-5.6 page), matching the curated entry's 1,050,000 in / 128K out and RankLLMs' 1.1M; HokAI's vendor-page check still reports only 200,000 in / 64,000 out. Scored below on the 1M-class record with the dissent flagged.
- **Modalities:** text + image in; text, tool calls and code out. Image input is now benchmarked — MMMU-Pro **78.4%** (with Python 79.5%, AA-MMMU-Pro 78.6%). No audio or video in/out. Reasoning effort none/low/medium/high — `xhigh`, `max` and `pro` stay reserved for Terra and Sol; no ultra multi-agent mode and no programmatic tool calling.
- **Pricing (as of 2026-09-20):** **conflicting records.** HokAI's vendor-page check: $1.00 in / $6.00 out per 1M, cached input $0.125 (90% discount), described as 20% of Sol's per-token price and 40% of Terra's, with no batch discount at launch (AA blended rate ≈$3.50/M, HokAI blended ≈$2.25/M). RankLLMs lists $0.31/1M blended, and the curated repo record states $0.20/$1.20. Paid API only.
- **Architecture:** proprietary. Shares the GPT-5.6 family architecture: token-efficiency improvements, prompt caching keyed to named breakpoints, reasoning persisted across turns, vision + text in. Latency ≈800 ms p50 / 3000 ms p99 (fastest in the family). Zero Data Retention eligible, US/EU data residency, SOC2 Type II / ISO 27001 / GDPR / HIPAA.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI GPT-5.6 page, via BenchLM); Terminal-Bench 2.1 via Vals **79.0%**; Terminal-Bench 3.0 **14.3%**. This corrects the earlier RankLLMs 82.5% upward.
- GDPval-AA: **1582 Elo / 48.2%** (OpenAI GPT-5.6 page and Artificial Analysis, via BenchLM) — near the 1750+ frontier reference and far above the earlier RankLLMs 1166 Elo reading, now treated as an outlier.
- BrowseComp: **83.3%** (OpenAI GPT-5.6 page) — correcting the earlier RankLLMs 44.0%; CyberGym **77.9%**; OSWorld 2.0 **45.6%**; Toolathlon **53.4%**
- APEX-Agents-AA: **35.8%**; AA Agentic Index: **42.7%**; ApprenticeBench: **7%**
- Tau3-Banking / MCP-Atlas / Claw-Eval / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI GPT-5.6 page, via BenchLM; AA-GPQA Diamond 91.1%, Vals 91.7%) — this decisively corrects the earlier HokAI/RankLLMs 55.3%/52.5% readings
- HLE: **39.5%** (AA-HLE, via BenchLM) — near the 40%+ frontier reference, correcting the earlier 14.2% vendor reading
- AA-LCR: **83.7%**; CritPt: **20.6%**; HealthBench Professional: **55.7%**; HealthBench Hard: **32.0%**
- ARC-AGI-1: **88.0%**; ARC-AGI-2: **59.5%**; ARC-AGI-3: **0.2%**
- Artificial Analysis Intelligence Index: **51.2%** (OpenAI GPT-5.6 page, via BenchLM) — above the earlier 45 reading but still below the 60+ frontier reference
- LiveBench: **52.4%**; LMArena Elo **1340, rank #12** (independent, 12 Jul 2026); MMLU-Pro (Vals) **86.0%**
- MLCR / Omniscience Index: no separate verified public score found

Coding:

- SWE-bench (Vals): **93.0%**; SWE-bench Pro: **62.7%**; DeepSWE: **67.2%** (all OpenAI GPT-5.6 page) — DeepSWE was previously unpublished
- AA-SciCode: **53.6%**; AA Coding Index: **71.5%** (above the 70%+ frontier reference); CursorBench 3.2: **61.1%**; CursorBench 4.0: **35.9%**; FrontierCode 1.1 Extended: **55.1%**; VulcanBench v3: **85.5%**
- SWE-bench Verified (HokAI 60.2% / RankLLMs 68.5%) remains in conflict with the Vals 93.0% harness; Aider Polyglot **62.1%** and HumanEval **88.4%** (vendor-reported 26 Jun 2026)
- LiveCodeBench / Vibe Code Bench / SWE-Atlas: no verified public score found

Multimodal:

- MMMU-Pro: **78.4%**; MMMU-Pro with Python: **79.5%**; AA-MMMU-Pro: **78.6%** (OpenAI GPT-5.6 page and Artificial Analysis). Image input is now benchmarked; no audio or video support.

Long context:

- AA-LCR: **83.7%** (Artificial Analysis long-context reasoning) is the only retrieval-adjacent figure found; no MRCR, RULER or GraphWalks score exists at either the 200K or the 1M-class window, so depth retrieval is still unverified and the published window figures disagree by up to ~5×.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 84.7% and GDPval-AA 1582 Elo approach the frontier references, and BrowseComp 83.3% and CyberGym 77.9% are strong; capped by TB 2.1 via Vals at 79.0%, OSWorld 2.0 45.6%, ApprenticeBench 7% and the absence of Tau3/MCP-Atlas/Claw-Eval.
- **Reasoning: 80/100.** GPQA Diamond 92.3% clears the 90%+ frontier reference and AA-HLE 39.5% sits just under 40%, but the AA Intelligence Index (51.2) is below 60 and the efficiency tier is explicitly capped below Terra/Sol.
- **Context window: 95/100.** The 1.05M record (OpenAI GPT-5.6 page, matching the curated entry) is the floor of the ≥1M band; HokAI's 200K/64K dissent and the absence of any retrieval measurement keep it off 100.
- **Multimodal: 70/100.** Image input with text-only output, now verified by MMMU-Pro 78.4% (AA-MMMU-Pro 78.6%), sits at the top of the image-only band; no audio or video.
- **Coding: 80/100.** SWE-bench (Vals) 93.0%, SWE-bench Pro 62.7%, DeepSWE 67.2%, AA-SciCode 53.6% and AA Coding Index 71.5% (frontier 70+) make it a capable coding agent, but DeepSWE is under the 74%+ frontier reference and the SWE-bench harness figures conflict.
- **Cost efficiency: 88/100.** The records span $0.20/$1.20 per 1M (curated) and $0.31 blended (RankLLMs) to $1.00/$6.00 with $0.125 cached input (vendor-page check) — a spread mapping to ~97 down to ~84 on the rubric; scored mid-range for a usable model that is 20% of Sol's per-token cost, docked for expensive output tokens and the absence of any batch discount at launch.
- **Overall Score: 81/100.** (80 + 80 + 95 + 70 + 80) / 5 = 81.0 → **81**. Best fit: high-throughput routing, classification and extraction, and cheap terminal-agent loops — now with credible multimodal and coding evidence, but still not the reasoning ceiling of Terra and Sol.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: fresh public internet research re-verified 2026-10-06 — BenchLM model record (data 2026-10-07) citing OpenAI's GPT-5.6 page, Artificial Analysis, Vals, Cursor, VulcanBench and ARC Prize leaderboards, cross-checked against the earlier HokAI and RankLLMs panels and the curated folder record. The earlier unverified card fields (GPQA 55.3%, HLE 14.2%, no MMMU) are corrected by vendor-sourced rows where the sources disagree; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
