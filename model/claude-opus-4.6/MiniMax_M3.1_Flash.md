# Claude Opus 4.6 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's February-2026 model — the first Claude with a **native 1M context** and the launch vehicle for the "50%-time-horizon ≈ 14.5 hours" METR claim; it is also the model whose Vending-Bench 2 run left a "$8,017.59 final balance" and whose BrowseComp multi-agent configuration (86.8%) edged the single-agent leader. It is now **legacy**: "Active (legacy)", retirement "Not sooner than February 5, 2027", and the docs advise migrating to Claude Opus 5.5.
- **Provider / access:** Claude API `claude-opus-4-6`; AWS Bedrock `anthropic.claude-opus-4-6-v1`; Google Cloud and Microsoft Foundry `claude-opus-4-6`; Claude Platform on AWS `claude-opus-4-6`; OpenRouter `anthropic/claude-opus-4.6` (canonical `anthropic/claude-4.6-opus-20260205`, + `:batch`); OpenCode Zen `opencode/claude-opus-4-6` (`https://opencode.ai/inference/anthropic/v1/messages`).
- **Release / knowledge:** released **2026-02-05**; status "Active (legacy)"; retirement "Not sooner than February 5, 2027". Reliable knowledge cutoff **May 2025**; training-data cutoff **Aug 2025**.
- **IDs:** `claude-opus-4-6` (Claude API), `anthropic.claude-opus-4-6-v1` (Bedrock), `anthropic/claude-opus-4.6` (OpenRouter), `opencode/claude-opus-4-6` (Zen).
- **Context window:** **1,000,000 tokens**, **128,000 max output** (300K on Batch via `output-300k-2026-03-24`).
- **Modalities:** "Text and images → text". Thinking: **"Adaptive (extended deprecated)"**, effort levels low / medium / **high (default)** / max.
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$5**, output **$25**; 5-minute cache write **$6.25**, 1-hour cache write **$10**, cache read **$0.50**; Batch **$2.50 / $12.50**; **no fast mode** (fast mode covers Opus 5.5/5/4.8 only); US-only inference is a 1.1× multiplier. Tooling costs: tool-use system prompt 497 tokens (auto/none) / 589 (any, tool), bash +244, text_editor +745, web search $10/1,000 searches, code execution $0.05/hr over 1,550 free hours.
- **Architecture:** proprietary, closed weights; parameter count not disclosed.

### Raw benchmarks found

> Anthropic's system-card numbers are marked "vendor" (adaptive thinking, max effort, average of 5 trials); Artificial Analysis (two variants), Vals AI, the official swebench.com leaderboard and the BenchLM ledger are independent.

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** at max effort ("Claude Opus 4.6 achieved a score of 65.4% with max effort"; 55.1% at low, 61.1% at medium) — no Terminal-Bench 2.1 or 4.0 row exists for this model on the official board
- Tau2-bench: Retail **91.9%** / Telecom **99.3%** (vendor) / **84.80%** (AA, non-reasoning) / **92.11%** (AA, adaptive)
- MCP-Atlas: **59.5%** (max) / **62.7%** (high) (vendor) / 59.5% (via BenchLM)
- BrowseComp: **86.8%** accuracy (multi-agent, "edging out the top-performing single-agent configuration by 2.8%") / ~84% single-agent / 83.7% (via BenchLM)
- DeepSearchQA: **F1 92.5%** (vendor; best single-agent 91.3%) / 73.7% (via BenchLM — a different metric)
- OSWorld-Verified **72.7%** (vendor) / 74% (via BenchLM); JobBench 36.7%; AndroidWorld 62.0%; Claw-Eval **70.4%** (via BenchLM)
- CyberGym **66%** pass@1 (vendor) / 66.6% (via BenchLM); Vending-Bench 2 "final balance of $8,017.59" (vendor)
- GDPval-AA "by around 144 Elo points" over GPT-5.2 (vendor); AutomationBench: **not published** for 4.6
- Toolathlon / τ³-banking / MCP-Atlas (independent): **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.31%** (vendor, "averaged over 5 trials") / **89.60%** (AA, adaptive) / **84.04%** (AA, non-reasoning) / 89.2% (via BenchLM)
- HLE: **53.0%** with tools (vendor, revised from 53.1%) / **39.94%** (AA adaptive) / **19.09%** (AA non-reasoning) / 40% (BenchLM)
- AIME 2025: **99.79%** without tools (vendor, with an explicit contamination caveat) / 99.8% (via BenchLM)
- ARC-AGI (system card, 120k thinking tokens, High effort): ARC-AGI-1 **94.00%**, ARC-AGI-2 **69.17%** (ARC Prize private) / 93.00% and 68.8% (via BenchLM, ARC Prize verified)
- MMMLU **91.05%** (vendor); MMLU-Pro 89.1% (via BenchLM); SuperGPQA 95% (via BenchLM)
- FrontierMath v2: Tiers 1–3 **65.965%**, Tier 4 **26.829%** (Epoch AI, via BenchLM)
- MRCR v2 1M **78.3** (256K 91.9); GraphWalks BFS 1M F1 **41.2** (vendor)
- Omniscience: index 2.37 / accuracy 45.78% / hallucination 80.08% (AA, non-reasoning); 13.67 / 46.98% / 62.84% (AA, adaptive)

