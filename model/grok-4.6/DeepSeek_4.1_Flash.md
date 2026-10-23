# Grok 4.6 — findings by DeepSeek 4.1 Flash

- Source: xAI (`grok-4.6`)
- Date: 2026-10-18 (UTC); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM now exposes 40 rows (was ~12) and, critically, the earlier unconfirmed low **GPQA 63.2% (RankLLMs)** is now contradicted by independent **AA-GPQA Diamond 94.9%** and **Vals GPQA 94.7%** — so the outlier is retired. New independent evidence: AA-LCR 80.3%, CritPt 17.1%, AA-HLE 42.9%, AA Tau3 Banking 50.7%, SWE-bench (Vals) 95.6%, LiveCodeBench (Vals) 88.2%, AA Coding Index 76.8%. **Reasoning 84 → 89**, **Tool use 84 → 86**, **Coding 83 → 88**; **Overall 81 → 83**. Context/pricing unchanged (500K, $2/$6).

## Model card

- **Name:** Grok 4.6 (xAI flagship; API ID `grok-4.6`). Direct upgrade of Grok 4.5, not an alias — same 500K context class, new supplemental training run.
- **Short description:** xAI's frontier model released 2026-08-12, focused on long-running agents and more ambitious interactive/visual work; it sells on staying in a job longer rather than on a bigger window.
- **Provider / access:** xAI API (`docs.x.ai`, model `grok-4.6`, Responses **and** Chat Completions), plus Cursor, Grok Build, OpenRouter, Vercel and Cloudflare. Rate limits 150 rps / 50M tokens per minute. No OpenCode Zen Free ID found.
- **Release / knowledge:** Released 2026-08-12 (GA); knowledge cutoff 2026-02-01.
- **IDs:** `grok-4.6` (xAI API). No Zen Free ID, so cost is scored on paid pricing ("Fast" is only 2× Priority Processing, `service_tier: "priority"` — not a separate model ID).
- **Context window:** 500,000 tokens; no published text output cap.
- **Modalities:** text + image in, text out; `reasoning_effort` low/medium/high(default)/xhigh; function calling, web search, X search and server-side code execution (billed separately).
- **Pricing (as of 2026-10-18):** $2 in / $0.50 cached / $6 out per 1M under 200K prompt tokens; at or above 200K the **whole request** reprices to $4 / $1 / $12; Priority Processing doubles every token type. Paid only — no free tier.
- **Architecture:** proprietary, undisclosed. xAI describes a longer supplemental training run with curated model-generated reasoning data, Grok 4.5-regenerated SFT trajectories, and agentic RL in kernel optimization, web dev and CAD domains.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1753 Elo** (xAI) / **1643 Elo / 55.9% normalized** (Artificial Analysis)
- APEX-Agents: **57.5%** (xAI); AA Agentic Index **53.4%**; AA Tau3 Banking **50.7%**; AA AutomationBench **66.7%**; AA EnterpriseOps-Gym **48.3%**
- Terminal-Bench 2.1 (Vals): **78.3%**; Terminal-Bench 3.0 **26.5%** (leaderboard); AA-Briefcase **1577**; Harvey LAB **15.8%** (Vals)
- BrowseComp **57.5%**, OSWorld computer-use **58.0%**, ApprenticeBench **13%**, CWE-bench v1 **57.0%**, MazeBench **1%**
- MCP-Atlas / Claw-Eval / Toolathon / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (Artificial Analysis) / **94.7%** (Vals AI) — independent confirmation that retires the earlier 63.2% RankLLMs outlier
- HLE: **42.9%** (AA-HLE); AA-LCR **80.3%**; CritPt **17.1%** (Artificial Analysis)
- MMLU-Pro (Vals) **89.4%**; AA Intelligence Index **44.3%** (the vendor table's "61" is the AA v4.3 index on a different scale)
- ARC-AGI-1 **87.00%**, ARC-AGI-2 **67.1%**, ARC-AGI-3 **2.1%** (ARC Prize, verified)
- FrontierMath v2 (Tiers 1–3) **65.97%** / (Tier 4) **31.71%** (Epoch AI)
- AA-Omniscience Index **30.5%**, Accuracy **48.2%**, Hallucination Rate **34.3%**; Gray Swan IPI **51.8%**
- BenchLM overall **67.02/100, #27 of 954**; RankLLMs composite **55.6/100, #12 of 80**

Coding:

- SWE-bench (Vals): **95.6%** (Vals AI — a very high Vals-specific harness figure); SWE-bench Verified **78.5%** pass@1 (RankLLMs peer-median)
- DeepSWE v1.1: **65.9%** (xAI); LiveCodeBench (Vals) **88.2%**; AA Coding Index **76.8%**; AA-SciCode **56.5%**
- CursorBench 3.2 **70.8%**; CursorBench 4.0 **41.4%**; FrontierCode 1.1 Extended **61.3%**; FrontierSWE v2 **25.3%**
- VulcanBench v3 **87.0%**; Bug Hunt Bench **27.0 fixes**

Multimodal / long context:

- Text + image in / text out; only Design Arena Website **1290** (OpenRouter) was found — no MMMU/VideoMME-class vision score published.
- No MRCR/RULER/GraphWalks retrieval score; the 500K window is documented but retrieval at depth is unverified. The ≥200K tier reprices the whole request to $4/$12.

### Normalized scores (1–100)

- **Tool use: 86/100.** GDPval-AA 1643–1753 Elo, AA Agentic Index 53.4%, Tau3 Banking 50.7%, APEX-Agents 57.5%, TB2.1 (Vals) 78.3%; capped by Terminal-Bench 3.0 26.5%, OSWorld 58% and no MCP-Atlas/Claw-Eval.
- **Reasoning: 89/100.** GPQA Diamond 94.9%/94.7% (outlier retired), AA-HLE 42.9%, AA-LCR 80.3%, MMLU-Pro 89.4%, AA Intelligence Index 44.3%; capped by CritPt 17.1% and ARC-AGI-2 67.1%.
- **Context window: 88/100.** 500K input in the 85–94 band, held below the top by no published output cap, no depth-retrieval measurement, and the whole-request ≥200K repricing.
- **Multimodal: 65/100.** Text + image in, text out; only Design Arena 1290 published, no MMMU/VideoMME-class score.
- **Coding: 88/100.** LiveCodeBench (Vals) 88.2%, AA Coding Index 76.8%, DeepSWE 65.9%, SciCode 56.5%, CursorBench 3.2 70.8%; the 95.6% Vals SWE-bench figure is high-harness-specific and taken with caution.
- **Cost efficiency: 78/100.** $2/$6 with $0.50 cached input between the ~88 and ~60 anchors; docked for the whole-request 200K repricing and the 2× Priority lane.
- **Overall Score: 83/100.** (86 + 89 + 88 + 65 + 88) / 5 = 83.2 → **83**. Best fit: long-running knowledge-work and product-building agents where GDPval-AA-grade output matters more than peak SWE-bench coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (xAI Grok 4.6 launch post/docs, BenchLM `grok-4-6` — 40 rows —, Artificial Analysis, Vals AI, ARC Prize, Epoch AI, RankLLMs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
