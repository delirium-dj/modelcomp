# Grok 4.6 — findings by DeepSeek 4.1 Flash

- Source: xAI (`grok-4.6`)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (xAI flagship; API ID `grok-4.6`). Direct upgrade of Grok 4.5, not an alias — same 500K context class, new supplemental training run.
- **Short description:** xAI's frontier model released 2026-08-12, focused on long-running agents and more ambitious interactive/visual work; it sells on staying in a job longer rather than on a bigger window.
- **Provider / access:** xAI API (`docs.x.ai`, model `grok-4.6`, Responses **and** Chat Completions), plus Cursor, Grok Build, OpenRouter, Vercel and Cloudflare. Rate limits 150 rps / 50M tokens per minute; regions us-east-1, us-west-2. No OpenCode Zen Free ID found.
- **Release / knowledge:** Released 2026-08-12 (GA); knowledge cutoff 2026-02-01.
- **IDs:** `grok-4.6` (xAI API). No Zen Free ID, so cost is scored on paid pricing ("Fast" is only 2× Priority Processing, `service_tier: "priority"` — not a separate model ID).
- **Context window:** 500,000 tokens; no published text output cap.
- **Modalities:** text + image in, text out; `reasoning_effort` low/medium/high(default)/xhigh; function calling, web search, X search and server-side code execution (billed separately).
- **Pricing (as of 2026-09-20):** $2 in / $0.50 cached / $6 out per 1M under 200K prompt tokens; at or above 200K the **whole request** reprices to $4 / $1 / $12; Priority Processing doubles every token type. Blended ≈$2.44/1M (RankLLMs). Paid only — no free tier.
- **Architecture:** proprietary, undisclosed. xAI describes a longer supplemental training run with curated model-generated reasoning data, Grok 4.5-regenerated SFT trajectories across efforts/harnesses, and agentic RL in kernel optimization, web dev and CAD domains.

### Raw benchmarks found

Agent / tool use (vendor table, Grok 4.6 High, 2026-08-12):

- AA Intelligence Index: **61** (vendor, Grok 4.5 High 56, GPT-5.6 Sol Max 61, Fable 5 Max 62) — BenchLM's independent AA Agentic Index reads **53.4%** and AA Intelligence Index **44.3%**
- GDPval-AA v2: **1753 Elo** (vendor; Grok 4.5 1526, GPT-5.6 Sol Max 1728, Fable 5 Max 1741) — Artificial Analysis' independent GDPval-AA is **1643 Elo / 56.1%**
- APEX-Agents: **57.5%** (4.5 47.1%, Sol 56.7%, Fable 59.2%); APEX-SWE: **56.4%** (4.5 53.6%, Fable 58.8%)
- Terminal-Bench 3.0: **26.5%** (Terminal-Bench 3.0 leaderboard, via BenchLM; vendor table 26.0%, 4.5 15.7%, Sol 34.6%, Fable 34.1%); Terminal-Bench 2.1 via Vals **78.3%** — the earlier RankLLMs "Terminal-Bench 2.1 26.0%" label was actually the v3.0 row
- AA Tau3-Banking: **50.7%** (Artificial Analysis) — previously unpublished; AA EnterpriseOps-Gym **48.3%**; AA AutomationBench **66.7%**; CWE-bench v1 **57.0%**
- AA-Briefcase: **1577** (4.5 1313, Sol 1502, Fable 1574); Harvey LAB (Vals): **15.8%** (Sol 2.5%, Fable 11.3%)
- BrowseComp **57.5%** and OSWorld computer-use **58.0%** (RankLLMs verified panel)
- Tau2-Bench / MCP-Atlas / Claw-Eval / Toolathon / SWE Atlas: no verified public score found

Reasoning / knowledge:

- BenchLM composite: **69.7/100, #17 of 230** tracked models; strongest eligible category "Agentic" **#7** (data as of 2026-09-18)
- RankLLMs composite: **55.6/100, #12 of 80** tracked models
- GPQA Diamond: **94.9%** (AA-GPQA Diamond) / **94.7%** (Vals) — this corrects the earlier RankLLMs 63.2% reading, which was an unconfirmed outlier; MMLU-Pro (Vals) **89.4%**
- AA-LCR: **80.3%** (Artificial Analysis long-context reasoning); CritPt: **17.1%**
- ARC-AGI-1: **87.0%**; ARC-AGI-2: **67.1%**; ARC-AGI-3: **2.1%** (ARC Prize verified)
- AA-HLE: **42.9%** (above the 40%+ frontier reference); AA-Omniscience Index **30.5%** / Accuracy **48.2%** / Hallucination Rate **34.3%**
- MATH-500: **61.0%** (RankLLMs); MRCR / RULER / MLCR: no verified public score found

