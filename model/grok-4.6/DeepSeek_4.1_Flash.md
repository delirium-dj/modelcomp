# Grok 4.6 — findings by DeepSeek 4.1 Flash

- Source: xAI (`grok-4.6`)
- Date: 2026-09-20 (UTC)
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

- AA Intelligence Index: **61** (Grok 4.5 High 56, GPT-5.6 Sol Max 61, Fable 5 Max 62)
- GDPval-AA v2: **1753 Elo** (Grok 4.5 1526, GPT-5.6 Sol Max 1728, Fable 5 Max 1741)
- APEX-Agents: **57.5%** (4.5 47.1%, Sol 56.7%, Fable 59.2%)
- APEX-SWE: **56.4%** (4.5 53.6%, Fable 58.8%)
- Terminal-Bench v3.0: **26.0%** (4.5 15.7%, Sol 34.6%, Fable 34.1%) — RankLLMs lists this same 26.0% as "Terminal-Bench 2.1", conflicting with the vendor's TB v3.0 label
- AA-Briefcase: **1577** (4.5 1313, Sol 1502, Fable 1574); Harvey LAB (Vals): **15.8%** (Sol 2.5%, Fable 11.3%)
- BrowseComp **57.5%** and OSWorld computer-use **58.0%** (RankLLMs verified panel)
- Tau3-Banking / Tau2-Bench / MCP-Atlas / Claw-Eval / Toolathon / SWE Atlas: no verified public score found

Reasoning / knowledge:

- BenchLM composite: **69.7/100, #17 of 230** tracked models; strongest eligible category "Agentic" **#7** (data as of 2026-09-18)
- RankLLMs composite: **55.6/100, #12 of 80** tracked models
- GPQA Diamond: **63.2%** and MATH-500: **61.0%** (RankLLMs independent panel — far below the ~88.9% peer median on GPQA and far below xAI's frontier positioning; no vendor GPQA number was published, so treat it as an unconfirmed outlier)
- HLE / LCR / MLCR / CritPt / MRCR / RULER / Omniscience accuracy / Hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **78.5%** pass@1 (RankLLMs, verified panel — at its 78.5% peer median)
- DeepSWE v1.1: **65.9%** (vendor; GPT-5.6 Sol Max 73%, Fable 5 Max 70%, Grok 4.5 54%)
- CursorBench v3.2: **69.9%** (Sol 67.2%, Fable 70.5%); FrontierCode v1.1 (Extended): **61.3%** (Sol 60.6%, Fable 63.6%)
- LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench / SWE-Atlas: no verified public score found

Long context:

- No MRCR, RULER or GraphWalks retrieval score was published by xAI or any evaluator found; the 500K window is documented but retrieval at depth is unverified.
- Cost-relevant long-context behaviour is documented instead: the 200K prompt cliff reprices the whole request to $4/$12, and multi-turn cache hits require sticky cache keys (`prompt_cache_key` on Responses, `x-grok-conv-id` on Chat Completions).

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval-AA 1753 beats Fable 5 Max and AA Intelligence Index 61 ties GPT-5.6 Sol Max, so it is genuinely frontier on knowledge-work agents; capped by Terminal-Bench v3.0 at only 26.0% (Sol 34.6%) and by the total absence of Tau3, MCP-Atlas and Claw-Eval evidence.
- **Reasoning: 84/100.** AA Intelligence Index 61 plus the best Harvey LAB score in its own table (15.8%) and BenchLM Agentic #7; capped by the unconfirmed low GPQA (63.2% on the independent panel), no HLE and no LCR/MRCR-class evidence.
- **Context window: 88/100.** 500K input sits in the 85–94 band with no published output cap and no retrieval measurement at depth — and the ≥200K tier doubles the whole request, a practical ceiling on using it.
- **Multimodal: 65/100.** Text + image in, text out (xAI claims stronger visual/interactive first passes than 4.5) is the classic image-only band; no MMMU/VideoMME-class score was published to justify the top of it.
- **Coding: 83/100.** DeepSWE v1.1 65.9%, SWE-bench Verified 78.5%, CursorBench 69.9%, FrontierCode 61.3%; strong, but DeepSWE is ~8 points behind GPT-5.6 Sol Max and no LiveCodeBench/SciCode/Vibe numbers exist.
- **Cost efficiency: 78/100.** $2/$6 with $0.50 cached input sits between the ~88 anchor ($1.25/$4.25) and the ~60 anchor ($3/$15); docked for the whole-request 200K repricing to $4/$12, the 2× Priority lane and the absence of any free tier.
- **Overall Score: 81/100.** (84 + 84 + 88 + 65 + 83) / 5 = 80.8 → **81**. Best fit: long-running knowledge-work and product-building agents where GDPval-AA-grade output matters more than peak SWE-bench coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-20
- Method: fresh public internet research on 2026-09-20 — xAI launch post (2026-08-12), LLM Stats release analysis, RankLLMs verified panel (updated 2026-09-18) and BenchLM model record (data 2026-09-18); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