Coding:

- SWE-bench Verified: **80.8%** (vendor) / **75.6%** (official swebench.com, mini-SWE-agent 2.0.0, run `20260217_mini-v2.0.0_claude-4-6-opus`) / 80.8% (via BenchLM)
- SWE-bench Pro **53.4%**, SWE-Rebench 65.3%, SWE-bench Multilingual **72.0%** (swebench.com), SWE-bench Verified (mini-swe-agent-v2) 75.6% (via BenchLM)
- LiveCodeBench Pro **70.7%** (via BenchLM); FrontierCode 1.1 Main **26.9%** (via BenchLM); Vibe Code Bench v1.1 **57.57%** (Vals, OpenHands, #52) / 53.50% for the thinking variant
- Terminal-Bench 2.0 65.4%; Terminal-Bench-Hard 48.48% (AA non-reasoning) / 46.21% (AA adaptive); no DeepSWE, no FrontierSWE, no CursorBench

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 80/100.** Solid agentic profile for a 2026-Q1 model — Terminal-Bench 2.0 65.4% (max effort) / 55.1% (low) / 61.1% (medium), tau2-bench Retail 91.9% / Telecom 99.3%, MCP-Atlas 59.5–62.7%, BrowseComp 86.8% (multi-agent) / ~84% single, OSWorld-Verified 72.7%, Claw-Eval 70.4%, CyberGym 66%, DeepSearchQA F1 92.5%, JobBench 36.7%. Capped by the rubric's anchors (TB2.1 ~88%+ → not published at all; tau3 ~50%+ → not published; GDPval ~1750+ → "+144 Elo over GPT-5.2" only), by Terminal-Bench-Hard at 46–48%, and by JobBench 36.7%.
- **Reasoning: 78/100.** GPQA Diamond 91.31% (vendor, 5 trials), AIME 2025 99.79% (with contamination caveat), ARC-AGI-1 94.00%, MMMLU 91.05%, MMLU-Pro 89.1%, FrontierMath v2 65.965% (T1–3), MRCR 1M 78.3, IFBench 53.13% (AA adaptive). Capped by the AA Intelligence Index of **32\*** (adaptive) / 26\* (non-reasoning) — an *estimate*, not a measurement — HLE 39.94% (adaptive) / 19.09% (non-reasoning), CritPt 12.57%, FrontierMath Tier 4 26.829%, and an Omniscience accuracy of 46.98% with a 62.84% hallucination rate.
- **Context window: 93/100.** 1M-token context (the family's first native 1M) with a 128,000 max output — the rubric's top tier on size, and Anthropic publishes the only long-context ladder of this era for 4.6: MRCR v2 91.9% at 256K and 78.3 at 1M, GraphWalks BFS F1 41.2 at 1M. Held at 93 because the 1M-band retrieval is mid-70s on MRCR and low-40s on GraphWalks, and no independent replication exists.
- **Multimodal: 68/100.** Image input with text out — the rubric's "+image in = 60–70" band — with MMMU-Pro 73.9% without tools / 77.3% with the image-cropping tool, CharXiv 68.5% / 77.4%, and OSWorld-Verified 72.7% for agentic screen use. No video, audio or PDF input is documented.
- **Coding: 72/100.** SWE-bench Verified 80.8% (vendor) / 75.6% (official swebench.com), SWE-bench Pro 53.4%, Multilingual 72.0%, LiveCodeBench Pro 70.7%, Vibe Code Bench 57.57%, FrontierCode 1.1 Main 26.9%, Terminal-Bench 2.0 65.4%. Capped by the absence of any DeepSWE, FrontierSWE or CursorBench figure, by Terminal-Bench 2.0 at 65.4% (the 2026-Q1 bar was lower, but the rubric's anchors are absolute), by FrontierCode 26.9%, and by SWE-bench Pro 53.4%.
- **Cost efficiency: 45/100.** The evaluated route — OpenCode Zen `opencode/claude-opus-4-6` — is billed at **$5.00 in / $25.00 out** per 1M, cache read $0.50, cache write $6.25, matching Anthropic's list price. The rubric's anchors run "~$3/$15 = ~60" and "~$10/$50 = ~30", placing $5/$25 in between; Batch halves it to $2.50/$12.50, there is no fast mode, and US-only inference costs 1.1×.
- **Overall Score: 78.2/100.** (80 + 78 + 93 + 68 + 72) / 5 = 78.2 — best-fit: the model that established the 1M-context and long-horizon-agent era (METR's ~14.5-hour 50% time horizon, BrowseComp 86.8% multi-agent, AIME 99.79%), but three generations of hard reasoning behind on Terminal-Bench (65.4% on the 2.0 benchmark) and on agentic coding (FrontierCode 26.9%) — at the same $5/$25 as Opus 4.8 and 4.7, which are strictly better.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **SWE-bench Verified — 80.8% (Anthropic) vs 75.6% (official swebench.com, mini-SWE-agent 2.0.0).** The official leaderboard's own run for this snapshot is the anchor; both are listed.
2. **HLE — 53.0% with tools (Anthropic) vs 39.94% (AA adaptive) vs 19.09% (AA non-reasoning) vs 40% (BenchLM).** Three different conditions; the tool-free AA adaptive value is used for scoring.
3. **GPQA — 91.31% (Anthropic, 5 trials) vs 89.60% (AA adaptive) vs 84.04% (AA non-reasoning) vs 89.2% (BenchLM).** Effort/condition differences; the vendor figure is quoted, the AA figures used for the cap.
4. **Terminal-Bench 2.0 65.4% vs AA's Terminal-Bench-Hard 48.48% / 46.21%.** Different benchmarks (2.0 vs Hard) — not a contradiction, but neither is a Terminal-Bench 2.1 or 4.0 number, and the official board has **no Opus 4.6 row** (it lists Opus 5.5 64.85% and Opus 4.8 23.64%).
5. **ARC-AGI — 94.00% / 69.17% (system card, 120k thinking tokens, High effort) vs 93.00% / 68.8% (ARC Prize verified, via BenchLM).** Rounding and token-budget differences.
6. **BrowseComp — 86.8% multi-agent (vendor) vs ~84% single-agent vs 83.7% (BenchLM).** The 86.8% is a multi-agent configuration, not a single-model number; the single-agent figure is used.
7. **DeepSearchQA — F1 92.5% (vendor) vs 73.7% (BenchLM).** Different metrics (F1 vs a task-level score).
8. **MMMLU 91.05% (Anthropic) vs MMLU-Pro 89.1% (BenchLM) vs 82% (a Qwen comparison table)** — different test sets; MMMLU is not MMLU-Pro.
9. **Index — AA 26\*/32\* are *estimates*** (no public API run), while OpenRouter embeds 31.9 for the adaptive variant; Anthropic publishes no index of its own.
10. **Lifecycle — Anthropic "Active (legacy)" vs Artificial Analysis "This model is deprecated."** The vendor's own status is recorded; the model is still sold on Zen and OpenRouter.
11. **Long-context pricing at launch** — the launch post quotes a premium "$10/$37.50" above 200K, while the current pricing page applies standard pricing across the full 1M window. The current price is used.
12. **AIME25 99.79%** carries Anthropic's own contamination caveat, and the community scene around it (the-decoder / Tao / Erdős threads) is about *this* model class — noted, not scored.

### Notes on identity

- `claude-opus-4-6` is a distinct model from `claude-opus-4.5`, `claude-opus-4.7` and `claude-opus-4.8` — separate ids, separate pricing tiers, and each generation publishes a comparison column against its predecessor.
- **Bedrock's id is `anthropic.claude-opus-4-6-v1`** (with the `-v1` suffix), unlike later generations.
- Effort levels (low/medium/high/max) are parameters; Anthropic's own evals ran at **max** while the API default is `high`, and the "extended" reasoning mode that 4.6 introduced is now deprecated.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model overview, pricing and effort docs, the Opus 4.6 system card and launch post (including the METR time-horizon, Vending-Bench and BrowseComp multi-agent claims); independent trackers Artificial Analysis (both the non-reasoning and adaptive variants), Vals AI (Vibe Code Bench), the official swebench.com leaderboard, the BenchLM evidence ledger, OpenRouter and OpenCode Zen catalogs, and the METR/Hacker News time-horizon coverage. Vendor-vs-independent conflicts — including the official SWE-bench run and the AA index being an estimate — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.6.md`, using the same headings.