Coding:

- SWE-bench (Vals): **95.6%**; SWE-bench Verified pass@1: **78.5%** (RankLLMs, verified panel — at its 78.5% peer median)
- DeepSWE v1.1: **65.9%** (vendor; GPT-5.6 Sol Max 73%, Fable 5 Max 70%, Grok 4.5 54%)
- CursorBench v3.2: **70.8%** (Cursor evals; vendor table 69.9%); FrontierCode v1.1 (Extended): **61.3%** (Sol 60.6%, Fable 63.6%)
- LiveCodeBench (Vals): **88.2%** — previously unpublished; AA-SciCode: **56.5%** (frontier 55%+); AA Coding Index: **76.8%** (frontier 70%+); VulcanBench v3 **87.0%**
- CursorBench 4.0: **41.4%**; FrontierSWE v2: **25.3%**; Bug Hunt Bench: **27 fixes**; Vibe Code Bench / SWE-Atlas: no verified public score found

Long context:

- No MRCR, RULER or GraphWalks retrieval score was published by xAI or any evaluator found; AA-LCR **80.3%** is the only retrieval-adjacent figure, so 500K-window retrieval at depth remains unverified.
- Cost-relevant long-context behaviour is documented instead: the 200K prompt cliff reprices the whole request to $4/$12, and multi-turn cache hits require sticky cache keys (`prompt_cache_key` on Responses, `x-grok-conv-id` on Chat Completions).

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval-AA 1753 Elo (vendor) / 1643 Elo (AA) sits near the 1750+ frontier reference, AA Tau3-Banking 50.7% clears the 50%+ reference, and APEX-Agents 57.5% and AA AutomationBench 66.7% are strong; capped by Terminal-Bench 3.0 at only 26.5% (Sol 34.6%) and Terminal-Bench 2.1 via Vals at 78.3%.
- **Reasoning: 88/100.** GPQA Diamond 94.9% (AA) / 94.7% (Vals) and AA-HLE 42.9% both clear the frontier references, with AA-LCR 80.3%, ARC-AGI-2 67.1% and ARC-AGI-1 87%; held below 90+ by the AA Intelligence Index at 44.3 (frontier 60+).
- **Context window: 88/100.** 500K input sits in the 85–94 band with no published output cap and no retrieval measurement at depth — and the ≥200K tier doubles the whole request, a practical ceiling on using it.
- **Multimodal: 65/100.** Text + image in, text out (Design Arena 1296) is the classic image-only band; no MMMU/VideoMME-class score was published to justify the top of it.
- **Coding: 87/100.** DeepSWE v1.1 65.9%, LiveCodeBench 88.2%, AA-SciCode 56.5% (frontier 55%+), AA Coding Index 76.8% (frontier 70%+) and FrontierCode 61.3%; strong, but DeepSWE is ~7 points behind GPT-5.6 Sol Max and no Vibe Code Bench number exists.
- **Cost efficiency: 78/100.** $2/$6 with $0.50 cached input sits between the ~88 anchor ($1.25/$4.25) and the ~60 anchor ($3/$15); docked for the whole-request 200K repricing to $4/$12, the 2× Priority lane and the absence of any free tier.
- **Overall Score: 82/100.** (84 + 88 + 88 + 65 + 87) / 5 = 82.4 → **82**. Best fit: long-running knowledge-work and product-building agents where GDPval-AA-grade output matters more than peak SWE-bench coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: fresh public internet research re-verified 2026-10-06 — xAI launch post (2026-08-12), BenchLM model record (data 2026-10-07) citing xAI, Artificial Analysis, Vals, Cursor and ARC Prize leaderboards, plus the earlier RankLLMs panel; previously unpublished Tau3, LCR, GPQA, SciCode and LiveCodeBench rows were filled and the earlier unconfirmed GPQA null corrected. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
